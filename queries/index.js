import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_BLOG_ENDPOINT;

export const getPosts = async (categorySlug, regionSlug) => {
  let query;
  let variables = {};

  // Building the query based on categorySlug and regionSlug
  if (categorySlug && regionSlug) {
    // Both category and region provided
    query = gql`
      query GetPostsByCategoryAndRegion(
        $categorySlug: String!
        $regionSlug: String!
      ) {
        postsConnection(
          where: {
            AND: [
              { categories_some: { slug: $categorySlug } }
              { regions_some: { slug: $regionSlug } }
            ]
          }
        ) {
          edges {
            node {
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
            }
          }
        }
      }
    `;
    variables = { categorySlug, regionSlug };
  } else if (categorySlug) {
    // Only category provided
    query = gql`
      query GetPostsByCategory($categorySlug: String!) {
        postsConnection(where: { categories_some: { slug: $categorySlug } }) {
          edges {
            node {
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
        postsConnection(where: { regions_some: { slug: $regionSlug } }) {
          edges {
            node {
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
              regions {
                name
                slug
              }
            }
          }
        }
      }
    `;
    variables = { regionSlug };
  } else {
    // Neither category nor region provided
    query = gql`
      query GetAllPosts {
        postsConnection {
          edges {
            node {
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
            }
          }
        }
      }
    `;
  }

  try {
    const result = await request(graphqlAPI, query, variables);
    return result.postsConnection.edges;
  } catch (error) {
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

export const getRegions = async () => {
  const query = gql`
    query GetRegions {
      regions {
        name
        slug
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    return result.regions;
  } catch (error) {
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
