class Button {
	constructor(object) {
		this.onClick = object.onClick;
		this.text = object.text;
	}
	render() {
		const element = document.createElement('div');
		element.classList.add('DM-Button');
		element.innerText = this.text;
		element.addEventListener('selectstart', event => {
			event.preventDefault();
			return false;
		});
		element.addEventListener('click', this.onClick);
		return element;
	}
}

export default Button;
