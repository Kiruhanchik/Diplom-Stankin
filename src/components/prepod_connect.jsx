import React from 'react'
import './prepod_connect.scss';
import HomepageBtn from './homepage-btn';
import data from '../data/prepods.json';
import PrepodPopup from './prepod_popup';
import { useState } from 'react';
  
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
                        <button onClick={() => setActive(true)}>Написать</button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div id='prepod-Connect'>
            <HomepageBtn/>
            <PrepodPopup active={active} setActive={setActive} />  
            <header>Быстрая связь с преподавателями</header>
            <main>
                <div id='prepods'>
                    {prepods()}
                </div>
            </main>
        </div>
    )
}
