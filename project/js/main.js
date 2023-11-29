import '../styles/style.css'
import {array} from './array'
import { DOMSelectors } from './DOMSelectors';

console.log(DOMSelectors)

function theme(){
    let buttons = DOMSelectors.buttons2
    buttons.forEach((i)=>i.addEventListener("click", function(){
        let past = DOMSelectors.body.classList
        let current= i.textContent
        DOMSelectors.body.classList.replace(past,current);   
    }))
} 

function insert(arr){
    arr.forEach((i)=>DOMSelectors.box.insertAdjacentHTML(
        "afterbegin",
        `
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
                </div>
            </div>
        </div>
    `
    ))
    }
    function filter(){
        let buttons = DOMSelectors.buttons
        buttons.forEach((i)=>i.addEventListener("click", function(){
            let afflatus = i.textContent
            DOMSelectors.box.innerHTML = ""
            if (afflatus === "All") {
                insert(array)
            }
            else{
                let filter = array.filter((j)=>j.afflatus===afflatus)
                insert(filter)
            }
            
        }))
    }

insert(array)
filter()
theme()


/* function filter(sort,button){
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
}; */



/* nofilter(DOMSelectors.button);
filter("Beast",DOMSelectors.beast);
filter("Star",DOMSelectors.star);
filter("Mineral",DOMSelectors.mineral);
filter("Plant",DOMSelectors.plant);
filter("Spirit",DOMSelectors.spirit);
filter("Intellect",DOMSelectors.intellect); */





