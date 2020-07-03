var text = '';

async function digestMessage(message) {
    text = document.getElementById('inputText').value;
    const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
    return hashHex;
}
async function checkHash(){
    const digestHex = await digestMessage(text);
    if(digestHex === "0983ea1ecee4c628edca1b44c3c719ddd1eec3c0babd11a65eadd43ba336b730"){
        document.location.href = "private.html";

    } else{
        document.getElementById('title').innerHTML = "wrong password";
    }
}
var submitElement = document.getElementById('submission');
submitElement.addEventListener("click", ()=>{
    checkHash();
});
