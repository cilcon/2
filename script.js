var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "16px Arial";

var wscreen = window.innerWidth;
var hscreen = window.innerHeight;

var initialw = wscreen;
var initialh = hscreen;

canvas.width = wscreen
canvas.height = canvas.width / 2;

//Scaling
while (canvas.height > initialh - 50) {
    canvas.height -= 1;
    canvas.width -= 2;
}

//Correct for small width
while (wscreen - canvas.width < 30) {
    canvas.height -= 1;
    canvas.width -= 2;
}

ctx.scale(canvas.width / 800, canvas.height / 400);

window.onresize = function (event) {
    wscreen = window.innerWidth;
    hscreen = window.innerHeight;

    initialw = wscreen;
    initialh = hscreen;

    canvas.width = wscreen
    canvas.height = canvas.width / 2;

    //Scaling
    while (canvas.height > initialh - 90) {
        canvas.height -= 1;
        canvas.width -= 2;
    }

    //Correct for small width
    while (wscreen - canvas.width < 30) {
        canvas.height -= 1;
        canvas.width -= 2;
    }

    ctx.scale(canvas.width / 800, canvas.height / 400);
}
var canvasX = 0;
var canvasY = 0;
canvas.addEventListener("mousemove", function (e) {
    var cRect = canvas.getBoundingClientRect();              // Gets the CSS positions along with width/height
    canvasX = e.clientX - cRect.left;			// Subtract the 'left' of the canvas from the X/Y
    canvasY = e.clientY - cRect.top;         	// positions to get make (0,0) the top left of the
    canvasX = Math.round(canvasX / (canvas.width / 800));
    canvasY = Math.round(canvasY / (canvas.height / 400));
});


//Intervals------------------------------
var myVar2 = setInterval(outprint, 40);
//----------------------------------------
//Defaults------------------------------
{
    var guion = 0;
    var stateDelay = 0; var stateTimer = 0; var stateSpeed = 7;
    var sendName = "";

    var printout = "";
    var fade = 0; var sendScene = ""; var fadeTimer = 0; var fadeState = 0; var changeFrame = 10; var maxFrame = 14; fadeImage = new Image(100, 200);
    var errormsgshow = 0; var errorTimer = 0; var errormsg = ""; var errortextsize = 30; var errorLast = 40; errorImage = new Image(100, 200);

    var movM = [0, 0, 0, 0, 0, 0];
    var mov = movM.slice();
    var movD = [0, 0, 0, 0, 0, 0];
    var movT = [0, 0, 0, 0, 0, 0];
    var movS = [5, 5, 5, 5, 5, 5];

    var zovM = [0, 0, 0, 0, 0, 0];
    var zov = zovM.slice();
    var zovD = [0, 0, 0, 0, 0, 0];
    var zovT = [0, 0, 0, 0, 0, 0];
    var zovS = [5, 5, 5, 5, 5, 5];

    tImage = new Image(); t2Image = new Image(); t3Image = new Image(); t4Image = new Image(); t5Image = new Image();

    cImage = new Image(); c1Image = new Image(); c2Image = new Image(); c3Image = new Image(); c4Image = new Image(); c5Image = new Image(); c6Image = new Image(); c7Image = new Image(); c8Image = new Image(); c9Image = new Image(); c10Image = new Image();
    cImage1 = new Image(); cImage2 = new Image(); cImage3 = new Image(); cImage4 = new Image(); cImage5 = new Image(); cImage6 = new Image(); cImage7 = new Image(); cImage8 = new Image(); cImage9 = new Image(); cImage10 = new Image();
    var curr = 0; var curr2 = 0; var curr3 = 0;
}
//--------------------------------------

var nodown = 0; var rset1 = 0; var rset2 = 0;
function clickfunc() {
    if (guion == 1) {
        if (guiA[0] == "A") {
            guiA = [];
            if (canvasX > 0 && canvasX < 213 && canvasY > 0 && canvasY < 40) { sptout = 'animplayer(1,"anim//","normal",1,20,0,' + String(stateM) + '-state,800,400);'; copytoclipboard(sptout); triggerclear = 1; }
            if (canvasX > 0 && canvasX < 213 && canvasY > 40 && canvasY < 80) { sptout = 'checksArray.push(new checks(state,scene,canvasX,canvasY,0.3));'; copytoclipboard(sptout); triggerclear = 1; }
            if (canvasX > 0 && canvasX < 213 && canvasY > 80 && canvasY < 120) { sptout = 'ctx.strokeStyle = "black"; ctx.lineWidth = 2;'; copytoclipboard(sptout); triggerclear = 1; }
            if (canvasX > 0 && canvasX < 213 && canvasY > 120 && canvasY < 160) { sptout = 'for (let i = 0; i < 4; i++){'; copytoclipboard(sptout); triggerclear = 1; }
            if (canvasX > 0 && canvasX < 213 && canvasY > 160 && canvasY < 200) { sptout = 'for (let i = 0; i < 5; i++){for (let z = 0; z < 2; z++){'; copytoclipboard(sptout); triggerclear = 1; }
            if (canvasX > 0 && canvasX < 213 && canvasY > 200 && canvasY < 240) { sptout = 'ctx.shadowColor = "black"; ctx.shadowBlur = 10;'; copytoclipboard(sptout); guiA = []; triggerclear = 1; }
            if (canvasX > 0 && canvasX < 213 && canvasY > 240 && canvasY < 280) { sptout = 'if (tArray.includes(sendName) == false){tArray.push(sendName);}'; copytoclipboard(sptout); guiA = []; triggerclear = 1; }
            if (canvasX > 0 && canvasX < 213 && canvasY > 280 && canvasY < 310) { sptout = 'array.splice(array.indexOf(sendName),1);'; copytoclipboard(sptout); guiA = []; triggerclear = 1; }
            if (canvasX > 0 && canvasX < 213 && canvasY > 310 && canvasY < 340) {
                if (moverz == 0) { sptout = 'ctx.drawImage(A1,0,' + String(stateM) + '-state-zov[0]+' + String(zovM[0]) + ',800,400);'; }
                else { sptout = 'ctx.drawImage(A1,0,' + String(stateM) + '-state-mov[0]+' + String(movM[0]) + ',800,400);'; }
                copytoclipboard(sptout); guiA = []; triggerclear = 1;
            }
        }
    }

    if (scene == "intro") {
        if (state == 0 && canvasX > 225 && canvasX < 571 && canvasY > 313 && canvasY < 383) { stateM = 100; }
        if (state == 100 && canvasX > 225 && canvasX < 571 && canvasY > 313 && canvasY < 383) { stateM = 200; }
        if (fade == 0 && state == 200 && canvasX > 225 && canvasX < 571 && canvasY > 313 && canvasY < 383) {
            fade = 1; sendScene = "M";
            seconds = new Date().getTime() / 1000; supd = 0;
        }
    }

    if (scene == "M") {
        if (zov[0] == 0) {
            if (canvasX > 0 && canvasX < 116 && canvasY > -1 && canvasY < 48) { mmode = "B"; }
            if (canvasX > 1 && canvasX < 116 && canvasY > 48 && canvasY < 95) { mmode = "S"; }
            if (canvasX > 1 && canvasX < 114 && canvasY > 314 && canvasY < 398) { zovM[0] = 100; }

            if (mmode == "B") {
                if (mov[0] == 0) {
                    for (let z = 0; z < 5; z++) {
                        for (let i = 0; i < 2; i++) {
                            if (canvasX > 130 + 328 * i && canvasX < 456 + 328 * i && canvasY > 59 + 54 * z && canvasY < 115 + 54 * z) {
                                sendName = celC[curr2 + z + 5 * i];
                                if (sArray.includes(sendName) == false) {
                                    atm[0] = celV[curr2 + z + 5 * i]; movM[0] = 100;
                                    mat[0] = transV[curr2 + z + 5 * i];
                                    tnum = curr2 + z + 5 * i;
                                }
                            }
                        }
                    }

                    if (curr2 == 0 && canvasX > 391 && canvasX < 524 && canvasY > 338 && canvasY < 384) { curr2 += 10; nodown = 1; }
                    if (curr2 > 0) {
                        if (nodown == 0 && canvasX > 391 && canvasX < 457 && canvasY > 339 && canvasY < 382) { curr2 -= 10; nodown = 1; }
                        if (curr2 != 40 && nodown == 0 && canvasX > 459 && canvasX < 522 && canvasY > 337 && canvasY < 383) { curr2 += 10; nodown = 1; }
                        if (nodown == 0 && curr2 == 40 && canvasX > 391 && canvasX < 524 && canvasY > 337 && canvasY < 384) { curr2 -= 10; }
                    }
                }
                if (mov[0] == 100) {
                    if (canvasX > 512 && canvasX < 744 && canvasY > 185 && canvasY < 249) { movM[0] = 0; }
                    if (canvasX > 554 && canvasX < 693 && canvasY > 114 && canvasY < 176) {
                        if (money - atm[0] < 0) { errormsgshow = 1; errormsg = "NOT ENOUGH MONEY!" }
                        else {
                            money -= atm[0];
                            movM[0] = 0; sArray.push(sendName); s2Array.push(atm[0]); s3Array.push(atm[0]);
                        }
                    }
                }
            }
            if (mmode == "S") {
                if (mov[1] == 0) {
                    if (canvasX > 697 && canvasX < 741 && canvasY > 19 && canvasY < 60) { curr += 3; }
                    if (curr != 0 && canvasX > 546 && canvasX < 595 && canvasY > 21 && canvasY < 64) { curr -= 3; }
                    if (canvasX > 161 && canvasX < 348 && canvasY > 79 && canvasY < 383) {
                        if (sArray.length > curr) {
                            movM[1] = 100; sendName = sArray[curr]; atm[0] = s2Array[curr];
                            mat[1] = transV[celC.indexOf(sArray[0 + curr])];
                            tnum = 0 + curr; mat[2] = 0;
                        }
                    }
                    if (canvasX > 161 + 202 && canvasX < 348 + 202 && canvasY > 79 && canvasY < 383) {
                        if (sArray.length > curr + 1) {
                            movM[1] = 100; sendName = sArray[curr + 1]; atm[0] = s2Array[curr + 1];
                            mat[1] = transV[celC.indexOf(sArray[1 + curr])];
                            tnum = 1 + curr; mat[2] = 1;
                        }
                    }
                    if (canvasX > 161 + 202 * 2 && canvasX < 348 + 202 * 2 && canvasY > 79 && canvasY < 383) {
                        if (sArray.length > curr + 2) {
                            movM[1] = 100; sendName = sArray[curr + 2]; atm[0] = s2Array[curr + 2];
                            mat[1] = transV[celC.indexOf(sArray[2 + curr])];
                            tnum = 2 + curr; mat[2] = 2;
                        }
                    }
                }
                if (mov[1] == 100) {
                    if (canvasX > 555 && canvasX < 791 && canvasY > 147 && canvasY < 206) { movM[1] = 0; }
                    if (canvasX > 595 && canvasX < 739 && canvasY > 86 && canvasY < 140) {
                        movM[1] = 0; money += atm[0];
                        s3Array.splice(sArray.indexOf(sendName), 1);
                        s2Array.splice(sArray.indexOf(sendName), 1);
                        sArray.splice(sArray.indexOf(sendName), 1);
                        if (curr != 0 && curr > sArray.length - 3) { curr -= 3; }
                    }
                }
            }
        }
        if (zov[0] == 100) {
            if (fade == 0 && canvasX > 135 && canvasX < 377 && canvasY > 178 && canvasY < 284) {
                fade = 1; sendScene = "END";
            }
            if (canvasX > 432 && canvasX < 689 && canvasY > 175 && canvasY < 290) { zovM[0] = 0; }
        }
    }

    if (scene == "END") {
        if (state == 0 && canvasX > 219 && canvasX < 577 && canvasY > 315 && canvasY < 377) { stateM = 100; nodown = 1; }
        if (nodown == 0 && state % 100 == 0) {
            if (ecount[0] < 1 && canvasX > 298 && canvasX < 735 && canvasY > 48 && canvasY < 103) { stateM += 100; ecount[0]++; atmS[0] += sArray[-2 + stateM / 100] + ", "; }
            if (ecount[1] < 2 && canvasX > 300 && canvasX < 734 && canvasY > 112 && canvasY < 165) { stateM += 100; ecount[1]++; atmS[1] += sArray[-2 + stateM / 100] + ", "; }
            if (ecount[2] < 3 && canvasX > 301 && canvasX < 733 && canvasY > 177 && canvasY < 225) { stateM += 100; ecount[2]++; atmS[2] += sArray[-2 + stateM / 100] + ", "; }
            if (ecount[3] < 4 && canvasX > 301 && canvasX < 732 && canvasY > 238 && canvasY < 290) { stateM += 100; ecount[3]++; atmS[3] += sArray[-2 + stateM / 100] + ", "; }
            if (canvasX > 355 && canvasX < 666 && canvasY > 298 && canvasY < 353) { stateM += 100; atmS[4] += sArray[-2 + stateM / 100] + ", "; }
            if (fade == 0 && sArray.length < stateM / 100) {
                atmS[0] = atmS[0].substring(0, atmS[0].length - 2);
                atmS[1] = atmS[1].substring(0, atmS[1].length - 2);
                atmS[2] = atmS[2].substring(0, atmS[2].length - 2);
                atmS[3] = atmS[3].substring(0, atmS[3].length - 2);
                atmS[4] = atmS[0].substring(0, atmS[4].length - 2);
                if (atmS[0].length > 0) { printout += "Twice a Week: " + atmS[0] + ".  \n\n"; }
                if (atmS[1].length > 0) { printout += "Once a Week: " + atmS[1] + ".  \n\n"; }
                if (atmS[2].length > 0) { printout += "Twice a Month: " + atmS[2] + ".  \n\n"; }
                if (atmS[3].length > 0) { printout += "Once a Month: " + atmS[3] + ".  \n\n"; }
                if (atmS[4].length > 0) { printout += "Once a Year: " + atmS[4] + ".  \n\n"; }

                atm[0] = 0;
                for (let i = 0; i < s2Array.length; i++) {
                    atm[3] += s2Array[i];
                }
                printout += "Total Worth: $" + atm[3].toFixed(1) + "M";
                copytoclipboard(printout);
                fade = 1; sendScene = "endscreen";
            }
        }
    }

    if (rset1 == 1) {
        tArray = []; t2Array = []; t3Array = [];
        pArray = []; p2Array = []; p3Array = [];
        atm = [0, 0, 0, 0, 0, 0]; atmS = ["", "", "", "", ""];
        movM = [0, 0, 0, 0, 0, 0]; mov = movM.slice(); movD = [0, 0, 0, 0, 0, 0]; movT = [0, 0, 0, 0, 0, 0]; movS = [5, 5, 5, 5, 5, 5];
        rset1 = 0;
    }
    if (rset2 == 1) {
        xArray = []; x2Array = []; x3Array = [];
        yArray = []; y2Array = []; y3Array = [];
        mat = [0, 0, 0, 0, 0, 0]; matS = ["", "", "", "", ""];
        zovM = [0, 0, 0, 0, 0, 0]; zov = zovM.slice(); zovD = [0, 0, 0, 0, 0, 0]; zovT = [0, 0, 0, 0, 0, 0]; zovS = [5, 5, 5, 5, 5, 5];
        rset2 = 0;
    }
    nodown = 0;
}//End clickfunc

