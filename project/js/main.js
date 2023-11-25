import '../styles/style.css'
import {array} from './array'

document.querySelector('#app').innerHTML=`
<p>g</p>
<button id='button'>haha</button>
<button id='beast'>Beast</button>

<div class='flexbox'>
</div>
`

const DOMSelectors={
    box: document.querySelector('.flexbox'),
    button: document.querySelector('#button'),
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
                    <img class='type' src='../imgs/${i.afflatus}.webp'>
                    <h2 class='right'>${i.character}</h2>
                    </div>
                    <img class='splash' src='${i.splash}'>
                    <div id='inline'>
                        <img class='portrait' src='${i.portrait}'>
                        <div id='attributes'>
                            <div id='nest'>
                                <h3>Rarity: ${i.number}✦</h3>
                                <h3>Afflatus: ${i.afflatus}</h3>
                                <h3>Damage Type: ${i.damage}</h3>
                            </div>
                        </div>
                    </div>
                    <div class='spells'>
                        <div class='smallerspells'>
                            <div id='spell1'>
                                <img id='art' src='${i.spell1i}'>
                                <div id='title'>
                                    <h3>${i.spell1}</h3>
                                </div>
                            </div>
                            <div id='spell2'>
                                <img id='art' src='${i.spell2i}'>
                                <div id='title'>
                                    <h3>${i.spell2}</h3>
                                </div>
                            </div>
                            <div id='ult'>
                                <img id='art' src='${i.ulti}'>
                                <div id='title'>
                                    <h3>${i.ult}</h3>
                                </div>
                            </div>
                        </div>
                        <div id='desc1'>
                        </div>
                    </div>
                </div>
            </div>
            `)
        DOMSelectors.box.innerHTML=inner
    });
};

function nofilter(button){
    button.addEventListener('click', function(event){
        event.preventDefault();
        let inner = "";
        let x = array
        x.forEach((i)=>inner+=`
            <div class='${i.rarity}'>
                <div class='${i.afflatus}'>
                    <div class='header'>
                    <img class='type' src='../imgs/${i.afflatus}.webp'>
                    <h2 class='right'>${i.character}</h2>
                    </div>
                    <img class='splash' src='${i.splash}'>
                    <div class='footer'>
                        
                    </div>
                </div>
            </div>
            `)
        DOMSelectors.box.innerHTML=inner
    });
};

nofilter(DOMSelectors.button);
filter("Beast",DOMSelectors.beast);




