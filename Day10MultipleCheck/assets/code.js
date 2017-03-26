const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
console.log(checkboxes);
let lastChecked;
function checkForShiftKey(e) {
    console.log(e);
//    instead we can use 'this' because event was fired as a method of this DOM object
//    const currentlyChecked = e.srcElement;
    let isBetween = false;
    if(lastChecked && e.shiftKey){
        checkboxes.forEach(checkbox => {
            if(checkbox === lastChecked || checkbox === this){
                isBetween = !isBetween;
                return; // NECESSARY (WES BOS do it WRONG!!11)
                //it would check couple of checkboxes at first check with shift
            }
            if(isBetween){
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}
checkboxes.forEach(checkbox => {
   checkbox.addEventListener("click", checkForShiftKey)
});

