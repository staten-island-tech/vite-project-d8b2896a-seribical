import '../styles/style.css'
import {DOMSelectors} from './DOMSelectors'
import {array} from './array'
import viteLogo from '../public/vite.svg'
import javascriptLogo from '../javascript.svg'

array.forEach((i)=>{
    const card=document.createElement('div');
    card.innerHTML=`
    <p>${i.character}<p>
    `
})
console.log(array);
