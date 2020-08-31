
export const Header = (name, founder, year) => {
    const header = document.querySelector('#header')

    const spanName = document.createElement('span')
    spanName.textContent = 'Company name: ' + name

    const spanFounder = document.createElement('span')
    spanFounder.textContent = 'Owner: ' + founder

    const spanYear = document.createElement('span')
    spanYear.textContent = 'Founded: ' + year

    header.append(spanName, spanFounder, spanYear)

}