// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
// require('../db');

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

const MONGO_URL = "mongodb://localhost/lab-express-drones";

mongoose
    .connect(MONGO_URL)
    .then(() => console.log(`Connected to Mongo!`))
    .catch((err) => console.log(err));

Drone.create(drones)
    .then((data) => {
        console.log(`Created ${data.length} drones`);
        mongoose.connection.close;
    })
    .catch((err) => console.log(err));