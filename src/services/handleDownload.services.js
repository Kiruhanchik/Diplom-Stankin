import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

const HandleDownload = (studentName) => {
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
    console.log(studentName)
}

export default HandleDownload;