import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_BLOG_ENDPOINT;

export const getPosts = async (categorySlug, regionSlug, themeSlug) => {
  let query;
  let variables = {};

  // Define the common fields to fetch
  const postFields = `
    author {
      bio
      name
      id
      photo {
        url
      }
    }
    createdAt
    slug
    title
    excerpt
    featuredImage {
      url
    }
    categories {
      name
      slug
    }
    regions {
      name
      slug
    }
    themes {
      name
      slug
    }
  `;

  // Determine the query based on the provided filters
  if (categorySlug && regionSlug && themeSlug) {
    // All three provided
    query = gql`
      query GetPostsByCategoryRegionAndTheme(
        $categorySlug: String!,
        $regionSlug: String!,
        $themeSlug: String!
      ) {
        postsConnection(
          where: {
            AND: [
              { categories_some: { slug: $categorySlug } },
              { regions_some: { slug: $regionSlug } },
              { themes_some: { slug: $themeSlug } }
            ]
          }
        ) {
          edges {
            node {
              ${postFields}
            }
          }
        }
      }
    `;
    variables = { categorySlug, regionSlug, themeSlug };
  } else if (categorySlug) {
    // Only category provided
    query = gql`
      query GetPostsByCategory($categorySlug: String!) {
        postsConnection(
          where: { categories_some: { slug: $categorySlug } }
        ) {
          edges {
            node {
              ${postFields}
            }
          }
        }
      }
    `;
    variables = { categorySlug };
  } else if (regionSlug) {
    // Only region provided
    query = gql`
      query GetPostsByRegion($regionSlug: String!) {
        postsConnection(
          where: { regions_some: { slug: $regionSlug } }
        ) {
          edges {
            node {
              ${postFields}
            }
          }
        }
      }
    `;
    variables = { regionSlug };
  } else if (themeSlug) {
    // Only theme provided
    query = gql`
      query GetPostsByTheme($themeSlug: String!) {
        postsConnection(
          where: { themes_some: { slug: $themeSlug } }
        ) {
          edges {
            node {
              ${postFields}
            }
          }
        }
      }
    `;
    variables = { themeSlug };
  } else {
    // No filters provided
    query = gql`
      query GetAllPosts {
        postsConnection {
          edges {
            node {
              ${postFields}
            }
          }
        }
      }
    `;
    // No variables needed if no filters are applied
  }

  try {
    const result = await request(graphqlAPI, query, variables);
    return result.postsConnection.edges;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
};
export const getRecentPosts = async () => {
  const query = gql`
    query GetRecentPosts {
      posts(orderBy: createdAt_ASC, last: 2) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    return result.posts;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

export const getSimilarPosts = async (categories, regions, slug) => {
  const query = gql`
    query GetSimilarPosts(
      $slug: String!
      $categories: [String!]
      $regions: [String!]
    ) {
      posts(
        where: {
          slug_not: $slug
          AND: {
            categories_some: { slug_in: $categories }
            regions_some: { slug_in: $regions }
          }
        }
        last: 2
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query, {
      categories,
      regions,
      slug,
    });
    return result.posts;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    return result.categories;
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};
export const getThemes = async () => {
  const query = gql`
    query GetThemes {
      themes {
        name
        slug
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    return result.themes;
  } catch (error) {
    console.error("Failed to fetch themes:", error);
    throw new Error("Failed to fetch themes");
  }
};

export const getRegions = async () => {
  const query = gql`
    query GetRegions($first: Int!, $skip: Int!) {
      regions(first: $first, skip: $skip) {
        name
        slug
      }
    }
  `;

  let allRegions = [];
  let skip = 0;
  const first = 10; // Adjust based on how many items you want to fetch at once

  try {
    let hasMore = true;
    while (hasMore) {
      const result = await request(graphqlAPI, query, { first, skip });
      allRegions = [...allRegions, ...result.regions];

      if (result.regions.length < first) {
        hasMore = false;
      } else {
        skip += first;
      }
    }
    return allRegions;
  } catch (error) {
    console.error("Failed to fetch regions:", error);
    throw new Error("Failed to fetch regions");
  }
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        regions {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.post;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch post details");
  }
};

export const submitComment = async (obj) => {
  const result = await fetch("/api/comment", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.comments;
  } catch (error) {
    throw new Error("Failed to fetch comments");
  }
};
