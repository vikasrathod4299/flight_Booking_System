const data={
    cityData:[
    {
        "id": 1,
        "name": "ahmedabad",
        "longitude": 72.5714,
        "latitude": 23.0225,
        "country": "india"
    },
    {
        "id": 2,
        "name": "delhi",
        "longitude": 77.1025,
        "latitude": 28.7041,
        "country": "india"
    },
    {
        "id": 3,
        "name": "gandhinagar",
        "longitude": 72.6369,
        "latitude": 23.2156,
        "country": "india"
    },
    {
        "id": 4,
        "name": "chennai",
        "longitude": 80.2707,
        "latitude": 13.0827,
        "country": "india"
    },
    {
        "id": 5,
        "name": "mumbai",
        "longitude": 72.8777,
        "latitude": 19.076,
        "country": "india"
    },
    {
        "id": 6,
        "name": "bangalore",
        "longitude": 77.5946,
        "latitude": 12.9716,
        "country": "india"
    },
    {
        "id": 7,
        "name": "pune",
        "longitude": 73.8567,
        "latitude": 18.5204,
        "country": "india"
    },
    {
        "id": 8,
        "name": "goa",
        "longitude": 74.124,
        "latitude": 15.2993,
        "country": "india"
    },
    {
        "id": 9,
        "name": "srinagar",
        "longitude": 74.7973,
        "latitude": 34.0837,
        "country": "india"
    },
    {
        "id": 10,
        "name": "kolkata",
        "longitude": 88.3639,
        "latitude": 22.5726,
        "country": "india"
    },
    {
        "id": 11,
        "name": "jaipur",
        "longitude": 75.7873,
        "latitude": 26.9124,
        "country": "india"
    },
    {
        "id": 12,
        "name": "bhopal",
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
            "logo": "asdfasdfasdf",
            "discount": 10
        },
        {
            "agency_name":"Emirets", 
            "logo": "asdfasdfasdf",
            "discount": 10
        },
        {
            "agency_name":"Spice jet", 
            "logo": "asdfasdfasdf",
            "discount": 10
        },
        {
            "agency_name":"Indigo", 
            "logo": "asdfasdfasdf",
            "discount": 10
        },
        {
            "agency_name":"Vistara", 
            "logo": "asdfasdfasdf",
            "discount": 10
        },
        {
            "agency_name":"Kingfiher", 
            "logo": "asdfasdfasdf",
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
                "date":"2023-01-20"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-01-20"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-01-20"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-01-20"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-01-20"
            },
            {
                "aircraftId":1,
                "mainrootId":1,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-01-21"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-01-21"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-01-21"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-01-21"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-01-21"
            },
            {
                "aircraftId":1,
                "mainrootId":1,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-01-22"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-01-22"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-01-22"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-01-22"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-01-22"
            },
            {
                "aircraftId":1,
                "mainrootId":1,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-01-21"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-01-21"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-01-21"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-01-21"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-01-21"
            },
            {
                "aircraftId":1,
                "mainrootId":1,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-01-23"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-01-23"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-01-23"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-01-23"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-01-23"
            },
            {
                "aircraftId":1,
                "mainrootId":1,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-01-24"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-01-24"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-01-24"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-01-24"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-01-24"
            },
            {
                "aircraftId":1,
                "mainrootId":1,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-01-25"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-01-25"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-01-25"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-01-25"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-01-25"
            },
            {
                "aircraftId":1,
                "mainrootId":1,
                "depTime":"01:30",
                "arrTime":"05:20",
                "date":"2023-01-26"
            },
            {
                "aircraftId":2,
                "mainrootId":1,
                "depTime":"10:00",
                "arrTime":"13:50",
                "date":"2023-01-26"
            },
            {
                "aircraftId":3,
                "mainrootId":1,
                "depTime":"03:00",
                "arrTime":"06:05",
                "date":"2023-01-26"
            },
            {
                "aircraftId":4,
                "mainrootId":1,
                "depTime":"02:30",
                "arrTime":"07:00",
                "date":"2023-01-26"
            },
            {
                "aircraftId":5,
                "mainrootId":1,
                "depTime":"06:15",
                "arrTime":"10:30",
                "date":"2023-01-26"
            }
    ],
}

module.exports = data;