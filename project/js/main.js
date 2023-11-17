import '../styles/style.css'
import {array} from './array'

document.querySelector('#app').innerHTML=`
<p>g</p>
<button id='beast'>h</button>
<button id='spirit'>h</button>
<div class='flexbox'>

</div>
`

const DOMSelectors={
    box: document.querySelector('.flexbox'),
    beast: document.querySelector('#beast'),
    spirit:document.querySelector('#spirit'),
};
 
DOMSelectors.beast.addEventListener('click', function(event){
    event.preventDefault();
    let inner = "";
    let x = array.filter((i)=>i.afflatus==='Beast');
    x.forEach((i)=>inner+=`
    <div class='${i.afflatus}'>
    <p>${i.character}</p>
    </div>
    `)
    DOMSelectors.box.innerHTML=inner
});

DOMSelectors.spirit.addEventListener('click', function(event){
    event.preventDefault();
    let inner = "";
    let x = array.filter((i)=>i.afflatus==='Spirit');
    x.forEach((i)=>inner+=`
    <div class='${i.afflatus}'>
    <p>${i.character}</p>
    <img src='${i.splash}'>
    </div>
    `)
    DOMSelectors.box.innerHTML=inner
});

