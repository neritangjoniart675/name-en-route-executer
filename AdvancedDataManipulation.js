/* 
   Filename: AdvancedDataManipulation.js
   Content: Advanced data manipulation and visualization using JavaScript
*/

// Data array
const data = [
  { name: "John", age: 25, city: "New York", role: "Developer" },
  { name: "Jane", age: 30, city: "London", role: "Designer" },
  { name: "Adam", age: 35, city: "Paris", role: "Manager" },
  // ...and many more objects
];

// Function to filter data based on city
function filterDataByCity(city) {
  return data.filter((person) => person.city === city);
}

// Function to calculate average age
function calculateAverageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  return totalAge / data.length;
}

// Function to group data by role
function groupByRole() {
  const groupedData = {};
  data.forEach((person) => {
    if (!groupedData[person.role]) {
      groupedData[person.role] = [];
    }
    groupedData[person.role].push(person);
  });
  return groupedData;
}

// Function to visualize data
function visualizeData() {
  // Visualization code here...
}

// Complex data manipulation logic - main code
const filteredData = filterDataByCity("New York");
const averageAge = calculateAverageAge();
const groupedData = groupByRole();
visualizeData();

// More complex logic...

// Deep nested conditionals
if (filteredData.length > 0) {
  for (const person of filteredData) {
    if (person.age > averageAge) {
      console.log(`${person.name} is above average age in New York.`);
    } else {
      console.log(`${person.name} is below average age in New York.`);
    }
  }
} else {
  console.log("No data available for New York.");
}

// ... Continue with more complex code

// Example function to demonstrate complexity
function complexFunction() {
  // Complex logic here...
}

// Calling complex function
complexFunction();

// More complex code...

// End of complex code