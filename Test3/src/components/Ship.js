
export const Ship = (ship) => {
    const div = document.createElement('div')

    const link = document.createElement('a')
    link.href = ship.url

    const img = document.createElement('img')
    img.src = ship.image
    img.width = 200

    const parName = document.createElement('p')
    parName.textContent = 'Name: ' + ship.ship_name

    const parType = document.createElement('p')
    parType.textContent = 'Type: ' + ship.ship_type

    const parActive = document.createElement('p')
    parActive.textContent = 'Active: ' + ship.active

    link.append(img)
    div.append(link, parName, parType, parActive)

    return div
}