const fs = require('fs');

const myJsonObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
};

// Convert the JSON object to a string
const jsonString = JSON.stringify(myJsonObject, null, 2); // The third parameter (2) specifies the number of spaces for indentation

// Specify the file path where you want to write the JSON file
const filePath = 'output.json';

// Write the JSON string to the file
fs.writeFile(filePath, jsonString, (err) => {
    if (err) {
        console.error('Error writing JSON to file:', err);
    } else {
        console.log('JSON object written to', filePath);
    }
});
