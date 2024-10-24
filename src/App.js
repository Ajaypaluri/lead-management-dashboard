import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Leads from "./Components/Leads";
import Analytics from "./Components/Analytics";
import Reports from "./Components/Reports";
import './App.css';

import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register required elements, scales, and plugins
Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);


function App() {
  return (
    <Router>
      <div className="d-flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Main content */}
        <div className="content p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
