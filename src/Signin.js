import './Signin.css';
import { Link, useNavigate } from "react-router-dom"; 
import { useState, useEffect } from 'react';

//https://www.makeuseof.com/redirect-user-after-login-react/

function Signin() {
    //customer data
    const[CustomerData, setCustomerData] = useState([]);
    useEffect(() => {
      fetch('/api/customer')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setCustomerData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    //employee data
    const[EmployeeData, setEmployeeData] = useState([]);
    useEffect(() => {
      fetch('/api/employee')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setEmployeeData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated") || false);

    const navigate = useNavigate();

    const handleSubmit = e => {
      e.preventDefault();

      const emailInput = document.getElementById('username').value;
      
      if(emailInput.includes("EmpB")) {
        let user = null;
        for (const obj of EmployeeData) {
          if (obj.email === email ) {
            console.log(email);
            if(obj.user_pass === password) {
              console.log("Login successful");
              setauthenticated(true);
              localStorage.setItem("authenticatedB", true);
              localStorage.setItem("idB", obj.employee_id);
              navigate("/BusinessAnalyst");
              break;
            }
            else {
              alert("Wrong username or password");
            }
          }
        }
      }

      if(emailInput.includes("EmpM")) {
        let user = null;
        for (const obj of EmployeeData) {
          if (obj.email === email ) {
            console.log(email);
            if(obj.user_pass === password) {
              console.log("Login successful");
              setauthenticated(true);
              localStorage.setItem("authenticatedM", true);
              localStorage.setItem("idM", obj.employee_id);
              navigate("/Maintenance");
              break;
            }
            else {
              alert("Wrong username or password");
            }
          }
        }
      }
      
      else {
        console.log("You are not an employee");
        let user = null;
        for (const obj of CustomerData) {
          if (obj.email === email ) {
            console.log(email);
            if(obj.user_pass === password) {
              console.log("Login successful");
              setauthenticated(true);
              localStorage.setItem("authenticatedV", true);
              localStorage.setItem("idV", obj.customer_id);
              navigate("/Visitorpage");
              break;
            }
            else {
              alert("Wrong username or password");
            }
          }
        }
      }
    };
    //console.log(CustomerData);
    return (
    <div className="Signin">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Jomhuria&family=Josefin+Sans&family=Mitr:wght@200&display=swap" rel="stylesheet"></link>
      <ul className="nav-headers">
        <li className="nav-item" id='mainpg'>
          <Link to='/'>DB Theme Park</Link>
        </li>
        <li className="nav-item">About</li>
        <li className="nav-item" id='signup'>
            {/* Endpoint to route to Signup component */} 
            <Link to="/Signup">Sign up</Link> 
        </li>
        <li className="nav-item">Contact</li>
      </ul>

      <div className="signin-body">
        <form className="signin-form" onSubmit={handleSubmit}>
          <h3>Sign in</h3>

          <label for="email">Email</label>
          <input type="text" placeholder="Email" id="username" value={email} onChange={e => setEmail(e.target.value)}/>

          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button className="login-button" type="submit">
            Log In
          </button>
        </form>
      </div>
      
    </div>
    );
}

export default Signin;
