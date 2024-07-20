import React from 'react'
import ImageLazyLoading from '../ImageLazyLoading'
import { SearchOutline, HeartOutline } from 'react-ionicons'
import { MdBalance } from "react-icons/md";
import { TbBasketMinus } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { ImEye } from "react-icons/im";

function ProductCard({ data }) {


  const AddProductToCart = async () => {
    try {

    } catch (error) {

    }
  }


  const AddproductToWishList = () => {
    try {

    } catch (error) {

    }
  }


  return (
    <div className="product-box">
      <div className="image">
        <ImageLazyLoading source={data.image} height={275} />
      </div>
      <Link to={`#`}>
         <div className="p-name text-dark">{data.name}</div>
      </Link>
      <div className="brand ">Marca: <span className="text-info">nome da empresa aqui...</span></div>
      <div className="description"><p>descrição do produto aqui...</p></div>
      <div className="flex">
        <div><h1>{data.newprice}</h1></div>
        <div><h5><s>{data.oldprice}</s></h5></div>
      </div>
      <div className="flex">
        <div><button className="btn bg-black text-light"><TbBasketMinus /></button> </div>
        <Link to={`#`} className='btn bg-main  ml-2' >
           <div className="fa fa-heart"><ImEye color='black' /></div>
           <div className="ml-1">Visualizar</div>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard