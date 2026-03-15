const inputField = document.querySelector('#itemInput');
const list = document.querySelector('#itemList');
const addButton = document.querySelector('#addButton');

addButton.addEventListener('click', () => {
    if(inputField.value === "") {
        alert("Please enter a value")
        return;
    }
    console.log(inputField.value)

    //creating li item
    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = inputField.value;
    li.appendChild(textSpan);
    list.appendChild(li)

    //clearing input list
    inputField.value = "";

    //creating delete button inside li
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete');
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        li.remove();
    })

    li.addEventListener('dblclick', () => {

    })

    //editing
    textSpan.addEventListener('dblclick', () => {
        textSpan.contentEditable = true; // Turn on editing
        textSpan.classList.add('editing'); // Add a CSS class for styling
        textSpan.focus(); // Put the cursor inside

        // Function to save the changes
        const saveChange = () => {
            textSpan.contentEditable = false;
            textSpan.classList.remove('editing');

            // Optional: Handle empty input
            if (textSpan.textContent.trim() === "") {
                li.remove(); // Remove if they deleted everything
            }
        };

        // Save when user clicks away
        textSpan.addEventListener('blur', saveChange, { once: true });

        // Save when user hits 'Enter'
        textSpan.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // Stop it from making a new line
                textSpan.blur(); // Trigger the save logic
            }
        });
    });
})