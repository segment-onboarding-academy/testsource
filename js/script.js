function submitWriteKey(){
	var writeKey = $("#writeKeyInput").val();
	localStorage.setItem("writeKey", writeKey);
	analytics.load(writeKey);
  	analytics.page(pageName);
	var writeKeyDiv = document.getElementById("writekey");
	writeKeyDiv.className = "d-none";
	var mainDiv = document.getElementById("main");
	mainDiv.className = "masthead text-center text-white d-flex";
}
function getWriteKey(){
	var writeKey = localStorage.getItem("writeKey");
	analytics.load(writeKey);
  	analytics.page(pageName);
	var writeKeyDiv = document.getElementById("writekey");
	writeKeyDiv.className = "d-none";
	var mainDiv = document.getElementById("main");
	mainDiv.className = "masthead text-center text-white d-flex";
}