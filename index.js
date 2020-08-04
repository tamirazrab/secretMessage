document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); /* to disable browser default behaviour of taking input and sending it to back-end server */

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input);

    const displayMessage = document.querySelector('#display-message');
    displayMessage.value = encrypted;
    input.value = '';
});