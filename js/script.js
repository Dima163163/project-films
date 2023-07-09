'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++){
	const lastFilms = prompt('Один из просмотренных филмов?', '');
	const raitingFilms = prompt('На сколько оцените его?', '');

	if(lastFilms != null && raitingFilms != null && lastFilms != '' && raitingFilms != '' && lastFilms.length < 50){
		personalMovieDB.movies[lastFilms] = raitingFilms;
	} else {
		i--
	}
};


if (personalMovieDB.count < 10){
	console.log("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
	console.log("Вы классический зритель");
} else if(personalMovieDB.count >= 30){
	console.log("Вы классический зритель");
} else {
	console.log("Произошла ошибка");
}

console.log(personalMovieDB)
