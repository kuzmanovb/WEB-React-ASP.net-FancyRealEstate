import React, { useState, useEffect } from 'react'
import { Media } from 'reactstrap';
import './DashboardRow.css'
import { cloudinaryUrl } from '../../../services/cloudinaryUrl'
import * as propertyService from '../../../services/propertyService'


export const DashboardRow = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {

    setData(...Object.values(props))
    // console.log(data)

  }, [data])

  const editAd = () => {
    props.history.push({
      pathname: "/add-property",
      props: data
    });

    console.log(data)
  }

  const deleteAd = () => {
    propertyService.deletedProperty(data.id);
  };

  const imageUrl = cloudinaryUrl() + props.imageId

  return (
    <>
      <div className="row">
        <div className="col-6">
          <Media className="mt-2">
            <Media object src={imageUrl} alt="Generic placeholder image" className="dashboard-image" />
            <Media body className="pl-3">
              <Media heading className="pt-2">
                <b>{data.city}</b>
                <h5><i>jk.{data.district} bl.{data.buildingNumber}</i></h5>
              </Media>
              <p>{data.price} lv.</p>
            </Media>
          </Media>
        </div>
        <div className="col-3 text-center mt-4">
          <h5>{data.createdOn}</h5>
          <h5><i>{data.dateAgo} Days ago</i></h5>

        </div>
        <div className="col-3 text-center">
          <div className="btn-group-vertical">
            <button type="button" className="btn btn-success mt-3" onClick={editAd}>Edit</button>
            <button type="button" className="btn btn-danger mt-2" onClick={deleteAd}>Delete</button>

          </div>
        </div>
      </div>
      <div style={{ border: '2px solid Gainsboro' }} />
    </>
  );
}
