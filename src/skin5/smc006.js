function init_smc2(){}
function go_next(bool){if(bool===true)PageInfo.reset_pageNext();Action.loaded=0;Action.loadto=0;var aaa=(ScreenInfo.onesmc===true)?FileInfo.cimgFilePath(PageInfo.prevPage,"s","","*"):FileInfo.cimgFilePath(PageInfo.prevPage,"s","","*");if(aaa[0]===""){SmcObj.drawL=1;}
else{Action.loadto++;SmcObj.drawL=0;}
var bbb=(ScreenInfo.onesmc===true)?FileInfo.cimgFilePath(PageInfo.prevPage,"s","","*"):FileInfo.cimgFilePath(PageInfo.prevPage+1,"s","","*");if(bbb[0]===""){SmcObj.drawR=1;}
else{Action.loadto++;SmcObj.drawR=0;}
if(SmcObj.drawL===0){catImageLN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,aaa[0],go_nextLNCipher);}
else{catImageLN.src=aaa[0];catImageLN.onload=go_next2;}}
if(SmcObj.drawR===0){catImageRN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,bbb[0],go_nextRNCipher);}
else{catImageRN.src=bbb[0];catImageRN.onload=go_next2;}}
if(Action.loadto===0){Action.loadto++;go_next2();}}
function go_nextLNCipher(skd,npage,urlsrc){catImageLN.src=urlsrc;catImageLN.onload=go_next2;}
function go_nextRNCipher(skd,npage,urlsrc){catImageRN.src=urlsrc;catImageRN.onload=go_next2;}
function go_next2(){Action.loaded++;if(Action.loadto===Action.loaded){AniObj.baseX=(ScreenInfo.onesmc===true)?smRect.x:smRect.centerPt.x;prepare_canvas();if(SmcObj.drawR===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(AniObj.baseX,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageRN,AniObj.baseX,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
SmcObj.storedPage=PageInfo.currentPage;if(ScreenInfo.onesmc===true)SmcObj.load_leftImageEach('next');else SmcObj.load_rightImageEach('next');}}
function after_nextFrontImageLoaded(){Action.drawCondition=2;prepare_turnover();AniObj.baseX=smRect.centerPt.x;AniObj.seq=0;if(ScreenInfo.onesmc===true){AniObj.neckAngle=Math.atan(ScreenInfo.smImageHeight/ScreenInfo.smImageWidthHalf);AniObj.timer=setInterval(next_animateRone,AniObj.transInterval);}
else{AniObj.neckAngle=Math.atan(ScreenInfo.smImageHeight/ScreenInfo.smImageWidth);AniObj.timer=setInterval(next_animateR,AniObj.transInterval);}}
function next_animateR(){clear_canvas();var percent=AniObj.transPercent[AniObj.seq];var angle=Math.PI/2*percent;cntx.save();cntx.fillStyle="0x333333";cntx.globalAlpha=0.9*(1-percent);cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(smRect.right,smRect.bottom);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.right,smRect.bottom-ScreenInfo.smImageWidth*Math.tan(angle));}
else{cntx.lineTo(smRect.right,smRect.y);cntx.lineTo(AniObj.baseX+ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.fill();cntx.globalAlpha=1;cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(AniObj.baseX,smRect.y);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.right,smRect.y);cntx.lineTo(smRect.right,smRect.bottom-ScreenInfo.smImageWidth*Math.tan(angle));}
else{cntx.lineTo(smRect.right,smRect.bottom-ScreenInfo.smImageWidth*Math.tan(angle));}
cntx.clip();if(SmcObj.drawR===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(AniObj.baseX,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageRN,AniObj.baseX,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
cntx.restore();AniObj.seq++;if(AniObj.seq===AniObj.transLen){clearInterval(AniObj.timer);if(CataInfo.openingAnimation===true){if(CoverObj.state===1)SmcObj.leftImgGrp.setAttribute("visibility","visible");if(PageInfo.blank_imageFromLeft(PageInfo.currentPage)===1)CoverObj.hide_rightPage();}
if(SmcObj.drawL===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageLN,smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
SmcObj.load_leftImageEach('next');}}
function next_animateRone(){clear_canvas();var percent=AniObj.transPercent[AniObj.seq];var angle=Math.PI/2*percent;cntx.save();cntx.fillStyle="0x333333";cntx.globalAlpha=0.45+0.45*(1-percent);cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(smRect.right,smRect.bottom);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.right,smRect.bottom-ScreenInfo.smImageWidthHalf*Math.tan(angle));}
else{cntx.lineTo(smRect.right,smRect.y);cntx.lineTo(AniObj.baseX+ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.fill();cntx.globalAlpha=1;cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(smRect.x,smRect.bottom);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.x,smRect.y);cntx.lineTo(smRect.right,smRect.y);cntx.lineTo(smRect.right,smRect.bottom-ScreenInfo.smImageWidthHalf*Math.tan(angle));}
else{cntx.lineTo(smRect.x,smRect.y);cntx.lineTo(AniObj.baseX+ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.clip();if(SmcObj.drawL===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageLN,smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
cntx.restore();AniObj.seq++;if(AniObj.seq===AniObj.transLen){clearInterval(AniObj.timer);AniObj.seq=0;AniObj.timer=setInterval(next_animateLone,AniObj.transInterval);}}
function after_nextRearImageLoaded(){AniObj.seq=0;AniObj.baseX=smRect.centerPt.x;AniObj.timer=setInterval(next_animateL,AniObj.transInterval);}
function next_animateL(){clear_canvas();var percent=AniObj.transPercent[AniObj.seq];var angle=Math.PI/2*(1-percent);cntx.save();cntx.fillStyle="0x333333";cntx.globalAlpha=0.9*(1-percent);cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(AniObj.baseX,smRect.y);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.x,smRect.y);cntx.lineTo(smRect.x,smRect.bottom-ScreenInfo.smImageWidth*Math.tan(angle));}
else{cntx.lineTo(smRect.centerPt.x-ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.fill();cntx.globalAlpha=1;cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(smRect.x,smRect.bottom);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.x,smRect.bottom-ScreenInfo.smImageWidth*Math.tan(angle));}
else{cntx.lineTo(smRect.x,smRect.y);cntx.lineTo(AniObj.baseX-ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.clip();if(SmcObj.drawL===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageLN,smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
cntx.restore();AniObj.seq++;if(AniObj.seq===AniObj.transLen){clearInterval(AniObj.timer);finish_turnover();}}
function next_animateLone(){clear_canvas();var percent=AniObj.transPercent[AniObj.seq];var angle=Math.PI/2*(1-percent);cntx.save();cntx.fillStyle="0x333333";cntx.globalAlpha=0.45*(1-percent);cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(smRect.right,smRect.bottom);cntx.lineTo(smRect.right,smRect.y);cntx.lineTo(AniObj.baseX,smRect.y);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.x,smRect.y);cntx.lineTo(smRect.x,smRect.bottom-ScreenInfo.smImageWidthHalf*Math.tan(angle));}
else{cntx.lineTo(smRect.centerPt.x-ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.fill();cntx.globalAlpha=1;cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(smRect.x,smRect.bottom);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.x,smRect.bottom-ScreenInfo.smImageWidthHalf*Math.tan(angle));}
else{cntx.lineTo(smRect.x,smRect.y);cntx.lineTo(AniObj.baseX-ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.clip();if(SmcObj.drawL===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageLN,smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
cntx.restore();AniObj.seq++;if(AniObj.seq===AniObj.transLen){clearInterval(AniObj.timer);finish_turnover();}}
function go_prev(bool){if(bool===true)PageInfo.reset_pagePrev();Action.loaded=0;Action.loadto=0;var aaa=(ScreenInfo.onesmc===true)?FileInfo.cimgFilePath(PageInfo.prevPage,"s","","*"):FileInfo.cimgFilePath(PageInfo.prevPage,"s","","*");if(aaa[0]===""){SmcObj.drawL=1;}
else{Action.loadto++;SmcObj.drawL=0;}
var bbb=(ScreenInfo.onesmc===true)?FileInfo.cimgFilePath(PageInfo.prevPage,"s","","*"):FileInfo.cimgFilePath(PageInfo.prevPage+1,"s","","*");if(bbb[0]===""){SmcObj.drawR=1;}
else{Action.loadto++;SmcObj.drawR=0;}
if(SmcObj.drawL===0){catImageLN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,aaa[0],go_prevLNCipher);}
else{catImageLN.src=aaa[0];catImageLN.onload=go_prev2;}}
if(SmcObj.drawR===0){catImageRN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,bbb[0],go_prevRNCipher);}
else{catImageRN.src=bbb[0];catImageRN.onload=go_prev2;}}
if(Action.loadto===0){Action.loadto++;go_prev2();}}
function go_prevLNCipher(skd,npage,urlsrc){catImageLN.src=urlsrc;catImageLN.onload=go_prev2;}
function go_prevRNCipher(skd,npage,urlsrc){catImageRN.src=urlsrc;catImageRN.onload=go_prev2;}
function go_prev2(){Action.loaded++;if(Action.loadto===Action.loaded){AniObj.baseX=smRect.centerPt.x;prepare_canvas();if(SmcObj.drawL===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageLN,smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
SmcObj.storedPage=PageInfo.currentPage;SmcObj.load_leftImageEach('prev');}}
function after_prevFrontImageLoaded(){Action.drawCondition=1;prepare_turnover();AniObj.seq=0;if(ScreenInfo.onesmc===true){AniObj.neckAngle=Math.atan(ScreenInfo.smImageHeight/ScreenInfo.smImageWidthHalf);AniObj.timer=setInterval(prev_animateLone,AniObj.transInterval);}
else{AniObj.neckAngle=Math.atan(ScreenInfo.smImageHeight/ScreenInfo.smImageWidth);AniObj.timer=setInterval(prev_animateL,AniObj.transInterval);}}
function prev_animateL(){clear_canvas();var percent=AniObj.transPercent[AniObj.seq];var angle=Math.PI/2*percent;cntx.save();cntx.fillStyle="0x333333";cntx.globalAlpha=0.9*(1-percent);cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(smRect.x,smRect.bottom);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.x,smRect.bottom-ScreenInfo.smImageWidth*Math.tan(angle));}
else{cntx.lineTo(smRect.x,smRect.y);cntx.lineTo(AniObj.baseX-ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.fill();cntx.globalAlpha=1;cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(AniObj.baseX,smRect.y);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.x,smRect.y);cntx.lineTo(smRect.x,smRect.bottom-ScreenInfo.smImageWidth*Math.tan(angle));}
else{cntx.lineTo(smRect.centerPt.x-ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.clip();if(SmcObj.drawL===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageLN,smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
cntx.restore();AniObj.seq++;if(AniObj.seq===AniObj.transLen){clearInterval(AniObj.timer);if(CataInfo.openingAnimation===true&&PageInfo.blank_imageFromLeft(PageInfo.currentPage)===0){CoverObj.hide_leftPage();}
if(SmcObj.drawR===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(smRect.centerPt.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageRN,smRect.centerPt.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
SmcObj.load_rightImageEach('prev');}}
function prev_animateLone(){clear_canvas();var percent=AniObj.transPercent[AniObj.seq];var angle=Math.PI/2*percent;cntx.save();cntx.fillStyle="0x333333";cntx.globalAlpha=0.45+0.45*(1-percent);cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(smRect.x,smRect.bottom);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.x,smRect.bottom-ScreenInfo.smImageWidthHalf*Math.tan(angle));}
else{cntx.lineTo(smRect.x,smRect.y);cntx.lineTo(AniObj.baseX-ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.fill();cntx.globalAlpha=1;cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(smRect.right,smRect.bottom);cntx.lineTo(smRect.right,smRect.y);cntx.lineTo(AniObj.baseX,smRect.y);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.x,smRect.y);cntx.lineTo(smRect.x,smRect.bottom-ScreenInfo.smImageWidthHalf*Math.tan(angle));}
else{cntx.lineTo(smRect.centerPt.x-ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.clip();if(SmcObj.drawL===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageLN,smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
cntx.restore();AniObj.seq++;if(AniObj.seq===AniObj.transLen){clearInterval(AniObj.timer);AniObj.seq=0;AniObj.timer=setInterval(prev_animateRone,AniObj.transInterval);}}
function after_prevRearImageLoaded(){AniObj.seq=0;AniObj.baseX=smRect.centerPt.x;AniObj.timer=setInterval(prev_animateR,AniObj.transInterval);}
function prev_animateR(){clear_canvas();var percent=AniObj.transPercent[AniObj.seq];var angle=Math.PI/2*(1-percent);cntx.save();cntx.fillStyle="0x333333";cntx.globalAlpha=0.9*(1-percent);cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(AniObj.baseX,smRect.y);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.right,smRect.y);cntx.lineTo(smRect.right,smRect.bottom-ScreenInfo.smImageWidth*Math.tan(angle));}
else{cntx.lineTo(AniObj.baseX+ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.fill();cntx.globalAlpha=1;cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(smRect.right,smRect.bottom);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.right,smRect.bottom-ScreenInfo.smImageWidth*Math.tan(angle));}
else{cntx.lineTo(smRect.right,smRect.y);cntx.lineTo(AniObj.baseX+ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.clip();if(SmcObj.drawR===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(AniObj.baseX,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageRN,AniObj.baseX,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
cntx.restore();AniObj.seq++;if(AniObj.seq===AniObj.transLen){clearInterval(AniObj.timer);finish_turnover();}}
function prev_animateRone(){clear_canvas();var percent=AniObj.transPercent[AniObj.seq];var angle=Math.PI/2*(1-percent);cntx.save();cntx.fillStyle="0x333333";cntx.globalAlpha=0.45*(1-percent);cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(smRect.x,smRect.bottom);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.x,smRect.y);cntx.lineTo(smRect.right,smRect.y);cntx.lineTo(smRect.right,smRect.bottom-ScreenInfo.smImageWidthHalf*Math.tan(angle));}
else{cntx.lineTo(smRect.x,smRect.y);cntx.lineTo(AniObj.baseX+ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.fill();cntx.globalAlpha=1;cntx.beginPath();cntx.moveTo(AniObj.baseX,smRect.bottom);cntx.lineTo(smRect.right,smRect.bottom);if(angle<AniObj.neckAngle){cntx.lineTo(smRect.right,smRect.bottom-ScreenInfo.smImageWidthHalf*Math.tan(angle));}
else{cntx.lineTo(smRect.right,smRect.y);cntx.lineTo(AniObj.baseX+ScreenInfo.smImageHeight*Math.tan(Math.PI/2-angle),smRect.y);}
cntx.clip();if(SmcObj.drawL===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageLN,smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
cntx.restore();AniObj.seq++;if(AniObj.seq===AniObj.transLen){clearInterval(AniObj.timer);finish_turnover();}}
function go_direct(n){n=PageInfo.get_directPageNo(n);PageInfo.prevPage=PageInfo.currentPage;PageInfo.currentPage=n;if(PageInfo.prevPage<n)go_next(false);else go_prev(false);}
function prepare_turnover(){if(glassesSvg!=undefined)unload_glasses();if(soundctrlSvg!=undefined)unload_soundcontrol();if(CoverObj.onsmrX!==NOMOVE)OnsmObj.set_visible("hidden","hidden");AniObj.seq=0;cntx.globalAlpha=1;SmcObj.prepare_turnover();}
function prepare_canvas(){if(mainCnv.width!==winRect.width){maincnvDiv.style.width=winRect.width+"px";maincnvDiv.style.height=winRect.height+"px";mainCnv.width=winRect.width;mainCnv.height=winRect.height;}}
function finish_turnover(){clear_canvas();mainCnv.width=1;mainCnv.height=1;maincnvDiv.style.width="1px";maincnvDiv.style.height="1px";Action.drawCondition=0;if(MoveInfo.pairEnlarge===true)Action.set_togetherEnlarge();MoveInfo.show_pageNumber();if(CoverObj.state===0)OnsmObj.set_visible("visible","visible");else CoverObj.set_cover();if(Action.mainState==="slide"){if(SmcObj.nextPermission("wheel")===false||PermitMan.access_memberZone(-1,"wheel")===false){Action.mainState="stop";}
else if(MoveInfo.loadLinkAtSlide===true){SmcObj.show_linkData();}
if(Action.mainState==="slide"){setTimeout("go_next(true)",MoveInfo.slideIntervalSM);return;}}
if(Action.mainState==="stop")Action.mainState="normal";SmcObj.show_outData();ScreenMan.finish_turnover();Action.aniLocking=false;}
