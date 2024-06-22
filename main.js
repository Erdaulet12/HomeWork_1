async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}


function sortData(data, field) {
    return data.sort((a, b) => a[field] - b[field]);
}


async function displaySortedList() {
    const data = await getData();
    const sortedData = sortData(data, 'id');

    const sortedList = document.getElementById('sorted-list');
    sortedList.innerHTML = '';

    sortedData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.title;
        sortedList.appendChild(listItem);
    });
}

async function displayObjectCard() {
    const data = await getData();
    const objectData = data[0];

    const objectCard = document.getElementById('object-card');
    objectCard.innerHTML = '';
    for (const key in objectData) {
        const label = document.createElement('label');
        label.textContent = key + ': ';

        const value = document.createElement('span');
        value.textContent = objectData[key];

        objectCard.appendChild(label);
        objectCard.appendChild(value);
        objectCard.appendChild(document.createElement('br'));
    }
}

async function main() {
    await displaySortedList();
    await displayObjectCard();
}

main();
getData();
sortData();