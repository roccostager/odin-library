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

openModalButton.addEventListener('click', () => {
    modal.classList.add('visible');
})

