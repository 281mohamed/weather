const request = require('request')

// const url = "https://api.weatherapi.com/v1/current.json?key=1cc00dbafcdd4c29b4f210752230905&q=portugal"

// request({url, json : true}, (error, response) => {
//     // console.log(response.body)

//     // const data1 = JSON.parse(response.body)

//     // console.log(data1.location.name)
//     // console.log(data1.current.condition.text)





//     // console.log(response.body.location.name)
//     // console.log(response.body.current.condition.text)


//     if(error) {
//         console.log("ERROR OCCURED")
//     } else if(response.body.error){
//         console.log(response.body.error.message)
//     } else {
//         console.log(response.body.location.name, response.body.current.condition.text)
//     }
// })

///////////////////////////////////////////////////////////////////////////////////////////



// const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoibW9oYW1lZC1hbGktMTI4IiwiYSI6ImNsaGppbjZoODBpOWEzY254dGkwdzVqZmUifQ.4aQGuoD8vpAm1xMhh90Abg"

// request ({url : geocodeUrl, json : true}, (error, response) => {
//     if(error) {
//         console.log("Unable to connect geocode")
//     }
//     else if(response.body.message) {
//         console.log(response.body.message)
//     }
//     else if(response.body.features.length == 0){
//         console.log("Unable to find location")
//     }
//     else {
//         const longtitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(latitude, latitude)
//     }
// })


////////////////////////////////////////////////////////////////////////////////////////////////////



const forecast = require("./data1/forecast")

// forecast(29.871903452398, 26.4941838299718, (error, data) => {
//     console.log("ERROR : ", error)
//     console.log("DATA : ", data)
// })


////////////////////////////////////////////////////////////////////////////////////////////////////

const geocode = require("./data1/geocode")


// const country = process.argv[2]

// geocode(country, (error, data) => {
//     console.log("ERROR : ", error)
//     console.log("DATA : ", data)

//     if(data){
//         forecast(data.longtitude, data.latitude, (error, data) => {
//             console.log("ERROR : ", error)
//             console.log("DATA : ", data)
//             })
//     }
//     else {
//         console.log("Data entered have an error")
//     }
// })












const longtitude = process.argv[2]
const latitude = process.argv[2]

forecast(longtitude, latitude, (error, data) => {
    console.log("ERROR : ", error)
    console.log("DATA : ", data)

    if(data){
        geocode(data.name, (error, data) => {
            console.log("ERROR : ", error)
            console.log("DATA : ", data)
        })
    }
    else {
        console.log("Data entered have an error")
    }
})