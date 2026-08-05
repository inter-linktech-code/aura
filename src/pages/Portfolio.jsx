import "./portfolio.css";


import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";
import portfolio4 from "../assets/portfolio-4.jpg";


import {
  FaArrowRight,
  FaPalette,
  FaPenNib,
  FaPrint,
  FaBoxOpen
} from "react-icons/fa";





export default function Portfolio(){



const projects = [


{
image:portfolio1,
title:"Brand Identity Design",
text:"Complete visual systems designed to create memorable brands."
},



{
image:portfolio2,
title:"Packaging Design",
text:"Creative packaging solutions that connect products with customers."
},



{
image:portfolio3,
title:"Print Solutions",
text:"Professional marketing materials designed with precision."
},



{
image:portfolio4,
title:"Digital Branding",
text:"Modern visual experiences built for digital platforms."
}


];





return(



<main className="portfolio-page">







{/* ================= HERO ================= */}



<section className="portfolio-hero">


<div className="portfolio-hero-overlay"></div>



<div className="portfolio-hero-content">


<span>
SELECTED WORK
</span>



<h1>

Ideas Transformed
<br/>

Into Visual Experiences

</h1>




<p>

Explore our collection of branding,
graphic design, and creative solutions
crafted to help businesses stand apart.

</p>



</div>



</section>









{/* ================= FEATURED PROJECTS ================= */}



<section className="featured-projects">


<div className="section-title">


<span>
FEATURED PROJECTS
</span>


<h2>
Creative Work That Speaks
</h2>


</div>





<div className="project-grid">



{

projects.map((project,index)=>(


<div 
className="project-card"
key={index}
>


<img
src={project.image}
alt={project.title}
/>



<div className="project-content">


<h3>
{project.title}
</h3>



<p>
{project.text}
</p>



<a href="/contact">

View Project

<FaArrowRight/>

</a>



</div>



</div>



))


}



</div>



</section>









{/* ================= CATEGORIES ================= */}



<section className="portfolio-services">



<div className="section-title">


<span>
WHAT WE CREATE
</span>


<h2>
Creative Disciplines
</h2>


</div>







<div className="category-grid">





<div className="category-card">


<FaPalette/>


<h3>
Brand Identity
</h3>


<p>

Complete brand systems,
guidelines, and visual direction.

</p>


</div>








<div className="category-card">


<FaPenNib/>


<h3>
Logo Design
</h3>


<p>

Distinctive logos created
to represent your story.

</p>


</div>








<div className="category-card">


<FaPrint/>


<h3>
Print Design
</h3>


<p>

Flyers, brochures, banners,
and marketing materials.

</p>


</div>








<div className="category-card">


<FaBoxOpen/>


<h3>
Packaging
</h3>


<p>

Packaging experiences
designed to attract customers.

</p>


</div>





</div>



</section>









{/* ================= GALLERY ================= */}



<section className="portfolio-gallery">



<div className="section-title">


<span>
CREATIVE GALLERY
</span>


<h2>
Behind Every Design Is A Story
</h2>


</div>






<div className="gallery-grid">



<img src={portfolio1} alt="Creative project"/>


<img src={portfolio2} alt="Creative project"/>


<img src={portfolio3} alt="Creative project"/>


<img src={portfolio4} alt="Creative project"/>


<img src={portfolio1} alt="Creative project"/>


<img src={portfolio2} alt="Creative project"/>



</div>



</section>









{/* ================= PROCESS ================= */}



<section className="creative-process">



<div className="section-title">


<span>
OUR PROCESS
</span>


<h2>
From Concept To Creation
</h2>


</div>





<div className="process-grid">



<div>

<span>
01
</span>

<h3>
Discover
</h3>

<p>

Understanding your vision,
goals, and audience.

</p>


</div>






<div>

<span>
02
</span>

<h3>
Design
</h3>

<p>

Creating concepts,
visual systems, and solutions.

</p>


</div>






<div>

<span>
03
</span>

<h3>
Deliver
</h3>

<p>

Producing polished designs
ready for the world.

</p>


</div>



</div>



</section>









{/* ================= CTA ================= */}



<section className="portfolio-cta">



<h2>

Have A Vision?
Let's Create Something Extraordinary.

</h2>




<p>

Partner with Aura Design Hub
and transform your ideas into
a powerful visual identity.

</p>




<a href="/contact">

Start Your Project

</a>



</section>





</main>



)



}