var touch_startTime=0,touch_endTime=0;var touchDragged=false;var touchAniTimer;var touchDirection=0;var touchMainObj,touchNextObj,touchPrevObj,touchPagingObj;var touchMoveAry=new Array();var touchBlankDiv;var touchCoord={startX:0,judX:0,diffX:0,diffY:0,currX:0,moveX:0};var touchSEQ=0,touchidx=0,touchnextidx=0;var touchMoveWidth;var touchPagingPix,touchPagingCurPix;var touchLocking=false;function init_touchDrag(n1,n2,n3){touchCoord.startX=n1;touchMoveWidth=n2;touchCoord.judX=n1+Math.floor(n2/3);touchidx=n3;touchBlankDiv=document.createElement("DIV");touchBlankDiv.className="blank_div";touch_showPaging();document.addEventListener("touchstart",function(e){touchStart(e,0);},false);document.addEventListener("touchmove",function(e){touchMove(e,0);},false);document.addEventListener("touchend",function(e){touchEnd(e);},false);document.addEventListener("mousedown",function(e){touchStart(e,1);},false);document.addEventListener("mousemove",function(e){touchMove(e,1);},false);document.addEventListener("mouseup",function(e){touchEnd(e);},false);}
function touchStart(event,ncaller){if(touchLocking===true)return;var now=new Date();var ntime=now.getTime();touch_startTime=ntime;downKind=9;if(ncaller===0){p.clickX=event.touches[0].clientX;p.clickY=event.touches[0].clientY;}
else{p.clickX=event.clientX;p.clickY=event.clientY;}}
function touchMove(event,ncaller){if(touchLocking===true||downKind!=9)return;if(touchDragged===false)touchDragged=true;if(ncaller===0){touchCoord.diffX=event.touches[0].clientX-p.clickX;touchCoord.diffY=event.touches[0].clientY-p.clickY;}
else{touchCoord.diffX=event.clientX-p.clickX;touchCoord.diffY=event.clientY-p.clickY;}
touchCoord.currX=touchCoord.startX+touchCoord.diffX;if(touchDirection===0){if(Math.abs(touchCoord.diffX)>3){touchDirection=1;}
else if(Math.abs(touchCoord.diffY)>3){touchDirection=(touchCoord.diffY<0)?3:4;}}
else if(touchDirection===1){if(touchidx===0&&touchCoord.currX>=touchCoord.judX){touchCoord.currX=touchCoord.judX;}
else if(touchidx===touchMoveAry.length-1&&touchCoord.currX<=-touchCoord.judX){touchCoord.currX=-touchCoord.judX;}
touchMainObj=touchMoveAry[touchidx];touchMainObj.style.left=touchCoord.currX+'px';if(touchCoord.diffX<0){if(touchNextObj==undefined){touchnextidx=touchidx+1;touchNextObj=(touchidx===touchMoveAry.length-1)?touchBlankDiv:touchMoveAry[touchnextidx];touchNextObj.style.visibility="visible";}
if(touchPrevObj){touchPrevObj.style.visibility="hidden";touchPrevObj.style.left=-touchMoveWidth+'px';touchPrevObj=undefined;}
touchNextObj.style.left=Math.floor(touchMoveWidth+touchCoord.currX)+'px';}
else if(touchCoord.diffX>0){if(touchPrevObj==undefined){touchnextidx=touchidx-1;touchPrevObj=(touchidx===0)?touchBlankDiv:touchMoveAry[touchnextidx];touchPrevObj.style.visibility="visible";}
if(touchNextObj){touchNextObj.style.visibility="hidden";touchNextObj.style.left=touchMoveWidth+'px';touchNextObj=undefined;}
touchPrevObj.style.left=Math.floor(-touchMoveWidth+touchCoord.currX)+'px';}}}
function touchEnd(event){var now=new Date();touch_endTime=now.getTime();var diffTime=touch_endTime-touch_startTime;if(touchDragged===true&&touchDirection===1){touchDragged=false;if(touchCoord.currX===touchCoord.startX)return;touchSEQ=0;touchLocking=true;var tdiffX=touchCoord.currX-touchCoord.startX;if(tdiffX<0){if((touchidx===touchMoveAry.length-1)||(p.TouchInfo.get_flicked(diffTime)===false&&tdiffX>=-touchCoord.judX)){touchDirection=3;touchCoord.moveX=-tdiffX;touchAniTimer=setInterval(touch_nextAnimate,5);}
else{touchDirection=4;touchCoord.moveX=-(touchMoveWidth+tdiffX);touchAniTimer=setInterval(touch_nextAnimate,5);}}
else if(tdiffX>0){if((touchidx===0)||(p.TouchInfo.get_flicked(diffTime)===false&&tdiffX<=touchCoord.judX)){touchDirection=5;touchCoord.moveX=-tdiffX;touchAniTimer=setInterval(touch_prevAnimate,5);}
else{touchDirection=6;touchCoord.moveX=touchMoveWidth-tdiffX;touchAniTimer=setInterval(touch_prevAnimate,5);}}}
else{touchLocking=false;touchDirection=0;}
downKind=0;p.Action.do_mouseUp("help",event);}
function touch_nextAnimate(){var xpos=touchCoord.moveX*p.TouchInfo.arPoints[touchSEQ];touchMainObj.style.left=(touchCoord.currX+xpos)+'px';touchNextObj.style.left=(touchCoord.currX+touchMoveWidth+xpos)+'px';touchSEQ++;if(touchSEQ>=p.TouchInfo.arPoints.length){clearInterval(touchAniTimer);if(touchDirection===3){touchNextObj.style.visibility="hidden";touchNextObj.style.left=touchMoveWidth+'px';touchNextObj=undefined;touchMainObj=undefined;}
else{touchMainObj.style.visibility="hidden";touchMainObj.style.left=touchMoveWidth+'px';touchMainObj=undefined;touchNextObj=undefined;touchidx=touchnextidx;touch_showPaging();}
touchDirection=0;touchLocking=false;touchCoord.currX=0;}}
function touch_prevAnimate(){var xpos=touchCoord.moveX*p.TouchInfo.arPoints[touchSEQ];touchMainObj.style.left=(touchCoord.currX+xpos)+'px';touchPrevObj.style.left=(touchCoord.currX-touchMoveWidth+xpos)+'px';touchSEQ++;if(touchSEQ>=p.TouchInfo.arPoints.length){clearInterval(touchAniTimer);if(touchDirection===5){touchPrevObj.style.visibility="hidden";touchPrevObj.style.left=-touchMoveWidth+'px';touchPrevObj=undefined;touchMainObj=undefined;}
else{touchMainObj.style.visibility="hidden";touchMainObj.style.left=-touchMoveWidth+'px';touchMainObj=undefined;touchPrevObj=undefined;touchidx=touchnextidx;touch_showPaging();}
touchDirection=0;touchLocking=false;touchCoord.currX=0;}}
function touch_godirect(skd){touchMainObj=touchMoveAry[touchidx];touchMainObj.style.left=touchCoord.startX+'px';touchCoord.currX=0;if(skd==="next"){touchNextObj=touchMoveAry[touchnextidx];touchNextObj.style.visibility="visible";touchNextObj.style.left=Math.floor(touchMoveWidth+touchCoord.startX)+'px';touchDirection=4;touchCoord.moveX=-touchMoveWidth;touchSEQ=0;touchLocking=true;touchAniTimer=setInterval(touch_nextAnimate,5);}
else{touchPrevObj=touchMoveAry[touchnextidx];touchPrevObj.style.visibility="visible";touchPrevObj.style.left=Math.floor(-touchMoveWidth+touchCoord.startX)+'px';touchDirection=6;touchCoord.moveX=touchMoveWidth;touchSEQ=0;touchLocking=true;touchAniTimer=setInterval(touch_prevAnimate,5);}}
function touch_showPaging(){var nodes=touchPagingObj.getElementsByTagName("IMG");for(var i=0;i<nodes.length;i++){nodes[i].src=(i==touchidx)?touchPagingCurPix:touchPagingPix;}}
function paging_itemClick(num){if(num==touchidx)return;touchnextidx=num;if(num>touchidx)touch_godirect("next");else touch_godirect("prev");}