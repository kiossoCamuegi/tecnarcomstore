import React, { useEffect, useState } from 'react'
import Navbar from '../../PagesComponents/Main/Navbar'
import Footer from '../../PagesComponents/Components/Footer'
import { useLocation } from 'react-router-dom';
import NewsLetter from '../../PagesComponents/Components/NewsLetter';
import ServerUrl from '../ServerUrl';
import axios from 'axios';
import ImageLazyLoading from '../../PagesComponents/Components/ImageLazyLoading';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbBasketCheck } from "react-icons/tb";
import { RiShoppingCartLine } from "react-icons/ri";

function CompareProducts() {
    document.title = "Comparar produtos";
    const [ActiveImage, setActiveImage] = useState(0);
    const [ProductAmount, setProductAmount] = useState(1);
    const [LoadedProduct, setLoadedProduct] = useState({});
    const [CurrentImage, setLoadedCurrentImage] = useState({});
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
            console.clear()
            console.log("+++++++++++++++++++++++++++++++++++")
            console.log(SingleProduct.data.images);
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        loadData();
    }, []);




    return (
        <div>
            <Navbar Active={2} />
            <br />
            <div className="compare">
                <main className='center'>
                    <ImageLazyLoading source={CurrentImage.file_name} zoomScale={3} width={500} height={400} />
                    <div className="block">
                        <div className="category text-light category  bg-main">{LoadedProduct.categorie}</div>
                        <h2>{LoadedProduct.product_name}</h2>
                        <h4 >{LoadedProduct.product_price}</h4>
                        <div className='flex'><TbBasketCheck />Quantidade Disponivel em stock <strong>{LoadedProduct.product_stockAmount}</strong></div>
                        <div><span>Marca</span></div>
                        <div><strong>{LoadedProduct.product_Brand}</strong></div>
                    </div>
                </main>
            </div>
            <br />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default CompareProducts