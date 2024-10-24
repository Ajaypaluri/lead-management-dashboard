import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import Header from './Header';

const Analytics = () => {
  const leadData = [
    { name: 'John Doe', email: 'john.doe@example.com', month: 'Jan', source: 'Website', leads: 12, status: 'Completed' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', month: 'Feb', source: 'Social Media', leads: 19, status: 'In Progress' },
    { name: 'Alice Brown', email: 'alice.brown@example.com', month: 'Mar', source: 'Referral', leads: 15, status: 'Completed' },
    { name: 'Bob White', email: 'bob.white@example.com', month: 'Apr', source: 'Website', leads: 17, status: 'On Hold' },
    { name: 'Charlie Black', email: 'charlie.black@example.com', month: 'May', source: 'Social Media', leads: 14, status: 'In Progress' },
  ];

  // State to manage filter for Pie Chart (Source or Status)
  const [pieChartFilter, setPieChartFilter] = useState('Source');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Aggregate data for Pie Chart based on the selected filter (Source or Status)
  const pieData = pieChartFilter === 'Source'
    ? leadData.reduce((acc, lead) => {
        acc[lead.source] = (acc[lead.source] || 0) + lead.leads;
        return acc;
      }, {})
    : leadData.reduce((acc, lead) => {
        acc[lead.status] = (acc[lead.status] || 0) + lead.leads;
        return acc;
      }, {});

  // Pie chart configuration
  const pieChartData = {
    labels: Object.keys(pieData), // Unique sources or statuses
    datasets: [{
      data: Object.values(pieData), // Aggregated lead counts
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] // Colors for each slice
    }]
  };

  // Filter the data for the Bar Chart based on the selected status
  const barFilteredData = selectedStatus === 'All'
    ? leadData
    : leadData.filter(lead => lead.status === selectedStatus);

  // Bar chart data (Monthly Performance)
  const barData = {
    labels: barFilteredData.map(item => item.month), // Unique months
    datasets: [{
      label: 'Leads',
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#FFCE56'],
      data: barFilteredData.map(item => item.leads)
    }]
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2>Analytics</h2>

        {/* Pie Chart Filter: Choose between Source and Status */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Pie Chart Filter:</label>
            <select 
              value={pieChartFilter} 
              onChange={(e) => setPieChartFilter(e.target.value)} 
              className="form-control"
            >
              <option value="Source">Source</option>
              <option value="Status">Status</option>
            </select>
          </div>

          {/* Status Filter for Bar Chart */}
          <div className="col-md-6">
            <label>Status:</label>
            <select 
              value={selectedStatus} 
              onChange={(e) => setSelectedStatus(e.target.value)} 
              className="form-control"
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>
        </div>

        {/* Pie Chart and Bar Chart */}
        <div className="row">
          {/* Pie Chart: Based on Source or Status */}
          <div className="col-md-6">
            <h3>{pieChartFilter === 'Source' ? 'Lead Source Distribution' : 'Lead Status Distribution'}</h3>
            <Pie data={pieChartData} />
          </div>
          {/* Bar Chart: Monthly Performance */}
          <div className="col-md-6">
            <h3>Monthly Performance</h3>
            <Bar data={barData} />
          </div>
        </div>

       
                
          </div>
        
      
    </>
  );
};

export default Analytics;
