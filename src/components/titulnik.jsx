import React from 'react';
import '../components/titulnik.scss';
import stankinLogo from '../img/stankin-logo.svg';
import prepodJob from '../services/prepodsJob.services'

export default function Titulnik(props) {

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
                <p>Кафедра комьютерных систем управления</p>
                <p id='study-program'>Образовательная программа {props.programNumber}</p>
                <p>"{props.specialty}"</p>
                <p id='discipline'>Дисциплина "{props.predmet}"</p>
                <p id='type-work'>{props.workType}</p>
                <div id='student'>
                    <p>Выполнил: <br/> студент гр. {props.group}</p>
                    <p className='date'>(дата)</p>
                    <p className='signature'>(подпись)</p>
                    <p>{props.name}</p>
                </div>
                <div id='prepod'>
                    <p>Принял: <br/>{prepodJob(props.name2)}</p>
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
