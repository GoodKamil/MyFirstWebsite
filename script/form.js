const form=document.querySelector('#form');
const name=form.querySelector("[data-option='name']")
const email=form.querySelector("[data-option='email']")
const area=form.querySelector("[data-option='area']")




function displayErrors(Error,form){
   
   let p=form.querySelector(".error");
    if(!p){  
         p=document.createElement("p");
    }
         p.className="error";
         p.style.color="red";
         p.innerHTML=Error.join("<br>");
         form.insertBefore(p, form.children[form.length])
}



form.addEventListener('submit',function(e){
    e.preventDefault();
    const Error=[];
    if(email.value==="" || email.value.indexOf("@")===-1){
        Error.push("Podaj poprawny adres e-mail");
        email.classList.add('active'); 
    }else{
        email.classList.remove('active');
    }  

  if(name.value==="" || !isNaN(name.value)){
    Error.push("Podaj swoje imię");  
    name.classList.add('active'); 
  }
  else{
      name.classList.remove('active')
  }
  if(area.value===""){
    Error.push("Napisz wiadomość");  
    area.classList.add('active'); 
  }else{
      area.classList.remove('active');
  }
  
  if(Error.length){
      displayErrors(Error,form);
  }else{
      alert('Formularz został wysłany');
      form.submit();
  }

});

