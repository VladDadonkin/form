
const btn = document.querySelector('.btn');
const popover = document.querySelector('.popover');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (popover.classList.contains('hidden')) {
        const { right, top } = btn.getBoundingClientRect();
        btn.style.left = right + 5 + 'px';
        btn.style.top = top + btn.offsetHeight / 2 - btn.offsetHeight / 2 + 'px';


        popover.classList.remove('hidden')
        console.log(right, top);
    }
    else {
        popover.classList.add('hidden')
    }

    
    console.log('submit');
})

