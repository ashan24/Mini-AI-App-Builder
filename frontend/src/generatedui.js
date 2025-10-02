import React from "react";
import "./App.css";

const GeneratedUI = ({ requirements, selectedRole, setSelectedRole }) => {
  return (
    <div className="generated-ui-container">
      {/* Navbar */}
      <div className="navbar">
        <span className="app-name">{requirements.appName}</span>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          {Object.keys(requirements.roles).map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      {/* Features */}
      <div className="features">
        {selectedRole &&
          Object.entries(requirements.roles[selectedRole].features).map(
            ([featureName, featureData]) => (
              <div key={featureName} className="feature-card padded-card">
                <h3>{featureName}</h3>

                {featureData.type === "form" && (
                  <form onSubmit={(e) => e.preventDefault()}>
                    {featureData.fields.map((f, idx) => (
                      <div key={idx} className="form-field">
                        <label>{f}</label>
                        <input
                          type="text"
                          placeholder={f}
                          className="medium-input"
                        />
                      </div>
                    ))}
                    <button type="button" className="save-btn">
                      {featureData.buttonText}
                    </button>
                  </form>
                )}

                {featureData.type === "table" && (
                  <table className="table">
                    <thead>
                      <tr>
                        {featureData.fields.map((f, idx) => (
                          <th key={idx}>{f}</th>
                        ))}
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {featureData.entries?.map((entry, i) => (
                        <tr key={i}>
                          {featureData.fields.map((f, idx) => (
                            <td key={idx}>{entry[f]}</td>
                          ))}
                          <td>
                            <button className="edit-btn">Edit</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default GeneratedUI;
