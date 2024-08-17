"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface CategoryDoughnutChartProps {
  categories: CategoryCount[];
}

const CategoriesDoughnutChart = ({ categories }: CategoryDoughnutChartProps) => {
  const categoryNames = categories.map((category) => category.name);
  const categoryCounts = categories.map((category) => category.count);

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: categoryCounts,
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa', '#4caf50', '#ff9800'], 
      }
    ],
    labels: categoryNames
  }

  return (
    <Doughnut
      data={data}
      options={{
        cutout: '60%',
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem: any) {
                return `${tooltipItem.label}: ${tooltipItem.raw}`;
              }
            }
          }
        }
      }}
    />
  );
}

export default CategoriesDoughnutChart;