{//RSETS------------------------------------------------------------
    //rset1
    var tArray = []; var t2Array = []; var t3Array = [];
    var pArray = []; var p2Array = []; var p3Array = [];
    var atm = [0, 0, 0, 0, 0, 0]; var atmS = ["", "", "", "", ""];
    //rset2
    var xArray = []; var x2Array = []; var x3Array = [];
    var yArray = []; var y2Array = []; var y3Array = [];
    var mat = [0, 0, 0, 0, 0, 0]; var matS = ["", "", "", "", ""];
}
//------------------------------------------------------------------
//IMPORTANT----------------
var scene = "intro";
var stateM = 0;
var state = stateM;
var focus = "main";
movM[0] = 400 * 0; mov[0] = movM[0]; //* 
zovM[0] = 400 * 0; zov[0] = zovM[0]; //* 
//------------------------

/*CELEBS RANGE (1-5)

4-5--------------------
Sydney Sweeney - 284
Emily Ratajkowski - 229
Brie Larson - 149
Emmy Rossum - 62
Sarah Hyland - 52
Sadie Sink - 50
--------------------
3-4--------------------
Amy Adams - 44
Karen Fukuhara - 41
Melissa Fumero - 36
Katherine McNamara - 35
Emma Roberts - 30
Gillian Jacobs - 23
--------------------
2-3--------------------
Shailene Woodley - 18
Camila Morrone - 12
Lili Simmons - 11
Evan Rachel Wood - 7.3
Odette Annable - 5
-----------------------
1-2--------------------
Mikey Madison - 3.9
Kelsey Asbille - 1.7
Elizabeth Banks - 1.2 
Hilary Swank - 1.2
Hannah Jeter - 0
--------------------

*/
var pArray = ["Sydney Sweeney", 5, "Brie Larson", 4.5, "Emmy Rossum", 4.1, "Sarah Hyland", 3.8,
    "Sadie Sink", 4.1, "Amy Adams", 3.7, "Karen Fukuhara", 3.1, "Melissa Fumero", 3.3,
    "Katherine McNamara", 3, "Emma Roberts", 3.9, "Shailene Woodley", 2.2, "Camila Morrone", 2,
    "Lili Simmons", 2.5, "Evan Rachel Wood", 2.1, "Odette Annable", 1.9, "Mikey Madison", 1,
    "Kelsey Asbille", 1.2, "Elizabeth Banks", 1, "Hilary Swank", 1.5, "Hannah Jeter", 1.8,
    "Emily Ratajkowski", 5, "Gillian Jacobs", 3, "Christen Harper", 1.6, "Normani", 1.1,
    "Christian Serratos", 1, "Scarlett Johansson", 5, "Amanda Righetti", 1.6, "Riley Keough", 1.3,
    "Brooklyn Decker", 3.3, "Nicole Scherzinger", 3.5, "Christina Ricci", 3.3, "Leighton Meester", 2.5,
    "Christina Milian", 2.8, "Taylor Tomlinson", 1.3, "Christina Hendricks", 4.4, "Olivia Dunne", 5,
    "Hailee Steinfeld", 4.9, "Kelsea Ballerini", 1.2, "Anne Hathaway", 5, "Angelina Jolie", 4.8,
    "Michelle Trachtenberg", 3.5, "Monica Barbaro", 2.3, "Ashley Benson", 2.9, "Bryce Dallas Howard", 4.2,
    "Summer Glau", 2.8, "Brenda Song", 3, "Rachel Sennott", 1, "Yasmeen Fletcher", 1, "Larsen Thompson", 3.8,
    "Jasmine Tookes", 1.7];

var globalID;


