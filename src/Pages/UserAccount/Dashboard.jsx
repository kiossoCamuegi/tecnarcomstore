import React, { useState } from 'react'
import Navbar from '../../PagesComponents/Main/Navbar';
import NewsLetter from '../../PagesComponents/Components/NewsLetter';
import Footer from '../../PagesComponents/Components/Footer';
import Table from 'react-bootstrap/Table';
import ImageLazyLoading from '../../PagesComponents/Components/ImageLazyLoading';
import { Trash } from 'react-ionicons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Dashboard() {
    document.title = "Conta Cliente - "; 
    const [ActiveMenu, setActiveMenu] = useState(1);


    const Data = [
        { Image: "https://images.tcdn.com.br/img/img_prod/762235/compressor_de_ar_10pcm_100l_2cv_monofasico_vortex_300_pressure_449_1_20200814145050.png" },
        { Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAdk4wAag8dDe9c5i2bm0hVY6m1js15_Ijw&s" },
        { Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdtzsTYnoh3Fp6BvnuamF5ZuMblhdnxRoqA&s" },
        { Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVQg5MePqK5LAAKKb940oYriOzEIyRFjM6Q&s" },
        { Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PWzUa7V1o9Avi0883WpY49GfV4h6Jg4PXg&s" },
        { Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyAJs1JofTN1sR9KPnAUEjR_3F27Hbrmc9jA&s" },
    ];

    return (
        <div >
            <Navbar Active={null} />
            <div className="profile-account"> 
                <div className="box-info">
                    <div className="pic">
                        <ImageLazyLoading source="https://img.freepik.com/fotos-gratis/cara-barbudo-bonito-posando-contra-a-parede-branca_273609-20597.jpg" />
                    </div>
                    <h4 className="name">Pedro Mateus</h4>
                    <span>Gestor de contas da  comprag</span>
                </div>
                <div className="accounts-tabs col">
                    <div className="tabs-header">
                        <div><h1 className={ActiveMenu === 1 ? "title" : "txt"}  onClick={()=>setActiveMenu(1)}>Dados pessoais</h1> </div>
                         <div><h1 className={ActiveMenu === 3 ? "title" : "txt"}  onClick={()=>setActiveMenu(3)}>Meu Carrinho</h1></div>
                    </div>
                    <br /><br />
                    <section className={ActiveMenu === 1 ? "col" : "d-none"}> 
                        <Form className='col-lg-8' > 
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nome de usúario</Form.Label>
                                <Form.Control type="text" placeholder="Digite o seu nome" /> 
                            </Form.Group> 
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Cargo ou função que ocupa na sua empresa</Form.Label>
                                <Form.Control type="text" placeholder="Digite o seu nome" /> 
                            </Form.Group> 
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Foto de perfil</Form.Label>
                                <Form.Control type="file" placeholder="Digite o seu nome" /> 
                            </Form.Group> 
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Digite o seu email" /> 
                            </Form.Group> 
                            <h5 className='subtitle' >Mudar a password atual</h5>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Insira  a Password atual</Form.Label>
                                <Form.Control type="password" placeholder="Digite a sua senha atual" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Nova Password</Form.Label>
                                <Form.Control type="password" placeholder="Digite a nova password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Repetir nova Password</Form.Label>
                                <Form.Control type="password" placeholder="Digite novamente a nova password" />
                            </Form.Group> 
                            <button className="btn bg-main">Atualizar dados</button>
                       </Form>  
                    </section>
                    <section className={ActiveMenu === 2 ? "col" : "d-none"}>
                      <h2>2</h2>
                    </section>
                    <section className={ActiveMenu === 3 ? "cart-section col" : "d-none"}>
                        <strong className="text-main">12 produtos no carrinho</strong><br /><br />
                        <div className="flex-area">
                            <Table striped hover>
                                <tbody>
                                    {Data.map((item, index) => (
                                        <tr>
                                            <td>
                                                <div className="product-cart">
                                                    <div className="image">
                                                        <ImageLazyLoading source={item.Image} />
                                                    </div>
                                                    <div className="dets">
                                                        <h6>Compressor ELGi Série EN 15 (Velocidade Variável)...</h6>
                                                        <div className="text-main"><small>5 - em stock</small></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="center">
                                                    <input type="number" min={1} minLength={1} placeholder='0' className="form-control" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="center">
                                                    <button className="bg-main text-light btn"><Trash /> </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <div className="pd"></div>
                            <div className="finish-shop">
                                <div className="dets">
                                    <h3>Finalizar compra</h3>
                                </div>
                                <hr /> 
                                  <div className="dets">
                                  <p>
                                     Apos confirmar a compra dos produtos listados no carrinho,
                                     a nossa equipe de vendas entrara em contacto para dar continuidade ao procedimento.
                                  </p>
                                  </div>
                                  <hr />
                                    <div className="dets">
                                    <div className="space text-dark">
                                        <div><p>Total</p></div>
                                        <div><strong>$ 8.987.99</strong></div>
                                    </div>
                                </div>
                                <hr />
                                <div className="dets">
                                   <button className="col mt-4 btn text-light bg-main">Confirmar compra</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Dashboard