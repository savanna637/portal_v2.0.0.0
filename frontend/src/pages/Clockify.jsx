// import React, { useState, useEffect } from 'react';
// import Layout from './Layout';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Clockify = () => {
//   const [showWorkSpotDropdown, setShowWorkSpotDropdown] = useState(false);
//   const [holidayType, setHolidayType] = useState('');

//   useEffect(() => {
//     // Import Bootstrap JS dynamically
//     import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
//       // Initialize tooltips after Bootstrap is loaded
//       const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
//       tooltipTriggerList.map(function (tooltipTriggerEl) {
//         return new bootstrap.Tooltip(tooltipTriggerEl);
//       });
//     });

//     // Load external scripts
//     const script1 = document.createElement('script');
//     script1.src = "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/index.global.min.js";
//     script1.async = true;
    
//     const script2 = document.createElement('script');
//     script2.src = "static/js/clockify.js?v=1.63";
//     script2.async = true;
    
//     const script3 = document.createElement('script');
//     script3.src = "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/locales/hu.js";
//     script3.async = true;

//     document.body.appendChild(script1);
//     document.body.appendChild(script2);
//     document.body.appendChild(script3);

//     return () => {
//       document.body.removeChild(script1);
//       document.body.removeChild(script2);
//       document.body.removeChild(script3);
//     };
//   }, []);

//   return (
//     <Layout>
//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-header">
//               <div className="card-title">My Clockify</div>
//               <h6>Itt tölthetőek fel a clockify adatok (akár egyszerre több napra is)</h6>
//             </div>
//             <div className="card-body">
//               <div className="row g-4" style={{ marginTop: '20px' }}>
//                 {/* Add New Entries Card */}
//                 <div className="col-md-8">
//                   <div className="card clockify-card h-100">
//                     <div className="card-header bg-transparent border-0 pb-0">
//                       <h5 className="mb-1">Új Bejegyzések Hozzáadása</h5>
//                       <small className="text-muted">Clockify bejegyzések rögzítése, több napra is.</small>
//                     </div>
//                     <div className="card-body pt-3">
//                       <div className="mb-3">
//                         <button
//                           type="button"
//                           onClick={() => window.saveHolidaysToClockify && window.saveHolidaysToClockify()}
//                           className="btn btn-primary btn-lg btn-glow-primary w-100"
//                         >
//                           Havi Szabadságok Mentése
//                         </button>
//                       </div>

//                       {/* Dynamic content blocks */}
//                       <div id="days" className="mb-3"></div>
//                       <div id="projects" className="mb-3"></div>
//                       <div id="input-container" className="mb-4"></div>

//                       {/* Entry add/remove + save */}
//                       <div className="d-flex flex-wrap gap-2">
//                         <button
//                           type="button"
//                           onClick={() => window.addInput && window.addInput()}
//                           className="btn btn-success btn-lg btn-glow-success flex-fill"
//                         >
//                           + Clockify Bejegyzés Hozzáadása
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() => window.removeLastInput && window.removeLastInput()}
//                           className="btn btn-danger btn-lg btn-glow-danger flex-fill"
//                         >
//                           - Clockify Bejegyzés Eltávolítása
//                         </button>
//                       </div>

//                       <div className="mt-3">
//                         <button
//                           id="saveClockify"
//                           type="button"
//                           onClick={() => window.selectedDaysToClockify && window.selectedDaysToClockify()}
//                           className="btn btn-warning btn-lg btn-glow-warning w-100"
//                         >
//                           <i className="fas fa-save"></i> Mentés
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Reuse Saved Entries Card */}
//                 <div className="col-md-4">
//                   <div className="card clockify-card h-100">
//                     <div className="card-header bg-transparent border-0 pb-0">
//                       <h5 className="mb-1">Mentett Bejegyzések Újrahasználata</h5>
//                       <small className="text-muted">Válassz projektet és korábban mentett bejegyzést.</small>
//                     </div>
//                     <div className="card-body pt-3">
//                       <div className="mb-3">
//                         <label htmlFor="project-select" className="form-label fw-semibold">
//                           Válassz projektet:
//                         </label>
//                         <select id="project-select" className="project-select styled-select">
//                           {/* Dynamically filled with JS */}
//                         </select>
//                       </div>

