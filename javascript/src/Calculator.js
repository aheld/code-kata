function Add(numbers) {
	var tmp = numbers.split(',');
	var result =  0;
	if (tmp.length > 2) throw Error("fred");
	tmp.forEach(function(x){
		result += Number(x);
	});
	return result;
}