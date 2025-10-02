import React, { useState } from "react";
import "./App.css";
import AppInput from "./appinput";
import GeneratedUI from "./generatedui";

function App() {
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handleSubmit = async () => {
    if (!description.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/requirements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });
      const data = await res.json();
      setRequirements(data);
      setSelectedRole(Object.keys(data.roles)[0] || "");
    } catch (err) {
      console.error(err);
      alert("Failed to generate requirements");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
     {!requirements && (
        
        <h1>Mini AI App Builder</h1>
      )}

      {!requirements && (
        
        <AppInput
          description={description}
          setDescription={setDescription}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      )}

      {requirements && (
        <GeneratedUI
          requirements={requirements}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
        />
      )}
    </div>
  );
}

export default App;
