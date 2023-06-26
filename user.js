const sidebarfunction = document.querySelector(".sidebar-function");
const sidebaritems = document.querySelector('sidebar-items')

sidebaritems.addEventListener('click', () => {
    sidebarfunction.classList.add('active');
});