import { url } from './apiServer'

const destrictUrl = url + "districts";

export const getAll = () => {

    return fetch(destrictUrl + `/getall`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const getByCity = (cityName) => {

    return fetch(destrictUrl + `/getbycity?cityName=${cityName}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const getByName = (name, cityId) => {
    return fetch(destrictUrl + `/getByName?name=${name}&cityId=${cityId}`)
    .then(res => res.json())
    .catch(error => console.log(error));
 };

export const create = (name, cityId) => {
    return fetch(destrictUrl + `/create?name=${name}&cityId=${cityId}`,{
        method: "PUT",
    })
    .then(res => res.json())
    .catch(error => console.log(error));
 };

export const deleted = (name, cityId) => { 
    return fetch(destrictUrl + `/deleted?name=${name}&cityId=${cityId}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .catch(error => console.log(error));
};
