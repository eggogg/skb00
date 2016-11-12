import express from 'express';
import cors from 'cors';

const app = express();
const re = new RegExp('@?(https?:)?(\/\/)?(www.)?((telegram|vk|twitter|github)[^\/]*\/)?([a-zA-Z0-9\.]*)','i');

app.use(cors());

app.get('/', (req,res) => {
	res.json({
		hello: 'JS World',
	});
});

app.get('/task2a', (req, res) => {
	const sum = (+req.query.a || 0) + (+req.query.b || 0);
	res.send( sum.toString());
});

app.get('/task2b', (req, res) => {
	const arr = req.query.fullname.split(" ");
	if (arr.length == 1) {
		res.send(arr[0]);
	}
	else if (arr.length == 2) {
		res.send(arr[1] + ' ' + arr[0][0] + '.');
	}
	else if (arr.length == 3) {
		res.send(arr[2] + ' ' + arr[0][0] + '. ' + arr[1][0] + '.');
	}
	else res.send('Invalid fullname');
});

app.get('/task2c', (req,res) => {
//	const username = req.query.username; 
	const username = req.query.username.match(re)[6];
//	return '@' + username;
	res.send('@' + username);
});


app.listen(3000, () => {
	console.log('Example app listening on port 3000');
})

