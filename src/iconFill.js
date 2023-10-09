export default function iconFill(forecast) {
    const hour = document.querySelectorAll('.hourlyCast img');
    const currentHour = forecast.location.localtime.slice(
        forecast.location.localtime.indexOf(' '),
        forecast.location.localtime.indexOf(':')
    );
    // console.log(currentHour);
    const v = forecast.forecast.forecastday[0].hour[parseInt(currentHour, 10)];
    console.log(v);
    // currentHour =
}
