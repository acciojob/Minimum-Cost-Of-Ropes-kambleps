function calculateMinCost() {
  //your code here
  var inputdata =document.querySelector("#rope-lengths").value;
	var inputArr = inputdata.split(",");
	for(var i=0;i<inputArr.length;i++)
		{
			inputArr[i] = Number(inputArr[i]);
		}
	var cost =0;
  while(inputArr.length>1)
	  {
		  var newrope = inputArr[0] + inputArr[1];
		  cost += newrope;
		  inputArr.splice(0,2);
		  inputArr.push(newrope);
	  }
	document.querySelector("#result").textContent = cost;
}  
