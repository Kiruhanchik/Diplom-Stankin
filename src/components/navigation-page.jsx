import React, { useState } from 'react';
import './navigation-page.scss';
import HomePage from './homepage-btn';
import Header from './header.jsx';
import { useSpring, animated } from 'react-spring'

export default function Navigation() {
    const [searchText, setSearchText] = useState('');

    const searchHandle = async () => {
        if (searchText === 'общежитие' || searchText === 'общежития') {
            window.open('https://stankin.ru/pages/id_88/page_598'); 
            setSearchText('');
        } else if (searchText === 'общежитие 3' || searchText === 'Общежитие 3' || searchText === 'общежитие 1') {
            window.open('https://t.me/hostelvadkovskii');
            setSearchText('');
        } else {
            try {
                const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBPjQk1c3PUtKngogRTCiR8Y1Ht7fL2ROU&cx=b2ca175e2ed3e4be6&q=` + `Станкин` + `${searchText}`);
                const data = await response.json();
                const firstResultLink = data.items[0].link;
                window.open(firstResultLink); 
                console.log(data);
                setSearchText('');
            } catch (error) {
                console.log(error);
            }
        }
    }

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
                <div id='search-form'>
                    <input onChange={(el) => {setSearchText(el.target.value); console.log(searchText)}} id='search-input' type="text" placeholder='Введите то, что хотите найти' />
                    <button id='find-btn' onClick={searchHandle}>Найти</button>
                </div>
            </main>
        </animated.div>
    )
}
