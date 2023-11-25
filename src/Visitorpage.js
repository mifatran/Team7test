import './Visitorpage.css';
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Visitorpage() {
  const [visible, setVisibleSection] = useState('section1');

  const showSection = (section) => {
    setVisibleSection(section);
  };

  const [userInfoBeforeDeletion, setUserInfoBeforeDeletion] = useState(null);
  const[RideData, setRideData] = useState([]);
  const [InactiveRides, setInactiveRides] = useState([]);
  const [userInfo, setuserInfo] = useState([]);
  const [TicketInfo, setTicket] = useState([]);
  useEffect(() => {
    
    fetch('/api/ride')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRideData(data.RideData);
        setInactiveRides(data.InactiveRides);
        setuserInfo(data.userInfo);
        setTicket(data.TicketInfo);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const [InboxData, setInbox] = useState([]);
  useEffect(() => {
    
    fetch('/api/inbox')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setInbox(data.InboxData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  
  const handlePurchaseTicket = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const customer_id = userInfo.find(obj => obj.customer_id == localStorage.getItem("idV")).customer_id;
      formData.append('customer_id', customer_id);

      const response = await fetch('/api/purchaseTicket', {
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

  const AccountDelete = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/AccountDelete', {
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
      setUserInfoBeforeDeletion(result.userInfoBeforeDeletion);

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

 

  const AccountUpdate = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/AccountUpdate', {
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

  const navigate = useNavigate();

  const AccDeleteOut = () =>{
    localStorage.removeItem("authenticatedV");
    localStorage.removeItem("idV");
    navigate("/"); //Navigate back to main page
  }

  const signOut = () => {
    localStorage.removeItem("authenticatedV");
    localStorage.removeItem("idV");
    navigate("/"); //Navigate back to main page
  };

  function GetVisitorObj() {
    for (const obj of userInfo) {
      if (obj.customer_id == localStorage.getItem("idV")) {
        console.log("Successful data pull");
        return (
          <tr key={obj.customer_id}>
            <td>{obj.user_tag}</td>
            <td>{obj.first_name}</td>
            <td>{obj.last_name}</td>
            <td>{obj.user_pass}</td>
            <td>{obj.email}</td>
            <td>{obj.phone_number}</td>
            <td>{obj.home_address}</td>               
            <td>{obj.payment_method}</td>
          </tr>
        );
      }
      else {
        console.log("Failed data pull");
      }
    }
  }


  function GetInboxInfo() {

    const customerID = localStorage.getItem("idV");
    const InboxInfo = InboxData.filter((obj) => obj.Customer_ID === customerID);
        if(InboxInfo.length === 0){
          return (
            
              <h2> Your inbox is empty. No rewards have be sent your way yet. </h2>
            
          )
        }

        return InboxInfo.map((obj) => (
          <tr key={obj.Inbox_id}>
            <td>{new Date(obj.Date).toLocaleDateString('en-US')}</td>
            <td>{obj.Subject}</td>
            <td>{obj.Message}</td>
            <td>{obj.Voucher_value}</td>
          </tr>
        ));

  }
  function GetTicketInfo() {

    const customerID = localStorage.getItem("idV");
    const userTicket = TicketInfo.filter((obj) => obj.CustomerID === customerID);

        if(userTicket.length === 0){
          return (
            
              <h2> You have not bought a ticket. </h2>
            
          )
        }

        return userTicket.map((obj) => (
          <tr key={obj.tickets_id}>
            <td>{new Date(obj.Date).toLocaleDateString('en-US')}</td>
            <td>{obj.TicketType}</td>
            <td>{obj.Amount}</td>
            <td>{obj.Total}</td>
          </tr>
        ));

  }
  

  function ReturnVisitorName() {
    for (const obj of userInfo) {
      if(obj.customer_id == localStorage.getItem("idV")) {
        return (
          <div>Welcome back, {obj.first_name}!</div>
        );
      }
    }
  }

  if (localStorage.getItem("authenticatedV") == false || localStorage.getItem("authenticatedV") == null) {
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

        <div className="welcome-back-visitor">
          <ReturnVisitorName />
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
              <button className="TicketInfoButton"onClick={() => showSection('section2')}>
                Purchase a Ticket
              </button>
              <button className="ParkInfoButton"onClick={() => showSection('section3')}>
                Park Information
              </button>
              <button className="DeleteButton" onClick={() => showSection('section4')}>
              Delete Account
              </button>
              <button className="InboxButton" onClick={() => showSection('section5')}>
              Inbox
              </button>
            
            </div>
            <div className="Menutxt">Menu</div>
            

            <div style={{ display: visible === 'section1' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Your Account Information</h2>
                  <div class = "Account-Info">
                  <table>
                  <thead>
                      <tr>
                        <th>Username </th>
                        <th>First Name </th>
                        <th>Last Name </th>
                        <th>Password </th>
                        <th>Email </th>
                        <th>phone_number </th>
                        <th>Address </th>
                        <th>Payment Method </th>
                      </tr>
                    </thead>
                    <tbody>
                      <GetVisitorObj />
                    </tbody>

                  </table>



                  
                  <p> Update the above information by inputing information below.
                  </p>
                  
                    
                      <form id="UpdateAccInfo" onSubmit={AccountUpdate} method="post" action="/submit">
                              <div>
                              <h3> Confirm your username below.</h3>    
                              </div>

                              <div>
                              <label for="CurrentUsername">Current Username: </label>
                              <input type="text" id="CurrentUsername" name="CurrentUsername"/>
                              </div>
                              <div>

                              <div>
                              <h3> Edit information below.</h3>    
                              </div>
                              
                              <label for="FirstName ">First Name:</label>
                              <input type="text" id="firstName" name="firstName"/>
                              </div>

                              <div>
                              <label for="LastName">Last Name: </label>
                              <input type="text" id="lastName" name="lastName"/>
                              </div>

                              <div>
                              <label for="Username">Username: </label>
                              <input type="text" id="Username" name="Username" required/>
                              </div>

                              <div>
                              <label for="Password">Password: </label>
                              <input type="text" id="Password" name="Password" required/>
                              </div>

                              <div>
                              <label for="Email">Email: </label>
                              <input type="text" id="Email" name="Email"/>
                              </div>

                              <div>
                              <label for="PhoneNum">Phone Number: </label>
                              <input type="text" id="PhoneNum" name="PhoneNum" pattern="[0-9]{10}"/>
                              </div>

                              <div>
                              <label for="Address">Address: </label>
                              <input type="text" id="Address" name="Address"/>
                              </div>

                              <div>
                              <label for="Payment">Payment Card: </label>
                              <input type="text" id="Payment" name="Payment" pattern="[0-9]{16}" required/>
                              </div>
                              <button id="UpdateAccInfoButton" type="submit">Submit</button>
                          
                      </form>
                      <p> If you would like to see your updated information, refresh the page.
                  </p>
                   </div>
                   
                  </div>
              </div>
            </div>

            <div style={{ display: visible === 'section2' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Purchase a ticket</h2>
                <h3>Ticket Information</h3>
                <table>
                      <tr>
                        <th>Ticket Type </th>
                        <th>Benefits </th>
                        <th>Cost </th>
                      </tr>
                      <tr>
                        <td>Day Pass</td>
                        <td>$33</td>
                        <td>Ride Photos or Souvenirs</td>
                      </tr>
                      <tr>
                        <td>Seasonal Pass</td>
                        <td>$61</td>
                        <td>Special Shows or Entertainment</td>
                      </tr>
                      <tr>
                        <td>Annual Pass</td>
                        <td>$151</td>
                        <td>Discounts on Merchandise & Dining plan </td>
                      </tr>
                      <tr>
                        <td>Premium Pass</td>
                        <td>$351</td>
                        <td>Fast Pass </td>
                      </tr>
                </table>
                <p>Complete the section below to get your tickets</p>
                
                      <form id="PurchTicket" onSubmit={handlePurchaseTicket} method="post" action="/submit">
                             <div>
                              <label for="TicketsTypes">Ticket Type: </label>
                              <select id = "TicketsTypes" name="TicketsTypes" required>
                                  <option value = "DayPass"> Day Pass </option>
                                  <option value = "SeasonalPass"> Seasonal Pass </option>
                                  <option value = "AnnualPass"> Annual Pass </option>
                                  <option value = "PremiumPass"> Premium Pass </option>

                              </select>
                        
                              </div>
                
                              <div>
                              <label for="Amount">Amount: </label>
                              <input type="number" id="Amount" name="Amount" min="1" max="100" required/>
                              </div>


                              <div>
                              <label for="FirstName ">First Name:  </label>
                              <input type="text" id="FirstName" name="FirstName" required/>
                              </div>

                              <div>
                              <label for="LastName">Last Name: </label>
                              <input type="text" id="LastName" name="LastName" required/>
                              </div>

                              <div>
                              <label for="Address">Address (Zipcode): </label>
                              <input type="text" id="Address" name="Address" pattern="[0-9]{5}" required/>
                              </div>

                              <div>
                              <label for="Card Info">Card Number: </label>
                              <input type="text" id="CardInfo" name="CardInfo" pattern="[0-9]{16}" required/>
                              </div>

                              <button id="PurchTicketButton" type="submit">Submit</button>
                         

                      </form>
                  <div>

                <h3>Purchase History</h3>
                <table>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Ticket Type </th>
                        <th>Amount </th>
                        <th>Total Price</th>
                      </tr>
                    </thead>

                    <tbody>
                    <GetTicketInfo />
                    </tbody>
                </table>

                <p>To see your updated purchase history after buying a ticket, refresh the page.</p>

                  </div>
                 </div>
              </div>
            </div>

            <div style={{ display: visible === 'section3' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Park Information</h2>
                <p>Here are some things you should know before you get here!</p>
                <br></br>

                <h3>Rides With Accessability Services</h3>
                <table>
                    <thead>
                      <tr>
                        <th>Ride Name </th>
                        <th>Ride Description </th>
                      </tr>
                    </thead>

                    <tbody>
                      {RideData.map((ride_info) => (
                        <tr key={ride_info.id}>
                          <td>{ride_info.RideName}</td>
                          <td>{ride_info.Description}</td>
                          
                        </tr>
                      ))}

                    </tbody>
                </table>
                <br></br>

                <h3>Unavailable Rides</h3>
                <table>
                    <thead>
                      <tr>
                        <th>Ride Name </th>
                        <th>Ride Description </th>
                      </tr>
                    </thead>

                    <tbody>
                      {InactiveRides.map((ride_info) => (
                        <tr key={ride_info.id}>
                          <td>{ride_info.InactiveRide}</td>
                          <td>{ride_info.InactiveDescript}</td>
                          
                        </tr>
                      ))}

                    </tbody>
                </table>
  
                 <h3>More Information</h3>
                 <p> Parking is included with the purchase of ticket(s). <br>
                 </br>Tickets are required to enter the park. One ticket allows entry for one visitor. <br></br> </p>

              </div>
            </div>
            <div style={{ display: visible === 'section5' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Welcome to your inbox!</h2>
                <p>Below, you will see any rewards sent to your account.</p>
                <p>Any rewards you may get from certain purchases will show here!</p>
                <p>Special Note: If you purchase more than 10 tickets, you'll get a dining voucher!</p>
                <br></br>

                <table>
                    <thead>
                      <tr>
                        <th>Date </th>
                        <th>Subject </th>
                        <th>Message </th>
                        <th>Value </th>
                      </tr>
                    </thead>

                    <tbody>
                    <GetInboxInfo />

                    </tbody>
                </table>
                <br></br>

              </div>
            </div>
            <div style={{ display: visible === 'section4' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Are you sure you want to delete your account?</h2>
                <p> Deleting your account will mean that you'll know longer have access to it and your information will be deleted. Are you ok with that?</p>

                <p> Completing the form below will ensure that this is your account and that you agree to deleting it.</p>
              <form id="AccountDelete" onSubmit={AccountDelete} method="post" action="/submit">
                              <div>
                              <label for="FirstName ">First Name:</label>
                              <input type="text" id="firstName" name="firstName"/>
                              </div>

                              <div>
                              <label for="LastName">Last Name: </label>
                              <input type="text" id="lastName" name="lastName"/>
                              </div>

                              <div>
                              <label for="Username">Username: </label>
                              <input type="text" id="Username" name="Username" required/>
                              </div>

                              <div>
                              <label for="Password">Password: </label>
                              <input type="text" id="Password" name="Password" required/>
                              </div>

                              <div>
                              <label for="Email">Email: </label>
                              <input type="text" id="Email" name="Email"/>
                              </div>

                              <button id="AccountDeleteButton" type="submit">Submit</button>
                      </form>
        

              {userInfoBeforeDeletion && (
                <div>
                  <h2>Account Deletion Successful</h2>
                  <p>You have deleted the account with the below information </p>
                 
                  <p>Username: {userInfoBeforeDeletion.user_tag}</p>
                  <p>First Name: {userInfoBeforeDeletion.first_name}</p>
                  <p>Last Name: {userInfoBeforeDeletion.last_name}</p>
                  
                  <button id="AccDeleteSignout" onClick={AccDeleteOut} type="submit">Sign Out</button>
                </div>
              )}
              </div>
              </div>
            </div>
            </div>


    


  );
  }
}


export default Visitorpage;