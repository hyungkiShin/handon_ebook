function init_smc2(){AniObj.transInterval=17;AniObj.angleDiv=90;}
function go_next(bool){if(bool===true)PageInfo.reset_pageNext();Action.loaded=0;Action.loadto=0;var aaa=(ScreenInfo.onesmc===true)?FileInfo.cimgFilePath(PageInfo.prevPage,"s","","*"):FileInfo.cimgFilePath(PageInfo.currentPage,"s","","*");if(aaa[0]===""){catImageLN=document.createElement('canvas');var contextLN=catImageLN.getContext("2d");if(!contextLN){console.log("[Error] smc010.js : canvas 2d context is not supported");return;}
catImageLN.style.position='fixed';catImageLN.style.left=-9999+'px';catImageLN.style.top=0+'px';catImageLN.width=ScreenInfo.smImageOriWidth;catImageLN.height=ScreenInfo.smImageOriHeight;contextLN.fillStyle=ScreenInfo.blankColor;contextLN.fillRect(0,0,ScreenInfo.smImageOriWidth,ScreenInfo.smImageOriWidth);}
else{Action.loadto++;SmcObj.drawL=0;}
var bbb=(ScreenInfo.onesmc===true)?FileInfo.cimgFilePath(PageInfo.currentPage,"s","","*"):FileInfo.cimgFilePath(PageInfo.prevPage+1,"s","","*");if(bbb[0]===""){catImageRN=document.createElement('canvas');catImageRN.style.position='fixed';catImageRN.style.left=-9999+'px';catImageRN.style.top=0+'px';catImageRN.width=ScreenInfo.smImageOriWidth;catImageRN.height=ScreenInfo.smImageOriHeight;var contextRN=catImageRN.getContext("2d");contextRN.fillStyle=ScreenInfo.blankColor;contextRN.fillRect(0,0,ScreenInfo.smImageOriWidth,ScreenInfo.smImageOriWidth);}
else{Action.loadto++;SmcObj.drawR=0;}
if(SmcObj.drawL===0){catImageLN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,aaa[0],go_nextLNCipher);}
else{catImageLN.src=aaa[0];catImageLN.onload=go_next2;}}
if(SmcObj.drawR===0){catImageRN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,bbb[0],go_nextRNCipher);}
else{catImageRN.src=bbb[0];catImageRN.onload=go_next2;}}
if(Action.loadto===0){Action.loadto++;go_next2();}}
function go_nextLNCipher(skd,npage,urlsrc){catImageLN.src=urlsrc;catImageLN.onload=go_next2;}
function go_nextRNCipher(skd,npage,urlsrc){catImageRN.src=urlsrc;catImageRN.onload=go_next2;}
function go_next2(){Action.loaded++;if(Action.loadto===Action.loaded){prepare_canvas();if(ScreenInfo.onesmc===true){cntx.drawImage(catImageLN,0,0,ScreenInfo.smImageOriWidth,ScreenInfo.smImageOriHeight,smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
else{cntx.drawImage(catImageRN,0,0,ScreenInfo.smImageOriWidth,ScreenInfo.smImageOriHeight,smRect.centerPt.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
SmcObj.storedPage=PageInfo.currentPage;if(ScreenInfo.onesmc===true)SmcObj.load_leftImageEach('next');else SmcObj.load_rightImageEach('next');}}
function after_nextFrontImageLoaded(){Action.drawCondition=2;prepare_turnover();set_arEpsPoint();AniObj.arTimerSeq=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1);set_arBmpRect();AniObj.seq=0;AniObj.timer=(ScreenInfo.onesmc===true)?setInterval(next_animateRone,AniObj.transInterval):setInterval(next_animateR,AniObj.transInterval);}
function next_animateR(){clear_canvas();var k=0;if(AniObj.seq%5===0){k=Math.floor(AniObj.seq/5);if(k<10)AniObj.arTimerSeq[k]=0;}
var ix,iy,bmpx,bmpy,bmpw,bmph,smcx,epsx,epsy;var arvw=0;for(ix=0;ix<10;ix++){k=AniObj.arTimerSeq[ix];if(k===-1)continue;if(k>39){arvw+=AniObj.arbmpWidth[ix];continue;}
bmpw=AniObj.arbmpWidth[ix];bmpx=AniObj.arPosX[ix];epsx=smRect.x+AniObj.arEpsPoint[k].x;epsy=smRect.y-AniObj.arEpsPoint[k].y;if(k>19){for(iy=0;iy<10;iy++){bmph=AniObj.arbmpHeight[iy];bmpy=AniObj.arPosY[iy];cntx.drawImage(catImageLN,bmpx,bmpy,bmpw,bmph,epsx+bmpx,epsy+bmpy+get_yAddition(k)*(iy/2),bmpw,bmph);}}
else{for(iy=0;iy<10;iy++){bmph=AniObj.arbmpHeight[iy];bmpy=AniObj.arPosY[iy];cntx.drawImage(catImageRN,bmpx,bmpy,bmpw,bmph,epsx+bmpx,epsy+bmpy+get_yAddition(k)*(iy/2),bmpw,bmph);}}
k++;AniObj.arTimerSeq[ix]=k;}
smcx=bmpx+bmpw;if(smcx<ScreenInfo.smImageWidth){cntx.drawImage(catImageRN,smcx*AniObj.ratioWO,0,ScreenInfo.smImageOriWidth-smcx*AniObj.ratioWO,ScreenInfo.smImageOriHeight,smRect.centerPt.x+smcx,smRect.y,ScreenInfo.smImageWidth-smcx,ScreenInfo.smImageHeight);}
if(arvw>0){cntx.drawImage(catImageLN,0,0,arvw*AniObj.ratioWO,ScreenInfo.smImageOriHeight,smRect.x,smRect.y,arvw,ScreenInfo.smImageHeight);}
if(AniObj.seq===AniObj.angleDiv){if(CataInfo.openingAnimation===true&&PageInfo.blank_imageFromLeft(PageInfo.currentPage)===1){CoverObj.hide_rightPage();}
clearInterval(AniObj.timer);SmcObj.load_leftImageEach('next');}
AniObj.seq++;}
function next_animateRone(){clear_canvas();var k=0;if(AniObj.seq%5===0){k=Math.floor(AniObj.seq/5);if(k<10)AniObj.arTimerSeq[k]=0;}
var ix,iy,bmpx,bmpy,bmpw,bmph,smcx,epsx,epsy;var arvw=0;for(ix=0;ix<10;ix++){k=AniObj.arTimerSeq[ix];if(k===-1)continue;if(k>39){arvw+=AniObj.arbmpWidth[ix];continue;}
bmpw=AniObj.arbmpWidth[ix];bmpx=AniObj.arPosX[ix];epsx=smRect.x+AniObj.arEpsPoint[k].x-ScreenInfo.smImageWidth;epsy=smRect.y-AniObj.arEpsPoint[k].y;if(k>19)cntx.globalAlpha=(40-k)/20;for(iy=0;iy<10;iy++){bmph=AniObj.arbmpHeight[iy];bmpy=AniObj.arPosY[iy];cntx.drawImage(catImageLN,bmpx,bmpy,bmpw,bmph,epsx+bmpx,epsy+bmpy+get_yAddition(k)*(iy/2),bmpw,bmph);}
cntx.globalAlpha=1;k++;AniObj.arTimerSeq[ix]=k;}
smcx=bmpx+bmpw;if(smcx<ScreenInfo.smImageWidth){cntx.drawImage(catImageLN,smcx*AniObj.ratioWO,0,ScreenInfo.smImageOriWidth-smcx*AniObj.ratioWO,ScreenInfo.smImageOriHeight,smRect.x+smcx,smRect.y,ScreenInfo.smImageWidth-smcx,ScreenInfo.smImageHeight);}
if(AniObj.seq===AniObj.angleDiv){clearInterval(AniObj.timer);after_nextRearImageLoaded();}
AniObj.seq++;}
function after_nextRearImageLoaded(){finish_turnover();}
function go_prev(bool){if(bool===true)PageInfo.reset_pagePrev();Action.loaded=0;Action.loadto=0;var aaa=(ScreenInfo.onesmc===true)?FileInfo.cimgFilePath(PageInfo.prevPage,"s","","*"):FileInfo.cimgFilePath(PageInfo.prevPage,"s","","*");if(aaa[0]===""){catImageLN=document.createElement('canvas');var contextLN=catImageLN.getContext("2d");if(!contextLN){console.log("[Error] smc010.js : canvas 2d context is not supported");return;}
catImageLN.style.position='fixed';catImageLN.style.left=-9999+'px';catImageLN.style.top=0+'px';catImageLN.width=ScreenInfo.smImageOriWidth;catImageLN.height=ScreenInfo.smImageOriHeight;contextLN.fillStyle=ScreenInfo.blankColor;contextLN.fillRect(0,0,ScreenInfo.smImageOriWidth,ScreenInfo.smImageOriWidth);}
else{Action.loadto++;SmcObj.drawL=0;}
var bbb=(ScreenInfo.onesmc===true)?FileInfo.cimgFilePath(PageInfo.currentPage,"s","","*"):FileInfo.cimgFilePath(PageInfo.currentPage+1,"s","","*");if(bbb[0]===""){catImageRN=document.createElement('canvas');catImageRN.style.position='fixed';catImageRN.style.left=-9999+'px';catImageRN.style.top=0+'px';catImageRN.width=ScreenInfo.smImageOriWidth;catImageRN.height=ScreenInfo.smImageOriHeight;var contextRN=catImageRN.getContext("2d");contextRN.fillStyle=ScreenInfo.blankColor;contextRN.fillRect(0,0,ScreenInfo.smImageOriWidth,ScreenInfo.smImageOriWidth);}
else{Action.loadto++;SmcObj.drawR=0;}
if(SmcObj.drawL===0){catImageLN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,aaa[0],go_prevLNCipher);}
else{catImageLN.src=aaa[0];catImageLN.onload=go_prev2;}}
if(SmcObj.drawR===0){catImageRN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,bbb[0],go_prevRNCipher);}
else{catImageRN.src=bbb[0];catImageRN.onload=go_prev2;}}
if(Action.loadto===0){Action.loadto++;go_prev2();}}
function go_prevLNCipher(skd,npage,urlsrc){catImageLN.src=urlsrc;catImageLN.onload=go_prev2;}
function go_prevRNCipher(skd,npage,urlsrc){catImageRN.src=urlsrc;catImageRN.onload=go_prev2;}
function go_prev2(){Action.loaded++;if(Action.loadto===Action.loaded){prepare_canvas();cntx.drawImage(catImageLN,0,0,ScreenInfo.smImageOriWidth,ScreenInfo.smImageOriHeight,smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);SmcObj.storedPage=PageInfo.currentPage;SmcObj.load_leftImageEach('prev');}}
function after_prevFrontImageLoaded(){Action.drawCondition=1;prepare_turnover();set_arEpsPoint();AniObj.arTimerSeq=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1);set_arBmpRect();AniObj.seq=0;if(ScreenInfo.onesmc===true)AniObj.timer=setInterval(prev_animateLone,AniObj.transInterval);else AniObj.timer=setInterval(prev_animateL,AniObj.transInterval);}
function prev_animateL(){clear_canvas();var k=0;if(AniObj.seq%5===0){k=Math.floor(AniObj.seq/5);if(k<10)AniObj.arTimerSeq[k]=0;}
var ix,iy,bmpx,bmpy,bmpw,bmph,smcx,epsx,epsy;var arvw=0;for(ix=0;ix<10;ix++){k=AniObj.arTimerSeq[ix];if(k===-1)continue;if(k>39){arvw+=AniObj.arbmpWidth[9-ix];continue;}
bmpw=AniObj.arbmpWidth[9-ix];bmpx=AniObj.arPosX[9-ix];epsx=smRect.x+ScreenInfo.smImageWidth-AniObj.arEpsPoint[k].x;epsy=smRect.y-AniObj.arEpsPoint[k].y;if(k>19){for(iy=0;iy<10;iy++){bmph=AniObj.arbmpHeight[iy];bmpy=AniObj.arPosY[iy];cntx.drawImage(catImageRN,bmpx,bmpy,bmpw,bmph,epsx+bmpx,epsy+bmpy+get_yAddition(k)*(iy/2),bmpw,bmph);}}
else{for(iy=0;iy<10;iy++){bmph=AniObj.arbmpHeight[iy];bmpy=AniObj.arPosY[iy];cntx.drawImage(catImageLN,bmpx,bmpy,bmpw,bmph,epsx+bmpx,epsy+bmpy+get_yAddition(k)*(iy/2),bmpw,bmph);}}
k++;AniObj.arTimerSeq[ix]=k;}
if(bmpx>0){cntx.drawImage(catImageLN,0,0,bmpx*AniObj.ratioWO,ScreenInfo.smImageOriHeight,smRect.x,smRect.y,bmpx,ScreenInfo.smImageHeight);}
if(arvw>0){cntx.drawImage(catImageRN,ScreenInfo.smImageOriWidth-arvw*AniObj.ratioWO,0,arvw*AniObj.ratioWO,ScreenInfo.smImageOriHeight,smRect.centerPt.x+ScreenInfo.smImageWidth-arvw,smRect.y,arvw,ScreenInfo.smImageHeight);}
if(AniObj.seq===AniObj.angleDiv){if(CataInfo.openingAnimation===true&&PageInfo.blank_imageFromLeft(PageInfo.currentPage)===0){CoverObj.hide_leftPage();}
clearInterval(AniObj.timer);SmcObj.load_rightImageEach('prev');}
AniObj.seq++;}
function prev_animateLone(){clear_canvas();var k=0;if(AniObj.seq%5===0){k=Math.floor(AniObj.seq/5);if(k<10)AniObj.arTimerSeq[k]=0;}
var ix,iy,bmpx,bmpy,bmpw,bmph,smcx,epsx,epsy;var arvw=0;for(ix=0;ix<10;ix++){k=AniObj.arTimerSeq[ix];if(k===-1)continue;if(k>39){arvw+=AniObj.arbmpWidth[9-ix];continue;}
bmpw=AniObj.arbmpWidth[9-ix];bmpx=AniObj.arPosX[9-ix];epsx=smRect.x+ScreenInfo.smImageWidth-AniObj.arEpsPoint[k].x;epsy=smRect.y-AniObj.arEpsPoint[k].y;if(k>19)cntx.globalAlpha=(40-k)/20;for(iy=0;iy<10;iy++){bmph=AniObj.arbmpHeight[iy];bmpy=AniObj.arPosY[iy];cntx.drawImage(catImageLN,bmpx,bmpy,bmpw,bmph,epsx+bmpx,epsy+bmpy+get_yAddition(k)*(iy/2),bmpw,bmph);}
cntx.globalAlpha=1;k++;AniObj.arTimerSeq[ix]=k;}
if(bmpx>0){cntx.drawImage(catImageLN,0,0,bmpx*AniObj.ratioWO,ScreenInfo.smImageOriHeight,smRect.x,smRect.y,bmpx,ScreenInfo.smImageHeight);}
if(AniObj.seq===AniObj.angleDiv){clearInterval(AniObj.timer);after_prevRearImageLoaded();}
AniObj.seq++;}
function after_prevRearImageLoaded(){finish_turnover();}
function go_direct(n){n=PageInfo.get_directPageNo(n);PageInfo.prevPage=PageInfo.currentPage;PageInfo.currentPage=n;if(PageInfo.prevPage<n)go_next(false);else go_prev(false);}
function prepare_turnover(){if(glassesSvg!=undefined)unload_glasses();if(soundctrlSvg!=undefined)unload_soundcontrol();AniObj.seq=0;cntx.globalAlpha=1;SmcObj.prepare_turnover();}
function prepare_canvas(){if(mainCnv.width!=winRect.width){maincnvDiv.style.width=winRect.width+"px";maincnvDiv.style.height=winRect.height+"px";mainCnv.width=winRect.width;mainCnv.height=winRect.height;}}
function finish_turnover(){clear_canvas();mainCnv.width=1;mainCnv.height=1;maincnvDiv.style.width="1px";maincnvDiv.style.height="1px";Action.drawCondition=0;if(MoveInfo.pairEnlarge===true)Action.set_togetherEnlarge();MoveInfo.show_pageNumber();if(CoverObj.state===0)OnsmObj.set_visible("visible","visible");else CoverObj.set_cover();if(Action.mainState==="slide"){if(SmcObj.nextPermission("wheel")===false||PermitMan.access_memberZone(-1,"wheel")===false){Action.mainState="stop";}
else if(MoveInfo.loadLinkAtSlide===true){SmcObj.show_linkData();}
if(Action.mainState==="slide"){setTimeout("go_next(true)",MoveInfo.slideIntervalSM);return;}}
if(Action.mainState==="stop")Action.mainState="normal";SmcObj.show_outData();ScreenMan.finish_turnover();Action.aniLocking=false;}
function set_arEpsPoint(){AniObj.arEpsPoint=new Array(40);var a=ScreenInfo.smImageWidthHalf;var b=30;var tx;var i,k;for(i=0;i<20;i++){tx=a*(19-i)/19;AniObj.arEpsPoint[i]=new Point(ScreenInfo.smImageWidthHalf+tx,get_ellipseYpoint(tx,a,b));}
for(i=0;i<20;i++){tx=a*(19-i)/19;AniObj.arEpsPoint[20+i]=new Point(tx,AniObj.arEpsPoint[19-i].y);}}
function get_ellipseXpoint(ay,a,b){return Math.sqrt((1-(ay*ay)/(b*b))*a*a);}
function get_ellipseYpoint(ax,a,b){return Math.sqrt((1-(ax*ax)/(a*a))*b*b);}
function set_arBmpRect(){AniObj.ratioWO=ScreenInfo.smImageOriWidth/ScreenInfo.smImageWidth;AniObj.ratioHO=ScreenInfo.smImageOriHeight/ScreenInfo.smImageHeight;AniObj.arbmpWidth=new Int32Array(10);AniObj.arbmpHeight=new Int32Array(10);AniObj.arPosX=new Int32Array(10);AniObj.arPosY=new Int32Array(10);var bmpW=Math.floor(ScreenInfo.smImageWidth/10);var bmpH=Math.floor(ScreenInfo.smImageHeight/10);for(var i=0;i<10;i++){AniObj.arbmpWidth[i]=bmpW;AniObj.arbmpHeight[i]=bmpH;}
var diffX=ScreenInfo.smImageWidth-bmpW*10;var diffY=ScreenInfo.smImageHeight-bmpH*10;for(i=0;i<diffX;i++){AniObj.arbmpWidth[i]++;}
for(i=0;i<diffY;i++){AniObj.arbmpHeight[i]++;}
diffX=0,diffY=0;for(i=0;i<10;i++){AniObj.arPosX[i]=diffX;diffX+=AniObj.arbmpWidth[i];AniObj.arPosY[i]=diffY;diffY+=AniObj.arbmpHeight[i];}}
function get_yAddition(idx){return(idx>30)?39-idx:idx/2;}
