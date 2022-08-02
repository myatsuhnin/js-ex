function joinedLogger(level, sep){
	let result = [];
	return (...messages) => {
		for(let i = 0; i<messages.length; i++){
			if(messages[i].level >= level){
				result.push(messages[i].text);
			}
		}
		logger({'text':result.join(sep)})
	}
}