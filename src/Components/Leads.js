import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Header from './Header';
const Leads = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const leadData = [
    { name: 'John Doe', email: 'john.doe@example.com', month: 'Jan', source: 'Website', leads: 12, status: 'Converted' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', month: 'Feb', source: 'Social Media', leads: 19, status: 'In Progress' },
    { name: 'Alice Brown', email: 'alice.brown@example.com', month: 'Mar', source: 'Referral', leads: 15, status: 'Converted' },
    { name: 'Bob White', email: 'bob.white@example.com', month: 'Apr', source: 'Website', leads: 17, status: 'Lost' },
    { name: 'Charlie Black', email: 'charlie.black@example.com', month: 'May', source: 'Social Media', leads: 14, status: 'In Progress' },
  ];
  
  const handleLeadClick = (lead) => {
    setSelectedLead(lead);
    setShowModal(true);
  };

  return (
    <>
    <Header />
    <div className="container">
      <h2>Leads</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Lead Name</th>
            <th>Email</th>
            <th>Month</th>
            <th>Source</th>
            <th>Leads</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leadData.map((lead, index) => (
            <tr key={index} onClick={() => handleLeadClick(lead)}>
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

      {selectedLead && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Lead Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Name:</strong> {selectedLead.name}</p>
            <p><strong>Email:</strong> {selectedLead.email}</p>
            <p><strong>Status:</strong> {selectedLead.status}</p>
            <p><strong>Source:</strong> {selectedLead.source}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
    </>
    
  );
};

export default Leads;
