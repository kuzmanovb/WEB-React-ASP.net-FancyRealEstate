import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {CloudinaryInstance} from './CloudinaryInstance'

export const ImageFromCloudinary = (props) => {

  const myImage = CloudinaryInstance.image(props.publicId);

  return (
    <div>
      <AdvancedImage cldImg={myImage} className="img-fluid"  style={{ margin: '15px' }}/>
    </div>
  )
};