//                       <div className="mb-3">
//                         <label htmlFor="saved-clockify-entries-select" className="form-label fw-semibold">
//                           Mentett bejegyzések:
//                         </label>
//                         <div className="d-flex align-items-center gap-2">
//                           <select id="saved-clockify-entries-select" className="styled-select">
//                             <option value="">-- Válassz bejegyzést --</option>
//                             {/* Dynamically filled with JS */}
//                           </select>
//                           <button
//                             className="btn btn-sm btn-outline-primary me-2"
//                             onClick={() => window.applySavedEntry && window.applySavedEntry()}
//                           >
//                             <i className="fas fa-plus"></i>
//                           </button>
//                           <button
//                             className="btn btn-sm btn-outline-danger"
//                             onClick={() => window.deleteSavedEntry && window.deleteSavedEntry()}
//                           >
//                             <i className="fas fa-trash-alt"></i>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div style={{ border: '#0056b3 solid', padding: '18px', marginTop: '18px' }}>
//                 <div className="row" id="select-all-container" style={{ padding: '20px' }}>
//                   <div className="col" id="select-all">
//                     <button data-label="Select All" className="btn btn-basic select-all-btn">
//                       <span className="spinner" style={{ display: 'none' }}></span>
//                       <span className="btn-label">Select All</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div id="multiple-day-select-container" style={{ width: '100%', padding: '20px' }} className="row">
//                   <div className="col" id="select-all-monday">
//                     <button
//                       data-day="monday"
//                       data-label="Select All: Monday"
//                       className="btn btn-basic select-all-btn select-all-day-btn"
//                     >
//                       <span className="spinner" style={{ display: 'none' }}></span>
//                       <span className="btn-label">Select All: Monday</span>
//                     </button>
//                   </div>
//                   <div className="col" id="select-all-tuesday">
//                     <button
//                       data-day="tuesday"
//                       data-label="Select All: Tuesday"
//                       className="btn btn-basic select-all-btn select-all-day-btn"
//                     >
//                       <span className="spinner" style={{ display: 'none' }}></span>
//                       <span className="btn-label">Select All: Tuesday</span>
//                     </button>
//                   </div>
//                   <div className="col" id="select-all-wednesday">
//                     <button
//                       data-day="wednesday"
//                       data-label="Select All: Wednesday"
//                       className="btn btn-basic select-all-btn select-all-day-btn"
//                     >
//                       <span className="spinner" style={{ display: 'none' }}></span>
//                       <span className="btn-label">Select All: Wednesday</span>
//                     </button>
//                   </div>
//                   <div className="col" id="select-all-thursday">
//                     <button
//                       data-day="thursday"
//                       data-label="Select All: Thursday"
//                       className="btn btn-basic select-all-btn select-all-day-btn"
//                     >
//                       <span className="spinner" style={{ display: 'none' }}></span>
//                       <span className="btn-label">Select All: Thursday</span>
//                     </button>
//                   </div>
//                   <div className="col" id="select-all-friday">
//                     <button
//                       data-day="friday"
//                       data-label="Select All: Friday"
//                       className="btn btn-basic select-all-btn select-all-day-btn"
//                     >
//                       <span className="spinner" style={{ display: 'none' }}></span>
//                       <span className="btn-label">Select All: Friday</span>
//                     </button>
//                   </div>
//                   <div className="col" id="select-all-saturday">
//                     <button
//                       data-day="saturday"
//                       data-label="Select All: Saturday"
//                       className="btn btn-basic select-all-btn select-all-day-btn"
//                     >
//                       <span className="spinner" style={{ display: 'none' }}></span>
//                       <span className="btn-label">Select All: Saturday</span>
//                     </button>
//                   </div>
//                   <div className="col" id="select-all-sunday">
//                     <button
//                       data-day="sunday"
//                       data-label="Select All: Sunday"
//                       className="btn btn-basic select-all-btn select-all-day-btn"
//                     >
//                       <span className="spinner" style={{ display: 'none' }}></span>
//                       <span className="btn-label">Select All: Sunday</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div id="calendar" className="sagemcom-beosztas-calendar"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div
//         id="toast-container"
//         style={{
//           position: 'fixed',
//           bottom: '20px',
//           right: '20px',
//           zIndex: 9999,
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '10px'
//         }}
//       ></div>

//       <input type="hidden" id="userId" value={sessionStorage.getItem('id') || ''} />
//       <input type="hidden" id="UserColor" value={sessionStorage.getItem('color') || ''} />
      
//       <style jsx>{`
//         /* Styles for the tiles and container */
//         .tiles-container {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//           gap: 16px;
//           margin-top: 20px;
//         }

//         .tile-day {
//           height: 3.5rem !important;
//         }

//         .tile {
//           width: 100%;
//           height: 8rem;
//           background-color: #dde7f1;
//           border: 1px solid #007bff;
//           border-radius: 8px;
//           padding: 12px;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//           font-size: x-small;
//           cursor: pointer;
//           transition: background-color 0.3s ease, border-color 0.3s ease;
//           border-radius: 10px;
//           padding: 10px;
//           margin-bottom: 8px;
//           box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
//           cursor: pointer;
//           transition: transform 0.1s;
//         }

//         .tile-header {
//           font-weight: bold;
//           margin-bottom: 10px;
//           color: #007bff;
//         }

//         .tile-content {
//           margin-bottom: 8px;
//         }

//         .checkbox-container {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-top: 10px;
//         }

//         .ClfyCheckbox {
//           margin-right: 8px;
//         }

