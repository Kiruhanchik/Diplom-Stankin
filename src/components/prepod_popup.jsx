import React from 'react'
import './prepod_popup.scss';
import { useState } from 'react';

export default function PrepodPopup({active, setActive, prepod, setPrepod}) {

    const disciplines = () => {
        let data = prepod.disciplines;
        if (data) {
            return data?.map((discipline) => {
                return (
                    <li>{discipline}</li>
                )
            })
        } 
        return (
            <>Отсутствуют</>
        )
    }

    const publications = () => {
        let data = prepod.publications;
    }

    return (
        <div className={active ? 'popup active' : 'popup'}>
            <div id='popup'>
                <div id='close'>
                    <svg onClick={() => {setActive(false); setPrepod({})}} width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM5.35355 4.64645C5.15829 4.45118 4.84171 4.45118 4.64645 4.64645C4.45118 4.84171 4.45118 5.15829 4.64645 5.35355L7.29289 8L4.64645 10.6464C4.45118 10.8417 4.45118 11.1583 4.64645 11.3536C4.84171 11.5488 5.15829 11.5488 5.35355 11.3536L8 8.70711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.70711 8L11.3536 5.35355C11.5488 5.15829 11.5488 4.84171 11.3536 4.64645C11.1583 4.45118 10.8417 4.45118 10.6464 4.64645L8 7.29289L5.35355 4.64645Z" fill="black"/>
                    </svg>
                </div>
                <img width={100} src={prepod.photo} alt={prepod.name} />
                <p>Дисциплины преподавателя</p>
                <ul>
                    {disciplines()}
                </ul>
                <p>Публикации преподавателя</p>
            </div>
        </div>
    )
}
