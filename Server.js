const http = require('http');
const sql = require('mssql');
const fs = require('fs');
const path = require('path');

    const config = {
        user: 'CSThemeParkAdminTeam7', 
        password: '2023DBTeam7!', 
        server: '2023amuseparkdb.database.windows.net', 
        database: '2023Team7AmuseParkDB', 
        options: {
            encrypt: true,
            connectTimeout: 30000,
        }
    }
;
const server = http.createServer(async (req, res) => {
  if (req.url === '/api/event' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query('SELECT * FROM special_events');
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      // await sql.close();
    }
  }
  else if (req.url === '/api/ticket' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query('SELECT TicketType, Prices FROM tickets GROUP BY Prices, TicketType');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('Internal Server Error');
    } finally {
    }
  }
  else if (req.url === '/api/ride1' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM ride_info WHERE Zone_code = 'ZONE0001'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
    }
  }
  else if (req.url === '/api/stall1' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM food_stalls WHERE Zone_code = 'ZONE0001'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
    }
  }
  else if (req.url === '/api/shop1' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM Merchandise WHERE Zone_code = 'ZONE0001'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      // await sql.close();
    }
  }
  else if (req.url === '/api/service1' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM amenities_and_service WHERE Zone_code = 'ZONE0001'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      
    }
  }
  else if (req.url === '/api/ride2' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM ride_info WHERE Zone_code = 'ZONE0002'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      
    }
  }
  else if (req.url === '/api/stall2' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM food_stalls WHERE Zone_code = 'ZONE0002'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      
    }
  }
  else if (req.url === '/api/shop2' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM Merchandise WHERE Zone_code = 'ZONE0002'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      
    }
  }
  else if (req.url === '/api/service2' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM amenities_and_service WHERE Zone_code = 'ZONE0002'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      
    }
  }
  else if (req.url === '/api/ride3' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM ride_info WHERE Zone_code = 'ZONE0003'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      
    }
  }
  else if (req.url === '/api/stall3' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM food_stalls WHERE Zone_code = 'ZONE0003'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      
    }
  }
  else if (req.url === '/api/shop3' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM Merchandise WHERE Zone_code = 'ZONE0003'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      
    }
  }
  else if (req.url === '/api/service3' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM amenities_and_service WHERE Zone_code = 'ZONE0003'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      
    }
  }
  else if (req.url === '/api/ride4' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM ride_info WHERE Zone_code = 'ZONE0004'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      
    }
  }
  else if (req.url === '/api/stall4' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM food_stalls WHERE Zone_code = 'ZONE0004'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      
    }
  }
  else if (req.url === '/api/shop4' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM Merchandise WHERE Zone_code = 'ZONE0004'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      
    }
  }
  else if (req.url === '/api/service4' && req.method === 'GET') {
    try {
      await sql.connect(config);
      const result = await sql.query("SELECT * FROM amenities_and_service WHERE Zone_code = 'ZONE0004'");
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
       //await sql.close();
    }
  }
  //VisitorPage, park info
  else if (req.url === '/api/ride' && req.method === 'GET') {
    try {

      await sql.connect(config);
 

      const result = await sql.query("\
      SELECT ride_info.RideName, ride_info.Description \
      FROM ride_info \
      WHERE ride_info.Accessibility_Attraction = 'Available'\
    ");


     const resultTest = await sql.query("SELECT ride_info.RideName AS InactiveRide, ride_info.Description AS InactiveDescript\
     FROM ride_info \
     WHERE ride_info.OperationStatus = 'Inactive'\ ");


     const userInfotest = await sql.query("\
     select customer.customer_id, customer.first_name, customer.last_name, customer.user_pass, customer.user_tag, customer.phone_number, customer.email,customer.payment_method,customer.home_address FROM customer \
   ");

    const userTicketsInfo = await sql.query("\
    select * from tickets ");

     const responseData = {
      RideData: result.recordset,
      InactiveRides: resultTest.recordset,
      userInfo: userInfotest.recordset,
      TicketInfo: userTicketsInfo.recordset
    };


      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(responseData));
    } catch (error) {
      console.error('Error fetching data:', error.message);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } finally {
   
      //await sql.close();
    }

  //visitorpage, purch ticket section
}else if (req.url=== '/api/purchaseTicket' && req.method === 'POST') {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', async () => {
    try {
      await sql.connect(config);

      const { TicketsTypes, Amount, FirstName, LastName, Address, CardInfo, customer_id } = JSON.parse(body);

      const calcPrices = (TicketsTypes) => {
        let Prices = 0;

        switch(TicketsTypes){
          case 'DayPass':
            Prices = 33;
          break;
          case 'SeasonalPass':
            Prices = 61;
          break;
          case 'AnnualPass':
            Prices = 151;
          break;
          case 'PremiumPass':
            Prices = 351;
          break;
        }
        return Prices;
      }
      const Prices = calcPrices(TicketsTypes);

      const calcTotal = (TicketsTypes, Amount) => {
        let Total = 0;

        switch(TicketsTypes){
          case 'DayPass':
            Total = Amount * 33;
          break;
          case 'SeasonalPass':
            Total = Amount * 61;
          break;
          case 'AnnualPass':
            Total = Amount * 151;
          break;
          case 'PremiumPass':
            Total = Amount * 351;
          break;
        }
        return Total;
      }
      const Total = calcTotal(TicketsTypes, Amount);

      const calcBenefits = (TicketsTypes) => {
        let Benefits = "None"; 
        
        switch(TicketsTypes){
          case 'DayPass':
            Benefits = "Ride Photos or Souvenirs";
          break;
          case 'SeasonalPass':
            Benefits = "Special Shows or Entertainment";
          break;
          case 'AnnualPass':
            Benefits = "Discounts on Merchandise & Dining plan";
          break;
          case 'PremiumPass':
            Benefits = "Fast Pass";
          break;
        }
        return Benefits;
      }
      const Benefits = calcBenefits(TicketsTypes);

      await sql.query(`
        INSERT INTO tickets(Ticket_id, CustomerID, Date, TicketType, Benefits, Prices, Amount, Total, first_name, last_name, Address, CardNum)
        VALUES
        (CONCAT('Tick', SUBSTRING(CONVERT(VARCHAR(255), NEWID()), 1, 4)), '${customer_id}',
        GETDATE(),
         '${TicketsTypes}', '${Benefits}', ${Prices}, ${Amount}, ${Total}, '${FirstName}', '${LastName}', '${Address}', '${CardInfo}');
      `);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'Ticket purchase successful' }));
    } catch (error) {
      console.error('Error processing ticket purchase:', error.message);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
    } finally {
      //await sql.close();
    }
  });

  //visitorpage delete account section
} else if (req.url=== '/api/AccountDelete' && req.method === 'POST') {
  let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        await sql.connect(config);

        const {firstName, lastName, Username, Password, Email } = JSON.parse(body);


       const result = await sql.query(`
          Select * from customer
          WHERE
          first_name = '${firstName}' AND
          last_name = '${lastName}' AND
          user_tag = '${Username}' AND
          user_pass = '${Password}' AND
          email = '${Email}'
        `);

        const userInfoBeforeDeletion = result.recordset[0];

        await sql.query(`
        delete from customer
        WHERE
        first_name = '${firstName}' AND
        last_name = '${lastName}' AND
        user_tag = '${Username}' AND
        user_pass = '${Password}' AND
        email = '${Email}'
      `);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Account Delete Successful', userInfoBeforeDeletion}));
      } catch (error) {
        console.error('Error processing account deletion:', error.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
      } finally {
        //await sql.close();
      }

  });

