import React from 'react'
import './CaptionHeadImage.css'

export const CaptionHeadImage = (props) => {

    return (
        <div className="text-head-image pad">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-12">
                    <span className="d-inline-block bg-danger text-white px-3 mb-3 property-offer-type rounded">For Sale</span>
                    <h1 className="mb-2">625 S. Berendo St</h1>
                    <p className="mb-5"><strong className="h2 text-light font-weight-bold">$1,000,500</strong></p>
                    <p><a href="#" className="btn btn-outline-light py-3 px-5 rounded-0 btn-2">See Details</a></p>
                </div>
            </div>
        </div>
    );
}
