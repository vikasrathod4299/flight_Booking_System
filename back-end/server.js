require('dotenv').config()
const express = require('express');

const app = express()
const cors = require("cors");
app.use(cors())

const db = require('./models')

app.use(express.json());

const cityRoute = require('./routes/city.routes')
app.use('/api/city', cityRoute)

const aitportRoute = require('./routes/aitport.routes')
app.use('/api/airports', aitportRoute)

const ageincyRoute = require('./routes/ageinces.routes')
app.use('/api/ageincy', ageincyRoute)

const aircraftRoute = require('./routes/aircrafts.routes')
app.use('/api/aircrafts', aircraftRoute)

const mainRootRoute = require('./routes/mainRoots.routes')
app.use('/api/mainRoots', mainRootRoute)

const flughtsRoute = require('./routes/flights.routes')
app.use('/api/flights', flughtsRoute)

const bookingRoute = require('./routes/booking.routes')
app.use('/api/bookings', bookingRoute)


db.sequelize.sync({ force:false })
.then(()=> app.listen(process.env.PORT||3001,()=> console.log(`Server is running on port ${process.env.PORT}!`)))
.catch((err)=>console.log(err))

