function stripProperty(obj, prop){
	var x;
	for(x in obj){
		if(x === prop){
			delete obj[x];
		}
	}
	return obj;
}