var szoveg = prompt("Kérem a szöveget")
var s = "";
var szin = 1;
for (let x of szoveg) {
    if (szin == 1) {
        s += "<span class='feher'>"+x+"</span>"
    }
    else if (szin == 2) {
        s += "<span class='feher'>"+x+"</span>"
    }
    else {
        s += "<span class='feher'>"+x+"</span>"
    }
    szin++;
    if (szin>3) {
        szin=1
    }    
} 
document.getElementById("cim").innerHTML = s