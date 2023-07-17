import './App.css';

import News from './Components/header/news';
import ExchangeRates from './Components/header/exchangeRates';
import Ads from './Components/header/ads';

import Search from './Components/body/search';

import Banner from './Components/footer/banner';
import Widgets from './Components/footer/widget';
import Weather from './Components/footer/widgets/weather';
import Ether from './Components/footer/widgets/ether';
import GermanyMap from './Components/footer/widgets/germanyMap';
import TVProgram from './Components/footer/widgets/tvProgram';
import MostVisited from './Components/footer/widgets/mostVisited';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <News newsCategories={['Сейчас в СМИ', 'в Германии', 'Рекомендуем']} newsTitles={['Путин упростил получение автомобильных номеров', 'В команде Зеленского раскрыли план реформ на Украине', '«Турпомощь» прокомментировала гибель десятков россиян в Анталье', 'Суд закрыл дело Демпартии США против России>', 'На Украине призвали создать ракеты для удара по Москве']} />
           <Ads
            title="Работа над ошибками"
            description="Смотрите на Яндексе и запоминайте">
            <img
              src="https://funforkids.ru/pictures/school4/school0450.gif"
              alt="Plug"
            />
          </Ads>
          <ExchangeRates rates={[
          {
            currency: 'usd moex',
            rate: '+0,1'
          },
          {
            currency: 'eur moex',
            rate: '+0,2'
          },
          {
            currency: 'нефть',
            rate: '+1.63%'
          }]} />
      </header>

      <div className="App-body">
        <Search  
            searchСategories={[
              'Видео',
              'Картинки',
              'Новости',
              'Карты',
              'Маркет',
              'Переводчик',
              'Эфир'
            ]}
            searchExample="фаза луны сегодня" />
      </div>

      <footer>
        <Banner src="http://images-s.kinorium.com/movie/poster/1442930/w1500_39986228.jpg" alt="cinema"/>

        <Widgets>
        <Weather
              averageTemperature="+17"
              morningTemperature="+17"
              daytimeTemperature="+20"
            />
          <GermanyMap
              items={['Расписание']}
            />
            <Ether
              items={['Управление как искусство', 'Ночь. Мир в это время', 'Андрей Возн...',]}
            />
            <MostVisited 
              items={['Недвижимость', 'Маркет', 'Авто.ру']}
            />
            <TVProgram
              items={['02:00 ТНТ.best', '02:15 Джинглики']}
            />
        </Widgets>
      </footer>

    </div>
  );
}

export default App;
