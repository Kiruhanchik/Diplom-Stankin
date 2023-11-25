import React, { useState } from 'react';
import './navigation-page.scss';
import HomePage from './homepage-btn';
import Header from './header.jsx';
import { useSpring, animated } from 'react-spring'
import Pages from '../components/pages.jsx';

export default function Navigation() {

    const animation = useSpring({
        from: { opacity: 0 }, // начальные стили
        to: { opacity: 1 }, // конечные стили
        config: { duration: 300 } // настройки анимации
    })

    return (
        <animated.div id='navigation' style={animation}>
            <HomePage/>
            <Header title='Навигация по разделам Станкина'/>
            <main>
                <Pages/>
            </main>
        </animated.div>
    )
}
