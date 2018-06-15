
import { messages } from './messages'
import axios from 'axios'

var results = axios
			.get('http://127.0.0.1:8080/comments')
			.then((response) => { return response.data.articles })
/*
var single = axios
			.get('http://127.0.0.1:8080/comments/single/'+count-1+'')
			.then((response) => { return response.data.articles[count-1] })

single.then(function(result){
		result.forEach(function(element){
	console.log(element)
	})
})
*/
//console.log(typeof results)
//console.log(results)

var elt = document.getElementById("myList")
var sgl = document.getElementById("mySingle")

var count = 1
var tab = []


results.then(function(result){
	//result = result.reverse()
	result.forEach(function(element){

		elt.innerHTML += ''			
		elt.innerHTML += '<h2 class="ui header" id="myList">' + element.title + '</h2>'
		
		elt.innerHTML += '<em>' + element.author  +'</em><br />'
		elt.innerHTML += '<p>' + element.description  +'</p><br />'

		if(element.urlToImage !== null){
			elt.innerHTML += '<img  class="ui middle aligned tiny image" src="' + element.urlToImage +'" alt=""></img>'
		}

		elt.innerHTML += '<button class="ui secondary button" onclick="singleShow('+ count +')"> See more </button>'
		
		elt.innerHTML += '<a style="margin:20px 20px 0 20px;" href="http://127.0.0.1:8080/comments/single/'+ count +'"> See json/back </a><br /><br />'
		
		elt.innerHTML += '<a style="margin:20px 0 0 20px;" href="'+ element.url +'"> Direct url </a><br /><br />'

		elt.innerHTML += ''		

		count++
	
	})
})

 

window.singleShow = singleShow



function singleShow(count) {


	console.log('Ok !')
	console.log(count)
	
	var single = axios
			.get('http://127.0.0.1:8080/comments/single/'+ (count))
			.then((response) => {		
		
		//single
		//	.then((response) => { console.log(response )})

			elt.innerHTML = ''
			sgl.innerHTML += '	<a href="index.html"><button class="ui blue button">Retour</button></a>'

			//Toggle 
			
			sgl.innerHTML += '<h2 class="ui header">' + response.data.title + '</h2>'
			sgl.innerHTML += '<em>' + response.data.author + '</em>'
			sgl.innerHTML += '<p>' + response.data.description + '</p>'
			
			sgl.innerHTML += '	<br>'
   	    	sgl.innerHTML += '	<hr>'
   	    	sgl.innerHTML += '	<br>'
   	    	
			})   	    	

}

	

 console.log('App.js loaded')

// console.log(messages)


