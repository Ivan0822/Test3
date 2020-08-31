import axios from 'axios'

export function getAllShips() {
    return axios.get('https://api.spacexdata.com/v3/ships')
}

export function getCompanyInfo() {
    return axios.get('https://api.spacexdata.com/v3/info')
}

export function getActiveShips() {
    return axios.get('https://api.spacexdata.com/v3/ships?active=true')
}

export function getInactiveShips() {
    return axios.get('https://api.spacexdata.com/v3/ships?active=false')
}