import './style.css';
import './icon.png';

import GetWeather from './getWeather';
import Check from './sizeCheck';
import hourlyFill from './hourlyFill';
import generalFill from './generalFill';
import dayFill from './dayFill';

(async () => {
    let weather = await GetWeather('Paris');
    let degFaren = true;

    Check();
    const FillAll = (wthr, CelsOrFaren) => {
        hourlyFill(wthr, CelsOrFaren);
        generalFill(wthr, CelsOrFaren);
        generalFill(wthr, CelsOrFaren);
        dayFill(wthr, CelsOrFaren);
    };
    FillAll(await GetWeather('Paris'), degFaren);

    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        weather = await GetWeather(document.querySelector('input').value);
        // console.log(weather);
        FillAll(weather, degFaren);
    });

    document.querySelector('.tempmode').addEventListener('click', () => {
        degFaren = !degFaren;
        FillAll(weather, degFaren);
    });

    window.onresize = Check;
})();
