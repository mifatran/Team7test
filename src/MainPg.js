import './MainPg.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; 


function MainPg() {
  const [visible, setVisibleSection] = useState('section1');

  const showSection = (section) => {
    setVisibleSection(section);
  }

  const[EventData, setEventData] = useState([]);
  useEffect(() => {
    
    fetch('/api/event')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setEventData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const[TicketData, setTicketData] = useState([]);
  useEffect(() => {
    
    fetch('/api/ticket')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setTicketData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const[Ride1Data, setRide1Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/ride1')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setRide1Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const[Stall1Data, setStall1Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/stall1')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setStall1Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const[Shop1Data, setShop1Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/shop1')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setShop1Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const[Service1Data, setService1Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/service1')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setService1Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const[Ride2Data, setRide2Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/ride2')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setRide2Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const[Stall2Data, setStall2Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/stall2')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setStall2Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const[Shop2Data, setShop2Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/shop2')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setShop2Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const[Service2Data, setService2Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/service2')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setService2Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const[Ride3Data, setRide3Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/ride3')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setRide3Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const[Stall3Data, setStall3Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/stall3')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setStall3Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const[Shop3Data, setShop3Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/shop3')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setShop3Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const[Service3Data, setService3Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/service3')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setService3Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const[Ride4Data, setRide4Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/ride4')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setRide4Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const[Stall4Data, setStall4Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/stall4')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setStall4Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const[Shop4Data, setShop4Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/shop4')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setShop4Data(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const[Service4Data, setService4Data] = useState([]);
  useEffect(() => {
    
    fetch('/api/service4')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setService4Data(data))
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

      <div className='event'>
        <p className='events'><b>Events</b></p>
        <p className='event_invt'>Come attend one of the upcoming Db Theme Park latest events!</p>
        <p className='event_invt'>Admission payment at entrance of event location</p>
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
              <td>{special_events.event_date}</td>
              <td>{special_events.event_details}</td>
              <td>{special_events.event_location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='ticket'>
        <p className='tickets'><b>Tickets</b></p>
        <p className='ticket_info'>Want to visit DB Theme Park? Here are the ticket options and
        their prices below!</p>
        <p className='ticket_info'>Tickets are required to event the park.</p>
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
      
      <div className='theme_zone'>
        <p className='theme_zones'><b>Theme Zones</b></p>
        <div className="optionzone">
              <button className="springzone" onClick={() => showSection('section1')}>
                Blooming Meadows
              </button>
              <button className="summerzone"onClick={() => showSection('section2')}>
                Heatwave Heaven
              </button>
              <button className="fallzone"onClick={() => showSection('section3')}>
                Crimson Corner
              </button>
              <button className="winterzone" onClick={() => showSection('section4')}>
              Winter Wonderland
              </button>  
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

    </div>

);
}
export default MainPg;