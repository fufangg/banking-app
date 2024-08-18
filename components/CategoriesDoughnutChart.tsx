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
        backgroundColor: [ '#040072', '#0081A7', '#00AFB9', '#333745', '#F07167' ], 
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
