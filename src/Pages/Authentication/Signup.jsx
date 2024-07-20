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

function Signup() {
  document.title = "Cadastrar";
  const [Username, setUsername] = React.useState(null);
  const [Email, setEmail] = React.useState(null);
  const [Password, setPassword] = React.useState(null);


  async function PostData(e) {
    e.preventDefault();
    try {
        if (Username !== null && Email !== null && Password !== null) {
            const INPUTS =  { username: Username, email:Email, password: Password};     
            let response = await axios.post(ServerUrl() + "htmarketuserregister", INPUTS); 
            toast.success('Conta criada com sucesso !', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light", 
          });
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
                    <h2>Registrar</h2>
                      <form action="" id="signincustomer" onSubmit={PostData} >
                        <div className="form-group">
                            <label for="formGroupExampleInput">Nome completo</label>
                            <input type="text" className="form-control" name="namec" 
                             onChange={(e)=>setUsername(e.target.value)}  onPaste={(e)=>setUsername(e.target.value)}
                            min={8} minLength={8}  placeholder="EX: André Silva"   />
                          </div>
                          <div className="form-group">
                            <label for="formGroupExampleInput">Email</label>
                            <input type="email" className="form-control" name="emailc" required 
                               onChange={(e)=>setEmail(e.target.value)}  onPaste={(e)=>setEmail(e.target.value)}
                            placeholder="EX: xxx@gmail.com"/>
                          </div>
                          <div className="form-group">
                            <label for="formGroupExampleInput2">Password</label>
                            <input type="password" className="form-control" name="passwordc"
                               onChange={(e)=>setPassword(e.target.value)}  onPaste={(e)=>setPassword(e.target.value)}
                            min={8} minLength={8} required  placeholder="EX: 123senha#"/>
                          </div> 
                          <button className="btn bg-main">Cadastrar</button>  
                          <div className="d-block justify-content-space-between"> 
                              <div className='mt-2 d-flex'>
                                  <a href="#">Já tem uma conta  ?</a> 
                                  <span className="ml-2"><Link className='text-secondary' to={"/signin"}>login</Link> </span>
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

export default Signup