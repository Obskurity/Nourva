import React from 'react';

const ProgressBar = ({ goal, consumed }) => {
  // Calculate the progress percentage based on the consumed calories and the goal
  const progressPercentage = (consumed / goal) * 100;

  return (
    <div>
      <div>Progress: {progressPercentage}%</div>
      {/* Render the progress bar using CSS */}
      <div style={{ width: `${progressPercentage}%`, background: 'green' }} />
    </div>
  );
};

export default ProgressBar;
