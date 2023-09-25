import './style.css';
import GetWeather from './getWeather';

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    GetWeather(document.querySelector('input').value);
});
