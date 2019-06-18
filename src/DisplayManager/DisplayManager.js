class DisplayManager {
	constructor(object) {
		this.app = object.app;
		this.children = [];
	}
	addChild(object, type, props) {
		props = props || undefined;
		if (props === undefined) {
			this.children.push({ object: object, type: type });
		} else {
			this.children.push({ object: object, type: type, props: props });
		}
	}
	clear() {
		this.app.innerHTML = '';
	}
	render(renderableObject, type) {
		this.children.forEach(element => {
			if (element.type === 'class') {
				this.app.appendChild(element.object.render());
			} else if (element.type === 'function') {
				if (element.props === undefined) {
					this.app.appendChild(element.object());
				} else {
					this.app.appendChild(element.object(element.props));
				}
			} else {
				throw Error(`Type ${type} on Object ${object} is not an applicable value for this function`);
			}
		});
	}
}

export default DisplayManager;
