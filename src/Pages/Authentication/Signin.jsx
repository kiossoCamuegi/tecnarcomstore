import React from 'react'
import NewsLetter from '../../PagesComponents/Components/NewsLetter'
import Footer from '../../PagesComponents/Components/Footer'
import Navbar from '../../PagesComponents/Main/Navbar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios'; 
import { toast } from 'react-toastify';
import ServerUrl from '../ServerUrl'
import Logo from '../../PagesComponents/Components/Logo'

function Signin() {
    document.title = "Login"
    const [Email, setEmail] = React.useState(null);
    const [Password, setPassword] = React.useState(null);



    async function PostData(e) {
      e.preventDefault();
      try {
          if (Email !== null && Password !== null) {
              const INPUTS =  {email:Email, password: Password};     
              let response = await axios.post(ServerUrl() + "htmarketlogin", INPUTS); 
               alert("Logado")
          } else {
            toast.error('Preencha corretamente os campos !', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light", 
          });
          } 
      } catch (error) {
         alert("error")
         console.clear()
         console.log(error)
      }
  }
    

    return (
      <div> 
        <div className="account">
          <div className="signin-box"> 
            <div className="bg-black text-light col header-box">
               <Logo />
            </div>
              <div className="signin-container">
                  <div className="box active">
                      <h2>Login</h2>
                        <form action=""  onSubmit={PostData} id="signincustomer"> 
                        <div className="form-group">
                            <label for="formGroupExampleInput">Email</label>
                            <input type="email" className="form-control" name="namec" 
                             onChange={(e)=>setEmail(e.target.value)}  onPaste={(e)=>setEmail(e.target.value)}
                            min={8} minLength={8}  placeholder="EX: xxxx@domain.pt"   />
                          </div>
                          <div className="form-group">
                            <label for="formGroupExampleInput">Password</label>
                            <input type="password" className="form-control" name="password" required 
                               onChange={(e)=>setPassword(e.target.value)}  onPaste={(e)=>setPassword(e.target.value)}
                               placeholder="EX: xxxx@gmail.com" />
                          </div>
                            <div className="d-block justify-content-space-between">
                              <div className="col-lg-8">
                                  <div className="custom-control custom-checkbox ml-0">
                                      <input type="checkbox" className="custom-control-input ml-0" name="" id="c2" value=""/>
                                      <label className="custom-control-label" for="c2"> <div className="ml-2">Lembrar sempre</div> </label>
                                  </div>
                                </div>
                                <div className='mt-2 d-flex'>
                                    <a href="#">Ainda não tem uma conta ?</a> 
                                    <span className="ml-2"><Link className='text-secondary' to={"/signup"}>Registrar</Link> </span>
                                </div>
                            </div>
                            <button className="btn bg-main  col">Entrar</button> 
                            <div className="center mt-3 mb-2">
                            <div className='mt-2 d-flex'>
                                    <a href="#">esqueceu a sua senha ?</a> 
                                    <span className="ml-2"><Link className='text-secondary' to={"#"}>Recuperar</Link> </span>
                                </div>
                            </div> 
                        </form>
                  </div> 
              </div>
          </div>
      </div>   
      </div>
    )
}

export default Signin;