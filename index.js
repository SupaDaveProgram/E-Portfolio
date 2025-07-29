
function contact(event){
  event.preventDefault();
  emailjs
  .sendForm(
    'service_5b98cxl',
    'template_j19icfj',
    event.target,
    'GfjAMuNUlDe6IFADj'
  ).then(() => {
    console.log('this worked1')
  })
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
 loading.classList += " modal__overlay--visible"
 setTimeout(() => {
  loading.classList.remove("modal__overlay--visible");
  success.classList += " modal__overlay--visible";
  console.log('it worked 1')
 }, 1000);
}

//let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = !isModalOpen;
  document.body.classList += " modal--open";
}


let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}
  
