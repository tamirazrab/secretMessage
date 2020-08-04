const { hash } = window.location; /* this what contains encoded text in has fragment */
const message = atob(hash.replace('#', ''));

const inputForm = document.querySelector('#input-form');
const outputForm = document.querySelector('#output-form');
const displayForm = document.querySelector('#display-form');

if (message) {
    /* if there is message then hiding the input to prevent adding # bug */
    inputForm.classList.add('hide');

    /* remove hide by default from display form where encoded message will be displayed */
    displayForm.classList.remove('hide');

    /* add the decoded message for display */
    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); /* to disable browser default behaviour of taking input and sending it to back-end server */

    /* hiding input form */
    inputForm.classList.add('hide');

    /* showing output form - which is hidden by default */
    outputForm.classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const displayMessage = document.querySelector('#display-message');
    /* window.location contains locations (URL) of file, back ticks required otherwise it will display whole window.location object with un necessary information.  */
    displayMessage.value = `${window.location}#${encrypted}`;
    displayMessage.select(); /* to automatically select generated URL so user don't have to manually copy it */
    input.value = '';
});