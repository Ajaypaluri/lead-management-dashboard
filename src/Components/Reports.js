// import React from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import Header from './Header';

// const Reports = () => {
//   const leadData = [
//     { name: 'John Doe', email: 'john.doe@example.com', month: 'Jan', source: 'Website', leads: 12, status: 'Converted' },
//     { name: 'Jane Smith', email: 'jane.smith@example.com', month: 'Feb', source: 'Social Media', leads: 19, status: 'In Progress' },
//     { name: 'Alice Brown', email: 'alice.brown@example.com', month: 'Mar', source: 'Referral', leads: 15, status: 'Converted' },
//     { name: 'Bob White', email: 'bob.white@example.com', month: 'Apr', source: 'Website', leads: 17, status: 'Lost' },
//     { name: 'Charlie Black', email: 'charlie.black@example.com', month: 'May', source: 'Social Media', leads: 14, status: 'In Progress' },
//   ];
  
 

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.text('Lead Management Report', 14, 22);
//     doc.autoTable({
//       head: [['Lead Name', 'Email','Month','Source', 'Leads', 'Status']],
//       body: leadData.map(lead => [lead.name, lead.email, lead.month,lead.source,lead.leads,lead.status,]),
//       startY: 30,
//     });
//     doc.save('lead-management-report.pdf');
//   };

//   return (
//     <>
//     <Header />
//     <div className="container">
//       <h2>Reports</h2>
//       <button onClick={generatePDF} className="btn btn-success">
//         Generate PDF Report
//       </button>
//     </div>
//     </>
    
//   );
// };

// export default Reports;

// import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Header from './Header';
import { Pie, Bar } from 'react-chartjs-2';

const Reports = () => {
  const leadData = [
    { name: 'John Doe', email: 'john.doe@example.com', month: 'Jan', source: 'Website', leads: 12, status: 'Converted' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', month: 'Feb', source: 'Social Media', leads: 19, status: 'In Progress' },
    { name: 'Alice Brown', email: 'alice.brown@example.com', month: 'Mar', source: 'Referral', leads: 15, status: 'Converted' },
    { name: 'Bob White', email: 'bob.white@example.com', month: 'Apr', source: 'Website', leads: 17, status: 'Lost' },
    { name: 'Charlie Black', email: 'charlie.black@example.com', month: 'May', source: 'Social Media', leads: 14, status: 'In Progress' },
  ];

  // Pie chart data (ensure it's defined)
  const pieData = {
    labels: ['Website', 'Social Media', 'Referral'],
    datasets: [{
      data: [29, 33, 15],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }],
  };

  // Bar chart data (ensure it's defined)
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Leads',
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
      data: [12, 19, 15, 17, 14],
    }],
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Lead Management Report', 14, 22);
    doc.autoTable({
      head: [['Lead Name', 'Email', 'Month', 'Source', 'Leads', 'Status']],
      body: leadData.map(lead => [lead.name, lead.email, lead.month, lead.source, lead.leads, lead.status]),
      startY: 30,
    });

    // Pie Chart
    const pieCanvas = document.getElementById('pieChart');
    if (pieCanvas) {
      const pieImage = pieCanvas.toDataURL('image/png', 1.0);
      doc.addPage();
      doc.text('Lead Source Distribution', 14, 20);
      doc.addImage(pieImage, 'PNG', 15, 30, 180, 80);
    }

    // Bar Chart
    const barCanvas = document.getElementById('barChart');
    if (barCanvas) {
      const barImage = barCanvas.toDataURL('image/png', 1.0);
      doc.addPage();
      doc.text('Monthly Performance', 14, 20);
      doc.addImage(barImage, 'PNG', 15, 30, 180, 80);
    }

    doc.save('lead-management-report.pdf');
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>Reports</h2>
        <button onClick={generatePDF} className="btn btn-success">
          Generate PDF Report
        </button>

        <div className="row mt-4">
          <div className="col-md-6">
            <h3>Lead Source Distribution</h3>
            <Pie id="pieChart" data={pieData} />
          </div>
          <div className="col-md-6">
            <h3>Monthly Performance</h3>
            <Bar id="barChart" data={barData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
