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

function filter(afflatus,button){
    button.addEventListener('click', function(event){
        event.preventDefault();
        let inner = "";
        let x = array.filter((i)=>i.afflatus===`${afflatus}`);
        x.forEach((i)=>inner+=`
        <div class='${i.afflatus}'>
        <p>${i.character}</p>
        <img class='img' src='${i.splash}'>
        </div>
        `)
        DOMSelectors.box.innerHTML=inner
    });
}

filter("Beast",DOMSelectors.beast)



