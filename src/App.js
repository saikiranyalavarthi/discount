import React, { useState } from 'react';
import PlanCard from './PlanCard';
import './Ap.css'

const plans = [
  { id: 1, name: 'Basic', price: 10, discount: 0 },
  { id: 2, name: 'Standard', price: 20, discount: 10 },
  { id: 3, name: 'Premium', price: 30, discount: 20 },
];

function App() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="App">
      <h1>Choose a Plan</h1>
      <div className="plan-container">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            selectedPlan={selectedPlan}
            onPlanSelection={handlePlanSelection}
          />
        ))}
      </div>
      <div className="selected-plan">
        <h2>Selected Plan: {selectedPlan.name}</h2>
        <p>Price: ${selectedPlan.price}</p>
        <p>Discounted Price: ${selectedPlan.price - selectedPlan.discount}</p>
      </div>
    </div>
  );
}

export default App;
