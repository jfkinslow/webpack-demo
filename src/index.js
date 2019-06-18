import _ from 'lodash';
function component() {
	const element = document.createElement('div');
	element.classList.add('hello-div');
	element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
	return element;
}

document.body.appendChild(component());
