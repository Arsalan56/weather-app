export default function hourlyFill(forecast, degF) {
    const hour = document.querySelectorAll('.hourlyCast > div > div > img');
    const time = document.querySelectorAll(
        '.hourlyCast > div > div > p:first-of-type'
    );
    const temp = document.querySelectorAll(
        '.hourlyCast > div > div > p:last-of-type'
    );
    const currentHour = forecast.location.localtime.slice(
        forecast.location.localtime.indexOf(' '),
        forecast.location.localtime.indexOf(':')
    );
    let day = 0;
    // Set each image in hourly cast to according condition on that hour
    for (let i = 0; i < 5; i++) {
        let ind = [parseInt(currentHour, 10) + i];
        if (ind >= 24) {
            ind -= 24;
            day = 1;
        }

        hour[i].setAttribute(
            'src',
            forecast.forecast.forecastday[day].hour[ind].condition.icon
        );
        // variable used for getting time
        const currTime = forecast.forecast.forecastday[day].hour[ind].time;
        time[i].textContent = currTime.slice(currTime.indexOf(' '));
        // Check is degree is in fahrenheit or celsius
        if (degF) {
            temp[
                i
            ].textContent = `${forecast.forecast.forecastday[day].hour[ind].temp_f}°F`;
        } else {
            temp[
                i
            ].textContent = `${forecast.forecast.forecastday[day].hour[ind].temp_c}°C`;
        }
    }
}
