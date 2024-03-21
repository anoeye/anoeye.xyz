const path = require('path');
const express = require('express');
const { request } = require('http');

const app = express();

app.use('',express.static(path.join(__dirname, 'assets')));

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});

app.get('/imprint', (request, response) => {
	return response.sendFile('imprint/index.html' , { root: '.' })
})

app.all('*', (req, res) => {
	res.status(404).sendFile('404/index.html', { root: '.' })
})

const port = '3000';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
