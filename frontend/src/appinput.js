import React from "react";
import "./App.css";
const AppInput = ({ description, setDescription, handleSubmit, loading }) => (
    
  <div className="input-box">
     
    <textarea 
      placeholder="Describe your app (e.g., 'I want an app to manage student courses and grades...')"
      rows={4}
      value={description}
      onChange={(e) => setDescription(e.target.value)}

      
    />
    <button onClick={handleSubmit} disabled={loading}>
      {loading ? "Generating..." : "Generate UI"}
    </button>
  </div>
);

export default AppInput;
