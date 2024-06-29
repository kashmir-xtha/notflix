function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let list = [
    ['images/napoleon.png', 'napolean', 'trending', 'movie'],
    ['images/creed3.png', 'creed3', 'trending', 'movie'],
    ['images/madameweb.png', 'madameweb', 'trending', 'movie'],
    ['images/thebeekeeper.png', 'thebeekeeper', 'trending', 'movie'],
    ['images/avatar.png', 'avatar', 'trending', 'movie'],
    ['images/oppenheimer.png', 'oppenheimer', 'trending', 'movie'],
    ['images/barbie.png', 'barbie', 'trending', 'movie'],
    ['images/you.png', 'you', 'trending', 'tvshow'],
    ['images/thelastofus.png', 'thelastofus', 'trending', 'tvshow'],
    ['images/peakyblinders.png', 'peakyblinders', 'popular', 'tvshow'],  // personal favourite 
    ['images/breakingbad.png', 'breakingbad', 'popular', 'tvshow'],  // best show 
    ['images/darkknight.png', 'darkknight', 'popular', 'movie'],  // personal favourite 
    ['images/avenger.png', 'avenger', 'popular', 'movie'],
    ['images/thewalkingdead.png', 'thewalkingdead', 'popular', 'tvshow'],
    ['images/strangerthings.png', 'strangerthings', 'popular', 'tvshow'],
    ['images/gameofthrones.png', 'gameofthrones', 'popular', 'tvshow'],
    ['images/inception.png', 'inception', 'popular', 'movie'],
    ['images/interstellar.png', 'interstellar', 'popular', 'movie'],
    ['images/thegodfather.png', 'thegodfather', 'popular', 'movie'],
    ['images/it.png', 'it', 'horror', 'movie'],
    ['images/annabelle.png', 'annabelle', 'horror', 'movie'],
    ['images/dark.png', 'dark', 'horror', 'tvshow'],
    ['images/conjuring2.png', 'conjuring2', 'horror', 'movie'],
    ['images/wednesday.png', 'wednesday', 'horror', 'tvshow'],
    ['images/theterror.png', 'theterror', 'horror', 'tvshow'],
    ['images/veronica.png', 'veronica', 'horror', 'movie'],
    ['images/thenun.png', 'thenun', 'horror', 'movie'],
    ['images/hellsing.png', 'hellsing', 'horror', 'tvshow'],
    ['images/naruto.png', 'naruto', 'anime', 'tvshow'],   
    ['images/deathnote.png', 'deathnote', 'anime', 'tvshow'],  // personal favourite 
    ['images/jujutsukaisen.png', 'jujutsukaisen', 'anime', 'tvshow'],
    ['images/bungostraydogs.png', 'bungostraydogs', 'anime', 'tvshow'],
    ['images/onepiece.png', 'onepiece', 'anime', 'tvshow'],
    ['images/spyxfamily.png', 'spyxfamily', 'anime', 'tvshow'],
    ['images/silentvoice.png', 'silentvoice', 'anime', 'movie'],
    ['images/yourname.png', 'yourname', 'anime', 'movie'],
    ['images/seinfeld.png', 'seinfeld', 'comedy', 'tvshow'],
    ['images/friends.png', 'friends', 'comedy', 'tvshow'],
    ['images/familyguy.png', 'familyguy', 'comedy', 'tvshow'],
    ['images/theoffice.png', 'theoffice', 'comedy', 'tvshow'],
    ['images/bigbangtheory.png', 'bigbangtheory', 'comedy', 'tvshow'],
    ['images/brookly99.png', 'brooklyn99', 'comedy', 'tvshow'],
    ['images/howimetyourmother.png', 'howimetyourmother', 'comedy', 'tvshow'],
    ['images/hoteltransylvania.png', 'hoteltransylvania', 'comedy', 'movie'],
]
list = shuffle(list)

// cool hacker effect when hover over brand 
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const brand = document.querySelector('.brand').addEventListener('mouseover', (event) => {
    let brand_name = ''
    let iteration = 0
    let index = 0
    const interval = setInterval(() => {
        event.target.innerHTML = brand_name + letters[iteration]
        if (event.target.dataset.name[index] == letters[iteration]){
            brand_name += letters[iteration]
            index++
            iteration = 0
        }
        if(brand_name.length === event.target.dataset.name.length) {clearInterval(interval)}
        iteration++
    },15)
})
// for hamburger
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('nav')
const overlay = document.querySelector('.overlay')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    // removing the startup animation className
    for (i=0;i<3;i++){
        hamburger.children[i].classList.remove('noStartUp'); 
    }      
    // FOR TRANSITION OF NAVMENU TO SIDE
    nav.classList.toggle('active')
    if(nav.className == 'active'){
        overlay.style.display = 'block'
        overlay.addEventListener('click', () => {
            nav.className = ''
            hamburger.className = 'hamburger'
            overlay.style.display = 'none'
        })
    }
    else{overlay.style.display = 'none'}
})

