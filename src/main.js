import data from './data/lol/lol.js';
import {orderChampions, filterChampions, computeStats } from './data.js';



//VISTA INICIO
document.getElementById("firstNavigator").style.display= "block";
document.getElementById("secondNavigator").style.display= "none";
document.getElementById("storage").style.display="none";
document.getElementById("modalContainer").style.display = "none";
document.getElementById("aboutLol").style.display = "none";
document.getElementById("minMax").style.display="none";

const storage = document.getElementById("storage");
const searchBar = document.getElementById("searchBar");
const newData = Object.values(data.data);//{version:...}

function showChampionsPage() {
  document.getElementById("secondNavigator").style.display= "block";
  document.getElementById("leagueOfLegends").style.display= "none";
  document.getElementById("body").classList.add("page2-Champions");
  document.getElementById("body").classList.remove("page3-Statistics");
  document.getElementById("body").classList.remove("page4-InfoAbout");
  document.getElementById("storage").style.display="block";
  document.getElementById("minMax").style.display="none";

  const showChampions = (champions) => {
      let htmlString = champions.map((propChamp)  => {
        //console.log(propChamp);
          
          let tags = Object.values(propChamp.tags);
          let infoKeys = Object.keys(propChamp.info);
          let infoValues = Object.values(propChamp.info);
          //console.log(info);
          // console.log(propChamp);  
        return   `
        <article class=${propChamp.name}>
          <a  href="#${propChamp.key}">
              <img class="card" src="${propChamp.splash}"></img>
          </a>
          <h3>${propChamp.name}</h3> 
        </article>   
        
        <section id="${propChamp.key}" class="modalDialog">
          <section>
              <a href="#close" title="Close" class="close">X</a>
              <img class="modalImg" src="${propChamp.splash}"></img>
              <p class="modalTitle">${propChamp.title}</p>
              <h2 class="modalName">${propChamp.name}</h2>
              <p class="modalBlurb">· ${propChamp.blurb}</p>
              <p class="modalTags">· Roles: ${tags}</p>
              <table class="modalInfo"> 
                  <tr>
                      <th>${infoKeys[0]}</th>
                      <th>${infoKeys[1]}</th>
                      <th>${infoKeys[2]}</th>
                      <th>${infoKeys[3]}</th>
                  </tr>
                  <tr>
                      <td>${infoValues[0]}</td>
                      <td>${infoValues[1]}</td>
                      <td>${infoValues[2]}</td>
                      <td>${infoValues[3]}</td>
                  </tr>
              </table>
              
          </section>
       </section>`
      })
     // console.log(htmlString);
      storage.innerHTML = htmlString;  
    }

    showChampions(newData);
    
    let notFound= `<section class=notFoundSearch>
                  <i class="fab fa-searchengin"></i>
                  <h2>No existe, intenta con otro campeón</h2>
                  </section>`

  //FUNCION BUSCAR POR NOMBRE
  searchBar.addEventListener("keyup", (e) =>{
      const searchValue = e.target.value.toLowerCase();
      
       let filteredChampions = newData.filter(element => {
       
        //console.log(propChamp);
       return element.name.toLowerCase().includes(searchValue);
      })
      if(filteredChampions == false){
        return storage.innerHTML = notFound;

      }else{
      showChampions(filteredChampions);
      }
    });
  
  
  //FUNCION FILTRAR POR ROL
  document.getElementById("allRoles").addEventListener("change", (e)=>{
      const roleSelected = e.target.value;
      //console.log(typeof roleSelected);

      if(roleSelected == 'All'){
          return showChampions(newData); //devuelve un objeto
      }else{
          let filterRoles = (filterChampions(newData, roleSelected));
          // console.log(newData.tags); undefined
         // console.log(filterChampions);
          showChampions(filterRoles);
          
          document.getElementById("order").addEventListener("change", (e) => {
              let target = e.target.value;
              let orderedChamps = (orderChampions(filterRoles,"name", target));
              //console.log(orderedChamps)
              showChampions(orderedChamps);
          });
      }
    });
      
  //FUNCION SORT AZ-ZA
  document.getElementById("order").addEventListener("change", (e) => {
      
      let target = e.target.value;
      let orderedChamps = (orderChampions(newData, "name", target));
      //console.log(orderedChamps)
      showChampions(orderedChamps);
  });   

}

