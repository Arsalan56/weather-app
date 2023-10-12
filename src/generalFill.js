export default function generalFill(weather, degF) {
    document.querySelector(
        '.location > h2'
    ).textContent = `${weather.location.name}, ${weather.location.country}`;
    document.querySelector('.location > p:first-of-type').textContent =
        weather.current.condition.text;
    if (degF) {
        document.querySelector(
            '.location > h1'
        ).textContent = `${weather.current.feelslike_f}°F`;
    } else {
        document.querySelector(
            '.location > h1'
        ).textContent = `${weather.current.feelslike_c}°C`;
    }
    document.querySelector('.location > p:last-of-type').textContent =
        weather.location.localtime.slice(
            weather.location.localtime.indexOf(' ')
        );
}
