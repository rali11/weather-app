import ThunderStorm from './img/Thunderstorm.png';
import Clear from './img/Clear.png';
import LightRain from './img/LightRain.png';
import HeavyRain from './img/HeavyRain.png';
import Shower from './img/Shower.png';
import Snow from './img/Snow.png';
import Sleet from './img/Sleet.png';
import LightCloud from './img/LightCloud.png';
import HeavyCloud from './img/HeavyCloud.png';

export const GetIconWeather = (codeIcon) => {  
  if (codeIcon === 521){
    return Shower;
  }
  if (codeIcon === 611 || codeIcon === 612){
    return Sleet;
  }
  if (codeIcon === 801 || codeIcon === 802 || codeIcon === 803){
    return LightCloud;
  }  
  if (codeIcon === 804) {
    return HeavyCloud;
  }
  if (codeIcon === 800){
    return Clear;
  }
  if(codeIcon === 900){
    return HeavyRain;
  }
  if (codeIcon >= 500 && codeIcon < 600){
    return HeavyRain;
  }
  if (codeIcon >= 200 && codeIcon < 300){
    return ThunderStorm;
  }
  if (codeIcon >= 300 && codeIcon < 400) {
    return LightRain;
  }
  if (codeIcon >= 600 && codeIcon < 700) {
    return Snow;
  }
  if (codeIcon >= 700 && codeIcon < 800) {
    return HeavyCloud;
  }
}