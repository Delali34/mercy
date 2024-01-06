"use client";
import React, { useState, useEffect } from "react";
import { getAssessments } from "@/queries/index";

const AssessmentPage = () => {
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    getAssessments().then((data) => {
      setAssessments(data);
    });
  }, []);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  };

  const fileImageStyle = {
    maxWidth: "100px",
    margin: "0 auto 10px",
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Impact Assessments
      </h1>
      <div style={gridStyle}>
        {assessments.length > 0 ? (
          assessments.map((assessment, index) => (
            <div key={index} style={cardStyle}>
              <img
                src="/pngtree-file-icon-image_1128287.jpg" // Replace with your file image path
                alt="File"
                style={fileImageStyle}
              />
              <h2>{assessment.name}</h2>
              {assessment.file && assessment.file.url ? (
                <a
                  href={assessment.file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download File
                </a>
              ) : (
                <p>No file available</p>
              )}
            </div>
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            No assessments yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default AssessmentPage;
