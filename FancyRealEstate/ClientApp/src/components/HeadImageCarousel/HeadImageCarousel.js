import React, { useState, useEffect } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { CaptionHeadImage } from './CaptionHeadImage/CaptionHeadImage.js';
import './HeadImageCarousel.css'
import { cloudinaryUrl } from '../../services/cloudinaryUrl'


export const HeadImageCarousel = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props?.data?.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props?.data?.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }



    const slides = props?.data?.map((item) => {
        return (

            <CarouselItem
                key={item.imageIds}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img
                    className="d-block w-100 image-size"
                    src={cloudinaryUrl() + item.imageIds[0]}
                    alt="Real Estate Property"
                />

                <CarouselCaption captionText={""} captionHeader={<CaptionHeadImage data={item}/>} />
            </CarouselItem>
        );
    });

    return (
        <div>
            {props?.data !== undefined &&
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








