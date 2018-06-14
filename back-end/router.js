//External imports
const express = require('express')
const axios = require('axios')

//Internal imports
const router = express.Router()

/* View engine => ejs */
let app = express()
app.set('view engine', 'ejs') 




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

router.route('/comments/:acrticle(\d+)').get(function (request, response) {
    var url = 'https://newsapi.org/v2/top-headlines?sources=xinhua-net&apiKey=254bfa5fec6f4da49ae9a229157697a0'    

    var request = axios
        .get(url)
        .then((httpResponse) => response.send(httpResponse.data.params))
})




/* Test with ejs */
router.route('/myadmin').get(function(request, response) {
    
    response.send('../front-end/pages/myadmin')
})



module.exports = router


