
import { messages } from './messages'
import axios from 'axios'


var results = axios
			.get('http://127.0.0.1:8080/comments')
			.then((response) => { return response.data.articles })

//console.log(typeof results)

console.log(results)

var elt = document.getElementById("myList")

results.then(function(result){
	result.forEach(function(element){
		
		elt.innerHTML += ''			
		elt.innerHTML += '<h2 class="ui header">' + element.title + '</h2>'
		
		elt.innerHTML += '<em>' + element.author  +'</em><br />'
		elt.innerHTML += '<em>' + element.description  +'</em><br />'

		if(element.urlToImage !== null){
			elt.innerHTML += '<img  class="ui middle aligned tiny image" src="' + element.urlToImage +'" alt=""></img>'
		}

		elt.innerHTML += '<a style="margin:20px 0 0 20px ;" href="'+ '#' +'"> Know more </a><br /><br />'
		elt.innerHTML += ''			
		
		console.log(element.title)
	})
})




	

console.log('App.js loaded')

//console.log(messages)

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