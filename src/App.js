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
        {/* <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#team">Team</a>
        </li> */}
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
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
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
                <h4>2009-2011</h4>
                <h4 className="subheading">Our Humble Beginnings</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>March 2011</h4>
                <h4 className="subheading">An Agency is Born</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>December 2012</h4>
                <h4 className="subheading">Transition to Full Service</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>July 2014</h4>
                <h4 className="subheading">Phase Two Expansion</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>Be Part
                <br/>Of Our
                <br/>Story!</h4>
            </div>
          </li>
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
    <div className="row">
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
    </div>
  </div>
</section>


<footer className="footer">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-4">
        <span className="copyright">Copyright &copy; Your Website 2019</span>
      </div>
      <div className="col-md-4">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="list-inline quicklinks">
          <li className="list-inline-item">
            <a href="#something">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="#something">Terms of Use</a>
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
