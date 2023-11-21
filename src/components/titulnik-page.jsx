import './titulnik-page.scss';
import Titulnik from './titulnik.jsx';
import React from 'react';
import { useState } from 'react';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';
import HomepageBtn from './homepage-btn';
import Header from './header.jsx';
import { useSpring, animated } from 'react-spring'

export default function TitulnikPage() {
    const [studentName, setStudentName] = useState('');
    const [prepodName, setPrepodName] = useState('');
    const [prepodJob, setPrepodJob] = useState('');
    const [group, setGroup] = useState('');
    const [predmet, setPredmet] = useState('');
    const [workType, setWorkType] = useState('');
    const [year, setYear] = useState('');
    const [institute, setInstitute] = useState('цифровых интеллектуальных систем');
    const [kafedra, setKafedra] = useState('комьютерных систем управления');
    const [specialty, setSpecialty] = useState('');
    const [programNumber, setProgramNumber] = useState('');

    document.querySelectorAll('input').forEach((el) => {
        el.addEventListener('change', () => {
            el.style.borderColor = 'black';
            el.style.backgroundColor = 'white';
        })
    })

    const animation = useSpring({
        from: { opacity: 0 }, // начальные стили
        to: { opacity: 1 }, // конечные стили
        config: { duration: 300 } // настройки анимации
    })

    

    const handleDownload = () => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        const element = document.getElementById('titulnik');
        html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Титульник-${studentName}pdf`);
        });
    }

    const save = () => {
        let correct = true;
        document.querySelectorAll('input').forEach((el) => {
            if (el.value === '') {
                el.style.borderColor = 'red';
                el.style.backgroundColor = '#F3E2E2';
                correct = false;
            } 
        })
        if (document.querySelector('select').value === '') {
            document.querySelector('select').style.borderColor = 'red';
            document.querySelector('select').style.backgroundColor = '#F3E2E2';
            correct = false;
        }
        if (correct) {
            handleDownload();
        }
    }

    return (
        <animated.div id='titulnik-page' style={animation}>
            <HomepageBtn/>
            <Header title='Генератор титульника'/>
            <main>
                <section id='params'>
                    <label htmlFor="student-name">Ваше ФИО (Иванов И.И.)</label>
                    <input id='student-name' type="text" placeholder='Введите текст' onChange={(el) => {
                        setStudentName(el.target.value);
                    }}/>
                    <label htmlFor="prepod-name">ФИО преподавателя</label>
                    <select name="" id="prepod-name" onChange={(el) => {
                            setPrepodName(el.target.value);
                            document.querySelector('select').style.borderColor = 'black';
                            document.querySelector('select').style.backgroundColor = '#fefefe';
                        }}>
                        <optgroup label = "Выберите преподавателя">
                            <option value=""></option>
                            <option value="Мартинов     Г.М.">Мартинов Г.М.</option>
                            <option value="Евстафиева С.В.">Евстафиева С.В.</option>
                            <option value="Червоннова Н.Ю.">Червоннова Н.Ю.</option>
                            <option value="Пушков Р.Л.">Пушков Р.Л.</option>
                            <option value="Саламатин Е.В.">Саламатин Е.В.</option>
                            <option value="Никишечкин А.П.">Никишечкин А.П.</option>
                            <option value="Никишечкин П.А.">Никишечкин П.А.</option>
                            <option value="Соколов С.В.">Соколов С.В.</option>
                            <option value="Ковалев И.А.">Ковалев И.А.</option>
                            <option value="Суханова Н.В.">Суханова Н.В.</option>
                            <option value="Рыбников С.В.">Рыбников С.В.</option>
                            <option value="Никич А.Н.">Никич А.Н.</option>
                            <option value="Фурман Е.И.">Фурман Е.И.</option>
                            <option value="Аль Хури Акрам">Аль Хури Акрам</option>
                            <option value="Коваленко А.В.">Коваленко А.В.</option>
                            <option value="Мартемьянова Н.С.">Мартемьянова Н.С.</option>
                            <option value="Нежметдинова Р.А.">Нежметдинова Р.А.</option>
                            <option value="Фокин Н.Н.">Фокин Н.Н.</option>
                            <option value="Нежметдинов Р.А.">Нежметдинов Р.А.</option>
                            <option value="Кротова Н.А.">Кротова Н.А.</option>
                            <option value="Седьмов А.Э.">Седьмов А.Э.</option>
                        </optgroup>
                    </select>
                    <label htmlFor="prepod-job">Должность преподавателя(к.т.н и т.д.)</label>
                    <input id='prepod-job' type="text" placeholder='Введите текст' onChange={(el) => {
                        setPrepodJob(el.target.value);
                    }}/>
                    <label htmlFor="student-group">Ваша группа (ААА-33-44)</label>
                    <input id='student-group' type="text" placeholder='Введите текст' onChange={(el) => {
                        setGroup(el.target.value);
                    }}/>
                    <label htmlFor="student-predmet">Ваша дисциплина (Программирование)</label>
                    <input id='student-predmet' type="text" placeholder='Введите текст' onChange={(el) => {
                        setPredmet(el.target.value);
                    }}/>
                    <label htmlFor="work-type">Тип работы (лабораторная работа и тд)</label>
                    <input id='work-type' type="text" placeholder='Введите текст' onChange={(el) => {
                        setWorkType(el.target.value);
                    }}/>
                    <label htmlFor="work-date">Год работы</label>
                    <input id='work-date' type="number" placeholder='Введите число' onChange={(el) => {
                        setYear(el.target.value);
                    }}/>
                    <label htmlFor="specialty">Ваша специальность</label>
                    <input id='specialty' type="text" placeholder='Введите текст' onChange={(el) => {
                        setSpecialty(el.target.value);
                    }}/>
                    <label htmlFor="program-number">Номер образовательной программы (15-03-04)</label>
                    <input id='program-number' type="text" placeholder='Введите текст' onChange={(el) => {
                        setProgramNumber(el.target.value);
                    }}/>
                    <button onClick={save} id='save-file'>Скачать</button>
                </section>
                <section id='result'>
                    <Titulnik 
                        name={studentName} 
                        name2={prepodName}
                        prepodJob={prepodJob}
                        group={group}
                        predmet={predmet}
                        workType={workType}
                        year={year}
                        institute={institute}
                        kafedra={kafedra}
                        specialty={specialty}
                        programNumber={programNumber}
                        id='titulnik'
                    />
                </section>
            </main>
        </animated.div>
    )
}
