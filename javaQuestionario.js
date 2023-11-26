let botao1=document.querySelector('#btn1');
botao1.addEventListener('click',()=>{
    let nome=document.querySelector('#nome');
    let texto_nome=nome.value;
    let nome2=document.querySelector('#nome2');
    let texto_nome2=nome2.value;

    
    let p=document.querySelector(".p7");
    p.textContent=`Você ${texto_nome}  ${texto_nome2} `;
})