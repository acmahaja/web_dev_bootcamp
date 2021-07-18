const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
	.then(()=>{
		console.log("Connection Open!!!")
	})
	.catch(()=>{
		console.log("ERROR:");
		console.log(err);
	})

// mongoose.connection.dropDatabase()
// 	.then(()=>{
// 		console.log("dropeed movieApp ")
// 	})

const movieSchema = new mongoose.Schema({
	title: String,
	year: Number,
	score: Number,
	rating: String
})

const Movie = mongoose.model('Movie', movieSchema);
Movie.find({}).then(data=>console.log(data))


// const amadeus = new Movie({
// 	title: 'Amadeus',
// 	year: 1986,
// 	score: 9.2,
// 	rating: 'R'
// })


// Movie.insertMany([
// 	{ title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
// 	{ title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
// 	{ title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
// 	{ title: 'Stand by Me', year: 1986, score: 8.6, rating: 'R' },
// 	{ title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' },
// ]).then((data)=>{
// 	console.log("IT WORKED!");
// 	return;
// 	// console.log(data);
// })




//const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection:error'));
//db.once('open', ()=>{
//	// we're connected
//	console.log("CONNECTION OPEN!!!")
//})

Movie.findById('60f2b379cc57e371859edd6d').then(m => console.log(m))

// Movie.updateOne({ title: 'Amelie', year: 2020}).then(res => console.log(res))
// Movie.updateMany({ title: { $in: ['Amelie', 'Stand by Me'] } }, {score: 10  }).then(res => console.log(res))
Movie.findOneAndUpdate({ title: 'The Iron Giant'}, {score: 11.0}).then(m => console.log(m))

Movie.remove({title: 'Amelie'}).then(msg => console.log(msg))
Movie.deleteMany({year: {$gte:1999}}).then(msg => console.log(msg));
Movie.findOneAndDelete({title: 'Alien'}).then(m => console.log(m))