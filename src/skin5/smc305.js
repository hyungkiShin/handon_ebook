var smc305Obj={partWidth:0,initAlpha:0.3,pmoveImg:undefined,nmoveImg:undefined,catImageNN:undefined,showLastAni:true};smc305Obj.do_afterMainFinish=function(){smc305Obj.pmoveImg.style.left=(cataRect.x-smRect.width+smc305Obj.partWidth)+"px";smc305Obj.pmoveImg.style.top=smRect.y+"px";smc305Obj.pmoveImg.style.width=smRect.width+"px";smc305Obj.pmoveImg.style.height=smRect.height+"px";smc305Obj.pmoveImg.style.opacity=smc305Obj.initAlpha;if(PageInfo.is_firstPage()===true){smc305Obj.pmoveImg.style.visibility="hidden";}
smc305Obj.nmoveImg.style.left=(cataRect.right-smc305Obj.partWidth)+"px";smc305Obj.nmoveImg.style.top=smRect.y+"px";smc305Obj.nmoveImg.style.width=smRect.width+"px";smc305Obj.nmoveImg.style.height=smRect.height+"px";smc305Obj.nmoveImg.style.opacity=smc305Obj.initAlpha;if(PageInfo.is_lastPage()===false){var bbb=SmcObj.get_imageUrl(PageInfo.currentPage+1);var newImg=new Image();newImg.onload=function(){smc305Obj.nmoveImg.innerHTML="<img src='"+bbb[0]+"'>";smc305Obj.nmoveImg.style.visibility="visible";}
newImg.src=bbb[0];}
else{smc305Obj.nmoveImg.style.visibility="hidden";}}
smc305Obj.onresize_func=function(){smc305Obj.partWidth=Math.floor((cataRect.width-smRect.width)/4);smc305Obj.pmoveImg.style.left=(cataRect.x-smRect.width+smc305Obj.partWidth)+"px";smc305Obj.pmoveImg.style.top=smRect.y+"px";smc305Obj.pmoveImg.style.width=smRect.width+"px";smc305Obj.pmoveImg.style.height=smRect.height+"px";smc305Obj.nmoveImg.style.left=(cataRect.right-smc305Obj.partWidth)+"px";smc305Obj.nmoveImg.style.top=smRect.y+"px";smc305Obj.nmoveImg.style.width=smRect.width+"px";smc305Obj.nmoveImg.style.height=smRect.height+"px";}
function init_smc2(){var plen=30;AniObj.elasticPercent=new Float32Array(plen);for(var i=0;i<plen;i++){AniObj.elasticPercent[i]=1/plen*(i+1);}
smc305Obj.pmoveImg=document.getElementById('smcsect0');smc305Obj.nmoveImg=document.getElementById('smcsect2');smc305Obj.partWidth=Math.floor((cataRect.width-smRect.width)/4);}
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
function go_next2(){Action.loaded++;if(Action.loadto===Action.loaded){smc305Obj.showLastAni=(PageInfo.currentPage+1<=PageInfo.lastPage)?true:false;if(smc305Obj.showLastAni===true){var bbb=SmcObj.get_imageUrl(PageInfo.currentPage+1);smc305Obj.catImageNN=new Image();smc305Obj.catImageNN.onload=function(){go_next3();}
smc305Obj.catImageNN.src=bbb[0];}
else{go_next3();}}}
function go_next3(){Action.drawCondition=1;smc305Obj.partWidth=Math.floor((cataRect.width-smRect.width)/4);AniObj.baseX=smRect.right-cataRect.x-smc305Obj.partWidth;prepare_turnover();cntx.globalAlpha=1;cntx.drawImage(catImageRN,smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);cntx.globalAlpha=smc305Obj.initAlpha;cntx.drawImage(catImageLN,smRect.x+AniObj.baseX,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);smc305Obj.pmoveImg.style.visibility="hidden";smc305Obj.nmoveImg.style.visibility="hidden";SmcObj.leftImgGrp.setAttribute("visibility","hidden");SmcObj.prepare_turnover();AniObj.timer=setInterval(next_animate,15);}
function next_animate(){var t=AniObj.elasticPercent[AniObj.seq];var percent=-(Math.cos(Math.PI*t)-1)/2;clear_canvas();cntx.globalAlpha=1-(1-smc305Obj.initAlpha)*percent;cntx.drawImage(catImageRN,cataRect.x-ScreenInfo.smImageWidth+AniObj.baseX*(1-percent)+smc305Obj.partWidth,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);if(smc305Obj.showLastAni===true){cntx.globalAlpha=smc305Obj.initAlpha;cntx.drawImage(smc305Obj.catImageNN,smRect.x+AniObj.baseX+AniObj.baseX*(1-percent),smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
cntx.globalAlpha=1-(1-smc305Obj.initAlpha)*(1-percent);cntx.drawImage(catImageLN,smRect.x+AniObj.baseX*(1-percent),smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);AniObj.seq++;if(AniObj.seq===AniObj.elasticPercent.length){var bbb=SmcObj.get_imageUrl(PageInfo.prevPage);smc305Obj.pmoveImg.innerHTML="<img src='"+bbb[0]+"'>";smc305Obj.pmoveImg.style.visibility="visible";if(smc305Obj.showLastAni===true){var ccc=SmcObj.get_imageUrl(PageInfo.currentPage+1);smc305Obj.nmoveImg.innerHTML="<img src='"+ccc[0]+"'>";smc305Obj.nmoveImg.style.visibility="visible";}
else{smc305Obj.nmoveImg.innerHTML="";smc305Obj.nmoveImg.style.visibility="hidden";}
finish_turnover();clearInterval(AniObj.timer);}}
function go_prev(bool){if(bool===true)PageInfo.reset_pagePrev();Action.loaded=0;Action.loadto=0;var aaa=FileInfo.cimgFilePath(PageInfo.currentPage,"","","*");if(aaa[0]===""){SmcObj.drawL=1;}
else{Action.loadto++;SmcObj.drawL=0;}
var bbb=FileInfo.cimgFilePath(PageInfo.prevPage,"","","*");if(bbb[0]===""){SmcObj.drawR=1;}
else{Action.loadto++;342
SmcObj.drawR=0;}
if(SmcObj.drawL===0){catImageLN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,aaa[0],go_prevLNCipher);}
else{catImageLN.src=aaa[0];catImageLN.onload=go_prev2;}}
if(SmcObj.drawR===0){catImageRN=new Image();if(ServerInfo.applyCipher===true){load_cipherImage('btn',0,bbb[0],go_prevRNCipher);}
else{catImageRN.src=bbb[0];catImageRN.onload=go_prev2;}}
if(Action.loadto===0){Action.loadto++;go_prev2();}}
function go_prevLNCipher(skd,npage,urlsrc){catImageLN.src=urlsrc;catImageLN.onload=go_prev2;}
function go_prevRNCipher(skd,npage,urlsrc){catImageRN.src=urlsrc;catImageRN.onload=go_prev2;}
function go_prev2(){Action.loaded++;if(Action.loadto===Action.loaded){smc305Obj.showLastAni=(PageInfo.currentPage-1>=PageInfo.firstPage)?true:false;if(smc305Obj.showLastAni===true){var bbb=SmcObj.get_imageUrl(PageInfo.currentPage-1);smc305Obj.catImageNN=new Image();smc305Obj.catImageNN.onload=function(){go_prev3();}
smc305Obj.catImageNN.src=bbb[0];}
else{go_prev3();}}}
function go_prev3(){Action.drawCondition=2;AniObj.baseX=smRect.right-cataRect.x-smc305Obj.partWidth;prepare_turnover();cntx.globalAlpha=1;cntx.drawImage(catImageRN,smRect.x,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);cntx.globalAlpha=smc305Obj.initAlpha;cntx.drawImage(catImageLN,smRect.x-AniObj.baseX,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);smc305Obj.pmoveImg.style.visibility="hidden";smc305Obj.nmoveImg.style.visibility="hidden";SmcObj.leftImgGrp.setAttribute("visibility","hidden");SmcObj.prepare_turnover();AniObj.timer=setInterval(prev_animate,15);}
function prev_animate(){var percent=AniObj.elasticPercent[AniObj.seq];clear_canvas();cntx.globalAlpha=1-(1-smc305Obj.initAlpha)*percent;cntx.drawImage(catImageRN,smRect.x+AniObj.baseX*percent,smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);if(smc305Obj.showLastAni===true){cntx.globalAlpha=smc305Obj.initAlpha;cntx.drawImage(smc305Obj.catImageNN,smRect.x-AniObj.baseX-AniObj.baseX*(1-percent),smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);}
cntx.globalAlpha=1-(1-smc305Obj.initAlpha)*(1-percent);cntx.drawImage(catImageLN,smRect.x-AniObj.baseX*(1-percent),smRect.y,ScreenInfo.smImageWidth,ScreenInfo.smImageHeight);AniObj.seq++;if(AniObj.seq===AniObj.elasticPercent.length){var bbb=SmcObj.get_imageUrl(PageInfo.prevPage);smc305Obj.nmoveImg.innerHTML="<img src='"+bbb[0]+"'>";smc305Obj.nmoveImg.style.visibility="visible";if(smc305Obj.showLastAni===true){var ccc=SmcObj.get_imageUrl(PageInfo.currentPage-1);smc305Obj.pmoveImg.innerHTML="<img src='"+ccc[0]+"'>";smc305Obj.pmoveImg.style.visibility="visible";}
else{smc305Obj.pmoveImg.innerHTML="";smc305Obj.pmoveImg.style.visibility="hidden";}
finish_turnover();clearInterval(AniObj.timer);}}
function go_direct(n){n=PageInfo.get_directPageNo(n);PageInfo.prevPage=PageInfo.currentPage;PageInfo.currentPage=n;if(PageInfo.prevPage<n)go_next(false);else go_prev(false);}
function prepare_turnover(){if(glassesSvg!=undefined)unload_glasses();if(soundctrlSvg!=undefined)unload_soundcontrol();AniObj.seq=0;cntx.globalAlpha=1;if(mainCnv.width!=winRect.width){maincnvDiv.style.width=winRect.width+"px";maincnvDiv.style.height=winRect.height+"px";mainCnv.width=winRect.width;mainCnv.height=winRect.height;}}
function finish_turnover(){SmcObj.finish_turnover();}
function finish_turnover2(){SmcObj.leftImgGrp.setAttribute("visibility","visible");clear_canvas();mainCnv.width=1;mainCnv.height=1;maincnvDiv.style.width="1px";maincnvDiv.style.height="1px";Action.drawCondition=0;if(MoveInfo.pairEnlarge===true)Action.set_togetherEnlarge();MoveInfo.show_pageNumber();if(Action.mainState==="slide"){if(SmcObj.nextPermission("wheel")===false||PermitMan.access_memberZone(-1,"wheel")===false){Action.mainState="stop";}
else if(MoveInfo.loadLinkAtSlide===true){SmcObj.show_linkData();}
if(Action.mainState==="slide"){setTimeout("go_next(true)",MoveInfo.slideIntervalSM);return;}}
if(Action.mainState==="stop")Action.mainState="normal";SmcObj.show_outData();ScreenMan.finish_turnover();Action.aniLocking=false;}
