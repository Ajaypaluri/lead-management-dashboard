import React from 'react';

const Header = () => {
  return (
    <header className="header d-flex align-items-center justify-content-between p-3 bg-light shadow-sm">
      <div className="welcome-message h5 mb-0">Welcome, EzyMetrics!</div>
      
      <div className="search-bar position-relative">
        <input 
          type="text" 
          placeholder="Search..." 
          className="form-control"
          style={{ paddingLeft: '2.5rem' }} // Leave space for the icon
        />
        <i className="bi bi-search position-absolute top-50 translate-middle-y" style={{ left: '10px' }}></i>
      </div>

      <div className="header-icons d-flex align-items-center">
        <i className="bi bi-person-circle me-3" style={{ fontSize: '1.5rem' }}></i>
        <i className="bi bi-bell me-3" style={{ fontSize: '1.5rem' }}></i>
      </div>
    </header>
  );
}

export default Header;
