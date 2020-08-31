
export const Select = () => {
    const select = document.querySelector('select')

    const option1 = document.createElement('option')
    option1.value = 'All'
    option1.textContent = 'All'

    const option2 = document.createElement('option')
    option2.value = 'Active'
    option2.textContent = 'Active'

    const option3 = document.createElement('option')
    option3.value = 'Inactive'
    option3.textContent = 'Inactive'

    select.append(option1, option2, option3)

}