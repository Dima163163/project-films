'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		while(this.count === '' || this.count === null || isNaN(this.count) || this.count === 0){
			this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++){
			const lastFilms = prompt('Один из просмотренных филмов?', '').trim();
			const raitingFilms = prompt('На сколько оцените его?', '');

			if(lastFilms != null && raitingFilms != null && lastFilms != '' && raitingFilms != '' && lastFilms.length < 50){
				personalMovieDB.movies[lastFilms] = raitingFilms;
			} else {
				i--
			}
		};
	},
	writeYourGeners: function () {
		for(let i = 1 ; i <= 3; i++ ){
			const geners = prompt(`Ваш любимый жанр под номером ${i}`, '')
			if(geners === '' || geners === null){
				i--
			}else {
				personalMovieDB.genres = [
					...personalMovieDB.genres,
					geners
				]
			}
		}
		personalMovieDB.genres.forEach((item, index) => {
			console.log(`Любимый жанр ${index + 1} - это ${item}`)
		})
	},
	detectPersonalLevel: function () {
		if (this.count < 10){
			console.log("Просмотрено довольно мало фильмов");
		} else if(this.count >= 10 && this.count < 30){
			console.log("Вы классический зритель");
		} else if(this.count >= 30){
			console.log("Вы классический зритель");
		} else {
			console.log("Произошла ошибка");
		}
	},
	toggleVisibleMyDb: function(){
		if(this.privat){
			this.privat = false
		} else {
			this.privat = true
		}
		console.log(this)
	},
	showMyDB: function (hidden) {
		if(!hidden){
			console.log(this)
		}
	},
	logger: function(){
		this.start();
		this.rememberMyFilms();
		this.writeYourGeners();
		this.detectPersonalLevel();
		this.toggleVisibleMyDb(this.privat);
		this.showMyDB(this.privat)
	}
};

personalMovieDB.logger()

