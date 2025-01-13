import React from 'react';
import './Title.css';
import { TitleType } from '../../../utils/type';

const Title=({title , text}:TitleType)=> {
  return (
    <div className="wrapperTitle">
    <h3 className="wrapperTitle_title">{title}</h3>
    <p className="wrapperTitle_text">{text}</p>
</div>
  )
}

export default Title