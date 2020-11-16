import React from 'react' 


export default ({ portfolioLinks }) => {
    return (
        <section className="bg-light page-section" id="portfolio">
        <div className="container">

          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Portfolio</h2>
            </div>
          </div>

          <div className="row">
            {portfolioLinks.map(({ title, caption, img, url, repo}, index) => 
                    <div className="col-md-4 col-sm-6 portfolio-item">
                      <a className="portfolio-link" data-toggle="modal" href={url}>
                          <img className="img-fluid" src={img} alt='project'/>
                      </a>
                      <div className="portfolio-caption">
                        <h4>{ title }</h4>
                        <p className="text-muted">{ caption }</p>
                        <a href={repo}>Repo</a>
                      </div>
                    </div>
                )
            }
          </div>


        </div>
      </section>
    )
}