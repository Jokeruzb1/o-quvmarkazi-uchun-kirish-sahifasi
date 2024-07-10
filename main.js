let filiali = document.getElementById("filiali");
let fname = document.getElementById("name");
let phone = document.getElementById("phone");
let text = document.getElementById("text");
let sendbutton = document.querySelector(".sendbutton");


sendbutton.addEventListener("click", (e)=>{
    e.preventDefault();
    let messege = `${filiali.value}.Ismi: ${fname.value}.telefon: ${phone.value}.text: ${text.value}`
    sendtelegram(message); 
});

function sendtelegram(message)
 { let telegram_bot_id = "6952617598:AAHlBStAqwB1DTXjgXKX1UddDnHyHQb6_1E";
 let chat_id =-1002008150055;
  let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };
