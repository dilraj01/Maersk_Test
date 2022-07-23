

 function sort(){
	const box = document.getElementById("box");
	const boxArr  = box.childNodes;
	
	const sortedArr = [];
	for(let count=0; count<=boxArr.length; count++){
		if(boxArr[count] && boxArr[count].innerHTML){
			sortedArr.push(parseInt(boxArr[count].innerHTML));
		}
	}
	sortedArr.sort();
	
	let newBody = "";
	for(let count=0; count<sortedArr.length; count++){
		newBody += '<div class="sub-box color-'+sortedArr[count]+'">'+sortedArr[count]+'</div>';
	}
	
	box.innerHTML = newBody;
	
 }
 
 function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}
 
 
  function suffle(){
	const box = document.getElementById("box");
	const boxArr  = box.childNodes;

	const suffleArr = [];
	for(let count=0; count<=boxArr.length; count++){
		if(boxArr[count] && boxArr[count].innerHTML){
			suffleArr.push(parseInt(boxArr[count].innerHTML));
		}
	}
	
	newSuffledArr = [];
	
	while(newSuffledArr.length < 9){
		const item = get_random(suffleArr);
		if(newSuffledArr.indexOf(item)  === -1){
			newSuffledArr.push(item);
		}
	}
	
	let newBody = "";
	for(let count=0; count<newSuffledArr.length; count++){
		newBody += '<div class="sub-box color-'+newSuffledArr[count]+'">'+newSuffledArr[count]+'</div>';
	}
	
	box.innerHTML = newBody;
	
 }
 