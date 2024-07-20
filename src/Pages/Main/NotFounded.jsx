import React from 'react'
import Navbar from '../../PagesComponents/Main/Navbar';
import NewsLetter from '../../PagesComponents/Components/NewsLetter';
import Footer from '../../PagesComponents/Components/Footer';


function NotFounded() {
    return (
        <div>
            <Navbar   />
            <div className="not-founded"> 
                   <h1>4<p className='text-main' >0</p>4</h1>
                   <span className='text-main'>Pagina não encomtrada </span>
                <br />
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default NotFounded