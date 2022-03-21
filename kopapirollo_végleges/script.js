var a ="Üdvözöllek a kőpapír ollójátékomban!\n Játék szabályok szerintem ismerősek :D \n (ui: zene is van, hogy izgalmasabb legyen)";

alert(a);

var jatekospont =0;
var geppont=0;
var dontetlen=0;

const jatekospont_felirat = document.getElementById("win");
const geppont_felirat = document.getElementById("lose");
const dontetlen_felirat = document.getElementById("dontetlen");
const eredmeny=document.getElementById("eredmeny")
const szoveg = document.querySelector(".szoveg");
const eszkozok = document.querySelector(".eszkozok");
const reset = document.getElementById("reset");


const ko = document.getElementById("r");
const papir = document.getElementById("p");
const ollo = document.getElementById("s");

function nyer()
{
    jatekospont++;
    jatekospont_felirat.innerHTML= "Nyert: "+jatekospont;
    geppont_felirat.innerHTML= "Vesztett: "+geppont;
    dontetlen_felirat.innerHTML= "Döntetlen: "+dontetlen;
    document.getElementById("eredmeny").style.color="green";
    eredmeny.innerHTML= "NYERTÉL";
}

function veszit()
{
    geppont++;
    jatekospont_felirat.innerHTML= "Nyert: "+jatekospont;
    geppont_felirat.innerHTML= "Vesztett: "+geppont;
    dontetlen_felirat.innerHTML= "Döntetlen: "+dontetlen;
    document.getElementById("eredmeny").style.color="red";
    eredmeny.innerHTML= "VESZTETTÉL";
}

function dontetlenseg()
{
    dontetlen++;
    jatekospont_felirat.innerHTML= "Nyert: "+jatekospont;
    geppont_felirat.innerHTML= "Vesztett: "+geppont;
    dontetlen_felirat.innerHTML= "Döntetlen: "+dontetlen;
    document.getElementById("eredmeny").style.color="white";
    eredmeny.innerHTML= "DÖNTETLEN";
}

function rps_gep()
{
    const eszkozok =['r','p','s'];
    const random =Math.floor(Math.random()*3);
    return eszkozok[random];
}


function rps(input)
{
    const gep=rps_gep();

    switch(input+gep)
    {
        case "rs":
        case "pr":
        case "sp":
            nyer();
            break;
        case "rp":
        case "sr":
        case "ps":
            veszit();
            break;
        case "rr":
        case "ss":
        case "pp":
            dontetlenseg();
            break;
    }

}

function main()
{
    ko.addEventListener('click', function()
    {
        rps("r");
    })

    papir.addEventListener('click', function()
    {
        rps("p");
    })

    ollo.addEventListener('click', function()
    {
        rps("s");
    })

    reset.addEventListener('click', function()
    {
    console.log("resetelve")
    jatekospont=0;
    geppont=0;
    dontetlen=0;
    jatekospont_felirat.innerHTML= "Nyert: "+jatekospont;
    geppont_felirat.innerHTML= "Vesztett: "+geppont;
    dontetlen_felirat.innerHTML= "Döntetlen: "+dontetlen;
    })
}





main();
