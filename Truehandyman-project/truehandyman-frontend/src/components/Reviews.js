import React from 'react';
import './Reviews.css';

class Reviews extends React.Component {
    render() {
        return (
            <div className="reviews-header">
                <h1>Reviews</h1>
            <div className="reviews-content">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/projects/review 1.PNG" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="/projects/review 2.PNG" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="/projects/review 3.PNG" class="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }


}

export default Reviews;