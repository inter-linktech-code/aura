import "./Services.css";


import servicesHero from "../assets/services-hero.jpg";

import brandIdentity from "../assets/brand-identity.jpg";
import logoDesign from "../assets/logo-design.jpg";
import corporateBranding from "../assets/corporate-branding.jpg";
import printDesign from "../assets/print-design.jpg";
import packagingDesign from "../assets/packaging-design.jpg";
import socialMedia from "../assets/social-media.jpg";

import creativeProcess from "../assets/creative-process.jpg";



export default function Services() {


  const services = [

    {
      image: brandIdentity,
      title: "Brand Identity Design",
      text:
        "We create complete brand identities that communicate your values, personality, and position in the market."
    },


    {
      image: logoDesign,
      title: "Logo Design",
      text:
        "Memorable logos designed with purpose, creativity, and a deep understanding of your business."
    },


    {
      image: corporateBranding,
      title: "Corporate Branding",
      text:
        "Professional branding systems that create consistency across every customer touchpoint."
    },


    {
      image: printDesign,
      title: "Print Design",
      text:
        "Premium flyers, brochures, business cards, banners, and marketing materials designed to impress."
    },


    {
      image: packagingDesign,
      title: "Packaging Design",
      text:
        "Creative packaging solutions that help products stand out and create memorable experiences."
    },


    {
      image: socialMedia,
      title: "Social Media Design",
      text:
        "Strategic digital visuals that strengthen your online presence and engage your audience."
    }


  ];





  const process = [

    "Discovery & Understanding",

    "Brand Strategy",

    "Creative Direction",

    "Design Development",

    "Final Delivery"

  ];






  return (


    <main className="services-page">





      {/* HERO */}


      <section className="services-hero">


        <img
          src={servicesHero}
          alt="Aura Design Hub creative services"
        />


        <div className="services-overlay"></div>


        <div className="services-hero-content">


          <span>
            OUR SERVICES
          </span>


          <h1>

            Creative solutions
            <br />
            built to elevate
            <br />
            your brand.

          </h1>



          <p>

            From brand identity to professional print
            solutions, Aura Design Hub creates visual
            experiences that help businesses stand out.

          </p>


        </div>


      </section>









      {/* SERVICES */}



      <section className="services-list">


        <div className="section-title">


          <span>
            WHAT WE CREATE
          </span>


          <h2>

            Design solutions
            with purpose and impact.

          </h2>


        </div>





        <div className="service-grid">


          {
            services.map((service,index)=>(


              <article
                className="service-card"
                key={index}
              >


                <img
                  src={service.image}
                  alt={service.title}
                />



                <div className="service-content">


                  <h3>
                    {service.title}
                  </h3>



                  <p>
                    {service.text}
                  </p>


                </div>


              </article>


            ))
          }



        </div>


      </section>









      {/* PROCESS */}



      <section className="process-section">


        <div className="process-image">


          <img
            src={creativeProcess}
            alt="Creative process"
          />


        </div>




        <div className="process-content">


          <span>
            OUR PROCESS
          </span>



          <h2>

            A thoughtful approach
            behind every creation.

          </h2>



          <div className="process-list">


            {
              process.map((item,index)=>(

                <div
                  className="process-item"
                  key={index}
                >

                  <strong>
                    0{index + 1}
                  </strong>


                  <p>
                    {item}
                  </p>


                </div>

              ))
            }


          </div>



        </div>



      </section>









      {/* WHY */}



      <section className="approach">


        <span>
          WHY AURA
        </span>



        <h2>

          More than design.
          We build brands.

        </h2>



        <p>

          Great design is not only about appearance.
          It is about creating a visual language that
          builds trust, recognition, and connection
          with your audience.

        </p>



      </section>









      {/* CTA */}



      <section className="services-cta">


        <h2>

          Ready to create
          something extraordinary?

        </h2>



        <p>

          Let Aura Design Hub transform your ideas
          into a powerful visual identity.

        </p>



        <a href="/contact">

          Start Your Project

        </a>


      </section>






    </main>


  );


}