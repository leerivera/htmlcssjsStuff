document.querySelector("#yell").addEventListener('click', run);

function run(){
   firstName = document.querySelector("#firstName").value;
   fMiddleName = document.querySelector("#firstMiddle").value;
   fLastMiddle = document.querySelector("#lastMiddle").value;
   lastName = document.querySelector("#lastName").value;

   document.querySelector("#placeToYell").innerText = `${firstName} ${fMiddleName} ${fLastMiddle} ${lastName}`

}
 