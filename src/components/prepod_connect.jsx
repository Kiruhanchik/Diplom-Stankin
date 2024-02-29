import React from 'react'
import './prepod_connect.scss';
import HomepageBtn from './homepage-btn';
import data from '../data/prepods.json';
import PrepodPopup from './prepod_popup';
import { useState } from 'react';
import Header from './header.jsx';
import { useSpring, animated } from 'react-spring'
import Dark_theme from '../components/dark_theme.jsx'
  
export default function PrepodConnect() {

    const [active, setActive] = useState(false);
 
    const prepods = () => {
        return data.map((prepod) => {
            return (
                <div key={prepod.id} id='prepod'>
                    <img src={prepod.photo} alt={prepod.name} />
                    <div id='bio'>
                        <p id='prepod-name'>{prepod.name}</p>
                        <p id='prepod-mail'>{prepod.mail}</p>
                        <button onClick={() => setActive(true)}>Подробнее</button>
                    </div>
                </div>
            )
        })
    }

    const animation = useSpring({
        from: { opacity: 0 }, // начальные стили
        to: { opacity: 1 }, // конечные стили
        config: { duration: 300 } // настройки анимации
    })

    return (
        <animated.div id='prepod-Connect' style={animation}>
            <HomepageBtn/>
            <PrepodPopup active={active} setActive={setActive} />  
            <Header title='Быстрая связь с преподавателями'/>
            <main>
                <div id='prepods'>
                    {prepods()}
                </div>
                <Dark_theme/>
            </main>
        </animated.div>
    )
}
