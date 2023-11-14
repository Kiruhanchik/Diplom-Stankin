import React from 'react';
import '../components/titulnik.scss';
import stankinLogo from '../img/stankin-logo.svg';

export default function Titulnik(props) {
    
    const declinationWordHandler = (word) => {
        const str = word.toLowerCase().trim();
        if (/лаб/.test(str)) {
            return 'Отчет по лабораторной работе'
        } else if (/кур/.test(str)) {
            return 'Отчет по курсовой работе'
        } else if (/док/.test(str)) {
            return 'Доклад'
        } else if (/реф/.test(str)) {
            return 'Реферат'    
        } else if (str.includes('практическа')) {
            return 'Отчет по практической работе'
        } else if (str.includes('практическо')) {
            return 'Отчет по практическому заданию'
        } 
    }

    return (
        <div id='titulnik'>
            <header>
                <img src={stankinLogo} alt="" />
                <p id='par'>МИНОБРНАУКИ РОССИИ</p>
                <p>федеральное государственное бюджетное образовательное учреждение<br/>
                    высшего образования
                </p>
                <p>«Московский государственный технологический университет<br/>«СТАНКИН»</p>
                <p>(ФГБОУ ВО «МГТУ «СТАНКИН»)</p>
            </header>
            <main>
                <p>Институт {props.institute}</p>
                <p>Кафедра {props.kafedra}</p>
                <p id='study-program'>Образовательная программа {props.programNumber}</p>
                <p>"{props.specialty}"</p>
                <p id='discipline'>Дисциплина "{props.predmet}"</p>
                <p id='type-work'>{declinationWordHandler(props.workType)}</p>
                <div id='student'>
                    <p>Выполнил: <br/> студент гр. {props.group}</p>
                    <p className='date'>(дата)</p>
                    <p className='signature'>(подпись)</p>
                    <p>{props.name}</p>
                </div>
                <div id='prepod'>
                    <p>Принял: <br/>{props.prepodJob}</p>
                    <p className='date'>(дата)</p>
                    <p className='signature'>(подпись)</p>
                    <p>{props.name2}</p>
                </div>
            </main>
            <footer>
                <p>Москва {props.year}</p>
            </footer>
        </div>
    )
}
