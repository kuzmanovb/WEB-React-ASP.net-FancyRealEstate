import React, { Component } from 'react'
import { Media } from 'reactstrap';
import './DashboardRow.css'


export class DashboardRow extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

      <>
        <div className="row">
          <div className="col-6">
            <Media className="mt-2">
              <Media object src="hero_bg_1.jpg" alt="Generic placeholder image" className="dashboard-image" />
              <Media body className="pl-3">
                <Media heading className="pt-2">
                  <b>{this.props.city}</b>
                  <h5><i>{this.props.address}</i></h5>
                </Media>
                <p>{this.props.price}</p>
              </Media>
            </Media>
          </div>
          <div className="col-3 text-center mt-4">
            <h4>{this.props.postOn}</h4>
            <h5><i>Days ago</i></h5>

          </div>
          <div className="col-3 text-center">
            <div class="btn-group-vertical">
              <button type="button" class="btn btn-success mt-3">Edit</button>
              <button type="button" class="btn btn-danger mt-2">Delete</button>

            </div>
          </div>
        </div>
        <div style={{ border: '2px solid Gainsboro' }} />
      </>
    );
  }
}
