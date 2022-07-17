data = []

async function refreshData() {
    let dataReceived = await fetch('http://localhost:5000/todos').then(res => res.json()).then(json => json);
    data = dataReceived.result;
}

async function sendData(name, status, priority) {
    let response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        body: JSON.stringify({name, status, priority}),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res => res.json()).then(json => json);

    console.log(response);

    refreshData();
    return response;
}

async function editData(pName, name, status, priority) {
    let response = await fetch('http://localhost:5000/todos', {
        method: 'PUT',
        body: JSON.stringify({pName, name, status, priority}),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res => res.json()).then(json => json);

    refreshData();
    return response;
}

async function removeData(name) {
    let response = await fetch('http://localhost:5000/todos', {
        method: 'DELETE',
        body: JSON.stringify({name}),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res => res.json()).then(json => json);

    refreshData();
    return response;
}