//ID: Name:
function init() {
    const showFormButton = document.createElement('button');
    showFormButton.textContent = 'Show Form';
    showFormButton.addEventListener('click', showForm);
    document.body.appendChild(showFormButton);
}

function showForm() {
    const showFormButton = document.querySelector('button');
    showFormButton.remove();

    const textInputDiv = document.createElement('div');
    textInputDiv.id = 'divInput';
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.placeholder = 'Enter text';
    textInputDiv.appendChild(textInput);

    const textAreaDiv = document.createElement('div');
    textAreaDiv.id = 'divTextArea';
    const textArea = document.createElement('textarea');
    textArea.placeholder = 'Enter more text';
    textAreaDiv.appendChild(textArea);

    const displayButton = document.createElement('button');
    displayButton.textContent = 'Display';
    displayButton.addEventListener('click', display);

    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear';
    clearButton.addEventListener('click', clear);

    const displayArea = document.createElement('div');
    displayArea.id = 'displayArea';

    document.body.appendChild(textInputDiv);
    document.body.appendChild(textAreaDiv);
    document.body.appendChild(displayButton);
    document.body.appendChild(clearButton);
    document.body.appendChild(displayArea);
}

function display() {
    const textInput = document.querySelector('#divInput input').value;
    const textArea = document.querySelector('#divTextArea textarea').value;
    const displayArea = document.querySelector('#displayArea');

    if (textInput.trim() !== '' && textArea.trim() !== '') {
        displayArea.innerHTML = `<h1>${textInput}</h1><p>${textArea}</p>`;
    } else {
        clear();
        displayArea.innerHTML = `<p style="color: red;">Error: Both input and textarea must contain text.</p>`;
    }
}

function clear() {
    const displayArea = document.querySelector('#displayArea');
    displayArea.innerHTML = '';
}

init();