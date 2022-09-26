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
// **********script del formulario validacion y envion***********
const nombre = document.getElementById('name');
const email = document.getElementById('correo');
const description = document.getElementById('description');
const parrafo = document.getElementById('warning')
const form = document.getElementById('form-contact')
const correo = 'workgilmarfasabi@gmail.com'
const url = `https://formsubmit.co/ajax/${correo}`
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  // console.log(e.currentTarget.elements);

  // console.log(name.value);
  // console.log(email.value);
  // console.log(description.value);
  parrafo.innerHTML = '';
  let warnings = '';
  let letters = /^[A-Za-z]+$/;
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(nombre.value.length > 9 || nombre.value.length <= 3 || !nombre.value.match(letters)){
    warnings += `El nombre no es valido,`
    entrar = true;
  }
  if(!regexEmail.test(email.value)){
    warnings += `El correo no es valido,`
    entrar = true;
  }
  if(description.value.length < 6 ){
    warnings += `El mensaje no es valido.`
    entrar = true;
  }

  if(entrar === true){
    alert(warnings)
    // parrafo.innerHTML = warnings;
    // parrafo.innerHTML = ''
  }
  else{
    
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
      alert('EL MENSAJE SE ENVIO CON EXITO')
      e.currentTarget.reset()

  }

})


//script para el modo nocturno
const btnDark = document.querySelector('.container__dark_mode');
const btnDark1 = document.getElementById('btn__dark-mode');

btnDark1.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// validacion de formulario 
