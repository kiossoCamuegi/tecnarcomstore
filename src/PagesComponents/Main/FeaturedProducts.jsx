import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductComponents/ProductCard';
import ImageLazyLoading from '../Components/ImageLazyLoading';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ServerUrl from '../../Pages/ServerUrl';
import Loader from '../Loader';

function FeaturedProducts() {
    const LoadedProducts = [
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
            <aside className="featured-products">
                <h1 className="title">Tendencias na nossa loja</h1>
                <div className="products-container">
                    <div className="products-custom">
                        <div className="products-content">
                            {LoadedProducts.length <= 0 ?
                                <div className="center col">
                                    <div>
                                        <br /><br />
                                        <Loader />
                                    </div>
                                </div>
                                :
                                <>
                                    {LoadedProducts.slice(0, 10).map((item, index) => (
                                        <ProductCard data={item} key={index} />
                                    ))}
                                </>
                            }
                        </div> 
                    </div>
                </div>
                <div className="post-banner">
                    <div className="item">
                        <Link>
                            <ImageLazyLoading source={"https://atlascopco.scene7.com/is/image/atlascopco/ABAC_Air_compressor_workshop_motorbike_for+references?$landscape1600$"}  />
                        </Link>
                    </div> 
                    <div className="item">
                        <Link>
                            <ImageLazyLoading source={"https://www.renner-kompressoren.de/fileadmin/_processed_/8/9/csm_RENNER-Kompressoren_Portfolio_a0a36b4a09.jpg"}  />
                        </Link>
                    </div>
                </div>
                <br />
                <div className="products-content">
                    {LoadedProducts.length <= 0 ?
                        <div className="center col">
                            <div>
                                <br /><br />
                                <Loader />
                            </div>
                        </div>
                        :
                        <>
                            {LoadedProducts.slice(0, 10).map((item, index) => (
                                <ProductCard data={item} key={index} />
                            ))}
                        </>
                    }
                </div>
            </aside>
        </div>
    )
}

export default FeaturedProducts