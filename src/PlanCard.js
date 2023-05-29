import React from 'react';

function PlanCard({ plan, selectedPlan, onPlanSelection }) {
  const isSelected = selectedPlan.id === plan.id;

  const handleSelection = () => {
    if (!isSelected) {
      onPlanSelection(plan);
    }
  };

  return (
    <div
      className={`plan-card ${isSelected ? 'selected' : ''}`}
      onClick={handleSelection}
    >
      <h3>{plan.name}</h3>
      <p>Price: ${plan.price}</p>
      <p>Discount: {plan.discount}%</p>
    </div>
  );
}

export default PlanCard;
