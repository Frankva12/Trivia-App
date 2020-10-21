const textName = document.querySelector(".name");
const buttonName = document.querySelector(".button-name")
const categories = document.querySelector(".categories")
const categoriesText = document.querySelector(".categories-text")
const startName = document.querySelector(".start-name")
const help = document.querySelector(".help")
const questions = document.querySelector(".questions")
const questionTitle = document.querySelector(".question")
const answers = document.querySelector(".answers")
const imageCategories = document.querySelectorAll(".images")
const point = document.querySelector(".number-point")
const namePoint = document.querySelector(".name-point")
const finalScore = document.querySelector(".final-points")
const Back = document.querySelector(".return")

let nombreUsuario;
buttonName.addEventListener("click" ,function(){
    if (textName.value == '') {
        alert("Por favor no deje espacios en blanco en su nombre")
    }else{
        nombreUsuario = textName.value;
        alert("Bienvenido " + nombreUsuario);
        ShowCategories();
    }
 })

 function ShowCategories(){
    startName.classList.add("hide")
    help.classList.add("hide");
    categories.classList.remove("hide");
 }

 imageCategories[0].addEventListener("click", function(){
    ShowQuestions(1,0);
 })
 imageCategories[1].addEventListener("click", function(){
    ShowQuestions(2,0);
})
 function ShowQuestions(categorie, i){
    categories.classList.add("hide");
    questions.classList.remove("hide");
    if (categorie === 1) {
        questionTitle.innerText = questionSports[i].question;
        let container = "";
        (questionSports[i].answers).forEach(respuesta => {
            container += `
            <p class="answer" onclick="CountPoints(${categorie}, ${respuesta.correct}, ${i})"> ${respuesta.text}</p>`
        });
        answers.innerHTML = container;
        i++;
   } else if(categorie === 2){
        questionTitle.innerText = questionMovies[i].question;
        let container = "";
        (questionMovies[i].answers).forEach(respuesta => {
            container += `
            <p class="answer" onclick="CountPoints(${categorie}, ${respuesta.correct}, ${i})"> ${respuesta.text}</p>`
        });
        answers.innerHTML = container;
        i++
     }
 }

 
 let puntaje = 0, puntajeTotal = 0;

 function CountPoints(categorie, respuesta, index){
    console.log(categorie, respuesta, index)
        if (respuesta) {
            puntaje = puntaje + 10;
        }
        index++;
        if (index<4) {
            ShowQuestions(categorie, index);
        }else {
            questions.classList.add("hide");
            finalScore.classList.remove("hide");
            namePoint.innerHTML = "!Felicidades! <br>"
            point.innerHTML = nombreUsuario + " obtuviste una puntuación de " + puntaje + " espero te hayas divertido. :)";
            index = 0;
            puntaje = 0;
            nombreUsuario = "";
        }
 }

 Back.addEventListener("click", function(){
    finalScore.classList.add("hide");
    startName.classList.remove("hide")
    help.classList.remove("hide");  
 })

const questionSports = [
    { 
    question: '¿Quién fue el boxeador más joven de la historia en conseguir un título mundial de los pesos pesados?',
    answers:[
        { text: 'Mohammed Alli', correct: false },
        { text: 'Mike Tyson', correct: true},
        { text: 'Canelo Alvarez', correct: false},
        { text: 'Rocky', correct: false}
        ]
    },
    {
        question: '¿A quién se otorga el Balón de Oro?' ,
        answers:[
            {text: 'Al jugador con más goles', correct:false},
            {text: 'Al mejor gol', correct: false},
            {text: 'Al mejor equipo', correct: false},
            {text: 'Al mejor jugador', correct: true}
        ]      
    }, {
        question: '¿En qué equipo jugó Carles Puyol durante su carrera como futbolista?' ,
        answers:[
            {text: 'FC Barcelona', correct:true},
            {text: 'Sao Paulo', correct: false},
            {text: 'Real Madrid', correct: false},
            {text: 'Villareal', correct: false}
        ]      
    }, {
        question: '¿Qué jugador de fútbol ha ganado más copas del mundo?' ,
        answers:[
            {text: 'Maradona', correct:false},
            {text: 'Manuel Never', correct: false},
            {text: 'Pele', correct: true},
            {text: 'Thomas Muller', correct: false}
        ]      
    }
]


const questionMovies = [
    { 
    question: '¿Cuál es la película más taquillera de la historia?',
    answers:[
        { text: 'Avatar', correct: false },
        { text: 'Avengers: EndGame', correct: true},
        { text: 'Titanic', correct: false},
        { text: 'Avengers: Infinity War', correct: false}
        ]
    },
    {
        question: '¿Cuántas películas conforman la saga cinematográfica Harry Potter?' ,
        answers:[
            {text: '3', correct:false},
            {text: '5', correct: false},
            {text: '7', correct: false},
            {text: '8', correct: true}
        ]      
    }, {
        question: '¿Qué actor da vida a Batman de Christopher Nolan? ' ,
        answers:[
            {text: 'Chris Bale', correct:true},
            {text: 'Leonardo DiCaprio', correct: false},
            {text: 'Morgan Freeman', correct: false},
            {text: 'Henry Cavil', correct: false}
        ]      
    }, {
        question: '¿Por qué película ganó Leonardo DiCaprio su primer Óscar? ' ,
        answers:[
            {text: 'Titanic', correct:false},
            {text: 'El lobo de Wall Street', correct: false},
            {text: 'El hombre de la mascara', correct: true},
            {text: 'El renacido', correct: false}
        ]    
    }
]