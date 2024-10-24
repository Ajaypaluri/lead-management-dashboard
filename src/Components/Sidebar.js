// import React from 'react';
// import { Link } from "react-router-dom";
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const Sidebar = () => {
//   return (
//     <div className="d-flex flex-column vh-100 bg-light p-3 sidebar">
//       {/* EzyMetrics Logo and Title */}
//       <div className="d-flex align-items-center mb-4">
//         <img 
//           src="/lead-management-dashboard/public/UI.png" // Update the path to your logo
//           alt="Logo" 
//           className="me-2" 
//           style={{ width: '40px', height: '40px' }} 
//         />
//         <h4 className="mb-0">EzyMetrics</h4>
//       </div>

//       {/* Navigation Links */}
//       <ul className="nav flex-column">
//         <li className="nav-item mb-2">
//           <Link to="/" className="nav-link text-dark" style={{ color: '#007bff', fontWeight: 'bold' }}>
//             <i className="bi bi-speedometer2 me-2"></i> Dashboard
//           </Link>
//         </li>
//         <li className="nav-item mb-2">
//           <Link to="/leads" className="nav-link text-dark">
//             <i className="bi bi-person-lines-fill me-2"></i> Leads
//           </Link>
//         </li>
//         <li className="nav-item mb-2">
//           <Link to="/analytics" className="nav-link text-dark">
//             <i className="bi bi-bar-chart-fill me-2"></i> Analytics
//           </Link>
//         </li>
//         <li className="nav-item mb-2">
//           <Link to="/reports" className="nav-link text-dark">
//             <i className="bi bi-file-earmark-bar-graph-fill me-2"></i> Reports
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
  return (
    // <div className="d-flex flex-column vh-100  text-white p-3 sidebar" style={{ backgroundColor: '#001f3f' }}>
    //   {/* EzyMetrics Logo and Title */}
    //   <div className="d-flex align-items-center mb-4">
    //     <img 
    //       src="/lead-management-dashboard/public/UI.png" // Update the path to your logo
    //       alt="Logo" 
    //       className="me-2" 
    //       style={{ width: '40px', height: '40px' }} 
    //     />
    //     <h4 className="mb-0 fw-bold">EzyMetrics</h4> {/* Make title bold */}
    //   </div>
    <div className="d-flex flex-column vh-100  text-white p-3 sidebar" style={{ backgroundColor: '#001f3f' }}>
  {/* EzyMetrics Logo and Title */}
  <div className="d-flex align-items-center mb-4">
    <img 
      src={`${process.env.PUBLIC_URL}/UI.png`} // Correct path for the public folder
      alt="Logo" 
      className="me-2" 
      style={{ width: '40px', height: '40px' }} 
    />
    <h4 className="mb-0 fw-bold">EzyMetrics</h4>
  </div>


      {/* Navigation Links */}
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/" className="nav-link text-white fw-bold">
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/leads" className="nav-link text-white">
            <i className="bi bi-person-lines-fill me-2"></i> Leads
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/analytics" className="nav-link text-white">
            <i className="bi bi-bar-chart-fill me-2"></i> Analytics
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/reports" className="nav-link text-white">
            <i className="bi bi-file-earmark-bar-graph-fill me-2"></i> Reports
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