var sArray = []; var s2Array = []; var s3Array = [];
var money = 20; var daynum = 1;
var mmode = "B"; var tnum = 0;
var celC = []; var celV = []; ditract(pArray, celC, celV); bishuffle(celC, celV);
var celPriceHistory = [];


var transV = [];

for (let i = 0; i < celV.length; i++) {
    atm[1] = 0;
    while (atm[1] == 0) { atm[1] = randInt(-2, 2) * 0.10; }
    if (celV[i] + atm[1] < 0.1) { celV[i] -= atm[1]; }
    else { celV[i] += atm[1]; }

    transV.push(parseFloat(atm[1].toFixed(2)));
    celV[i] = parseFloat(celV[i].toFixed(2));
    //celPrice is 2D array, so put celV in make anonnymous array and push that
    //Future Pushes will push prices elements into specific array indexes
    celPriceHistory.push([celV[i]]);//Store Price History, 
}
for (let i = 0; i < 10; i++) {
    //Populate with 10 rounds of price data
    priceChange()
}

//sArray = ["Sydney Sweeney","Brie Larson","Emmy Rossum","Sarah Hyland",
//	  "Sadie Sink","Amy Adams","Karen Fukuhara","Melissa Fumero",
//	  "Katherine McNamara","Emma Roberts"];
//s2Array = [2.2,5,7,3];
//sArray = ["Camila Morrone","Elizabeth Banks"];

var utimer = 0;

var seconds = new Date().getTime() / 1000; var supd = 0;


var tlefti = 60 * 6;
var tleft = tlefti;
var tacc = 0;
var ecount = [0, 0, 0, 0];


