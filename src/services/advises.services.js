import data from '../data/advises.json'

const advises = () => {
    return data.map((advise) => {
      return (
          <div key={advise.id} id='advise'>
              <li>{advise.text} <a href={advise.link} target="_blank">{advise.link_name}</a></li>
          </div>
      )
    })
}

export default advises