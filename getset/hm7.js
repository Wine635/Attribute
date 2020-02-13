let p=document.querySelectorAll('p');
let ul=document.querySelector('ul');
//setAndGet
p.forEach(pd=>{
    pd.setAttribute("class","fruit");
    let result=pd.getAttribute("class");
   console.log(result);
});
//classList
let li1=document.createElement('li');
li1.textContent="Warning Sign";
let li2=document.createElement('li');
li2.textContent="Primary Sign";
let list=ul.append(li1,li2);
li1.classList.add("class","sign");
li2.classList.add("class","sign");
