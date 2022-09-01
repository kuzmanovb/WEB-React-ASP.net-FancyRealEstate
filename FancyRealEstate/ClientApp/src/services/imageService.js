import {url} from'./apiServer'

const imageUrl = url + "images"

export const deleteImage = (cloudId) =>{

    fetch(imageUrl + `/Delete?cloudId=${cloudId}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};