//         .selected {
//           background-color: #9cc2e7;
//           border-color: #0056b3;
//         }

//         .unified-btn {
//           display: inline-block;
//           border: none;
//           border-radius: 10px;
//           padding: 12px 25px;
//           font-size: 1rem;
//           font-weight: 600;
//           color: #fff;
//           background-color: #841fef;
//           text-align: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//         }

//         .unified-btn:hover {
//           background-color: #7226ffa5;
//           box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
//         }

//         .unified-btn:active {
//           background-color: #6f21ffa5;
//           box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
//         }

//         .unified-btn:disabled {
//           background-color: #c0c0c0;
//           cursor: not-allowed;
//           box-shadow: none;
//         }

//         .week-table {
//           width: 100%;
//           border-collapse: separate;
//           border-spacing: 10px;
//           margin-bottom: 2rem;
//         }

//         .week-table th {
//           text-align: center;
//           padding: 8px;
//           background-color: #f0f4f8;
//           font-weight: bold;
//           border-radius: 8px;
//         }

//         .week-table td {
//           vertical-align: top;
//           align-items: center;
//           padding: 6px;
//           min-width: 120px;
//         }

//         .tile:hover {
//           transform: scale(1.02);
//         }

//         .tile-header {
//           font-weight: bold;
//           margin-bottom: 5px;
//         }

//         .checkbox-container {
//           margin-top: 10px;
//         }

//         .btn:hover {
//           background-color: #0056b3 !important;
//         }

//         .btn-basic {
//           background-color: #9cc2e7;
//         }

//         .btn-selected {
//           background-color: #2866a3;
//         }

//         .spinner {
//           border: 2px solid #f3f3f3;
//           border-top: 2px solid #007bff;
//           border-radius: 50%;
//           width: 14px;
//           height: 14px;
//           animation: spin 0.8s linear infinite;
//           display: inline-block;
//           vertical-align: middle;
//           margin-right: 6px;
//         }

//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }

//           100% {
//             transform: rotate(360deg);
//           }
//         }

//         .fc .fc-button-primary {
//           background-color: #6c757d;
//           border-color: #6c757d;
//           color: #fff;
//         }

//         .fc .fc-button-primary:hover {
//           background-color: #5a6268;
//           border-color: #545b62;
//           color: #fff;
//         }

//         .fc .fc-button-primary:disabled {
//           background-color: #c0c0c0;
//           border-color: #c0c0c0;
//           color: #666;
//         }

//         .styled-select:focus {
//           border-color: #2f80ed;
//           outline: none;
//           box-shadow: 0 0 0 2px rgba(47, 128, 237, 0.3);
//         }

//         /* Card look tuned to match your bright action UI */
//         .clockify-card {
//           border: 1px solid #e0e0e0;
//           border-radius: 16px;
//           background: #ffffff;
//           box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
//           transition: box-shadow 0.3s ease, transform 0.2s ease;
//         }

//         .clockify-card:hover {
//           box-shadow: 0 10px 32px rgba(0, 0, 0, 0.12);
//           transform: translateY(-2px);
//         }

//         /* Glowy button helpers */
//         .btn-glow-primary {
//           box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
//           transition: transform 0.15s ease, box-shadow 0.15s ease;
//         }

//         .btn-glow-success {
//           box-shadow: 0 4px 12px rgba(40, 167, 69, 0.4);
//           transition: transform 0.15s ease, box-shadow 0.15s ease;
//         }

//         .btn-glow-danger {
//           box-shadow: 0 4px 12px rgba(220, 53, 69, 0.4);
//           transition: transform 0.15s ease, box-shadow 0.15s ease;
//         }

//         .btn-glow-warning {
//           box-shadow: 0 4px 12px rgba(131, 70, 255, 0.4);
//           transition: transform 0.15s ease, box-shadow 0.15s ease;
//         }

//         .btn-glow-primary:hover,
//         .btn-glow-success:hover,
//         .btn-glow-danger:hover,
//         .btn-glow-warning:hover {
//           transform: translateY(-1px);
//           box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
//         }

//         /* Pretty selects */
//         .styled-select {
//           display: block;
//           width: 100%;
//           padding: 10px 14px;
//           font-size: 1rem;
//           border-radius: 8px;
//           border: 1px solid #ced4da;
//           background-color: #fff;
//           line-height: 1.4;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08) inset;
//           transition: border-color 0.2s ease, box-shadow 0.2s ease;
//           appearance: none;
//           background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 16 16' fill='%236c757d'%3E%3Cpath d='M3.2 5.5l4.8 4.9 4.8-4.9-1.1-1.1L8 8.1 4.3 4.4 3.2 5.5z'/%3E%3C/svg%3E");
//           background-repeat: no-repeat;
//           background-position: right 12px center;
//           background-size: 12px 12px;
//           padding-right: 36px;
//         }
//       `}</style>
//     </Layout>
//   );
// };

// export default Clockify;