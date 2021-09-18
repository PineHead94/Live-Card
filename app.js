const animated = document.querySelectorAll('.animated')
const header = document.querySelector('.header')
const content = document.querySelector('.content')
const author = document.querySelector('.author')
let user = []

setTimeout(apiData, 1500)






async function apiData (){

    const data = await fetch ('https://randomuser.me/api?results=1')

    const json_data = await data.json()
    const userData = json_data.results
    user_in = userData.pop()
    user.push(user_in)
    author.innerHTML=  `<img src="${user[0].picture.large}" alt="">
    <div class="author-info">
        <h4 class="author-name">${user[0].name.first} ${user[0].name.last}</h4>
        <small class="author-location">${user[0].location.country}, ${user[0].location.city}</small>
    </div>`
    header.innerHTML = `<div class="top"></div>
    <div class="upper"></div>
    <div class="lower"></div>`


    content.innerHTML = `<h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, magnam?</p>`



}


