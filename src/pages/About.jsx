import "./about.css";


import aboutHero from "../assets/about-hero.jpg";

import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-6.jpg";
import gallery7 from "../assets/gallery-7.jpg";
import gallery8 from "../assets/gallery-8.jpg";
import gallery9 from "../assets/gallery-9.jpg";
import gallery10 from "../assets/gallery-10.jpg";

import founder from "../assets/founder.jpg";



export default function About(){


const gallery = [

gallery1,
gallery2,
gallery3,
gallery4,
gallery5,
gallery6,
gallery7,
gallery8,
gallery9,
gallery10

];



return (

<main className="about-page">





{/* HERO */}


<section className="about-hero">


<img 
src={aboutHero}
alt="Aura Design Hub"
/>


<div className="about-overlay"></div>



<div className="about-hero-content">


<span>
ABOUT AURA DESIGN HUB
</span>


<h1>

Creating visual
identities that
leave impressions.

</h1>



<p>

Aura Design Hub is a premium creative studio
specializing in graphic design, branding,
and print solutions. We help businesses
transform ideas into powerful visual experiences.

</p>



</div>


</section>









{/* STORY */}



<section className="story-section">


<div className="section-heading">


<span>
OUR STORY
</span>


<h2>

Every brand deserves
to be seen, remembered,
and admired.

</h2>


</div>





<p>

Founded on a passion for creativity and excellence,
Aura Design Hub was born from the belief that every
business deserves a unique identity that communicates
confidence, quality, and purpose.

</p>



<p>

What started as a vision to transform ideas into
meaningful visual experiences has evolved into a
trusted creative partner for businesses,
entrepreneurs, and organizations seeking quality,
elegance, and impact.

</p>



</section>









{/* MINI GALLERY */}



<section className="gallery-section">


<div className="section-heading">


<span>
OUR CREATIVE WORLD
</span>


<h2>

A glimpse into our
design journey.

</h2>


</div>





<div className="about-gallery">


{
gallery.map((image,index)=>(


<div
className="gallery-item"
key={index}
>


<img
src={image}
alt="Aura creative work"
/>


</div>


))
}



</div>


</section>









{/* MISSION VISION */}



<section className="info-section">



<div className="info-card">


<h3>
Our Mission
</h3>


<p>

To empower businesses through exceptional
design and branding solutions that communicate
their value, strengthen their identity,
and position them for lasting success.

</p>


</div>






<div className="info-card">


<h3>
Our Vision
</h3>


<p>

To become a recognized leader in creative
branding and design, setting the standard
for innovation, quality, and visual excellence.

</p>


</div>




</section>









{/* GOALS */}



<section className="goals-section">


<div className="section-heading">


<span>
OUR GOALS
</span>


<h2>

Building brands that inspire growth.

</h2>


</div>




<div className="cards-grid">


<div className="about-card">

<h3>
World-Class Branding
</h3>

<p>
Creating memorable brand experiences that help businesses stand out.
</p>

</div>



<div className="about-card">

<h3>
Strategic Creativity
</h3>

<p>
Combining beauty, strategy, and functionality in every project.
</p>

</div>



<div className="about-card">

<h3>
Lasting Partnerships
</h3>

<p>
Building relationships through exceptional service and results.
</p>

</div>


</div>


</section>









{/* VALUES */}



<section className="values-section">


<div className="section-heading">


<span>
OUR VALUES
</span>


<h2>

The principles behind
every creation.

</h2>


</div>





<div className="values-list">


<span>
Excellence
</span>


<span>
Creativity
</span>


<span>
Integrity
</span>


<span>
Passion
</span>


<span>
Commitment
</span>


</div>


</section>









{/* FOUNDER */}



<section className="founder-section">


<div className="founder-grid">



<div className="founder-image">


<img
src={founder}
alt="Marion Mukisa"
/>


</div>






<div className="founder-content">


<span>
MEET THE FOUNDER
</span>



<h2>
Marion Mukisa
</h2>




<p>

As the founder and creative force behind
Aura Design Hub, Marion believes powerful
design has the ability to transform businesses
and inspire audiences.

</p>



<p>

Her mission is to help brands express their
unique identity through creative, meaningful,
and visually compelling solutions.

</p>



</div>



</div>


</section>







{/* CTA */}



<section className="about-cta">


<h2>

Let's create something extraordinary.

</h2>


<a href="/contact">
Start Your Project
</a>


</section>





</main>

)


}