const wifiName = require('wifi-name');
const wifiPassword = require('wifi-password');
const fs = require('fs') 
wifiName().then(name => {
   console.log(name);
  fs.writeFile('wifiname.txt', name, (err) => { 
          
    // In case of a error throw err. 
    if (err) throw err; 
}) 
    
});
wifiPassword().then(password => {
  console.log(password);
  fs.writeFile('wifipass.txt', password, (err) => { 
          
    // In case of a error throw err. 
    if (err) throw err; 
}) 
 
});
