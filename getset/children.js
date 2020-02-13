let div=document.querySelector('div');
let child=Array.from(div.children);
    child.forEach(ch=>{
        console.log(ch);
        
    });
    let silbing=child[0].nextElementSibling;
    console.log(silbing.textContent);    
    let silbing1=child[1].nextElementSibling;
    console.log(silbing1.textContent);    
    let silbing2=child[2].nextElementSibling;
    console.log(silbing2.textContent);    
    let silbing3=child[3].nextElementSibling;
    console.log(silbing3.textContent);    
      
    
    
       
