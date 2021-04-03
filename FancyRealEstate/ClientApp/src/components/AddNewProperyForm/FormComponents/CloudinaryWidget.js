/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Col, Row, Button } from 'reactstrap';


export const CloudinaryWidget = (props) => {

    const [imageId, setImageId] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);

    useEffect(() => {

        sendIdData();

    }, [imageId])

    useEffect(() => {

        sendUrlData();

    }, [imageUrl])


    const sendUrlData = () => {

        props.imagesUrlData(imageUrl)
    }
    const sendIdData = () => {

        props.imagesIdData(imageId)
    }

    const showWidget = () => {

        let widget = window.cloudinary.createUploadWidget({
            cloudName: `kuzmanovb`,
            uploadPreset: `FancyRealEstate`
        },
            (error, result) => {
                if (!error && result && result.event === "success") {

                    setImageId([...imageId, result.info.public_id]);
                    setImageUrl([...imageUrl, result.info.secure_url]);

                }
            });
        widget.open()
    }

    return (
        <Row>
            <Col md={3}></Col>
            <Col md={6}>
                <Button color="primary" size="lg" name="imageIds" onClick={showWidget} onBlur={props.passBlur}>Add Images</Button>
                {props.passTouched.imageIds && props.passErrors.imageIds ? <div className="text-danger">{props.passErrors.imageIds}</div>: null}

            </Col>
        </Row>
    );
}

