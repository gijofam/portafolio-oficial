const puestoWork = document.getElementById('cargo')

const maquinaEscribir = (str) => {
 puestoWork.innerHTML = ''
 let i=0;
 let j = str.length;
 let arrayCaracter = str.split('')
 const escribir = setInterval( () => {
    puestoWork.innerHTML += arrayCaracter[i];
    i++;
    if(i === arrayCaracter.length)
     {
       clearInterval(escribir)
     }
    // if(i === arrayCaracter.length)
    //  {
    //     puestoWork.innerHTML = str.substring(0,j);
    //     j--;
    //     if(j === 0){
    //         i=0;
    //         j = str.length;
    //         puestoWork.innerHTML = '';
    //     }
    //  }else{
    //     puestoWork.innerHTML += arrayCaracter[i];
    //     i++;
    //  }
   
 }, 300)
}

maquinaEscribir(' Desarrollador Web - Frontend')
// puestoWork.innerHTML += 'Desarrollador Web - Frontend'
// **********script del formulario***********
const form = document.getElementById('form-contact')
const correo = 'workgilmarfasabi@gmail.com'
const url = `https://formsubmit.co/ajax/${correo}`
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  // console.log(e.currentTarget.elements);
  const inputs = e.currentTarget.elements;
  const dataForm = {
    name: inputs.name.value,
    email: inputs.correo.value,
    message: inputs.description.value,
  }
  // console.log(dataForm)
  
// https://github.com/github/fetch
  fetch(url, {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(dataForm)
  })
    
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error));
    alert('tu mensaje en envio con exito')
    e.currentTarget.reset()
})

const btnDark = document.querySelector('.container__dark_mode');
const btnDark1 = document.getElementById('btn__dark-mode');

btnDark1.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});