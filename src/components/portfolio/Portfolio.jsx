import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/weather.jpg';
import IMG2 from '../../assets/restaurant.jpg';
import IMG3 from '../../assets/admin.jpg';
import IMG4 from '../../assets/news.jpg';
import IMG5 from '../../assets/portfolio 5.jpg';
import IMG6 from '../../assets/portfolio 6.jpg';

// DO NOT USE THE IMAGE IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Current-Weather App ',
    github: 'https://github.com/vip8097/weatherhookheroku',
    demo: 'https://weather-hook-vipin.herokuapp.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'restaurant App',
    github: 'https://github.com/vip8097/restaurantappheroku',
    demo: 'https://restaurant-app-vipin.herokuapp.com/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Admin Dashboard App',
    github: 'https://github.com/vip8097/herokuadmindashboard',
    demo: 'https://admin-app-vipin.herokuapp.com/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Current News App',
    github: 'https://github.com/vip8097/newsappheroku',
    demo: 'https://news-app-vipin.herokuapp.com/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Resort booking web ui😍',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17654189-Resort-booking-web-ui',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Logofolio 2 - logo collection - logo mark',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17655923-Logofolio-2-logo-collection-logo-mark',
  },
];

const Portfolio = () => {
  return (
    <>
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio__container'>
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article className='portfolio__item' key={id}>
                <div className='portfolio__item-image'>
                  <img src={image} alt= {title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>
                    Github
                  </a>
                  <a
                    href={demo}
                    className='btn btn-primary'
                    target='_blank'>
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
