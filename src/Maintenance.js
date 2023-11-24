import './Maintenance.css';
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom"; 

function Maintenance() {
  const [visible, setVisibleSection] = useState('section1');
  

  const showSection = (section) => {
    setVisibleSection(section);
  }

  const[RideData, setRideData] = useState([]);
  useEffect(() => {
    
    fetch('/api/rideinfo')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setRideData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const[StaffData, setStaffData] = useState([]);
  useEffect(() => {
    
    fetch('/api/maintenancestaff')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setStaffData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const[InactiveData, setInactiveData] = useState([]);
  useEffect(() => {
    
    fetch('/api/inactiveride')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setInactiveData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  const[BreakdownData, setBreakdownData] = useState([]);
  useEffect(() => {
    
    fetch('/api/monthlybreakdowns')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setBreakdownData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const[IssueLogData, setIssueLogData] = useState([]);
  useEffect(() => {
    
    fetch('/api/issuelog')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setIssueLogData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleupdateemppass = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/updateemppass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleupdateempwage = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/updateempwage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  const handleupdateridestat = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/updateridestat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const[InjuryReportData, setInjuryReportData] = useState([]);
  useEffect(() => {
    
    fetch('/api/injuryreport')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setInjuryReportData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("authenticatedM");
    localStorage.removeItem("nameM");
    navigate("/"); //Navigate back to main page
  };

  function GetEmpObj() {
    for (const obj of StaffData) {
      if (obj.first_name == localStorage.getItem("nameM")) {
        return (
          <tr key={obj.employee_id}>
          <td>{obj.first_name}</td>
          <td>{obj.last_name}</td>
          <td>{obj.user_tag}</td>
          <td>{obj.user_pass}</td>
          <td>{obj.email}</td>
          <td>{obj.home_address}</td>
          </tr>
        );
      }
    }
  }

  function GetEmpID() {
    for (const obj of StaffData) {
      if (obj.first_name == localStorage.getItem("nameM")) {
        return (
          <h3>Employee ID: {obj.employee_id}</h3>
        );
      }
    }
  }

  function GetEmpWage() {
    for (const obj of StaffData) {
      if (obj.first_name == localStorage.getItem("nameM")) {
        return (
          <tr key={obj.employee_id}>
          <td>{obj.hourly_pay}</td>
          <td>{obj.salary}</td>
          </tr>
        );
      }
    }
  }
  
  if (localStorage.getItem("authenticatedM") == false || localStorage.getItem("authenticatedM") == null) {
    console.log("Unsuccessful login");
    return <Navigate replace to={navigate(-1)} />;
  }
  else {
  return (
       <div className="App">
       <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Jomhuria&family=Josefin+Sans&family=Mitr:wght@200&display=swap" rel="stylesheet"></link>
      <ul className="nav-headers">
        <li className="nav-item"><u>DB Theme Park</u></li>
        <li className="nav-item" id='signout'>
          <button onClick={signOut}>Sign out</button>
          </li>
      </ul>
      {StaffData.map((employee) => (
        <div className="welcome-back-employee" key={employee.id}>
          Welcome back, {localStorage.getItem("nameM")}!
        </div>
        ))}
        <div className="visitortype">
          Maintenance
        </div>

        <div className="group">
          <div className="view">
            <div className="mainbox">
            <div className="menubox">
                        <div className="Menutxt">Menu</div>
            </div>
            <div className="optionbox">
              <button className="AccInfoButton" onClick={() => showSection('section1')}>
                Account Information
              </button>
              <button className="HazardRep"onClick={() => showSection('section2')}>
                Issue Log
              </button>
              <button className="RideBreakdowns"onClick={() => showSection('section3')}>
                Ride Information
              </button>
              <button className="InjuryReport"onClick={() => showSection('section4')}>
                Injury Report
              </button>
              
            
            </div>
            <div className="Menutxt">Menu</div>


            

            <div style={{ display: visible === 'section1' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Your Account Information</h2>
                  <GetEmpID />
                  <div class = "Account-Info">
                  <table>
                      <thead>
                      <tr>
                        <th>First Name </th>
                        <th>Last Name </th>
                        <th>Username </th>
                        <th>Password </th>
                        <th>Email </th>
                        <th>Address </th>
                      </tr>
                      </thead>
                      <tbody>
                        <GetEmpObj />
                      </tbody>
                  </table>
                  
                      <h2> Security Information
                       </h2>

                  <p><b>Do you want to change your password?</b></p>
                  <p><b> You must have a permit code from your supervisor for change security information!</b></p>
                  
                      <form id="UpdateAccPas" onSubmit={handleupdateemppass} method="post" action="/submit">
                          <p>
                              <label for="CurrentPassword ">Current Password:  </label>
                              <input type="text" id="CurrentPassword" name="CurrentPassword" min="6" max="20" required/>

                              <label for="Password ">New Password:  </label>
                              <input type="text" id="Password" name="Password" min="6" max="20" required/>
                              
                              <label for="PermitCode ">Permit Code:  </label>
                              <input type="int" id="PermitCode" name="PermitCode" min="4" max="4" required/>
  
                          </p>
                          <p>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      <table>
                      <thead>
                      <tr>
                        <th>Hourly wage</th>
                        <th>Annual salary</th>
                      </tr>
                      </thead>
                      <tbody>
                        <GetEmpWage />
                      </tbody>
                      </table>
                      <p><b>You can not change your hourly wage!</b></p>
                      <p><b>Only department supervisor having permit code for change security information!</b></p>
                      <form id="Updateempwage" onSubmit={handleupdateempwage} method="post" action="/submit">
                          <p> 
                            <label for="CurrentPassword ">Current Password:  </label>
                              <input type="text" id="CurrentPassword" name="CurrentPassword" min="6" max="20" required/>

                              <label for="Wage ">Update Hourly Wage:  </label>
                              <input type="int" id="Wage" name="Wage" min="1" max="2" required/>

                              <label for="PermitCode ">Permit Code:  </label>
                              <input type="int" id="PermitCode" name="PermitCode" min="4" max="4" required/>
                          </p>
                          <p>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                   </div>
                   
                  </div>
              </div>
            </div>

            <div style={{ display: visible === 'section2' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Issue Log</h2>
                <h3>Ride Breakdowns, Safety Inspection, Refurbishing</h3>

                <p> All information of all issue logs have been reported</p>
                <table>
                      <thead>
                      <tr>
                        <th>Log ID </th>
                        <th>Ride ID</th>
                        <th>Date Start</th>
                        <th>Date Fixed</th>
                        <th>Cost</th>
                        <th>Reason</th>
                        <th>Fixed by</th>
                        <th>Operation Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {IssueLogData.map((issue_log) => (
                        <tr key={issue_log.id}>
                        <td>{issue_log.LogIssueID}</td>
                        <td>{issue_log.IssueRideID}</td>
                        <td>{issue_log.DateStart}</td>
                        <td>{issue_log.DateFixed}</td>
                        <td>{issue_log.CostToFix}</td>
                        <td>{issue_log.Reason}</td>
                        <td>{issue_log.FixedBy}</td>
                        <td>{issue_log.OperatingStat}</td>
                        </tr>
                      ))}
                      </tbody>
                </table>

                 </div>
              </div>
              <div style={{ display: visible === 'section3' ? 'block' : 'none' }}>
                <div className="optiontextbox">
                <h2>Change Operation Status</h2>
                <form id="Updateridestat" onSubmit={handleupdateridestat} method="post" action="/submit">
                          <p> 
                            <label for="RideID ">Ride ID:  </label>
                            <input type="text" id="RideID" name="RideID" min="8" max="8" required/>

                            <label for="Status">Operation Status: </label>
                            <select id = "Status" name="Status" required>
                              <option value = "Active"> Active </option>
                              <option value = "Inactive"> Inactive </option>
                            </select>
                          </p>
                          <p>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                  <h2>Ride Information</h2>
                  
                  <table>
                      <thead>
                      <tr>
                        <th>Zone code</th>
                        <th>Ride ID</th>
                        <th>Ride Name</th>
                        <th>Description</th>
                        <th>Safety Rules</th>
                        <th>Daily Riders</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Accessibility</th>
                        
                      </tr>
                      </thead>
                      <tbody>
                      {RideData.map((ride_info) => (
                      <tr key={ride_info.id}>
                        <td>{ride_info.Zone_code}</td>
                        <td>{ride_info.RideID}</td>
                        <td>{ride_info.RideName}</td>
                        <td>{ride_info.Description}</td>
                        <td>{ride_info.SafetyRules}</td>
                        <td>{ride_info.NumDailyRiders}</td>
                        <td>{ride_info.RideType}</td>
                        <td>{ride_info.OperationStatus}</td>
                        <td>{ride_info.Accessibility_Attraction}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  
                <h3>Unavailable Rides</h3>
                <table>
                      <thead>
                      <tr>
                        <th>Ride ID</th>
                        <th>Ride Name</th>
                        <th>Zone Area </th>
                      </tr>
                      </thead>
                      <tbody>
                      {InactiveData.map((ride_info) => (
                      <tr key={ride_info.id}>
                        <td>{ride_info.RideID}</td>
                        <td>{ride_info.RideName}</td>
                        <td>{ride_info.Name}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                <br></br>
                <h3>Monthly Ride Breakdowns</h3>
                <table class = "Services" id = "ServiceInfo">
                      <thead>
                       <tr>
                       <th>Month</th>
                       <th>Year</th>
                       <th>Total issues</th>
                      </tr>
                      </thead>
                      <tbody>
                      {BreakdownData.map((table) => (
                      <tr key={table.id}>
                        <td>{table.MONTH}</td>
                        <td>{table.YEAR}</td>
                        <td>{table.BROKE_DOWN_RIDES}</td>
                      </tr>
                      ))}
                      </tbody>
                 </table>
                 </div>
                 </div>
                 <div style={{ display: visible === 'section4' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Injury Report</h2>
                  <div class = "Injury_report">
                  <table>
                      <thead>
                      <tr>
                        <th>Ride </th>
                        <th>Year</th>
                        <th>Month </th>
                        <th>Week </th>
                        <th>Average Injured Cases </th>
                        <th>Break Down Count </th>
                      </tr>
                      </thead>
                      <tbody>
                      {InjuryReportData.map((injury_case) => (
                        <tr key={injury_case.id}>
                        <td>{injury_case.RideName}</td>
                        <td>{injury_case.Year}</td>
                        <td>{injury_case.Month}</td>
                        <td>{injury_case.Week}</td>
                        <td>{injury_case.AvgInjured}</td>
                        <td>{injury_case.Breakdowns}</td>
                        </tr>
                      ))}
                      </tbody>
                  </table>
                
                   </div>
                   
                  </div>
              </div>
            </div>
                  
                <br></br>
                
                  <br></br>

              </div>
            </div>



            
        


  );
  }
}


export default Maintenance;