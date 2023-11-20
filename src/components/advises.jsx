import React from 'react'
import HomePage from './homepage-btn';
import './advises.scss';
import students from '../img/students.jpg';
import Header from './header.jsx';

export default function advises() {
  return (
    <div id='advises'>
        <HomePage/>
        <Header title='Советы'/>
        <main>
          <section>
            <h1>За время учебы в вузе, я выявил несколько правил 
              успешной учебы и хочу с вами ими поделиться:
            </h1>
            <ul>
              <li>Старайтесь посещать все пары - преподаватели могут давать доп. баллы к модулю, преподаватель может запомнить вас в лицо и отношение к вам будет лучше. Ну и просто не отчислят 👍</li>
              <li>В станкине модульная система - постарайся сдавать работы вовремя, пускай иногда даже на тройку, зато у тебя не будет копиться снеджный ком из долгов.</li>
              <li>Если интересно узнать какие то нюансы о преподавателях и просто неофициальные новости вуза, можеьте зайти в этот паблик вк 👉 <a href="https://vk.com/podslstankin" target="_blank">Ссылка</a></li>
              <li>В Станкине существует клуб - в нем вы можете записаться на занятия по вокалу, танцам и участию в КВН</li>
            </ul>
          </section>
          <img src={students} alt="" />
        </main>
    </div>
  )
}
