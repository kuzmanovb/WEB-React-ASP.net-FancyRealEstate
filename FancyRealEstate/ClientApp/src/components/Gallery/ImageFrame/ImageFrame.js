/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import './ImageFrame.css'
import { ImageFromCloudinary } from '../../Cloudinary/ImageFromCloudinary'

export const ImageFrame = (props) => {
    return (

        <div className="col-md-6 col-lg-4 mb-4">
            <div className="property-entry h-100">
                
                <Link to="/property-details" className="property-thumbnail">
                    <div className="offer-type-wrap">
                        <span className="offer-type bg-danger active">Sale</span>
                        <span className="offer-type bg-success">Rent</span>
                    </div>
                    <ImageFromCloudinary publicId="FancyRealEstate-FirstReactApp/bh94v7uutzzcnprpx9xl" />
                </Link>

                <div className="p-4 property-body">
                    <h2 className="property-title"><Link to="/property-details">625 S. Berendo St</Link></h2>
                    <span className="property-location d-block mb-3"><span className="property-icon icon-room"></span> 625 S. Berendo St Unit 607 Los Angeles, CA 90005</span>
                    <strong className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                    <ul className="property-specs-wrap mb-3 mb-lg-0">
                        <li>
                            <span className="property-specs">Beds</span>
                            <span className="property-specs-number">2 <sup>+</sup></span>

                        </li>
                        <li>
                            <span className="property-specs">Baths</span>
                            <span className="property-specs-number">2</span>

                        </li>
                        <li>
                            <span className="property-specs">SQ FT</span>
                            <span className="property-specs-number">7,000</span>

                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}