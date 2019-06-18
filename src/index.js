// Node Modules
import _ from 'lodash';
import uuidv1 from 'uuid';
// User Modules
import utilities from './utilities';
import DisplayManager from './DisplayManager/DisplayManager';
import Button from './components/Button';
import DivLog from './components/DivLog';
//Styles
import './index.css';
let firstButton = new Button({
	text: 'This is a button',
	id: uuidv1(),
	onClick: event => {
		event.preventDefault();
		console.log('You clicked the first button');
		let log = document.querySelector('.btn1-log');
		console.log(log);
		log.innerHTML += 'You Clicked Me!<br />';
	},
});
let secondButton = new Button({
	text: 'This is a button',
	id: uuidv1(),
	onClick: event => {
		event.preventDefault();
		console.log('You clicked the second button');
		let log = document.querySelector('.btn2-log');
		console.log(log);
		log.innerHTML += 'You Clicked Me!<br />';
	},
});
const displayManager = new DisplayManager({
	app: document.querySelector('div.App'),
});
displayManager.addChild(firstButton, 'class');
displayManager.addChild(DivLog, 'function', { id: uuidv1(), primaryClass: 'btn1-log', logName: 'Button 1' });
displayManager.addChild(secondButton, 'class');
displayManager.addChild(DivLog, 'function', { id: uuidv1(), primaryClass: 'btn2-log', logName: 'Button 2' });
displayManager.render();
