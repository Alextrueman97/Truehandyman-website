import "./Projects.css";
import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div className="projects-header">
        <h1>Projects</h1>
      <div className = "projects-content">
      <div className ="carousel-container">
      < div id="carouselExampleCaptions" class="carousel slide" >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/projects/1.jpg" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Raised decking area</h5>
              </div>
          </div>
          <div class="carousel-item">
            <img src="/projects/2.jpg" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Wall panneling and painting</h5>
              </div>
          </div>
          <div class="carousel-item">
            <img src="/projects/3.jpg" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Decking and bespoke gazeebo to house hottub</h5>
              </div>
          </div>
          <div class="carousel-item">
            <img src="/projects/4.jpg" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Bespoke media wall with shelving and lighting</h5>
              </div>
          </div>
          <div class="carousel-item">
            <img src="/projects/5.jpg" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Cedar wood gazeebo for pool area</h5>
              </div>
          </div>
          <div class="carousel-item">
            <img src="/projects/6.jpg" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Another variation of the bespoke media wall</h5>
              </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div >
      </div>
      </div>
      </div>
    );
  }
}



export default Projects;