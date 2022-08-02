function staffList(){

	let staff = [];	
	
	function add(name, age){
		if(Number(age) > 20){
			this.staff.push({name, age});
		}else{
			throw new Error('Staff member age must be greater than 20')
		}
	}
	
	function remove(name){
		const found = this.staff.find(i => t.name == name); 
		if(found){
			this.staff = this.staff(i => i.name != name);
			return true;
		}
		return false;
		}
	}
	
	function getSize(){
		return this.staff.length;
	}
}