function repeatOften() {
    //BG
    ctx.fillStyle = "#bdfff2";
    ctx.fillRect(0, 0, 800, 400);

    if (scene == "intro") {
        if (state < 100) {
            ctx.drawImage(intro, 0, 0, 800, 400);
        }
        if (state > 0 && state < 200) {
            ctx.globalAlpha = state / 100;
            ctx.drawImage(intro2, 0, 0, 800, 400);
            ctx.globalAlpha = 1;
        }
        if (state > 100 && state < 300) {
            ctx.globalAlpha = -1 + state / 100;
            ctx.drawImage(intro3, 0, 0, 800, 400);
            ctx.globalAlpha = 1;
        }
    }

    if (scene == "endscreen") {
        ctx.drawImage(endtitle, 0, 0, 800, 400);
    }

    if (scene == "END") {
        if (state < 100) {
            ctx.drawImage(END1, 0, 0, 800, 400);
        }

        if (state > 0 + 100 * 0 && state < 200 + 100 * 0) {
            ctx.globalAlpha = state / 100;
            ctx.drawImage(END2BG, 0, 0, 800, 400);
            c1Image.src = "cel/" + sArray[0] + ".png";
            ctx.drawImage(c1Image, 69, 60, 183, 193);
            ctx.drawImage(END2W, 0, 0, 800, 400);
            ctx.font = "700 20px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
            wrapText(sArray[0], 161, 277, 174, 25, "OFF");
            ctx.drawImage(endbar, 0, 0, 800, 400);
            ctx.font = "900 15px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
            ctx.fillText(sArray.length + " CELEBS LEFT", 162, 353);

            ctx.font = "900 25px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
            ctx.fillText("TWICE A WEEK (" + ecount[0] + "/1)", 353, 84);
            ctx.fillText("ONCE A WEEK (" + ecount[1] + "/2)", 353, 84 + 62);
            ctx.fillText("TWICE A MONTH (" + ecount[2] + "/3)", 353, 84 + 62 * 2.02);
            ctx.fillText("ONCE A MONTH (" + ecount[3] + "/4)", 353, 84 + 62 * 3.02);
            ctx.globalAlpha = 1;
        }

        for (let i = 1; i < sArray.length; i++) {
            if (state > 0 + 100 * i && state < 200 + 100 * i && sArray.length > i) {
                ctx.globalAlpha = -i + state / 100;
                ctx.drawImage(END2BG, 0, 0, 800, 400);
                c1Image.src = "cel/" + sArray[i] + ".png";
                ctx.drawImage(c1Image, 69 + state - (i + 1) * 100, 60, 183, 193);
                ctx.drawImage(END2W, 0 + state - (i + 1) * 100, 0, 800, 400);
                ctx.font = "700 20px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
                wrapText(sArray[i], 161 + state - (i + 1) * 100, 277, 174, 25, "OFF");
                ctx.drawImage(endbar, 0, 0, 800, 400);
                ctx.font = "900 15px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
                ctx.fillText((sArray.length - i) + " CELEBS LEFT", 162, 353);

                ctx.font = "900 25px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                ctx.fillText("TWICE A WEEK (" + ecount[0] + "/1)", 353, 84);
                ctx.fillText("ONCE A WEEK (" + ecount[1] + "/2)", 353, 84 + 62);
                ctx.fillText("TWICE A MONTH (" + ecount[2] + "/3)", 353, 84 + 62 * 2.02);
                ctx.fillText("ONCE A MONTH (" + ecount[3] + "/4)", 353, 84 + 62 * 3.02);
                ctx.globalAlpha = 1;
            }
        }

        /*
        if (state>0+100*1&&state<200+100*1){
            ctx.globalAlpha=-1+state/100;
            ctx.drawImage(END2BG,0,0,800,400);
            c1Image.src="cel/" + sArray[1] + ".png";
            ctx.drawImage(c1Image,69+state-200,60,183,193);
            ctx.drawImage(END2W,0+state-200,0,800,400);
            ctx.font = "700 20px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
            wrapText(sArray[1], 161+state-200,277,174,25,"OFF");
        	
            ctx.font = "900 25px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
            ctx.fillText("TWICE A WEEK (" + ecount[0] + "/3)",353,84);
            ctx.fillText("ONCE A WEEK (" + ecount[1] + "/3)",353,84+62);
            ctx.fillText("TWICE A MONTH (" + ecount[2] + "/3)",353,84+62*2.02);
            ctx.fillText("ONCE A MONTH (" + ecount[3] + "/3)",353,84+62*3.02);
            ctx.globalAlpha=1;
        }
        if (state>0+100*2&&state<200+100*2){
            ctx.globalAlpha=-2+state/100;
            ctx.drawImage(END2BG,0,0,800,400);
            c1Image.src="cel/" + sArray[1] + ".png";
            ctx.drawImage(c1Image,69+state-300,60,183,193);
            ctx.drawImage(END2W,0+state-300,0,800,400);
            ctx.font = "700 20px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
            wrapText(sArray[1], 161+state-300,277,174,25,"OFF");
        	
            ctx.font = "900 25px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
            ctx.fillText("TWICE A WEEK (" + ecount[0] + "/3)",353,84);
            ctx.fillText("ONCE A WEEK (" + ecount[1] + "/3)",353,84+62);
            ctx.fillText("TWICE A MONTH (" + ecount[2] + "/3)",353,84+62*2.02);
            ctx.fillText("ONCE A MONTH (" + ecount[3] + "/3)",353,84+62*3.02);
            ctx.globalAlpha=1;
        }
        */

    }

    if (scene == "M") {
        ctx.drawImage(BG, 0, 0, 800, 400);

        //utimer++ 
        supd = new Date().getTime() / 1000;
        tleft = tlefti - tacc - Math.round(supd - seconds);
        tleft = Math.round(tleft);
        if (fade == 0 && tleft <= 0) { fade = 1; sendScene = "END"; }

        if (supd - seconds > 10) {
            //Moved Price Change Function to:
            //1. Allow initialization call to have price history
            //2. Test out different Algorithms
            //3. Support Events (ie Market Crash etc..) based on time
            priceChange()

            if (sArray.length > 0) {
                for (let i = 0; i < sArray.length; i++) {
                    s2Array[i] = celV[celC.indexOf(sArray[i], 1)];
                    if (sArray[i] == celC[0]) {
                        s2Array[i] = celV[0];
                    }
                }
            }
            seconds = new Date().getTime() / 1000; supd = 0; tacc += 10;
        }

        ctx.drawImage(sidebar, 0, 0, 800, 400);
        ctx.font = "900 27px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
        ctx.fillText("$" + money.toFixed(1) + "M", 58, 169);
        ctx.font = "900 18px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
        ctx.fillText("TIME LEFT", 60, 232);
        ctx.font = "900 40px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
        if (tleft % 60 > 9) { wrapText(String(Math.floor(tleft / 60) + ":" + tleft % 60), 66, 281, 105, 40, "OFF"); }
        else { wrapText(String(Math.floor(tleft / 60) + ":0" + tleft % 60), 66, 281, 105, 40, "OFF"); }

        if (mmode == "B") {
            ctx.drawImage(sidebarB, 0, 0, 800, 400);

            cImage.src = "cel/" + celC[0 + curr2] + ".png";
            ctx.drawImage(cImage, 130, 59, 294 / 5.6, 308 / 5.6);
            c2Image.src = "cel/" + celC[1 + curr2] + ".png";
            ctx.drawImage(c2Image, 130, 59 + 56, 294 / 5.6, 308 / 5.6);
            c3Image.src = "cel/" + celC[2 + curr2] + ".png";
            ctx.drawImage(c3Image, 130, 59 + 55.8 * 2, 294 / 5.6, 308 / 5.6);
            c4Image.src = "cel/" + celC[3 + curr2] + ".png";
            ctx.drawImage(c4Image, 130, 59 + 55.5 * 3, 294 / 5.6, 308 / 5.6);
            c5Image.src = "cel/" + celC[4 + curr2] + ".png";
            ctx.drawImage(c5Image, 130, 59 + 55.5 * 4, 294 / 5.6, 308 / 5.6);

            c6Image.src = "cel/" + celC[5 + curr2] + ".png";
            ctx.drawImage(c6Image, 130 + 326, 59, 294 / 5.6, 308 / 5.6);
            c7Image.src = "cel/" + celC[6 + curr2] + ".png";
            ctx.drawImage(c7Image, 130 + 326, 59 + 56, 294 / 5.6, 308 / 5.6);
            c8Image.src = "cel/" + celC[7 + curr2] + ".png";
            ctx.drawImage(c8Image, 130 + 326, 59 + 55.5 * 2, 294 / 5.6, 308 / 5.6);
            c9Image.src = "cel/" + celC[8 + curr2] + ".png";
            ctx.drawImage(c9Image, 130 + 326, 59 + 55.5 * 3, 294 / 5.6, 308 / 5.6);
            c10Image.src = "cel/" + celC[9 + curr2] + ".png";
            ctx.drawImage(c10Image, 130 + 326, 59 + 55.5 * 4, 294 / 5.6, 308 / 5.6);

            ctx.drawImage(buymenu, 0, 0, 800, 400);

            ctx.drawImage(upd, 0, 0, 800, 400);
            ctx.fillStyle = "green";
            if (supd - seconds > 0.1) { ctx.fillRect(227, 353, (supd - seconds) * (27 / 2), 12); }

            if (curr2 > 0) { ctx.drawImage(buyUD, 0, 0, 800, 400); }

            if (curr2 == 40) { ctx.drawImage(buyU, 0, 0, 800, 400); }

            for (let z = 0; z < 10; z++) {
                if (sArray.length > 0) {
                    if (sArray.includes(celC[z + curr2]) == true) {
                        if (z < 5) { ctx.drawImage(buycheck, 0, 55.5 * z, 800, 400); }
                        else { ctx.drawImage(buycheck, 0 + 326, 55.5 * (z - 5), 800, 400); }
                    }
                }
            }
            for (let i = 0; i < 5; i++) {

                ctx.fillStyle = "black"; ctx.textAlign = "center";
                if (celC[i + curr2] == "Bryce Dallas Howard") { ctx.font = "700 15px Arial"; wrapText(celC[i + curr2], 238, 79 + 55.6 * i, 120, 25, "OFF"); }
                else if (celC[i + curr2].length < 11) { ctx.font = "700 17px Arial"; wrapText(celC[i + curr2], 238, 79 + 55.6 * i, 100, 25, "OFF"); }
                else { ctx.font = "700 16px Arial"; wrapText(celC[i + curr2], 238, 79 + 55.6 * i, 100, 25, "OFF"); }
                /*
                ctx.font = "900 20px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                ctx.fillText("$" + celV[i + curr2] + "M", 356, 92 + 55.6 * i);
                */

                ctx.fillStyle = "black"; ctx.textAlign = "center";

                if (celC[i + 5 + curr2] == "Bryce Dallas Howard") { ctx.font = "700 15px Arial"; wrapText(celC[i + 5 + curr2], 238 + 326, 79 + 55.6 * i, 120, 25, "OFF"); }
                else if (celC[i + 5 + curr2].length < 11) { ctx.font = "700 17px Arial"; wrapText(celC[i + 5 + curr2], 238 + 326, 79 + 55.6 * i, 100, 25, "OFF"); }
                else { ctx.font = "700 16px Arial"; wrapText(celC[i + 5 + curr2], 238 + 326, 79 + 55.6 * i, 100, 25, "OFF"); }

                //ctx.fillStyle = "red";
                //ctx.fillRect(295, 59 + 55.6 * i, 155, 50);
                SimpleChart(celPriceHistory[i + curr2], 293, 59 + 55.6 * i, 163, 55);
                //ctx.fillStyle = "blue";
                //ctx.fillRect(295 + 326, 59 + 55.6 * i, 155, 50);
                SimpleChart(celPriceHistory[i + 5 + curr2], 293 + 326, 59 + 55.6 * i, 163, 55);

                /*
                ctx.font = "900 20px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                ctx.fillText("$" + celV[i + 5 + curr2] + "M", 356 + 326, 92 + 55.6 * i);
                if (transV[i + curr2] > 0) {
                    ctx.drawImage(inc, 0, 0 + 55.4 * i, 800, 400);
                    ctx.font = "900 10px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                    ctx.fillText("+" + transV[i + curr2], 320, 80 + 55.4 * i);
                }
                else {
                    ctx.drawImage(dec, 0, 0 + 55.4 * i, 800, 400);
                    ctx.font = "900 10px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                    ctx.fillText(transV[i + curr2], 324, 80 + 55.4 * i);
                }

                if (transV[i + 5 + curr2] > 0) {
                    ctx.drawImage(inc, 0 + 326, 0 + 55.4 * i, 800, 400);
                    ctx.font = "900 10px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                    ctx.fillText("+" + transV[i + 5 + curr2], 320 + 326, 80 + 55.4 * i);
                }
                else {
                    ctx.drawImage(dec, 0 + 326, 0 + 55.4 * i, 800, 400);
                    ctx.font = "900 10px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                    ctx.fillText(transV[i + 5 + curr2], 324 + 326, 80 + 55.4 * i);
                }
                    */
            }

            if (mov[0] > 0) {
                ctx.globalAlpha = mov[0] / 100;
                cImage1.src = "cel/" + sendName + ".png";
                ctx.drawImage(cImage1, 310, 71, 180, 200);
                ctx.drawImage(buymenu2, 0, 0, 800, 400);
                ctx.font = "700 25px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
                wrapText(sendName, 400, 283, 173, 27, "OFF");
                ctx.font = "900 30px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";

                mat[0] = transV[(celC.indexOf(sendName), 1)];
                atm[0] = celV[tnum];

                ctx.fillText("$" + atm[0] + "M", 381, 357);

                if (mat[0] > 0) {
                    ctx.drawImage(inc2, 0, 0, 800, 400);
                    ctx.font = "900 13px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                    ctx.fillText("+" + mat[0], 329, 340);
                }
                else {
                    ctx.drawImage(dec2, 0, 0, 800, 400);
                    ctx.font = "900 13px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                    ctx.fillText(mat[0], 333, 339);
                }
                ctx.globalAlpha = 1;
            }
        }
        if (mmode == "S") {
            ctx.drawImage(sidebarS, 0, 0, 800, 400);
            ctx.globalAlpha = 1 - (mov[1] / 100);
            ctx.drawImage(sellmenu, 0, 0, 800, 400);
            if (curr == 0) { ctx.drawImage(sellL, 0, 0, 800, 400); }
            if (curr >= sArray.length - 3) { ctx.drawImage(sellR, 0, 0, 800, 400); }
            ctx.font = "900 30px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
            ctx.fillText((curr / 3 + 1), 646, 52);

            //ctx.drawImage(sellupd,0,0,800,400);
            ctx.fillStyle = "white"; ctx.strokeStyle = "black"; ctx.lineWidth = 2;
            ctx.strokeRect(387, 389, 10 * (27 / 2), 5);
            ctx.fillRect(387, 389, 10 * (27 / 2), 5);
            ctx.fillStyle = "green"; ctx.strokeStyle = "black"; ctx.lineWidth = 2;
            if (supd - seconds > 0.05) {
                ctx.strokeRect(387, 389, (supd - seconds) * (27 / 2), 5);
                ctx.fillRect(387, 389, (supd - seconds) * (27 / 2), 5);
            }

            if (sArray.length > 0 + curr) {
                cImage.src = "cel/" + sArray[0 + curr] + ".png";
                ctx.drawImage(cImage, 165, 81, 180, 189);
                ctx.drawImage(sellwrapper, 0, 0, 800, 400);
                ctx.font = "700 23px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
                wrapText(sArray[0 + curr], 255, 293, 171, 27, "OFF");
                ctx.font = "900 26px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                ctx.fillText("$" + s2Array[0 + curr] + "M", 232, 366);

                if (transV[celC.indexOf(sArray[0 + curr])] > 0) {
                    ctx.drawImage(inc2, -145, 11, 800, 400);
                    ctx.font = "900 13px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                    ctx.fillText("+" + transV[celC.indexOf(sArray[0 + curr])], 183, 350);
                }
                else {
                    ctx.drawImage(dec2, -145, 11, 800, 400);
                    ctx.font = "900 14px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                    ctx.fillText(transV[celC.indexOf(sArray[0 + curr])], 184, 350);
                }
            }
            if (sArray.length > 1 + curr) {
                c2Image.src = "cel/" + sArray[1 + curr] + ".png";
                ctx.drawImage(c2Image, 165 + 199, 81, 180, 189);
                ctx.drawImage(sellwrapper, 199, 0, 800, 400);
                ctx.font = "700 23px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
                wrapText(sArray[1 + curr], 255 + 199, 293, 171, 27, "OFF");
                ctx.font = "900 26px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                ctx.fillText("$" + s2Array[1 + curr] + "M", 232 + 199, 366);

                if (transV[celC.indexOf(sArray[1 + curr])] > 0) {
                    ctx.drawImage(inc2, -145 + 199, 11, 800, 400);
                    ctx.font = "900 13px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                    ctx.fillText("+" + transV[celC.indexOf(sArray[1 + curr])], 183 + 199, 350);
                }
                else {
                    ctx.drawImage(dec2, -145 + 199, 11, 800, 400);
                    ctx.font = "900 14px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                    ctx.fillText(transV[celC.indexOf(sArray[1 + curr])], 184 + 199, 350);
                }
            }
            if (sArray.length > 2 + curr) {
                c3Image.src = "cel/" + sArray[2 + curr] + ".png";
                ctx.drawImage(c3Image, 165 + 199 * 2, 81, 180, 189);
                ctx.drawImage(sellwrapper, 199 * 2, 0, 800, 400);
                ctx.font = "700 23px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
                wrapText(sArray[2 + curr], 255 + 199 * 2, 293, 171, 27, "OFF");
                ctx.font = "900 26px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                ctx.fillText("$" + s2Array[2 + curr] + "M", 232 + 199 * 2, 366);


                if (transV[celC.indexOf(sArray[2 + curr])] > 0) {
                    ctx.drawImage(inc2, -145 + 199 * 2, 11, 800, 400);
                    ctx.font = "900 13px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                    ctx.fillText("+" + transV[celC.indexOf(sArray[2 + curr])], 183 + 199 * 2, 350);
                }
                else {
                    ctx.drawImage(dec2, -145 + 199 * 2, 11, 800, 400);
                    ctx.font = "900 14px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                    ctx.fillText(transV[celC.indexOf(sArray[2 + curr])], 184 + 199 * 2, 350);
                }

            }
            ctx.globalAlpha = 1;
            if (mov[1] > 0) {
                ctx.globalAlpha = mov[1] / 100;
                ctx.drawImage(sellmenu2, 0, 0 - mov[1] * 2 + 200, 800, 400);
                cImage1.src = "cel/" + sendName + ".png";
                ctx.drawImage(cImage1, 165 + 199, 81 - mov[1] * 2.5 + 200, 180, 189);
                ctx.drawImage(sellwrapper, 199, 0 - mov[1] * 2.5 + 200, 800, 400);
                ctx.font = "700 23px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
                wrapText(sendName, 255 + 199, 293 - mov[1] * 2.5 + 200, 171, 27, "OFF");
                ctx.font = "900 26px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                atm[0] = s2Array[tnum];
                ctx.fillText("$" + atm[0] + "M", 232 + 199, 366 - mov[1] * 2.5 + 200);

                mat[1] = transV[celC.indexOf(sArray[mat[2] + curr])];

                ctx.drawImage(selladdon, 0, 0 + mov[1] * 2 - 200, 800, 400);
                ctx.font = "900 30px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
                if (s3Array.length > 0) { ctx.fillText("$" + s3Array[tnum] + "M", 242, 235 + mov[1] * 2 - 200); }

                if (s3Array.length > 0) {
                    ctx.font = "900 12px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                    if (mat[1] > 0) {
                        ctx.drawImage(inc2, 0 + 54, -40 - mov[1] * 2 + 200, 800, 400);
                        ctx.fillText("+" + mat[1], 385, 301 - mov[1] * 2 + 200);
                    }
                    else {
                        ctx.drawImage(dec2, 0 + 54, -40 - mov[1] * 2 + 200, 800, 400);
                        ctx.fillText(mat[1], 387, 298 - mov[1] * 2 + 200);
                    }
                }

                ctx.globalAlpha = 1;
            }
        }
        if (zov[0] > 0) {
            ctx.globalAlpha = zov[0] / 100;
            ctx.drawImage(cscreen, 0, 0, 800, 400);
            ctx.globalAlpha = 1;
        }
    }//END SCENE M

    //Smooth Scroll
    if (stateTimer < stateDelay) { stateTimer += 1; }
    else {
        if (state < stateM) { if (stateM - state <= 1) { state = stateM; } else { state += (stateM - state) / (stateSpeed); } }
        if (state > stateM) { if (state - stateM <= 1) { state = stateM; } else { state -= (state - stateM) / (stateSpeed); } }
    }
    if (state == stateM) { stateTimer = 0; }

    //Outline
    ctx.drawImage(foutline, 0, 0, 800, 400);

    //mov
    for (let a = 0; a < 6; a++) { if (mov[a] != movM[a] && movT[a] < movD[a]) { movT[a] += (1); } else { if (mov[a] < movM[a]) { if (movM[a] - mov[a] <= 1) { mov[a] = movM[a]; } else { mov[a] += (movM[a] - mov[a]) / (movS[a]); } } if (mov[a] > movM[a]) { if (mov[a] - movM[a] <= 1) { mov[a] = movM[a]; } else { mov[a] -= (mov[a] - movM[a]) / (movS[a]); } } } if (mov[a] == movM[a]) { movT[a] = 0; } }
    //zov
    for (let a = 0; a < 6; a++) { if (zov[a] != zovM[a] && zovT[a] < zovD[a]) { zovT[a] += (1); } else { if (zov[a] < zovM[a]) { if (zovM[a] - zov[a] <= 1) { zov[a] = zovM[a]; } else { zov[a] += (zovM[a] - zov[a]) / (zovS[a]); } } if (zov[a] > zovM[a]) { if (zov[a] - zovM[a] <= 1) { zov[a] = zovM[a]; } else { zov[a] -= (zov[a] - zovM[a]) / (zovS[a]); } } } if (zov[a] == zovM[a]) { zovT[a] = 0; } }

    //Errormsg
    if (errormsgshow == 1) { errorTimer += 1; if (errorTimer < 8) { errorImage.src = 'fade/error' + String(Math.floor(errorTimer)) + '.png'; ctx.drawImage(errorImage, 0, 0, 800, 400); } else { ctx.drawImage(error8, 0, 0, 800, 400); ctx.font = "900 " + String(errortextsize) + "px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center"; ctx.fillText(errormsg, 400, 210); } if (errorTimer > errorLast) { errormsgshow = 2; errorTimer = 8; } }
    if (errormsgshow == 2) { errorTimer -= 0.7; if (errorTimer > 1) { errorImage.src = 'fade/error' + String(Math.floor(errorTimer)) + '.png'; ctx.drawImage(errorImage, 0, 0, 800, 400); } else { errormsgshow = 0; errorTimer = 0; } }

    //Transition
    if (fade == 1) {
        fadeTimer += 0.5
        if (fadeTimer > changeFrame) {
            state = 0; stateM = 0; scene = sendScene; curr = 0; curr2 = 0; curr3 = 0;
            tArray = []; t2Array = []; t3Array = [];
            pArray = []; p2Array = []; p3Array = [];
            atm = [0, 0, 0, 0, 0, 0]; atmS = ["", "", "", "", ""];
            xArray = []; x2Array = []; x3Array = [];
            yArray = []; y2Array = []; y3Array = [];
            mat = [0, 0, 0, 0, 0, 0]; matS = ["", "", "", "", ""];
            movM = [0, 0, 0, 0, 0, 0]; mov = movM.slice(); movD = [0, 0, 0, 0, 0, 0]; movT = [0, 0, 0, 0, 0, 0]; movS = [5, 5, 5, 5, 5, 5];
            zovM = [0, 0, 0, 0, 0, 0]; zov = zovM.slice(); zovD = [0, 0, 0, 0, 0, 0]; zovT = [0, 0, 0, 0, 0, 0]; zovS = [5, 5, 5, 5, 5, 5];
        }
        if (fadeTimer > maxFrame) { fadeTimer = 0; fade = 0; } if (fadeTimer < 10 && fadeTimer >= 1) { fadeImage.src = 'fade/fadeanim/000' + String(Math.floor(fadeTimer)) + '.png'; } if (fadeTimer >= 10) { fadeImage.src = 'fade/fadeanim/00' + String(Math.floor(fadeTimer)) + '.png'; } ctx.drawImage(fadeImage, 0, 0, 800, 400);
    }

    //GUI Visual
    if (guion == 1) {
        if (guiA[0] == "A") {
            ctx.drawImage(fshortcuts, 0, 0, 800, 400);
        }
        if (guiA[0] == "R") {
            ctx.strokeStyle = "black"; ctx.lineWidth = 1;
            if (guiA[1] == "R") { ctx.strokeRect(sptArray[0], sptArray[1], sptArray[2] - sptArray[0], sptArray[3] - sptArray[1]); }
            else { ctx.strokeRect(sptArray[0], sptArray[1], canvasX - sptArray[0], canvasY - sptArray[1]); }
        }
        if (guiA[0] == "B" && guiA[1] != "B" && guiA[1] != "V") { ctx.lineWidth = 2; ctx.strokeStyle = "red"; ctx.strokeRect(sptArray[0], sptArray[1], canvasX - sptArray[0], canvasY - sptArray[1]); }
        if (guiA[1] == "B" || guiA[1] == "V") { ctx.strokeStyle = "red"; ctx.strokeRect(sptArray[0], sptArray[1], sptArray[2] - sptArray[0], sptArray[3] - sptArray[1]); } if (guiA[0] == "D" && guiA[1] != "X" && guiA[1] != "Y" && guiA[1] != "D") { ctx.fillStyle = "blue"; ctx.fillRect(sptArray[0] - 4, sptArray[1] - 4, 8, 8); ctx.strokeStyle = "blue"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(sptArray[0] - 4, sptArray[1] - 4); ctx.lineTo(canvasX, canvasY); ctx.stroke(); }
        if (guiA[0] == "D" && guiA[1] == "X" || guiA[0] == "D" && guiA[1] == "Y" || guiA[0] == "D" && guiA[1] == "D") { ctx.strokeStyle = "blue"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(sptArray[0] - 4, sptArray[1] - 4); ctx.lineTo(sptArray[2], sptArray[3]); ctx.stroke(); ctx.fillStyle = "blue"; ctx.fillRect(sptArray[0] - 4, sptArray[1] - 4, 8, 8); ctx.fillRect(sptArray[2] - 4, sptArray[3] - 4, 8, 8); }
        if (guiA[0] == "T") {
            if (guiA[1] == "T") {
                ctx.font = "700 " + String(guifontsize) + "px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
                ctx.fillText("This is sample text", sptArray[0], sptArray[1]);
            }
            else if (guiA[1] == "L" && guiA[2] != "T") {
                ctx.font = "700 " + String(guifontsize) + "px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                ctx.fillText("This is sample text", canvasX, canvasY);
            }
            else if (guiA[1] == "L" && guiA[2] == "T") {
                ctx.font = "700 " + String(guifontsize) + "px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";
                ctx.fillText("This is sample text", sptArray[0], sptArray[1]);
            }
            else if (guiA[1] == "W") { ctx.font = "700 " + String(guifontsize) + "px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center"; wrapText("this is text that should be wrapped okay it should lol okay", sptArray[0], sptArray[1], 300, 30, "OFF"); }
            else { ctx.font = "700 " + String(guifontsize) + "px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center"; ctx.fillText("This is sample text", canvasX, canvasY); }
        }
        if (guiA[0] == "I") { if (guiA[1] == "I") { ctx.fillStyle = "#ff99ff"; ctx.fillRect(sptArray[0], sptArray[1], sptArray[2] - sptArray[0], (sptArray[2] - sptArray[0]) * 4 / 3); } else { ctx.fillStyle = "#ff99ff"; ctx.fillRect(sptArray[0], sptArray[1], canvasX - sptArray[0], (canvasX - sptArray[0]) * 4 / 3); } }
        if (guiA[0] == "W") {
            if (guiA[1] == "1" || guiA[1] == "2") {
                ctx.fillStyle = "#c1ffb8"; ctx.fillRect(sptArray[0] - 4, sptArray[1] - 4, 5, 5);
            }
            if (guiA[2] == "1" || guiA[1] == "2") {
                ctx.fillStyle = "red"; ctx.fillRect(sptArray[2] - 4, sptArray[1] - 4, 5, 5);
            }
            if (guiA[3] == "1") {
                ctx.fillStyle = "blue"; ctx.fillRect(sptArray[4] - 4, sptArray[1] - 4, 5, 5);
            }
            if (guiA[4] == "1") {
                ctx.fillStyle = "#f0fc83"; ctx.fillRect(sptArray[2] - 4, sptArray[7] - 4, 5, 5);
            }

            if (guiA[3] == "2") {
                ctx.fillStyle = "blue"; ctx.fillRect(sptArray[0] - 4, sptArray[5] - 4, 5, 5);
            }
            if (guiA[4] == "2") {
                ctx.fillStyle = "#f0fc83"; ctx.fillRect(sptArray[0] - 4, sptArray[7] - 4, 5, 5);
            }

        }
    }

    globalID = requestAnimationFrame(repeatOften);
}//END REPEAT OFTEN

