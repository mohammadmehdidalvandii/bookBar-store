import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaSearch, FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa';

const Navbar :React.FC=()=>{
    const [activeMenu , setActiveMenu] = useState(false);

    const handlerShowNavMenu = ()=>{
        setActiveMenu(!activeMenu);
    }

  return (
    <section className="navBar">
        <div className="containers">
            <div className="navBar_wrapper">
                <span className="navbar_res_icon" onClick={handlerShowNavMenu}>
                    {activeMenu ? (
                        <FaTimes/>
                    ):(
                        <FaBars/>
                    )}
                </span>
                <div className={activeMenu ? "navbar_res_active" :"navbar_res"}>
                <ul className="navbar_items_res">
                    <li className="navbar_item">
                        <Link to='/' className='navbar_item_link'>خانه</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to='/Store' className='navbar_item_link'>فروشگاه</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to='/Authors' className='navbar_item_link'>نویسندگان</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to='/Articles' className='navbar_item_link'>وبلاگ</Link>
                    </li>
                </ul>
                </div>
                <Link to='/' className='navbar_logo'>
                    <img src="/assets/images/logo.svg" alt="logo" className="navbar_logo_img" />
                </Link>
                <ul className="navbar_items">
                    <li className="navbar_item">
                        <Link to='/' className='navbar_item_link'>خانه</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to='/Store' className='navbar_item_link'>فروشگاه</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to='/Authors' className='navbar_item_link'>نویسندگان</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to='/Articles' className='navbar_item_link'>وبلاگ</Link>
                    </li>
                </ul>
                <div className="navbar_menu">
                        <button className="navbar_menu_btn"><FaSearch/></button>
                        <button className="navbar_menu_btn"><FaShoppingCart/></button>
                        <button className="navbar_menu_btn"><FaUser/></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar