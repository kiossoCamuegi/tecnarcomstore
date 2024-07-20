import React from 'react'
import { SearchOutline, HeartOutline } from 'react-ionicons'
import { MdBalance } from "react-icons/md";
import { TbBasketMinus } from "react-icons/tb";
import { CgMenuRightAlt } from "react-icons/cg";
import Logo from '../Components/Logo';
import ShoppingCartCanvas from '../Components/MenusAndDropdowns/ShoppingCartCanvas';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import ImageLazyLoading from '../Components/ImageLazyLoading';
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { RiSearchLine } from "react-icons/ri";
import { Offcanvas } from "react-bootstrap";
import { MdOutlineClose } from "react-icons/md";
import axios from "axios"
import ServerUrl from '../../Pages/ServerUrl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LuLanguages } from "react-icons/lu";


function Navbar({ Active }) {
  const [IsFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showMenu, setShowMenu] = useState(false);
  const [LoadedCategories, setLoadedCategories] = useState([]);
  const [SearchCategorie, SetSearchCategorie] = useState(null);
  const [SearchKeyWord, SetSearchKeyWord] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const KeySearch = searchParams.get('key');
  const CatSearch = searchParams.get('cat');
  const [LoadedProducts, setLoadedProducts] = useState([]);


  async function loadData() {

    try {
      if (localStorage.getItem('products') === undefined || localStorage.getItem('products') === null) {
          const [products] = await Promise.all([
              axios.get(ServerUrl() + "htmarketgetallproducts")
          ]);
          let Data = [];
          products.data.map((item) => {
            Data.push({
              id: item.content._id,
              name: item.content.product_name,
              product_price: item.content.product_price,
              product_oldprice: item.content.product_oldprice,
              product_description: item.content.product_description,
              product_categorie: item.content.product_categorie,
              product_subcategorie: item.content.product_subcategorie,
              product_visitors: item.content.product_visitors,
              images: item.images
            });
          });
          setLoadedProducts(Data);  

      } else { 
        let Data = [];
        JSON.parse(localStorage.getItem('products')).map((item) => {
          Data.push({
            id: item.content._id,
            name: item.content.product_name,
            product_price: item.content.product_price,
            product_oldprice: item.content.product_oldprice,
            product_description: item.content.product_description,
            product_categorie: item.content.product_categorie,
            product_subcategorie: item.content.product_subcategorie,
            product_visitors: item.content.product_visitors,
            images: item.images
          });
        });
        setLoadedProducts(Data);   
      } 
   } catch (error) {
       console.log(error)
   }  


  }

  const checkWindowHeight = () => {
    document.addEventListener("scroll", (e) => {
      setIsFixed(window.scrollY > 50 ? true : false);
    });
  }


  const handleOnSearch = (string, result) => {
    SetSearchKeyWord(string)
    console.clear()
    console.log(result)
  }

  const handleSearchData = () => {
    navigate("/products?key=" + SearchKeyWord + "&cat=" + SearchCategorie);
  }

  const handleSearchData2 = (e) => {
    navigate("/products?brand=" + e);
  }


  const handleSearchData1 = (brand) => {
    navigate("/products?brand=" + brand);
  }


  const handleOnHover = (result) => {
    console.clear()
    console.log(result)
  }



  const handleOnSelect = (item) => {
    navigate("/product_details?item=" + item.id);
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <div className="search-item">
        <div className="image">
          <ImageLazyLoading source={item.images.length > 0 ? item.images[0].file_name : "https://img.freepik.com/premium-vector/modern-flat-icon-landscape_203633-11062.jpg"} />
        </div>
        <div className="block">
          <h5 className="name">{item.name}</h5>
          <div className="d-flex"> <p>{item.category}</p><div className="line"></div><div className="price">{item.product_price}</div></div>
        </div>
      </div>
    )
  }


  async function loadCategories() {
    try {
      const response = await axios.get(ServerUrl() + "htmarketgetallcategories");
      let result = []
      for (let i = 0; i < response.data.length; i++) {
        result.push({ name: response.data[i].info.categorie_title, id: response.data[i].info._id })
      }
      setLoadedCategories(result); 
    } catch (error) {
      console.log(ServerUrl() + "htmarketgetallcategories")
      console.log(error)
    }
  }



  useEffect(() => {
    checkWindowHeight();
    loadCategories();
    loadData();
  }, []);

  return (
    <div className='wo-navbar'>
      <div className="header">
        <div className="top bg-main">
          <div><p >Aproveite o melhor da industria com os melhores  !</p></div>
          <div className="d-flex">
            <div className="lang">
              <li className="active">
                <ul className='d-none'>
                  <li className="flex"><img src="../images/flags/us.svg" alt="" />English</li>
                  <li className="flex"><img src="../images/flags/fr.svg" alt="" />France</li>
                  <li className="flex"><img src="../images/flags/pt.svg" alt="" />Portuguese</li>
                  <li className="flex"><img src="../images/flags/ru.svg" alt="" />Russian</li>
                </ul>
              </li>
            </div>
            <div className="br"></div>
            <ul className="d-flex"> 
              <LuLanguages size={20} />
              <li className='ml-2'><Link to="/blog">Blog</Link></li>
              <li><Link to="/services">Serviços</Link></li>
              <li className="ac"> <li><Link to="/signin">Login</Link></li> / <li>
                <Link to="/signup">Registrar</Link></li></li> 
            </ul>
          </div>
        </div>
        <nav>
          <div className={"wks-navbar-classic"}>
            <div className='flex-nav'>
              <Logo /> 
            <div className="links  ml-2 a1">
              <ul className="flex">
                <li className={Active === 1 ? "active" : ""}><Link to="/">Inicio</Link></li>
                <li className={Active === 2 ? "active" : ""} ><Link to="/products">Produtos</Link></li> 
                <li onClick={() => setShowMenu(showMenu === true ? false : true)} className={Active === 3 ? "active" : ""} ><Link to="/about">Sobre a empresa</Link></li>
                 <li className={Active === 6 ? "active" : ""} ><Link to="/contacts">Contatos</Link></li>
              </ul>
            </div>
            </div>
            
            <div className="flex-nav a2">
            <div className="search-box">
                <div className="form" action="/products" method="POST"> 
                  <input type="text" className="form-control d-none" name="search" placeholder="pesquisar..." />
                  <section className="form-autocomplete bg-dange">
                    <ReactSearchAutocomplete
                      items={LoadedProducts}
                      onSearch={handleOnSearch}
                      onHover={handleOnHover}
                      onSelect={handleOnSelect}
                      onFocus={handleOnFocus}
                      autoFocus
                      placeholder='Pesquisar...'
                      formatResult={formatResult}
                    /> 
                  </section>
                  <button type="submit" onClick={() => handleSearchData()} ><SearchOutline /></button>
                </div>
              </div>
              {1 + 1 === 2 ?
                <Link to="/useraccount" className="text-light">      </Link>
                :
                <Link to="/useraccount">
                  <img className='avatar-pic' src="https://img.freepik.com/fotos-gratis/cara-barbudo-bonito-posando-contra-a-parede-branca_273609-20597.jpg" alt="" />
                </Link>
              }
             <div className="ml-2">
               <ShoppingCartCanvas />
             </div>
            </div>
            <section className="responsive-menu">
              <div className="d-flex">
                <div className="search-icon" onClick={handleShow}><RiSearchLine /></div>
                <div className="toggle-menu" onClick={() => setShowMenu(showMenu === true ? false : true)}><TiThMenu /></div>
              </div>
              <menu className={showMenu === true ? "show" : ""}>
                <div className="links">
                  <ul className="flex">
                    <br />
                    <div className="toggle-menu" onClick={() => setShowMenu(showMenu === true ? false : true)}><MdOutlineClose /></div>
                    <br />
                    <li onClick={() => setShowMenu(showMenu === true ? false : true)} className={Active === 1 ? "active" : ""}><Link to="/">Inicio</Link></li>
                    <li onClick={() => setShowMenu(showMenu === true ? false : true)} className={Active === 2 ? "active" : ""} ><Link to="/products">Produtos</Link></li>
                    <li onClick={() => setShowMenu(showMenu === true ? false : true)} className={Active === 3 ? "active" : ""} ><Link to="/offers">Ofertas de produtos</Link></li>
                     <li onClick={() => setShowMenu(showMenu === true ? false : true)} className={Active === 5 ? "active" : ""} ><a target='_blank' href="https://hightech-airer.pt/services">Serviços</a></li>
                    <li onClick={() => setShowMenu(showMenu === true ? false : true)} className={Active === 6 ? "active" : ""} ><Link to="/contacts">Contatos</Link></li>
                  </ul>
                </div>
                <br />
                <div className="button-links col">
                <div className="search-box col">
                <div className="form" action="/products" method="POST"> 
                  <input type="text" className="form-control d-none" name="search" placeholder="pesquisar..." />
                  <section className="form-autocomplete bg-dange">
                    <ReactSearchAutocomplete
                      items={LoadedProducts}
                      onSearch={handleOnSearch}
                      onHover={handleOnHover}
                      onSelect={handleOnSelect}
                      onFocus={handleOnFocus}
                      autoFocus
                      placeholder='Pesquisar...'
                      formatResult={formatResult}
                    />
                  </section>
                  <button type="submit" onClick={() => handleSearchData()} ><SearchOutline /></button>
                </div>
              </div>
                  {1 + 1 === 2 ?
                    <Link to="/useraccount" className="btn bg-white text-dark">Minha conta cliente</Link>
                    :
                    <Link to="/useraccount">
                      <img className='avatar-pic' src="https://img.freepik.com/fotos-gratis/cara-barbudo-bonito-posando-contra-a-parede-branca_273609-20597.jpg" alt="" />
                    </Link>
                  } 
                    <ShoppingCartCanvas />
                </div>
              </menu>
            </section>
          </div> 
        </nav>
      
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="bold-title">Pesquisar produtos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form className='space-search' action="#">
            <aside>
              <select className="form-control" name="filter" id="categoryselector">
                <option value="">Categorias</option>
                <option value="1">Todas</option>
                <option value="2">Compressores</option>
                <option value="3">Tratamento de ar</option>
                <option value="4">Transporte</option>
                <option value="5">Acessórios</option>
                <option value="6">Armazenamento de ar</option>
              </select>
              <input type="text" className="form-control d-none" name="search" placeholder="pesquisar..." />
              <section className="form-autocomplete mt-2">
                <ReactSearchAutocomplete
                  items={LoadedProducts}
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  autoFocus
                  placeholder='Pesquisar...'
                  formatResult={formatResult}
                />
              </section>
            </aside>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
     <div className="hdh"></div>
    </div>
  )
}

export default Navbar