const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Usamos body-parser para que el cuerpo de los requests de HTTP sea procesado por express
app.use(bodyParser.urlencoded({ extended: false }))

// Hacer que Jade sea el "Template Engine" de nuestro servidor
app.set('view engine', 'jade')
app.set('views', `${__dirname}/views`)

// Entregar la página encuesta
app.get('/encuesta', (req, res) => {
  res.render('encuesta')
})

// Ruta usada por el cliente para enviar la data del formulario con un POST request
app.post('/responder_encuesta', (req ,res) => {
  console.log(req.body)
  res.send("Gracias por responder la encuesta")
})

// Parámetros de Ruta
// Ejemplo: http://localhost:3000/autores/gabriel/cienañosdesoledad
app.get('/autores/:autor/:libro', function(req, res) {
  res.send(`Autor ${req.params.autor}, libro ${req.params.libro}`)
})

// Parámetros del Query String
// Ejemplo: http://localhost:3000/?nombre=petra
app.get('/', (req, res) =>  {
  res.send(`Hola ${req.query.nombre || 'anónimo'}, soy un servidor!`)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})