import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const CalorieProgressBar = ({ goal, consumed }) => {
  // Calculate the progress percentage based on the consumed calories and the goal
  const progressPercentage = (consumed / goal) * 100;

  return (
    <div >
      <ProgressBar completed={75} maxCompleted={100} />
    </div>
  );
};

export default ProgressBar;