function showMinMaxPage() {
  document.getElementById("secondNavigator").style.display= "none";
  document.getElementById("leagueOfLegends").style.display= "none";
  document.getElementById("body").classList.add("page3-Statistics");
  document.getElementById("body").classList.remove("page2-Champions");
  document.getElementById("body").classList.remove("page4-InfoAbout");
  document.getElementById("storage").style.display= "none";
  document.getElementById("aboutLol").style.display="none";
  document.getElementById("minMax").style.display="block";
  document.querySelector(".aboutLol").style.display = "none";

 //const dataAllChampions = Object.values(data);
  //console.log(newData);

 let hp = [];
 let armor = [];
 let attackdamage = [];

 newData.forEach(item=>{
  hp.push(item.stats.hp);
  armor.push(item.stats.armor);
  attackdamage.push(item.stats.attackdamage);
  // attackrange.push(item.stats.attackrange);

 });
 let hpResult= computeStats(hp);
 let armorResult= computeStats(armor);
 let attackdamageResult= computeStats(attackdamage);

 //console.log(hpResult);
 //console.log(armorResult);

//Objetos
let hpMin;
let hpMax;
let armorMin;
let armorMax;
let attackMin;
let attackMax;

//OBJETO para tabla



newData.forEach((propChamp) => {

 const {name , img, stats } = propChamp;

 if(stats.hp == hpResult[0]) {hpMin = { name,img,value: stats.hp }}
 else if(stats.hp == hpResult[1]) {hpMax = {name,img,value: stats.hp}}

 else if(stats.armor == armorResult[0]) {armorMin = {name,img, value: propChamp.stats.armor}}

 else if(stats.armor == armorResult[1]) {armorMax = { name,img,value: stats.armor}}

 else if(stats.attackdamage == attackdamageResult[0]) {
 attackMin = { name,img,value: propChamp.stats.attackdamage}}

 else if(propChamp.stats.attackdamage == attackdamageResult[1]) {attackMax = {name,img,value: propChamp.stats.attackdamage}}
});

 //console.log(table.join(""));
  let newTable =  
 `<table class="tableMinMax">
  <tr> 
  <caption> ATTACKDAMAGE </caption>
  </tr>

  <tr class = "headerMinMax">
    <th>MÍNIMO</th>
    <th>MÁXIMO</th>
  </tr>

  <tr>
    <td class="tableNames">${attackMin.name}</td>
    <td class="tableNames">${attackMax.name}</td>
  </tr>
  
  <tr>
    <td><img src=${attackMin.img}></img></td> 
    <td><img src=${attackMax.img}></img></td> 
  </tr>

  <tr>
    <td>${attackMin.value}</td>
    <td>${attackMax.value}</td>
  </tr>

 </table>
 <br>
 <table class="tableMinMax">
  <tr> 
  <caption> ARMOR </caption>
  </tr>

  <tr class = "headerMinMax">
    <th>MÍNIMO</th>
    <th>MÁXIMO</th>
  </tr>

  <tr>
    <td class="tableNames">${armorMin.name}</td>
    <td class="tableNames">${armorMax.name}</td>
  </tr>
  
  <tr>
    <td><img src=${armorMin.img}></img></td> 
    <td><img src=${armorMax.img}></img></td> 
  </tr>

  <tr>
    <td>${armorMin.value}</td>
    <td>${armorMax.value}</td>
  </tr>

 </table>
 <br>
 <table class="tableMinMax">
  <tr> 
  <caption> HP </caption>
  </tr>

  <tr class = "headerMinMax">
    <th>MÍNIMO</th>
    <th>MÁXIMO</th>
  </tr>

  <tr>
    <td class="tableNames">${hpMin.name}</td>
    <td class="tableNames">${hpMax.name}</td>
  </tr>
  
  <tr>
    <td><img src=${hpMin.img}></img></td> 
    <td><img src=${hpMax.img}></img></td> 
  </tr>

  <tr>
    <td>${hpMin.value}</td>
    <td>${hpMax.value}</td>
  </tr>

 </table>`



 document.getElementById("minMax").innerHTML = newTable;
}

//VISTA CHAMPIONS
  document.getElementById("champions").addEventListener("click", showChampionsPage);
  document.getElementById("championsDownload").addEventListener("click", showChampionsPage);

//VISTA 3 
document.getElementById("statistics").addEventListener("click", showMinMaxPage);

//VISTA 4
document.getElementById("about").addEventListener("click", function() {
  document.getElementById("secondNavigator").style.display= "none";
  document.getElementById("leagueOfLegends").style.display= "none";
  document.getElementById("body").classList.add("page4-InfoAbout");
  document.getElementById("body").classList.remove("page3-Statistics");
  document.getElementById("body").classList.remove("page2-Champions");
  document.getElementById("storage").style.display= "none";
  document.querySelector(".aboutLol").style.display= "block";
  document.getElementById("minMax").style.display="none";
});

//RELOAD
document.getElementById("lolIcon").addEventListener("click",
function(){
    location.reload();
});


