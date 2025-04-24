import React, { useState } from "react";
import "./EditTable.css"; // We'll separate styling

const initialTasks = [
  "Onboarding Call",
  "Google Search Console Access",
  "Google Analytics Access",
  "Website Access",
  "Technical Audit",
  "Anchor Text and Semantic Analysis",
  "Competitor Analysis",
  "Anchor Text / URL Mapping",
  "Google Data Studio Report + Local Reporting Suite",
  "Site Level Optimization",
  "On Page Optimization",
  "Content Creation",
  "Content Publishing",
  "Premium Press Release",
  "Authority Niche Placements",
  "Review Management",
  "Index Links",
  "Video Recap",
];

const EditableTable = () => {
  const [data, setData] = useState(
    initialTasks.map((task) => ({
      task,
      status: "",
    }))
  );

  const handleChange = (index, field, value) => {
    const updated = [...data];
    updated[index][field] = value;
    setData(updated);
  };

  const handleSubmit = () => {
    console.log("✅ Data ready to POST to API:", JSON.stringify(data, null, 2));
    alert("Check console! Data is ready to send to API.");
  };

  return (
    <div className="container">
      <h2>MONTH 1 - Editable SEO Task Table</h2>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status / Notes (Editable)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.task}</td>
              <td>
                <input
                  type="text"
                  value={row.status}
                  onChange={(e) => handleChange(i, "status", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Submit (POST to API)</button>
    </div>
  );
};

export default EditableTable;
