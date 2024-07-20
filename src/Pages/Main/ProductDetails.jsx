import React, { useEffect, useState } from 'react'
import Navbar from '../../PagesComponents/Main/Navbar'
import HomeProductsSlider from '../../PagesComponents/Main/HomeProductsSlider';
import NewsLetter from '../../PagesComponents/Components/NewsLetter';
import Footer from '../../PagesComponents/Components/Footer';
import Loader from '../../PagesComponents/Loader';
import Zoom from 'react-img-zoom'
import Slider from "react-slick";
import ImageLazyLoading from '../../PagesComponents/Components/ImageLazyLoading';
import Table from 'react-bootstrap/Table';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbBasketCheck } from "react-icons/tb";
import { RiShoppingCartLine } from "react-icons/ri";
import { useLocation } from 'react-router-dom';
import ServerUrl from '../ServerUrl';
import axios from 'axios';
import parse from 'html-react-parser';

function ProductDetails() {
  const [ActiveImage, setActiveImage] = useState(0);
  const [ProductAmount, setProductAmount] = useState(1);
  const [LoadedProduct, setLoadedProduct] = useState({});
  const [CurrentImage, setLoadedCurrentImage] = useState(null);
  const [LoadedImages, setLoadedImages] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('item'); 



  async function loadData() { 
    try {
      const SingleProduct = await axios.get(ServerUrl() + "htmarketgetsingleproduct/" + query);
      let DT = SingleProduct.data.content;
      DT.categorie = SingleProduct.data.categorie.categorie_title; 

      setLoadedProduct(DT);
      setLoadedImages(SingleProduct.data.images);
      if (SingleProduct.data.content.product_name !== undefined && SingleProduct.data.content.product_name !== null) document.title = "Htmarket - " + SingleProduct.data.content.product_name;
      setLoadedCurrentImage(SingleProduct.data.images.length > 0 ? SingleProduct.data.images[0] : {});
      
    } catch (error) {
      console.log(error)
    }
  }



  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <button className='btn'>#</button>,
    prevArrow: <button className='btn'>#</button>,
  };
 

  const ChangeProductAmount = (type) => {
    if (type === 0) {

    } else {

    };
  };



  function ChangeImage(e) {
    setLoadedCurrentImage(null);
    setTimeout(() => {
      setLoadedCurrentImage(e);
    }, 50);
  }



  useEffect(() => {
    loadData();
  }, []);



  //  { }


  return (
    <div>
      <Navbar Active={2} />
      <br />
      <section className="product-details-page">
        {(LoadedProduct._id !== undefined && LoadedProduct._id !== null) ?
          <aside className="info-container">
            <section className="block-image">
              <main>
                {CurrentImage !== null ?
                  <Zoom
                    img={CurrentImage.file_name}
                    zoomScale={3}
                    width={500}
                    height={400}
                  /> :
                  <></>
                }
              </main>
              <div className="images-slides">
                <div className="slider-container">
                  <Slider {...settings}>
                    {LoadedImages.map((item, index) => (
                      <article key={index} className={ActiveImage === index ? "active" : ""}
                        onClick={() => ChangeImage(item)} >
                        <div className="image">
                          <ImageLazyLoading source={item.file_name} />
                        </div>
                      </article>
                    ))}
                  </Slider>
                </div>
              </div>
            </section>
            <section className="block-info">
              <aside className='dets'>
                <div className="category text-light bg-main">{LoadedProduct.categorie}</div>
                <h1 className="product-title">{LoadedProduct.product_name}</h1>
                <h2 className="price">{LoadedProduct.product_price}</h2>
                <h5>Precisa de Credito ?</h5>
                <strong className="text-main">Nós podemos ajudar, trabalhamos com a liquid.io com objectivo de ajudar os nossos clientes na compra dos produtos existentes em nossa loja.</strong>
                <div className="rent">
                  <ImageLazyLoading source="https://www.salesforce.com/content/dam/web/en_ie/www/images/customers/liquido/liquido-logo.png" />
                </div>
                <h5>Descrição</h5> 
                <div>{ parse(LoadedProduct.product_description)}</div>
                <div className="block-info">
                  <h5>Detalhes</h5>
                  <ul>
                    <li className="flex"><HiOutlineLocationMarker />Disponivel em <strong>portugal</strong></li>
                    <li className='flex'><TbBasketCheck />Quantidade Disponivel em stock <strong>{LoadedProduct.product_stockAmount}</strong></li>
                  </ul>
                </div>
              </aside>
            </section>
            <aside className="order-box">
              <div className="title-area">
                <h4>Detalhes da compra</h4>
              </div>
              <div className="details">
                <div className="space">
                  <h6>Quantidade</h6>
                  <div className="custom-input-number">
                    <button className='btn' onClick={() => ChangeProductAmount(0)}>-</button>
                    <input type="number" placeholder='1' value={1} className="form-control" />
                    <button className='btn' onClick={() => ChangeProductAmount(1)}>+</button>
                  </div>
                </div>
                <div className="space">
                  <div><span>Marca</span></div>
                  <div><strong>{LoadedProduct.product_Brand}</strong></div>
                </div>
                <div className="space">
                  <div><span>Total</span></div>
                  <div><strong>{LoadedProduct.product_price}</strong></div>
                </div>
                <div className="form-area">
                  <textarea name="" id="" className="form-control"></textarea>
                </div>
              </div>
              <div className="total-area">
                <h6>Sub total : <strong>35.000$</strong></h6>
              </div>
              <div className="details">
                <div className="block">
                  <button className="btn bg-main text-light">Comprar Agora</button>
                  <button className="add-to-cart btn text-main"> <RiShoppingCartLine /> Adicionar no carrinho</button>
                </div>
              </div>
            </aside>
          </aside>
          :
          <div className="center">
            <Loader />
          </div>
        }
      </section>
      <br />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default ProductDetails