const apiURL = 'http://127.0.0.1:8000/api/covid-data/'


export default class ApiService {

    static submitForm(state) {
        return fetch(`${apiURL}submit`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        }).catch(e => console.error(e))
    }

    static getAllData(searchData) {
        return fetch(`${apiURL}table`,
            {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(searchData)
            }).catch(e => console.error(e))
    }
}