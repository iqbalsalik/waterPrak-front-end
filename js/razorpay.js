const btn = document.getElementById("bookingBtn");
btn.addEventListener("click",makePayment);

function makePayment (e){
    e.preventDefault()
    console.log("important message is being printed")
}