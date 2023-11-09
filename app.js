let appCal = document.querySelector('#app-calendar')
for (let day = 1; day <= 24; day +=1){
  appCal.insertAdjacentHTML("beforeend",`<div class ='day'> <div class ='tapeOff'></div>
  <div id='day${day}'><div class ='tapeOn'></div>${day}</div></div>`)
  

  // appCal.insertAdjacentHTML("beforeend",`<div class ='day' id='day${day}'><div class ='tapeOn'></div>
  // ${day}</div>`)

 
  // appCal.insertAdjacentHTML("beforeend",`<div class ='backDoor'> <div class ='tapeOff'> </div>
  // <div class ='day' id='day${day}'><div class ='tapeOn'></div>
  // ${day}</div></div>`)
  

}

let day = document.querySelectorAll('.day')
day.forEach(function (i) {
    i.addEventListener('click', function(){
        console.log('You clicked Day: ' + i.id)
        checkDoor(i)

}
    );
  });

  let advType= document.querySelector('#advType')
  window.addEventListener('load',loadFilm)
 
  //on pageLoad, check what theme to show
  function loadFilm () {
    console.log('page loaded')

    //make board
    checkCookie('advType')
    if(checkCookie('advType') =='horror'){
        advType.selectedIndex =1
        console.log('show horror')
    }
    else{
        console.log('show classic')
        setCookie('advType','classic',30)
    }
  checkCounter()
  }


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

function convertCounter(){
console.log('check cookie and convert into array')
let adventDaysCounter = checkCookie('adventDays');
adventDaysCounter = adventDaysCounter.split('|').map(Number);
return adventDaysCounter;
}

function createCounter(){
  let adventDaysCounter =[] 
  return adventDaysCounter;
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




// let adventDaysCounter =[] 

function updateCounter(dayNo){
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
// advType.options[advType.selectedIndex].value

// www.cssscript.com/winter-snow-animation/
// const snowflake = new SnowflakeJs(25,50,100,3,25);
const snowflake = new SnowflakeJs(frames=25, count=50, lifetime=100, maxSpeed=3, maxSize=25);X
snowflake.init();

// const snowflake = new SnowflakeJs(frames=25, count=50, lifetime=5000, maxSpeed=4, maxSize=15);X


//toggle door
var element = document.querySelector(".day");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}