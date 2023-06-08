// This gets the image's from the api.
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then (res => res.json())
    .then (data => {
      // console.log(data.urls.regular)
      document.body.style.backgroundImage = `url(${data.urls.regular})`
      document.getElementById("author").textContent = `By: ${data.user.name}`
    })

    .catch(err => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1479030160180-b1860951d696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMzY5OTl8&ixlib=rb-4.0.3&q=80&w=1080)`
  })


// The Fetch Request for Dogecoin.
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
      if (!res.ok) {
          throw Error("Something went wrong")
      }
      return res.json()
    })
    .then(data => {
      // console.log(data)
      document.getElementById("crypto1").innerHTML = `
      <img src=${data.image.small} />
      <span class="crypto-name">${data.name}</span>
      `
      document.getElementById("doge-crypto").innerHTML += `
      <p id="dogecoin-prices">Current: $${data.market_data.current_price.cad}</p>
      <p id="dogecoin-prices">Highest: $${data.market_data.high_24h.cad}</p>
      <p id="dogecoin-prices">Lowest: $${data.market_data.low_24h.cad}</p>
      `
    })
    .catch(err => console.error(err))


// The Fetch Request for Bitcoin.
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
      if (!res.ok) {
          throw Error("Something went wrong")
      }
      return res.json()
    })
    .then(data => {
      // console.log(data)
      document.getElementById("crypto2").innerHTML = `
      <img src=${data.image.small} />
      <span class="crypto-name">${data.name}</span>
      `
        document.getElementById("bit-crypto").innerHTML += `
        <p id="bitcoin-prices">Current: $${data.market_data.current_price.cad}</p>
        <p id="bitcoin-prices">Highest: $${data.market_data.high_24h.cad}</p>
        <p id="bitcoin-prices">Lowest: $${data.market_data.low_24h.cad}</p>
      `
    })
    .catch(err => console.error(err))


// Code for the current clock.
function getCurrentTime() {
  const date = new Date()
  document.getElementById("clock").textContent = date.toLocaleTimeString("en-ca", {timeStyle: 
    "medium"})

}  
  setInterval(getCurrentTime, 1000)


navigator.geolocation.getCurrentPosition(position => {
  fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
              throw Error("Weather data is not avalable.")
            }
            return res.json()
    })
        .then(data => {
          //  console.log(data)
          const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          document.getElementById("weather").innerHTML = `
              <img id="weather-img"class="current-weather" src=${iconUrl} />
              <h1 id="weather-text" class="current-weather">${Math.round(data.main.temp)}°</h1>
              <p id="weather-text-place"> Location: ${data.name}</p> 
          `
          setInterval(getCurrentTime, 1000)
      })
      .catch(err => console.error(err))
});






// coords
// : 
// GeolocationCoordinates
// accuracy
// : 
// 1853.5987549289148
// altitude
// : 
// null
// altitudeAccuracy
// : 
// null
// heading
// : 
// null
// latitude
// : 
// 48.424579
// longitude
// : 
// -123.3646699
// speed
// : 
// null