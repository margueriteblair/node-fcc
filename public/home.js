let header = document.createElement('h1');
header.id = 'header';
header.innerText = 'Welcome to Chilis'

let input = document.createElement('input');
input.id = 'zip';
input.placeholder = 'Zipcode';

let submit = document.createElement('button');
submit.id = 'submit';
submit.innerText = 'Submit Data'

document.body.appendChild(header);
document.body.appendChild(input)
document.body.appendChild(submit);

submit.onclick = function() {
    const url = "https://api.openweathermap.org/data/2.5/weather"
    const zeq = "?zip="
    let zipCode = input.value;
    const countryCode = ",us"
    const appId = "&appid=";
    const city = '4930956'
    let combinedURL = url+zeq+zipCode+countryCode+appId+process.env.API_KEY;
    const xhr = new XMLHttpRequest();
    console.log(combinedURL);
    xhr.open('GET', combinedURL, true);
    xhr.onload = () => {
        if (this.status === 200 && this.readyState === 4) {
            console.log(this.responseText)
            let json = JSON.parse(this.responseText);
            let jsonValues = Object.values(json);
            let jsonKeys = Object.keys(json)
            console.log(jsonKeys)
            console.log(jsonValues)
            let degreesF = (((jsonValues[3].temp)-273.15)*(9/5)+32).toFixed(2)
            console.log(degreesF)
            document.getElementById("currentWeather").innerHTML = `<h1>${jsonValues[11]} is ${degreesF} degrees F.</h1>`
    }
}
    xhr.send();
}