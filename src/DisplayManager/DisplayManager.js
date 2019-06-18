class DisplayManager {
	constructor(object) {
		this.app = object.app;
		this.children = [];
	}
	addChild(object, type) {
		this.children.push({ object: object, type: type });
	}
	clear() {
		this.app.innerHTML = '';
	}
	render(renderableObject, type) {
		this.children.forEach(element => {
			if (element.type === 'class') {
				this.app.appendChild(element.object.render());
			} else if (element.type === 'function') {
				this.app.appendChild(element.object());
			} else {
				throw Error(`Type ${type} on Object ${object} is not an applicable value for this function`);
			}
		});
	}
}

export default DisplayManager;
