


var form = document.querySelector('.form-quizz');
var lesReponses = [];
var emojit = ["🙃", "✔️", "✔️", "✔️", "✔️"]
var resultatsValide = ["b", "a", "a", "b"]
var reponse = []
var resultats = document.querySelector('.resultats h2');
var texte_note = document.querySelector('.note');
var texte_aide = document.querySelector('.aide');
var bloque_de_question = document.querySelectorAll('.bloque-de-question');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    for (let i = 1; i < 5; i++) {
        lesReponses.push(document.querySelector(`input[name="r${i}"]:checked`).value);
    }

    console.log(lesReponses);



    for (let i = 0; i < 4; i++) {

        if (lesReponses[i] === resultatsValide[i]) {

            reponse.push(true);
        }
        else {
            reponse.push(false);
        }

    }

    lesReponses = [];

    console.log(reponse);

    const nombreDeReponseNonValide = reponse.filter(el => el !== true).length;
    console.log(nombreDeReponseNonValide);






    switch (nombreDeReponseNonValide) {
        case 4:

            resultats.textContent = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
            texte_note.textContent = "5/5";
            texte_aide.textContent = "a tu as de la chance ! ";
            break;
        default:
            break;
    }



    for (let i = 0; i < 4; i++) {

        if (reponse[i] === false) {

            bloque_de_question[i].classList.add('echec');
            bloque_de_question[i].style.backgroundColor = 'red';

            setTimeout(() => {
                bloque_de_question[i].classList.toggle('echec');


            }, 500);

        }

        else {

            bloque_de_question[i].classList.remove('echec');
            bloque_de_question[i].style.backgroundColor = 'pink';

        }

    }


    reponse = []


});