globalID = requestAnimationFrame(repeatOften);

function priceChange() {
    transV = [];
    for (let i = 0; i < celV.length; i++) {

        //ATM1 is the amount value
        //ATM2 is random die roll between 1-100 ino lookup table to adjust ATM1
        //ATM3 is a 50% coin flip to decide if up or down...

        atm[1] = 0.1; atm[2] = randInt(0, 100);
        if (atm[2] < 50) { atm[1] = 0.2; }
        if (atm[2] < 30) { atm[1] = 0.3; }
        if (atm[2] < 10) { atm[1] = 0.4; }
        if (atm[2] < 5) { atm[1] = 0.5; }
        if (atm[2] < 2) { atm[1] = 0.6; }
        atm[3] = randInt(1, 2); if (atm[3] == 1) { atm[1] = atm[1] * -1; }

        // Prevent price to drop bellow zero
        if (celV[i] + atm[1] < 0.1) { celV[i] += atm[1] * -1; atm[1] = atm[1] * -1; }
        else { celV[i] += atm[1]; }

        transV.push(parseFloat(atm[1].toFixed(2)));
        celV[i] = parseFloat(celV[i].toFixed(2))
        //celPriceHistory is initialized for each celV as an array 
        //Only push value into array
        celPriceHistory[i].push(celV[i]);//Store Price History

    }
}

