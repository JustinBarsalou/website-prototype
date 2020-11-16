import React from 'react';
import Portfolio from './components/portfolio'
import './App.css';
import chuckNorris from './assets/img/chuck.jpg'
import weather from './assets/img/weather.jpg'

function App() {
  const portfolioLinks = [
    {
      title: 'Weather App',
      caption: 'Barebones, login or sign up and view the weather.',
      img: weather,
      url: 'https://itssimplyweather.herokuapp.com/',
      repo: 'https://github.com/JustinBarsalou/weather-app-2.0/tree/e77c14f65ee21fd322a0e1a4449baf7421388fff/weather-app-2.0'
    },
    {
      title: 'Chuck It Up',
      caption: 'A simple, funny chuck norris joke generator.',
      img: chuckNorris,
      url: 'https://chuck-norris-hehe.herokuapp.com/',
      repo: 'https://github.com/JustinBarsalou/chuck-norris'
    }
  ]

  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
  <div className="container">
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav text-uppercase ml-auto">
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
        </li>
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
      <div className="intro-heading text-uppercase">Junior Web Development</div>
    </div>
  </div>
</header>


<section className="page-section" id="services">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Services</h2>
        <h3 className="section-subheading text-muted">As a junior developer, I’m excited to start using my skills and provide assistance where it’s needed. Javascript and React have been my favorite tools to use, but I am always eager to learn more. I try to familiarize myself with common practices, and be able to adapt to things unfamiliar to me. I’ve created simple html pages, altered web applications, pulled information from REST API’S, and created my own basic weather application with a login authentication. </h3>
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
        <p className="text-muted">Having worked in customer service, making sure the customer is happy has been my top priority. I do my best to ensure that customers leave feeling better than they did before interacting with me.</p>
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


<Portfolio portfolioLinks={portfolioLinks}></Portfolio>


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
            <div className="timeline-image mules">
              <img className="rounded-circle img-fluid" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2013-2017</h4>
                <h4 className="subheading">High School</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">In high school I played for the varsity football team, ran track, and maintained good grades. I was introduced to coding with a class on java my senior year, and my interest in coding grew from there. I graduated from Alamo Heights High School in San Antonio Texas.</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image ACC">
              <img className="rounded-circle img-fluid" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2017-2019</h4>
                <h4 className="subheading">Austin Community College</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">I started attending ACC with the intent of doing basics, and transferring to a bigger university. My intended major was Computer Science. I was able to take a class on both Python and C++ during my two years. </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image HEB">
              <img className="rounded-circle img-fluid" alt=""/>
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
            <div className="timeline-image ACA">
              <img className="rounded-circle img-fluid" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2019-2020</h4>
                <h4 className="subheading">Austin Coding Academy</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">I saw a great opportunity to really focus on coding at Austin Coding Academy. I got to make small projects in college, but here I was able to use my skills for more practical uses. I learned a variety of tools, all of which have allowed me to build projects and place me in some situations to get me ready for a real job. </p>
              </div>
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
        <h2 className="section-heading text-uppercase">Email Me:</h2>
        <h3 className="section-subheading text-muted">justinbarsalou@gmail.com</h3>
      </div>
    </div>

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
            <a href="https://www.linkedin.com/in/justin-barsalou/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACc-en8BVRGF8NhruBb10pRAdFKjKygQQI8,1601530225640)/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-file"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/justin-barsalou/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACc-en8BVRGF8NhruBb10pRAdFKjKygQQI8,1601745109737)/" target="_blank" rel="noopener noreferrer">
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
