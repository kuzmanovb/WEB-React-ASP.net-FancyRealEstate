import { url } from './apiServer'

const destrictUrl = url + "districts";

export const getAll = () => {

    return fetch(destrictUrl)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const getByName = (name) => {
    return fetch(destrictUrl + `/${name}`)
    .then(res => res.json())
    .catch(error => console.log(error));
 };

export const create = (name) => {
    return fetch(destrictUrl + `/${name}`,{
        method: "PUT",
    });
 };

export const deleted = (name) => { 
    return fetch(destrictUrl + `/${name}`,{
        method: "DELETE"
    });
};