const darkLight = document.querySelector('.fa-moon')
const all = document.querySelectorAll('*')
let isDark = true
darkLight.addEventListener('click', () => {
    if(isDark){
        isDark = false
        all.forEach(item => {
            item.style.color = 'black'
            item.style.backgroundColor = 'white'
        })
        for (i=0;i<3;i++){
            hamburger.children[i].style.backgroundColor = 'black'
        }    
    }
    else{
        isDark = true
        all.forEach(item => {
            item.style.color = 'white'
            item.style.backgroundColor = '#202020'
        })
        for (i=0;i<3;i++){
            hamburger.children[i].style.backgroundColor = 'white'
        }    
    }
})

// for home section
const home = document.querySelector('.home')
const trending = document.querySelector('#trending')
const popular = document.querySelector('#popular')
const horror = document.querySelector('#horror')
const anime = document.querySelector('#anime')
const comedy = document.querySelector('#comedy')
for(let i=0;i<list.length;i++){
    let image = document.createElement('img')
    image.setAttribute('class', 'home_item')
    image.setAttribute('src', list[i][0])
    if(list[i][2] === 'trending'){trending.appendChild(image)}
    if(list[i][2] === 'popular'){popular.appendChild(image)}
    if(list[i][2] === 'horror'){horror.appendChild(image)}
    if(list[i][2] === 'anime'){anime.appendChild(image)}
    if(list[i][2] === 'comedy'){comedy.appendChild(image)}
}

// for horizontal scroll effect on hometabs
const homeTabs = document.querySelectorAll('.home_tab')
homeTabs.forEach(homeTab => {
    homeTab.addEventListener('wheel', event =>{
        var scrollamount = event.deltaY;  //vertical scrolling
        homeTab.scrollLeft += scrollamount;
        event.preventDefault(); //prevents the default scroll 
    })
})

// for movie section
const movies = document.querySelector('.movies')
for(let i=0;i<list.length;i++){
    if(list[i][3] == 'movie'){
        let image = document.createElement('img')
        image.setAttribute('class', 'movie_item')
        image.setAttribute('src', list[i][0])
        movies.append(image)
    }
}

// for tvshows section
const tvshows = document.querySelector('.tvshows')
for(let i=0;i<list.length;i++){
    if(list[i][3] == 'tvshow'){
        let image = document.createElement('img')
        image.setAttribute('class', 'tvshow_item')
        image.setAttribute('src', list[i][0])
        tvshows.append(image)
    }
}

// for nav tabs
const navHome = document.querySelector('#home')
const navMovies = document.querySelector('#movies')
const navTvshows = document.querySelector('#tvshows')
const search = document.querySelector('.search')
navHome.addEventListener('click', () => {
    navHome.style.opacity = 1;
    navMovies.style.opacity = .5;
    navTvshows.style.opacity = .5;
    home.style.display = 'block'
    movies.style.display = 'none'
    tvshows.style.display = 'none'
    search.style.display = 'none'
})
navMovies.addEventListener('click', () => {
    navHome.style.opacity = .5;
    navMovies.style.opacity = 1;
    navTvshows.style.opacity = .5;
    home.style.display = 'none'
    movies.style.display = 'flex'
    tvshows.style.display = 'none'
    search.style.display = 'none'
})
navTvshows.addEventListener('click', () => {
    navHome.style.opacity = .5;
    search.style.display = 'none'
    navMovies.style.opacity = .5;
    navTvshows.style.opacity = 1;
    home.style.display = 'none'
    movies.style.display = 'none'
    tvshows.style.display = 'flex'
})

// for search 
const searchbox = document.querySelector('.searchbox')
searchbox.addEventListener('input', () => {  //input event will occur everytime input changes
    search.innerHTML = ''  // for clearing all the previous added image element
    search.style.display = 'flex'
    //disabling all the other tabs
    home.style.display = 'none'    
    movies.style.display = 'none'
    tvshows.style.display = 'none'
    let userInput = searchbox.children[0].value
    let inputLowerNoSpace = userInput.toLowerCase().replaceAll(' ', '')
    console.log(inputLowerNoSpace)
    for(let i=0;i<list.length;i++){
        if(list[i][1].includes(inputLowerNoSpace)){
            let image = document.createElement('img')
            image.setAttribute('class', 'search_item')
            image.setAttribute('src', list[i][0])
            search.append(image)
        }
    }
})

