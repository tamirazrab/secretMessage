document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); /* to disable browser default behaviour of taking input and sending it to back-end server */

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input);

    const displayMessage = document.querySelector('#display-message');
    /* window.location contains locations (URL) of file, back ticks required otherwise it will display whole window.location object with un necessary information.  */
    displayMessage.value = `${window.location}#${encrypted}`;
    displayMessage.select(); /* to automatically select generated URL so user don't have to manually copy it */
    input.value = '';
});