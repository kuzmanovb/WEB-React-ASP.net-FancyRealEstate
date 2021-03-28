import {Cloudinary} from "@cloudinary/base";

export const CloudinaryInstance = new Cloudinary({
    cloud: {cloudName: 'kuzmanovb'}
});