function inventoryList(){
	let arr = [];
	function add(name){
		if(arr.indexOf(name) === -1)
			arr.push(name);
	}
	
	function remove(name){
		let i = arr.indexOf(name);
		if( i !== -1)
		  arr.splice(i, 1);
	}
	
	function getList(){
		return arr;
	}
	
	return {add, remove, getList}
}