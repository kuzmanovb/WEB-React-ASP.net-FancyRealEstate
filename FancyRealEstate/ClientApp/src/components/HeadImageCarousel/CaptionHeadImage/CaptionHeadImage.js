import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CaptionHeadImage.css'

export const CaptionHeadImage = (props) => {

    console.log(props)

    return (
        <div className="text-head-image pad">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-12">
                    {props.data?.typeOfDeal === "Sale" && <span className="d-inline-block bg-danger text-white px-3 mb-3 property-offer-type rounded">For Sale</span>}
                    {props.data?.typeOfDeal === "Rent" && <span className="d-inline-block bg-success text-white px-3 mb-3 property-offer-type rounded">For Rent</span>}
                    <h1 className="mb-2">{props.data?.city} {props.data?.district}</h1>
                    <p className="mb-5"><strong className="h2 text-light font-weight-bold">{props.data?.price} &euro;</strong></p>
                    <p><Link to={{ pathname: `/property-details/${props.data?.id}`, state: props }} className="btn btn-outline-light py-3 px-5 rounded-0 btn-2">
                        See Details
                      </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
