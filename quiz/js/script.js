"use strict";

/* quiz.js */

/* This file is part of Quiz OnBoard HTML5 application.
 *
 * Copyright 2010 Ankit Pati <ankitpati@gmail.com>
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation;  either version 3 of the License, or (at your option)  any  later
 * version.
 *
 * This  program is distributed in the hope that it will be useful, but  WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR  A  PARTICULAR  PURPOSE.  See the GNU General  Public  License  for  more
 * details.
 *
 * You should have received a copy of the GNU General Public License along  with
 * this program; if not, see <http://www.gnu.org/licenses/>.
 *
 * The GPL v3 text can be found at <./gpl.txt>.
 */

/* constants */
/*
 * unsigned TIMEOUT, QUESNUM, QPERRND, OPPERQ, RNDNUM;
 */
var TIMEOUT = 30;
var QUESNUM = 14;
var QPERRND = 7;
var OPPERQ  = 4;
var RNDNUM  = 2;
/* end of constants */

/* global variables */
/*
 * char **quest, **op1, **op2, **op3, **op4, **opcor, **img, **snd;
 * bool opted, optedright;
 * unsigned timeremain, timeID, gqid;
 */
var quest=new Array(QUESNUM+1), op1  =new Array(QUESNUM+1),
    op2  =new Array(QUESNUM+1), op3  =new Array(QUESNUM+1),
    op4  =new Array(QUESNUM+1), opcor=new Array(QUESNUM+1),
    img  =new Array(QUESNUM+1), snd  =new Array(QUESNUM+1),
    opted, optedright, timeremain, timeID, gqid;
/* end of global variables */

/* questions */
quest[1] = "&quot;Physics is the only science; all the rest is stamp collecting,&quot; is a quote from which famous scientist?";
op1  [1] = "Albert Einstein";
op2  [1] = "Ernest Rutherford";
op3  [1] = "Richard Feynman";
op4  [1] = "Stephen Hawking";
opcor[1] = "Ernest Rutherford";
img  [1] = "";
snd  [1] = "";

quest[2] = "Which of the following is also known as &apos;Space Alga&apos;?";
op1  [2] = "Chlorella pyrenoidosa";
op2  [2] = "Leptotrichia buccalis";
op3  [2] = "Mycoplasma gallisepticum";
op4  [2] = "Plasmodium vivax";
opcor[2] = "Chlorella pyrenoidosa";
img  [2] = "";
snd  [2] = "";

quest[3] = "&apos;Administratium&apos; was perhaps the most elaborate hoax in chemical history. What was it?";
op1  [3] = "Element with 312 protons and no neutrons";
op2  [3] = "Compound formed by all noble gases bonded together";
op3  [3] = "Element with no protons and 312 neutrons";
op4  [3] = "Compound formed by all known elements bonded together";
opcor[3] = "Element with no protons and 312 neutrons";
img  [3] = "";
snd  [3] = "";

quest[4] = "Bell Labs has numerous advancements in computing to its credit. The transistor and C language are just two of them. Which organization currently owns Bell Labs?";
op1  [4] = "Google";
op2  [4] = "Canonical";
op3  [4] = "Alcatel-Lucent";
op4  [4] = "Alexa";
opcor[4] = "Alcatel-Lucent";
img  [4] = "";
snd  [4] = "";

quest[5] = "What is &apos;Halitosis&apos; commonly known as?";
op1  [5] = "Bad Breath";
op2  [5] = "Tennis Elbow";
op3  [5] = "Athletes&apos; Foot";
op4  [5] = "Headache";
opcor[5] = "Bad Breath";
img  [5] = "";
snd  [5] = "";

quest[6] = "LPG does not have a smell of its own. As a safety precaution, a chemical is added to allow detection of a leak by smell from domestic cylinders. Which chemical is added?";
op1  [6] = "Ethyl Mercaptan";
op2  [6] = "Methyl Isocyanate";
op3  [6] = "Methane";
op4  [6] = "Decane";
opcor[6] = "Ethyl Mercaptan";
img  [6] = "";
snd  [6] = "";