function SimpleChart(data, x, y, chartWidth, chartHeight) {
    const padding = 2;
    //Scale should depend on MAX_PRICE
    var scale = chartHeight / 7.5;
    //Background
    ctx.fillStyle = "#DDDDDD";
    ctx.fillRect(x, y, chartWidth, chartHeight);

    // Draw the axes
    ctx.beginPath();

    ctx.moveTo(x + padding, y + padding);
    ctx.lineTo(x + padding, y + chartHeight - padding);
    ctx.lineTo(x + chartWidth - padding, y + chartHeight - padding);
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Draw the line

    var x_old = x + padding
    var y_old = y + chartHeight - padding - data[0] * scale
    for (let i = 1; i < data.length; i++) {
        //console.log("Data is:" + data[i]);
        //Want to change stroke color each segment so i have to start a new line each time...
        ctx.beginPath();
        ctx.moveTo(x_old, y_old);
        const x_local = x + padding + i * (chartWidth - 2 * padding) / (data.length - 1);
        const y_local = y + chartHeight - padding - data[i] * scale;
        ctx.lineTo(x_local, y_local);
        if (y_old > y_local) {
            //older> current; So we have a lower Y value; 
            //But Y is counted from the top of the screen so we went 'up'
            ctx.strokeStyle = 'green';
        } else {
            ctx.strokeStyle = 'red';
        }
        ctx.stroke();
        x_old = x_local
        y_old = y_local
    }
    //Print Stock price above
    ctx.font = "900 14px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";
    ctx.fillText("$" + data[data.length - 1].toFixed(2), x + padding + chartWidth / 2, y + 7 * padding);


}


var demo1ext = ""; var demo2ext = ""; var demo3ext = "";
function outprint() {
    if (guion == 1) {
        demo1ext = "";
        demo2ext = "";
        demo3ext = "";
        document.getElementById("demo1").innerHTML = "|X: " + canvasX + "| Y: " + canvasY + " |SCENE: " + scene + " |STATE: " + state.toFixed(1) + " |FOCUS: " + focus + " |sendName: " + sendName + " |moverz: " + moverz + "|curr: " + curr + ", " + curr2 + ", " + curr3 + "|mov: " + mov[0].toFixed(0) + ", " + mov[1].toFixed(0) + ", " + mov[2].toFixed(0) + ", " + mov[3].toFixed(0) + ", " + mov[4].toFixed(0) + ", " + mov[5].toFixed(0) + " |zov: " + zov[0].toFixed(0) + ", " + zov[1].toFixed(0) + ", " + zov[2].toFixed(0) + ", " + zov[3].toFixed(0) + ", " + zov[4].toFixed(0) + ", " + zov[5].toFixed(0); document.getElementById("demo1").innerHTML += demo1ext;
        document.getElementById("demo2").innerHTML = "|atm: " + atm[0].toFixed(0) + ", " + atm[1].toFixed(0) + ", " + atm[2].toFixed(0) + ", " + atm[3].toFixed(0) + ", " + atm[4].toFixed(0) + ", " + atm[5].toFixed(0) + "|atmS: " + atmS + "|tArray: " + tArray + "|t2Array: " + t2Array + "|t3Array: " + t3Array + "|pArray: " + pArray + "|p2Array: " + p2Array + "|p3Array: " + p3Array; document.getElementById("demo2").innerHTML += demo2ext;
        document.getElementById("demo3").innerHTML = "|mat: " + mat[0].toFixed(0) + ", " + mat[1].toFixed(0) + ", " + mat[2].toFixed(0) + ", " + mat[3].toFixed(0) + ", " + mat[4].toFixed(0) + ", " + mat[5].toFixed(0) + "|matS: " + matS + "|xArray: " + xArray + "|x2Array: " + x2Array + "|x3Array: " + x3Array + "|yArray: " + yArray + "|y2Array: " + y2Array + "|y3Array: " + y3Array; document.getElementById("demo3").innerHTML += demo3ext;
    }

    //Print Out
    document.getElementById("textprint").innerHTML = printout;
}


function copytoclipboard(text) { const elem = document.createElement('textarea'); elem.value = text; document.body.appendChild(elem); elem.select(); document.execCommand('copy'); document.body.removeChild(elem); }
function cprint() {
    copytoclipboard(printout);
    alert("Successfully Copied.");
}
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var customFloor = function (value, roundTo) {
    return Math.floor(value / roundTo) * roundTo;
}
var customCeil = function (value, roundTo) {
    return Math.ceil(value / roundTo) * roundTo;
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
function bishuffle(array, array2) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];

        [array2[currentIndex], array2[randomIndex]] = [
            array2[randomIndex], array2[currentIndex]];
    }

    return array;
    return array2;
}
function ditract(srcArray, array, array2) {
    for (let i = 0; i < srcArray.length; i += 2) {
        array.push(srcArray[i]);
        array2.push(srcArray[i + 1]);
    }
    return array;
    return array2;
}
var ogtext = "";
function splitWord(text, part) {
    if (part == 0) {
        ogtext = text;
        text = text.substring(0, text.indexOf(' '));
        if (text != "") { return text; }
        else { return ogtext; }
    }
    if (part == 1) {
        text = text.substring(text.indexOf(' ') + 1);
        return text;
    }
}

