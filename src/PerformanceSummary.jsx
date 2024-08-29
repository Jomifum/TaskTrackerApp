import React from "react";

const PerformanceSummary = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === "done").length;

  const performance = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="performance_summary">
      <h3>Performance Summary</h3>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Performance: {performance.toFixed(2)}%</p>
    </div>
  );
};

export default PerformanceSummary;
