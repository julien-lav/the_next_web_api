
import { messages } from './messages'
import axios from 'axios'


var results = axios
			.get('http://127.0.0.1:8080/comments')
			.then((response) => { return response.data.articles })

var single = axios
			.get('http://127.0.0.1:8080/comments/single/test')
			.then((response) => { return response.data.articles[id] })


console.log('On est dans le coin !!! =>' single)

single.then(function(result){
		result.forEach(function(element){
	console.log(element)
	})
})

//console.log(typeof results)
//console.log(results)

var elt = document.getElementById("myList")

var count = 0

results.then(function(result){
	result = result.reverse()
	result.forEach(function(element){

		console.log(result)
		elt.innerHTML += ''			
		elt.innerHTML += '<h2 class="ui header">' + element.title + '</h2>'
		
		elt.innerHTML += '<em>' + element.author  +'</em><br />'
		elt.innerHTML += '<p>' + element.description  +'</p><br />'

		if(element.urlToImage !== null){
			elt.innerHTML += '<img  class="ui middle aligned tiny image" src="' + element.urlToImage +'" alt=""></img>'
		}

		elt.innerHTML += '<a style="margin:20px 0 0 20px;" href="http://127.0.0.1:8080/comments/single/'+ count +'"> Know more </a>'
		elt.innerHTML += '<a style="margin:20px 0 0 20px;" href="'+ element.url +'"> Direct url </a><br /><br />'
		
		elt.innerHTML += ''		

		count++
		
	})
})
const websocket = new WebSocket('ws://localhost:8888')

setInterval(function(){

	var msg = 'Refresh'
	websocket.send('message') 

}, 30000);




/*
var resultsSingle = axios
			.get('http://127.0.0.1:8080/comments/single/'+ count + '')
			.then((response) => { console.log(response) })
*/




	

// console.log('App.js loaded')

// console.log(messages)

// console.log('On est la =>' + results)

// console.log(JSON.stringify(results))

/*
private getAccount(id: Id) : Account {
    let account = Account.empty();
    this.repository.get(id)
        .then(res => account = res)
        .catch(e => Notices.results(e));
    return account;
}
*/