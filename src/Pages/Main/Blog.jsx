import React from 'react'
import Navbar from '../../PagesComponents/Main/Navbar'
import NewsLetter from '../../PagesComponents/Components/NewsLetter';
import Footer from '../../PagesComponents/Components/Footer';
import ImageLazyLoading from '../../PagesComponents/Components/ImageLazyLoading'
import { Link } from 'react-router-dom';

function Blog() {
    document.title = "Blog"
    return (
        <div>
            <Navbar />
            <div className="info-box-area">
                <h1>Blog</h1>
                <div className="mt-2 d-flex">
                  <Link to="/" className='text-dark'>Inicio</Link> / <Link className='text-main' to="/blog">Blog</Link>
                </div>
            </div>
            <section className="blog">
                <div className="row">
                    <div className="blog-box">
                        <ImageLazyLoading height={300} source={"https://i.ytimg.com/vi/goBZFtH4_hQ/maxresdefault.jpg"} />
                        <Link to="#">
                            <div className="overlay">
                                <p>TITULO DA NOTICIA</p>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
                            </div>
                        </Link>
                    </div>
                    <div className="blog-box">
                        <ImageLazyLoading height={300} source={"https://www.elgi.com/eu/wp-content/uploads/2024/04/Reciprocating-Air-Compressor-banner.jpg"} />
                        <Link to="#">
                            <div className="overlay">
                                <p>TITULO DA NOTICIA</p>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
                            </div>
                        </Link>
                    </div>
                    <div className="blog-box">
                        <ImageLazyLoading height={300} source={"https://media.istockphoto.com/id/1170341211/photo/air-compressor-pressure-pump-closeup-photo-with-selective-focus-on-an-emergency-shutdown-valve.jpg?s=612x612&w=0&k=20&c=Hra-B7IK0b1DM8Nc4A8UPqMYnLb-u7e32QB28duxDkU="} />
                        <Link to="#">
                            <div className="overlay">
                                <p>TITULO DA NOTICIA</p>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
                            </div>
                        </Link>
                    </div>
                    <div className="blog-box">
                        <ImageLazyLoading height={300} source={"https://www.earthfestival2012.org/wp-content/uploads/2016/08/AC06.jpg"} />
                        <Link to="#">
                            <div className="overlay">
                                <p>TITULO DA NOTICIA</p>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
                            </div>
                        </Link>
                    </div>
                    <div className="blog-box">
                        <ImageLazyLoading height={300} source={"https://media.istockphoto.com/id/1284205341/photo/dental-equipment-compressor.jpg?s=612x612&w=0&k=20&c=ItoWWKxrqmcsASavAMihBYQO3GehLDPQto4qStIU15A="} />
                        <Link to="#">
                            <div className="overlay">
                                <p>TITULO DA NOTICIA</p>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
                            </div>
                        </Link>
                    </div>
                    <div className="blog-box">
                        <ImageLazyLoading height={300} source={"https://c1.wallpaperflare.com/preview/912/311/664/compressor-tire-pump-tyre-pump-pressure.jpg"} />
                        <Link to="#">
                            <div className="overlay">
                                <p>TITULO DA NOTICIA</p>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="pagination">
                    <li className="backpag text-light fa fa-angle-left">{"<"}</li>
                    <li className="pag" pagcode="1">1</li>
                    <li className="pag" pagcode="2">2</li>
                    <li className="pag" pagcode="3">3</li>
                    <li className="pag" pagcode="4">5</li>
                    <li className="pag" pagcode="...">...</li>
                    <li className="fowpag text-light fa fa-angle-right">{">"}</li>
                </div>
            </section>

            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Blog
