import { useState } from "react";
import "./gallery.css";

import hero from "../assets/gallery/gallery-hero.jpg";


// AUTOMATICALLY LOAD ALL GALLERY IMAGES
const galleryImages = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);


// Convert images into array
const images = Object.values(galleryImages);



export default function Gallery() {


  const [selectedImage, setSelectedImage] = useState(null);



  return (

    <main className="gallery-page">


      {/* ================= HERO ================= */}


      <section className="gallery-hero">


        <img
          src={hero}
          alt="Aura Design Hub Gallery"
        />


        <div className="gallery-overlay"></div>



        <div className="gallery-hero-content">


          <span>
            Creative Showcase
          </span>


          <h1>
            Our Creative Gallery
          </h1>


          <p>

            A visual collection of our branding,
            graphic design, print solutions,
            packaging and creative work.

          </p>


        </div>


      </section>





      {/* ================= GALLERY ================= */}


      <section className="gallery-section">


        <div className="gallery-container">



          <div className="section-heading">


            <span>
              Our Work
            </span>


            <h2>
              Creativity In Every Detail
            </h2>


            <p>
              Explore some of our favourite designs
              created for different brands and ideas.
            </p>


          </div>





          <div className="gallery-grid">



            {images.map((image, index) => (


              <div

                key={index}

                className="gallery-card"

                onClick={() => setSelectedImage(image)}

              >


                <img

                  src={image}

                  alt={`Aura Design Work ${index + 1}`}

                />


                <div className="gallery-hover">


                  <span>
                    View Project
                  </span>


                </div>



              </div>


            ))}



          </div>



        </div>


      </section>

            {/* ================= LIGHTBOX ================= */}


      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >


          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>



          <img

            src={selectedImage}

            alt="Selected Design"

            onClick={(e) => e.stopPropagation()}

          />


        </div>

      )}






      {/* ================= CTA ================= */}


      <section className="gallery-cta">


        <div className="gallery-cta-content">


          <h2>
            Love What You See?
          </h2>


          <p>
            Let's create a visual identity that makes
            your brand impossible to ignore.
          </p>



          <a href="/contact">

            Start Your Project

          </a>


        </div>


      </section>




    </main>

  );

}