quest[7] = "This element was disputed for a long time as Russians named it Kurchatovium (Ku) and Americans named it __________. Which element?";
op1  [7] = "Actinium (Ac)";
op2  [7] = "Rutherfordium (Rf)";
op3  [7] = "Curium (Cm)";
op4  [7] = "Coppernicium (Cp)";
opcor[7] = "Rutherfordium (Rf)";
img  [7] = "";
snd  [7] = "";

quest[8] = "Identify the person in the image.";
op1  [8] = "";
op2  [8] = "";
op3  [8] = "";
op4  [8] = "";
opcor[8] = "Ernest Rutherford";
img  [8] = "images/rutherford.webp";
snd  [8] = "";

quest[9] = "Identify the person in the image.";
op1  [9] = "";
op2  [9] = "";
op3  [9] = "";
op4  [9] = "";
opcor[9] = "Igor Kurchatov";
img  [9] = "images/kurchatov.webp";
snd  [9] = "";

quest[10] = "Identify the person in the image.";
op1  [10] = "";
op2  [10] = "";
op3  [10] = "";
op4  [10] = "";
opcor[10] = "Dennis Ritchie";
img  [10] = "images/ritchie.webp";
snd  [10] = "";

quest[11] = "Identify the person in the image.";
op1  [11] = "";
op2  [11] = "";
op3  [11] = "";
op4  [11] = "";
opcor[11] = "Neil Armstrong";
img  [11] = "images/armstrong.webp";
snd  [11] = "";

quest[12] = "Identify the person in the image.";
op1  [12] = "";
op2  [12] = "";
op3  [12] = "";
op4  [12] = "";
opcor[12] = "Brian Kernighan";
img  [12] = "images/kernighan.webp";
snd  [12] = "";

quest[13] = "Identify the person in the image.";
op1  [13] = "";
op2  [13] = "";
op3  [13] = "";
op4  [13] = "";
opcor[13] = "Eric Schmidt";
img  [13] = "images/schmidt.webp";
snd  [13] = "";

quest[14] = "Identify the speaker.";
op1  [14] = "";
op2  [14] = "";
op3  [14] = "";
op4  [14] = "";
opcor[14] = "Albert Einstein";
img  [14] = "";
snd  [14] = "sounds/einstein.ogg";
/* end of questions */

/* code to disable text-select and right-click */
document.oncontextmenu = function()
{
    return false;
};

document.onselectstart = function()
{
    return false;
};

document.onmousedown   = function(e)
/*
 * EVENT_t e;
 */
{
    return false;
};

document.onclick       = function()
{
    return true;
};
/* end of disabling code */

function playsound(clip, format)
/*
 * char *clip, *format;
 */
{
    document.getElementById("sound").innerHTML = "<audio autoplay=\"autoplay\"><source src=\""+clip+"\" type=\"audio/"+format+"\" /></audio>";
}

function timer()
{
    /*
     * unsigned timeshow;
     */
    var timeshow;
    if(timeremain<10) timeshow = "0"+timeremain;
    else timeshow = timeremain;
    if(!opted) document.getElementById("time").innerHTML = "Time Remaining: "+timeshow+"s";
    if(timeremain){
        timeremain--;
        timeID=setTimeout("timer()", 1000);
    }
    else if(!opted){
        document.getElementById("time").style.color = "#ff0000";
        playsound("sounds/elapse.ogg", "ogg");
        opted++;
    }
}

function wrong(answer)
/*
 * char *answer;
 */
{
    if(!opted){
        document.getElementById("result").style.color    = "#ff0000";
        document.getElementById("result").innerHTML      = "Wrong Answer";
        document.getElementById("op"+answer).style.color = "#ff0000";
        playsound("sounds/wrong.ogg", "ogg");
        opted++;
    }
}

function right(answer)
/*
 * char *answer;
 */
{
    if(!opted && !optedright){
        document.getElementById("result").style.color    = "#00ff00";
        document.getElementById("result").innerHTML      = "Right Answer";
        document.getElementById("op"+answer).style.color = "#00ff00";
        playsound("sounds/right.ogg", "ogg");
        opted++;
        optedright++;
    }
}

