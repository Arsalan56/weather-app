export default function GetWeather(i) {
    fetch(
        `https://api.weatherapi.com/v1/current.json?key=4377390ce908483ab8510059232409&q=${i}`,
        {
            mode: 'cors',
        }
    )
        .then((response) => response.json())
        .then((resp) => {
            console.log(resp);
        })
        .catch((err) => {
            console.log(err);
        });
}
