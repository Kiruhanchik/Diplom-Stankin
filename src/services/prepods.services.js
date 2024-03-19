import data from '../data/prepods.json'

const prepods = ({setActive, setPrepod}) => {

    return data.map((prepod) => {

        let href = 'mailto:' + prepod.mail;

        return (
            <div key={prepod.id} id='prepod'>
                <img src={prepod.photo} alt={prepod.name} />
                <div id='bio'>
                    <p className='prepod-name'>{prepod.name}</p>
                    <a className='prepod-mail' href={href}>{prepod.mail}</a>
                    <button onClick={() => {setActive(true); setPrepod(prepod); console.log(prepod)}}>Подробнее</button>
                </div>
            </div>
        )
    })
}

export default prepods