import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function BusinessAnalyst() {
  const [visible, setVisibleSection] = useState('section1');
  const [selectedShop, setSelectedShop] = useState('');
  const [shopData, setShopData] = useState('');
  const [selectedRide, setSelectedRide] = useState('');
  const [rideData, setRideData] = useState('');
  const [businessreportData, setbusinessreportData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const fetchData = async (url, setStateFunction) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.text();
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(data, 'text/html');
      setStateFunction(htmlDocument);
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
    }
  };

  useEffect(() => {
    fetchData('shop_data_page.html', setShopData);
    fetchData('ride_data_page.html', setRideData);
  }, []);

  

  const showSection = (section) => {
    setVisibleSection(section);
  };

  const handleShopIdChange = (event) => {
    setSelectedShop(event.target.value);
  };

  const handleRideIdChange = (event) => {
    setSelectedRide(event.target.value);
  };

  const renderShopContent = () => {
    if (shopData) {
      const selectedShopData = shopData.getElementById(selectedShop);
      return selectedShopData ? selectedShopData.innerHTML : null;
    }
    return null;
  };

  const renderRideContent = () => {
    if (rideData) {
      const selectedRideData = rideData.getElementById(selectedRide);
      return selectedRideData ? selectedRideData.innerHTML : null;
    }
    return null;
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

 
  
    useEffect(() => {
    fetch('/api/businessreport')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
       setbusinessreportData(data.businessreportData);
       setStartDate(data.StartDate);
       setEndDate(data.EndDate);

      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  const handleBusiness = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/businessreport', {
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

  const signOut = () => {
    localStorage.removeItem("authenticatedB");
    navigate("/"); //Navigate back to main page
  };

  if (localStorage.getItem("authenticatedB") == false || localStorage.getItem("authenticatedB") == null) {
    console.log("Unsuccessful login");
    return <Navigate replace to={navigate(-1)} />;
  }
  
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Jomhuria&family=Josefin+Sans&family=Mitr:wght@200&display=swap" rel="stylesheet"></link>
      <ul className="nav-headers">
        <li className="nav-item"><b>Theme Park</b></li>
        <li className="nav-item"><button onClick={signOut}>Sign out</button></li>
      </ul>

        <div >
        

          <h1 className="Welcome-back-employee"><strong>Welcome back, {"{"}BusinessAnalyst{"}"}!</strong></h1>
        </div>
        <div className="group">
          <div className="view">
            <div className="mainbox">
            <div className="menubox">
                        <div className="Menutxt">Menu</div>
            </div>
            <div className="optionbox">
              <button className="AccInfoButton" onClick={() => showSection('section1')}>
                Shop Data
              </button>
              <button className="TicketInfoButton"onClick={() => showSection('section2')}>
                Ride Data
              </button>
              <button className="ParkInfoButton"onClick={() => showSection('section3')}>
                View Report
              </button>
            </div>
            <div className="Menutxt">Menu</div>
            

            <div style={{ display: visible === 'section1' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Shop-data info</h2>
                <h3>Shop information</h3>
  
        <select value={selectedShop} onChange={handleShopIdChange}>
        <option value="">Select a shop</option>
        <option value="Adventures Emporium">Adventures Emporium</option>
        <option value="Whimsical Wares">Whimsical Wares</option>
        <option value="Imagination Station">Imagination Station</option>
        <option value="Wonderland Gifts">Wonderland Gifts</option>

        {/* Add more options for other shops as needed */}
        </select>

      {/* Render shop content based on the selected shop */}
      <div className="shopContent" dangerouslySetInnerHTML={{ __html: renderShopContent() }}></div>
      </div>
    </div>



            <div style={{ display: visible === 'section2' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Ride data info</h2>
                <h3>Ride information</h3>

                
                
                 {/* Dropdown menu for shop selection */}
                 <select value={selectedRide} onChange={handleRideIdChange}>
                    <option value="">Select a Ride</option>
                    <option value="Speedster Sprint">Speedster Sprint</option>
                    <option value="Pirate's Cove">Pirate's Cove</option>
                    <option value="Twisted Twister">Twisted Twister</option>
                    <option value="Jungle Safari">Jungle Safari</option>
                    <option value="Magical Meadows">Magical Meadows</option>
                    <option value="Lunar Leap">Lunar Leap</option>
                    <option value="Aquatic Adventure">Aquatic Adventure</option>
                    <option value="Rolling Thunder">Rolling Thunder</option>
                    <option value="Space Explorers">Space Explorers</option>
                    <option value="Fantasy Flight">Fantasy Flight</option>
                    <option value="Western Roundup">Western Roundup</option>
                    <option value="Dino Expedition">Dino Expedition</option>
                    <option value="Whirlwind Whiz">Whirlwind Whiz</option>
                    <option value="Time Traveler">Time Traveler</option>
                    <option value="Galactic Odyssey">Galactic Odyssey</option>
                    <option value="Tropical Splash">Tropical Splash</option>
                    <option value="Wildfire Run">Wildfire Run</option>
                    <option value="Dragon's Lair">Dragon's Lair</option>
                    <option value="Enchanted Carousel">Enchanted Carousel</option>
                    <option value="Skyward Soar">Skyward Soar</option>
                    <option value="Mystic Falls">Mystic Falls</option>

        {/* Add more options for other shops as needed */}
                  </select>

      {/* Render shop content based on the selected shop */}
          <div className="rideContent" dangerouslySetInnerHTML={{ __html: renderRideContent() }}></div>

               
          </div>
        </div>
        
      {/* Section for displaying reports */}
      <div style={{ display: visible === 'section3' ? 'block' : 'none' }}>
      
      <div className="optiontextbox">

      <form onSubmit={handleBusiness}>
        
    <div className="date-pickers">
      <label htmlFor="startDate">Start Date:</label>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        id="startDate"
        name="startDate"
        dateFormat="yyyy-MM-dd"
      />
      
      <label htmlFor="endDate">End Date:</label>
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        id="endDate"
        name="endDate"
        dateFormat="yyyy-MM-dd"
      />
      
      <button type="submit">Fetch Reports</button>
    </div>
  </form>

  <table>
    <thead>
      <tr>
        <th>Frequency</th>
        <th>Year</th>
        <th>PeriodStartDate</th>
        <th>PeriodEndDate</th>
        <th>NewAmount</th>
        <th>OldAmount</th>
        <th>AllCustomers</th>
        {/* Add more header columns if needed */}
      </tr>
    </thead>
    <tbody>
      {businessreportData && businessreportData.map((tickets, index) => (
        <tr key={index}>
          <td>{tickets.Frequency}</td>
          <td>{tickets.Year}</td>
          <td>{tickets.PeriodStartDate}</td>
          <td>{tickets.PeriodEndDate}</td>
          <td>{tickets.NewAmount}</td>
          <td>{tickets.OldAmount}</td>
          <td>{tickets.AllCustomers}</td>
          {/* Adjust property names as per your data structure */}
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
    </div>
    </div>
    </div>
    
    </div>


    
  )
}
    


export default BusinessAnalyst;