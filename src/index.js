import './style.css';
import './icon.png';

import GetWeather from './getWeather';

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const weather = await GetWeather(document.querySelector('input').value);
    console.log(weather);
});
