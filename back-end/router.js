//External imports
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
// const io = require('socket.io').listen(server)
// const ent = require('ent') 
// Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)

//Internal imports
const router = express.Router()

/* View engine => ejs */
let app = express()
app.set('view engine', 'ejs') 


app.use(bodyParser.json({type: 'application/json' }))

router.route('/').get(function(request, response) {
    response.send('Hello World')
})

router.route('/news').get(function(request, response) {
    const news = [{'title':1}]    
    response.send(news)
})

router.route('/comments').get(function(request, response) {

    var url = 'https://newsapi.org/v2/top-headlines?sources=xinhua-net&apiKey=254bfa5fec6f4da49ae9a229157697a0'    
    
var request = axios
        .get(url)
        .then((httpResponse) => response.send(httpResponse.data))
})

router.post('/', function(request, response) {
    
    console.log(req.body.description)
})


router.route('/comments/single/:id').get(function (request, response) {
    var url = 'https://newsapi.org/v2/top-headlines?sources=xinhua-net&apiKey=254bfa5fec6f4da49ae9a229157697a0'    

    console.log(request.params)

    var id = request.params.id.toString()

    var request = axios
        .get(url)
        .then((httpResponse) => response.send(httpResponse.data.articles[id-1]))


})

    




/* Test with ejs */
router.route('/myadmin').get(function(request, response) {
    
    response.send('../front-end/pages/myadmin')
})



module.exports = router
