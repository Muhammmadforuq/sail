const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  if (tab) {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
      target.classList.add('active')
    });
  }
});

// =============== accordion ===============
const accoddion = document.querySelectorAll(".accordion .accordionBtn");
accoddion.forEach((cell) => {
  cell.addEventListener("click", () => {

    let accordionContent = cell.parentElement.nextElementSibling;

    cell.querySelector(".plus-icon").classList.toggle('hidden');
    cell.querySelector(".minus-icon").classList.toggle('hidden');
    console.log(cell.querySelector(".minus-icon"));
    accordionContent.classList.toggle('active')
    if (accordionContent.classList.contains('active')) {
      accordionContent.style.height = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.height = "0";
    }
  });
});

const dropdownButtons = document.querySelectorAll('.dropdown-button');
dropdownButtons.forEach((button) => {

  const menu = button.nextElementSibling;

  button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== button) {
      menu.classList.add('hidden');
    }
  });
});




document.querySelectorAll(".menuBtn").forEach((x)=>{
    if(x){
      x.addEventListener('click', ()=>{
        document.querySelector(".menu").classList.toggle("-translate-y-full");
        document.querySelector(".overlay").classList.toggle("hidden");
      })
    }
})


const toggleMenu = document.querySelectorAll(".mobileToggle");
const toggleMenuX = document.querySelectorAll(".mobileToggleX");

toggleMenu.forEach((open)=>{
  if(open)
  open.addEventListener('click',()=>{
      open.nextElementSibling.classList.toggle('hidden');
      open.classList.toggle('text-brand-yellow-100')
  })

})

toggleMenuX.forEach((close)=>{
  if(close)
  close.addEventListener('click',()=>{
    close.parentElement.classList.toggle('hidden');
  })
})

document.querySelectorAll('.modulBtn').forEach(modal=>{
  if(!false){
    modal.addEventListener('click',()=>{
      document.querySelector('.modalList').classList.toggle('hidden');
      document.querySelector('.overlay2').classList.toggle('hidden')
    })
  }
})

document.querySelector('.overlay2').addEventListener('click',()=>{
  console.log('overlay');
  document.querySelector('.modalList').classList.toggle('hidden');
  document.querySelector('.overlay2').classList.toggle('hidden')
})




document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.burger').classList.toggle('burger_active');
  document.querySelector('.top-link').classList.toggle('hidden')

  document.querySelector('.mobileMenu').classList.toggle('hidden')
  document.body.classList.toggle('overflow-hidden')
})


document.querySelector(".overlay").addEventListener('click', ()=>{
  document.querySelector(".menu").classList.toggle("-translate-y-full");
  document.querySelector(".overlay").classList.toggle("hidden");
})






// imagae zoom
const zoom = document.getElementById("image-container");
const img = document.getElementById("image");

zoom.addEventListener('mousemove', (e)=>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    console.log(x,y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = 'scale(2)'

})

zoom.addEventListener('mouseleave', (e)=>{
  img.style.transformOrigin = 'center';
  img.style.transform = 'scale(1)'

})










