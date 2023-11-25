const http = require('http');
const sql = require('mssql');
const fs = require('fs');
const path = require('path');
const url = require('url');

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
 
  //VisitorPage, park info
 if (req.url === '/api/ride' && req.method === 'GET') {
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
    else if (req.url=== '/api/addeventinfo' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          await sql.connect(config);
          const { Zone_code, Event_name, event_details, event_capacity, event_date, Status } = JSON.parse(body);
          const setZone = (Zone_code) => {
            let Zone = '';
            switch(Zone_code){
              case '':
              break;
              case 'ZONE0001':
                Zone = 'ZONE0001';
              break;
              case 'ZONE0002':
                Zone = 'ZONE0002';
              break;
              case 'ZONE0003':
                Zone = 'ZONE0003';
              break;
              case 'ZONE0004':
                Zone = 'ZONE0004';
              break;
            }
            return Zone;
          }
          const Zone = setZone(Zone_code);
          const setStat = (Status) => {
            let Stat = '';
            switch(Status){
              case '':
              break;
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
            INSERT INTO special_events (Event_ID, Zone_code, Event_name, event_details, event_capacity, event_date, Status,)
            VALUES (CONCAT('EVT', SUBSTRING(CONVERT(VARCHAR(255), NEWID()), 1, 5)), '${Zone}', '${Event_name}', '${event_details}', ${event_capacity}, '${event_date}', '${Stat}');
          `);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, message: 'Added Information successfully' }));
        } catch (error) {
          console.error('Error processing:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
        } finally {
          // await sql.close();
        }
      });
    }
    else if (req.url=== '/api/addrideinfo' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          await sql.connect(config);
          const { Zone_code, RideName, Description, SafetyRules, RideType, OperationStatus, Accessibility } = JSON.parse(body);
          const setZone = (Zone_code) => {
            let Zone = '';
            switch(Zone_code){
              case '':
              break;
              case 'ZONE0001':
                Zone = 'ZONE0001';
              break;
              case 'ZONE0002':
                Zone = 'ZONE0002';
              break;
              case 'ZONE0003':
                Zone = 'ZONE0003';
              break;
              case 'ZONE0004':
                Zone = 'ZONE0004';
              break;
            }
            return Zone;
          }
          const Zone = setZone(Zone_code);
          const setStat = (OperatingStatus) => {
            let Stat = '';
            switch(OperatingStatus){
              case '':
              break;
              case 'Active':
                Stat = 'Active'
              break;
              case 'Inactive':
                Stat = 'Inactive';
              break;
            }
            return Stat;
          }
          const Stat = setStat(OperationStatus);
          const setType = (RideType) => {
            let Type = '';
            switch(RideType){
              case '':
              break;
              case 'Thrill':
                Type = 'Thrill'
              break;
              case 'Water':
                Type = 'Water';
              break;
              case 'Casual':
                Type = 'Casual'
              break;
              case 'Moderate Intensity':
                Type = 'Moderate Intersity'
              break;
            }
            return Type;
          }
          const Type = setType(RideType);
          const setAccess = (Accessibility) => {
            let Access = '';
            switch(Accessibility){
              case '':
              break;
              case 'Yes':
                Access = 'Yes'
              break;
              case 'N/A':
                Access = 'N/A';
              break;
            }
            return Access;
          }
          const Access = setAccess(Accessibility);
          await sql.query(`
            INSERT INTO ride_info (RideID, Zone_code, RideName, Description, SafetyRules, RideType, OperationStatus, Accessibility_Attraction)
            VALUES (CONCAT('RIDE', SUBSTRING(CONVERT(VARCHAR(255), NEWID()), 1, 4)), '${Zone}', '${RideName}', '${Description}', '${SafetyRules}', '${Type}', '${Stat}', '${Access}');
          `);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, message: 'Added Information successfully' }));
        } catch (error) {
          console.error('Error processing:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
        } finally {
          // await sql.close();
        }
      });
    }
    else if (req.url=== '/api/addstallinfo' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          await sql.connect(config);
          const { Zone_code, Name, Type, Status } = JSON.parse(body);
          const setZone = (Zone_code) => {
            let Zone = '';
            switch(Zone_code){
              case '':
              break;
              case 'ZONE0001':
                Zone = 'ZONE0001';
              break;
              case 'ZONE0002':
                Zone = 'ZONE0002';
              break;
              case 'ZONE0003':
                Zone = 'ZONE0003';
              break;
              case 'ZONE0004':
                Zone = 'ZONE0004';
              break;
            }
            return Zone;
          }
          const Zone = setZone(Zone_code);
         const setStallID = (Zone) => {
          let ID ='';
          switch(Zone){
            case '':
              break;
            case 'ZONE0001':
              ID = 'FDS1';
            break;
            case 'ZONE0002':
              ID = 'FDS2';
            break;
            case 'ZONE0003':
              ID = 'FDS3';
            break;
            case 'ZONE0004':
              ID = 'FDS4';
            break;
          }
          return ID;
         }
         const ID = setStallID(Zone);
         const setStallType = (Type) => {
          let T ='';
          switch(Type){
            case '':
              break;
            case 'Casual Dining':
              T = 'Casual Dining';
            break;
            case 'Quick Service Dining':
              T = 'Quick Service Dining';
            break;
          }
          return T;
         }
         const T = setStallType(Type);
         const setStat = (Status) => {
          let Stat = '';
          switch(Status){
            case '':
            break;
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
            INSERT INTO food_stalls (Stall_ID, Zone_code, Name, Type, Status)
            VALUES (CONCAT('${ID}', SUBSTRING(CONVERT(VARCHAR(255), NEWID()), 1, 4)), '${Zone}', '${Name}', '${T}', '${Stat}');
          `);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, message: 'Added Information successfully' }));
        } catch (error) {
          console.error('Error processing:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
        } finally {
          // await sql.close();
        }
      });
    }
    else if (req.url=== '/api/addshopinfo' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          await sql.connect(config);
          const { Zone_code, Name, ProductType, ProductAmount, Status } = JSON.parse(body);
          const setZone = (Zone_code) => {
            let Zone = '';
            switch(Zone_code){
              case '':
              break;
              case 'ZONE0001':
                Zone = 'ZONE0001';
              break;
              case 'ZONE0002':
                Zone = 'ZONE0002';
              break;
              case 'ZONE0003':
                Zone = 'ZONE0003';
              break;
              case 'ZONE0004':
                Zone = 'ZONE0004';
              break;
            }
            return Zone;
          }
          const Zone = setZone(Zone_code);
          const setStat = (Status) => {
            let Stat = '';
            switch(Status){
              case '':
              break;
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
            INSERT INTO Merchandise ( Shop_id, Zone_code, Name, ProductType, ProductAmount, Status)
            VALUES (CONCAT('SHOP', SUBSTRING(CONVERT(VARCHAR(255), NEWID()), 1, 4)), '${Zone}', '${Name}', '${ProductType}', ${ProductAmount}, '${Stat}');
          `);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, message: 'Added Information successfully' }));
        } catch (error) {
          console.error('Error processing:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
        } finally {
          // await sql.close();
        }
      });
    }
    else if (req.url=== '/api/addserviceinfo' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          await sql.connect(config);
          const { Zone_code, Service, Name, Description, Status } = JSON.parse(body);
          const setZone = (Zone_code) => {
            let Zone = '';
            switch(Zone_code){
              case '':
              break;
              case 'ZONE0001':
                Zone = 'ZONE0001';
              break;
              case 'ZONE0002':
                Zone = 'ZONE0002';
              break;
              case 'ZONE0003':
                Zone = 'ZONE0003';
              break;
              case 'ZONE0004':
                Zone = 'ZONE0004';
              break;
            }
            return Zone;
          }
          const Zone = setZone(Zone_code);
          const setServiceID = (Zone) => {
            let ID ='';
            switch(Zone){
              case '':
                break;
              case 'ZONE0001':
                ID = 'SERV1';
              break;
              case 'ZONE0002':
                ID = 'SERV2';
              break;
              case 'ZONE0003':
                ID = 'SERV3';
              break;
              case 'ZONE0004':
                ID = 'SERV4';
              break;
            }
            return ID;
           }
           const ID = setServiceID(Zone);
          const setService = (Service) => {
            let Serv = '';
            switch(Service){
              case '':
              break;
              case 'Lounge':
                Serv = 'Lounge';
              break;
              case 'Restroom':
                Serv = 'Restroom';
              break;
              case 'Lockers':
                Serv = 'Lockers';
              break;
            }
            return Serv;
          }
          const Serv = setService(Service);
          const setStat = (Status) => {
            let Stat = '';
            switch(Status){
              case '':
              break;
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
            INSERT INTO amenities_and_service ( Service_ID, Zone_code, Service, Name, Description, Status)
            VALUES (CONCAT('${ID}', SUBSTRING(CONVERT(VARCHAR(255), NEWID()), 1, 3)), '${Zone}', '${Serv}', '${Name}', '${Description}', '${Stat}');
          `);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, message: 'Added Information successfully' }));
        } catch (error) {
          console.error('Error processing:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
        } finally {
          // await sql.close();
        }
      });
    }
    else if (req.url=== '/api/updateeventinfo' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          await sql.connect(config);
          const { Event_ID, Zone_code, Event_name, event_details, event_capacity, event_date, Status } = JSON.parse(body);
          const setZone = (Zone_code) => {
            let Zone = '';
            switch(Zone_code){
              case '':
              break;
              case 'ZONE0001':
                Zone = 'ZONE0001';
              break;
              case 'ZONE0002':
                Zone = 'ZONE0002';
              break;
              case 'ZONE0003':
                Zone = 'ZONE0003';
              break;
              case 'ZONE0004':
                Zone = 'ZONE0004';
              break;
            }
            return Zone;
          }
          const Zone = setZone(Zone_code);
          const setStat = (Status) => {
            let Stat = '';
            switch(Status){
              case '':
              break;
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
            UPDATE special_events
            SET Event_name = '${Event_name}', 
            event_details ='${event_details}',
            event_capacity = ${event_capacity},
            event_date = '${event_date}', 
            Status = '${Stat}'
            WHERE Zone_code = '${Zone}' AND Event_ID = '${Event_ID}';
          `);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, message: 'Updated Information successfully' }));
        } catch (error) {
          console.error('Error processing:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
        } finally {
          // await sql.close();
        }
      });
    }
    else if (req.url=== '/api/updaterideinfo' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          await sql.connect(config);
          const { Zone_code, RideID, RideName, Description, SafetyRules, RideType, OperationStatus, Accessibility } = JSON.parse(body);
          const setZone = (Zone_code) => {
            let Zone = '';
            switch(Zone_code){
              case '':
              break;
              case 'ZONE0001':
                Zone = 'ZONE0001';
              break;
              case 'ZONE0002':
                Zone = 'ZONE0002';
              break;
              case 'ZONE0003':
                Zone = 'ZONE0003';
              break;
              case 'ZONE0004':
                Zone = 'ZONE0004';
              break;
            }
            return Zone;
          }
          const Zone = setZone(Zone_code);
          const setStat = (OperatingStatus) => {
            let Stat = '';
            switch(OperatingStatus){
              case '':
              break;
              case 'Active':
                Stat = 'Active'
              break;
              case 'Inactive':
                Stat = 'Inactive';
              break;
            }
            return Stat;
          }
          const Stat = setStat(OperationStatus);
          const setType = (RideType) => {
            let Type = '';
            switch(RideType){
              case '':
              break;
              case 'Thrill':
                Type = 'Thrill'
              break;
              case 'Water':
                Type = 'Water';
              break;
              case 'Casual':
                Type = 'Casual'
              break;
              case 'Moderate Intensity':
                Type = 'Moderate Intersity'
              break;
            }
            return Type;
          }
          const Type = setType(RideType);
          const setAccess = (Accessibility) => {
            let Access = '';
            switch(Accessibility){
              case '':
              break;
              case 'Yes':
                Access = 'Yes'
              break;
              case 'N/A':
                Access = 'N/A';
              break;
            }
            return Access;
          }
          const Access = setAccess(OperationStatus);
          await sql.query(`
            UPDATE ride_info
            SET
            RideName = '${RideName}',
            Description = '${Description}',
            SafetyRules = '${SafetyRules}',
            RideType = '${Type}',
            OperationStatus = '${Stat}',
            Accessibility_Attraction = '${Access}'
            WHERE RideID = '${RideID}' AND Zone_code = '${Zone}';
          `);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, message: 'Updated Information successfully' }));
        } catch (error) {
          console.error('Error processing:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
        } finally {
          // await sql.close();
        }
      });
    }
    else if (req.url=== '/api/updatestallinfo' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          await sql.connect(config);
          const { Zone_code, Stall_ID, Name, Type, Status } = JSON.parse(body);
          const setZone = (Zone_code) => {
            let Zone = '';
            switch(Zone_code){
              case '':
              break;
              case 'ZONE0001':
                Zone = 'ZONE0001';
              break;
              case 'ZONE0002':
                Zone = 'ZONE0002';
              break;
              case 'ZONE0003':
                Zone = 'ZONE0003';
              break;
              case 'ZONE0004':
                Zone = 'ZONE0004';
              break;
            }
            return Zone;
          }
          const Zone = setZone(Zone_code);
         const setStallType = (Type) => {
          let T ='';
          switch(Type){
            case '':
              break;
            case 'Casual Dining':
              T = 'Casual Dining';
            break;
            case 'Quick Service Dining':
              T = 'Quick Service Dining';
            break;
          }
          return T;
         }
         const T = setStallType(Type);
         const setStat = (Status) => {
          let Stat = '';
          switch(Status){
            case '':
            break;
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
          UPDATE food_stalls
          SET
          Name = '${Name}',
          Type = '${T}',
          Status = '${Stat}'
          WHERE Stall_ID = '${Stall_ID}' AND Zone_code = '${Zone}';
          `);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, message: 'Updated Information successfully' }));
        } catch (error) {
          console.error('Error processing:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
        } finally {
          // await sql.close();
        }
      });
    }
    else if (req.url=== '/api/updateshopinfo' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          await sql.connect(config);
          const { Zone_code, Shop_id, Name, ProductType, ProductAmount, Status } = JSON.parse(body);
          const setZone = (Zone_code) => {
            let Zone = '';
            switch(Zone_code){
              case '':
              break;
              case 'ZONE0001':
                Zone = 'ZONE0001';
              break;
              case 'ZONE0002':
                Zone = 'ZONE0002';
              break;
              case 'ZONE0003':
                Zone = 'ZONE0003';
              break;
              case 'ZONE0004':
                Zone = 'ZONE0004';
              break;
            }
            return Zone;
          }
          const Zone = setZone(Zone_code);
          const setStat = (Status) => {
            let Stat = '';
            switch(Status){
              case '':
              break;
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
          UPDATE Merchandise
          SET
          Name = '${Name}',
          ProductType = '${ProductType}',
          ProductAmount = '${ProductAmount}',
          Status = '${Stat}'
          WHERE Shop_id = '${Shop_id}' AND Zone_code = '${Zone}';
          `);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, message: 'Updated Information successfully' }));
        } catch (error) {
          console.error('Error processing:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
        } finally {
          // await sql.close();
        }
      });
    }
    else if (req.url=== '/api/updateserviceinfo' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          await sql.connect(config);
          const { Zone_code, Service_ID, Service, Name, Description, Status } = JSON.parse(body);
          const setZone = (Zone_code) => {
            let Zone = '';
            switch(Zone_code){
              case '':
              break;
              case 'ZONE0001':
                Zone = 'ZONE0001';
              break;
              case 'ZONE0002':
                Zone = 'ZONE0002';
              break;
              case 'ZONE0003':
                Zone = 'ZONE0003';
              break;
              case 'ZONE0004':
                Zone = 'ZONE0004';
              break;
            }
            return Zone;
          }
          const Zone = setZone(Zone_code);
          const setService = (Service) => {
            let Serv = '';
            switch(Service){
              case '':
              break;
              case 'Lounge':
                Serv = 'Lounge';
              break;
              case 'Restroom':
                Serv = 'Restroom';
              break;
              case 'Lockers':
                Serv = 'Lockers';
              break;
            }
            return Serv;
          }
          const Serv = setService(Service);
          const setStat = (Status) => {
            let Stat = '';
            switch(Status){
              case '':
              break;
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
          UPDATE amenities_and_service
          SET
          Service = '${Serv}',
          Name = '${Name}',
          Description = '${Description}',
          Status = '${Stat}'
          WHERE Service_ID = '${Service_ID}' AND Zone_code = '${Zone}';
          `);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, message: 'Updated Information successfully' }));
        } catch (error) {
          console.error('Error processing:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
        } finally {
          // await sql.close();
        }
      });
    }

    else if (req.url=== '/api/handlenewinjury' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          await sql.connect(config);
          const { RideID, Date, SeverityScale, AmountInjured } = JSON.parse(body);
          
          await sql.query(`
          INSERT INTO injury_case
          VALUES (CONCAT('INJ', SUBSTRING(CONVERT(VARCHAR(255), NEWID()), 1, 4)), '${RideID}', '${Date}', ${SeverityScale}, ${AmountInjured});
          `);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, message: 'Updated Information successfully' }));
        } catch (error) {
          console.error('Error processing:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
        } finally {
          // await sql.close();
        }
      });
    }

    else if (req.url === '/api/all' && req.method === 'GET') {
      try {
    
        await sql.connect(config);
      
      const zone1 = await sql.query("\
      SELECT * \
      FROM theme_zone \
      WHERE Zone_code = 'ZONE0001';\
      ");

      const zone2 = await sql.query("\
      SELECT * \
      FROM theme_zone \
      WHERE Zone_code = 'ZONE0002';\
      ");

      const zone3 = await sql.query("\
      SELECT * \
      FROM theme_zone \
      WHERE Zone_code = 'ZONE0003';\
      ");

      const zone4 = await sql.query("\
      SELECT * \
      FROM theme_zone \
      WHERE Zone_code = 'ZONE0004';\
      ");

      const event = await sql.query("\
      SELECT * \
      FROM special_events \
      WHERE Status = 'Active';\
      ");

      const inactiveevent = await sql.query("\
      SELECT * \
      FROM special_events \
      WHERE Status = 'Inactive';\
      ");
    
      const event1 = await sql.query("\
      SELECT * \
      FROM special_events \
      WHERE Zone_code = 'ZONE0001' AND Status = 'Active';\
      ");
    
      const event2 = await sql.query("\
      SELECT * \
      FROM special_events \
      WHERE Zone_code = 'ZONE0002' AND Status = 'Active';\
      ");
    
      const event3 = await sql.query("\
      SELECT * \
      FROM special_events \
      WHERE Zone_code = 'ZONE0003' AND Status = 'Active';\
      ");
    
      const event4 = await sql.query("\
      SELECT * \
      FROM special_events \
      WHERE Zone_code = 'ZONE0004' AND Status = 'Active';\
      ");
    
      const inactiveevent1 = await sql.query("\
      SELECT * \
      FROM special_events \
      WHERE Zone_code = 'ZONE0001' AND Status = 'Inactive';\
      ");
    
      const inactiveevent2 = await sql.query("\
      SELECT * \
      FROM special_events \
      WHERE Zone_code = 'ZONE0002' AND Status = 'Inactive';\
      ");
    
      const inactiveevent3 = await sql.query("\
      SELECT * \
      FROM special_events \
      WHERE Zone_code = 'ZONE0003' AND Status = 'Inactive';\
      ");
    
      const inactiveevent4 = await sql.query("\
      SELECT * \
      FROM special_events \
      WHERE Zone_code = 'ZONE0004' AND Status = 'Inactive';\
      ");
    
      const ticket = await sql.query("SELECT TicketType, Prices FROM tickets GROUP BY Prices, TicketType");
    
        const ride1 = await sql.query("\
        SELECT * \
        FROM ride_info \
        WHERE Zone_code = 'ZONE0001' AND OperationStatus = 'Active';\
      ");
    
      const ride2 = await sql.query("\
      SELECT * \
      FROM ride_info \
      WHERE Zone_code = 'ZONE0002' AND OperationStatus = 'Active';\
    ");
    
      const ride3 = await sql.query("\
      SELECT * \
      FROM ride_info \
      WHERE Zone_code = 'ZONE0003' AND OperationStatus = 'Active';\
      ");
    
      const ride4 = await sql.query("\
      SELECT * \
      FROM ride_info \
      WHERE Zone_code = 'ZONE0004' AND OperationStatus = 'Active';\
      ");
      
      const inactiveride = await sql.query("\
      SELECT * \
      FROM ride_info \
      WHERE OperationStatus = 'Inactive';\
      ");

      const inactiveride1 = await sql.query("\
      SELECT * \
      FROM ride_info \
      WHERE Zone_code = 'ZONE0001' AND OperationStatus = 'Inactive';\
      ");
    
      const inactiveride2 = await sql.query("\
      SELECT * \
      FROM ride_info \
      WHERE Zone_code = 'ZONE0002' AND OperationStatus = 'Inactive';\
      ");
    
      const inactiveride3 = await sql.query("\
      SELECT * \
      FROM ride_info \
      WHERE Zone_code = 'ZONE0003' AND OperationStatus = 'Inactive';\
      ");
    
      const inactiveride4 = await sql.query("\
      SELECT * \
      FROM ride_info \
      WHERE Zone_code = 'ZONE0004' AND OperationStatus = 'Inactive';\
      ");
    
      const stall1 = await sql.query("\
      SELECT * \
      FROM food_stalls \
      WHERE Zone_code = 'ZONE0001' AND Status = 'Active';\
      ");
    
      const stall2 = await sql.query("\
      SELECT * \
      FROM food_stalls \
      WHERE Zone_code = 'ZONE0002' AND Status = 'Active';\
      ");
    
      const stall3 = await sql.query("\
      SELECT * \
      FROM food_stalls \
      WHERE Zone_code = 'ZONE0003' AND Status = 'Active';\
      ");
    
      const stall4 = await sql.query("\
      SELECT * \
      FROM food_stalls \
      WHERE Zone_code = 'ZONE0004' AND Status = 'Active';\
      ");
    
      const inactivestall1 = await sql.query("\
      SELECT * \
      FROM food_stalls \
      WHERE Zone_code = 'ZONE0001' AND Status = 'Inactive';\
      ");
    
      const inactivestall2 = await sql.query("\
      SELECT * \
      FROM food_stalls \
      WHERE Zone_code = 'ZONE0002' AND Status = 'Inactive';\
      ");
    
      const inactivestall3 = await sql.query("\
      SELECT * \
      FROM food_stalls \
      WHERE Zone_code = 'ZONE0003' AND Status = 'Inactive';\
      ");
    
      const inactivestall4 = await sql.query("\
      SELECT * \
      FROM food_stalls \
      WHERE Zone_code = 'ZONE0004' AND Status = 'Inactive';\
      ");
    
      const shop1 = await sql.query("\
      SELECT * \
      FROM Merchandise \
      WHERE Zone_code = 'ZONE0001' AND Status = 'Active';\
      ");
    
      const shop2 = await sql.query("\
      SELECT * \
      FROM Merchandise \
      WHERE Zone_code = 'ZONE0002' AND Status = 'Active';\
      ");
    
      const shop3 = await sql.query("\
      SELECT * \
      FROM Merchandise \
      WHERE Zone_code = 'ZONE0003' AND Status = 'Active';\
      ");
    
      const shop4 = await sql.query("\
      SELECT * \
      FROM Merchandise \
      WHERE Zone_code = 'ZONE0004' AND Status = 'Active';\
      ");
    
      const inactiveshop1 = await sql.query("\
      SELECT * \
      FROM Merchandise \
      WHERE Zone_code = 'ZONE0001' AND Status = 'Inactive';\
      ");
    
      const inactiveshop2 = await sql.query("\
      SELECT * \
      FROM Merchandise \
      WHERE Zone_code = 'ZONE0002' AND Status = 'Inactive';\
      ");
    
      const inactiveshop3 = await sql.query("\
      SELECT * \
      FROM Merchandise \
      WHERE Zone_code = 'ZONE0003' AND Status = 'Inactive';\
      ");
    
      const inactiveshop4 = await sql.query("\
      SELECT * \
      FROM Merchandise \
      WHERE Zone_code = 'ZONE0004' AND Status = 'Inactive';\
      ");
    
      const service1 = await sql.query("\
      SELECT * \
      FROM amenities_and_service \
      WHERE Zone_code = 'ZONE0001' AND Status = 'Active';\
      ");
    
      const service2 = await sql.query("\
      SELECT * \
      FROM amenities_and_service \
      WHERE Zone_code = 'ZONE0002' AND Status = 'Active';\
      ");
    
      const service3 = await sql.query("\
      SELECT * \
      FROM amenities_and_service \
      WHERE Zone_code = 'ZONE0003' AND Status = 'Active';\
      ");
    
      const service4 = await sql.query("\
      SELECT * \
      FROM amenities_and_service \
      WHERE Zone_code = 'ZONE0004' AND Status = 'Active';\
      ");
    
      const inactiveservice1 = await sql.query("\
      SELECT * \
      FROM amenities_and_service \
      WHERE Zone_code = 'ZONE0001' AND Status = 'Inactive';\
      ");
    
      const inactiveservice2 = await sql.query("\
      SELECT * \
      FROM amenities_and_service \
      WHERE Zone_code = 'ZONE0002' AND Status = 'Inactive';\
      ");
    
      const inactiveservice3 = await sql.query("\
      SELECT * \
      FROM amenities_and_service \
      WHERE Zone_code = 'ZONE0003' AND Status = 'Inactive';\
      ");
    
      const inactiveservice4 = await sql.query("\
      SELECT * \
      FROM amenities_and_service \
      WHERE Zone_code = 'ZONE0004' AND Status = 'Inactive';\
      ");

      const helpdesk = await sql.query("\
      SELECT * \
      FROM help_desk; \
      ");

      const security = await sql.query("\
      SELECT * \
      FROM security; \
      ");

      const emergency = await sql.query("\
      SELECT * \
      FROM emergency; \
      ");

      const injurycase = await sql.query("\
      SELECT * \
      FROM injury_case; \
      ");

      const maintenancestaff = await sql.query("SELECT * FROM employee");

      const monthlybreakdowns = await sql.query("SELECT MONTH(DateStart)AS MONTH, YEAR(DateStart) AS YEAR, COUNT(IssueRideID) AS BROKE_DOWN_RIDES FROM issue_log GROUP BY MONTH(DateStart), YEAR(DateStart)");

      const injuryreport = await sql.query(`
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
       
       const responseData = {
        Zone1Data: zone1.recordset,
        Zone2Data: zone2.recordset,
        Zone3Data: zone3.recordset,
        Zone4Data: zone4.recordset,
        TicketData: ticket.recordset,
        EventData: event.recordset,
        Event1Data: event1.recordset,
        Event2Data: event2.recordset,
        Event3Data: event3.recordset,
        Event4Data: event4.recordset,
        InactiveEventData: inactiveevent.recordset,
        InactiveEvent1Data: inactiveevent1.recordset,
        InactiveEvent2Data: inactiveevent2.recordset,
        InactiveEvent3Data: inactiveevent3.recordset,
        InactiveEvent4Data: inactiveevent4.recordset,
        Ride1Data: ride1.recordset,
        Ride2Data: ride2.recordset,
        Ride3Data: ride3.recordset,
        Ride4Data: ride4.recordset,
        InactiveRideData: inactiveride.recordset,
        InactiveRide1Data: inactiveride1.recordset,
        InactiveRide2Data: inactiveride2.recordset,
        InactiveRide3Data: inactiveride3.recordset,
        InactiveRide4Data: inactiveride4.recordset,
        Stall1Data: stall1.recordset,
        Stall2Data: stall2.recordset,
        Stall3Data: stall3.recordset,
        Stall4Data: stall4.recordset,
        InactiveStall1Data: inactivestall1.recordset,
        InactiveStall2Data: inactivestall2.recordset,
        InactiveStall3Data: inactivestall3.recordset,
        InactiveStall4Data: inactivestall4.recordset,
        Shop1Data: shop1.recordset,
        Shop2Data: shop2.recordset,
        Shop3Data: shop3.recordset,
        Shop4Data: shop4.recordset,
        InactiveShop1Data: inactiveshop1.recordset,
        InactiveShop2Data: inactiveshop2.recordset,
        InactiveShop3Data: inactiveshop3.recordset,
        InactiveShop4Data: inactiveshop4.recordset,
        Service1Data: service1.recordset,
        Service2Data: service2.recordset,
        Service3Data: service3.recordset,
        Service4Data: service4.recordset,
        InactiveService1Data: inactiveservice1.recordset,
        InactiveService2Data: inactiveservice2.recordset,
        InactiveService3Data: inactiveservice3.recordset,
        InactiveService4Data: inactiveservice4.recordset,
        InjuryReportData: injuryreport.recordset,
        BreakdownData: monthlybreakdowns.recordset,
        StaffData: maintenancestaff.recordset,
        HelpDeskData: helpdesk.recordset,
        SecurityData: security.recordset,
        EmergencyData: emergency.recordset,
        InjuryCaseData: injurycase.recordset
      };
    
    
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(responseData));
      } catch (error) {
        console.error('Error fetching data:', error.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('Internal Server Error');
      } finally {
     
        //await sql.close();
      }
    }

    else if (req.url === '/api/handledateissuelog' && req.method === 'GET') {
      const parsedUrl = url.parse(req.url, true);
      const { DateStart, DateFixed } = parsedUrl.query;
    
      try {
        // Check if both parameters are present
        if (!DateStart || !DateFixed) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: 'Both DateStart and DateFixed are required.' }));
        }
    
        // Use parameterized queries to prevent SQL injection
        const result = await sql.query`
          SELECT *
          FROM issue_log
          WHERE DateStart >= @DateStart AND DateFixed <= @DateFixed;
        `.input('DateStart', DateStart).input('DateFixed', DateFixed);
    
        const responseData = result.recordset;
    
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(responseData));
      } catch (error) {
        console.error('Error fetching data:', error.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Internal Server Error' }));
      } finally {
        // Close the SQL pool properly
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
