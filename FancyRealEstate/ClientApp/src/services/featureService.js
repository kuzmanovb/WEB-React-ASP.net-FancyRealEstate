import { url } from'./apiServer'

const featureUrl = url + "features"

export const getAll = () => {
    return fetch(featureUrl + `/getAll`)
        .then(res => res.json())
        .catch(error => console.log(error))
};

export const create = (name) => {
    return fetch(featureUrl + `/create?name=${name}`, {
        method: "POST"
    })
        .then(res => res.json())
        .catch(error => console.log(error))
};

export const deleted = (name, countryName) => {
    return fetch(featureUrl + `/deleted?name=${name}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .catch(error => console.log(error))
};