const burger = document.querySelector('.hamburger');
const navLink = document.querySelector('.navlink');

/*
burger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
*/
burger.onclick = toggleVisibility;
function toggleVisibility(){
  navLink.classList.toggle('hide');
}

function isActive(event){
  const children = Array.from(navLink.children);
  children.forEach(child=>{
    child.classList.remove('active');
  });
  event.target.classList.toggle('active');
}
navLink.addEventListener('click', isActive);