//visitorpage, account info section
} else if (req.url=== '/api/AccountUpdate' && req.method === 'POST') {
  let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        await sql.connect(config);

        const {CurrentUsername, firstName, lastName, Username, Password, Email, PhoneNum, Address, Payment } = JSON.parse(body);

        await sql.query(`
          UPDATE customer
       
          SET 
          first_name = '${firstName}',
          last_name = '${lastName}',
          user_tag = '${Username}',
          user_pass = '${Password}',
          email = '${Email}',
          phone_number = '${PhoneNum}',
          home_address = '${Address}',
          payment_method = '${Payment}'

          WHERE user_tag = '${CurrentUsername}';

          
        `);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Account Update Successful' }));
      } catch (error) {
        console.error('Error processing account update:', error.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
      } finally {
        //await sql.close();
      }

  });
}
    //VisitorPage, inbox
    else if (req.url === '/api/inbox' && req.method === 'GET') {
      try {

        await sql.connect(config);


        const result = await sql.query("\
        SELECT * from Inbox \
      ");

      const responseData = {
        InboxData: result.recordset,

      };


        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(responseData));
      } catch (error) {
        console.error('Error fetching data:', error.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } finally {
    
        //await sql.close();
      }
}
   else if (req.url === '/api/issuelog' && req.method === 'GET') {
    try {
    await sql.connect(config);

      const result = await sql.query("SELECT * FROM issue_log");

       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
    // await sql.close();
    }
  }
  else if (req.url === '/api/rideinfo' && req.method === 'GET') {
    try {
    await sql.connect(config);

      const result = await sql.query("SELECT * FROM ride_info");

       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
    // await sql.close();
    }
  }
  else if (req.url === '/api/inactiveride' && req.method === 'GET') {
    try {
    await sql.connect(config);

      const result = await sql.query("SELECT RideID, RideName, Name FROM ride_info, theme_zone WHERE ride_info.Zone_code = theme_zone.Zone_code AND ride_info.OperationStatus = 'Inactive'");

       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
    // await sql.close();
    }
  }
  else if (req.url === '/api/monthlybreakdowns' && req.method === 'GET') {
    try {
    await sql.connect(config);

      const result = await sql.query("SELECT MONTH(DateStart)AS MONTH, YEAR(DateStart) AS YEAR, COUNT(IssueRideID) AS BROKE_DOWN_RIDES FROM issue_log GROUP BY MONTH(DateStart), YEAR(DateStart)");

       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
    // await sql.close();
    }
  }
 else if (req.url === '/api/maintenancestaff' && req.method === 'GET') {
    try {
    await sql.connect(config);

      const result = await sql.query("SELECT * FROM employee");

       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
    // await sql.close();
    }
  }
  else if (req.url=== '/api/updateemppass' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', async () => {
      try {
        await sql.connect(config);
        const { CurrentPassword, Password, PermitCode } = JSON.parse(body);
        await sql.query(`
          UPDATE employee
          SET user_pass = '${Password}'
          WHERE user_pass = '${CurrentPassword}' AND Supervisor_code = ${PermitCode};
        `);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: true, message: 'Updated Password successfuly!' }));
      } catch (error) {
        console.error('Error processing:', error.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
      } finally {
        // await sql.close();
      }
    });
  }
 else if (req.url=== '/api/updateempwage' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', async () => {
      try {
        await sql.connect(config);
        const { CurrentPassword, Wage, PermitCode } = JSON.parse(body);
        await sql.query(`
          UPDATE employee
          SET hourly_pay = ${Wage}
          WHERE user_pass = '${CurrentPassword}' AND Supervisor_code = ${PermitCode};
        `);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: true, message: 'Updated Hourly Pay successfully!' }));
      } catch (error) {
        console.error('Error processing:', error.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
      } finally {
        // await sql.close();
      }
    });
  }
  else if (req.url=== '/api/updateridestat' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', async () => {
      try {
        await sql.connect(config);
        const { RideID, Status } = JSON.parse(body);
        const setStat = (Status) => {
          let Stat = '';
          switch(Status){
            case 'Active':
              Stat = 'Active'
            break;
            case 'Inactive':
              Stat = 'Inactive';
            break;
          }
          return Stat;
        }
        const Stat = setStat(Status);
        await sql.query(`
          UPDATE ride_info
          SET OperationStatus = '${Stat}'
          WHERE RideID = '${RideID}';
        `);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: true, message: 'Updated Status successfully' }));
      } catch (error) {
        console.error('Error processing:', error.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
      } finally {
        // await sql.close();
      }
    });
  }

  else if (req.url === '/api/injuryreport' && req.method === 'GET') {
    try {
      await sql.connect(config);
  
      const result = await sql.query(`
        SELECT 
          ride_info.RideName,
          DATEPART(YEAR, injury_case.[Date]) AS [Year],
          DATEPART(MONTH, injury_case.[Date]) AS [Month],
          DATEPART(WEEK, injury_case.[Date]) AS [Week],
          AVG(injury_case.AmountInjured) AS AvgInjured,
          COUNT(issue_log.issueRideID) AS Breakdowns
        FROM 
          injury_case
        LEFT JOIN issue_log ON injury_case.RideID = issue_log.IssueRideID
        LEFT JOIN ride_info ON injury_case.RideID = ride_info.RideID
        GROUP BY 
          ride_info.RideName,
          DATEPART(YEAR, injury_case.[Date]),
          DATEPART(MONTH, injury_case.[Date]),
          DATEPART(WEEK, injury_case.[Date])
        ORDER BY 
          [Year], [Month], [Week], ride_info.RideName;
      `);
      // ... rest of your code
  

       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
    // await sql.close();
    }
  }

  else if (req.url === '/api/customer' && req.method === 'GET') {
    try {
      // Connect to the database
      await sql.connect(config);
 
      // Query to fetch data from the login table
      const result = await sql.query('SELECT * FROM customer');
 
      // Send the data as JSON
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      // Close the database connection
      //await sql.close();
    }
  }

  else if (req.url === '/api/employee' && req.method === 'GET') {
    try {
      // Connect to the database
      await sql.connect(config);
 
      // Query to fetch data from the login table
      const result = await sql.query('SELECT * FROM employee');
 
      // Send the data as JSON
       res.writeHead(200, { 'Content-Type': 'application/json' });
       return res.end(JSON.stringify(result.recordset));
    } catch (error) {
      console.error('Error fetching data:', error.message);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       return res.end('Internal Server Error');
    } finally {
      // Close the database connection
      //await sql.close();
    }
  }

  else {
    // Serve static files for React app
    serveStaticFile(req, res);
    }
  });
const port =  process.env.PORT || 3001; 
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function serveStaticFile(req, res) {
  const filePath = req.url === '/' ? 'build/index.html' : path.join(__dirname, 'build', req.url); //important
  const contentType = getContentType(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

// Function to determine the content type based on file extension
function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.js':
      return 'text/javascript';
    case '.css':
      return 'text/css';
    case '.html':
      return 'text/html';
    default:
      return 'application/octet-stream';
  }
}
