import './MainPg.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; 

function MainPg() {
  const [visible, setVisibleSection] = useState('section1');

  const showSection = (section) => {
    setVisibleSection(section);
  }
  const[Zone1Data, setZone1Data] = useState([]);
  const[Zone2Data, setZone2Data] = useState([]);
  const[Zone3Data, setZone3Data] = useState([]);
  const[Zone4Data, setZone4Data] = useState([]);
  const[EventData, setEventData] = useState([]);
  const[TicketData, setTicketData] = useState([]);
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
  const[HelpDeskData, setHelpDeskData] = useState([]);
  const[SecurityData, setSecurityData] = useState([]);
  const[EmergencyData, setEmergencyData] = useState([]);
  useEffect(() => {
    
    fetch('/api/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setEventData(data.EventData);
        setTicketData(data.TicketData);
        setZone1Data(data.Zone1Data);
        setZone2Data(data.Zone2Data);
        setZone3Data(data.Zone3Data);
        setZone4Data(data.Zone4Data);
        setRide1Data(data.Ride1Data);
        setRide2Data(data.Ride2Data);
        setRide3Data(data.Ride3Data);
        setRide4Data(data.Ride4Data);
        setStall1Data(data.Stall1Data);
        setStall2Data(data.Stall2Data);
        setStall3Data(data.Stall3Data);
        setStall4Data(data.Stall4Data);
        setShop1Data(data.Shop1Data);
        setShop2Data(data.Shop2Data);
        setShop3Data(data.Shop3Data);
        setShop4Data(data.Shop4Data);
        setService1Data(data.Service1Data);
        setService2Data(data.Service2Data);
        setService3Data(data.Service3Data);
        setService4Data(data.Service4Data);
        setHelpDeskData(data.HelpDeskData);
        setSecurityData(data.SecurityData);
        setEmergencyData(data.EmergencyData);
        
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='App'>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Jomhuria&family=Josefin+Sans&family=Mitr:wght@200&display=swap" rel="stylesheet"></link>
      <ul className='headers'>
        <li className='header_item'><u>DB Theme Park</u></li>
        <li className='header_item' id='sign_in'>
          <Link to='/Signin'>Sign in</Link>
        </li>
      </ul>

      <div className='welcome'>
          <p className='welcome_line'>Welcome back to DB Theme Park!</p>
      </div>  
      <div className='img_outer'>
          <img src='https://townsquare.media/site/11/files/2022/02/attachment-grace-ho-zej4HPQLR5o-unsplash-e1643878973835.jpg' alt='Theme Park' className='image'></img>
      </div>
      <div>
          <p className='slogan'>Fun for everyone!</p>
          <p className='startyear'>Founded in 2022.</p>
      </div>
      <div>
        <p className='park_info'>Park Information</p>
      </div>

      <div className='section'>
        <p className='title'><b>Events</b></p>
        <p className='info'>Come attend one of the upcoming Db Theme Park latest events!</p>
        <p className='info'>Admission payment at entrance of event location</p>
      </div>
      <table  className='event_table'>
        <thead>
        <tr className='event_columns'>
          <th>Event</th>
          <th>Date</th>
          <th>Description</th>
          <th>Location</th>
        </tr>
        </thead>
        <tbody>
          {EventData.map((special_events) => (
            <tr key={special_events.id}>
              <td>{special_events.Event_name}</td>
              <td>{new Date(special_events.event_date).toLocaleDateString('en-US')}</td>
              <td>{special_events.event_details}</td>
              <td>{special_events.event_location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='section'>
        <p className='title'><b>Tickets</b></p>
        <p className='info'>Want to visit DB Theme Park? Here are the ticket options and
        their prices below!</p>
        <p className='info'>Tickets are required to event the park.</p>
      </div>
      <table  className='ticket_table'>
        <thead>
        <tr className='ticket_columns'>
        <th>Ticket type</th>
        <th>Cost</th>
        </tr>
        </thead>
        <tbody>
          {TicketData.map((tickets) => (
            <tr key={tickets.id}>
              <td>{tickets.TicketType}</td>
              <td>${tickets.Prices}.00</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className='section'>
        <p className='title'><b>Theme Zones</b></p>
        <div className="optionzone">
        {Zone1Data.map((theme_zone) => (
              <button className="springzone" onClick={() => showSection('section1')} key={theme_zone.id}>
                {theme_zone.Name}
              </button>
        ))}
        {Zone2Data.map((theme_zone) => (
              <button className="summerzone"onClick={() => showSection('section2')} key={theme_zone.id}>
                {theme_zone.Name}
              </button>
        ))}
        {Zone3Data.map((theme_zone) => (
              <button className="fallzone"onClick={() => showSection('section3')} key={theme_zone.id}>
                {theme_zone.Name}
              </button>
        ))}
        {Zone4Data.map((theme_zone) => (
              <button className="winterzone" onClick={() => showSection('section4')} key={theme_zone.id}>
              {theme_zone.Name}
              </button> 
        ))} 
        </div>

        <div style={{ display: visible === 'section1' ? 'block' : 'none' }}>
        <ul>
        <li className='entity'>Rides</li>
        <table  className='ride_table'>
        <thead>
        <tr>
        <th>Ride</th>
        <th>Type</th>
        <th>Description</th>
        </tr>
        </thead>
        <tbody>
          {Ride1Data.map((ride_info) => (
            <tr key={ride_info.id}>
              <td>{ride_info.RideName}</td>
              <td>{ride_info.RideType}</td>
              <td>{ride_info.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <li className='entity'>Restaurant</li>
        <table  className='food_table'>
        <thead>
        <tr>
        <th>Restaurant</th>
        <th>Type</th>
        </tr>
        </thead>
        <tbody>
          {Stall1Data.map((food_stalls) => (
            <tr key={food_stalls.id}>
              <td>{food_stalls.Name}</td>
              <td>{food_stalls.Type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <li className='entity'>Merchandise Shop</li>
        <table  className='shop_table'>
        <thead>
        <tr>
        <th>Shop</th>
        <th>Type</th>
        </tr>
        </thead>
        <tbody>
          {Shop1Data.map((Merchandise) => (
            <tr key={Merchandise.id}>
              <td>{Merchandise.Name}</td>
              <td>{Merchandise.ProductType}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <li className='entity'>Amenities and Service</li>
        <table  className='amenities_table'>
        <thead>
        <tr>
        <th>Amenity</th>
        <th>Type</th>
        <th>Description</th>
        </tr>
        </thead>
        <tbody>
          {Service1Data.map((amenities_and_service) => (
            <tr key={amenities_and_service.id}>
              <td>{amenities_and_service.Name}</td>
              <td>{amenities_and_service.Service}</td>
              <td>{amenities_and_service.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </ul>
      </div>

      <div style={{ display: visible === 'section2' ? 'block' : 'none' }}>
        <ul>
        <li className='entity'>Rides</li>
        <table  className='ride_table'>
        <thead>
        <tr>
        <th>Ride</th>
        <th>Type</th>
        <th>Description</th>
        </tr>
        </thead>
        <tbody>
          {Ride2Data.map((ride_info) => (
            <tr key={ride_info.id}>
              <td>{ride_info.RideName}</td>
              <td>{ride_info.RideType}</td>
              <td>{ride_info.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <li className='entity'>Restaurant</li>
        <table  className='food_table'>
        <thead>
        <tr>
        <th>Restaurant</th>
        <th>Type</th>
        </tr>
        </thead>
        <tbody>
          {Stall2Data.map((food_stalls) => (
            <tr key={food_stalls.id}>
              <td>{food_stalls.Name}</td>
              <td>{food_stalls.Type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <li className='entity'>Merchandise Shop</li>
        <table  className='shop_table'>
        <thead>
        <tr>
        <th>Shop</th>
        <th>Type</th>
        </tr>
        </thead>
        <tbody>
          {Shop2Data.map((Merchandise) => (
            <tr key={Merchandise.id}>
              <td>{Merchandise.Name}</td>
              <td>{Merchandise.ProductType}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <li className='entity'>Amenities and Service</li>
        <table  className='amenities_table'>
        <thead>
        <tr>
        <th>Amenity</th>
        <th>Type</th>
        <th>Description</th>
        </tr>
        </thead>
        <tbody>
          {Service2Data.map((amenities_and_service) => (
            <tr key={amenities_and_service.id}>
              <td>{amenities_and_service.Name}</td>
              <td>{amenities_and_service.Service}</td>
              <td>{amenities_and_service.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </ul>
      </div>

      <div style={{ display: visible === 'section3' ? 'block' : 'none' }}>
        <ul>
        <li className='entity'>Rides</li>
        <table  className='ride_table'>
        <thead>
        <tr>
        <th>Ride</th>
        <th>Type</th>
        <th>Description</th>
        </tr>
        </thead>
        <tbody>
          {Ride3Data.map((ride_info) => (
            <tr key={ride_info.id}>
              <td>{ride_info.RideName}</td>
              <td>{ride_info.RideType}</td>
              <td>{ride_info.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <li className='entity'>Restaurant</li>
        <table  className='food_table'>
        <thead>
        <tr>
        <th>Restaurant</th>
        <th>Type</th>
        </tr>
        </thead>
        <tbody>
          {Stall3Data.map((food_stalls) => (
            <tr key={food_stalls.id}>
              <td>{food_stalls.Name}</td>
              <td>{food_stalls.Type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <li className='entity'>Merchandise Shop</li>
        <table  className='shop_table'>
        <thead>
        <tr>
        <th>Shop</th>
        <th>Type</th>
        </tr>
        </thead>
        <tbody>
          {Shop3Data.map((Merchandise) => (
            <tr key={Merchandise.id}>
              <td>{Merchandise.Name}</td>
              <td>{Merchandise.ProductType}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <li className='entity'>Amenities and Service</li>
        <table  className='amenities_table'>
        <thead>
        <tr>
        <th>Amenity</th>
        <th>Type</th>
        <th>Description</th>
        </tr>
        </thead>
        <tbody>
          {Service3Data.map((amenities_and_service) => (
            <tr key={amenities_and_service.id}>
              <td>{amenities_and_service.Name}</td>
              <td>{amenities_and_service.Service}</td>
              <td>{amenities_and_service.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </ul>
      </div>

      <div style={{ display: visible === 'section4' ? 'block' : 'none' }}>
        <ul>
        <li className='entity'>Rides</li>
        <table  className='ride_table'>
        <thead>
        <tr>
        <th>Ride</th>
        <th>Type</th>
        <th>Description</th>
        </tr>
        </thead>
        <tbody>
          {Ride4Data.map((ride_info) => (
            <tr key={ride_info.id}>
              <td>{ride_info.RideName}</td>
              <td>{ride_info.RideType}</td>
              <td>{ride_info.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <li className='entity'>Restaurant</li>
        <table  className='food_table'>
        <thead>
        <tr>
        <th>Restaurant</th>
        <th>Type</th>
        </tr>
        </thead>
        <tbody>
          {Stall4Data.map((food_stalls) => (
            <tr key={food_stalls.id}>
              <td>{food_stalls.Name}</td>
              <td>{food_stalls.Type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <li className='entity'>Merchandise Shop</li>
        <table  className='shop_table'>
        <thead>
        <tr>
        <th>Shop</th>
        <th>Type</th>
        </tr>
        </thead>
        <tbody>
          {Shop4Data.map((Merchandise) => (
            <tr key={Merchandise.id}>
              <td>{Merchandise.Name}</td>
              <td>{Merchandise.ProductType}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <li className='entity'>Amenities and Service</li>
        <table  className='amenities_table'>
        <thead>
        <tr>
        <th>Amenity</th>
        <th>Type</th>
        <th>Description</th>
        </tr>
        </thead>
        <tbody>
          {Service4Data.map((amenities_and_service) => (
            <tr key={amenities_and_service.id}>
              <td>{amenities_and_service.Name}</td>
              <td>{amenities_and_service.Service}</td>
              <td>{amenities_and_service.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </ul>
      </div>
      
    </div>
      <div className='section'>
              <p className='title'><b>Help Desk</b></p>
              {HelpDeskData.map((help_desk) => (
              <p className='info' key={help_desk.id}>
                Location: {help_desk.location}
                <br></br>
                <br></br>
                Contact phone number: {help_desk.phone_num}
                <br></br>
                <br></br>
                Email: {help_desk.email}
              </p>
              ))}
              <p className='title'><b>Security Office</b></p>
              {SecurityData.map((security) => (
              <p className='info' key={security.id}>
                Location: {security.booth_location}
                <br></br>
                <br></br>
                Contact phone number: {security.phone_num}
                <br></br>
                <br></br>
                Email: {security.email}
                <br></br>
                <br></br>
                Rules: {security.Rules}
              </p>
              ))}
              <p className='title'><b>Emergency Office</b></p>
              {EmergencyData.map((emergency) => (
              <p className='info' key={emergency.id}>
                Location: {emergency.booth_location}
                <br></br>
                <br></br>
                Contact phone number: {emergency.phone_num}
                <br></br>
                <br></br>
                Email: {emergency.email}
              </p>
              ))}
      </div>
    </div>

);
}
export default MainPg;
