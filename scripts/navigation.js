// Opretter en variable, som indeholder en template med html tags til min burger-menu

let navTmpl = `
<div class="navigationHandle "><i class='fa-solid fa-bars'></i></div>
<div class="navigation">
    <div class="menus">
    <div class="navigation-links"></div>
</div>
</div>`

const navContainer = document.querySelector('#nav-container');
navContainer.insertAdjacentHTML('beforeend', navTmpl);



// Opretter et array, som indeholder mine menupunkter, og deres destination

let linksArr = [
    {
        link : 'index.html',
        title : 'Home'
    },
    {
        link : '#HTP',
        title : 'How To Play'
    },
    {
        link : '#RLCS',
        title : 'RLCS'
    }
]


const linksContainer = document.querySelector('.navigation-links');

const nav = document.querySelector('.navigation');

linksArr.forEach((linkObj) => {

    linksContainer.insertAdjacentHTML('beforeend', `<a href="${linkObj.link}">${linkObj.title}</a>`);



	// Sørger for at menuen lukker, efter der er blevet trykket på et menupunkt

    linksContainer.addEventListener('click', () => {
        nav.classList.remove('active');
    })
})

const navHandle = document.querySelector('.navigationHandle');
navHandle.addEventListener('click', () => {

    nav.classList.toggle('active');
})