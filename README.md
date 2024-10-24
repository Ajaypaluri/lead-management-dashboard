**EzyMetrics - Lead Management Dashboard**

Overview

EzyMetrics is a lead management dashboard designed to provide insights into lead generation, performance, and reporting. This project features a clean and responsive user interface, offering users easy access to various sections such as Dashboard, Leads, Analytics, and Reports.

The application is built using React.js with Bootstrap for styling and responsiveness, and Chart.js for data visualization.

**Features**

Dashboard: Displays key metrics such as total leads, monthly performance, and lead source distribution.
Leads: Manage and view detailed information about leads.
Analytics: Visual representation of lead data using pie charts (for source distribution) and bar charts (for monthly performance).
Reports: Generate PDF reports that include lead data and performance visualizations.


**Tech Stack**
```
React.js
Bootstrap 5
Chart.js (for charts)
react-chartjs-2 (wrapper for Chart.js in React)
jsPDF (for report generation)
Bootstrap Icons
```
Getting Started

Follow these steps to get the project up and running on your local machine.

Prerequisites

Make sure you have the following installed on your machine:

Node.js (v14.x or later)
npm (comes with Node.js) or Yarn as a package manager

Installation

**Clone the Repository**
```
git clone https://github.com/Ajaypaluri/lead-management-dashboard.git
cd lead-management-dashboard
```
Install Dependencies

Run the following command to install the necessary dependencies:

```
npm install
```
Or if you prefer Yarn:
```
yarn install
```
Install Chart.js, react-chartjs-2, and jsPDF

Since this project uses Chart.js for charts and jsPDF for generating PDF reports, make sure to install these dependencies:
```
npm install chart.js react-chartjs-2 jspdf jspdf-autotable
```
Or with Yarn:
```
yarn add chart.js react-chartjs-2 jspdf jspdf-autotable
```
Run the Project

To start the development server, run:
```
npm start
```
Or with Yarn:
```
yarn start
```
This will open the app in your default browser at http://localhost:3000.

Build the Project (for production)
To create an optimized production build, run:
```
npm run build
```
**Usage**

Sidebar: Use the sidebar to navigate between different sections (Dashboard, Leads, Analytics, Reports).
Charts: Visualize data with pie and bar charts in the Analytics section.
Report Generation: Head to the Reports section to generate and download PDF reports of lead data.

**Folder Structure**
```
lead-management-dashboard/
├── public/                 # Public folder for assets
│   └── UI.png              # Logo image
├── src/                    # Main source folder
│   ├── Components/         # Contains all React components
│   │   ├── Dashboard.js    # Dashboard component
│   │   ├── Leads.js        # Leads component
│   │   ├── Analytics.js    # Analytics component
│   │   ├── Reports.js      # Reports component
│   │   ├── Sidebar.js      # Sidebar component
│   │   └── Header.js       # Header component
│   ├── App.js              # Main App file
│   └── index.js            # Entry point for React
└── package.json            # Project configuration and dependencies
```

**Customization**

Charts: Charts in the Analytics section are powered by Chart.js. You can easily modify the datasets or configuration in the Analytics.js component.
Reports: Reports are generated using jsPDF in the Reports.js component. The data and layout can be adjusted based on your needs.

**Credits**

This project was developed collaboratively, bringing together front-end technologies and data visualization tools to create a smooth and functional user experience.

**Dependencies to Install**

Here are the key dependencies you need to install to make the project work:
```
react-chartjs-2: For rendering charts in React.
Chart.js: The charting library for creating pie and bar charts.
jsPDF: For generating PDF reports.
jspdf-autotable: For creating tables inside the generated PDF.
```
