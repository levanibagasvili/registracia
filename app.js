document.querySelector("#name").addEventListener("keydown", (event) => {
    if(event.key === "Enter")
     saxeli();
  
  });

  document.querySelector("#surname").addEventListener("keydown", (event) => {
    if(event.key === "Enter")
    gvari();
  
  });
 

  document.querySelector("#submit").addEventListener("click", () => {
    saxeli();
});
document.querySelector("#submit").addEventListener("click", () => {
    asaki();
});
document.querySelector("#submit").addEventListener("click", () => {
    gvari();
   

});
document.querySelector("#submit").addEventListener("click", () => {
    nomeri();
   

});


function  saxeli(){
    document.querySelector("#saxeli").textContent = document.querySelector("#name").value;
    document.querySelector("#name").value = "";
}

function  gvari(){
    document.querySelector("#gvari").textContent = document.querySelector("#surname").value;
    document.querySelector("#name").value = "";
}

function asaki(){
    document.querySelector("#wlovaneba").textContent = document.querySelector("#asaki").value;
    document.querySelector("#asaki").value = "";}

    function nomeri(){
        document.querySelector("#namber").textContent = document.querySelector("#nomeri").value;
        document.querySelector("#nomeri").value = "";}

