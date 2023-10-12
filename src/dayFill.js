export default function dayFill(weather, degF) {
    const image = document.querySelectorAll('.dailyCont img');
    const rainCov = document.querySelectorAll('.rain-cov');
    const temp = document.querySelectorAll('.dailyTemp');
    const high = document.querySelectorAll('.temp > p:first-of-type');
    const low = document.querySelectorAll('.temp > p:last-of-type');
    const condition = document.querySelectorAll(
        '.dailyCont > div > p:last-of-type'
    );
    const days = document.querySelectorAll(
        '.dailyCont > div > p:first-of-type'
    );
    const daysOfWeek = [
        null,
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];
    if (degF) {
        for (let i = 0; i < 3; i++) {
            const day = weather.forecast.forecastday[i];
            image[i].setAttribute('src', day.day.condition.icon);
            temp[i].textContent = `${day.day.avgtemp_f}°F`;
            high[i].textContent = `High: ${day.day.maxtemp_f}°F`;
            low[i].textContent = `Low: ${day.day.mintemp_f}°F`;
            condition[i].textContent = day.day.condition.text;

            days[i].textContent =
                daysOfWeek[new Date(`${day.date}T00:00:00`).getDay()];
            if (day.day.daily_chance_of_rain > 0) {
                rainCov[
                    i
                ].textContent = `Chance of Rain: ${day.day.daily_chance_of_rain}%`;
            } else {
                rainCov[i].textContent = '';
            }
        }
    }
}