function show(answer, single)
/*
 * char *answer;
 * bool single;
 */
{
    if(!optedright){
        if(!single) document.getElementById("op"+answer).style.color = "#00ff00";
        else document.getElementById("result").innerHTML = answer;
        playsound("sounds/show.ogg", "ogg");
        optedright++;
        if(!opted) opted++;
    }
}

/*
TODO: Add this to opinit
<video width="320" height="240" controls="controls">
    <source src="movie.webm" type="video/webm" />
</video>
*/

function opinit(qid)
/*
 * unsigned qid;
 */
{
    /*
     * char *showans, *options, *picture, *music, *opa, *opb, *opc, *opd;
     * unsigned rno, qno;
     */
    var showans, options, picture, music, opa, opb, opc, opd, rno, qno;
    switch(qno = qid%QPERRND){
    case 0:
        rno = Math.floor(qid/QPERRND);
        qno = QPERRND;
        break;
    default:
        rno = Math.floor(qid/QPERRND)+1;
        break;
    }
    opa = "wrong(\"a\")";
    opb = "wrong(\"b\")";
    opc = "wrong(\"c\")";
    opd = "wrong(\"d\")";
    clearTimeout(timeID);
    gqid = qid;
    opted = optedright = 0;
    timeremain = TIMEOUT;
    if(qid && qid <= QUESNUM){
        if(op1[qid] === opcor[qid]){
            opa     = "right(\"a\")";
            showans = "show(\"a\", 0)";
        }
        if(op2[qid] === opcor[qid]){
            opb     = "right(\"b\")";
            showans = "show(\"b\", 0)";
        }
        if(op3[qid] === opcor[qid]){
            opc     = "right(\"c\")";
            showans = "show(\"c\", 0)";
        }
        if(op4[qid] === opcor[qid]){
            opd     = "right(\"d\")";
            showans = "show(\"d\", 0)";
        }
        if(op1[qid] === ""){
            options = "";
            showans = "show(\""+opcor[qid]+"\", 1)";
        }
        else options = "\
            <br /><button type=\"button\" class=\"opthandle\" id=\"btq\" onclick='"+opa+"'>A</button>&nbsp;<span id=\"opa\" class=\"option\">"+op1[qid]+"</span>\
            <br /><button type=\"button\" class=\"opthandle\" id=\"btw\" onclick='"+opb+"'>B</button>&nbsp;<span id=\"opb\" class=\"option\">"+op2[qid]+"</span>\
            <br /><button type=\"button\" class=\"opthandle\" id=\"bte\" onclick='"+opc+"'>C</button>&nbsp;<span id=\"opc\" class=\"option\">"+op3[qid]+"</span>\
            <br /><button type=\"button\" class=\"opthandle\" id=\"btr\" onclick='"+opd+"'>D</button>&nbsp;<span id=\"opd\" class=\"option\">"+op4[qid]+"</span>\
            <br /><br /><br />\
        ";
        if(img[qid]  === "") picture = "";
        else picture = "<img src=\""+img[qid]+"\" id=\"image\" />";
        if(snd[qid]  === "") music = "";
        else music = "\
            <audio controls=\"controls\" autoplay=\"autoplay\" id=\"sndhandle\"><source src=\""+snd[qid]+"\" type=\"audio/ogg\" /></audio><br />\
            ";
        document.getElementById("superset").innerHTML = "\
            <span id=\"sound\"></span>\
            <h2>Round "+rno+"</h2>\
            <h3>Question "+qno+"</h3>\
            <h4 id=\"time\"></h4>\
            <p class=\"question\">"+quest[qid]+"</p>\
            "+music+"\
            "+picture+"\
            "+options+"\
            <div class=\"bottom\">\
            <button type=\"button\" class=\"next\" id=\"bts\" onclick=\"opinit("+(qid-1)+")\">&lt;</button>\
            <button type=\"button\" class=\"next\" id=\"btd\" onclick=\"opinit("+(qid+1)+")\">&gt;</button>\
            <button type=\"button\" id=\"bta\" onclick='"+showans+"' class=\"show\">✓</button>\
            <span id=\"result\">&nbsp;</span>\
            </div>\
        ";
        playsound("sounds/load.ogg", "ogg");
        timer();
    }
    if(!qid){
        document.getElementById("superset").innerHTML = "\
            <span id=\"sound\"></span>\
            <br /><br /><br /><br /><br /><br /><br /><br />\
            <div class=\"center\">\
            <button type=\"button\" class=\"intro\" id=\"btd\" onclick=\"opinit("+(qid+1)+"), document.getElementById(\'superset\').mozRequestFullScreen()\">Science Quiz</button>\
            </div>\
        ";
        playsound("sounds/load.ogg", "ogg");
        playsound("sounds/load.ogg", "ogg");
    }
    if(qid > QUESNUM){
        document.getElementById("superset").innerHTML = "\
            <span id=\"sound\"></span>\
            <br /><br /><br /><br /><br /><br /><br /><br />\
            <div class=\"center\">\
            <button type=\"button\" class=\"thank\" onclick=\"window.close()\">Thank You</button>\
            </div>\
        ";
        playsound("sounds/load.ogg", "ogg");
        playsound("sounds/load.ogg", "ogg");
    }
}

