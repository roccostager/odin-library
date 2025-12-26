const myLibrary = [];

function Book(title, author, date, read) {
    if (!new.target) throw Error('Use new operator to call this function');

    this.title = title;
    this.author = author;
    this.date = date;
    this.read = read;
}

const tableDisplay = document.getElementById('book-data');
const openModalButton = document.getElementById('open-modal');
const modal = document.querySelector('.modal');
const form = document.querySelector('form');

openModalButton.addEventListener('click', () => {
    modal.classList.add('visible');
})

form.addEventListener('submit', e => {
    e.preventDefault();
    modal.classList.remove('visible');

    const data = new FormData(e.target);
    const objectifiedData = storeInputData(data);
    myLibrary.push(objectifiedData);

    displayData();
    form.reset();
})

function storeInputData(data) {
    const newBook = new Book(
        data.get('title'),
        data.get('author'),
        data.get('date'),
        data.get('read') === 'on',
    );
    return newBook;
}

function displayData() {
    tableDisplay.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const row = document.createElement('tr');
        tableDisplay.append(row);

        Object.values(myLibrary[i]).forEach(value => {
            const td = document.createElement('td');
            td.innerText = value;
            row.append(td);
        });
    }
}