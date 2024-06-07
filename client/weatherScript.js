// WEATHER SCRIPT

const apiKey = "94f90bba5f4647e3978132235240905"
const button = document.querySelector('#submitButton')
const input = document.querySelector('#cityInput').value // Search Input
const city = document.querySelector('#location') // Search Location
const temp = document.querySelector('#temperature')
const imageContainer = document.querySelector('#imgContainer') // Weather Inage
const weatherDescription = document.querySelector('#description') // Weather Description
const tempFeelsLike = document.querySelector('#feelsLike')

button.addEventListener('click', async (e)=> {
  e.preventDefault()
    const input = document.querySelector('#cityInput').value
        let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`
        )
       
        // Icon Display 
        let weatherIcon = response.data.current.condition.icon
        imageContainer.setAttribute('src', weatherIcon)

        // Weather Discription
        let weatherDes = response.data.current.condition.text
        weatherDescription.innerHTML = weatherDes

        // Location Display
        let locRegion = response.data.location.region
        let locCity = response.data.location.name
        city.innerText = locCity + ', ' + locRegion

        // Temp Display
        let cityWeather = response.data.current.temp_f
        temp.innerHTML = 'Temp: ' + cityWeather + '&deg;F'
        
        let fLike = response.data.current.feelslike_f
        tempFeelsLike.innerHTML = 'Feels Like: ' + fLike + '&deg;F'
        
 })
 