var cacheImage1 = new Image(100, 200); var cacheImage2 = new Image(100, 200); var cacheImage3 = new Image(100, 200); var cacheImage4 = new Image(100, 200); var cacheImage5 = new Image(100, 200); var cacheImage6 = new Image(100, 200); var cacheImage7 = new Image(100, 200); var cacheImage8 = new Image(100, 200); var cacheImage9 = new Image(100, 200); var cacheImage10 = new Image(100, 200);
var animImage = new Image(100, 200); var animImage1 = new Image(100, 200); var animImage2 = new Image(100, 200); var animImage3 = new Image(100, 200); var animImage4 = new Image(100, 200); var animImage5 = new Image(100, 200); var animImage6 = new Image(100, 200); var animImage7 = new Image(100, 200); var animImage8 = new Image(100, 200); var animImage9 = new Image(100, 200);
var animTimer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; var aState = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; var aidlechecktimer = 0; var oldanimTimer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function animplayer(channel, srclink, mode, speed, maxframe, x, y, w, h) {
    if (channel == 1) { cacheImage1.src = srclink + "0001.png"; ctx.drawImage(cacheImage1, x, y, w, h); }
    if (channel == 2) { cacheImage2.src = srclink + "0001.png"; ctx.drawImage(cacheImage2, x, y, w, h); }
    if (channel == 3) { cacheImage3.src = srclink + "0001.png"; ctx.drawImage(cacheImage3, x, y, w, h); }
    if (channel == 4) { cacheImage4.src = srclink + "0001.png"; ctx.drawImage(cacheImage4, x, y, w, h); }
    if (channel == 5) { cacheImage5.src = srclink + "0001.png"; ctx.drawImage(cacheImage5, x, y, w, h); }
    if (channel == 6) { cacheImage6.src = srclink + "0001.png"; ctx.drawImage(cacheImage6, x, y, w, h); }
    if (channel == 7) { cacheImage7.src = srclink + "0001.png"; ctx.drawImage(cacheImage7, x, y, w, h); }
    if (channel == 8) { cacheImage8.src = srclink + "0001.png"; ctx.drawImage(cacheImage8, x, y, w, h); }
    if (channel == 9) { cacheImage9.src = srclink + "0001.png"; ctx.drawImage(cacheImage9, x, y, w, h); }
    if (channel == 10) { cacheImage10.src = srclink + "0001.png"; ctx.drawImage(cacheImage10, x, y, w, h); }

    if (mode == "normal") {
        if (animTimer[channel] < maxframe) { animTimer[channel] += speed * (0.5); } else { animTimer[channel] = 0; }

        if (animTimer[channel] < 10 && animTimer[channel] >= 1) {
            if (channel == 1) { animImage.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 2) { animImage2.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 3) { animImage3.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 4) { animImage4.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 5) { animImage5.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 6) { animImage6.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 7) { animImage7.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 8) { animImage8.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 9) { animImage9.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
        }
        if (animTimer[channel] >= 10) {
            if (channel == 1) { animImage.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 2) { animImage2.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 3) { animImage3.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 4) { animImage4.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 5) { animImage5.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 6) { animImage6.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 7) { animImage7.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 8) { animImage8.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 9) { animImage9.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
        }
        if (channel == 1) { ctx.drawImage(animImage, x, y, w, h); }
        if (channel == 2) { ctx.drawImage(animImage2, x, y, w, h); }
        if (channel == 3) { ctx.drawImage(animImage3, x, y, w, h); }
        if (channel == 4) { ctx.drawImage(animImage4, x, y, w, h); }
        if (channel == 5) { ctx.drawImage(animImage5, x, y, w, h); }
        if (channel == 6) { ctx.drawImage(animImage6, x, y, w, h); }
        if (channel == 7) { ctx.drawImage(animImage7, x, y, w, h); }
        if (channel == 8) { ctx.drawImage(animImage8, x, y, w, h); }
        if (channel == 9) { ctx.drawImage(animImage9, x, y, w, h); }
    }

    if (mode == "smooth") {
        if (animTimer[channel] < 10 && animTimer[channel] >= 1) {
            if (channel == 1) { animImage.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 2) { animImage2.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 3) { animImage3.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 4) { animImage4.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 5) { animImage5.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 6) { animImage6.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 7) { animImage7.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 8) { animImage8.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 9) { animImage9.src = srclink + "000" + String(Math.floor(animTimer[channel])) + '.png'; }
        }
        if (animTimer[channel] >= 10) {
            if (channel == 1) { animImage.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 2) { animImage2.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 3) { animImage3.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 4) { animImage4.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 5) { animImage5.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 6) { animImage6.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 7) { animImage7.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 8) { animImage8.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
            if (channel == 9) { animImage9.src = srclink + "00" + String(Math.floor(animTimer[channel])) + '.png'; }
        }
        if (aState[channel] == 0) { animTimer[channel] += speed * (0.5); if (animTimer[channel] > maxframe) { aState[channel] = 1; } }
        if (aState[channel] == 1) { animTimer[channel] -= speed * (0.5); if (animTimer[channel] < 1) { aState[channel] = 0; } }
        if (aState[channel] == 1 && animTimer[channel] > maxframe - 5) { animTimer[channel] -= speed * (0.5); }
        if (aState[channel] == 0 && animTimer[channel] < 5) { animTimer[channel] += speed * (0.5); }

        if (channel == 1) { ctx.drawImage(animImage, x, y, w, h); } if (channel == 2) { ctx.drawImage(animImage2, x, y, w, h); } if (channel == 3) { ctx.drawImage(animImage3, x, y, w, h); } if (channel == 4) { ctx.drawImage(animImage4, x, y, w, h); } if (channel == 5) { ctx.drawImage(animImage5, x, y, w, h); } if (channel == 6) { ctx.drawImage(animImage6, x, y, w, h); } if (channel == 7) { ctx.drawImage(animImage7, x, y, w, h); } if (channel == 8) { ctx.drawImage(animImage8, x, y, w, h); } if (channel == 9) { ctx.drawImage(animImage9, x, y, w, h); }
    } aidlechecktimer += 0.5; if (aidlechecktimer < 2) { for (let i = 0; i < animTimer.length; i++) { oldanimTimer[i] = animTimer[i]; } } if (aidlechecktimer > 40) { for (let i = 0; i < animTimer.length; i++) { if (oldanimTimer[i] == animTimer[i]) { animTimer[i] = 0; oldanimTimer[i] = 0; aState[i] = 0; } } aidlechecktimer = 0; }

}

function wrapText(text, x, y, maxWidth, lineHeight, stroke) {
    var words = text.split(' '); var line = '';
    //ctx.strokeStyle = "white"; ctx.lineWidth = 3;
    for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' '; var metrics = ctx.measureText(testLine); var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            if (stroke == "ON") { ctx.strokeText(line, x, y); }
            ctx.fillText(line, x, y);
            line = words[n] + ' '; y += lineHeight;
        }
        else { line = testLine; }
    } if (stroke == "ON") { ctx.strokeText(line, x, y); } ctx.fillText(line, x, y);
}

window.addEventListener("keydown", checkKeyPressed, false); var sptArray = []; var sptArray2 = []; var difArray = []; var guiA = []; var sptout = ""; var triggerclear = 0; var guifontsize = 20;

var arrayInsert = "tArray";
var guiArrayInsert = tArray.slice();

var alreadyStroked = 0;
var guiadjx = 0; var guiadjy = 0;
var moverz = 1;
var galign = "center";
function checkKeyPressed(evt) {
    if (guion == 1) {
        if (evt.keyCode == "90") { moverz++; document.getElementById("myCanvas").style.border = "1px solid white"; if (moverz > 1) { moverz = 0; document.getElementById("myCanvas").style.border = "2px solid red"; } }
        if (evt.keyCode == "39") { guiadjx += 1; }
        if (evt.keyCode == "37") { guiadjx -= 1; }
        if (evt.keyCode == "38") { guiadjy -= 1; }
        if (evt.keyCode == "40") { guiadjy += 1; }

        if (evt.keyCode == "87") { guiA.push("W"); } if (evt.keyCode == "66") { guiA.push("B"); }
        if (evt.keyCode == "82") { guiA.push("R"); } if (evt.keyCode == "76") { guiA.push("L"); }
        if (evt.keyCode == "67") { guiA = []; sptArray = []; sptArray2 = []; }

        if (evt.keyCode == "65") { guiA.push("A"); } if (evt.keyCode == "86") { guiA.push("V"); } if (evt.keyCode == "68") { guiA.push("D"); } if (evt.keyCode == "88") { guiA.push("X"); } if (evt.keyCode == "89") { guiA.push("Y"); } if (evt.keyCode == "84") { guiA.push("T"); } if (evt.keyCode == "73") { guiA.push("I"); } if (evt.keyCode == "83") { guiA.push("S"); } if (evt.keyCode == "49") { guiA.push("1"); } if (evt.keyCode == "50") { guiA.push("2"); } if (evt.keyCode == "51") { guiA.push("3"); } if (evt.keyCode == "38") { guifontsize += 1; } if (evt.keyCode == "40") { guifontsize -= 1; }
        if (guiA[0] == "S") { sptout = ""; if (guiA[1] == "1") { for (var i = 1; i < 26; i++) { if (i < 10) { sptout += '<img style="display:none; visibility:hidden;" src="anim/placeholder/000' + String(i) + '.png" alt="">'; } else { sptout += '<img style="display:none; visibility:hidden;" src="anim/placeholder/00' + String(i) + '.png" alt="">'; } } triggerclear = 1; copytoclipboard(sptout); } if (guiA[1] == "2") { for (var i = 1; i < 51; i++) { if (i < 10) { sptout += '<img style="display:none; visibility:hidden;" src="anim/placeholder/000' + String(i) + '.png" alt="">'; } else { sptout += '<img style="display:none; visibility:hidden;" src="anim/placeholder/00' + String(i) + '.png" alt="">'; } } triggerclear = 1; copytoclipboard(sptout); } if (guiA[1] == "3") { for (var i = 1; i < 100; i++) { if (i < 10) { sptout += '<img style="display:none; visibility:hidden;" src="anim/placeholder/000' + String(i) + '.png" alt="">'; } else { sptout += '<img style="display:none; visibility:hidden;" src="anim/placeholder/00' + String(i) + '.png" alt="">'; } } triggerclear = 1; copytoclipboard(sptout); } }
        if (guiA[0] == "I") {
            sptArray.push(canvasX); sptArray.push(canvasY);
            if (guiA[1] == "I") {
                sptArray.push(canvasX); sptArray.push(canvasY);
                triggerclear = 1; sptout = 'ctx.drawImage(cImage,' + String(sptArray[0]) + ',' + String(sptArray[1]) + ',' + String(Math.round(sptArray[2] - sptArray[0])) + ',' + String(Math.round((sptArray[2] - sptArray[0]) * 4 / 3)) + ');'; copytoclipboard(sptout);
                if (guiA[2] == "S") {
                    if (moverz == 1) { sptout = 'cImage.src = "cel/" + sendName + ".png";'; sptout += '\n\t\tctx.drawImage(cImage,' + String(sptArray[0]) + ',' + String(sptArray[1]) + ',' + String(Math.round(sptArray[2] - sptArray[0])) + ',' + String(Math.round((sptArray[2] - sptArray[0]) * 4 / 3)) + ');'; copytoclipboard(sptout); }
                    else { sptout = 'cImage.src = "cel/" + sendName + ".png";'; sptout += '\n\t\tctx.drawImage(cImage,' + String(sptArray[0]) + ',' + String(sptArray[1]) + '+' + String(stateM) + ',' + String(Math.round(sptArray[2] - sptArray[0])) + ',' + String(Math.round((sptArray[2] - sptArray[0]) * 4 / 3)) + ');'; copytoclipboard(sptout); }
                }
            }
        }


        if (guiA[0] == "T" && guiA[1] == "T") {
            sptArray.push(canvasX); sptArray.push(canvasY); triggerclear = 1; sptout = 'ctx.font = "700 ' + String(guifontsize) + 'px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";';
            if (moverz == 1) { sptout += '\n\t\tctx.fillText("",' + String(sptArray[0]) + ',' + sptArray[1] + ');'; copytoclipboard(sptout); }
            else { sptout += '\n\t\tctx.fillText("",' + String(sptArray[0]) + ',' + sptArray[1] + ');'; copytoclipboard(sptout); }
        }
        if (guiA[0] == "T" && guiA[1] == "L" && guiA[2] == "T") {
            sptArray.push(canvasX); sptArray.push(canvasY); triggerclear = 1; sptout = 'ctx.font = "700 ' + String(guifontsize) + 'px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "left";';
            if (moverz == 1) { sptout += '\n\t\tctx.fillText("",' + String(sptArray[0]) + ',' + sptArray[1] + ');'; copytoclipboard(sptout); }
            else { sptout += '\n\t\tctx.fillText("",' + String(sptArray[0]) + ',' + sptArray[1] + ');'; copytoclipboard(sptout); }
        }

        if (guiA[0] == "T" && guiA[1] == "S") {
            sptout = 'ctx.strokeStyle = "black"; ctx.lineWidth = 2;'; copytoclipboard(sptout); guiA = []; triggerclear = 1;
        }

        if (guiA[0] == "T" && guiA[1] == "W") {
            sptArray.push(canvasX); sptArray.push(canvasY);
            triggerclear = 1;
            sptout = 'ctx.font = "700 ' + String(guifontsize) + 'px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";';
            sptout += '\n\t\twrapText("", ' + String(sptArray[0]) + ',' + String(sptArray[1]) + ',400,' + String(guifontsize + 5) + ',"OFF");';
            copytoclipboard(sptout);

            if (guiA[2] == "D") {
                sptArray2.push(canvasX);
                if (guiA[3] == "D") {
                    if (moverz == 1) { sptArray2.push(canvasX); sptout = 'ctx.font = "700 ' + String(guifontsize) + 'px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";'; sptout += '\n\t\twrapText("Placeholder Placeholder", ' + String(((sptArray2[1] + sptArray2[0]) / 2).toFixed(0)) + ',' + String(sptArray[1]) + ',' + String(Math.abs(sptArray2[1] - sptArray2[0])) + ',' + String(guifontsize + 5) + ',"OFF");'; }
                    else { sptArray2.push(canvasX); sptout = 'ctx.font = "700 ' + String(guifontsize) + 'px Arial"; ctx.fillStyle = "black"; ctx.textAlign = "center";'; sptout += '\n\t\twrapText("Placeholder Placeholder", ' + String(((sptArray2[1] + sptArray2[0]) / 2).toFixed(0)) + ',' + String(sptArray[1]) + ',' + String(Math.abs(sptArray2[1] - sptArray2[0])) + ',' + String(guifontsize + 5) + ',"OFF");'; }
                    copytoclipboard(sptout); triggerclear = 1;
                }
            }
        }
        if (guiA[0] == "M") { sptout = ".toLocaleString('en-US')"; copytoclipboard(sptout); triggerclear = 1; }
        if (guiA[0] == "D") { sptArray.push(canvasX); sptArray.push(canvasY); if (guiA[1] == "X") { sptArray.push(canvasX); sptArray.push(canvasY); sptout = String(Math.abs(sptArray[2] - sptArray[0])); copytoclipboard(sptout); triggerclear = 1; } if (guiA[1] == "Y") { sptArray.push(canvasX); sptArray.push(canvasY); sptout = String(Math.abs(sptArray[3] - sptArray[1])); copytoclipboard(sptout); triggerclear = 1; } if (guiA[1] == "D") { sptArray.push(canvasX); sptArray.push(canvasY); sptout = String(Math.abs(Math.round(sptArray[2] - sptArray[0]) / 2)); sptout += "," + String(Math.round(Math.abs(sptArray[3] - sptArray[1]) / 2)); copytoclipboard(sptout); triggerclear = 1; } }
        if (guiA[0] == "B") { sptArray.push(canvasX); sptArray.push(canvasY); if (guiA[1] == "B") { sptArray.push(canvasX); sptArray.push(canvasY); sptout = "if (canvasX > " + String(sptArray[0]) + " && canvasX < " + String(sptArray[2]) + " && canvasY > " + String(sptArray[1]) + " && canvasY < " + String(sptArray[3]) + "){}"; copytoclipboard(sptout); triggerclear = 1; } if (guiA[1] == "V") { sptArray.push(canvasX); sptArray.push(canvasY); sptout = "&& canvasX > " + String(sptArray[0]) + " && canvasX < " + String(sptArray[2]) + " && canvasY > " + String(sptArray[1]) + " && canvasY < " + String(sptArray[3]); copytoclipboard(sptout); triggerclear = 1; } }
        if (guiA[0] == "A") { sptout = 'animplayer(1,"anim//","smooth",1,15,0,0,800,400);'; copytoclipboard(sptout); triggerclear = 1; }
        if (guiA[0] == "A" && guiA[1] == "A") { sptout = 'checksArray.push(new checks(state,scene,canvasX,canvasY,0.3));'; copytoclipboard(sptout); triggerclear = 1; }
        if (guiA[0] == "A" && guiA[1] == "A" && guiA[2] == "A") { sptout = 'ctx.strokeStyle = "black"; ctx.lineWidth = 2;'; copytoclipboard(sptout); triggerclear = 1; }
        if (guiA[0] == "A" && guiA[1] == "A" && guiA[2] == "A" && guiA[3] == "A") { sptout = 'for (let i = 0; i < 2; i++){for (let z = 0; z < 2; z++){'; copytoclipboard(sptout); triggerclear = 1; }
        if (guiA[0] == "A" && guiA[1] == "A" && guiA[2] == "A" && guiA[3] == "A" && guiA[4] == "A") { sptout = 'ctx.shadowColor = "black"; ctx.shadowBlur = 10;'; copytoclipboard(sptout); guiA = []; triggerclear = 1; }
        if (guiA[0] == "W" && guiA[1] == "1") {//X-Axis Selecting multiple
            sptArray.push(canvasX); sptArray.push(canvasY);
            if (guiA[4] == "1") {
                sptout = "for (let i = 0; i < 4; i++){if (canvasX > " + sptArray[0] + "+" + String(sptArray[4] - sptArray[0]) + "*i" + " && canvasX < " + sptArray[2] + "+" + String(sptArray[4] - sptArray[0]) + "*i" + " && canvasY > " + sptArray[3] + " && canvasY < " + sptArray[7] + "){\n\t\t\tsendName=[i]; mat[0]=i;\n\t\t}};";
                copytoclipboard(sptout); triggerclear = 1;
            }
        }
        if (guiA[0] == "R") {
            sptArray.push(canvasX); sptArray.push(canvasY);
            if (guiA[1] == "R") {
                if (alreadyStroked == 0) { sptout = 'ctx.strokeStyle = "black"; ctx.lineWidth = 1'; sptout += '\n\t\tctx.strokeRect(' + sptArray[0] + ',' + sptArray[1] + '-state+' + stateM + ',' + String(sptArray[2] - sptArray[0]) + ',' + String(sptArray[3] - sptArray[1]) + ');'; }
                else { sptout = 'ctx.strokeRect(' + sptArray[0] + ',' + sptArray[1] + '-state+' + stateM + ',' + String(sptArray[2] - sptArray[0]) + ',' + String(sptArray[3] - sptArray[1]) + ');'; }
                copytoclipboard(sptout);
                alreadyStroked = 1;
            }
        }
    }
}
window.addEventListener("keydown", function (e) {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);