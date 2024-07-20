import React, { useState } from 'react'
import ProductCard from './ProductComponents/ProductCard';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import ImageLazyLoading from './ImageLazyLoading';

function SearchComponents() {
    const [ActiveCategorie, SetActiveCategorie] = useState(null)

    // [ ] 

    const CategoriesTypes = [
        {
            name: "Medidores",
            code: 12,
        },
        {
            name: "Equipamentos",
            code: 13,
        },
        {
            name: "Transporte",
            code: 14,
        },
        {
            name: "Acessorios",
            code: 15,
        },
        {
            name: "Suplementares",
            code: 16,
        },
        {
            name: "Filtros",
            code: 17,
        },
        {
            name: "Reservatorios",
            code: 18,
        },

    ];


    const Products1 = [
        {
            id: 83,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://content.sgs-engineering.com/upload/images/original/10000020-ABAC-Air%20Compressors-Direct%20Drive%20-%20Hero%201.jpg",
        },
        {
            id: 93,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://intermaquinas.online/wp-content/uploads/2021/05/Compresor-de-aire-Abac-Montecarlo-V-36-50.jpg",
        },

        {
            id: 1,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://cdnx.jumpseller.com/experiencia/image/19979201/Compressor_de_Ar_90_LT_2_0HP_B2690CM2V230_ABAC.jpeg?1652179173",
        },
        {
            id: 2,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://www.tradeearthmovers.com.au/wp-content/uploads/2023/12/Pic-Kaeser-for-web.jpg",
        },

        {
            id: 3,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://cfrouting.zoeysite.com/cdn-cgi/image/format=auto,fit=scale-down,quality=70/https://s3.amazonaws.com/zcom-media/sites/a0iE000000QBYNBIA5/media/catalog/product/m/8/m82.png",
        },
        {
            id: 4,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://cdn.shopk.it/usercontent/maquinasonline/media/images/40ebc00-amico50-2400.jpg",
        },
        {
            id: 5,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://www.maqser.pt/wp-content/uploads/2024/06/4004440_SSYS_SKU_4004440-1200x1200.jpg",
        },
        {
            id: 6,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://www.airservicesco.com/images/equipment_media/GardnerDenverL11AirStation.jpg",
        },
        {
            id: 7,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://jbouchard.com/wp-content/uploads/HPL7-12_HPL10-12_HPL15F-12_FV_GD-2_v2-jpg.webp",
        },
        {
            id: 178,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://www.gardnerdenver.com/content/published/api/v1.1/assets/CONT907577E6FDF54A17850846A11D4C63A4/Small/engine-driven-diesel-reciprocating-compressor.jpg?format=jpg&type=responsiveimage&channelToken=e9993619ab2548ba8fa9fc1166ee3776 ",
        },
        {
            id: 8,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://www.gardnerdenver.com/content/published/api/v1.1/assets/CONT71E2A4E8B8C14A06A40F013D1CC27140/native?cb=_cache_7754&channelToken=e9993619ab2548ba8fa9fc1166ee3776",
        },
        {
            id: 98,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://a.allegroimg.com/s290/118143/8b94d04c4974ae08ae38f8bb2720/30KW-FALOWNIK-KOMPRESOR-SRUBOWY-4300L-MIN-RENNER-RSF30-SPREZARKA-10-BAR",
        },
    ];





    return (
        <div>
            <div className="search-top">
                <div className="space">
                    <div className='flex' > <div className="counter bg-main text-light">234</div>
                        <h3 className='bold'>Produtos encomtrados</h3></div>
                    <div className="flex"> 
                        <select name="" className="form-control ml-2" id="">
                            <option value="0" selected>Disponivel em stock</option>
                        </select>
                        <select name="" className="form-control ml-2" id="">
                            <option value="0">Ordenar por data</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="search">
                <div className="filter-block">
                    
                <div className="filters bg-black  text-light">
                    <form action="" id="filtersearch">
                        <div className="space">
                            <h4>Aplicar filtros</h4>
                        </div>
                        <hr />
                        <h5 className="title">Categorias</h5>
                        <ul>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for="">Equipamentos</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for=""> Materias de carro</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for="">Linhas de trem</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for="">Ar comprimido </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for=""> Ligas</label>
                            </div>
                        </ul>
                        <hr />
                        <h5 className="title">Preços</h5>
                        <ul>
                            {[1, 345, 56, 7788, 8, 7, 8, 8].map((item, index) => (
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                    <label className="custom-control-label ml-2" for=""> € {Math.floor(item * 2)}.00</label>
                                </div>
                            ))}
                        </ul>
                        <hr />
                        <button className="btn bg-main text-light col-lg-12 mt-2">Pesquisar</button>
                    </form>
                </div>

                    <div className="adds mt-4">
                        <ImageLazyLoading height={400} source={"https://atlascopco.scene7.com/is/image/atlascopco/ABAC_Tech_leaflet_web"} />
                    </div>
                </div> 
                <div className="pdl"></div>
                <div className="products-container">
                    <br />
                    <div className="products-content">
                        {Products1.map((item, index) => (
                            <ProductCard data={item} key={index} />
                        ))}
                    </div>
                    <div className="product-loader">
                        <button className="load-more-products">Carregar mais</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchComponents