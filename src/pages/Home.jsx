import "./home.css";


import heroMain from "../assets/hero-main.jpg";

import founder from "../assets/founder.jpg";


import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";
import portfolio4 from "../assets/portfolio-4.jpg";


import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-6.jpg";


import {

FaPalette,
FaPenNib,
FaPrint,
FaBoxOpen,
FaWhatsapp,
FaStar

} from "react-icons/fa";





export default function Home(){



const gallery = [

gallery1,
gallery2,
gallery3,
gallery4,
gallery5,
gallery6,
gallery1,
gallery2,
gallery3

];




return(



<main className="home">







{/* ================= HERO ================= */}



<section className="home-hero">


<img
src={heroMain}
alt="Aura Design Hub creative studio"
/>


<div className="hero-overlay"></div>




<div className="hero-content">



<span>
PREMIUM CREATIVE STUDIO
</span>




<h1>

We Build Brands
<br/>

<span>
People Remember
</span>

</h1>




<p>

Aura Design Hub creates powerful brand identities,
creative visuals, and premium print solutions that
help businesses stand apart and connect emotionally.

</p>





<div className="hero-actions">


<a href="/contact">
Start Your Project
</a>



<a href="/portfolio">
Explore Work
</a>


</div>






<div className="hero-features">


<div>
<FaStar/>
Creative Excellence
</div>



<div>
<FaStar/>
Premium Quality
</div>



<div>
<FaStar/>
Strategic Design
</div>



</div>



</div>



</section>









{/* ================= STATS ================= */}



<section className="stats">


<div className="stats-grid">


<div>

<h2>
50+
</h2>

<p>
Brands Created
</p>

</div>




<div>

<h2>
100+
</h2>

<p>
Creative Projects
</p>

</div>





<div>

<h2>
5+
</h2>

<p>
Years Experience
</p>

</div>





<div>

<h2>
100%
</h2>

<p>
Client Commitment
</p>

</div>



</div>


</section>









{/* ================= ABOUT ================= */}



<section className="home-about">



<div className="about-image">


<img
src={portfolio1}
alt="Aura branding"
/>


</div>





<div className="about-content">


<span>
WHO WE ARE
</span>



<h2>

Creativity With Purpose.
Design With Impact.

</h2>




<p>

Aura Design Hub is a premium creative studio
specializing in branding, graphic design,
and print solutions.

We transform ideas into meaningful visual
identities that help businesses communicate
confidence and value.

</p>




<a href="/about">

Discover Aura

</a>



</div>



</section>









{/* ================= SERVICES ================= */}



<section className="home-services">



<div className="section-title">


<span>
OUR SERVICES
</span>


<h2>

Premium Creative Solutions

</h2>


</div>





<div className="service-grid">





<div className="service-box">

<FaPalette/>

<h3>
Brand Identity
</h3>

<p>

Complete branding systems that create
recognition and trust.

</p>

</div>





<div className="service-box">

<FaPenNib/>

<h3>
Logo Design
</h3>

<p>

Unique logos designed to communicate
your story.

</p>

</div>






<div className="service-box">

<FaPrint/>

<h3>
Print Solutions
</h3>

<p>

Professional marketing materials
crafted with quality.

</p>

</div>






<div className="service-box">

<FaBoxOpen/>

<h3>
Packaging Design
</h3>

<p>

Beautiful packaging experiences that
attract customers.

</p>

</div>



</div>


</section>









{/* ================= WHY AURA ================= */}



<section className="why-aura">



<div className="section-title">


<span>
WHY AURA
</span>



<h2>

More Than Design.
We Build Experiences.

</h2>


</div>





<div className="why-grid">


<div>

<h3>
Creative Excellence
</h3>

<p>

Original concepts created with
attention to detail.

</p>

</div>




<div>

<h3>
Premium Quality
</h3>

<p>

Professional designs that represent
your business.

</p>

</div>




<div>

<h3>
Strategic Thinking
</h3>

<p>

Design focused on communication
and growth.

</p>

</div>




<div>

<h3>
Client Partnership
</h3>

<p>

Working together to bring ideas
to life.

</p>

</div>



</div>


</section>









{/* ================= PORTFOLIO ================= */}



<section className="portfolio-preview">



<div className="section-title">


<span>
FEATURED WORK
</span>


<h2>

Selected Creative Projects

</h2>


</div>






<div className="portfolio-grid">



<img src={portfolio1} alt="Brand identity"/>


<img src={portfolio2} alt="Packaging design"/>


<img src={portfolio3} alt="Print design"/>


<img src={portfolio4} alt="Digital branding"/>



</div>


</section>









{/* ================= FOUNDER ================= */}



<section className="founder-home">



<div className="founder-image">


<img
src={founder}
alt="Marion Mukisa"
/>


</div>





<div className="founder-text">


<span>
FOUNDER
</span>


<h2>
Marion Mukisa
</h2>




<p>

The creative force behind Aura Design Hub.
Marion believes powerful design can transform
businesses and inspire audiences.

</p>




<p>

Her mission is helping brands communicate
their identity through meaningful visual
experiences.

</p>




<a href="/about">

Our Story

</a>



</div>



</section>









{/* ================= TESTIMONIAL ================= */}



<section className="quote-section">


<h2>

"Great design is not decoration.
It is communication."

</h2>



<p>
Aura Design Hub
</p>


</section>









{/* ================= CTA ================= */}



<section className="home-cta">


<h2>

Let's Create Something Extraordinary

</h2>




<p>

Ready to build a brand people remember?

</p>




<a href="/contact">

Start Your Project

</a>



</section>









{/* ================= AUTO GALLERY ================= */}



<section className="creative-slider">


<div className="section-title">


<span>
OUR CREATIVE WORLD
</span>


<h2>

Ideas Transformed Into Visual Experiences

</h2>


</div>






<div className="slider-window">


<div className="slider-track">


{

gallery.map((image,index)=>(


<img

key={index}

src={image}

alt="Aura creative project"

/>


))


}


</div>


</div>



</section>









{/* ================= WHATSAPP ================= */}



<a

href="https://wa.me/256708624719"

className="whatsapp"

target="_blank"

rel="noopener noreferrer"

>


<FaWhatsapp/>


</a>






</main>



)


}

