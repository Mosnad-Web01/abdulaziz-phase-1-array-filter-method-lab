// Code your solution here

// Function to find matching drivers by name, case insensitive
function findMatching(drivers, name) {
    return drivers.filter(driver => 
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Function to find drivers whose names start with the given letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => 
      driver.toLowerCase().startsWith(letters.toLowerCase())
    );
  }
  
  // Function to find drivers by matching name in an array of driver objects
  function matchName(drivers, name) {
    return drivers.filter(driver => 
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Example usage
  const drivers = [
    { name: 'Bobby', hometown: 'New York' },
    { name: 'Sammy', hometown: 'Los Angeles' },
    { name: 'Sally', hometown: 'Chicago' },
    { name: 'Annette', hometown: 'New York' },
    { name: 'Sarah', hometown: 'Phoenix' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
  ];
  
  console.log(findMatching(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah'], 'bobby')); // ['Bobby']
  console.log(fuzzyMatch(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah'], 'Sa')); // ['Sammy', 'Sally', 'Sarah']
  console.log(matchName(drivers, 'Bobby')); // [{ name: 'Bobby', hometown: 'New York' }, { name: 'Bobby', hometown: 'Tampa Bay' }]



/// real example from project in react

//   import React, { useState } from 'react';

// const drivers = [
//   { name: 'Bobby', hometown: 'New York' },
//   { name: 'Sammy', hometown: 'Los Angeles' },
//   { name: 'Sally', hometown: 'Chicago' },
//   { name: 'Annette', hometown: 'New York' },
//   { name: 'Sarah', hometown: 'Phoenix' },
//   { name: 'Bobby', hometown: 'Tampa Bay' }
// ];

// function DriverFilter() {
//   const [query, setQuery] = useState('');
//   const [filteredDrivers, setFilteredDrivers] = useState(drivers);

//   const findMatching = (name) => {
//     return drivers.filter(driver => 
//       driver.name.toLowerCase() === name.toLowerCase()
//     );
//   };

//   const fuzzyMatch = (letters) => {
//     return drivers.filter(driver => 
//       driver.name.toLowerCase().startsWith(letters.toLowerCase())
//     );
//   };

//   const matchName = (name) => {
//     return drivers.filter(driver => 
//       driver.name.toLowerCase() === name.toLowerCase()
//     );
//   };

//   const handleSearch = (e) => {
//     setQuery(e.target.value);
//     const result = fuzzyMatch(e.target.value);
//     setFilteredDrivers(result);
//   };

//   return (
//     <div>
//       <h1>Driver Search</h1>
//       <input
//         type="text"
//         value={query}
//         onChange={handleSearch}
//         placeholder="Search for drivers"
//       />
//       <ul>
//         {filteredDrivers.map((driver, index) => (
//           <li key={index}>
//             {driver.name} - {driver.hometown}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DriverFilter;