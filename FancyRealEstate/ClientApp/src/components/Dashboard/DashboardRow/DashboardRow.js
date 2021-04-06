import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Media } from 'reactstrap';
import './DashboardRow.css'
import { cloudinaryUrl } from '../../../services/cloudinaryUrl'
import * as propertyService from '../../../services/propertyService'


export const DashboardRow = (props) => {

  const editAd = () => {
    props.history.push({
      pathname: "/add-property",
      props: props.data,
      userId: props.userId,
      token: props.token,
    });
  }

  const deleteAd = () => {
    propertyService.deletedProperty(props.data?.id, props.token);
    deleteHandle();
  };

  const deleteHandle = () => {

    props.checkDelete(props.data.id);

  }

  const imageUrl = cloudinaryUrl() + props.data?.imageIds[0]

  return (
    <>
      <div className="row">
        <div className="col-6">
          <Media className="mt-2">
            <Media object src={imageUrl} alt="Generic placeholder image" className="dashboard-image" />
            <Media body className="pl-3">
              <Media heading className="pt-2">
                <b>{props.data?.city}</b>
                <h5><i>jk.{props.data.district} bl.{props.data.buildingNumber}</i></h5>
              </Media>
              <p>{props.data?.price} lv.</p>
            </Media>
          </Media>
        </div>
        <div className="col-3 text-center mt-4">
          <h5>{props.data?.createdOn}</h5>
          <h5><i>{props.data?.daysAgo} Days ago</i></h5>

        </div>
        <div className="col-3 text-center">
          <div className="btn-group-vertical">
            <Link to={{ pathname: "add-property", state: { "data": props.data, "userId": props.userId, "token": props.token } }} >
              <button type="button" className="btn btn-success mt-3" onClick={editAd}>Edit</button>
            </Link>
            <button type="button" className="btn btn-danger mt-2" onClick={deleteAd}>Delete</button>

          </div>
        </div>
      </div>
      <div style={{ border: '2px solid Gainsboro' }} />
    </>
  );
}
