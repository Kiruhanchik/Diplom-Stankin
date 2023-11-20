import React from 'react'
import './header.scss';

export default function Header(props) {
  return (
    <div className='header'>{props.title}</div>
  )
}
