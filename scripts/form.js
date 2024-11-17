var submitted = false

function checkIfSubmitted(){
	if(submitted){
		window.location='submission.html';
	}
}; 
function didSubmit(){
	submitted = true
};
