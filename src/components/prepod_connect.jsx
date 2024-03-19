import React from 'react'
import './prepod_connect.scss';
import HomepageBtn from './homepage-btn';
import PrepodPopup from './prepod_popup';
import { useState } from 'react';
import Header from './header.jsx';
import { useSpring, animated } from 'react-spring'
import Dark_theme from '../components/dark_theme.jsx'
import prepods from '../services/prepods.services.js';

  
export default function PrepodConnect() {

    const [active, setActive] = useState(false);
    const [prepod, setPrepod] = useState({});

    const animation = useSpring({
        from: { opacity: 0 }, // начальные стили
        to: { opacity: 1 }, // конечные стили
        config: { duration: 300 } // настройки анимации
    })


    return (
        <animated.div id='prepod-Connect' style={animation}>
            <HomepageBtn/>
            <PrepodPopup active={active} setActive={setActive} prepod={prepod} setPrepod={setPrepod}/>  
            <Header title='Преподаватели кафедры КСУ'/>
            <main>
                <div id='prepods'>
                    {prepods({setActive, setPrepod})}
                </div>
                <Dark_theme/>
            </main>
        </animated.div>
    )
}
