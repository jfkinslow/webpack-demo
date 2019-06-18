const DivLog = props => {
	let el = document.createElement('div');
	el.innerHTML = `${props.logName} Log<hr />`;
	el.id = props.id;
	el.classList.add('log');
	el.classList.add(props.primaryClass);
	return el;
};

export default DivLog;
