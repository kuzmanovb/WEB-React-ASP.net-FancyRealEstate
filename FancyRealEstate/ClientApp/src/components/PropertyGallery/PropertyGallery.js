/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';

export const PropertyGallery = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const imagesUrl = props.images.map((i) => (i.image));


    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div className="row">
            {props.images.map((i) => (
                <div key={i.id} className="col-sm-6 col-md-4 col-lg-3">
                    <img
                        src={i.image}
                        onClick={() => openImageViewer(i.id)}
                        style={{ margin: '2px' }}
                        className="img-fluid"
                        alt=""/>
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

