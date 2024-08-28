let arr = [
  {name:"Audi A1 S-Line",img:"/images/Audi.jpg",detail:{
    rent:"$45/ rent per day",
    model:"Audi",
    mark:"A1",
    year:"2012",
    doors:"4/5",
    AC:"Yes",
    Transmission:"Manual",
    Fuel:"Gaesoline"
  }},
  {name:"VW Golf 6",img:"/images/vw.jpg",detail:{
    rent:"$37/ rent per day",
    model:"Golf 6",
    mark:"Volkswagen",
    year:"2008",
    doors:"4/5",
    AC:"Yes",
    Transmission:"Manual",
    Fuel:"Diesel"
  }},

  {name:"Toyota Camry",img:"/images/toyota.jpg",detail:{
    rent:"$30/ rent per day",
    model:"Camry",
    mark:"Toyota",
    year:"2006",
    doors:"4/5",
    AC:"Yes",
    Transmission:"Automatic",
    Fuel:"Hybrid"
  }},
  {name:"BMW 320 ModernLine",img:"/images/BMW.jpg",detail:{
    rent:"$35/ rent per day",
    model:"320",
    mark:"BMW",
    year:"2012",
    doors:"4/5",
    AC:"Yes",
    Transmission:"Manual",
    Fuel:"Diesel"
  }},
  {name:"Mercedes-Benz GLK",img:" /images/Mercedies.jpg",detail:{
    rent:"$150/ rent per day",
    model:"Benz GLK",
    mark:"Mercedes",
    year:"2006",
    doors:"4/5",
    AC:"Yes",
    Transmission:"Manual",
    Fuel:"Diesel"
  }},
  {name:"VW Passat CC",img:"/images/passet.jpg",detail:{
    rent:"$25 / rent per day",
    model:"Passet CC",
    mark:"Volkswagen",
    year:"2008",
    doors:"4/5",
    AC:"Yes",
    Transmission:"Automatic",
    Fuel:"Gaesoline"
  }}
]


let clutter = "";
let selectedname  = 0;
let cars = document.querySelector(".cars");
let images = document.querySelector(".images");
let table = document.querySelector("table");
function main(){
  arr.forEach((elem,index)=>{
    clutter += `<div class="name" id=${index}>${elem.name}</div>`
    cars.innerHTML = clutter;
     images.innerHTML = `<div class="image"><img src=${arr[selectedname].img} alt=""></div>`
     table.innerHTML = `<th colspan="2">${arr[selectedname].detail.rent}</th>
        <tr>
            <td>Model</td>
            <td>${arr[selectedname].detail.model}</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>${arr[selectedname].detail.mark}</td>
          </tr>
          <tr>
            <td>Year</td>
            <td>${arr[selectedname].detail.year}</td>
            
          </tr>
          <tr>
            <td>Doors</td>
            <td>${arr[selectedname].detail.doors}</td>
          </tr>
          <tr>
            <td>AC</td>
            <td>${arr[selectedname].detail.AC}</td>
            
          </tr>
          <tr>
            <td>Transmission</td>
            <td>${arr[selectedname].detail.Transmission}</td>
          </tr>
          <tr>
            <td>Fuel</td>
            <td>${arr[selectedname].detail.Fuel}</td>  
          </tr>` 
    
    })
}

main()


cars.addEventListener("click",(detail)=>{
  selectedname = detail.target.id;
  arr.forEach((elem,index)=>{
     images.innerHTML = `<div class="image"><img src=${arr[selectedname].img} alt=""></div>`
     table.innerHTML = `<th colspan="2">${arr[selectedname].detail.rent}</th>
        <tr>
            <td>Model</td>
            <td>${arr[selectedname].detail.model}</td>
            
            
          </tr>
          <tr>
            <td>Mark</td>
            <td>${arr[selectedname].detail.mark}</td>
          </tr>
          <tr>
            <td>Year</td>
            <td>${arr[selectedname].detail.year}</td>
            
          </tr>
          <tr>
            <td>Doors</td>
            <td>${arr[selectedname].detail.doors}</td>
          </tr>
          <tr>
            <td>AC</td>
            <td>${arr[selectedname].detail.AC}</td>
            
          </tr>
          <tr>
            <td>Transmission</td>
            <td>${arr[selectedname].detail.Transmission}</td>
          </tr>
          <tr>
            <td>Fuel</td>
            <td>${arr[selectedname].detail.Fuel}</td>
            
          </tr>`   
    })
  
})

let Q1 = document.querySelector(".Q1");
let Q2 = document.querySelector(".Q2");
let Q3 = document.querySelector(".Q3");
let A1 = document.querySelector(".A1");
let A2 = document.querySelector(".A2");
let A3 = document.querySelector(".A3");
let flag = 0;
Q1.addEventListener("click",()=>{
  if(flag==0){
    A1.style.display = "block";
    A1.style.transition = "all ease 0.2s";
    flag=1;
  }
  else{
    A1.style.display = "none";
    flag=0;
  }
})

Q2.addEventListener("click",()=>{
  
  if(flag==0){
    A2.style.display = "block";
    flag=1;
  }
  else{
    A2.style.display = "none";
    flag=0;
  }
   
 
})
Q3.addEventListener("click",()=>{
 
  if(flag==0){
    A3.style.display = "block";
    flag=1;
  }
  else{
    A3.style.display = "none";
    flag=0;
  }
})



