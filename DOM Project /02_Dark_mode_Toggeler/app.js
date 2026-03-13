const toggleBtn = document.querySelector('#darkModeButton');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');
    if (document.body.classList.contains('darkMode')) {
        toggleBtn.innerText = 'Toggle to Light Mode';
    }
    else{
        toggleBtn.innerText = 'Toggle to Dark Mode';
    }
})