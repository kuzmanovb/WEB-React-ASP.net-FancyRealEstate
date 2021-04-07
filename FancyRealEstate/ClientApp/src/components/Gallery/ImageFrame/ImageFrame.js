/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import './ImageFrame.css'
import { ImageFromCloudinary } from '../../Cloudinary/ImageFromCloudinary'

export const ImageFrame = (props) => {

    return (

        <div className="col-md-6 col-lg-4 mb-4">
            <div className="property-entry h-100">

                <Link to={{ pathname: `/property-details/${props.data?.id}`, state: props }} className="property-thumbnail">
                    <div className="offer-type-wrap">
                        {props.data?.typeOfDeal === "Sale" && <span className="offer-type bg-danger active">Sale</span>}
                        {props.data?.typeOfDeal === "Rent" && <span className="offer-type bg-success">Rent</span>}
                    </div>
                    <ImageFromCloudinary publicId={props.data?.imageIds[0]} />
                </Link>

                <div className="p-4 property-body">
                    <Button outline color="success" className="property-title text-center">
                        <Link to={{pathname: `/property-details/${props.data?.id}`, state:props}}><b>View details</b></Link>
                    </Button>
                    <span className="property-location d-block mb-3"><h5><i>city</i>: &nbsp;{props.data?.city}<br /><i>destrict</i>:&nbsp; {props.data?.district}</h5></span>
                    <strong className="property-price text-primary mb-3 d-block text-success">price:&nbsp; {props.data?.price} &euro;</strong>
                    <ul className="property-specs-wrap mb-3 mb-lg-0">
                        <li>
                            <span className="property-specs">size</span>
                            <span className="property-specs-number">{props.data?.size} m<sup>2</sup></span>

                        </li>
                        <li>{props.data?.id}</li>
                        <li>
                            <span className="property-specs">type</span>
                            <span className="property-specs-number">{props.data?.propertyType}</span>

                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}