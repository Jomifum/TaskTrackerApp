import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = ({ tasks }) => {
  const statusCount = {
    todo: tasks.filter((task) => task.status === 'todo').length,
    doing: tasks.filter((task) => task.status === 'doing').length,
    done: tasks.filter((task) => task.status === 'done').length
  };

  const data = {
    labels: ['To Do', 'Doing', 'Done'],
    datasets: [
      {
        label: 'Number of Tasks',
        data: [statusCount.todo, statusCount.doing, statusCount.done],
        backgroundColor: ['#4bc0c0', '#ff6384', '#ffcd56'],
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Bar data={data} options={{ responsive: true }} />
    </div>
  );
};

export default Dashboard;
