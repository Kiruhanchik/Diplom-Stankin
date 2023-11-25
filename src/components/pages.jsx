import React from 'react'
import data from '../data/pages.json'
import '../components/pages.scss'

export default function Pages() {

    const pagesHandler = () => {
        return data.map((page) => {
            return (
                <div key={page.id} id='page' onClick={() => {window.open(`${page.link}`);}}>
                    <img src={page.img} alt={page.title} />
                    <p>{page.title}</p>
                </div>
            )
        })
    }

    return (
        <div id='pages'>{pagesHandler()}</div>
    )
}
