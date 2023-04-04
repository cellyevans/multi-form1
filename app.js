const steps = document.querySelectorAll(".step");
const sections = document.querySelectorAll(".form-section");



steps.forEach((step, idx) => {
  step.addEventListener("click", () => {
    document.querySelector(".step.active").classList.remove("active");
    step.classList.add("active");
    document.querySelector(".active-section")
    .classList.remove("active-section");
    sections[idx].classList.add("active-section");
  });
});


// Default Form
const name =  document.querySelector("#main-form #fname").value;
const email = document.querySelector("#main-form #email").value;
const phone = document.querySelector("#main-form #phone").value;

const defaultBtn = document.querySelector("#main-form button");

console.log(document.querySelector("#main-form #email"));
document.querySelector("#main-form #email").addEventListener("input", (e) => {
    if(e.target.value.length > 4) {
        defaultBtn.removeAttribute("disabled");
    }else {
        defaultBtn.setAttribute("disabled", true);
    }
})

defaultBtn.addEventListener("click", () => {
    document
    .querySelector(".active-section")
    .classList.remove("active-section");
    document.querySelector(".plans").classList.add("active-section");
})




const iconBox = document.querySelector(".switch-icon");
const toggle = document.querySelector(".switch");
const icon = iconBox.querySelector(".fa");

const plan1 = document.querySelector(".billing-plan1");
const plan2 = document.querySelector(".billing-plan2");
const plan3 = document.querySelector(".billing-plan3");


toggle.addEventListener("click", (e)=>{
  if (e.target.matches(".switch-month")){
   icon.className = "fa fa-toggle-off";
   plan1.innerHTML = 'Arcade<br />$9/mo';
   plan2.innerHTML = 'advanced<br />$12/mo';
   plan3.innerHTML = 'pro<br />$15/mo';
  } else if(e.target.matches(".switch-year")) {
    icon.className = "fa fa-toggle-on";
    plan1.innerHTML = 'Arcade<br />$90/yr <br>2months free';
    plan2.innerHTML = 'advanced<br />$120/yr <br>2months free';
    plan3.innerHTML = 'pro<br />$150/yr <br>2months free';
  }else if(e.target.matches("i.fa")) {
    if(e.target.matches("i.fa.fa-toggle-on")) {
      icon.className = "fa fa-toggle-off"
      plan1.innerHTML = 'Arcade<br />$9/mo';
      plan2.innerHTML = 'advanced<br />$12/mo';
      plan3.innerHTML = 'pro<br />$15/mo';
    } else {
      icon.className = "fa fa-toggle-on";
      plan1.innerHTML = 'Arcade<br />$90/yr <br>2months free';
      plan2.innerHTML = 'advanced<br />$120/yr <br>2 months free';
      plan3.innerHTML = 'pro<br />$150/yr <br>2months free';
    }


  }
  console.log(e.target);
})

const next1 =document.querySelector(".next1");
const add =document.querySelector(".addons");


const next2 =document.querySelector(".next2");
const add1 =document.querySelector(".finishing-up");





  next1.addEventListener("click", () => {
    document.querySelector(".active-section") &&
      document.querySelector(".active-section").classList.remove("active-section");
      add.classList.add("active-section");
  });


  next2.addEventListener("click", () => {
    document.querySelector(".active-section") &&
      document.querySelector(".active-section").classList.remove("active-section");
      add1.classList.add("active-section");
  });


  
  
  const back = document.querySelector(".goback");
  const defaultform=document.querySelector(".form-section");

  back.addEventListener("click",(section,indx)=>{
  let formSection=0;
  for (let i =0; i > section.indx;i-1 ){

    return(formSection);
}
  });
  

  
  // back1.addEventListener("click",()=>{
  //   document.querySelector(".active-section").classList.remove("active-section");
  //   defaultform.classList.add("active-section");
  //   // console.log("hi");

  // })


  

// const gametype1= document.querySelector(".service-container.games1");
// const gametype2= document.querySelector(".service-container.games2");
// const gametype3= document.querySelector(".service-container.games3");

