# wefe-nio
A simple yet power program to collect WIFI name &amp; password,this program is able to write this information in A file.

## installation
in case you don't have nodejs install on your machine click [here](https://nodejs.org/en/) NPM SHOULD COME WITH NODE JS
## requirements
1. nodejs
2. npm 

### Usage
`const wifiName = require('wifi-name');
const wifiPassword = require('wifi-password');
const fs = require('fs') 
wifiName().then(name => {
   console.log(name);
  fs.writeFile('wifiname.txt', name, (err) => { 
          
  
}) 
    
});
wifiPassword().then(password => {
  console.log(password);
  fs.writeFile('wifipass.txt', password, (err) => { 
          
   
}) 
 
});`
