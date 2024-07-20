import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { useEffect } from 'react';


function Footer() {


   useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <footer>
            <div className="links">
                <div className="box bxb">
                    <Link to="/"><Logo type={1} /></Link>
                    <ul>
                    <li className="cplocation">Rua do Telhal aos Olivais, 23-25   Poço Bispo | 1950-257 Lisboa</li>
                    <li className="cpphone">+21 000 000</li>
                    <li><a to="#" className="cpemail">comercial@tecnarcom.pt</a></li> 
                    <li><a to="#" className="cpemail">geral@tecnarcom.pt</a></li>
                        <div className="flex social-links">
                            <li><Link to="#"><FaFacebook/></Link></li>
                            <li><Link to="#"><FaLinkedin/></Link></li> 
                            <li><Link to="#"><RiInstagramFill/></Link></li>
                            <li><Link to="#"><FaYoutube/></Link></li> 
                        </div>
                    </ul>
                </div>
                <div className="box">
                    <h5>Informações</h5>
                    <ul>
                        <li><Link to="#">Sobre nós</Link></li> 
                        <li><Link to="#">Contatos</Link></li>
                        <li><Link to="#">Produtos</Link></li>
                        <li><Link to="#">Dashboard</Link></li>
                    </ul>
                </div>
                <div className="box">
                    <h5>Produtos</h5>
                    <ul>
                        <li><Link to="#">Comressores</Link></li> 
                        <li><Link to="#">Materiais de manutenção</Link></li>
                        <li><Link to="#">Dispositivos eletronicos</Link></li>
                        <li><Link to="#">Kist e filtros de ar</Link></li>
                    </ul>
                </div>
                <div className="box">
                    <h5>Links especiais</h5>
                    <ul>
                        <li><Link to="">Carrinho</Link></li> 
                        <li><Link to="">Entrar</Link></li>  
                        <li><Link to="#">Termos e Condições</Link></li>
                        <li><Link to="#">Política de privacidade</Link></li>
                    </ul>
                </div> 
            </div> 
            <div className="copyright">
                <div><p>Copyright © 2024 TECNARCOM loja online. All Rights Reserved. </p></div>
            </div>
      </footer>
    </div>
  )
}

export default Footer