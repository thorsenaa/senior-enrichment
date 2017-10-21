var Promise = require("bluebird");
var {
  db,
  Campus,
  Student
} = require('./models');

var data = {
  student: [
    {
    name: "Sumit",
    email: "sumit@sumit.com",
    img: '/images/1.jpg'
    },
    {
    name: "Valerie",
    email: "valerie@valerie.com",
    img: '/images/2.jpg'
    }
    ],
  campus: [
    {
    name: "sweet valley",
    image: null,
    },
    {
    name: "bayside",
    image: null,

    }
    ]
  }
    db.sync({ force: true })
    .then(function() {
      console.log("Dropped old data, now inserting data");
      return Promise.map(Object.keys(data), function(name) {
        return Promise.map(data[name], function(item) {
          return db.model(name).create(item, {});
        });
      });
    })
    .then(function() {
      console.log("Finished inserting data");
    })
    .catch(function(err) {
      console.error("There was totally a problem", err, err.stack);
    })
    .finally(function() {
      db.close(); 
      console.log("connection closed");
      return null;
    });