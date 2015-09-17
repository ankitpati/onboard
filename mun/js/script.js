"use strict";

/* script.js */

/* This file is part of MUN OnBoard HTML5 application.
 *
 * Copyright 2013 Ankit Pati <ankitpati@gmail.com>
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
 */

/* constants */
var TIMERESET = 1000;
var TIMEPAUSE = 1001;
var TIMEMANUL = 1002;
/* end of constants */

/* global variables */
/*
 * unsigned timeremain, timeID;
 * bool pause, timerun, mant;
 */
var timeremain, timeID, pause, timerun, mant;
/* end of global variables */

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
    timerun=1;
         if(timeremain< 10) timeshow = "00"+timeremain;
    else if(timeremain<100) timeshow = "0" +timeremain;
    else timeshow = timeremain;
    document.getElementById("time").style.color = "#00ff00";
    document.getElementById("time").innerHTML = ""+timeshow+"s";
    if(timeremain){
        --timeremain;
        timeID=setTimeout("timer()", 1000);
    }
    else{
        document.getElementById("time").style.color = "#ff0000";
        playsound("sounds/elapse.ogg", "ogg");
    }
    timerun=0;
}

function timerset(tyme)
/*
 * unsigned tyme;
 */
{
    clearTimeout(timeID);
    if(tyme === TIMERESET){
        pause=timeremain=mant=0;
        document.getElementById("time").style.color = "#ff9900";
        document.getElementById("time").innerHTML = "____";
    }
    else if(tyme === TIMEPAUSE){
        if(pause){
            pause=0;
            timer();
        }
        else if(timeremain) pause=1;
    }
    else if(tyme === TIMEMANUL){
        pause=timeremain=0;
        mant=1;
        document.getElementById("time").style.color = "#ff9900";
        document.getElementById("time").innerHTML = "<input id=\"mantime\" autofocus=\"autofocus\" onblur=\"mantime()\" placeholder=\"000\" tabindex=\"-1\" maxlength=\"3\" />s";
    }
    else{
        mant=0;
        timeremain=tyme;
        timer();
        playsound("sounds/load.ogg", "ogg");
    }
}

function mantime()
{
    /*
     * char *input;
     */
    var input;
    input=document.getElementById("mantime").value;
    mant=0;
    if(!timerun){
        if(input.length){
            timeremain=parseInt(input);
            timer();
            playsound("sounds/load.ogg", "ogg");
        }
        else timerset(TIMERESET);
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
    if(n === "~"){
             if(mant) timerset(TIMERESET);
             timerset(TIMERESET);
         }
    else if(n === "!") timerset(TIMEPAUSE);
    else if(n === "@") timerset( 15);
    else if(n === "#") timerset( 30);
    else if(n === "$") timerset( 45);
    else if(n === "%") timerset( 60);
    else if(n === "^") timerset( 90);
    else if(n === "&") timerset(120);
    else if(n === "*") timerset(150);
    else if(n === "(") timerset(180);
    else if(n === ")") timerset(TIMEMANUL);
};

window.onload = function()
{
    timerset(TIMERESET);
};
/* end of script.js */
