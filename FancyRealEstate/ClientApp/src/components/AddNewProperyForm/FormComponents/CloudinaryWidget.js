/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Col, Row, Button } from 'reactstrap';


export const CloudinaryWidget = (props) => {

    const sendIdData = (cloudId) => {

        props.imagesIdData(cloudId)
    }

    const showWidget = () => {

        let widget = window.cloudinary.createUploadWidget({
            cloudName: `kuzmanovb`,
            uploadPreset: `FancyRealEstate`
        },
            (error, result) => {
                if (!error && result && result.event === "success") {

                    sendIdData(result.info.public_id)

                }
            });
        widget.open()
    }

    return (
        <Row>
            <Col md={3}></Col>
            <Col md={6}>
                <button className="btn btn btn-outline-dark btn-lg btn-block" onClick={showWidget} onBlur={props.passBlur}>Add Images</button>
            </Col>
        </Row>
    );
}

