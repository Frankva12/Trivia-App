//traemos el codigo de la pagina que manipularemos con DOM
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
const back = document.querySelector(".return")
const error = document.querySelector(".error")
const small = document.querySelector("small");
const welcome = document.querySelector(".welcome");
const welcomeText = document.querySelector(".welcome-text")
const buttonWelcome = document.querySelector(".button-welcome")

//generamos una variable para el nombre de usuario
let UserName = "";
//metodo para uso de textbox con respecto al nombre de usuario
buttonName.addEventListener("click", function () {
    if (textName.value == '') {
        textName.classList.add('error');
        small.classList.remove('hide');
        small.innerText = "Por favor ingrese un nombre";
    } else {
        UserName = textName.value;
        help.classList.add("hide");
        startName.classList.add("hide");
        welcome.classList.remove("hide");
        welcomeText.innerText = "Bienvenido " + UserName;
    }
})

//boton para avanzar hacia las categorias
buttonWelcome.addEventListener("click", function () {
    welcome.classList.add("hide");
    ShowCategories();
})


//funcion para mostrar las imagenes de las categorias
function ShowCategories() {
    startName.classList.add("hide")
    help.classList.add("hide");
    categories.classList.remove("hide");
}

//segun cada imagen asi se selecciona la categoria mandando un parametro acorde a este (1) deportes
imageCategories[0].addEventListener("click", function () {
    ShowQuestions(1, 0);
})
//segun cada imagen asi se selecciona la categoria mandando un parametro acorde a este (2) cine
imageCategories[1].addEventListener("click", function () {
    ShowQuestions(2, 0);
})
//funcion para generar posiciones de preguntas aleatorias
function shuffle(array) {
    return array.sort(() => {
        return Math.random() - 0.5
    })
}

//metodo para mostrar las preguntas con sus respectivas respuestas 
function ShowQuestions(categorie, i) {
    let container = "";
    let respuestasRandom;
    categories.classList.add("hide");
    questions.classList.remove("hide");
    if (categorie === 1) {
        questionTitle.innerText = questionSports[i].question;
        respuestasRandom = shuffle(questionSports[i].answers);
        respuestasRandom.forEach(respuesta => {
            container += `
            <p class="answer" onclick="CountPoints(${categorie}, ${respuesta.correct}, ${i})"> ${respuesta.text}</p>`
        });
        answers.innerHTML = container;
        i++;
    } else if (categorie === 2) {
        let container = "";
        questionTitle.innerText = questionMovies[i].question;
        respuestasRandom = shuffle(questionMovies[i].answers)
        respuestasRandom.forEach(respuesta => {
            container += `
            <p class="answer" onclick="CountPoints(${categorie}, ${respuesta.correct}, ${i})"> ${respuesta.text}</p>`
        });
        answers.innerHTML = container;
        i++
    }
}

//definimos la variables que usaremos para la puntuación
let puntaje = 0;
//funcion para contar los puntos que se adquirieron en las preguntas
function CountPoints(categorie, respuesta, index) {
    console.log(categorie, respuesta, index)
    if (respuesta) {
        puntaje = puntaje + 10;
    }
    index++;
    if (index < 4) {
        ShowQuestions(categorie, index);
    } else {
        questions.classList.add("hide");
        finalScore.classList.remove("hide");
        //mensaje segun puntaje
        if (puntaje <= 10) {
            namePoint.innerHTML = "!Sigue intentado! <br>"
            point.innerHTML = UserName + " obtuviste una puntuación de " + puntaje + " espero te hayas divertido. :)";
        } else if (puntaje <= 20) {
            namePoint.innerHTML = "!Ya casi lo dominas! <br>"
            point.innerHTML = UserName + " obtuviste una puntuación de " + puntaje + " espero te hayas divertido. :)";
        } else {
            namePoint.innerHTML = "!Felicidades! <br>"
            point.innerHTML = UserName + " obtuviste una puntuación de " + puntaje + " espero te hayas divertido. :)";
        }
        //reseteamos los contadores
        index = 0;
        puntaje = 0;
        textName.value = "";
    }
}
//boton de regreso para regresar al principio
back.addEventListener("click", function () {
    finalScore.classList.add("hide");
    startName.classList.remove("hide")
    help.classList.remove("hide");
})

//base de datos para preguntas de deportes
const questionSports = [{
        question: '¿Quién fue el boxeador más joven de la historia en conseguir un título mundial de los pesos pesados?',
        answers: [{
                text: 'Mohammed Alli',
                correct: false
            },
            {
                text: 'Mike Tyson',
                correct: true
            },
            {
                text: 'Canelo Alvarez',
                correct: false
            },
            {
                text: 'Rocky',
                correct: false
            }
        ]
    },
    {
        question: '¿A quién se otorga el Balón de Oro?',
        answers: [{
                text: 'Al jugador con más goles',
                correct: false
            },
            {
                text: 'Al mejor gol',
                correct: false
            },
            {
                text: 'Al mejor equipo',
                correct: false
            },
            {
                text: 'Al mejor jugador',
                correct: true
            }
        ]
    }, {
        question: '¿En qué equipo jugó Carles Puyol durante su carrera como futbolista?',
        answers: [{
                text: 'FC Barcelona',
                correct: true
            },
            {
                text: 'Sao Paulo',
                correct: false
            },
            {
                text: 'Real Madrid',
                correct: false
            },
            {
                text: 'Villareal',
                correct: false
            }
        ]
    }, {
        question: '¿Qué jugador de fútbol ha ganado más copas del mundo?',
        answers: [{
                text: 'Maradona',
                correct: false
            },
            {
                text: 'Manuel Never',
                correct: false
            },
            {
                text: 'Pele',
                correct: true
            },
            {
                text: 'Thomas Muller',
                correct: false
            }
        ]
    }
]

//base de datos de preguntas de cine
const questionMovies = [{
        question: '¿Cuál es la película más taquillera de la historia?',
        answers: [{
                text: 'Avatar',
                correct: false
            },
            {
                text: 'Avengers: EndGame',
                correct: true
            },
            {
                text: 'Titanic',
                correct: false
            },
            {
                text: 'Avengers: Infinity War',
                correct: false
            }
        ]
    },
    {
        question: '¿Cuántas películas conforman la saga cinematográfica Harry Potter?',
        answers: [{
                text: '3',
                correct: false
            },
            {
                text: '5',
                correct: false
            },
            {
                text: '7',
                correct: false
            },
            {
                text: '8',
                correct: true
            }
        ]
    }, {
        question: '¿Qué actor da vida a Batman de Christopher Nolan? ',
        answers: [{
                text: 'Chris Bale',
                correct: true
            },
            {
                text: 'Leonardo DiCaprio',
                correct: false
            },
            {
                text: 'Morgan Freeman',
                correct: false
            },
            {
                text: 'Henry Cavil',
                correct: false
            }
        ]
    }, {
        question: '¿Por qué película ganó Leonardo DiCaprio su primer Óscar? ',
        answers: [{
                text: 'Titanic',
                correct: false
            },
            {
                text: 'El lobo de Wall Street',
                correct: false
            },
            {
                text: 'El hombre de la mascara',
                correct: true
            },
            {
                text: 'El renacido',
                correct: false
            }
        ]
    }
]