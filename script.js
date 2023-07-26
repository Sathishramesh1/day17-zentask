//creating container class div
const bodydiv=document.createElement("div");
bodydiv.setAttribute("class","container");
document.body.append(bodydiv)

const title=document.createElement("h1");
title.setAttribute("id","title");
title.setAttribute("class","text-center")
title.innerHTML="Rest Countries"
bodydiv.append(title)

const bodydiv1=document.createElement("div");
bodydiv.append(bodydiv1)

//creating new request using fetch

const apikey="edbd62c4636b142115f5c0514a144dbc";

const url="https://restcountries.com/v3.1/all";
fetch(url).then((response)=>{
  if(response.status===200){
    return response.json();
}else{
    console.log("network error");
}
}).then((details)=>{

  for(let i=0;i<details.length;i++){
  
    var lng=details[i].latlng[1];
    

    bodydiv.innerHTML+=`
    <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
    <div class="card h-100" style="width: 18rem;">
    <div class="card-header">
    <h4 id='name'>${details[i].name.common}</h4>
    <img src='${details[i].flags.png}' class="card-img-top" alt="img">
    <div class="card-body">
      <h6 class="card-title"><span >Captial:</span>${details[i].capital}</h6>
      <div class="card-text">
      <h6><span>XRegion:</span>${details[i].region}</h6>
      <h6><span>Country Code:</span>${details[i].cca2}</h6>
      <h6><span>Population:</span>${details[i].population}</h6>

      </div>
      <button class="btn btn-primary" id="btn${i}" onclick="weather(${details[i].latlng[0]},${details[i].latlng[1]},${i})">Click for Weather</button>
    </div>
    <div id="card${i}" class="temp"></div>
  </div>
  </div>
  </div>
  </div>
  `
  
  
  }
  
  // btn.addEventListener("click",weather(lat,lng,apikey))

  
}).catch((err)=>{
  console.log("error",err);
})



function weather(lat,lng,i){
  
  
  
  var weatherurl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}&units=imperial`

fetch(weatherurl).then((response)=>{
  if(response.status===200){
     return response.json()
  }else{
    console.log("api not working");
  }
}).then((data)=>{
  let div=document.getElementById("card"+i);
  div.innerHTML=`Temperature:${data.main.temp}°F`
  console.log(data.main.temp)
})

}