function shuffle()
{
    /*
     * unsigned count, round, qcount, seed;
     * time_t today;
     */
    var count, round, qcount, seed, today;
    today = new Date();
    seed  = today.getSeconds();
    for(seed %= QPERRND; seed; seed--){
        for(round = 0; round < RNDNUM; round++){
            qcount   = round*QPERRND;
            quest[0] = quest[qcount+1];
            op1  [0] = op1  [qcount+1];
            op2  [0] = op2  [qcount+1];
            op3  [0] = op3  [qcount+1];
            op4  [0] = op4  [qcount+1];
            opcor[0] = opcor[qcount+1];
            img  [0] = img  [qcount+1];
            snd  [0] = snd  [qcount+1];
            for(count = 1; count<QPERRND; count++){
                quest[count+qcount] = quest[count+1+qcount];
                op1  [count+qcount] = op1  [count+1+qcount];
                op2  [count+qcount] = op2  [count+1+qcount];
                op3  [count+qcount] = op3  [count+1+qcount];
                op4  [count+qcount] = op4  [count+1+qcount];
                opcor[count+qcount] = opcor[count+1+qcount];
                img  [count+qcount] = img  [count+1+qcount];
                snd  [count+qcount] = snd  [count+1+qcount];
            }
            quest[qcount+QPERRND] = quest[0];
            op1  [qcount+QPERRND] = op1  [0];
            op2  [qcount+QPERRND] = op2  [0];
            op3  [qcount+QPERRND] = op3  [0];
            op4  [qcount+QPERRND] = op4  [0];
            opcor[qcount+QPERRND] = opcor[0];
            img  [qcount+QPERRND] = img  [0];
            snd  [qcount+QPERRND] = snd  [0];
        }
    }
    seed = today.getMinutes();
    for(seed %= OPPERQ; seed; seed--){
        for(count = QUESNUM; count; count--){
            op1[0]     = op1[count];
            op1[count] = op2[count];
            op2[count] = op3[count];
            op3[count] = op4[count];
            op4[count] = op1[0];
        }
    }
}

document.onkeypress = function(e)
/*
 * EVENT_t e;
 */
{
    /*
     * char *n;
     */
    var n;
    n = String.fromCharCode(e.charCode);
    if     (n === "q") document.getElementById("btq").click();
    else if(n === "w") document.getElementById("btw").click();
    else if(n === "e") document.getElementById("bte").click();
    else if(n === "r") document.getElementById("btr").click();
    else if(n === "a") document.getElementById("bta").click();
    else if(n === "s") document.getElementById("bts").click();
    else if(n === "d") document.getElementById("btd").click();
    else if(n === "~") opinit(gqid); /* resets question and timer */
};

window.onload = function()
{
    shuffle();
    opinit(0);
};
/* end of quiz.js */
