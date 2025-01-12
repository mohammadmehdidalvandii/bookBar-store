import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner:React.FC =()=>{
  return (
    <section className="banner">
        <div className="containers">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="banner_content">
                        <p className="banner_offer">فروش تا 
                            <span>20% درصد تخفیف</span>
                        </p>
                        <h1 className="banner_title">
                        با کتاب مورد علاقه بعدی خود آشنا شوید
                        </h1>
                        <p className="banner_text">
                        تخیل خود را با حماسه های فانتزی حماسی، عرفانی آزاد کنید ماجراها و داستان های قلمروهای ماورایی. با قهرمانان وارد ماموریت شوید.
                        </p>
                        <div className="banner_buttons">
                            <Link to='' className='btn_blue'>فروشگاه</Link>
                            <Link to='' className='btn_white'>به یک تور بروید</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/assets/images/banner.png" alt="" className="banner_img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner