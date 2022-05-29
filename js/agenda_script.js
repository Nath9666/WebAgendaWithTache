var Tableau = document.getElementById("tableau_agenda")

class Tache{
    constructor(name=String,type=String,dateDebut=date,dateFin=date,categorie=String){
      this.name=name
      this.type=type
      this.dateDebut=dateDebut
      this.dateFin=dateFin
      this.categorie=categorie
    }
}


const date = new Date();
var dateMaintenant = document.querySelector(".date p")
const Aujourd = new Date()

const renderCalendarMois=()=>{
    date.setDate(1)


const monthdays= document.querySelector('.days')
monthdays.textContent=""

const lastDay = new Date(date.getFullYear(), date.getMonth()+1,0).getDate()

const prevLastDay = new Date(date.getFullYear(), date.getMonth(),0).getDate()

const firstDayIndex = date.getDay()

const lastDayIndex=new Date(date.getFullYear(), date.getMonth()+1,0).getDay()

const nextDays = 7-lastDayIndex-1;

const months=[
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
]


var Mois = document.querySelector(".date h3")
Mois.textContent=months[date.getMonth()]+" "+date.getFullYear()
var dateMaintenant = document.querySelector(".date p")
dateMaintenant.textContent="Aujourd'hui : "+Aujourd.getDate()+"/"+(Aujourd.getMonth()+1)+"/"+Aujourd.getFullYear()

let days =""


for(let x =  firstDayIndex;x>0;x--){
    var evenet = taksDate(new Date((prevLastDay-x+1),date.getMonth(),date.getFullYear()),tasks)
    var divAajouter = document.createElement('div')
    divAajouter.classList.add("prev-date")
    divAajouter.textContent=(prevLastDay-x+1)
    monthdays.appendChild(divAajouter)
}

for (let i=1;i<=lastDay;i++){
    var evenet = taksDate(new Date(date.getFullYear(),date.getMonth(),i),tasks)
    var divAajouter = document.createElement('div')
    if(i==Aujourd.getDate() && date.getMonth() ==Aujourd.getMonth() && date.getFullYear()==Aujourd.getFullYear()){
        divAajouter.classList.add("today")
    }
    divAajouter.textContent=i
    if(evenet.length!=0){
        evenet.forEach(element => {
            colorEvent(element,divAajouter)
        });
    }
    monthdays.appendChild(divAajouter)
}

for(let j=1;j<=nextDays;j++){
    var divAajouter = document.createElement('div')
    divAajouter.classList.add("nextday")
    divAajouter.textContent=j
    monthdays.appendChild(divAajouter)
}

//monthdays.innerHTML=days;
}


document.getElementById("next").addEventListener("click",()=>{
    date.setMonth(date.getMonth()+1)
    renderCalendarMois()
})

document.getElementById("before").addEventListener("click",()=>{
    date.setMonth(date.getMonth()-1)
    renderCalendarMois()
})

dateMaintenant.addEventListener("click",()=>{
    date.setMonth(Aujourd.getMonth())
    date.setFullYear(Aujourd.getFullYear())
    renderCalendarMois()
})

var tasks=JSON.parse(data)


renderCalendarMois()


function taksDate(date,listetask){
    var retourner = []
    listetask.forEach(element => {
        var elemtn = new Tache(element.name,element.type,element.dateDebut,element.dateFin,element.categorie)
        var Taskdate = new Date(element.dateDebut)
        if(date.getDate()==Taskdate.getDate() && date.getMonth()==Taskdate.getMonth() && date.getFullYear()==Taskdate.getFullYear()){
            retourner.push(elemtn)
        }
    });
    return retourner
}

function colorEvent(tache,contenu){
    console.log(tache.categorie)
    if (tache.categorie=="Maison") {
        contenu.style.backgroundColor="green"
    }else{
        contenu.style.backgroundColor="blue"
    }
}
