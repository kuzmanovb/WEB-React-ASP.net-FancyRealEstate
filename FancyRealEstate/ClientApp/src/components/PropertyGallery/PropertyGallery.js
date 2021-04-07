/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useCallback } from 'react';
import {ImageViewer} from 'react-simple-image-viewer';

export const PropertyGallery = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const imagesUrl = props.images.map((i) => (`https://res.cloudinary.com/kuzmanovb/image/upload/${i}`));


    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
        console.log(props[0])
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div className="row">
            <div className="col-12">
                <h2 className="h4 text-black mb-3">Gallery</h2>
            </div>
            {props.images.map((i) => (
                <div key={i} className="col-sm-6 col-md-4 col-lg-3">
                    <img
                        src={`https://res.cloudinary.com/kuzmanovb/image/upload/${i}`}
                        // onClick={() => openImageViewer(i)}
                        style={{ margin: '15px' }}
                        className="img-fluid"
                        alt="" />
                </div>
            ))}

            {isViewerOpen && (
                <ImageViewer
                    src={imagesUrl}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                />
            )}
        </div>
    );
}

