const textName = document.querySelector(".name");
const buttonName = document.querySelector(".button-name")
const categories = document.querySelector(".categories")
const categoriesText = document.querySelector(".categories-text")
const startName = document.querySelector(".start-name")
const help = document.querySelector(".help")
const questions = document.querySelector(".questions")
const questionTitle = document.querySelector(".question")
const answer = document.querySelector(".answer")
const imageCategories = document.querySelector(".images")

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

 imageCategories.addEventListener("click", function(){
    if (categoriesText.classList.contains ="Películas") {
        ShowQuestions(1);
    }else if(categoriesText.classList.contains ="Deportes"){
        ShowQuestions(2);
    }
 })

 function ShowQuestions(categorie){
    categories.classList.add("hide");
    questions.classList.remove("hide");
    if (categorie == 1) {
        console.log(question)
        questionTitle.innerText = question[0].question;
        question[0].answers.forEach(respuesta => {
            console.log(respuesta);
         answer.innerText = question[1].text;
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
        });
     }
 }
//Preguntas para categoria Deportes
let QuestionsSports = new Object();
QuestionsSports.First = '¿Quién fue el boxeador más joven de la historia en conseguir un título mundial de los pesos pesados?';
QuestionsSports.Second = '¿En qué equipo jugó Carles Puyol durante su carrera como futbolista?';
QuestionsSports.Third = '¿Qué jugador de fútbol ha ganado más copas del mundo?';
QuestionsSports.Four = '¿A quién se otorga el Balón de Oro?';
//Primera pregunta



const question = [
    { 
    question: '¿Quién fue el boxeador más joven de la historia en conseguir un título mundial de los pesos pesados?',
    answers:[
        { text: 'Mohammed Alli', correct: false },
        { text: 'Mike Tyson', correct: true},
        { text: 'Canelo Alvarez', correct: false},
        { text: 'Rocky', correct: false}
        ]
    }       
]
/*
AnswersSportsFirst.Correct = 'Mike Tyson'
AnswersSportsFirst.Wrong = 'Canelo Alvarez'
AnswersSportsFirst.Wrong = 'Rocky'*/
//Segunda pregunta
let AnswersSportsSecond = new Object()
AnswersSportsSecond.Correct = 'FC Barcelona'
AnswersSportsSecond.Wrong = 'Sao Paulo'
AnswersSportsSecond.Wrong = 'Real Madrid'
AnswersSportsSecond.Wrong = 'Villareal'
//Tercera pregunta
let AnswersSportsThird = new Object()
AnswersSportsSecond.Wrong1 = 'Maradona'
AnswersSportsSecond.Wrong2 = 'Manuel Never'
AnswersSportsSecond.Correct = 'Pele'
AnswersSportsSecond.Wrong3 = 'Thomas Muller'
//Cuarta pregunta
let AnswersSportsFourth = new Object()
AnswersSportsSecond.Wrong1 = 'Al jugador con más goles'
AnswersSportsSecond.Wrong2 = 'Al mejor gol'
AnswersSportsSecond.Wrong3 = 'Al mejor equipo'
AnswersSportsSecond.Correct = 'Al mejor jugador'

//Preguntas para categoria Peliculas
let QuestionsMovies = new Object();
QuestionsMovies.First = '¿Cuál es la película más taquillera de la historia?';
QuestionsMovies.Second = '¿Cuántas películas conforman la saga cinematográfica Harry Potter?';
QuestionsMovies.Third = '¿Qué actor da vida a Batman de Christopher Nolan? ';
QuestionsMovies.Four = '¿Por qué película ganó Leonardo DiCaprio su primer Óscar? ';
//Primera pregunta
let AnswersMoviesFirst = new Object();
AnswersMoviesFirst.Correct = 'Avengers: EndGame'
AnswersMoviesFirst.Wrong1 = 'Avatar'
AnswersMoviesFirst.Wrong2 = 'Titanic'
AnswersMoviesFirst.Wrong3 = 'Avengers: Infinity War'
//Segunda pregunta
let AnswersMoviesSecond = new Object()
AnswersMoviesSecond.Wrong2 = '3'
AnswersMoviesSecond.Wrong1 = '5'
AnswersMoviesSecond.Correct = '8'
AnswersMoviesSecond.Wrong3 = '4'
//Tercera pregunta
let AnswersMoviesThird = new Object()
AnswersMoviesSecond.Wrong1 = 'Leonardo DiCaprio'
AnswersMoviesSecond.Correct = 'Chris Bale'
AnswersMoviesSecond.Wrong2 = 'Morgan Freeman'
AnswersMoviesSecond.Wrong3 = 'Henry Cavil'
//Cuarta pregunta
let AnswersMoviesFourth = new Object()
AnswersMoviesSecond.Wrong1 = 'Titanic'
AnswersMoviesSecond.Wrong2 = 'El lobo de Wall Street'
AnswersMoviesSecond.Wrong3 = 'El hombre de la mascara'
AnswersMoviesSecond.Correct = 'El renacido'
