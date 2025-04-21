export function setupPopover() {
    const btn = document.querySelector('.btn');
const popover = document.querySelector('.popover');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (popover.classList.contains('hidden')) {
        
        const rect = btn.getBoundingClientRect();

        popover.style.top = rect.top - popover.offsetHeight - 85 + window.scrollY + 'px';
        popover.style.left = rect.left + rect.width / 2 - popover.offsetWidht / 2 + 'px';



        popover.classList.remove('hidden')
        console.log(rect);
        console.log(popover.getBoundingClientRect())
    }
    else {
        popover.classList.add('hidden')
    }

    
    console.log('submit');
})
};


