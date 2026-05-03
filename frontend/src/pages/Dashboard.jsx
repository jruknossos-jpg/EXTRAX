import React from 'react';

const Dashboard = () => {
  const resourceInventory = {
    aether: 100,
    secrets: 50,
    wood: 200,
    fire: 30,
    water: 75,
  };

  const extractionRate = 10; // units per hour
  const subscriptionStatus = 'Active'; // can be 'Active' or 'Inactive'
  const aiAgentStatus = 'Online'; // can be 'Online' or 'Offline'
  const narrativeProgression = "Year 7000: The Ancient One has awakened, bringing forth change. The fate of the realms rests in the balance as resources dwindle and the old secrets resurface.";

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Resource Inventory</h2>
        <ul>
          <li>Aether: {resourceInventory.aether}</li>
          <li>Secrets: {resourceInventory.secrets}</li>
          <li>Wood: {resourceInventory.wood}</li>
          <li>Fire: {resourceInventory.fire}</li>
          <li>Water: {resourceInventory.water}</li>
        </ul>
      </div>
      <div>
        <h2>Extraction Rate</h2>
        <p>{extractionRate} units/hour</p>
      </div>
      <div>
        <h2>Subscription Status</h2>
        <p>{subscriptionStatus}</p>
      </div>
      <div>
        <h2>AI Agent Status</h2>
        <p>{aiAgentStatus}</p>
      </div>
      <div>
        <h2>Narrative Progression</h2>
        <p>{narrativeProgression}</p>
      </div>
    </div>
  );
};

export default Dashboard;
