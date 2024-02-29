import React from 'react'
import HomePage from './homepage-btn'
import './advises.scss'
import students from '../img/students.jpg';
import { useSpring, animated } from 'react-spring'
import Dark_theme from '../components/dark_theme.jsx'
import data from '../data/advises.json'
import Header from '../components/header.jsx'

export default function Advises() {

  const animation = useSpring({
    from: { opacity: 0 }, // начальные стили
    to: { opacity: 1 }, // конечные стили
    config: { duration: 300 } // настройки анимации
  })

  const advises = () => {
      return data.map((advise) => {
        return (
            <div key={advise.id} id='advise'>
                <li>{advise.text} <a href={advise.link} target="_blank">{advise.link_name}</a></li>
            </div>
        )
      })
  }

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
              {advises()}
            </ul>
          </section>
          <img src={students} alt="students-img" />
          <Dark_theme/>
        </main>
    </animated.div>
  )
}
