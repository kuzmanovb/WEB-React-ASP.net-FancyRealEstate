/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Carousel } from 'react-bootstrap';
import './PropertyDetailsInfo.css'
import { PropertyGallery } from '../PropertyGallery/PropertyGallery'

const images = [{
    id: 1,
    name: "Island",
    image: "img_1.jpg"
}, {
    id: 2,
    name: "Forest",
    image: "img_2.jpg"
}, {
    id: 3,
    name: "Whale",
    image: "img_3.jpg"
}, {
    id: 4,
    name: "Mountain",
    image: "img_4.jpg"
}, {
    id: 5,
    name: "Boat",
    image: "img_5.jpg"
}, {
    id: 6,
    name: "Flowers",
    image: "img_6.jpg"
}, {
    id: 7,
    name: "Fire",
    image: "img_7.jpg"
}, {
    id: 8,
    name: "Garden",
    image: "img_8.jpg"
}];

export const PropertyDetailsInfo = () => {
    return (
        <div >
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div>
                            <Carousel fade>
                                {images.map((i) => (
                                    <Carousel.Item interval={1000} key={i.id}>
                                        <img
                                            className="d-block w-100"
                                            src={i.image}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                        <div className="bg-white property-body border-bottom border-left border-right">
                            <div className="row mb-5">
                                <div className="col-md-6">
                                    <strong className="text-success h1 mb-3">$1,000,500</strong>
                                </div>
                                <div className="col-md-6">
                                    <ul className="property-specs-wrap mb-3 mb-lg-0  float-lg-right">
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
                            <div className="row mb-5">
                                <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                                    <span className="d-inline-block text-black mb-0 caption-text">Home Type</span>
                                    <strong className="d-block">Condo</strong>
                                </div>
                                <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                                    <span className="d-inline-block text-black mb-0 caption-text">Year Built</span>
                                    <strong className="d-block">2018</strong>
                                </div>
                                <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                                    <span className="d-inline-block text-black mb-0 caption-text">Price/Sqft</span>
                                    <strong className="d-block">$520</strong>
                                </div>
                            </div>
                            <h2 className="h4 text-black">More Info</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aperiam perferendis deleniti vitae asperiores accusamus tempora facilis sapiente, quas! Quos asperiores alias fugiat sunt tempora molestias quo deserunt similique sequi.</p>
                            <p>Nisi voluptatum error ipsum repudiandae, autem deleniti, velit dolorem enim quaerat rerum incidunt sed, qui ducimus! Tempora architecto non, eligendi vitae dolorem laudantium dolore blanditiis assumenda in eos hic unde.</p>
                            <p>Voluptatum debitis cupiditate vero tempora error fugit aspernatur sint veniam laboriosam eaque eum, et hic odio quibusdam molestias corporis dicta! Beatae id magni, laudantium nulla iure ea sunt aliquam. A.</p>

                                <PropertyGallery images={images} />
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div >
            </div >
        </div >
    )
}