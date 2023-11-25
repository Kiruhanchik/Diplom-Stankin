import React from 'react'
import HomePage from './homepage-btn';
import './advises.scss';
import students from '../img/students.jpg';
import Header from './header.jsx';
import { useSpring, animated } from 'react-spring'

export default function Advises() {

  const animation = useSpring({
    from: { opacity: 0 }, // начальные стили
    to: { opacity: 1 }, // конечные стили
    config: { duration: 300 } // настройки анимации
  })

  return (
    <animated.div id='advises' style={animation}>
        <HomePage/>
        <Header title='Советы'/>
        <main>
          <section>
            <h1>За время учебы в вузе, я выявил несколько правил 
              успешной учебы и хочу с вами ими поделиться:
            </h1>
            <ul>
              <li>Старайтесь посещать все пары - преподаватели могут давать доп. баллы к модулю, преподаватель может запомнить вас в лицо и отношение к вам будет лучше. Ну и просто не отчислят 👍</li>
              <li>В станкине модульная система - постарайся сдавать работы вовремя, пускай иногда даже на тройку, зато у вас не будет копиться снежный ком из долгов.</li>
              <li>Если интересно узнать какие то нюансы о преподавателях и просто неофициальные новости вуза, можете зайти в этот паблик вк 👉 <a href="https://vk.com/podslstankin" target="_blank">Подслушано_Станкин</a></li>
              <li>В Станкине существует клуб - в нем вы можете записаться на занятия по вокалу, танцам и участию в КВН. 👉 <a href="https://www.youtube.com/@user-jp8wo3ct2f/featured" target="_blank">КЛУБ_Станкин</a></li>
              <li>Вы можете посетить профком - в нем вам помогут с решением студенческих вопросов, участием в интересных мероприятиях и тд. 👉 <a href="https://vk.com/profstankin" target="_blank">Профком</a></li>
            </ul>
          </section>
          <img src={students} alt="" />
        </main>
    </animated.div>
  )
}
