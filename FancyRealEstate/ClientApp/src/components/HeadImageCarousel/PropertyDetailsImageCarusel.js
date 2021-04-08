import React, { useState, useEffect } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselCaption } from 'reactstrap';
import './HeadImageCarousel.css'
import { cloudinaryUrl } from '../../services/cloudinaryUrl'


export const PropertyDetailsImageCarusel = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
      console.log(props)
    }, [])

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props?.image?.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props?.image?.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const text = () => {
    return(
    <div className="text-head-image pad">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-12">
                    {props.data.typeOfDeal === "Sale" && <span className="d-inline-block bg-danger text-white px-3 mb-3 property-offer-type rounded">For Sale</span>}
                    {props.data.typeOfDeal === "Rent" && <span className="d-inline-block bg-success text-white px-3 mb-3 property-offer-type rounded">For Rent</span>}
                    <h1 className="mb-2">{props.data.city} {props.data.district}</h1>
                    <p className="mb-5"><strong className="h2 text-light font-weight-bold">{props.data.price} &euro;</strong></p>
                </div>
            </div>
        </div>
    )}



    const slides = props?.image?.map((item) => {
        return (

            <CarouselItem
                key={item}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img
                    className="d-block w-100 image-size"
                    src={cloudinaryUrl() + item}
                    alt="Real Estate Property"
                />

                <CarouselCaption captionText={""} captionHeader={text()} />
            </CarouselItem>
        );
    });

    return (
        <div>
            {props?.image !== undefined &&
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            }

        </div>
    );
}
