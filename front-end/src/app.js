
import { messages } from './messages'
import axios from 'axios'


var results = axios
			.get('http://127.0.0.1:8080/comments')
			.then((response) => { return response.data.articles })
/*
var single = axios
			.get('http://127.0.0.1:8080/comments/:articleId')
			.then((response) => { return response.data })
*/


//console.log(typeof results)

console.log(results)

var elt = document.getElementById("myList")

var count = 11


var obj1 = {
	un: 'test',
	deux: 6
}
var obj2 = {
	un: 'test',
	deux: 6
}
var obj3 = {
	un: 'salut',
	deux: 2
}


console.log( obj1.un == obj2.un ? " evening." : " day.")



results.then(function(result){
	result.forEach(function(element){

		count--
		console.log(result)
		elt.innerHTML += ''			
		elt.innerHTML += '<h2 class="ui header">' + element.title + '</h2>'
		
		elt.innerHTML += '<em>' + element.author  +'</em><br />'
		elt.innerHTML += '<p>' + element.description  +'</p><br />'

		if(element.urlToImage !== null){
			elt.innerHTML += '<img  class="ui middle aligned tiny image" src="' + element.urlToImage +'" alt=""></img>'
		}

		elt.innerHTML += '<a style="margin:20px 0 0 20px ;" href="http://127.0.0.1:8080/comments/single/'+ count +'"> Know more </a>'
		elt.innerHTML += '<a style="margin:20px 0 0 20px ;" href="'+ element.url +'"> Direct url </a><br /><br />'
		
		elt.innerHTML += ''			
	
	})
})



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