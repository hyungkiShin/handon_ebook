function init_smc2(){}
function go_next(bool){if(bool===true)PageInfo.reset_pageNext();Action.loaded=0;Action.loadto=0;var aaa=FileInfo.cimgFilePath(PageInfo.currentPage,"","","*");if(aaa[0]===""){SmcObj.drawL=1;}
else{Action.loadto++;SmcObj.drawL=0;catImageLN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,aaa[0],go_nextLNCipher);}
else{catImageLN.src=aaa[0];catImageLN.onload=go_next2;}}
if(Action.loadto===0){Action.loadto++;go_next2();}}
function go_nextLNCipher(skd,npage,urlsrc){catImageLN.src=urlsrc;catImageLN.onload=go_next2;}
function go_next2(){Action.loaded++;if(Action.loadto===Action.loaded){Action.drawCondition=2;AniObj.baseX=smRect.x;prepare_turnover();AniObj.timer=setInterval(next_animate,AniObj.transInterval);}}
function next_animate(){var percent=AniObj.transPercent[AniObj.seq];clear_canvas();cntx.globalAlpha=1;cntx.globalAlpha=percent;if(SmcObj.drawL===1){cntx.fillStyle=ScreenInfo.blankColor;cntx.fillRect(AniObj.baseX,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageLN,AniObj.baseX,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
AniObj.seq++;if(AniObj.seq===AniObj.transLen){finish_turnover();clearInterval(AniObj.timer);}}
function go_prev(bool){if(bool===true)PageInfo.reset_pagePrev();Action.loaded=0;Action.loadto=0;var aaa=FileInfo.cimgFilePath(PageInfo.currentPage,"","","*");if(aaa[0]===""){SmcObj.drawL=1;}
else{Action.loadto++;SmcObj.drawL=0;catImageLN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,aaa[0],go_nextLNCipher);}
else{catImageLN.src=aaa[0];catImageLN.onload=go_next2;}}
if(Action.loadto===0){Action.loadto++;go_next2();}}
function go_direct(n){n=PageInfo.get_directPageNo(n);PageInfo.prevPage=PageInfo.currentPage;PageInfo.currentPage=n;if(PageInfo.prevPage<n)go_next(false);else go_prev(false);}
function prepare_turnover(){if(glassesSvg!=undefined)unload_glasses();if(soundctrlSvg!=undefined)unload_soundcontrol();AniObj.seq=0;cntx.globalAlpha=0;if(mainCnv.width!=winRect.width){maincnvDiv.style.width=winRect.width+"px";maincnvDiv.style.height=winRect.height+"px";mainCnv.width=winRect.width;mainCnv.height=winRect.height;}
SmcObj.prepare_turnover();}
function finish_turnover(){SmcObj.finish_turnover();}
function finish_turnover2(){clear_canvas();mainCnv.width=1;mainCnv.height=1;maincnvDiv.style.width="1px";maincnvDiv.style.height="1px";Action.drawCondition=0;if(MoveInfo.pairEnlarge===true)Action.set_togetherEnlarge();MoveInfo.show_pageNumber();if(Action.mainState==="slide"){if(SmcObj.nextPermission("wheel")===false||PermitMan.access_memberZone(-1,"wheel")===false){Action.mainState="stop";}
else if(MoveInfo.loadLinkAtSlide===true){SmcObj.show_linkData();}
if(Action.mainState==="slide"){setTimeout("go_next(true)",MoveInfo.slideIntervalSM);return;}}
if(Action.mainState==="stop")Action.mainState="normal";SmcObj.show_outData();ScreenMan.finish_turnover();Action.aniLocking=false;}
