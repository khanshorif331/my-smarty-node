const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
	res.send('hello from my global into the ocean smaty smarty pant!!')
})

const users = [
	{ id: 1, name: 'Sabana', email: 'shabana@gmail.com', phone: '01788888888' },
	{
		id: 2,
		name: 'Shabnoor',
		email: 'Shabnoor@gmail.com',
		phone: '01788888888',
	},
	{
		id: 3,
		name: 'Suchorita',
		email: 'Suchorita@gmail.com',
		phone: '01788888888',
	},
	{ id: 4, name: 'suconda', email: 'suconda@gmail.com', phone: '01788888888' },
	{
		id: 5,
		name: 'srabonti',
		email: 'srabonti@gmail.com',
		phone: '01788888888',
	},
	{ id: 6, name: 'sabilaa', email: 'sabilaa@gmail.com', phone: '01788888888' },
	{ id: 7, name: 'sohana', email: 'sohana@gmail.com', phone: '01788888888' },
]

app.get('/users', (req, res) => {
	// filter by search  query parameter
	if (req.query.name) {
		const search = req.query.name.toLowerCase()
		const matched = users.filter(user =>
			user.name.toLowerCase().includes(search)
		)
		res.send(matched)
	} else {
		res.send(users)
	}
	console.log('query', req.query)
})

app.get('/user/:id', (req, res) => {
	const id = parseInt(req.params.id)
	const user = users.find(user => user.id === id)
	res.send(user)
})

app.post('/user', (req, res) => {
	console.log('req', req.body)
	const user = req.body
	user.id = users.length + 1
	users.push(user)
	res.send(user)
})

app.get('/fruits', (req, res) => {
	res.send(['mango', 'apple', 'oranges'])
})

app.get('/fruits/mango/fazzle', (req, res) => {
	req.send('sour sour fazle fazle')
})

app.listen(port, () => {
	console.log('Listening to port', port)
})
