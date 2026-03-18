document.querySelectorAll('.dropdown-content li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-content li').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
});
