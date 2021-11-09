const nav=document.getElementById('nav');
const menu=document.querySelector('.menu');
const hero=document.querySelector('.hero');
const aboutSection=document.getElementById('about');
const about=document.getElementById('aboutMe');
const skills=document.getElementById('skills');
const contacts=document.getElementById('contact');
const profile=document.querySelector('.profile');
const home=document.querySelector('.home');

const homeMenu=document.getElementById('homeMenu');
const aboutMenu=document.getElementById('aboutMenu');
const mywork=document.getElementById('mywork');


function getMenu() {
    hero.classList.add('hover-menu');
}

function hideMenu() {
    hero.classList.remove('hover-menu');
}

function toggleText() {
    about.classList.toggle('hidden');
}

function toggleTextForSkills() {
    skills.classList.toggle('hidden');
}

function toggleTextForContacts() {
    contacts.classList.toggle('hidden');
}

function getHomeScreenForHome() {
    home.classList.remove('show');
    aboutSection.classList.add('show');
    profile.classList.add('show');
}

function getHomeScreenForAbout() {
    home.classList.add('show');
    aboutSection.classList.remove('show');
    profile.classList.add('show');
    
}

function getHomeScreenForProfile() {
    home.classList.add('show');
    aboutSection.classList.add('show');
    profile.classList.remove('show');
    console.log(3)
    
}

nav.addEventListener('mouseenter',getMenu);
nav.addEventListener('mouseleave',hideMenu);

about.addEventListener('click', toggleText);
skills.addEventListener('click', toggleTextForSkills);
contacts.addEventListener('click', toggleTextForContacts);

homeMenu.addEventListener('click', getHomeScreenForHome);
aboutMenu.addEventListener('click',getHomeScreenForAbout);
mywork.addEventListener('click',getHomeScreenForProfile);