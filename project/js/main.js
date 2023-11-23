import '../styles/style.css'
import {array} from './array'

document.querySelector('#app').innerHTML=`
<p>g</p>
<button id='beast'>Beast</button>
<div class='flexbox'>

</div>
`

const DOMSelectors={
    box: document.querySelector('.flexbox'),
    beast: document.querySelector('#beast'),
    spirit:document.querySelector('#spirit'),
};

function filter(sort,button){
    button.addEventListener('click', function(event){
        event.preventDefault();
        let inner = "";
        let x = array.filter((i)=>i.afflatus===`${sort}`);
        x.forEach((i)=>inner+=`
            <div class='${i.rarity}'>
                <div class='${i.afflatus}'>
                    <div class='header'>
                        <h2 class='right'>${i.character}</h2>
                    </div>
                    <img class='img' src='${i.splash}'>
                    <div class='footer'>
                        <h3 class='left'>${i.damage}</h3>
                    </div>
                </div>
            </div>
            `)
        DOMSelectors.box.innerHTML=inner
    });
};

filter("Beast",DOMSelectors.beast);



