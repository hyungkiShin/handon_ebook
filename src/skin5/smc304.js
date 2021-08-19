function init_smc2(){AniObj.elasticPercent=[0.08,0.15,0.22,0.28,0.34,0.40,0.45,0.50,0.55,0.59,0.63,0.67,0.71,0.74,0.77,0.80,0.83,0.85,0.88,0.90,0.92,0.94,0.96,0.97,0.98,1.0,1.02,1.04,1.06,1.08,1.09,1.1,1.09,1.08,1.07,1.06,1.05,1.04,1.03,1.02,1.02,1.01,1.01,1.0];}
function go_next(bool){if(bool===true)PageInfo.reset_pageNext();Action.loaded=0;Action.loadto=0;var aaa=FileInfo.cimgFilePath(PageInfo.currentPage,"","","*");if(aaa[0]===""){SmcObj.drawL=1;}
else{Action.loadto++;SmcObj.drawL=0;}
var bbb=FileInfo.cimgFilePath(PageInfo.prevPage,"","","*");if(bbb[0]===""){SmcObj.drawR=1;}
else{Action.loadto++;SmcObj.drawR=0;}
if(SmcObj.drawL===0){catImageLN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,aaa[0],go_nextLNCipher);}
else{catImageLN.src=aaa[0];catImageLN.onload=go_next2;}}
if(SmcObj.drawR===0){catImageRN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,bbb[0],go_nextRNCipher);}
else{catImageRN.src=bbb[0];catImageRN.onload=go_next2;}}
if(Action.loadto===0){Action.loadto++;go_next2();}}
function go_nextLNCipher(skd,npage,urlsrc){catImageLN.src=urlsrc;catImageLN.onload=go_next2;}
function go_nextRNCipher(skd,npage,urlsrc){catImageRN.src=urlsrc;catImageRN.onload=go_next2;}
function go_next2(){Action.loaded++;if(Action.loadto===Action.loaded){Action.drawCondition=1;AniObj.baseX=smRect.right-cataRect.x;prepare_turnover();cntx.drawImage(catImageRN,smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);SmcObj.leftImgGrp.setAttribute("visibility","hidden");SmcObj.prepare_turnover();AniObj.timer=setInterval(next_animate,20);}}
function next_animate(){var percent=AniObj.elasticPercent[AniObj.seq];clear_canvas();cntx.drawImage(catImageRN,cataRect.x-ScreenInfo.smImageWidth+AniObj.baseX*(1-percent),smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);cntx.drawImage(catImageLN,smRect.x+AniObj.baseX*(1-percent),smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);AniObj.seq++;if(AniObj.seq===AniObj.elasticPercent.length){finish_turnover();clearInterval(AniObj.timer);}}
function go_prev(bool){if(bool===true)PageInfo.reset_pagePrev();Action.loaded=0;Action.loadto=0;var aaa=FileInfo.cimgFilePath(PageInfo.currentPage,"","","*");if(aaa[0]===""){SmcObj.drawL=1;}
else{Action.loadto++;SmcObj.drawL=0;}
var bbb=FileInfo.cimgFilePath(PageInfo.prevPage,"","","*");if(bbb[0]===""){SmcObj.drawR=1;}
else{Action.loadto++;SmcObj.drawR=0;}
if(SmcObj.drawL===0){catImageLN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,aaa[0],go_prevLNCipher);}
else{catImageLN.src=aaa[0];catImageLN.onload=go_prev2;}}
if(SmcObj.drawR===0){catImageRN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,bbb[0],go_prevRNCipher);}
else{catImageRN.src=bbb[0];catImageRN.onload=go_prev2;}}
if(Action.loadto===0){Action.loadto++;go_prev2();}}
function go_prevLNCipher(skd,npage,urlsrc){catImageLN.src=urlsrc;catImageLN.onload=go_prev2;}
function go_prevRNCipher(skd,npage,urlsrc){catImageRN.src=urlsrc;catImageRN.onload=go_prev2;}
function go_prev2(){Action.loaded++;if(Action.loadto===Action.loaded){Action.drawCondition=2;AniObj.baseX=cataRect.right-smRect.x;prepare_turnover();cntx.drawImage(catImageRN,smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);SmcObj.leftImgGrp.setAttribute("visibility","hidden");SmcObj.prepare_turnover();AniObj.timer=setInterval(prev_animate,20);}}
function prev_animate(){var percent=AniObj.elasticPercent[AniObj.seq];clear_canvas();cntx.drawImage(catImageRN,smRect.x+AniObj.baseX*percent,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);cntx.drawImage(catImageLN,smRect.x-AniObj.baseX*(1-percent),smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);AniObj.seq++;if(AniObj.seq===AniObj.elasticPercent.length){finish_turnover();clearInterval(AniObj.timer);}}
function go_direct(n){n=PageInfo.get_directPageNo(n);PageInfo.prevPage=PageInfo.currentPage;PageInfo.currentPage=n;if(PageInfo.prevPage<n)go_next(false);else go_prev(false);}
function prepare_turnover(){if(glassesSvg!=undefined)unload_glasses();if(soundctrlSvg!=undefined)unload_soundcontrol();AniObj.seq=0;cntx.globalAlpha=1;if(mainCnv.width!=winRect.width){maincnvDiv.style.width=winRect.width+"px";maincnvDiv.style.height=winRect.height+"px";mainCnv.width=winRect.width;mainCnv.height=winRect.height;}}
function finish_turnover(){SmcObj.finish_turnover();}
function finish_turnover2(){SmcObj.leftImgGrp.setAttribute("visibility","visible");clear_canvas();mainCnv.width=1;mainCnv.height=1;maincnvDiv.style.width="1px";maincnvDiv.style.height="1px";Action.drawCondition=0;if(MoveInfo.pairEnlarge===true)Action.set_togetherEnlarge();MoveInfo.show_pageNumber();if(Action.mainState==="slide"){if(SmcObj.nextPermission("wheel")===false||PermitMan.access_memberZone(-1,"wheel")===false){Action.mainState="stop";}
else if(MoveInfo.loadLinkAtSlide===true){SmcObj.show_linkData();}
if(Action.mainState==="slide"){setTimeout("go_next(true)",MoveInfo.slideIntervalSM);return;}}
if(Action.mainState==="stop")Action.mainState="normal";SmcObj.show_outData();ScreenMan.finish_turnover();Action.aniLocking=false;}
