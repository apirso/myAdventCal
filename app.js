let appCal = document.querySelector('#app-calendar')
let advType= document.querySelector('#advType') //defines what genre the cal will show
let genre = checkCookie('advType');
let day;
let elements;
// let title = document.querySelector('.card-title')

pageCreation()

//makes the calander board with closed doors and sets a click element on all doors
function pageCreation(){
for (let day = 1; day <= 24; day +=1){
  appCal.insertAdjacentHTML("beforeend",`<div class ='backDoor'><div class ='tapeOff'></div>
  <img class='movieImg' id='movieImg-${day}' src="${horror[day-1].image}"/><div class ='day'>
  <div id='day${day}'><div class ='tapeOn'></div>${day}</div></div></div>`)
  window.addEventListener('load',loadFilm) //loadFilm will check if doors have previously been selected
}

day = document.querySelectorAll('.day')
day.forEach(function (i) {
  i.addEventListener('click', function(){
      checkDoor(i)
      console.log('clicked')
}
  );
});

//opens a door when clicked on
 for (let i = 0; i < day.length; i++) {
  day[i].addEventListener("click", function() {
    day[i].classList.toggle("doorOpen");
     });
 }

}

  //function happens on pageLoad and checks what genre to show
  function loadFilm () {
    console.log('page loaded')

    
    //make board based on a user's selection. if the selection has not been chosen or the it's the user's first time, default and setcookie to classic
    if(genre=='horror'){ 
        advType.selectedIndex =1
        console.log('show horror')
    }
    else{
        console.log('show classic')
        setCookie('advType','classic',30)
    }
 let allDoors= checkCounter()  //this function will return either adventDaysCounter which will be either an empty array or array full of previously checked days 
showOpenDoors(allDoors)
popUpInfo()
}

function popUpInfo(){
  elements= document.querySelectorAll('.movieImg');
  let clickEvent = (e) => {
    console.log(e)
    let str=e.srcElement.attributes.id.nodeValue
   str = str.replace('movieImg-','')
   console.log(str)

let popup= document.getElementById('popup-container')


  let popupImg=popup.children[0].childNodes[3].childNodes[1].childNodes[1]
popupImg.src=e.target.currentSrc;
let popupTitle = popup.children[0].childNodes[3].children[1].children[0].innerText=`${horror[str-1].movie}`
console.log(popupTitle)
    popup.style.visibility='visible'

}


elements.forEach((item) => {
item.addEventListener('click', clickEvent)
});
let close = document.querySelector('#closeBtn');
let closeEvent = () => {
document.getElementById('popup-container').style.visibility='hidden'
}
close.addEventListener('click', closeEvent)
}

//checkCounter will look at the cookies to see if the user has previously opened a day. If yes, then the funciton will return convertCounter
  function checkCounter(){
    if(checkCookie('adventDays')){
    console.log('days have been created')
    return convertCounter()
  }
else{
  console.log('new counter will need to be created')
  return createCounter()
}
}
;

function convertCounter(){
console.log('check cookie and convert into array')
let adventDaysCounter = checkCookie('adventDays');
adventDaysCounter = adventDaysCounter.split('|').map(Number);
return adventDaysCounter;
}

function createCounter(){
  let adventDaysCounter =[] 
  return adventDaysCounter; //should i just return []
}

function showOpenDoors(allDoors){
  //for all doors that have previously been opened, show image
  console.log(`testing function to see if it works ${allDoors}`)
let i = 0;
while (i<allDoors.length) {
  loop(i);
  i++
}

function loop(i){
  setTimeout(function(){
    document.getElementById(`day${[allDoors[i]]}`).parentElement.classList.toggle("doorOpen");
  }, 200 * i)
}


}


  //getCookie function based on advType
  function checkCookie(cname){
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

      //setCookie
      function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }





function updateCounter(dayNo){ //specify wht counter is for
  let adventDaysCounter= checkCounter();
    if(!adventDaysCounter.includes(dayNo)){
    adventDaysCounter.push(dayNo);
    adventDaysCounter.sort(function(a, b){return a-b});
    console.log(adventDaysCounter)
    updateCookie(adventDaysCounter)
}
else{
    console.log('value is already in there')
}
}
      function updateCookie(adventDaysCounter){
        let updated = adventDaysCounter.join('|')
        setCookie('adventDays', updated, 30)
      }
  
//change of dropdown option
advType.addEventListener('change',()=>{
    if (advType.selectedIndex != 0){
        console.log('updated to horror')
        setCookie('advType','horror',30)

    }
         else{
        console.log('updated to classical')
        setCookie('advType','classic',30)
    
         }
        
     })
     
function checkDoor(day){
let dayNo = parseInt(day.innerText)
if(checkCookie('advType') =='horror'){
    console.log('Show data for hor:' + horror[dayNo -1].movie)
    updateCounter(dayNo)
    } else{
        console.log('Show data for clas:' + classic[dayNo -1].movie)
    }

}


// www.cssscript.com/winter-snow-animation/§
const snowflake = new SnowflakeJs(frames=25, count=50, lifetime=100, maxSpeed=3, maxSize=25);X
snowflake.init();


function createCard(){


}
// appCal.insertAdjacentHTML("beforeend",`<div class ='backDoor'><div class ='tapeOff'></div>
//   <img class='movieImg' src="https://m.media-amazon.com/images/M/MV5BNmE5NWQyYjktMmMzYi00YjY2LWFmNTUtMWQyMzcwNWM2NWYzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg"/><div class ='day'>
//   <div id='day${day}'><div class ='tapeOn'></div>${day}</div></div></div>`)



