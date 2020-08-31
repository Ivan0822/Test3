import { Ship } from './Ship.js'

export const ShipList = (arr) => {
    const listDiv = document.createElement('div')
    listDiv.className = 'ship-list'

    arr.forEach(ship => {
        listDiv.append(Ship(ship))
    })

    return listDiv
}