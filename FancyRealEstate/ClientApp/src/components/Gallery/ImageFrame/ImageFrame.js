import React from 'react'
import './ImageFrame.css'

export const ImageFrame = (props) => {
    return (

        <div class="col-md-6 col-lg-4 mb-4">
            <div class="property-entry h-100">
                <a href="property-details.html" class="property-thumbnail">
                    <div class="offer-type-wrap">
                        <span class="offer-type bg-danger active">Sale</span>
                        <span class="offer-type bg-success">Rent</span>
                    </div>
                    <img src="hero_bg_1.jpg" alt="Image" class="img-fluid" />
                </a>
                <div class="p-4 property-body">
                    <h2 class="property-title"><a href="property-details.html">625 S. Berendo St</a></h2>
                    <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> 625 S. Berendo St Unit 607 Los Angeles, CA 90005</span>
                    <strong class="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                    <ul class="property-specs-wrap mb-3 mb-lg-0">
                        <li>
                            <span class="property-specs">Beds</span>
                            <span class="property-specs-number">2 <sup>+</sup></span>

                        </li>
                        <li>
                            <span class="property-specs">Baths</span>
                            <span class="property-specs-number">2</span>

                        </li>
                        <li>
                            <span class="property-specs">SQ FT</span>
                            <span class="property-specs-number">7,000</span>

                        </li>
                    </ul>

                </div>
            </div>
        </div>

    );
}