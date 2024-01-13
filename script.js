const button = document.querySelector("div > button");
const textArea = document.querySelector("div > textarea");
const colorInput = document.querySelector("div > input");
const button2 = document.querySelector(".btn2");

const sound  = new Audio("./beep.mp3");
const wasted = new Audio("./wasted.mp3");
const slide = new Audio("./slide.mp3");


const mishra = document.querySelector("#notes-section");

button.addEventListener('click', ()=> {

    const noteText = textArea.value;
    const colorCode = colorInput.value;

    if(noteText === ""){
        alert("please enter some thing");
        return;
    }

    const inrP = document.getElementsByTagName("p");
    inrP[0].style.display = "none";
    

    const card = document.createElement("div");
    card.classList.add("card-style");
 
    card.style.backgroundColor = colorCode;


    const innerDiv = document.createElement("div");
    innerDiv.classList.add("inrdiv")
    


    const p = document.createElement("p");
    p.innerText = `${noteText}`;
    p.style.marginRight ="10px";
    mishra.appendChild(card);
    card.appendChild(innerDiv);
    innerDiv.appendChild(p); 

    const btn = document.createElement("span");
    btn.innerText = "X";
    btn.classList.add("logo");
    innerDiv.appendChild(btn);
    btn.style.cursor="pointer";

     textArea.value="";
     slide.play();
     
})


mishra.addEventListener('click',(e)=>{
    console.log(e);
    if(e.target.tagName === "SPAN"){
        e.target.parentNode.parentNode.remove();
        console.log(e);
        sound.play();
    }
    
})

button2.addEventListener('click', (e) =>{
    // alert("clickme");
    mishra.innerHTML = `<p class="animate__bounceIn new">You have not added a note yet.</p>`;
    wasted.play();

})









