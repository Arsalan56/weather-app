const errorMsg = document.querySelector('.error-msg');

export default async function GetWeather(i) {
    return fetch(
        `https://api.weatherapi.com/v1/search.json?key=4377390ce908483ab8510059232409&q=${i}`,
        {
            mode: 'cors',
        }
    )
        .then((response) => response.json())
        .then(async (resp) => {
            if (resp.length === 0) {
                throw new Error('Location not found');
            } else {
                errorMsg.textContent = '';

                return fetch(
                    `https://api.weatherapi.com/v1/forecast.json?key=4377390ce908483ab8510059232409&q=${i}`,
                    {
                        mode: 'cors',
                    }
                )
                    .then((w) => w.json())
                    .then((weather) => weather)
                    .catch((err) => {
                        errorMsg.textContent = err;
                    });
            }
        })
        .catch((err) => {
            errorMsg.textContent = err;
        });
}
