import React from 'react'; 
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TbBasketMinus } from "react-icons/tb";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ProductCartComponent from '../ProductComponents/ProductCartComponent';
import { Link } from 'react-router-dom';
import { IoInformationCircle } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoBasketOutline } from "react-icons/io5";


function ShoppingCartCanvas(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Data  = [
         
    ];

    const GetShoppingCartItems  = ()=>{
        try {
            
        } catch (error) {
            
        }
    }
  

  return (
    <>
      <div onClick={handleShow} >
         <li className="cartdrop">
            <Link to="#"><IoBasketOutline /></Link><div className="count">{Data.length > 99 ? "+99" : Data.length}</div>
        </li>
      </div>
      <Offcanvas show={show} onHide={handleClose}  placement={"end"} name={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="bold-title">Carrinho</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <div className="cart-canvas">
                <ul>
                    {Data.map((item, index)=>(
                         <ProductCartComponent data={item} key={index} />
                    ))}
                </ul>
                <div className="shop-details">
                    <Form>
                        <Form.Control placeholder='Código promocional...' />
                        <button className="btn">Aplicar</button>
                    </Form>
                    <small>30% de desconto</small>
                    <div className="math-area">
                         <div className="space">
                             <div><h4>Subtotal</h4></div>
                             <div><h4>€564.20</h4></div>
                         </div>
                         <div className="space">
                             <div><h5>Disconto</h5></div>
                             <div><h5>(20%) -€1129.20</h5></div>
                         </div>
                         <div className="space">
                             <div><h5>Taxa <IoInformationCircle /></h5></div>
                             <div><h5>+ €225.86</h5></div>
                         </div>
                    </div>
                    <div className="mt-2 mb-2">
                       <div className="space">
                             <div><h4>Total</h4></div>
                             <div><h4 className='text-success'>€564.20</h4></div>
                         </div>
                    </div>
                     <Link to="#"><button className="btn col bg-black text-light">Confirmar pagamento</button></Link>
                     <Link to="#"><button className="btn col mt-2">Continuar a comprar</button></Link>
                </div>
           </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default ShoppingCartCanvas