// innerHTML agregar en formato html
// innerText agrega en formate texto
// getAttribute obtiene atributos de la etiqueta
// classList.add
// classList.remove

ch3=document.querySelector('.ch3');
texto1=document.querySelector('#texto1');
texto2=document.querySelector("#texto2");
btnEnciar=document.querySelector(".btnEnviar");
form=document.querySelector("#f1");

form.addEventListener('submit', escuchar);
function escuchar(event)
{
  event.preventDefault();
  let t1=parseInt(texto1.value);
  let t2=parseInt(texto2.value);
  let suma=t1+t2;
  ch3.innerText=suma;
}