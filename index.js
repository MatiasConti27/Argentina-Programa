document.getElementById('button_experiencia').addEventListener('click', ()=> {
    document.getElementById('work').style.display = 'block'; 
});


document.getElementById('button_education').addEventListener('click', ()=> {
    document.getElementById('education').style.display = 'block';    
});


document.getElementById('button_acerca').addEventListener('click', ()=> {
    document.getElementById('mi').style.display = 'block';    
});

document.getElementById('ocultar_acerca').addEventListener('click',()=>{
    document.getElementById('mi').style.display = 'none'
});

document.getElementById('ocultar_experiencia').addEventListener('click',()=>{
    document.getElementById('work').style.display = 'none'
});

document.getElementById('ocultar_education').addEventListener('click',()=>{
    document.getElementById('education').style.display = 'none'
});
