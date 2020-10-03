import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
  <div className="container">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i className="fa fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav text-uppercase ml-auto">
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#services">Services</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<header className="masthead">
  <div className="container">
    <div className="intro-text">
      <div className="intro-lead-in">My Name is Justin Barsalou</div>
      <div className="intro-heading text-uppercase">Entry Level Web Development</div>
      {/* <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a> */}
    </div>
  </div>
</header>


<section className="page-section" id="services">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Services</h2>
        <h3 className="section-subheading text-muted">As an entry level web developer, I’m excited to start using my skills and provide assistance where it’s needed. Javascript and React have been my favorite tools to use, but I am always eager to learn more. I try to familiarize myself with common practices, and be able to adapt to things unfamiliar to me. I’ve created simple html pages, altered web applications, pulled information from REST API’S, and created my own basic web application with a login authentication. </h3>
        <h3 className="section-subheading text-muted border-gone">Languages: HTML, CSS, JavaScript, Python, C++</h3>
        <h3 className="section-subheading text-muted border-gone">Databases: MySQL</h3>
        <h3 className="section-subheading text-muted border-gone">Libraries: React</h3>
        <h3 className="section-subheading text-muted border-gone">Frameworks: Bootstrap</h3>
        <h3 className="section-subheading text-muted border-small">Other: Node.js, Heroku, Firebase, Google Cloud</h3>
      </div>
    </div>
    <div className="row text-center">
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fa fa-circle fa-stack-2x text-primary"></i>
          <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
        </span>
        <h4 className="service-heading">Web/Application Development</h4>
        <p className="text-muted">With the knowledge I’ve gained from coding bootcamp, I have learned useful tools to create and update web applications. </p>
      </div>
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fa fa-circle fa-stack-2x text-primary"></i>
          <i className="fa fa-handshake-o fa-stack-1x fa-inverse"></i>
        </span>
        <h4 className="service-heading">Client Experience</h4>
        <p className="text-muted">Having worked in customer service, making sure the customer is happy has been my top priority. I do my best to ensure that customers are satisfied, and leave feeling better than they did before.</p>
      </div>
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fa fa-circle fa-stack-2x text-primary"></i>
          <i className="fa fa-users fa-stack-1x fa-inverse"></i>
        </span>
        <h4 className="service-heading">Teamwork</h4>
        <p className="text-muted">I thrive best working with a team who have passion and drive towards the same goal. It’s important to rely on one another to improve and grow. </p>
      </div>
    </div>
  </div>
</section>


{/* <Portfolio portfolioLinks={portfolioLinks}></Portfolio> */}


<section className="page-section" id="about">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">About</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2013-2017</h4>
                <h4 className="subheading">High School</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">In high school I played for the varsity football team, ran track, and maintained good grades. I was introduced to coding with a class on java my senior year. My interest in programming grew because of this class, and my interest in video games. I graduated from Alamo Heights High School in San Antonio Texas.</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2017-2019</h4>
                <h4 className="subheading">Austin Community College</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">I started attending ACC with the intent of doing basics, and transferring to a bigger university. My intended major was Computer Science. I got to take a class on both Python and C++ during my two years. </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2019-Present</h4>
                <h4 className="subheading">H-E-B Employee</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">My position at H-E-B is providing customer service as a cashier or bagger, and being efficient when pushing carts outside. I assist customers in every way I can, and play one of the most important roles in their shopping experience. </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2019-2020</h4>
                <h4 className="subheading">Austin Coding Academy</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
              </div>
            </div>
          </li>
          {/* <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>Be Part
                <br/>Of Our
                <br/>Story!</h4>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  </div>
</section>



<section className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <a href="#something">
          <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
        </a>
      </div>
      <div className="col-md-3 col-sm-6">
        <a href="#something">
          <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
        </a>
      </div>
      <div className="col-md-3 col-sm-6">
        <a href="#something">
          <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
        </a>
      </div>
      <div className="col-md-3 col-sm-6">
        <a href="#something">
          <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
        </a>
      </div>
    </div>
  </div>
</section>


<section className="page-section" id="contact">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Contact Us</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
    </div>
    {/* <div className="row">
      <div className="col-lg-12">
        <form id="contactForm" name="sentMessage" novalidate="novalidate">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group">
                <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group">
                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-lg-12 text-center">
              <div id="success"></div>
              <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div> */}
  </div>
</section>


<footer className="footer">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-4">
        <span className="placeholder"> </span>
      </div>
      <div className="col-md-4">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="https://github.com/JustinBarsalou" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/justin-barsalou/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/resume.jpeg" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-file"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/JustinBarsalou" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-clone"></i>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</footer>
  </div>
  );
}


export default App;
