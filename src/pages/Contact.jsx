import "./Contact.css";


import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight
} from "react-icons/fa";

import contactHero from "../assets/contact.jpg";



export default function Contact(){


return(


<main className="contact-page">








{/* ================= HERO ================= */}


<section 
className="contact-hero"
style={{
backgroundImage:`url(${contactHero})`
}}
>



<div className="contact-overlay"></div>




<div className="contact-hero-content">


<span>
START A PROJECT
</span>



<h1>

Let's Create Something
<br/>

Extraordinary

</h1>




<p>

Have a vision, idea, or business challenge?
Aura Design Hub is ready to transform your
concept into a powerful visual experience.

</p>




</div>


</section>









{/* ================= CONTACT INFORMATION ================= */}



<section className="contact-info">



<div className="section-title">


<span>
GET IN TOUCH
</span>


<h2>
Let's Talk About Your Project
</h2>


</div>







<div className="contact-grid">





<div className="contact-card">


<FaPhone/>


<h3>
Call Us
</h3>


<p>
+256 708 624719
</p>


<p>
+256 700 698991
</p>


</div>








<div className="contact-card">


<FaWhatsapp/>


<h3>
WhatsApp
</h3>


<p>
Chat with our creative team
</p>



<a

href="https://wa.me/256708624719"

target="_blank"

rel="noopener noreferrer"

>

Start Conversation

</a>



</div>








<div className="contact-card">


<FaEnvelope/>


<h3>
Email
</h3>



<p>
info@auradesignhub.com
</p>


</div>





</div>



</section>









{/* ================= FORM ================= */}



<section className="contact-form-section">





<div className="form-wrapper">



<div className="form-intro">


<span>
PROJECT INQUIRY
</span>



<h2>

Tell Us About Your Vision

</h2>




<p>

Every great brand starts with a conversation.
Share your idea and let's create something
memorable together.

</p>



</div>








<form>



<div className="input-grid">



<input

type="text"

placeholder="Your Name"

/>




<input

type="text"

placeholder="Company Name"

/>





<input

type="email"

placeholder="Email Address"

/>





<input

type="tel"

placeholder="Phone Number"

/>



</div>








<select>


<option>
Select Service
</option>


<option>
Brand Identity Design
</option>


<option>
Logo Design
</option>


<option>
Print Design
</option>


<option>
Packaging Design
</option>


<option>
Social Media Design
</option>



</select>








<textarea

placeholder="Tell us about your project"

rows="6"

></textarea>








<button type="submit">


Send Project Request


<FaArrowRight/>


</button>




</form>





</div>



</section>









{/* ================= WHY AURA ================= */}



<section className="contact-values">





<div className="section-title">


<span>
WHY AURA
</span>


<h2>

More Than A Design Studio

</h2>


</div>








<div className="values-grid">





<div>

<h3>
Creative Strategy
</h3>


<p>

We design with purpose,
not just appearance.

</p>


</div>






<div>

<h3>
Premium Execution
</h3>


<p>

Every detail is crafted
with excellence.

</p>


</div>






<div>

<h3>
Business Focus
</h3>


<p>

Our designs help brands
communicate and grow.

</p>


</div>






<div>

<h3>
Long-Term Partnership
</h3>


<p>

We grow together with
the brands we serve.

</p>


</div>





</div>




</section>









{/* ================= LOCATION ================= */}



<section className="location-section">



<FaMapMarkerAlt/>


<h2>
Available For Creative Projects
</h2>



<p>

Based in Uganda, working with businesses
and organizations looking to build powerful
brands.

</p>




</section>









{/* ================= CTA ================= */}



<section className="contact-cta">



<h2>

Your Next Great Brand Starts Here

</h2>




<p>

Let's transform your ideas into a visual
identity people remember.

</p>




<a href="/contact">

Start Your Project

</a>



</section>







</main>


)


}