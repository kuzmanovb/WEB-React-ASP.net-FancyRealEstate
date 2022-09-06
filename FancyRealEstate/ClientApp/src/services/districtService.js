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

export const getByName = (name) => {
    return fetch(destrictUrl + `/getByName?name=${name}`)
    .then(res => res.json())
    .catch(error => console.log(error));
 };

export const create = (name, cityName) => {
    return fetch(destrictUrl + `/create?name=${name}&cityName=${cityName}`,{
        method: "POST",
    })
    .then(res => res.json())
    .catch(error => console.log(error));
 };

export const deleted = (name, cityName) => { 
    return fetch(destrictUrl + `/deleted?name=${name}&cityName=${cityName}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .catch(error => console.log(error));
};
