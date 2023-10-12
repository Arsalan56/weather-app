import './style.css';
import './icon.png';

import GetWeather from './getWeather';
import Check from './sizeCheck';
import hourlyFill from './hourlyFill';
import generalFill from './generalFill';
import dayFill from './dayFill';

(() => {
    Check();
    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const weather = await GetWeather(document.querySelector('input').value);
        // console.log(weather);
        hourlyFill(weather, true);
        generalFill(weather, true);
        generalFill(weather, true);
        dayFill(weather, true);
    });

    // eslint-disable-next-line no-restricted-globals
    // window.onresize = Check();
    window.onresize = Check;
})();
