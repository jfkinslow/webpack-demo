// Node Modules
import _ from 'lodash';
// User Modules
import utilities from './utilities';
import DisplayManager from './DisplayManager/DisplayManager';
import Button from './components/Button';
//Styles
import './index.css';
let firstButton = new Button({
	text: 'This is a button',
	onClick: event => {
		console.log('You clicked the first button');
	},
});
let secondButton = new Button({
	text: 'This is a button',
	onClick: event => {
		console.log('You clicked the second button');
	},
});
const displayManager = new DisplayManager({
	app: document.querySelector('div.App'),
});
displayManager.addChild(firstButton, 'class');
displayManager.addChild(secondButton, 'class');
displayManager.render();
