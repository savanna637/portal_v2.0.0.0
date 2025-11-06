
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('pills-nstats');
  const [showWorkSpotDropdown, setShowWorkSpotDropdown] = useState(false);
  const [holidayType, setHolidayType] = useState('');
  const [holidayInfo, setHolidayInfo] = useState({ show: false, message: '' });

  useEffect(() => {
    // Initialize tooltips
    // const initTooltips = () => {
    //   const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
    //   tooltipTriggerList.map(function (tooltipTriggerEl) {
    //     return new bootstrap.Tooltip(tooltipTriggerEl);
    //   });
    // };
    
    // if (typeof bootstrap !== 'undefined') {
    //   initTooltips();
    // }
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleWorkspotCheckboxChange = (e) => {
    setShowWorkSpotDropdown(e.target.checked);
  };

  const handleSpecialHolidaysFormChange = (e) => {
    const value = e.target.value;
    setHolidayType(value);
    
    if (value === 'apasagi') {
      setHolidayInfo({
        show: true,
        message: 'Apasági szabadság: 10 munkanap, amit legfeljebb két részletben vehet ki. Az első 5 nap 100%-os, a következő 5 nap 40%-os kompenzációval.'
      });
    } else if (value === 'rendkivuli') {
      setHolidayInfo({
        show: true,
        message: 'Rendkívüli szabadság: közeli rokon halála esetén 2 nap szabadság vehető ki.'
      });
    } else {
      setHolidayInfo({ show: false, message: '' });
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">ADMIN OLDAL</div>
              <h6>Itt kezelhetőek a beosztások, szabadságok, valamint egyéb adminisztrációs teendők.</h6>
            </div>
            <div className="card-body">
              <ul className="nav nav-pills nav-secondary" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'pills-nstats' ? 'active' : ''}`}
                    onClick={() => handleTabChange('pills-nstats')}
                  >
                    Beosztás módosítása
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'pills-vstats' ? 'active' : ''}`}
                    onClick={() => handleTabChange('pills-vstats')}
                  >
                    Szabadságok módosítása
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'pills-ltats' ? 'active' : ''}`}
                    onClick={() => handleTabChange('pills-ltats')}
                  >
                    Speciális szabadságok kezelése
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'pills-stats' ? 'active' : ''}`}
                    onClick={() => handleTabChange('pills-stats')}
                  >
                    Homeoffice/Iroda besoztások
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'pills-ktats' ? 'active' : ''}`}
                    onClick={() => handleTabChange('pills-ktats')}
                  >
                    Szabadságok áttekintése
                  </button>
                </li>
              </ul>

              <div className="tab-content mt-2 mb-3" id="pills-tabContent">
                {/* Beosztás módosítása tab */}
                <div className={`tab-pane fade ${activeTab === 'pills-nstats' ? 'show active' : ''}`} id="pills-nstats">
                  <div className="card card-stats">
                    <div className="card-body">
                      <h3 className="fw-normal mb-4">BEOSZTÁS MÓDOSÍTÁSA</h3>
                      <form className="delschedule">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check mb-3">
                              <input type="checkbox" className="form-check-input" id="simpleszabi" name="ss" required />
                              <label className="form-check-label" htmlFor="simpleszabi">
                                Szabadság kiírás
                              </label>
                            </div>
                            <div className="form-check mb-3">
                              <input type="checkbox" className="form-check-input" id="betegszabi" name="sl" required />
                              <label className="form-check-label" htmlFor="betegszabi">
                                Betegszabadság kiírás
                              </label>
                            </div>
                            <div className="form-check mb-3">
                              <input type="checkbox" className="form-check-input" id="simpledelete" name="sd" required />
                              <label className="form-check-label" htmlFor="simpledelete">
                                Törlés szabadság kiírás nélkül
                              </label>
                            </div>
                            <div className="form-check mb-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="workspot"
                                name="ws"
                                onChange={handleWorkspotCheckboxChange}
                                required
                              />
                              <label className="form-check-label" htmlFor="workspot">
                                Workspot módosítás
                              </label>
                            </div>
                            {showWorkSpotDropdown && (
                              <div className="col-md-6 mb-3" id="workspot-div">
                                <label htmlFor="workspot-dropdown" className="form-label">
                                  Workspot:
                                </label>
                                <select id="workspot-dropdown" className="form-select workspot-dropdown" name="workspot-dropdown">
                                  <option value="">Válaszd ki az új helyet</option>
                                  <option value="iroda">Iroda</option>
                                  <option value="homeoffice">Home office</option>
                                </select>
                              </div>
                            )}
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="changeStartHour" className="form-label">
                                Kezdés:
                              </label>
                              <input type="time" className="form-control" id="changeStartHour" name="changeStartHour" required />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="changeEndHour" className="form-label">
                                Befejezés:
                              </label>
                              <input type="time" className="form-control" id="changeEndHour" name="changeEndHour" required />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="nevDropdown" className="form-label">
                              Név:
                            </label>
                            <select id="nevDropdown" className="form-select nameDropdown">
                              <option value="">Felhasználó</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="yearDropdown" className="form-label">
                              Év:
                            </label>
                            <select id="yearDropdown" className="form-select yearDropdown" name="yearDropdown">
                              <option value="">Válassz évet</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="monthDropdown" className="form-label">
                              Hónap:
                            </label>
                            <select id="monthDropdown" className="form-select monthDropdown" name="monthDropdown">
                              <option value="">Válassz hónapot</option>
                            </select>
                          </div>
                        </div>

                        <div className="text-center">
                          <button id="saveschedule" type="button" style={{ display: 'none' }} className="btn btn-primary">
                            Mentés
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Szabadságok módosítása tab */}
                <div className={`tab-pane fade ${activeTab === 'pills-vstats' ? 'show active' : ''}`} id="pills-vstats">
                  <div className="card card-stats">
                    <div className="card-body">
                      <h3 className="fw-normal mb-4">SZABADSÁGOK MÓDOSÍTÁSA</h3>
                      <form className="delschedule">
                        <div className="form-check mb-4">
                          <input type="checkbox" className="form-check-input" id="deleteFholidays" name="hd" required />
                          <label className="form-check-label" htmlFor="deleteFholidays">
                            Törlés a szabadság táblából
                          </label>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="changeStartDate" className="form-label">
                              Új kezdő dátum:
                            </label>
                            <input type="date" className="form-control" id="changeStartDate" name="changeStartDate" required />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="changeEndDate" className="form-label">
                              Új végdátum:
                            </label>
                            <input type="date" className="form-control" id="changeEndDate" name="changeEndDate" required />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="yearDropdownHolidays" className="form-label">
                              Év:
                            </label>
                            <select id="yearDropdownHolidays" className="form-select yearDropdown" name="yearDropdownHolidays">
                              <option value="">Válassz évet</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="monthDropdownHolidays" className="form-label">
                              Hónap:
                            </label>
                            <select id="monthDropdownHolidays" className="form-select monthDropdown" name="monthDropdownHolidays">
                              <option value="">Válassz hónapot</option>
                            </select>
                          </div>
                        </div>

                        <div className="text-center">
                          <button id="saveHolidays" type="submit" className="btn btn-primary">
                            Mentés
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Speciális szabadságok kezelése tab */}
                <div className={`tab-pane fade ${activeTab === 'pills-ltats' ? 'show active' : ''}`} id="pills-ltats">
                  <div className="card card-stats">
                    <div className="card-body">
                      <h3 className="fw-normal mb-4">SPECIÁLIS SZABADSÁGOK KEZELÉSE</h3>
                      <form action="/handle_special_holidays" method="POST">
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="nevDropdownSpecial" className="form-label">
                              Név:
                            </label>
                            <select id="nevDropdownSpecial" name="nevDropdownSpecial" className="form-select nameDropdown" required>
                              <option value="">Válassz felhasználót</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6 mb-3">
                          <label className="form-label" style={{ marginTop: '15px' }}>
                            Típus:
                          </label>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="apasagi"
                              name="holidayType"
                              value="apasagi"
                              onChange={handleSpecialHolidaysFormChange}
                            />
                            <label className="form-check-label" htmlFor="apasagi">
                              Apasági szabadság
                            </label>
                            <span
                              className="info-icon"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Az apák a gyermek születése után 10 munkanap szabadságra jogosultak, amit kérésük szerint legfeljebb két részletben vehetnek ki. A munkaidő-kedvezmény örökbefogadás esetén is jár és mindkét szülőt megilleti. (Az apasági szabadság akkor is jár, ha a gyermek halva születik vagy elhalálozik.). Kompenzációt illetően a 146. § (4) pedig így szól: „A munkavállaló az apasági szabadság öt munkanapjára távolléti díjra, a hatodik munkanapjától a távolléti díj negyven százalékára jogosult.” Tehát az első öt napban a teljes munkabéred megkapod, a második öt napban csak a 40%-át."
                            >
                              &#9432;
                            </span>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="rendkivuli"
                              name="holidayType"
                              value="rendkivuli"
                              onChange={handleSpecialHolidaysFormChange}
                            />
                            <label className="form-check-label" htmlFor="rendkivuli">
                              Rendkívüli szabadság
                            </label>
                            <span
                              className="info-icon"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Közeli rokon (gyerek, szülő, nagyszülő, házastárs) halála után 2 nap rendkíüli szabadság vehető ki."
                            >
                              &#9432;
                            </span>
                          </div>
                        </div>

                        {holidayInfo.show && (
                          <div id="holidayInfo" className="alert alert-info">
                            {holidayInfo.message}
                          </div>
                        )}

                        <div id="specialHolidayDynamicContainer"></div>

                        <div className="text-center">
                          <button id="saveSpecialHoliday" type="submit" style={{ display: holidayType ? 'block' : 'none' }} className="btn btn-primary">
                            Mentés
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Homeoffice/Iroda tab */}
                <div className={`tab-pane fade ${activeTab === 'pills-stats' ? 'show active' : ''}`} id="pills-stats">
                  <div className="card card-stats">
                    <div className="card-body">
                      <h3 className="fw-normal mb-4">MUNKAVÉGZÉS HELYE</h3>
                      <form>
                        <div className="row mb-4">
                          <div className="col-md-6">
                            <label htmlFor="workLocationMonth" className="form-label">
                              Hónap: (aktuális évre vonatkozik)
                            </label>
                            <select id="workLocationMonth" className="form-select monthDropdown" name="workLocationMonth">
                              <option value="">Hónap</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="workLocationDay" className="form-label">
                              Nap:
                            </label>
                            <select id="workLocationDay" className="form-select" name="workLocationDay">
                              <option value="">Válassz napot</option>
                            </select>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="card">
                              <div className="card-header bg-primary text-white">
                                <h5 className="card-title mb-0">Irodában</h5>
                              </div>
                              <div className="card-body" id="officeList"></div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="card">
                              <div className="card-header bg-primary text-white">
                                <h5 className="card-title mb-0">Otthonról dolgozik</h5>
                              </div>
                              <div className="card-body" id="homeList"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Szabadságok áttekintése tab */}
                <div className={`tab-pane fade ${activeTab === 'pills-ktats' ? 'show active' : ''}`} id="pills-ktats">
                  <div className="card card-stats">
                    <div className="card-body">
                      <h3 className="fw-normal mb-4">SZABADSÁGOK ÁTTEKINTÉSE</h3>
                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="nevDropdownAttekintes" className="form-label">
                              Név:
                            </label>
                            <select id="nevDropdownAttekintes" className="form-select nameDropdown">
                              <option value="">Felhasználó</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="yearDropdownAttekintes" className="form-label">
                              Év:
                            </label>
                            <select id="yearDropdownAttekintes" className="form-select yearDropdown" name="yearDropdownAttekintes">
                              <option value="">Válassz évet</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="monthDropdownAttekintes" className="form-label">
                              Hónap:
                            </label>
                            <select id="monthDropdownAttekintes" className="form-select monthDropdown" name="monthDropdownAttekintes">
                              <option value="">Válassz hónapot</option>
                            </select>
                          </div>
                        </div>
                      </form>

                      <div className="mt-4">
                        <canvas id="szabadsagDiagram" width="400" height="200"></canvas>
                      </div>

                      <div className="mt-4">
                        <div className="card">
                          <div className="card-header bg-primary text-white">
                            <h5 className="card-title mb-0">Szabadság Kimutatás</h5>
                          </div>
                          <div className="card-body">
                            <div id="holidayStatisticsTable">
                              <div className="table-responsive">
                                <table className="table table-striped">
                                  <thead>
                                    <tr>
                                      <th>Felhasználó</th>
                                      <th>Kezdődátum</th>
                                      <th>Végdátum</th>
                                      <th>Napok száma</th>
                                      <th>Típus</th>
                                      <th>Jóváhagyta</th>
                                      <th>Jóváhagyás dátuma</th>
                                    </tr>
                                  </thead>
                                  <tbody id="holidayStatisticsBody">
                                    {/* Will be populated dynamically */}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div id="workdays"></div>
        </div>
        <div className="col-6">
          <div id="workhours"></div>
        </div>
        <div className="col-6">
          <div id="holidaytable"></div>
        </div>
      </div>
    </div>
  );
};

export default Admin;