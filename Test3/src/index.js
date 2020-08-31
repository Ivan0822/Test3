
import { getCompanyInfo, getAllShips, getActiveShips, getInactiveShips } from './service.js'
import { ShipList } from './components/ShipList.js';
import { Select } from './components/Select.js'
import { Header } from './components/Header.js';

const app = document.querySelector('#app')
const select = document.querySelector('#select')

getCompanyInfo().then(res => {
    console.log(res);
    Header(res.data.name, res.data.founder, res.data.founded)
    Select()
    getAllShips().then(res => {
        console.log(res);
        app.append(ShipList(res.data))
    })
})

select.addEventListener('change', (e) => {
    e.preventDefault()
    const shipList = document.querySelector('.ship-list')
    shipList.remove()
    if (select.value === 'Active') {
        getActiveShips().then(res => {
            app.append(ShipList(res.data))
        })
    }
    else if (select.value === 'Inactive') {
        getInactiveShips().then(res => {
            app.append(ShipList(res.data))
        })
    }
    else {
        getAllShips().then(res => {
            console.log(res);
            app.append(ShipList(res.data))
        })
    }
})