export default async function GetWeather(i) {
    console.log(
        await fetch(
            `https://api.weatherapi.com/v1/search.json?key=4377390ce908483ab8510059232409&q=${i}`,
            {
                mode: 'cors',
            }
        )
            .then((response) => response.json())
            .then(async (resp) => {
                console.log(resp);
                if (resp.length === 0) {
                    throw new Error('Location not found');
                } else {
                    return fetch(
                        `https://api.weatherapi.com/v1/current.json?key=4377390ce908483ab8510059232409&q=${i}`,
                        {
                            mode: 'cors',
                        }
                    )
                        .then((w) => w.json())
                        .then((weather) => weather);
                }
            })
            .catch((err) => {
                document.querySelector('.error-msg').textContent = err;
            })
    );
}
