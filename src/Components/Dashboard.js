import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import Header from './Header';
// Register necessary components for Chart.js
Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const pieData = {
    labels: ['Website', 'Social Media', 'Referral'],
    datasets: [{
      data: [40, 30, 30],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Leads',
      backgroundColor: ['#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB'],
      data: [12, 19, 15, 17, 14]
    }]
  };

  const leadData = [
    { name: 'John Doe', email: 'john.doe@example.com', month: 'Jan', source: 'Website', leads: 12, status: 'Completed' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', month: 'Feb', source: 'Social Media', leads: 19, status: 'In Progress' },
  ];
  

  return (
  <div className="container-fluid">
  {/* Header - Visible in all components */}
  <Header />

  <div className="row mt-4">
    {/* Main content area (right side of sidebar if exists) */}
    <div className="col-md-10 offset-md-2">
      <div className="row">
        {/* Total Leads */}
        <div className="col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h3>Total Leads: 77</h3>
            </div>
          </div>
        </div>

        
        <div className="row">
            {/* Lead Source Distribution (Pie Chart) */}
            <div className="col-md-6 mb-3">
              <div className="card" style={{ height: '400px' }}>
                <div className="card-body">
                  <h3>Lead Source Distribution</h3>
                  <div style={{ height: '320px', width: '100%' }}>
                    <Pie data={pieData} />
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Performance (Bar Chart) */}
            <div className="col-md-6 mb-3">
              <div className="card" style={{ height: '400px' }}>
                <div className="card-body">
                  <h3>Monthly Performance</h3>
                  <div style={{ height: '320px', width: '100%' }}>
                    <Bar data={barData} />
                  </div>
                </div>
              </div>
            </div>
          </div>

  

        {/* Lead Management Table (full width) */}
        <div className="col-md-12 mb-3">
          <div className="card">
            <div className="card-body">
              <h3>Lead Management</h3>
              <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Month</th>
                <th>Source</th>
                <th>Leads</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leadData.map((lead, index) => (
                <tr key={index}>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.month}</td>
                  <td>{lead.source}</td>
                  <td>{lead.leads}</td>
                  <td>{lead.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
);
};

export default Dashboard;
