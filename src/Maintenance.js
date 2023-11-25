import './Maintenance.css';
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom"; 

function Maintenance() {
  const [visible, setVisibleSection] = useState('section1');
  const [zonevisible, setZoneVisibleSection] = useState('section01');
  const [addzonevisible, setAddZoneVisibleSection] = useState('section0');
  const [updatezonevisible, setUpdateZoneVisibleSection] = useState('section0');

  const showSection = (section) => {
    setVisibleSection(section);
  }
  const showZoneSection = (section) => {
    setZoneVisibleSection(section);
  }
  const showAddZoneSection = (section) => {
    setAddZoneVisibleSection(section);
  }
  const showUpdateZoneSection = (section) => {
    setUpdateZoneVisibleSection(section);
  }
  const[Zone1Data, setZone1Data] = useState([]);
  const[Zone2Data, setZone2Data] = useState([]);
  const[Zone3Data, setZone3Data] = useState([]);
  const[Zone4Data, setZone4Data] = useState([]);
  const[StaffData, setStaffData] = useState([]);
  const[Ride1Data, setRide1Data] = useState([]);
  const[Stall1Data, setStall1Data] = useState([]);
  const[Shop1Data, setShop1Data] = useState([]);
  const[Service1Data, setService1Data] = useState([]);
  const[Ride2Data, setRide2Data] = useState([]);
  const[Stall2Data, setStall2Data] = useState([]);
  const[Shop2Data, setShop2Data] = useState([]);
  const[Service2Data, setService2Data] = useState([]);
  const[Ride3Data, setRide3Data] = useState([]);
  const[Stall3Data, setStall3Data] = useState([]);
  const[Shop3Data, setShop3Data] = useState([]);
  const[Service3Data, setService3Data] = useState([]);
  const[Ride4Data, setRide4Data] = useState([]);
  const[Stall4Data, setStall4Data] = useState([]);
  const[Shop4Data, setShop4Data] = useState([]);
  const[Service4Data, setService4Data] = useState([]);
  const[InactiveRide1Data, setInactiveRide1Data] = useState([]);
  const[InactiveRide2Data, setInactiveRide2Data] = useState([]);
  const[InactiveRide3Data, setInactiveRide3Data] = useState([]);
  const[InactiveRide4Data, setInactiveRide4Data] = useState([]);
  const[InactiveStall1Data, setInactiveStall1Data] = useState([]);
  const[InactiveStall2Data, setInactiveStall2Data] = useState([]);
  const[InactiveStall3Data, setInactiveStall3Data] = useState([]);
  const[InactiveStall4Data, setInactiveStall4Data] = useState([]);
  const[InactiveShop1Data, setInactiveShop1Data] = useState([]);
  const[InactiveShop2Data, setInactiveShop2Data] = useState([]);
  const[InactiveShop3Data, setInactiveShop3Data] = useState([]);
  const[InactiveShop4Data, setInactiveShop4Data] = useState([]);
  const[InactiveService1Data, setInactiveService1Data] = useState([]);
  const[InactiveService2Data, setInactiveService2Data] = useState([]);
  const[InactiveService3Data, setInactiveService3Data] = useState([]);
  const[InactiveService4Data, setInactiveService4Data] = useState([]);
  const[InactiveEvent1Data, setInactiveEvent1Data] = useState([]);
  const[InactiveEvent2Data, setInactiveEvent2Data] = useState([]);
  const[InactiveEvent3Data, setInactiveEvent3Data] = useState([]);
  const[InactiveEvent4Data, setInactiveEvent4Data] = useState([]);
  const[Event1Data, setEvent1Data] = useState([]);
  const[Event2Data, setEvent2Data] = useState([]);
  const[Event3Data, setEvent3Data] = useState([]);
  const[Event4Data, setEvent4Data] = useState([]);
  const[InjuryReportData, setInjuryReportData] = useState([]);
  const[BreakdownData, setBreakdownData] = useState([]);
  const[InjuryCaseData, setInjuryCaseData] = useState([]);
  useEffect(() => {
    
    fetch('/api/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setZone1Data(data.Zone1Data);
        setZone2Data(data.Zone2Data);
        setZone3Data(data.Zone3Data);
        setZone4Data(data.Zone4Data);
        setInactiveRide1Data(data.InactiveRide1Data);
        setInactiveRide2Data(data.InactiveRide2Data);
        setInactiveRide3Data(data.InactiveRide3Data);
        setInactiveRide4Data(data.InactiveRide4Data);
        setRide1Data(data.Ride1Data);
        setRide2Data(data.Ride2Data);
        setRide3Data(data.Ride3Data);
        setRide4Data(data.Ride4Data);
        setStall1Data(data.Stall1Data);
        setStall2Data(data.Stall2Data);
        setStall3Data(data.Stall3Data);
        setStall4Data(data.Stall4Data);
        setInactiveStall1Data(data.InactiveStall1Data);
        setInactiveStall2Data(data.InactiveStall2Data);
        setInactiveStall3Data(data.InactiveStall3Data);
        setInactiveStall4Data(data.InactiveStall4Data);
        setShop1Data(data.Shop1Data);
        setShop2Data(data.Shop2Data);
        setShop3Data(data.Shop3Data);
        setShop4Data(data.Shop4Data);
        setInactiveShop1Data(data.InactiveShop1Data);
        setInactiveShop2Data(data.InactiveShop2Data);
        setInactiveShop3Data(data.InactiveShop3Data);
        setInactiveShop4Data(data.InactiveShop4Data);
        setService1Data(data.Service1Data);
        setService2Data(data.Service2Data);
        setService3Data(data.Service3Data);
        setService4Data(data.Service4Data);
        setInactiveService1Data(data.InactiveService1Data);
        setInactiveService2Data(data.InactiveService2Data);
        setInactiveService3Data(data.InactiveService3Data);
        setInactiveService4Data(data.InactiveService4Data);
        setEvent1Data(data.Event1Data);
        setEvent2Data(data.Event2Data);
        setEvent3Data(data.Event3Data);
        setEvent4Data(data.Event4Data);
        setInactiveEvent1Data(data.InactiveEvent1Data);
        setInactiveEvent2Data(data.InactiveEvent2Data);
        setInactiveEvent3Data(data.InactiveEvent3Data);
        setInactiveEvent4Data(data.InactiveEvent4Data);
        setInjuryReportData(data.InjuryReportData);
        setBreakdownData(data.BreakdownData);
        setStaffData(data.StaffData);
        setInjuryCaseData(data.InjuryCaseData)

      })
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
      alert("Update Password Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
  const handleaddeventinfo = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/addeventinfo', {
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
      alert("Add New Event Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
  const handleaddrideinfo = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/addrideinfo', {
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
      alert("Add New Ride Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
  const handleaddstallinfo = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/addstallinfo', {
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
      alert("Add New Restaurant Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
  const handleaddshopinfo = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/addshopinfo', {
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
      alert("Add New Shop Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
  const handleaddserviceinfo = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/addserviceinfo', {
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
      alert("Add New Service Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
  const handleupdateeventinfo = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/updateeventinfo', {
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
      alert("Update Event Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
  const handleupdaterideinfo = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/updaterideinfo', {
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
      alert("Update Event Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
  const handleupdatestallinfo = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/updatestallinfo', {
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
      alert("Update Restaurant Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
  const handleupdateshopinfo = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/updateshopinfo', {
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
      alert("Update Shop Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
  const handleupdateserviceinfo = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/updateserviceinfo', {
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
      alert("Update Service Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };

  const handlenewinjury = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/handlenewinjury', {
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
      alert("Add New Case Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };

const [IssueLog1Data, setIssueLog1Data] = useState([]);

const handledateissuelog = async (event) => {
  try {
  event.preventDefault(); // Prevent the default form submission behavior

  
    const dateStartInput = document.getElementById('DateStart');
    const dateFixedInput = document.getElementById('DateFixed');

    const DateStart = dateStartInput.value;
    const DateFixed = dateFixedInput.value;

    const apiUrl = `/api/handledateissuelog?DateStart=${DateStart}&DateFixed=${DateFixed}`;

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', // You can remove this line for GET requests
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    setIssueLog1Data(result);
  } catch (error) {
    console.error('Error fetching data:', error);
    alert("Something went wrong! Please try again!")
  }
};

/*useEffect(() => {
  handledateissuelog();
}, []);*/


const navigate = useNavigate();

const signOut = () => {
  localStorage.removeItem("authenticatedM");
  localStorage.removeItem("idM");
  navigate("/"); //Navigate back to main page
};

function GetEmpObj() {
  for (const obj of StaffData) {
    if (obj.employee_id === localStorage.getItem("idM")) {
      return (
          <div key={obj.employee_id}>
            <h3>
              Employee ID: {obj.employee_id}
              <br></br>
              Department code: {obj.Dep_code}
            </h3>
            <p>
            <b>Hourly wage:</b> {obj.hourly_pay}  <b>| Salary:</b> {obj.salary}
            <br></br>
            <br></br>
            <b>First Name:</b> {obj.first_name} <b>| Middle Initial:</b> {obj.mid_initial}
            <br></br>
            <b>Last Name:</b> {obj.last_name}
            </p>
            <h2>
              Contact
            </h2>
            <p>
            <b>Address:</b> {obj.home_address}
            <br></br>
            <b>Email:</b> {obj.email}
            <br></br>
            <b>Phone number:</b> {obj.phone_number}
            </p>
            <h2> Security Information</h2>
            <p>
            <b>Username:</b> {obj.user_tag}
            <br></br>
            <b>Password:</b> {obj.user_pass}
            </p>
          </div>
      );
    }
  }
}

function GetEmpID() {
  for (const obj of StaffData) {
    if (obj.employee_id == localStorage.getItem("idM")) {
      return (
        <h3>Employee ID: {obj.employee_id}</h3>
      );
    }
  }
}

function GetEmpWage() {
  for (const obj of StaffData) {
    if (obj.employee_id == localStorage.getItem("idM")) {
      return (
        <tr key={obj.employee_id}>
        <td>{obj.hourly_pay}</td>
        <td>{obj.salary}</td>
        </tr>
      );
    }
  }
}

function ReturnEmployeeName() {
  for (const obj of StaffData) {
    if(obj.employee_id == localStorage.getItem("idM")) {
      return (
        <div>Welcome back, {obj.first_name}!</div>
      );
    }
  }
}


if (localStorage.getItem("authenticatedM") === false || localStorage.getItem("authenticatedM") == null) {
  console.log("Unsuccessful login");
  return <Navigate replace to={navigate(-1)} />;
}
else{

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
          <ReturnEmployeeName />
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
                Issue Log / Ride Breakdowns
              </button>
              <button className="ZoneInfoButton"onClick={() => showSection('section3')}>
                Zone Information
              </button>
              <button className="AddRide"onClick={() => showSection('section4')}>
                Add New Zone Information
              </button>
              <button className="UpdateRide"onClick={() => showSection('section5')}>
                Update Zone Information
              </button>
              <button className="InjuryReport"onClick={() => showSection('section6')}>
                Injury Case
              </button>
            
            </div>
            <div className="Menutxt">Menu</div>


            

            <div style={{ display: visible === 'section1' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Your Account Information</h2>
                  <div class = "Account-Info">
                  <GetEmpObj />
                  <p>
                    <b>
                    Do you want to change your password?
                    <br></br>
                    You must have a permit code from your supervisor for change security information!
                    </b>
                  </p>
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
                
                   </div>
                   
                  </div>
              </div>
            </div>

            <div style={{ display: visible === 'section2' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Issue Log</h2>
                <form id="UpdateAccPas" onSubmit={handledateissuelog}  method="get" action="/submit">
                  <p>
                    <label htmlFor="DateStart">Date Start: </label>
                    <input
                      type="date"
                      id="DateStart"
                      name="DateStart"
                      required
                    />

                    <label htmlFor="DateFixed">Date Fixed: </label>
                    <input
                      type="date"
                      id="DateFixed"
                      name="DateFixed"
                      required
                    />
                  </p>
                  <p>
                    <button id="UpdateAccButton" type="submit"> Submit</button>
                  </p>
                </form>
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
                      {IssueLog1Data.map((issue_log) => (
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
              <div style={{ display: visible === 'section3' ? 'block' : 'none' }}>
                <div className="optiontextbox">
                <h2>Zone Information</h2>
                
                <div className="zonerideinfo">
                {Zone1Data.map((theme_zone) => (
                  <button className="zoneridebutton" onClick={() => showZoneSection('section01')} key={theme_zone.id}>
                    {theme_zone.Zone_code} - {theme_zone.Name}
                  </button>
                ))}
                {Zone2Data.map((theme_zone) => (
                  <button className="zoneridebutton" onClick={() => showZoneSection('section02')} key={theme_zone.id}>
                    {theme_zone.Zone_code} - {theme_zone.Name}
                  </button>
                ))}
                <br></br>
                {Zone3Data.map((theme_zone) => (
                  <button className="zoneridebutton" onClick={() => showZoneSection('section03')} key={theme_zone.id}>
                    {theme_zone.Zone_code} - {theme_zone.Name}
                  </button>
                ))}
                {Zone4Data.map((theme_zone) => (
                  <button className="zoneridebutton" onClick={() => showZoneSection('section04')} key={theme_zone.id}>
                    {theme_zone.Zone_code} - {theme_zone.Name}
                  </button>
                ))}
            </div>
                  <div style={{ display: zonevisible === 'section01' ? 'block' : 'none' }}>
                    <h2>
                    {Zone1Data.map((theme_zone) => (
                      <u key={theme_zone.id}>{theme_zone.Zone_code} - {theme_zone.Name}</u>
                    ))}
                    </h2>
                    <h2>Events</h2>
                    <table>
                      <thead>
                      <tr>
                        <th>Event ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Capacity</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Event1Data.map((special_events) => (
                      <tr key={special_events.id}>
                        <td>{special_events.Event_ID}</td>
                        <td>{special_events.Event_name}</td>
                        <td>{special_events.event_details}</td>
                        <td>{special_events.event_capacity}</td>
                        <td>{special_events.event_date}</td>
                        <td>{special_events.Status}</td>
                      </tr>
                      ))}
                      {InactiveEvent1Data.map((special_events) => (
                      <tr key={special_events.id}>
                        <td>{special_events.Event_ID}</td>
                        <td>{special_events.Event_name}</td>
                        <td>{special_events.event_details}</td>
                        <td>{special_events.event_capacity}</td>
                        <td>{special_events.event_date}</td>
                        <td>{special_events.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                    <h2>Rides</h2>
                  <table>
                      <thead>
                      <tr>
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
                      {Ride1Data.map((ride_info) => (
                      <tr key={ride_info.id}>
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
                      {InactiveRide1Data.map((ride_info) => (
                      <tr key={ride_info.id}>
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
                  <h2>Restaurants</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Stall ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Stall1Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                      </tr>
                      ))}
                      {InactiveStall1Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Merchandise shop</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Shop ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Shop1Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                      </tr>
                      ))}
                      {InactiveShop1Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Amenities & Service</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Service ID</th>
                        <th>Service</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Service1Data.map((amenities_and_service) => (
                      <tr key={amenities_and_service.id}>
                        <td>{amenities_and_service.Service_ID}</td>
                        <td>{amenities_and_service.Service}</td>
                        <td>{amenities_and_service.Name}</td>
                        <td>{amenities_and_service.Description}</td>
                        <td>{amenities_and_service.Status}</td>
                      </tr>
                      ))}
                      {InactiveService1Data.map((amenities_and_service) => (
                      <tr key={amenities_and_service.id}>
                        <td>{amenities_and_service.Service_ID}</td>
                        <td>{amenities_and_service.Service}</td>
                        <td>{amenities_and_service.Name}</td>
                        <td>{amenities_and_service.Description}</td>
                        <td>{amenities_and_service.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  </div>
                  <div style={{ display: zonevisible === 'section02' ? 'block' : 'none' }}>
                  <h2>
                    {Zone2Data.map((theme_zone) => (
                      <u key={theme_zone.id}>{theme_zone.Zone_code} - {theme_zone.Name}</u>
                    ))}
                    </h2>
                  <h2>Events</h2>
                    <table>
                      <thead>
                      <tr>
                        <th>Event ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Capacity</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Event2Data.map((special_events) => (
                      <tr key={special_events.id}>
                        <td>{special_events.Event_ID}</td>
                        <td>{special_events.Event_name}</td>
                        <td>{special_events.event_details}</td>
                        <td>{special_events.event_capacity}</td>
                        <td>{special_events.event_date}</td>
                        <td>{special_events.Status}</td>
                      </tr>
                      ))}
                      {InactiveEvent2Data.map((special_events) => (
                      <tr key={special_events.id}>
                        <td>{special_events.Event_ID}</td>
                        <td>{special_events.Event_name}</td>
                        <td>{special_events.event_details}</td>
                        <td>{special_events.event_capacity}</td>
                        <td>{special_events.event_date}</td>
                        <td>{special_events.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                    <h2>Rides</h2>
                  <table>
                      <thead>
                      <tr>
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
                      {Ride2Data.map((ride_info) => (
                      <tr key={ride_info.id}>
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
                      {InactiveRide2Data.map((ride_info) => (
                      <tr key={ride_info.id}>
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
                  <h2>Restaurants</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Stall ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Stall2Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                      </tr>
                      ))}
                      {InactiveStall2Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Merchandise shop</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Shop ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Shop2Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                      </tr>
                      ))}
                      {InactiveShop2Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Amenities & Service</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Service ID</th>
                        <th>Service</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Service2Data.map((amenities_and_service) => (
                      <tr key={amenities_and_service.id}>
                        <td>{amenities_and_service.Service_ID}</td>
                        <td>{amenities_and_service.Service}</td>
                        <td>{amenities_and_service.Name}</td>
                        <td>{amenities_and_service.Description}</td>
                        <td>{amenities_and_service.Status}</td>
                      </tr>
                      ))}
                      {InactiveService2Data.map((amenities_and_service) => (
                      <tr key={amenities_and_service.id}>
                        <td>{amenities_and_service.Service_ID}</td>
                        <td>{amenities_and_service.Service}</td>
                        <td>{amenities_and_service.Name}</td>
                        <td>{amenities_and_service.Description}</td>
                        <td>{amenities_and_service.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  </div>
                  <div style={{ display: zonevisible === 'section03' ? 'block' : 'none' }}>
                    <h2>
                    {Zone3Data.map((theme_zone) => (
                      <u key={theme_zone.id}>{theme_zone.Zone_code} - {theme_zone.Name}</u>
                    ))}
                    </h2>
                  <h2>Events</h2>
                    <table>
                      <thead>
                      <tr>
                        <th>Event ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Capacity</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Event3Data.map((special_events) => (
                      <tr key={special_events.id}>
                        <td>{special_events.Event_ID}</td>
                        <td>{special_events.Event_name}</td>
                        <td>{special_events.event_details}</td>
                        <td>{special_events.event_capacity}</td>
                        <td>{special_events.event_date}</td>
                        <td>{special_events.Status}</td>
                      </tr>
                      ))}
                      {InactiveEvent3Data.map((special_events) => (
                      <tr key={special_events.id}>
                        <td>{special_events.Event_ID}</td>
                        <td>{special_events.Event_name}</td>
                        <td>{special_events.event_details}</td>
                        <td>{special_events.event_capacity}</td>
                        <td>{special_events.event_date}</td>
                        <td>{special_events.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                    <h2>Rides</h2>
                  <table>
                      <thead>
                      <tr>
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
                      {Ride3Data.map((ride_info) => (
                      <tr key={ride_info.id}>
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
                      {InactiveRide3Data.map((ride_info) => (
                      <tr key={ride_info.id}>
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
                  <h2>Restaurants</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Stall ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Stall3Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                      </tr>
                      ))}
                      {InactiveStall3Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Merchandise shop</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Shop ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Shop3Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                      </tr>
                      ))}
                      {InactiveShop3Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Amenities & Service</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Service ID</th>
                        <th>Service</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Service3Data.map((amenities_and_service) => (
                      <tr key={amenities_and_service.id}>
                        <td>{amenities_and_service.Service_ID}</td>
                        <td>{amenities_and_service.Service}</td>
                        <td>{amenities_and_service.Name}</td>
                        <td>{amenities_and_service.Description}</td>
                        <td>{amenities_and_service.Status}</td>
                      </tr>
                      ))}
                      {InactiveService3Data.map((amenities_and_service) => (
                      <tr key={amenities_and_service.id}>
                        <td>{amenities_and_service.Service_ID}</td>
                        <td>{amenities_and_service.Service}</td>
                        <td>{amenities_and_service.Name}</td>
                        <td>{amenities_and_service.Description}</td>
                        <td>{amenities_and_service.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  </div>
                  <div style={{ display: zonevisible === 'section04' ? 'block' : 'none' }}>
                    <h2>
                    {Zone4Data.map((theme_zone) => (
                      <u key={theme_zone.id}>{theme_zone.Zone_code} - {theme_zone.Name}</u>
                    ))}
                    </h2>
                  <h2>Events</h2>
                    <table>
                      <thead>
                      <tr>
                        <th>Event ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Capacity</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Event4Data.map((special_events) => (
                      <tr key={special_events.id}>
                        <td>{special_events.Event_ID}</td>
                        <td>{special_events.Event_name}</td>
                        <td>{special_events.event_details}</td>
                        <td>{special_events.event_capacity}</td>
                        <td>{special_events.event_date}</td>
                        <td>{special_events.Status}</td>
                      </tr>
                      ))}
                      {InactiveEvent4Data.map((special_events) => (
                      <tr key={special_events.id}>
                        <td>{special_events.Event_ID}</td>
                        <td>{special_events.Event_name}</td>
                        <td>{special_events.event_details}</td>
                        <td>{special_events.event_capacity}</td>
                        <td>{special_events.event_date}</td>
                        <td>{special_events.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                    <h2>Rides</h2>
                  <table>
                      <thead>
                      <tr>
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
                      {Ride4Data.map((ride_info) => (
                      <tr key={ride_info.id}>
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
                      {InactiveRide4Data.map((ride_info) => (
                      <tr key={ride_info.id}>
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
                  <h2>Restaurants</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Stall ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Stall4Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                      </tr>
                      ))}
                      {InactiveStall4Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Merchandise shop</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Shop ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Shop4Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                      </tr>
                      ))}
                      {InactiveShop4Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Amenities & Service</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Service ID</th>
                        <th>Service</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Service4Data.map((amenities_and_service) => (
                      <tr key={amenities_and_service.id}>
                        <td>{amenities_and_service.Service_ID}</td>
                        <td>{amenities_and_service.Service}</td>
                        <td>{amenities_and_service.Name}</td>
                        <td>{amenities_and_service.Description}</td>
                        <td>{amenities_and_service.Status}</td>
                      </tr>
                      ))}
                      {InactiveService4Data.map((amenities_and_service) => (
                      <tr key={amenities_and_service.id}>
                        <td>{amenities_and_service.Service_ID}</td>
                        <td>{amenities_and_service.Service}</td>
                        <td>{amenities_and_service.Name}</td>
                        <td>{amenities_and_service.Description}</td>
                        <td>{amenities_and_service.Status}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  </div>
                
                 </div>
                 </div>
                 <div style={{ display: visible === 'section4' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>
                  Add New Zone Information
                </h2>
                <div className="zonerideinfo">
                  <button className="zoneridebutton" onClick={() => showAddZoneSection('section0')} >
                   Event
                  </button>
                  <button className="zoneridebutton" onClick={() => showAddZoneSection('section1')} >
                   Ride
                  </button>
                  <button className="zoneridebutton" onClick={() => showAddZoneSection('section2')}>
                    Restaurant
                  </button>
                  <button className="zoneridebutton" onClick={() => showAddZoneSection('section3')}>
                    Merchandise shop
                  </button>
                  <button className="zoneridebutton" onClick={() => showAddZoneSection('section4')}>
                    Amenity & Service
                  </button>
            </div>
            <div style={{ display: addzonevisible === 'section0' ? 'block' : 'none' }}>
                <form onSubmit={handleaddeventinfo} method="post" action="/submit">
                          
                          <p>
                              <label><b><u>New Event Information</u></b></label>
                              <label for="Zone_code">Zone code:  </label>
                              <select id = "Zone_code" name="Zone_code" required>
                                  <option value = ""> Select theme zone </option>
                                  {Zone1Data.map((theme_zone) => (
                                  <option value = "ZONE0001" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone2Data.map((theme_zone) => (
                                  <option value = "ZONE0002" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone3Data.map((theme_zone) => (
                                  <option value = "ZONE0003" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone4Data.map((theme_zone) => (
                                  <option value = "ZONE0004"key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                              </select>

                              <label for="Event_name">Name:  </label>
                              <input type="text" id="Event_name" name="Event_name" min="6" max="50" required/>
                              
                              <label for="event_details">Description:  </label>
                              <input type="text" id="event_details" name="event_details" min="20" max="150" required/>
  
                              <label for="event_capacity">Capacity:  </label>
                              <input type="int" id="event_capacity" name="event_capacity" required/>

                              <label for="event_date">Date:  </label>
                              <input type="date" id="event_date" name="event_date" required/>

                              <label for="Status">Operation Status:  </label>
                              <select id = "Status" name="Status" required>
                                  <option value = ""> Select status </option>
                                  <option value = "Active"> Active </option>
                                  <option value = "Inactive"> Inactive </option>
                              </select>
                          </p>
                          <p>
                            <br></br>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      </div>
            <div style={{ display: addzonevisible === 'section1' ? 'block' : 'none' }}>
                <form onSubmit={handleaddrideinfo} method="post" action="/submit">
                          
                          <p>
                              <label><b><u>New Ride Information</u></b></label>
                              <label for="Zone_code">Zone code:  </label>
                              <select id = "Zone_code" name="Zone_code" required>
                                  <option value = ""> Select theme zone </option>
                                  {Zone1Data.map((theme_zone) => (
                                  <option value = "ZONE0001" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone2Data.map((theme_zone) => (
                                  <option value = "ZONE0002" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone3Data.map((theme_zone) => (
                                  <option value = "ZONE0003" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone4Data.map((theme_zone) => (
                                  <option value = "ZONE0004"key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                              </select>

                              <label for="RideName">Ride Name:  </label>
                              <input type="text" id="RideName" name="RideName" min="6" max="20" required/>
                              
                              <label for="Description">Description:  </label>
                              <input type="text" id="Description" name="Description" min="20" max="200" required/>
  
                              <label for="SafetyRules">Safety Rules:  </label>
                              <input type="text" id="SafetyRules" name="SafetyRules" min="10" max="100" required/>

                              <label for="RideType">Ride Type:  </label>
                              <select id = "RideType" name="RideType" required>
                                  <option value = ""> Select ride type </option>
                                  <option value = "Casual"> Casual </option>
                                  <option value = "Thrill"> Thrill </option>
                                  <option value = "Water"> Water </option>
                                  <option value = "Moderate Intensity"> Moderate Intensity </option>
                              </select> 

                              <label for="OperationStatus">Operation Status:  </label>
                              <select id = "OperationStatus" name="OperationStatus" required>
                                  <option value = ""> Select status </option>
                                  <option value = "Active"> Active </option>
                                  <option value = "Inactive"> Inactive </option>
                              </select> 

                              <label for="Accessibility">Accessibility Attraction:  </label>
                              <select id = "Accessibility" name="Accessibility" required>
                                  <option value = ""> Select an option </option>
                                  <option value = "Yes"> Yes </option>
                                  <option value = "N/A"> N/A </option>
                              </select>
                          </p>
                          <p>
                            <br></br>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      </div>
                      
                      <div style={{ display: addzonevisible === 'section2' ? 'block' : 'none' }}>
                        <form onSubmit={handleaddstallinfo} method="post" action="/submit"> 
                          <p>
                              <label><b><u>New Restaurant Information</u></b></label>
                              <label for="Zone_code">Zone code:  </label>
                              <select id = "Zone_code" name="Zone_code" required>
                                  <option value = ""> Select theme zone </option>
                                  {Zone1Data.map((theme_zone) => (
                                  <option value = "ZONE0001" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone2Data.map((theme_zone) => (
                                  <option value = "ZONE0002" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone3Data.map((theme_zone) => (
                                  <option value = "ZONE0003" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone4Data.map((theme_zone) => (
                                  <option value = "ZONE0004"key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                              </select>

                              <label for="Name">Restaurant Name:  </label>
                              <input type="text" id="Name" name="Name" min="6" max="20" required/>
                              
                              <label for="Type">Type:  </label>
                              <select id = "Type" name="Type" required>
                                  <option value = ""> Select type </option>
                                  <option value = "Casual Dining"> Casual dining </option>
                                  <option value = "Quick service dining"> Quick service dining </option>
                                
                              </select>
                              <label for="Status">Operation Status:  </label>
                              <select id = "Status" name="Status" required>
                                  <option value = ""> Select status </option>
                                  <option value = "Active"> Active </option>
                                  <option value = "Inactive"> Inactive </option>
                              </select> 
                          </p>
                          <p>
                            <br></br>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      </div>
                      
                      <div style={{ display: addzonevisible === 'section3' ? 'block' : 'none' }}>
                        <form onSubmit={handleaddshopinfo} method="post" action="/submit"> 
                          <p>
                              <label><b><u>New Merchandise Shop Information</u></b></label>
                              <label for="Zone_code">Zone code:  </label>
                              <select id = "Zone_code" name="Zone_code" required>
                                  <option value = ""> Select theme zone </option>
                                  {Zone1Data.map((theme_zone) => (
                                  <option value = "ZONE0001" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone2Data.map((theme_zone) => (
                                  <option value = "ZONE0002" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone3Data.map((theme_zone) => (
                                  <option value = "ZONE0003" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone4Data.map((theme_zone) => (
                                  <option value = "ZONE0004"key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                              </select>

                              <label for="Name">Shop Name:  </label>
                              <input type="text" id="Name" name="Name" min="6" max="30" required/>
                              
                              <label for="ProductType">Product Type:  </label>
                              <input type="text" id="ProductType" name="ProductType" min="6" max="30" required/>
                              
                              <label for="ProductAmount">Product Amount:  </label>
                              <input type="int" id="ProductAmount" name="ProductAmount" required/>
                              
                              <label for="Status">Operation Status:  </label>
                              <select id = "Status" name="Status" required>
                                  <option value = ""> Select status </option>
                                  <option value = "Active"> Active </option>
                                  <option value = "Inactive"> Inactive </option>
                              </select> 
                          </p>
                          <p>
                            <br></br>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      </div>
                      <div style={{ display: addzonevisible === 'section4' ? 'block' : 'none' }}>
                        <form onSubmit={handleaddserviceinfo} method="post" action="/submit"> 
                          <p>
                              <label><b><u>New Amenity & Service Information</u></b></label>
                              <label for="Zone_code">Zone code:  </label>
                              <select id = "Zone_code" name="Zone_code" required>
                                  <option value = ""> Select theme zone </option>
                                  {Zone1Data.map((theme_zone) => (
                                  <option value = "ZONE0001" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone2Data.map((theme_zone) => (
                                  <option value = "ZONE0002" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone3Data.map((theme_zone) => (
                                  <option value = "ZONE0003" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone4Data.map((theme_zone) => (
                                  <option value = "ZONE0004"key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                              </select>

                              <label for="Service">Service:  </label>
                              <select id = "Service" name="Service" required>
                                  <option value = ""> Select service </option>
                                  <option value = "Lounge"> Lounge </option>
                                  <option value = "Restroom"> Restroom </option>
                                  <option value = "Lockers"> Lockers </option>
                                
                              </select>

                              <label for="Name">Name:  </label>
                              <input type="text" id="Name" name="Name" min="6" max="30" required/>
                              
                              <label for="Description">Description:  </label>
                              <input type="text" id="Description" name="Description" min="6" max="35" required/>
                              
                              <label for="Status">Operation Status:  </label>
                              <select id = "Status" name="Status" required>
                                  <option value = ""> Select status </option>
                                  <option value = "Active"> Active </option>
                                  <option value = "Inactive"> Inactive </option>
                              </select> 
                          </p>
                          <p>
                            <br></br>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      </div>
                 </div>
              </div>
              <div style={{ display: visible === 'section5' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>
                  Update Zone Information
                </h2>
                <div className="zonerideinfo">
                  <button className="zoneridebutton" onClick={() => showUpdateZoneSection('section0')} >
                   Event
                  </button>
                  <button className="zoneridebutton" onClick={() => showUpdateZoneSection('section1')} >
                   Ride
                  </button>
                  <button className="zoneridebutton" onClick={() => showUpdateZoneSection('section2')}>
                    Restaurant
                  </button>
                  <button className="zoneridebutton" onClick={() => showUpdateZoneSection('section3')}>
                    Merchandise shop
                  </button>
                  <button className="zoneridebutton" onClick={() => showUpdateZoneSection('section4')}>
                    Amenity & Service
                  </button>
            </div>
            <div style={{ display: updatezonevisible === 'section0' ? 'block' : 'none' }}>
                <form onSubmit={handleupdateeventinfo} method="post" action="/submit">
                          
                          <p>
                              <label><b><u>Update Event Information</u></b></label>
                              <label for="Zone_code">Zone code:  </label>
                              <select id = "Zone_code" name="Zone_code" required>
                                  <option value = ""> Select theme zone </option>
                                  {Zone1Data.map((theme_zone) => (
                                  <option value = "ZONE0001" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone2Data.map((theme_zone) => (
                                  <option value = "ZONE0002" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone3Data.map((theme_zone) => (
                                  <option value = "ZONE0003" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone4Data.map((theme_zone) => (
                                  <option value = "ZONE0004"key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                              </select>
                              
                              <label for="Event_ID">Event ID:  </label>
                              <input type="text" id="Event_ID" name="Event_ID" min="8" max="8" required/>

                              <label for="Event_name">Name:  </label>
                              <input type="text" id="Event_name" name="Event_name" min="6" max="50" required/>
                              
                              <label for="event_details">Description:  </label>
                              <input type="text" id="event_details" name="event_details" min="20" max="150" required/>
  
                              <label for="event_capacity">Capacity:  </label>
                              <input type="int" id="event_capacity" name="event_capacity" required/>

                              <label for="event_date">Date:  </label>
                              <input type="date" id="event_date" name="event_date" required/>

                              <label for="Status">Operation Status:  </label>
                              <select id = "Status" name="Status" required>
                                  <option value = ""> Select status </option>
                                  <option value = "Active"> Active </option>
                                  <option value = "Inactive"> Inactive </option>
                              </select>
                          </p>
                          <p>
                            <br></br>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      </div>
                <div style={{ display: updatezonevisible === 'section1' ? 'block' : 'none' }}>
                <form onSubmit={handleupdaterideinfo} method="post" action="/submit">
                          <label><b><u>Update Ride Information</u></b></label>
                          <p>
                          <label for="Zone_code">Zone code:  </label>
                              <select id = "Zone_code" name="Zone_code" required>
                                  <option value = ""> Select theme zone </option>
                                  {Zone1Data.map((theme_zone) => (
                                  <option value = "ZONE0001" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone2Data.map((theme_zone) => (
                                  <option value = "ZONE0002" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone3Data.map((theme_zone) => (
                                  <option value = "ZONE0003" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone4Data.map((theme_zone) => (
                                  <option value = "ZONE0004"key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                              </select>

                              <label for="RideID">Ride ID:  </label>
                              <input type="text" id="RideID" name="RideID" min="8" max="8" required/>

                              <label for="RideName">Ride Name:  </label>
                              <input type="text" id="RideName" name="RideName" min="6" max="50" required/>
                              
                              <label for="Description">Description:  </label>
                              <input type="text" id="Description" name="Description" min="20" max="500" required/>
  
                              <label for="SafetyRules">Safety Rules:  </label>
                              <input type="text" id="SafetyRules" name="SafetyRules" min="10" max="500" required/>

                              <label for="RideType">Ride Type:  </label>
                              <select id = "RideType" name="RideType" required>
                                  <option value = ""> Select ride type </option>
                                  <option value = "Casual"> Casual </option>
                                  <option value = "Thrill"> Thrill </option>
                                  <option value = "Water"> Water </option>
                                  <option value = "Moderate Intensity"> Moderate Intensity </option>
                              </select> 

                              <label for="OperationStatus">Operation Status:  </label>
                              <select id = "OperationStatus" name="OperationStatus" required>
                                  <option value = ""> Select status </option>
                                  <option value = "Active"> Active </option>
                                  <option value = "Inactive"> Inactive </option>
                              </select> 

                              <label for="Accessibility">Accessibility Attraction:  </label>
                              <select id = "Accessibility" name="Accessibility" required>
                                  <option value = ""> Select an option </option>
                                  <option value = "Yes"> Yes </option>
                                  <option value = "N/A"> N/A </option>
                              </select>
                          </p>
                          <p>
                            <br></br>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      </div>
                      <div style={{ display: updatezonevisible === 'section2' ? 'block' : 'none' }}>
                        <form onSubmit={handleupdatestallinfo} method="post" action="/submit"> 
                          <p>
                              <label><b><u>Update Restaurant Information</u></b></label>
                              <label for="Zone_code">Zone code:  </label>
                              <select id = "Zone_code" name="Zone_code" required>
                                  <option value = ""> Select theme zone </option>
                                  {Zone1Data.map((theme_zone) => (
                                  <option value = "ZONE0001" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone2Data.map((theme_zone) => (
                                  <option value = "ZONE0002" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone3Data.map((theme_zone) => (
                                  <option value = "ZONE0003" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone4Data.map((theme_zone) => (
                                  <option value = "ZONE0004"key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                              </select>
                              <label for="Stall_ID">Restaurant ID:  </label>
                              <input type="text" id="Stall_ID" name="Stall_ID" min="8" max="8" required/>

                              <label for="Name">Restaurant Name:  </label>
                              <input type="text" id="Name" name="Name" min="6" max="30" required/>
                              
                              <label for="Type">Type:  </label>
                              <select id = "Type" name="Type" required>
                                  <option value = ""> Select type </option>
                                  <option value = "Casual Dining"> Casual dining </option>
                                  <option value = "Quick service dining"> Quick service dining </option>
                                
                              </select>

                              <label for="Status">Operation Status:  </label>
                              <select id = "Status" name="Status" required>
                                  <option value = ""> Select status </option>
                                  <option value = "Active"> Active </option>
                                  <option value = "Inactive"> Inactive </option>
                              </select> 
                          </p>
                          <p>
                            <br></br>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      </div>
                      
                      <div style={{ display: updatezonevisible === 'section3' ? 'block' : 'none' }}>
                        <form onSubmit={handleupdateshopinfo} method="post" action="/submit"> 
                          <p>
                              <label><b><u>Update Merchandise Shop Information</u></b></label>
                              <label for="Zone_code">Zone code:  </label>
                              <select id = "Zone_code" name="Zone_code" required>
                                  <option value = ""> Select theme zone </option>
                                  {Zone1Data.map((theme_zone) => (
                                  <option value = "ZONE0001" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone2Data.map((theme_zone) => (
                                  <option value = "ZONE0002" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone3Data.map((theme_zone) => (
                                  <option value = "ZONE0003" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone4Data.map((theme_zone) => (
                                  <option value = "ZONE0004"key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                              </select>
                              
                              <label for="Shop_id">Shop ID:  </label>
                              <input type="text" id="Shop_id" name="Shop_id" min="8" max="8" required/>

                              <label for="Name">Shop Name:  </label>
                              <input type="text" id="Name" name="Name" min="6" max="50" required/>
                              
                              <label for="ProductType">Product Type:  </label>
                              <input type="text" id="ProductType" name="ProductType" min="6" max="50" required/>
                              
                              <label for="ProductAmount">Product Amount:  </label>
                              <input type="int" id="ProductAmount" name="ProductAmount" required/>
                              
                              <label for="Status">Operation Status:  </label>
                              <select id = "Status" name="Status" required>
                                  <option value = ""> Select status </option>
                                  <option value = "Active"> Active </option>
                                  <option value = "Inactive"> Inactive </option>
                              </select> 
                          </p>
                          <p>
                            <br></br>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      </div>
                      <div style={{ display: updatezonevisible === 'section4' ? 'block' : 'none' }}>
                        <form onSubmit={handleupdateserviceinfo} method="post" action="/submit"> 
                          <p>
                              <label><b><u>Update Amenity & Service Information</u></b></label>
                              <label for="Zone_code">Zone code:  </label>
                              <select id = "Zone_code" name="Zone_code" required>
                                  <option value = ""> Select theme zone </option>
                                  {Zone1Data.map((theme_zone) => (
                                  <option value = "ZONE0001" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone2Data.map((theme_zone) => (
                                  <option value = "ZONE0002" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone3Data.map((theme_zone) => (
                                  <option value = "ZONE0003" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone4Data.map((theme_zone) => (
                                  <option value = "ZONE0004"key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                              </select>

                              <label for="Service_ID">Service ID:  </label>
                              <input type="text" id="Service_ID" name="Service_ID" min="8" max="8" required/>

                              <label for="Service">Service:  </label>
                              <select id = "Service" name="Service" required>
                                  <option value = ""> Select service </option>
                                  <option value = "Lounge"> Lounge </option>
                                  <option value = "Restroom"> Restroom </option>
                                  <option value = "Lockers"> Lockers </option>
                                
                              </select>

                              <label for="Name">Name:  </label>
                              <input type="text" id="Name" name="Name" min="6" max="30" required/>
                              
                              <label for="Description">Description:  </label>
                              <input type="text" id="Description" name="Description" min="6" max="35" required/>
                              
                              <label for="Status">Operation Status:  </label>
                              <select id = "Status" name="Status" required>
                                  <option value = ""> Select status </option>
                                  <option value = "Active"> Active </option>
                                  <option value = "Inactive"> Inactive </option>
                              </select> 
                          </p>
                          <p>
                            <br></br>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      </div>
                 </div>
              </div>
              <div style={{ display: visible === 'section6' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Injury Cases</h2>
                <form id="UpdateAccPas" method="get" action="/submit">
                  <p>
                    <label for="FromDate">From: </label>
                    <input
                      type="date"
                      id="FromDate"
                      name="FromDate"
                      required
                    />

                    <label for="ToDate">To: </label>
                    <input
                      type="date"
                      id="ToDate"
                      name="ToDate"
                      required
                    />
                  </p>
                  <p>
                    <button id="UpdateAccButton" type="submit">Submit</button>
                  </p>
                </form>
                <table>
                      <thead>
                      <tr>
                        <th>Injury Case ID</th>
                        <th>Ride ID</th>
                        <th>Date</th>
                        <th>Severity Scale</th>
                        <th>Amount of Injured cases</th>
                        </tr>
                      </thead>
                      <tbody>
                      {InjuryCaseData.map((injury_case) => (
                        <tr key={injury_case.id}>
                        <td>{injury_case.InjuryCaseID}</td>
                        <td>{injury_case.RideID}</td>
                        <td>{injury_case.Date}</td>
                        <td>{injury_case.SeverityScale}</td>
                        <td>{injury_case.AmountInjured}</td>
                        </tr>
                      ))}
                      </tbody>
                </table>
                <h2>Injury Cases Report</h2>
                <p>This report shows records of how many injury cases does a ride have weekly!
                  <br></br>
                  And
                  <br></br> How many times does a ride do breakdown weekly!
                </p>
                <form id="UpdateAccPas"  method="get" action="/submit">
                  <p>
                    <label for="FromDate">From: </label>
                    <input
                      type="date"
                      id="FromDate"
                      name="FromDate"
                      required
                    />

                    <label for="ToDate">To: </label>
                    <input
                      type="date"
                      id="ToDate"
                      name="ToDate"
                      required
                    />
                  </p>
                  <p>
                    <button id="UpdateAccButton" type="submit">Submit</button>
                  </p>
                </form>
                <table>
                      <thead>
                      <tr>
                        <th>Ride</th>
                        <th>Year</th>
                        <th>Month</th>
                        <th>Week</th>
                        <th>Average Injured cases</th>
                        <th>Total Breakdown Rides</th>
                        </tr>
                      </thead>
                      <tbody>
                      {InjuryReportData.map((injury) => (
                        <tr key={injury.id}>
                        <td>{injury.RideName}</td>
                        <td>{injury.Year}</td>
                        <td>{injury.Month}</td>
                        <td>{injury.Week}</td>
                        <td>{injury.AvgInjured}</td>
                        <td>{injury.Breakdowns}</td>
                        </tr>
                      ))}
                      </tbody>
                </table>

                <h2>New Injury Case</h2>
                <form id="UpdateAccPas" onSubmit={handlenewinjury}  method="post" action="/submit">
                  <p>
                    <label for="RideID">Ride ID: </label>
                    <input type="text" id="RideID" name="RideID" min={8} max={8} required />

                    <label for="Date">Date: </label>
                    <input type="date" id="Date" name="Date" required />

                    <label for="SeverityScale">Severity Scale: </label>
                    <input type="int" id="SeverityScale" name="SeverityScale" required />

                    <label for="AmountInjured">From: </label>
                    <input type="int" id="AmountInjured" name="AmountInjured" required />
                  </p>
                  <p>
                    <button id="UpdateAccButton" type="submit">Submit</button>
                  </p>
                </form>
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
