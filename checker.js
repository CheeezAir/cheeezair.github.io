var text = '';

function check(){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    text = document.getElementById('inputText').value;
    if(text.toLowerCase() === "phoebe wong" && page === "StartScreen.html"){
        document.location.href = "1.html";
    } 
    else if(text === "pH" && page === "1.html"){
        document.location.href = "2.html";
    }
    else if(text.toLowerCase() === "ease" && page === "2.html"){
        document.location.href = "3didyoureallythinkIdjustnamethefilesnumbersinorderlol.html";
    }
    else if(text.toLowerCase() === "b" && page === "3didyoureallythinkIdjustnamethefilesnumbersinorderlol.html"){
        document.location.href = "4didyoureallythinkIdjustnamethefilesnumbersinorderlol2.html";
    }
    else if(text.toLowerCase() === "the" && page === "4didyoureallythinkIdjustnamethefilesnumbersinorderlol2.html"){
        document.location.href = "5sike.html";
    }
    else if(text.toLowerCase() === "won" && page === "5sike.html"){
        document.location.href = "6lmaoiwonderifyoutrieditthatwouldbefunny.html";
    }
    else if(text.toLowerCase() === "g" && page === "6lmaoiwonderifyoutrieditthatwouldbefunny.html"){
        document.location.href = "7iwonderwhichonewillmakeyougetstuck.html";
    }
    else if(text === "2" && page === "7iwonderwhichonewillmakeyougetstuck.html"){
        document.location.href = "8thisisquitefun.html";
    }
    else if(text.toLowerCase() === "go" && page === "8thisisquitefun.html"){
        document.location.href = "9didyoufigureoutthewholephrase.html";
    }
    else if(text === "2" && page === "9didyoufigureoutthewholephrase.html"){
        document.location.href = "10shouldbeprettyobviousnow.html";
    }
    else if(text.toLowerCase() === "prom" && page === "10shouldbeprettyobviousnow.html"){
        document.location.href = "11imrewatchingthattimekaguyawantsshiroganesunderwearfornoreason.html";
    }
    else if(text.toLowerCase() === "with" && page === "11imrewatchingthattimekaguyawantsshiroganesunderwearfornoreason.html"){
        document.location.href = "12anditsactuallyreallyfunnylmaoishipminoandishigamitheycute.html";
    }
    else if(text.toLowerCase() === "me!" && page === "12anditsactuallyreallyfunnylmaoishipminoandishigamitheycute.html"){
        document.location.href = "likemeandyouxd.html";
    }
}
var submitElement = document.getElementById('submission');
submitElement.addEventListener("click", ()=>{
    check();
});
