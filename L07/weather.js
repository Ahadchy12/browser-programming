// ============================================
// Weather App - JavaScript
// Fetches real-time weather data from Open-Meteo API
// ============================================

// Get DOM elements
const cityText = document.getElementById("city")
const temperatureText = document.getElementById("temperature")
const windText = document.getElementById("wind")
const output = document.getElementById("output")

// City coordinates for different Finnish cities
const cities = {
    Kuopio: { name: "Kuopio", lat: 62.8924, lon: 27.6770 },
    Helsinki: { name: "Helsinki", lat: 60.1699, lon: 24.9384 },
    Tampere: { name: "Tampere", lat: 61.4978, lon: 23.7610 },
    Oulu: { name: "Oulu", lat: 65.0121, lon: 25.4651 },
    Turku: { name: "Turku", lat: 60.4518, lon: 22.2666 }
}

// Function to log messages to the output box
function log(message) {
    const timestamp = new Date().toLocaleTimeString()
    output.textContent += `[${timestamp}] ${message}\n`
    // Auto-scroll to bottom
    output.scrollTop = output.scrollHeight
}

// Function to clear the output box
function clearOutput() {
    output.textContent = ""
    log("Console cleared. Fetching weather data...")
}

// Function to update weather display in UI
function updateWeatherDisplay(cityName, temperature, windSpeed) {
    cityText.textContent = cityName
    temperatureText.textContent = temperature + " °C"
    windText.textContent = windSpeed + " km/h"
    
    // Add a little animation effect
    const weatherCard = document.querySelector('.weather-card')
    if (weatherCard) {
        weatherCard.style.animation = 'none'
        setTimeout(() => {
            weatherCard.style.animation = 'fadeIn 0.5s ease-in'
        }, 10)
    }
}

// Main function to load weather data for a city
async function loadWeatherByCity(cityName, latitude, longitude) {
    clearOutput()
    
    // Show loading state in weather display
    cityText.textContent = "Loading..."
    temperatureText.textContent = "---"
    windText.textContent = "---"
    
    try {
        // Build the API URL
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&timezone=auto`
        
        log(`Fetching weather data for ${cityName}...`)
        log(`API URL: ${url}`)
        
        // Fetch data from the API
        const response = await fetch(url)
        
        // Check if response is OK
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`)
        }
        
        log(`✅ Response received! Status: ${response.status}`)
        
        // Parse JSON data
        const data = await response.json()
        log("✅ Data parsed successfully")
        
        // Extract weather information
        const temperature = data.current.temperature_2m
        const windSpeed = data.current.wind_speed_10m
        
        // Update the display
        updateWeatherDisplay(cityName, temperature, windSpeed)
        
        // Log detailed information
        log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
        log(`📍 City: ${cityName}`)
        log(`🌡️ Temperature: ${temperature}°C`)
        log(`💨 Wind Speed: ${windSpeed} km/h`)
        log(`🕐 Time: ${new Date().toLocaleString()}`)
        log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
        
        // Optional: Add weather description based on temperature
        let weatherDesc = ""
        if (temperature < 0) {
            weatherDesc = "❄️ Freezing cold! Bundle up!"
        } else if (temperature < 10) {
            weatherDesc = "🥶 Chilly! Wear a jacket."
        } else if (temperature < 20) {
            weatherDesc = "😊 Pleasant weather!"
        } else {
            weatherDesc = "☀️ Warm and nice!"
        }
        log(`💡 Suggestion: ${weatherDesc}`)
        
    } catch (error) {
        // Handle errors
        log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
        log(`❌ ERROR: ${error.message}`)
        log("💡 Possible issues:")
        log("   - No internet connection")
        log("   - API server is down")
        log("   - Invalid coordinates")
        log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
        
        // Update display with error message
        cityText.textContent = "Error"
        temperatureText.textContent = "---"
        windText.textContent = "---"
    }
}

// ============================================
// Event Listeners for City Buttons
// ============================================

// Kuopio button
document.getElementById("btnKuopio").onclick = function () {
    loadWeatherByCity(cities.Kuopio.name, cities.Kuopio.lat, cities.Kuopio.lon)
}

// Helsinki button
const helsinkiBtn = document.getElementById("btnHelsinki")
if (helsinkiBtn) {
    helsinkiBtn.onclick = function () {
        loadWeatherByCity(cities.Helsinki.name, cities.Helsinki.lat, cities.Helsinki.lon)
    }
}

// Tampere button
const tampereBtn = document.getElementById("btnTampere")
if (tampereBtn) {
    tampereBtn.onclick = function () {
        loadWeatherByCity(cities.Tampere.name, cities.Tampere.lat, cities.Tampere.lon)
    }
}

// Oulu button
const ouluBtn = document.getElementById("btnOulu")
if (ouluBtn) {
    ouluBtn.onclick = function () {
        loadWeatherByCity(cities.Oulu.name, cities.Oulu.lat, cities.Oulu.lon)
    }
}

// Turku button
const turkuBtn = document.getElementById("btnTurku")
if (turkuBtn) {
    turkuBtn.onclick = function () {
        loadWeatherByCity(cities.Turku.name, cities.Turku.lat, cities.Turku.lon)
    }
}

// Log initialization
log("🌤️ Weather App initialized!")
log(`📍 Supported cities: ${Object.keys(cities).join(", ")}`)
log("💡 Click any city button to fetch real-time weather data")
log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")

// Optional: Load default weather for Kuopio on page load
// Uncomment the line below if you want to load weather automatically
// setTimeout(() => loadWeatherByCity(cities.Kuopio.name, cities.Kuopio.lat, cities.Kuopio.lon), 500)
