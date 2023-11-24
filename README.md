# wefe-nio ![GitHub issues](https://img.shields.io/github/issues/seandadonntech/wefe-nio)
![GitHub Repo stars](https://img.shields.io/github/stars/seandadonntech/wefe-nio)
![image](https://github.com/seandadonntech/wefe-nio/assets/72393350/c9e62cd2-0036-4b7f-818d-2984c24c43a9)





A simple yet power program to collect WIFI name &amp; password,this program is able to write this information in A file.

## THIS TOOL MAY NOT WORK IF TARGET IS NOT CONNECTED TO WIFI/OR IS CONNECTED TO ETHERNET

## installation
in case you don't have nodejs install on your machine click [here](https://nodejs.org/en/) NPM SHOULD COME WITH NODE JS AFTER THIS 
TYPE THIS IN YOU CMD OR TERMINAL
optional: >git clone https://github.com/seandadonntech/wefe-nio
>1. npm i wifi-name
>2. npm i wifi-password
>3. npm i fs
## requirements
1. nodejs
2. npm 

### Usage
 ```javascript
const wifiName = require('wifi-name');
const wifiPassword = require('wifi-password');
const fs = require('fs') 
wifiName().then(name => {
   console.log(name);
  fs.writeFile('wifiname.txt', name, (err) => { 
          

    if (err) throw err; 
}) 
    
});
wifiPassword().then(password => {
  console.log(password);
  fs.writeFile('wifipass.txt', password, (err) => { 
          
   
}) 
 
});
 ```
##  DISCLAIMER: USE AT YOUR OWN RISK BY USING THIS PROGRAM YOU ARE RESPONSIBLE FOR YOU ACTIONS
## IF YOU HAVE ANY QUESTION, COMMENTS, CONCERNS OR WANT TO CONTRIBUTE FEEL FREE TO PUT AN ISSUE IN

