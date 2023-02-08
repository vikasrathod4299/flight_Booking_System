require("dotenv").config();
const express = require("express");
const morgan = require('morgan')
const app = express();
const cors = require("cors");

app.use(morgan('dev'))

app.use(cors());

const db = require("./models");

app.use(express.json());



app.use(
  (req, res, next) =>
    new Promise((resolve) => {
      setTimeout(() => {
        next();
      }, 1000);
    })
);



const cityRoute = require("./routes/city.routes");
app.use("/api/city", cityRoute);

const aitportRoute = require("./routes/aitport.routes");
app.use("/api/airports", aitportRoute);

const ageincyRoute = require("./routes/ageinces.routes");
app.use("/api/ageincy", ageincyRoute);

const aircraftRoute = require("./routes/aircrafts.routes");
app.use("/api/aircrafts", aircraftRoute);

const mainRootRoute = require("./routes/mainRoots.routes");
app.use("/api/mainRoots", mainRootRoute);

const flughtsRoute = require("./routes/flights.routes");
app.use("/api/flights", flughtsRoute);

const bookingRoute = require("./routes/booking.routes");
app.use("/api/bookings", bookingRoute);

const seatsRoute = require("./routes/seats.routes");
app.use("/api/seats", seatsRoute);

const authRoute = require("./routes/auth.routes");
app.use("/api/auth", authRoute);

const userRoute = require("./routes/user.routes");
app.use("/api/user", userRoute);

const passengersRoute = require("./routes/passengers.routes");
app.use("/api/passengers", passengersRoute);



db.sequelize
  .sync({ force : false })
  .then(() =>
    app.listen(process.env.PORT || 3001, () =>
      console.log(`Server is running on port ${process.env.PORT}!`)
    )
  ).catch((err) => console.log(err));
