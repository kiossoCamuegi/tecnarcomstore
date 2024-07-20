import React from 'react'
import Navbar from '../../PagesComponents/Main/Navbar'
import NewsLetter from '../../PagesComponents/Components/NewsLetter'
import Footer from '../../PagesComponents/Components/Footer'
import ImageLazyLoading from '../../PagesComponents/Components/ImageLazyLoading'

function About() {
    document.title = "sobre a empresa"
    return (
        <div>
            <Navbar Active={2} />
            <section class="about">
                <div class="row text-center">
                    <h1>TECNARCOM</h1>
                    <p> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, id labore amet ipsam, vel dicta, repellendus molestiae aperiam iste dolorum quae quibusdam. Rerum at eligendi, quisquam fugiat reiciendis facere harum.
                    </p>
                    <ImageLazyLoading source={"https://www.mundoarbh.com.br/imagens/informacoes/assistencia-tecnica-compressores-01.jpg"}  />
                </div>
                <div class="col">
                    <h1>Quem somos ?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deleniti quaerat velit ipsa officiis et eum impedit aspernatur deserunt cumque nihil neque, hic amet aliquid sapiente iusto architecto error. Cupiditate autem ipsam repellendus voluptates iusto quod deserunt sed voluptatem maiores odit quos rerum saepe eveniet doloribus exercitationem, dolores et quisquam!
                    </p>
                </div>
                <div class="col">
                    <h4>Our values</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis faucibus scelerisque fermentum dui faucibus in. Id diam vel quam elementum pulvinar etiam non. Integer eget aliquet nibh praesent tristique pulvinar etiam. In nibh mauris cursus mattis molestie a iaculis leo.</p>
                </div>
                <div class="col">
                    <h4>Our Mission</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis faucibus scelerisque fermentum dui faucibus in. Id diam vel quam elementum pulvinar etiam non. Integer eget aliquet nibh praesent tristique pulvinar etiam. In nibh mauris cursus mattis molestie a iaculis leo.</p>
                </div>
                <div class="map">
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default About
