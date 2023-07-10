'use strict';

let numberOfFilms;

function start () {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while(numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms) || numberOfFilms === 0){
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start()

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


function rememberMyFilms () {
	for (let i = 0; i < 2; i++){
		const lastFilms = prompt('Один из просмотренных филмов?', '');
		const raitingFilms = prompt('На сколько оцените его?', '');

		if(lastFilms != null && raitingFilms != null && lastFilms != '' && raitingFilms != '' && lastFilms.length < 50){
			personalMovieDB.movies[lastFilms] = raitingFilms;
		} else {
			i--
		}
	};
}

rememberMyFilms();

function writeYourGeners() {
	for(let i = 1 ; i <= 3; i++ ){
		const genersOfFilms = prompt(`Ваш любимый жанр под номером ${i}`, '')
		personalMovieDB.genres = [
			...personalMovieDB.genres,
			genersOfFilms
		]
	}
}

writeYourGeners()

function detectPersonalLevel() {
	if (personalMovieDB.count < 10){
		console.log("Просмотрено довольно мало фильмов");
	} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
		console.log("Вы классический зритель");
	} else if(personalMovieDB.count >= 30){
		console.log("Вы классический зритель");
	} else {
		console.log("Произошла ошибка");
	}
}

detectPersonalLevel()

function showMyDB(hidden) {
	
	if(!hidden){
		console.log(personalMovieDB)
	}
}
showMyDB(personalMovieDB.privat)



