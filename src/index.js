import './style.css';
import './icon.png';

import GetWeather from './getWeather';
import Check from './sizeCheck';
import iconFill from './iconFill';

(() => {
    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const weather = await GetWeather(document.querySelector('input').value);
        // document
        //     .querySelector('.hourlyCast>div>img')
        //     .setAttribute(
        //         'src',
        //         weather.forecast.forecastday[0].hour[8].condition.icon
        //     );
        // console.log(weather.forecast.forecastday[0].hour[8].condition.icon);
        iconFill(weather);
    });

    // eslint-disable-next-line no-restricted-globals
    // window.onresize = Check();
    window.onresize = Check;
})();
