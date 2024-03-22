// const axios = require("axios");
// const geocode = (address, callback) => {
//   const url = `http://api.weatherapi.com/v1/current.json?key=272b9a64ed2e4dca9c1155613240303&q=${address}&aqi=no`;
//   axios
//     .get(url)
//     .then((response) => {
//       const { data } = response;
//       callback(undefined, {
//         latitude: data.location.lat,
//         longitude: data.location.lon,
//         location: data.location.name,
//       });
//     })
//     .catch((error) => {
//       callback("Unable to connect to location services!", undefined);
//     });
// };

// module.exports = geocode;

const axios = require("axios");
const express = require("express");

const app = express();
// const geocode=function(){
const geocode = (address) => {
  console.log("'/test' call");
  // const address = req.query.address;
  axios
    .get(
      `http://api.weatherapi.com/v1/current.json?key=272b9a64ed2e4dca9c1155613240303&q=${address}&aqi=no`
    )
    .then((response) => {
      const { data } = response;
      console.log("in then");
      const obj = {
        latitude: data.location.lat,
        longitude: data.location.lon,
        location: data.location.name,
      };
      return obj;
    })

    .catch((err) => {
      console.log("in catch block");
      return err;
    });
};
// const geocode = (address, callback) => {
//   const url = `http://api.weatherapi.com/v1/current.json?key=272b9a64ed2e4dca9c1155613240303&q=${address}&aqi=no`;
//   axios
//     .get(url)
//     .then((response) => {
//       const { data } = response;
//       callback(undefined, {
//
//       });
//     })
//     .catch((error) => {
//       callback("unable to connect location service", undefined);
//     });
// };
module.exports = geocode;

// geocode("boston");
