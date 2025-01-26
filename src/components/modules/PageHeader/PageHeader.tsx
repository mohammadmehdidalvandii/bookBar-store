import React from 'react';
import './PageHeader.css';
import { Link } from 'react-router-dom';


const PageHeader:React.FC<string> = ({title})=> {
  return (
    <section className="pageHeader">
        <div className="container">
            <div className="pageHeader_wrapper">
                <h4 className="pageHeader_title">{title}</h4>
                <Link to='/' className='pageHeader_link'>خانه</Link>
            </div>
        </div>
    </section>
  )
}

export default PageHeader