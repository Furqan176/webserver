// // const path = require("path");
// // const express = require("express");

// // console.log(__dirname);
// // console.log(path.join(__dirname, "../public"));
// // const app = express();
// // app.set("view engine", "hbs");
// // const all = path.join(__dirname, "../public");
// // app.use(express.static(all));

// // app.get("", (req, res) => {
// //   res.render("index", {
// //     title: "syed",
// //     name: "furqan",
// //   });
// // });
// // app.get("/about", (req, res) => {
// //   res.render("about", {
// //     title: "about me",
// //   });
// // });
// // app.get("", (req, res) => {
// //   res.send([
// //     {
// //       forecast: 54,
// //       location: "kolkata",
// //     },
// //   ]);
// // });
// // app.get("/Help", (req, res) => {
// //   res.send([
// //     {
// //       name: "furqan",
// //       age: 23,
// //     },
// //     {
// //       name: "Rehan",
// //       age: 21,
// //     },
// //   ]);
// // });
// // app.get("/about", (req, res) => {
// //   res.send("<h1>about page</h1>");
// // });
// const path = require("path");
// const express = require("express");
// const app = express();
// // const all = path.join(__dirname, "../public");
// // app.use(express.static(all));

// app.set("view engine", "hbs");
// app.get("/help", (req, res) => {
//   res.render("about");
// });
// app.listen(3000, () => {
//   console.log("server os up and running");
// });

const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const geocode = require("./utils/geocode");
// const fetch = require("node-fetch");
//define path for express config
const publicDirectory = path.join(__dirname, "../template/views");
const partialsdir = path.join(__dirname, "../template/partials");
app.use(express.static(path.join(__dirname, "../public")));
//define handlebars and views location
app.set("views", publicDirectory);
app.set("view engine", "hbs");
hbs.registerPartials(partialsdir);
app.get("/home", (req, res) => {
  res.render("home", {
    title: "furqan",
  });
});

app.get("/index", (req, res) => {
  res.render("index", {
    author: "furqan",
  });
  geocode(req.query.address, (error, temp_c, name) => {
    if (error) {
      res.send;
      ({ error });
    }
    res.send({ temp_c: temp_c, name: name, address: req.query.address });
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    author: "furqan",
  });
});

app.get("/footer", (req, res) => {
  res.render("footer", {
    author: "furqan",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "No address provided",
    });
  }
  geocode(req.query.address, (error, temp_c, name) => {
    if (error) {
      res.send;
      ({ error });
    }
    res.send({ temp_c: temp_c, name: name, address: req.query.address });
  });
  // res.send({
  //   title: "syed",
  //   address: req.query.address,
  // });
});

app.get("/product", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "you must provide search term",
    });
  }
  console.log(req.query.search);
  res.send({
    add,
  });
});
app.get("/what/*", (req, res) => {
  res.send("page not found");
});

app.get("/help/units/*", (req, res) => {
  res.send("Help article not found");
});

app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "page not found",
  });
});
app.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});
