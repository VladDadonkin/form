
const form = document.querySelector('.form');
const popover = document.querySelector('.popover');

form.addEventListener('click', (e) => {
    e.preventDefault();
    if (popover.classList.contains('hidden')) {
        popover.classList.remove('hidden')
    }
    else {
        popover.classList.add('hidden')
    }


    console.log('submit');
})

