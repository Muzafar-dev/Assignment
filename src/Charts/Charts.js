import React from 'react';
import Chart from 'react-apexcharts';

const ChartComponent = ({ data }) => {
  const chartOptions = {
    chart: {
      type: 'pie',
    },
    labels: ['Today', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
  };

  return (
    <div style={{ width: '1000px', height: '1000px' }}>
      <Chart options={chartOptions} series={data} type="pie" width="100%" height="100%" />
    </div>
  );
};

export default ChartComponent;
