import React from 'react'
import Navbar from '../../PagesComponents/Main/Navbar';
import NewsLetter from '../../PagesComponents/Components/NewsLetter';
import Footer from '../../PagesComponents/Components/Footer';

function Offers() {
  document.title = "Ofertas de produtos";
  return (
    <div>
      <Navbar Active={3} />
       <div className="offers-page">
           <br />
             <div className="center"><h1 className="text-main">PAGINA EM CONSTRUÇÃO</h1> </div>
           <br />
       </div>
      <NewsLetter />
      <Footer/>
   </div>
  )
}

export default Offers