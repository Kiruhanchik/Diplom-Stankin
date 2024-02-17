import HandleDownload from '../services/handleDownload.services.js';

const Save = (studentName) => {
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
        HandleDownload(studentName);
    }
}

export default Save;