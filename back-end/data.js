const data={
    cityData:[
    {
        "id": 1,
        "name": "Ahmedabad",
        "longitude": 72.5714,
        "latitude": 23.0225,
        "country": "india"
    },
    {
        "id": 2,
        "name": "Delhi",
        "longitude": 77.1025,
        "latitude": 28.7041,
        "country": "india"
    },
    {
        "id": 3,
        "name": "Gandhinagar",
        "longitude": 72.6369,
        "latitude": 23.2156,
        "country": "india"
    },
    {
        "id": 4,
        "name": "Chennai",
        "longitude": 80.2707,
        "latitude": 13.0827,
        "country": "india"
    },
    {
        "id": 5,
        "name": "Mumbai",
        "longitude": 72.8777,
        "latitude": 19.076,
        "country": "india"
    },
    {
        "id": 6,
        "name": "Bangalore",
        "longitude": 77.5946,
        "latitude": 12.9716,
        "country": "india"
    },
    {
        "id": 7,
        "name": "Pune",
        "longitude": 73.8567,
        "latitude": 18.5204,
        "country": "india"
    },
    {
        "id": 8,
        "name": "Goa",
        "longitude": 74.124,
        "latitude": 15.2993,
        "country": "india"
    },
    {
        "id": 9,
        "name": "Srinagar",
        "longitude": 74.7973,
        "latitude": 34.0837,
        "country": "india"
    },
    {
        "id": 10,
        "name": "Kolkata",
        "longitude": 88.3639,
        "latitude": 22.5726,
        "country": "india"
    },
    {
        "id": 11,
        "name": "Jaipur",
        "longitude": 75.7873,
        "latitude": 26.9124,
        "country": "india"
    },
    {
        "id": 12,
        "name": "Bhopal",
        "longitude": 77.4126,
        "latitude": 23.2599,
        "country": "india"
    }
    ],

    airportData:[
        {
            "airport_name":"Sardar Vallabhbhai Patel International Airport",
            "cityId":1
        },
        {
            "airport_name":"Ghandhidham Airport",
            "cityId":2
        },
        {
            "airport_name":"Indira Gandhi International Airport",
            "cityId":3
        },
        {
            "airport_name":"Madras International Meenambakkam Airport",
            "cityId":4
        },
        {
            "airport_name":"Chhatrapati Shivaji Maharaj International Airport",
            "cityId":5
        },
        {
            "airport_name":"Kempegowda International Airport",
            "cityId":6
        },
        {
            "airport_name":"Pune International Airport",
            "cityId":7
        },
        {
            "airport_name":"Dabolim Airport",
            "cityId":8
        },
        {
            "airport_name":"Sheikh ul-Alam International Airport",
            "cityId":9
        },
        {
            "airport_name":"Netaji Subhash Chandra Bose International Airport",
            "cityId":10
        },
        {
            "airport_name":"Sanganeer Airport",
            "cityId":11
        },
        {
            "airport_name":"Raja Bhoj Airport",
            "cityId":12
        }
    ],

    ageincesData:[
        {
            "agency_name":"Air asia", 
            "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f5/AirAsia_New_Logo.svg",
            "price":5,
            
            "discount": 10
        },
        {
            "agency_name":"Emirets", 
            "logo": "https://firebasestorage.googleapis.com/v0/b/clothing-shop-a42c9.appspot.com/o/air_agencies%2Fpngwing.com.png?alt=media&token=576e869e-c5d6-49e1-a97e-4d936e56b9e0",
            "price":5.5,
            "discount": 10
        },
        {
            "agency_name":"Spice jet", 
            "logo": "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=14",
            "price":6,
            "discount": 10
        },
        {
            "agency_name":"Indigo", 
            "logo": "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=14",
            "price":4,
            "discount": 10
        },
        {
            "agency_name":"Vistara", 
            "logo": "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=14",
            "price":7,
            "discount": 10
        },
        {
            "agency_name":"Air India", 
            "logo": "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=14",
            "price":4.7,
            "discount": 10
        }
    ],        

    aircrafts:[
        {
            "aircraft_name":"PISTON",
            "aircraft_number":"UK | 342",
            "agencyId":5
        },
        {
            "aircraft_name":"LIGHT JET",
            "aircraft_number":"15 | 1451",
            "agencyId":1
        },

        {
            "aircraft_name":"HEAVY JET",
            "aircraft_number":"6E | 2059",
            "agencyId":4
        },
        {
            "aircraft_name":"TURBOPROP",
            "aircraft_number":"SG | 8103",
            "agencyId":3
        },
        {
            "aircraft_name":"REGIONAL JET",
            "aircraft_number":"EM | 3219",
            "agencyId":2
        },

        {
            "aircraft_name":"TURBOPROP",
            "aircraft_number":"KF | 271",
            "agencyId":6
        },
    ],

    mainRoot:[
        {
            "fromCityId":1,
            "toCityId":4
        },
        {
            "fromCityId":4,
            "toCityId":1
        },
        {
            "fromCityId":2,
            "toCityId":10
        },
        {
            "fromCityId":9,
            "toCityId":12
        },
        {
            "fromCityId":2,
            "toCityId":4
        },
        {
            "fromCityId":7,
            "toCityId":3
        },
        {
            "fromCityId":1,
            "toCityId":8
        }
    ],

    flightData:[
            {
                "aircraftId":1,
                "mainrootId":1,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-02-01"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-02-01"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-02-01"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-02-01"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-02-01"
            },
            {
                "aircraftId":1,
                "mainrootId":1,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-02-02"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-02-02"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-02-02"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-02-02"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-02-02"
            },
            {
                "aircraftId":1,
                "mainrootId":1,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-02-03"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-02-03"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-02-03"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-02-03"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-02-03"
            },
            {
                "aircraftId":1,
                "mainrootId":1,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-02-04"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-02-04"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-02-04"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-02-04"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-02-04"
            },
            {
                "aircraftId":1,
                "mainrootId":1,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-02-05"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-02-05"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-02-05"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-02-05"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-02-05"
            },
            {
                "aircraftId":1,
                "mainrootId":1,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-02-06"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-02-06"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-02-06"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-02-06"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-02-06"
            },
            {
                "aircraftId":1,
                "mainrootId":1,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-02-07"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-02-07"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-02-07"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-02-07"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-02-07"
            },

            {
                "aircraftId":1,
                "mainrootId":2,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-02-01"
            },
            {
                "aircraftId":2,
                "mainrootId":2,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-02-01"
            },
            {
                "aircraftId":3,
                "mainrootId":2,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-02-01"
            },
            {
                "aircraftId":4,
                "mainrootId":2,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-02-01"
            },
            {
                "aircraftId":5,
                "mainrootId":2,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-02-01"
            },
            {
                "aircraftId":1,
                "mainrootId":2,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-02-02"
            },
            {
                "aircraftId":2,
                "mainrootId":2,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-02-02"
            },
            {
                "aircraftId":3,
                "mainrootId":2,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-02-02"
            },
            {
                "aircraftId":4,
                "mainrootId":2,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-02-02"
            },
            {
                "aircraftId":5,
                "mainrootId":2,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-02-02"
            },
            {
                "aircraftId":1,
                "mainrootId":2,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-02-03"
            },
            {
                "aircraftId":2,
                "mainrootId":2,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-02-03"
            },
            {
                "aircraftId":3,
                "mainrootId":2,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-02-03"
            },
            {
                "aircraftId":4,
                "mainrootId":2,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-02-03"
            },
            {
                "aircraftId":5,
                "mainrootId":2,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-02-03"
            },
            {
                "aircraftId":1,
                "mainrootId":2,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-02-04"
            },
            {
                "aircraftId":2,
                "mainrootId":2,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-02-04"
            },
            {
                "aircraftId":3,
                "mainrootId":2,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-02-04"
            },
            {
                "aircraftId":4,
                "mainrootId":2,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-02-04"
            },
            {
                "aircraftId":5,
                "mainrootId":2,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-02-04"
            },
            {
                "aircraftId":1,
                "mainrootId":2,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-02-05"
            },
            {
                "aircraftId":2,
                "mainrootId":2,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-02-05"
            },
            {
                "aircraftId":3,
                "mainrootId":2,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-02-05"
            },
            {
                "aircraftId":4,
                "mainrootId":2,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-02-05"
            },
            {
                "aircraftId":5,
                "mainrootId":2,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-02-05"
            },
            {
                "aircraftId":1,
                "mainrootId":2,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-02-06"
            },
            {
                "aircraftId":2,
                "mainrootId":2,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-02-06"
            },
            {
                "aircraftId":3,
                "mainrootId":2,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-02-06"
            },
            {
                "aircraftId":4,
                "mainrootId":2,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-02-06"
            },
            {
                "aircraftId":5,
                "mainrootId":2,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-02-06"
            },
            {
                "aircraftId":1,
                "mainrootId":2,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-02-07"
            },
            {
                "aircraftId":2,
                "mainrootId":2,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-02-07"
            },
            {
                "aircraftId":3,
                "mainrootId":2,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-02-07"
            },
            {
                "aircraftId":4,
                "mainrootId":2,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-02-07"
            },
            {
                "aircraftId":5,
                "mainrootId":2,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-02-07"
            }

    ],
}

module.exports = data;