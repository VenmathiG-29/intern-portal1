   import React, { useEffect, useState } from 'react';
   import axios from 'axios';
   import './App.css';

   function App() {
       const [intern, setIntern] = useState(null);

       useEffect(() => {
           const fetchInternData = async () => {
               const response = await axios.get('http://localhost:5000/api/intern');
               setIntern(response.data);
           };
           fetchInternData();
       }, []);

       return (
           <div className="App">
               <h1>Intern Dashboard</h1>
               {intern ? (
                   <div>
                       <h2>Name: {intern.name}</h2>
                       <h3>Referral Code: {intern.referralCode}</h3>
                       <h3>Total Donations Raised: ${intern.totalDonations}</h3>
                       <h4>Rewards/Unlockables:</h4>
                       <ul>
                           <li>Reward 1</li>
                           <li>Reward 2</li>
                           <li>Reward 3</li>
                       </ul>
                   </div>
               ) : (
                   <p>Loading...</p>
               )}
           </div>
       );
   }

   export default App;
     