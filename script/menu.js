const bar=document.querySelector('div.bar i');
const menu=document.querySelector('nav');


bar.addEventListener('click',function(){
menu.classList.toggle('active');
bar.classList.toggle('active');
});
    

    
