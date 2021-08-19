function init_smc2(){}
function go_next(bool){if(bool===true)PageInfo.reset_pageNext();Action.loaded=0;Action.loadto=0;var aaa=(ScreenInfo.onesmc===true)?FileInfo.cimgFilePath(PageInfo.prevPage,"s","","*"):FileInfo.cimgFilePath(PageInfo.currentPage,"s","","*");if(aaa[0]===""){SmcObj.drawL=1;}
else{Action.loadto++;SmcObj.drawL=0;}
var bbb=(ScreenInfo.onesmc===true)?FileInfo.cimgFilePath(PageInfo.currentPage,"s","","*"):FileInfo.cimgFilePath(PageInfo.currentPage+1,"s","","*");if(bbb[0]===""){SmcObj.drawR=1;}
else{Action.loadto++;SmcObj.drawR=0;}
if(SmcObj.drawL===0){catImageLN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,aaa[0],go_nextLNCipher);}
else{catImageLN.src=aaa[0];catImageLN.onload=go_next2;}}
if(SmcObj.drawR===0){catImageRN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,bbb[0],go_nextRNCipher);}
else{catImageRN.src=bbb[0];catImageRN.onload=go_next2;}}
if(Action.loadto===0){Action.loadto++;go_next2();}}
function go_nextLNCipher(skd,npage,urlsrc){catImageLN.src=urlsrc;catImageLN.onload=go_next2;}
function go_nextRNCipher(skd,npage,urlsrc){catImageRN.src=urlsrc;catImageRN.onload=go_next2;}
function go_next2(){Action.loaded++;if(Action.loadto===Action.loaded){Action.drawCondition=2;AniObj.baseX=(ScreenInfo.onesmc===true)?smRect.x:smRect.centerPt.x;prepare_turnover();AniObj.timer=setInterval(next_animateR,AniObj.transInterval);}}
function next_animateR(){var percent=AniObj.transPercent[AniObj.seq];if(SmcObj.drawR===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(AniObj.baseX+ScreenInfo.smImageWidth*(1-percent),smRect.y,ScreenInfo.smImageWidth*percent,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageRN,AniObj.baseX+ScreenInfo.smImageWidth*(1-percent),smRect.y,ScreenInfo.smImageWidth*percent,ScreenInfo.smImageHeight);}
AniObj.seq++;if(AniObj.seq===AniObj.transLen){clearInterval(AniObj.timer);if(CataInfo.openingAnimation===true&&PageInfo.blank_imageFromLeft(PageInfo.currentPage)===1){CoverObj.hide_rightPage();}
AniObj.seq=0;if(ScreenInfo.onesmc===true){AniObj.baseX=smRect.x-ScreenInfo.smImageWidth;AniObj.timer=setInterval(next_animateLone,AniObj.transInterval);}
else{AniObj.baseX=smRect.x;AniObj.timer=setInterval(next_animateL,AniObj.transInterval);}}}
function next_animateL(){var percent=AniObj.transPercent[AniObj.seq];if(SmcObj.drawL===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(AniObj.baseX+ScreenInfo.smImageWidth*(1-percent),smRect.y,ScreenInfo.smImageWidth*percent,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageLN,AniObj.baseX+ScreenInfo.smImageWidth*(1-percent),smRect.y,ScreenInfo.smImageWidth*percent,ScreenInfo.smImageHeight);}
AniObj.seq++;if(AniObj.seq===AniObj.transLen){finish_turnover();clearInterval(AniObj.timer);}}
function next_animateLone(){var percent=AniObj.transPercent[AniObj.seq];cntx.globalAlpha=1-percent;cntx.clearRect(AniObj.baseX,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);if(SmcObj.drawL===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(AniObj.baseX+ScreenInfo.smImageWidth*(1-percent),smRect.y,ScreenInfo.smImageWidth*percent,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageLN,AniObj.baseX+ScreenInfo.smImageWidth*(1-percent),smRect.y,ScreenInfo.smImageWidth*percent,ScreenInfo.smImageHeight);}
AniObj.seq++;if(AniObj.seq===AniObj.transLen){finish_turnover();clearInterval(AniObj.timer);}}
function go_prev(bool){if(bool===true)PageInfo.reset_pagePrev();Action.loaded=0;Action.loadto=0;var aaa=(ScreenInfo.onesmc===true)?FileInfo.cimgFilePath(PageInfo.prevPage,"s","","*"):FileInfo.cimgFilePath(PageInfo.currentPage,"s","","*");if(aaa[0]===""){SmcObj.drawL=1;}
else{Action.loadto++;SmcObj.drawL=0;}
var bbb=(ScreenInfo.onesmc===true)?FileInfo.cimgFilePath(PageInfo.currentPage,"s","","*"):FileInfo.cimgFilePath(PageInfo.currentPage+1,"s","","*");if(bbb[0]===""){SmcObj.drawR=1;}
else{Action.loadto++;SmcObj.drawR=0;}
if(SmcObj.drawL===0){catImageLN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,aaa[0],go_prevLNCipher);}
else{catImageLN.src=aaa[0];catImageLN.onload=go_prev2;}}
if(SmcObj.drawR===0){catImageRN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,bbb[0],go_prevRNCipher);}
else{catImageRN.src=bbb[0];catImageRN.onload=go_prev2;}}
if(Action.loadto===0){Action.loadto++;go_prev2();}}
function go_prevLNCipher(skd,npage,urlsrc){catImageLN.src=urlsrc;catImageLN.onload=go_prev2;}
function go_prevRNCipher(skd,npage,urlsrc){catImageRN.src=urlsrc;catImageRN.onload=go_prev2;}
function go_prev2(){Action.loaded++;if(Action.loadto===Action.loaded){Action.drawCondition=1;AniObj.baseX=smRect.x;prepare_turnover();if(ScreenInfo.onesmc===true)AniObj.timer=setInterval(prev_animateLone,AniObj.transInterval);else AniObj.timer=setInterval(prev_animateL,AniObj.transInterval);}}
function prev_animateL(){var percent=AniObj.transPercent[AniObj.seq];if(SmcObj.drawL===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(AniObj.baseX,smRect.y,ScreenInfo.smImageWidth*percent,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageLN,AniObj.baseX,smRect.y,ScreenInfo.smImageWidth*percent,ScreenInfo.smImageHeight);}
AniObj.seq++;if(AniObj.seq===AniObj.transLen){clearInterval(AniObj.timer);if(CataInfo.openingAnimation===true&&PageInfo.blank_imageFromLeft(PageInfo.currentPage)===0){CoverObj.hide_leftPage();}
AniObj.seq=0;AniObj.baseX=smRect.centerPt.x;AniObj.timer=setInterval(prev_animateR,AniObj.transInterval);}}
function prev_animateLone(){var percent=AniObj.transPercent[AniObj.seq];if(SmcObj.drawL===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(AniObj.baseX,smRect.y,ScreenInfo.smImageWidth*percent,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageRN,AniObj.baseX,smRect.y,ScreenInfo.smImageWidth*percent,ScreenInfo.smImageHeight);}
AniObj.seq++;if(AniObj.seq===AniObj.transLen){clearInterval(AniObj.timer);AniObj.seq=0;AniObj.baseX=smRect.right;AniObj.timer=setInterval(prev_animateRone,AniObj.transInterval);}}
function prev_animateR(){var percent=AniObj.transPercent[AniObj.seq];if(SmcObj.drawR===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(AniObj.baseX,smRect.y,ScreenInfo.smImageWidth*percent,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageRN,AniObj.baseX,smRect.y,ScreenInfo.smImageWidth*percent,ScreenInfo.smImageHeight);}
AniObj.seq++;if(AniObj.seq===AniObj.transLen){finish_turnover();clearInterval(AniObj.timer);}}
function prev_animateRone(){var percent=AniObj.transPercent[AniObj.seq];cntx.globalAlpha=1-percent;cntx.clearRect(AniObj.baseX,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);if(SmcObj.drawR===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(AniObj.baseX,smRect.y,ScreenInfo.smImageWidth*percent,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageLN,AniObj.baseX,smRect.y,ScreenInfo.smImageWidth*percent,ScreenInfo.smImageHeight);}
AniObj.seq++;if(AniObj.seq===AniObj.transLen){finish_turnover();clearInterval(AniObj.timer);}}
function go_direct(n){n=PageInfo.get_directPageNo(n);PageInfo.prevPage=PageInfo.currentPage;PageInfo.currentPage=n;if(PageInfo.prevPage<n)go_next(false);else go_prev(false);}
function prepare_turnover(){if(glassesSvg)unload_glasses();if(soundctrlSvg)unload_soundcontrol();if(CoverObj.onsmrX!==NOMOVE)OnsmObj.set_visible("hidden","hidden");AniObj.seq=0;cntx.globalAlpha=1;if(mainCnv.width!==winRect.width){maincnvDiv.style.width=winRect.width+"px";maincnvDiv.style.height=winRect.height+"px";mainCnv.width=winRect.width;mainCnv.height=winRect.height;}
SmcObj.prepare_turnover();}
function finish_turnover(){SmcObj.finish_turnover();}
function finish_turnover2(){clear_canvas();mainCnv.width=1;mainCnv.height=1;maincnvDiv.style.width="1px";maincnvDiv.style.height="1px";Action.drawCondition=0;if(MoveInfo.pairEnlarge===true)Action.set_togetherEnlarge();MoveInfo.show_pageNumber();if(CoverObj.state===0)OnsmObj.set_visible("visible","visible");else CoverObj.set_cover();if(Action.mainState==="slide"){if(SmcObj.nextPermission("wheel")===false||PermitMan.access_memberZone(-1,"wheel")===false){Action.mainState="stop";}
else if(MoveInfo.loadLinkAtSlide===true){SmcObj.show_linkData();}
if(Action.mainState==="slide"){setTimeout("go_next(true)",MoveInfo.slideIntervalSM);return;}}
if(Action.mainState==="stop")Action.mainState="normal";SmcObj.show_outData();ScreenMan.finish_turnover();Action.aniLocking=false;}
