import { weather_data } from './data.js';

let loadDayForecastData = (citySelected) => {
    const dataCity = weather_data.find( e => e.city === citySelected);
    
    const { city, maxtemperature, mintemperature, cloudiness, wind, rainfall, forecast_today } = dataCity;
    const [tarde, noche] = forecast_today;
    const { text: textTarde, temperature: temperatureTarde, forecast: forecastTarde, icon: iconTarde } = tarde;
    const { text: textNoche, temperature: temperatureNoche, forecast: forecastNoche, icon: iconNoche } = noche;

    const objCity = document.getElementById("city");
    objCity.innerText = city;

    const objMaxTemperature = document.getElementById("maxtemperature");
    objMaxTemperature.innerText = maxtemperature;

    const objMinTemperature = document.getElementById("mintemperature");
    objMinTemperature.innerText = mintemperature;

    const objCloudiness = document.getElementById("cloudiness");
    objCloudiness.innerText = cloudiness;
    const objMind = document.getElementById("wind");
    objMind.innerText = wind;
    const objRainfall = document.getElementById("rainfall");
    objRainfall.innerText = rainfall;

    const objLateIcon = document.getElementById("late_icon");
    objLateIcon.innerText = iconTarde;
    const objLateTemperature = document.getElementById("late_temperature");
    objLateTemperature.innerText = temperatureTarde;
    const objLateForecast = document.getElementById("late_forecast");
    objLateForecast.innerText = forecastTarde;
    const objLateText = document.getElementById("late_text");
    objLateText.innerText = textTarde;

    const objNightIcon = document.getElementById("night_icon");
    objNightIcon.innerText = iconNoche;
    const objNightTemperature = document.getElementById("night_temperature");
    objNightTemperature.innerText = temperatureNoche;
    const objNightForecast = document.getElementById("night_forecast");
    objNightForecast.innerText = forecastNoche;
    const objNightText = document.getElementById("night_text");
    objNightText.innerText = textNoche;

}

let loadWeekForecastData = (citySelected) => {

    const dataCity = weather_data.find( e => e.city === citySelected);
    const { forecast_week } = dataCity;
    const objListForecastWeek = document.getElementById("forecast_week");
    let templateForecast = '';

    forecast_week.map(e => {
        const { text, date, temperature: { min, max }, icon } = e;
        templateForecast += `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex flex-column">
                    <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
                    <span class="text-xs">${date}</span>
                    </div>
                    <div class="d-flex align-items-center ">
                    <span class="font-weight-bold text-dark mx-2">${max}</span> |  <span class="text-dark mx-2">${min}</span>
                    <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
                    </div>
                </li>`;
        
    })
    objListForecastWeek.innerHTML = templateForecast;
}

const loadCity = () => {
    const objCities = document.getElementById('dropdownMenuButton');
    const cities = weather_data.map(e => e.city);
    cities.map(e => {
        objCities.innerHTML += `<option class="dropdown-item" value="${e}">${e}</option>`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadCity();
    loadDayForecastData('Guayaquil');
})

const btnCity = document.getElementById("dropdownMenuButton");

btnCity.addEventListener('change', (event) => {
    const citySelected = event.target.value;
    document.getElementById("forecast_week").innerHTML = '';
    loadDayForecastData(citySelected);
})

const btnCargar = document.getElementById("loadinfo");

btnCargar.addEventListener('click', (event) => {
    const citySelected = document.getElementById("dropdownMenuButton").value;
    loadWeekForecastData(citySelected);
})
