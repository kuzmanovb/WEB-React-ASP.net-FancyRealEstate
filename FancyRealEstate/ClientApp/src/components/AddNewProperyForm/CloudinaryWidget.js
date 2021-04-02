import React, { Component } from 'react'
import { Col, Row, Button } from 'reactstrap';

export class CloudinaryWidget extends Component {
    constructor(props) {
        super(props)

        this.state = {

            imageId: [],
            imageUrl: []

        };
    }

    sendData = () => {
        this.props.imagesData(this.state.imageId, this.state.imageUrl)
    }

    showWidget = () => {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: `kuzmanovb`,
            uploadPreset: `FancyRealEstate`
        },
            (error, result) => {
                if (!error && result && result.event === "success") {

                    this.setState(state => ({
                        imageId: [...state.imageId, result.info.public_id],
                        imageUrl: [...state.imageUrl, result.info.secure_url]
                    }), () => {this.sendData()})
                }
            });
        widget.open()
    }

    render() {
        return (
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <Button color="primary" size="lg" onClick={this.showWidget}>Add Images</Button>
                </Col>
            </Row>
        );
    }
}