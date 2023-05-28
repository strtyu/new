let body=document.querySelector('#body');
localStorage.setItem("WhoWin", "Let's play!");
let gameLastResult=document.querySelector('#gameLastResult');
var myaudio = new Audio('audio/ma.mp3');
var myWin = new Audio('audio/win.mp3');
var myLose = new Audio('audio/lose.mp3');
var myL = new Audio('audio/l.wav');
var myW = new Audio('audio/w.wav');
body.style.background = 'rgb(0, 32, 50)';
        function myFunc1 (Str)
        {
        K = 1.05 // коэффициент увеличения размера
        DIR = 1; Rmax = K * document.getElementById (Str).offsetWidth;
        console.log(Rmax);
        setInterval (function () 
           {
             //Attempt to get the element using document.getElementById
             var element = document.getElementById(Str);
             //If it isn't "undefined" and it isn't "null", then it exists.
             if(typeof(element) != 'undefined' && element != null){
                var R = element.offsetWidth;
                R += DIR; 
                if (R == Rmax || R == parseInt (Rmax / K)) {DIR *= -1;} 
                document.getElementById (Str).style.width = R + 'px';
             }
           }, 35);
        }
        var iterator=1;
        let mainForGameElem=document.querySelector('#mainForGame');
        let mainForGameInitialHTML=String(mainForGameElem.innerHTML);
        function CPUChoose(){
          var ran = Math.floor(Math.random() * (3) + 1);
          console.log(ran);
          return ran;
        }
        let youScore=0;
        let cpuScore=0;
        let iteratorCpuScores=0;
        let iteratorYouScores=0;
        function Results(){
          mainForGameElem.style.background = 'rgb(0,0,0)';
          body.style.background = 'rgb(0,0,0)';
          let res="";
          if(iteratorCpuScores>iteratorYouScores){res="Lose"; myLose.play(); }
          else if(iteratorCpuScores<iteratorYouScores){res="Win"; myWin.play();}
          else{res="Lets Play"} 
          let newHtml="<img id=\'ResultImg\' src=\'images/whoWin"+res+".png\'>";
        
          mainForGameElem.innerHTML=newHtml;
          myaudio.pause();
          localStorage.setItem("WhoWin", res);
        }
        function startRoundScissors(){
          let whoWin = 0;
          let r=CPUChoose();
          let who="errore";
          if(r==1){cpuScore++; whoWin=2; who='cpu';  iteratorCpuScores++;}
          if(r==2){youScore++; whoWin=1; who='you'; iteratorYouScores++;}
          if(r==3){whoWin=0; who='no';}
          let row2=document.querySelector('#row2');
          let newHtml="<div class=\"col-5 left\"><img id=\'leftimg111\' src=\"images/rsp31.jpg\"></div><div class=\"col-2 mid\"><img id=\'midimg\' src=\"images/"+who+"WinRound.png\"></div><div class=\"col-5 right\"><img id=\'rightimg111\' src=\"images/rsp"+r+"2.jpg\">"
          row2.innerHTML=newHtml;
          let row3=document.querySelector('#row3');
          row3.innerHTML="";
          let row4=document.querySelector('#row4');
          if(iteratorCpuScores==3||iteratorYouScores==3){
            row4.innerHTML="<button class=\'col-4 bt\' onclick=\"Results()\" type=\"button\">Results</button>" 
          }
          else{row4.innerHTML="<button class=\'col-4 bt\' onclick=\"startRound()\" type=\"button\">New round</button>"}
          if(whoWin==2){
            myL.play();
            let mrId='#cpumr'+(iteratorCpuScores);
            console.log("increasit: "+iteratorCpuScores);
            let mr=document.querySelector(mrId);
            console.log("mr: "+mrId);
            mr.style.background = 'rgb(21, 43, 116)';
          }
          if(whoWin==1){
            myW.play();
            let mrId='#youmr'+(iteratorYouScores);
            console.log("increasit: "+iteratorYouScores);
            let mr=document.querySelector(mrId);
            console.log("mr: "+mrId);
            mr.style.background = 'rgb(21, 43, 116)';
          }
        }
        function startRoundRock(){
          let whoWin = 0;
          let r=CPUChoose();
          let who="errore";
          if(r==2){cpuScore++; whoWin=2; who='cpu';  iteratorCpuScores++;}
          if(r==3){youScore++; whoWin=1; who='you'; iteratorYouScores++;}
          if(r==1){whoWin=0; who='no';}
          let row2=document.querySelector('#row2');
          let newHtml="<div class=\"col-5 left\"><img id=\'leftimg111\' src=\"images/rsp11.jpg\"></div><div class=\"col-2 mid\"><img id=\'midimg\' src=\"images/"+who+"WinRound.png\"></div><div class=\"col-5 right\"><img id=\'rightimg111\' src=\"images/rsp"+r+"2.jpg\">"
          row2.innerHTML=newHtml;
          let row3=document.querySelector('#row3');
          row3.innerHTML="";
          let row4=document.querySelector('#row4');
          if(iteratorCpuScores==3||iteratorYouScores==3){
            row4.innerHTML="<button class=\'col-4 bt\' onclick=\"Results()\" type=\"button\">Results</button>" 
          }
          else{row4.innerHTML="<button class=\'col-4 bt\' onclick=\"startRound()\" type=\"button\">New round</button>"}
          if(whoWin==2){
            myL.play();
            let mrId='#cpumr'+(iteratorCpuScores);
            console.log("increasit: "+iteratorCpuScores);
            let mr=document.querySelector(mrId);
            console.log("mr: "+mrId);
            mr.style.background = 'rgb(21, 43, 116)';
          }
          if(whoWin==1){
            myW.play();
            let mrId='#youmr'+(iteratorYouScores);
            console.log("increasit: "+iteratorYouScores);
            let mr=document.querySelector(mrId);
            console.log("mr: "+mrId);
            mr.style.background = 'rgb(21, 43, 116)';
          }
        }
        function startRoundPaper(){
          let whoWin = 0;
          let r=CPUChoose();
          let who="errore";
          if(r==3){cpuScore++; whoWin=2; who='cpu';  iteratorCpuScores++;}
          if(r==1){youScore++; whoWin=1; who='you'; iteratorYouScores++;}
          if(r==2){whoWin=0; who='no';}
          let row2=document.querySelector('#row2');
          let newHtml="<div class=\"col-5 left\"><img id=\'leftimg111\' src=\"images/rsp21.jpg\"></div><div class=\"col-2 mid\"><img id=\'midimg\' src=\"images/"+who+"WinRound.png\"></div><div class=\"col-5 right\"><img id=\'rightimg111\' src=\"images/rsp"+r+"2.jpg\">"
          row2.innerHTML=newHtml;
          let row3=document.querySelector('#row3');
          row3.innerHTML="";
          let row4=document.querySelector('#row4');
          if(iteratorCpuScores==3||iteratorYouScores==3){
            row4.innerHTML="<button class=\'col-4 bt\' onclick=\"Results()\" type=\"button\">Results</button>" 
          }
          else{row4.innerHTML="<button class=\'col-4 bt\' onclick=\"startRound()\" type=\"button\">New round</button>"}
          if(whoWin==2){
            myL.play();
            let mrId='#cpumr'+(iteratorCpuScores);
            console.log("increasit: "+iteratorCpuScores);
            let mr=document.querySelector(mrId);
            console.log("mr: "+mrId);
            mr.style.background = 'rgb(21, 43, 116)';
          }
          if(whoWin==1){
            myW.play();
            let mrId='#youmr'+(iteratorYouScores);
            console.log("increasit: "+iteratorYouScores);
            let mr=document.querySelector(mrId);
            console.log("mr: "+mrId);
            mr.style.background = 'rgb(21, 43, 116)';
          }
        }
        function startGame(){
            mainForGameElem.style.background = 'rgb(255,235,1)';
            body.style.background = 'rgb(255,235,1)';
            mainForGameElem.innerHTML="<div id=\"mainForPlace\" class=\"mainForPlace  col\"><div class=\'row row1\'><div class=\'leftTitle col-6\'><img id=\'youimg\' src=\'images/you2.png\'><div class=\'point1 col-1\'><div id=\'youmr1\' class=\'myround mr1\'></div></div><div class=\'point2 col-1\'><div id=\'youmr2\' class=\'myround mr2\'></div></div><div class=\'point3 col-1\'><div id=\'youmr3\' class=\'myround mr3\'></div></div></div><div class=\'rightTitle col-6\'><div class=\'point3 col-1\'><div id=\'cpumr3\' class=\'myround mr3\'></div></div><div class=\'point2 col-1\'><div id=\'cpumr2\' class=\'myround mr2\'></div></div><div class=\'point1 col-1\'><div id=\'cpumr1\' class=\'myround mr1\'></div></div><img id=\'cpuimg\' src=\'images/cpu2.png\'></div></div><div class=\"row row2\" id=\'row2\'><div class=\"col-5 left\"><img id=\'leftimg\'  src=\"images/rsp11.jpg\" onload=\"myFunc1 (\'leftimg\')\"></div><div class=\"col-2 mid\"><img id=\'midimg\' src=\"images/vs.png\"></div><div class=\"col-5 right\"><img id=\'rightimg\' src=\"images/rsp12.jpg\" onload=\"myFunc1 (\'rightimg\')\"></div></div><div id=\'row3\' class=\'row3\'>Choose your weapon:</div><div id=\'row4\' class=\'row row4\'><button class=\'col-4 bt\' onclick=\"startRoundRock()\" type=\"button\">Rock</button><button class=\'col-4 bt\' onclick=\"startRoundScissors()\" type=\'button\'>Scissors</button><button class=\'col-4 bt\' onclick=\"startRoundPaper()\" type=\'button\'>Paper</button></div></div>"
            myaudio.play();
        } 
        function startRound(){
            var newHtml1="<div class=\"col-5 left\"><img id=\'leftimg"+iterator+"\' src=\"images/rsp11.jpg\" onload=\"myFunc1 (\'leftimg"+iterator+"\')\"></div><div class=\"col-2 mid\"><img id=\'midimg\' src=\"images/vs.png\"></div><div class=\"col-5 right\"><img id=\'rightimg"+iterator+"\' src=\"images/rsp12.jpg\" onload=\"myFunc1 (\'rightimg"+iterator+"\')\"></div>"
            let row2=document.querySelector('#row2');
            row2.innerHTML=newHtml1;
            let row3=document.querySelector('#row3');
            row3.innerHTML='Choose your weapon:';
            let row4=document.querySelector('#row4');
            var newHtml2="<button class=\'col-4 bt\' onclick=\"startRoundRock()\" type=\"button\">Rock</button><button class=\'col-4 bt\' onclick=\"startRoundScissors()\" type=\'button\'>Scissors</button><button class=\'col-4 bt\' onclick=\"startRoundPaper()\" type=\'button\'>Paper</button></div>"
            row4.innerHTML=newHtml2;
            iterator++;
        } 
        