var AniObj={seq:0,transPercent:[],transLen:0,transInterval:15,angleDiv:0,baseX:0,baseW:0,timer:undefined,endFunc:undefined,finishEnlargeTimer:false,finishEnlargeLoader:false,neckAngle:0,transNum:0,mmDiv:undefined,mmTimer:undefined,mmSeq:0,mmY:0,mmMove:0,lwTimer:undefined,lwSeq:0,lwY:0,lwMove:0,horidxY:0,gradualPercent:[0.08,0.15,0.22,0.28,0.34,0.40,0.45,0.50,0.55,0.59,0.63,0.67,0.71,0.74,0.77,0.80,0.83,0.85,0.88,0.90,0.92,0.94,0.96,0.97,0.98,0.99,0.99,1.0],normalPercent:[0.15,0.28,0.4,0.5,0.59,0.67,0.74,0.8,0.85,0.9,0.95,1.0],sizePercent:[0.0,0.2,0.4,0.6,0.7,0.8,0.9,1.0],dragPercent:[0.0,0.2,0.4,0.5,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.92,0.94,0.95,0.96,0.97,0.98,0.99,1.0]};var CoverObj={state:0,direction:'',smcX:NOMOVE,bookdecoX:NOMOVE,onsmrX:NOMOVE,splbtnX:NOMOVE,sprbtnX:NOMOVE,pcpi:undefined,piWidth:0};CoverObj.loc_openingCover=function(){CoverObj.smcX-=ScreenInfo.smImageWidthHalf;smcDiv.style.left=CoverObj.smcX+"px";linkoutDiv.style.left=CoverObj.smcX+"px";bbwDiv.style.left=(BBwInfo.loc==="win")?winRect.x-ScreenInfo.smImageWidthHalf:CoverObj.smcX+"px";memoDiv.style.left=(BBwInfo.loc==="win")?winRect.x-ScreenInfo.smImageWidthHalf:CoverObj.smcX+"px";if(CoverObj.bookdecoX!==NOMOVE){CoverObj.bookdecoX-=ScreenInfo.smImageWidthHalf;bookdecoDiv.style.left=CoverObj.bookdecoX+"px";}
if(CoverObj.onsmrX!==NOMOVE){onsmlDiv.style.visibility="hidden";CoverObj.onsmrX-=ScreenInfo.smImageWidthHalf;onsmrDiv.style.left=CoverObj.onsmrX+"px";}
if(CoverObj.splbtnX!==NOMOVE)splbtnDiv.style.visibility="hidden";if(CoverObj.sprbtnX!==NOMOVE)sprbtnDiv.style.visibility="hidden";}
CoverObj.do_coverAnimation=function(s){CoverObj.state=1;CoverObj.direction=s;AniObj.seq=0;AniObj.timer=setInterval(CoverObj.cover_animate,30);}
CoverObj.cover_animate=function(){var tx=Math.floor(ScreenInfo.smImageWidthHalf*AniObj.gradualPercent[AniObj.seq]);smcDiv.style.left=(CoverObj.smcX+tx)+"px";linkoutDiv.style.left=(CoverObj.smcX+tx)+"px";bbwDiv.style.left=(BBwInfo.loc==="win")?(winRect.x-ScreenInfo.smImageWidthHalf+tx)+"px":(CoverObj.smcX+tx)+"px";memoDiv.style.left=(BBwInfo.loc==="win")?(winRect.x-ScreenInfo.smImageWidthHalf+tx)+"px":(CoverObj.smcX+tx)+"px";if(CoverObj.bookdecoX!==NOMOVE)bookdecoDiv.style.left=(CoverObj.bookdecoX+tx)+"px";if(CoverObj.onsmrX!==NOMOVE)onsmrDiv.style.left=(CoverObj.onsmrX+tx)+"px";AniObj.seq++;if(AniObj.seq===AniObj.gradualPercent.length){clearInterval(AniObj.timer);AniObj.timer=undefined;AniObj.seq=0;Action.drawCondition=0;if(CoverObj.direction==="next"){go_next(true);}
else if(CoverObj.direction==="last"){if(ScreenInfo.onesmc===true)go_direct(PageInfo.lastPage);else go_direct(PageInfo.lastPage-1);}
else{go_direct(parseInt(CoverObj.direction));}}}
CoverObj.set_cover=function(){if(CoverObj.state===1||CoverObj.state===6||CoverObj.state===11||CoverObj.state===3){SmcObj.leftImgGrp.setAttribute("visibility","visible");SmcObj.rightImgGrp.setAttribute("visibility","visible");if(CoverObj.onsmrX!==NOMOVE)OnsmObj.set_visible("visible","visible");if(CoverObj.bookdecoX!==NOMOVE)DecoObj.draw_deco(0);if(CoverObj.splbtnX!==NOMOVE)splbtnDiv.style.visibility="visible";if(CoverObj.sprbtnX!==NOMOVE)sprbtnDiv.style.visibility="visible";if(smctrDiv)smctrDiv.style.visibility="visible";CoverObj.state=0;}
else if(CoverObj.state===5){SmcObj.leftImgGrp.setAttribute("visibility","hidden");CoverObj.state=6;}
else if(CoverObj.state===10){SmcObj.rightImgGrp.setAttribute("visibility","hidden");CoverObj.state=11;}}
CoverObj.hide_leftPage=function(){SmcObj.leftImgGrp.setAttribute("visibility","visible");SmcObj.rightImgGrp.setAttribute("visibility","visible");if(CoverObj.onsmrX!==NOMOVE)OnsmObj.set_visible("hidden","visible");if(CoverObj.bookdecoX!==NOMOVE)DecoObj.draw_deco(1);if(CoverObj.splbtnX!==NOMOVE)splbtnDiv.style.visibility="hidden";if(CoverObj.sprbtnX!==NOMOVE)sprbtnDiv.style.visibility="visible";if(smctrDiv)smctrDiv.style.visibility="hidden";CoverObj.state=5;}
CoverObj.hide_rightPage=function(){SmcObj.leftImgGrp.setAttribute("visibility","visible");SmcObj.rightImgGrp.setAttribute("visibility","visible");if(CoverObj.onsmrX!==NOMOVE)OnsmObj.set_visible("visible","hidden");if(CoverObj.bookdecoX!==NOMOVE)DecoObj.draw_deco(2);if(CoverObj.splbtnX!==NOMOVE)splbtnDiv.style.visibility="visible";if(CoverObj.sprbtnX!==NOMOVE)sprbtnDiv.style.visibility="hidden";if(smctrDiv)smctrDiv.style.visibility="hidden";CoverObj.state=10;}
CoverObj.hide_bothPage=function(){SmcObj.leftImgGrp.setAttribute("visibility","hidden");SmcObj.rightImgGrp.setAttribute("visibility","hidden");if(CoverObj.onsmrX!==NOMOVE)OnsmObj.set_visible("hidden","hidden");if(CoverObj.bookdecoX!==NOMOVE)DecoObj.draw_deco(4);if(CoverObj.splbtnX!==NOMOVE)splbtnDiv.style.visibility="hidden";if(CoverObj.sprbtnX!==NOMOVE)sprbtnDiv.style.visibility="hidden";if(smctrDiv)smctrDiv.style.visibility="hidden";CoverObj.state=3;}
CoverObj.set_mcoverBef=function(){if(CoverObj.state===1||CoverObj.state===6||CoverObj.state===11||CoverObj.state===3){SmcObj.leftImgGrp.setAttribute("visibility","visible");SmcObj.rightImgGrp.setAttribute("visibility","visible");CoverObj.state=0;}}
CoverObj.set_mcoverAfter=function(){if(CataInfo.openingAnimation===true){if(PageInfo.blank_imageFromLeft(PageInfo.currentPage)===0)CoverObj.state=5;else if(PageInfo.blank_imageFromLeft(PageInfo.currentPage)===1)CoverObj.state=10;}
if(CoverObj.state===5){SmcObj.leftImgGrp.setAttribute("visibility","hidden");CoverObj.state=6;}
else if(CoverObj.state===10){SmcObj.rightImgGrp.setAttribute("visibility","hidden");CoverObj.state=11;}}
CoverObj.show_pageIcon=function(){CoverObj.pcpi=new PagingWidgetCont(10,PageInfo.cataPages);CoverObj.pcpi.set_currentPage(1);CoverObj.show_pageIconHtml(false);}
CoverObj.show_pageIconHtml=function(bool){if(bool===true){var pn=CoverObj.pcpi.get_pageFromArticle(PageInfo.currentPage);CoverObj.pcpi.set_currentPage(pn);}
var s="";var tw=0;for(var i=1;i<=CoverObj.pcpi.totalPages;i++){if(i===CoverObj.pcpi.currentPage){for(var j=CoverObj.pcpi.startArticle;j<=CoverObj.pcpi.finalArticle;j++){if(j+1===PageInfo.currentPage)s+="<p class='pageicon_article'><img src='./skin5/mm001/m_syncircle-s.png'></p>\n";else s+="<p class='pageicon_article'><a href=\"javascript:CoverObj.pageIconClick("+(j+1)+")\"><img src='./skin5/mm001/m_syncircle.png'></a></p>\n";tw+=13;}}
else{s+="<p class='pageicon_page'><a href=\"javascript:CoverObj.pageIconClick("+((i-1)*CoverObj.pcpi.articlesOnPage+1)+")\"><img src='./skin5/mm001/m_syncircle.png'></a></p>\n";tw+=17;}}
CoverObj.piWidth=tw;pageiconDiv.style.width=tw+"px";pageiconDiv.style.top=(cataRect.bottom-40)+"px";pageiconDiv.style.left=Math.floor(winRect.centerPt.x-CoverObj.piWidth/2)+"px";pageiconDiv.innerHTML=s;}
CoverObj.pageIconClick=function(pno){var n=PermitMan.get_directGoPerm("widget",pno,"","");if(n<0)return;go_general(n,"system");}
CoverObj.show_helpMessage=function(){load_helpm002();AniObj.mmTimer=setTimeout(CoverObj.help_fadeOut,2000);}
CoverObj.help_fadeOut=function(){AniObj.mmSeq=0;AniObj.mmTimer=setInterval(CoverObj.help_animateFadeOut,30);}
CoverObj.help_animateFadeOut=function(){cursorDiv.style.opacity=(10-AniObj.seq)/10;AniObj.mmSeq++;if(AniObj.mmSeq===10){clearInterval(AniObj.mmTimer);AniObj.mmTimer=undefined;unload_helpm002();}}
var DragObj={vertMove:false,touchDirection:0,moveX:0,interval:15,pseq:0,cseq:1,nseq:2,befScale:1.0,befDistance:0,currScale:1.0,beftransX:0,beftransY:0,transX:0,transY:0,pdragImg:undefined,cdragImg:undefined,ndragImg:undefined,dragBtn:'',leftApproved:true,rightApproved:true,pleftBack:undefined,pleftImgGrp:undefined,pleftImg:undefined,prightBack:undefined,prightImgGrp:undefined,prightImg:undefined,nleftBack:undefined,nleftImgGrp:undefined,nleftImg:undefined,nrightBack:undefined,nrightImgGrp:undefined,nrightImg:undefined};DragObj.do_touchStart=function(e){clickX=e.touches[0].clientX;clickY=e.touches[0].clientY;DragObj.beftransX=DragObj.transX;DragObj.beftransY=DragObj.transY;if(e.touches.length>1){if(ScreenInfo.pchZoom===true){SmcObj.downKind=10;smcDiv.style.pointerEvents="none";}}
else if(DragObj.currScale!==1){SmcObj.downKind=5;}
else{SmcObj.downKind=1;}
Action.touchStartTime=MoveInfo.get_currTime();}
DragObj.do_touchMove=function(e){if(Action.aniLocking===true)return true;if(MoveInfo.get_currTime()-Action.touchStartTime<Action.multiTouchTime)return true;if(e.touches.length>1&&ScreenInfo.pchZoom===true)return true;befX=e.touches[0].clientX;befY=e.touches[0].clientY;var xd=befX-clickX;var yd=befY-clickY;if(SmcObj.downKind===1){if(Math.abs(befX-clickX)>8){e.preventDefault();if(ScreenInfo.pchZoom===true&&ScreenInfo.innerOriWidth>window.innerWidth)return true;SmcObj.downKind=3;}
else if(Math.abs(befY-clickY)>3){SmcObj.downKind=6;return true;}}
else if(SmcObj.downKind===3){e.preventDefault();if(Action.mouseDragged===false){Action.mouseDragged=true;DragObj.do_dragStart('drag');}
DragObj.cdragImg.style.left=(xd+smRect.x)+"px";DragObj.pdragImg.style.left=(xd+smRect.x-winRect.width)+"px";DragObj.ndragImg.style.left=(xd+smRect.x+winRect.width)+"px";DragObj.cdragImg.style.top=smRect.y+"px";DragObj.pdragImg.style.top=(document.body.scrollTop>smRect.y)?document.body.scrollTop+"px":smRect.y+"px";DragObj.ndragImg.style.top=(document.body.scrollTop>smRect.y)?document.body.scrollTop+"px":smRect.y+"px";linkoutDiv.style.left=(xd+smRect.x)+"px";}
else if(SmcObj.downKind===4){var tx=e.touches[1].clientX;var ty=e.touches[1].clientY;var dist=Math.sqrt((befX-tx)*(befX-tx)+(befY-ty)*(befY-ty));DragObj.currScale=DragObj.befScale*dist/DragObj.befDistance;if(DragObj.currScale<1)DragObj.currScale=1;var pw=smRect.width*DragObj.befScale;var ph=smRect.height*DragObj.befScale;var tw=smRect.width*DragObj.currScale;var th=smRect.height*DragObj.currScale;if(DragObj.currScale>1){DragObj.transX=DragObj.beftransX+(pw-tw)/2;if(DragObj.transX>0)DragObj.transX=0;else if(DragObj.transX<smRect.width-tw)DragObj.transX=smRect.width-tw;DragObj.transY=DragObj.beftransY+(ph-th)/2;if(DragObj.transY>0)DragObj.transY=0;else if(DragObj.transY<smRect.height-th)DragObj.transY=smRect.height-th;SmcObj.imgGrpobj.setAttribute("transform","translate("+DragObj.transX+","+DragObj.transY+") scale("+DragObj.currScale+")");}}
else if(SmcObj.downKind===5){var tw=smRect.width*DragObj.currScale;var th=smRect.height*DragObj.currScale;if(DragObj.currScale>1){DragObj.transX=DragObj.beftransX+xd;if(DragObj.transX>0)DragObj.transX=0;else if(DragObj.transX<smRect.width-tw)DragObj.transX=smRect.width-tw;else e.preventDefault();DragObj.transY=DragObj.beftransY+yd;if(DragObj.transY>0)DragObj.transY=0;else if(DragObj.transY<smRect.height-th)DragObj.transY=smRect.height-th;else e.preventDefault();SmcObj.imgGrpobj.setAttribute("transform","translate("+DragObj.transX+","+DragObj.transY+") scale("+DragObj.currScale+")");}
if(SkinInfo.smc!=="005"&&(DragObj.transX===0||DragObj.transX===(smRect.width-tw))&&Math.abs(befX-clickX)>8)SmcObj.downKind=3;if(DragObj.transY===0||DragObj.transY===(smRect.height-th))SmcObj.downKind=6;}}
DragObj.do_touchEnd=function(){if(SmcObj.downKind===3){var diffTime=MoveInfo.get_currTime()-Action.touchStartTime;var flicked=TouchInfo.get_flicked(diffTime);var xd=befX-clickX;Action.aniLocking=true;if(xd<0){if(PageInfo.is_lastPage()===true||(flicked===false&&xd>-winRect.width/3)||DragObj.rightApproved===false){DragObj.touchDirection=3;DragObj.moveX=-xd;}
else{DragObj.touchDirection=4;DragObj.moveX=-(winRect.width+xd);SmcObj.prepare_turnover2();}
AniObj.seq=0;AniObj.timer=setInterval(DragObj.do_nextAnimate,DragObj.interval);}
else if(xd>0){if(PageInfo.is_firstPage()===true||(flicked===false&&xd<winRect.width/3)||DragObj.leftApproved===false){DragObj.touchDirection=5;DragObj.moveX=-xd;}
else{DragObj.touchDirection=6;DragObj.moveX=winRect.width-xd;SmcObj.prepare_turnover2();}
AniObj.seq=0;AniObj.timer=setInterval(DragObj.do_prevAnimate,DragObj.interval);}}
smcDiv.style.pointerEvents="auto";DragObj.mouseDowned=false;Action.mouseDowned=false;SmcObj.downKind=0;}
DragObj.do_nextAnimate=function(){var xpos=DragObj.moveX*AniObj.dragPercent[AniObj.seq];DragObj.cdragImg.style.left=(smRect.x+befX-clickX+xpos)+'px';DragObj.ndragImg.style.left=(smRect.x+befX-clickX+xpos+winRect.width)+'px';linkoutDiv.style.left=(smRect.x+befX-clickX+xpos)+"px";AniObj.seq++;if(AniObj.seq>=AniObj.dragPercent.length){clearInterval(AniObj.timer);AniObj.timer=undefined;if(DragObj.touchDirection===3){DragObj.res_fromDrag();}
else{DragObj.transX=0;DragObj.transY=0;DragObj.currScale=1;SmcObj.imgGrpobj.setAttribute("transform","translate(0,0) scale(1)");if(DragObj.dragBtn==="drag"){PageInfo.reset_pageNext();}
else{PageInfo.prevPage=PageInfo.currentPage;PageInfo.currentPage=SmcObj.tempN;}
SmcObj.storedPage=PageInfo.currentPage;SmcObj.load_imagesAtDrag();DragObj.finish_turnover('next');}
DragObj.touchDirection=0;SmcObj.downKind=0;Action.aniLocking=false;}}
DragObj.do_prevAnimate=function(){var xpos=DragObj.moveX*AniObj.dragPercent[AniObj.seq];DragObj.cdragImg.style.left=(smRect.x+befX-clickX+xpos)+'px';DragObj.pdragImg.style.left=(smRect.x+befX-clickX+xpos-winRect.width)+'px';linkoutDiv.style.left=(befX-clickX+xpos)+"px";AniObj.seq++;if(AniObj.seq>=AniObj.dragPercent.length){clearInterval(AniObj.timer);AniObj.timer=undefined;if(DragObj.touchDirection===5){DragObj.res_fromDrag();}
else{DragObj.transX=0;DragObj.transY=0;DragObj.currScale=1;SmcObj.imgGrpobj.setAttribute("transform","translate(0,0) scale(1)");if(DragObj.dragBtn==="drag"){PageInfo.reset_pagePrev();}
else{PageInfo.prevPage=PageInfo.currentPage;PageInfo.currentPage=SmcObj.tempN;}
SmcObj.storedPage=PageInfo.currentPage;SmcObj.load_imagesAtDrag();DragObj.finish_turnover('prev');}
DragObj.touchDirection=0;SmcObj.downKind=0;Action.aniLocking=false;}}
DragObj.do_dragStart=function(skd){DragObj.dragBtn=skd;DragObj.pdragImg=document.getElementById("smcsect"+DragObj.pseq);DragObj.cdragImg=document.getElementById("smcsect"+DragObj.cseq);DragObj.ndragImg=document.getElementById("smcsect"+DragObj.nseq);DragObj.pleftImgGrp=document.getElementById("smcImgL"+DragObj.pseq);DragObj.prightImgGrp=document.getElementById("smcImgR"+DragObj.pseq);DragObj.pleftBack=SmcObj.load_backRect();DragObj.pleftImgGrp.appendChild(DragObj.pleftBack);var bbb=["","",""];var npage=0;if(skd==="drag"){npage=(ScreenInfo.onesmc===true)?PageInfo.currentPage-1:PageInfo.currentPage-2;bbb=SmcObj.get_imageUrl(npage);}
else if(skd==="prev"){npage=SmcObj.tempN;bbb=SmcObj.get_imageUrl(SmcObj.tempN);}
if(PermitMan.check_memberZone("drag")===true)DragObj.leftApproved=PermitMan.access_memberZone(npage,"drag");if(bbb[0]!==""){DragObj.pleftImg=SmcObj.load_cataImage(bbb[0],npage,1,ServerInfo.applyCipher);DragObj.pleftImgGrp.appendChild(DragObj.pleftImg);SmcObj.dispatch_leftImage(DragObj.pleftImg);}
if(ScreenInfo.onesmc===false){DragObj.prightBack=SmcObj.load_backRect();DragObj.prightImgGrp.appendChild(DragObj.prightBack);DragObj.prightImgGrp.setAttribute('transform','translate('+ScreenInfo.smImageWidth+',0)');bbb=["","",""];npage=0;if(skd==="drag"){npage=PageInfo.currentPage-1;bbb=SmcObj.get_imageUrl(PageInfo.currentPage-1);}
else if(skd==="prev"){npage=SmcObj.tempN+1;bbb=SmcObj.get_imageUrl(SmcObj.tempN+1);}
if(PermitMan.check_memberZone("drag")===true&&DragObj.leftApproved===true)DragObj.leftApproved=PermitMan.access_memberZone(npage,"drag");if(bbb[0]!==""){DragObj.prightImg=SmcObj.load_cataImage(bbb[0],npage,2,ServerInfo.applyCipher);DragObj.prightImgGrp.appendChild(DragObj.prightImg);SmcObj.dispatch_rightImage(DragObj.prightImg);}
else DragObj.prightImg=undefined;}
else{DragObj.prightImg=undefined;DragObj.prightBack=undefined;}
DragObj.nleftImgGrp=document.getElementById("smcImgL"+DragObj.nseq);DragObj.nrightImgGrp=document.getElementById("smcImgR"+DragObj.nseq);DragObj.nleftBack=SmcObj.load_backRect();DragObj.nleftImgGrp.appendChild(DragObj.nleftBack);var ccc=["","",""];npage=0;if(skd==="drag"){npage=(ScreenInfo.onesmc===true)?PageInfo.currentPage+1:PageInfo.currentPage+2;ccc=SmcObj.get_imageUrl(npage);}
else if(skd==="next"){npage=SmcObj.tempN;ccc=SmcObj.get_imageUrl(SmcObj.tempN);}
if(PermitMan.check_memberZone("drag")===true)DragObj.rightApproved=PermitMan.access_memberZone(npage,"drag");if(ccc[0]!==""){DragObj.nleftImg=SmcObj.load_cataImage(ccc[0],npage,3,ServerInfo.applyCipher);DragObj.nleftImgGrp.appendChild(DragObj.nleftImg);SmcObj.dispatch_leftImage(DragObj.nleftImg);}
if(ScreenInfo.onesmc===false){ccc=["","",""];npage=0;DragObj.nrightBack=SmcObj.load_backRect();DragObj.nrightImgGrp.appendChild(DragObj.nrightBack);DragObj.nrightImgGrp.setAttribute('transform','translate('+ScreenInfo.smImageWidth+',0)');if(skd==="drag"){npage=PageInfo.currentPage+3;ccc=SmcObj.get_imageUrl(npage);}
else if(skd==="next"){npage=SmcObj.tempN+1;ccc=SmcObj.get_imageUrl(npage);}
if(PermitMan.check_memberZone("drag")===true&&DragObj.rightApproved===true)DragObj.rightApproved=PermitMan.access_memberZone(npage,"drag");if(ccc[0]!==""){DragObj.nrightImg=SmcObj.load_cataImage(ccc[0],npage,4,ServerInfo.applyCipher);DragObj.nrightImgGrp.appendChild(DragObj.nrightImg);SmcObj.dispatch_rightImage(DragObj.nrightImg);}
else DragObj.nrightImg=undefined;}
else{DragObj.nrightImg=undefined;DragObj.nrightBack=undefined;}
DragObj.pdragImg.style.display="block";DragObj.pdragImg.style.left=smRect.x+"px";DragObj.pdragImg.style.top=(document.body.scrollTop>smRect.y)?document.body.scrollTop+"px":smRect.y+"px";DragObj.pdragImg.style.width=smRect.width+"px";DragObj.ndragImg.style.display="block";DragObj.ndragImg.style.left=smRect.x+"px";DragObj.ndragImg.style.top=(document.body.scrollTop>smRect.y)?document.body.scrollTop+"px":smRect.y+"px";DragObj.ndragImg.style.width=smRect.width+"px";if(ScreenInfo.smImageDiff===false){DragObj.pdragImg.style.height=smRect.height+"px";DragObj.ndragImg.style.height=smRect.height+"px";}
if(glassesSvg!=undefined)unload_glasses();if(soundctrlSvg!=undefined)unload_soundcontrol();if(OnsmObj)OnsmObj.set_visible("hidden","hidden");if(skd!=="drag")SmcObj.prepare_turnover2();}
DragObj.do_afterOnload=function(npage,nkd,calcH){if(nkd===1){document.getElementById('smcsvg'+DragObj.pseq).style.height=calcH+"px";DragObj.pdragImg.style.height=calcH+"px";}
else if(nkd===3){document.getElementById('smcsvg'+DragObj.nseq).style.height=calcH+"px";DragObj.ndragImg.style.height=calcH+"px";}
else if(nkd===5){SmcObj.imgobj.style.height=calcH+"px";smcDiv.style.height=calcH+"px";}}
DragObj.res_fromDrag=function(){if(OnsmObj)OnsmObj.set_visible("visible","visible");var nodes=DragObj.pleftImgGrp.childNodes;for(var i=nodes.length-1;i>=0;i--){DragObj.pleftImgGrp.removeChild(nodes[i]);}
nodes=DragObj.prightImgGrp.childNodes;for(i=nodes.length-1;i>=0;i--){DragObj.prightImgGrp.removeChild(nodes[i]);}
DragObj.pdragImg.style.display="none";nodes=DragObj.nleftImgGrp.childNodes;for(i=nodes.length-1;i>=0;i--){DragObj.nleftImgGrp.removeChild(nodes[i]);}
nodes=DragObj.nrightImgGrp.childNodes;for(i=nodes.length-1;i>=0;i--){DragObj.nrightImgGrp.removeChild(nodes[i]);}
DragObj.ndragImg.style.display="none";}
DragObj.finish_turnover=function(skd){if(MoveInfo.spDrag===true){smcDiv.removeEventListener("touchstart",DragObj.do_touchStart,false);smcDiv.removeEventListener("touchmove",DragObj.do_touchMove,false);smcDiv.removeEventListener("touchend",DragObj.do_touchEnd,false);}
var nodes=SmcObj.leftImgGrp.childNodes;var i=0;for(i=nodes.length-1;i>=0;i--){SmcObj.leftImgGrp.removeChild(nodes[i]);}
nodes=SmcObj.rightImgGrp.childNodes;for(i=nodes.length-1;i>=0;i--){SmcObj.rightImgGrp.removeChild(nodes[i]);}
CoverObj.set_mcoverBef();if(skd==="next"){nodes=DragObj.pleftImgGrp.childNodes;for(i=nodes.length-1;i>=0;i--){DragObj.pleftImgGrp.removeChild(nodes[i]);}
nodes=DragObj.prightImgGrp.childNodes;for(i=nodes.length-1;i>=0;i--){DragObj.prightImgGrp.removeChild(nodes[i]);}
SmcObj.leftImg=DragObj.nleftImg;SmcObj.rightImg=DragObj.nrightImg;DragObj.pdragImg.style.display="none";DragObj.pseq=(DragObj.pseq===2)?0:DragObj.pseq+1;DragObj.cseq=(DragObj.cseq===2)?0:DragObj.cseq+1;DragObj.nseq=(DragObj.nseq===2)?0:DragObj.nseq+1;}
else if(skd==="prev"){nodes=DragObj.nleftImgGrp.childNodes;for(i=nodes.length-1;i>=0;i--){DragObj.nleftImgGrp.removeChild(nodes[i]);}
nodes=DragObj.nrightImgGrp.childNodes;for(i=nodes.length-1;i>=0;i--){DragObj.nrightImgGrp.removeChild(nodes[i]);}
SmcObj.leftImg=DragObj.pleftImg;SmcObj.rightImg=DragObj.prightImg;DragObj.ndragImg.style.display="none";DragObj.pseq=(DragObj.pseq===0)?2:DragObj.pseq-1;DragObj.cseq=(DragObj.cseq===0)?2:DragObj.cseq-1;DragObj.nseq=(DragObj.nseq===0)?2:DragObj.nseq-1;}
DragObj.cdragImg.style.display="none";smcDiv=document.getElementById('smcsect'+DragObj.cseq);SmcObj.imgobj=document.getElementById('smcsvg'+DragObj.cseq);SmcObj.imgGrpobj=document.getElementById('smcntg'+DragObj.cseq);SmcObj.leftImgGrp=document.getElementById('smcImgL'+DragObj.cseq);SmcObj.rightImgGrp=document.getElementById('smcImgR'+DragObj.cseq);SmcObj.leftLink=document.getElementById('smcLinkL'+DragObj.cseq);SmcObj.rightLink=document.getElementById('smcLinkR'+DragObj.cseq);SmcObj.leftSearch=document.getElementById('smcSearchL'+DragObj.cseq);SmcObj.rightSearch=document.getElementById('smcSearchR'+DragObj.cseq);SmcObj.rightLink.setAttribute('transform','translate('+ScreenInfo.smImageWidth+',0)');SmcObj.rightSearch.setAttribute('transform','translate('+ScreenInfo.smImageWidth+',0)');linkoutDiv.style.left=smRect.x+"px";if(ScreenInfo.smImageDiff===true){smcntDiv.style.height=smcDiv.style.height;}
if(document.body.scrollTop>smRect.y){smcDiv.style.top=smRect.y+"px";document.body.scrollTop=smRect.y;}
if(MoveInfo.spDrag===true){smcDiv.addEventListener("touchstart",DragObj.do_touchStart,false);smcDiv.addEventListener("touchmove",DragObj.do_touchMove,false);smcDiv.addEventListener("touchend",DragObj.do_touchEnd,false);}
CoverObj.set_mcoverAfter();if(MoveInfo.pairEnlarge===true)Action.set_togetherEnlarge();MoveInfo.show_pageNumber();ScreenMan.finish_turnover();if(OnsmObj)OnsmObj.set_visible("visible","visible");SmcObj.show_outData();Action.aniLocking=false;}
function set_cursorObj(){cursorDiv=document.getElementById("cursorsect");CursorObj={seq:0,timer:undefined,svgobj:document.getElementById("cursorsvg"),txtobj:document.getElementById("cursor_text"),lccobj:document.getElementById("cursor_leftcc"),rccobj:document.getElementById("cursor_rightcc"),backobj:document.getElementById("cursor_backrect")};CursorObj.set_stext=function(s){if(LinkInfo.displayStr!==""){CursorObj.txtobj.style.top="5px";s+="<br><span style='color:"+LinkInfo.displayColor+"'>"+LinkInfo.displayStr+"</span>";}
else{CursorObj.txtobj.style.top="13px";}
CursorObj.txtobj.innerHTML=s;var w=CursorObj.txtobj.clientWidth+45;if(w<151)w=151;CursorObj.svgobj.style.width=(w+1)+"px";CursorObj.backobj.setAttribute("width",w);}
CursorObj.do_animate=function(){CursorObj.seq=1;CursorObj.timer=setInterval(CursorObj.start_animate,400);}
CursorObj.start_animate=function(){if(CursorObj.seq%4==1){CursorObj.lccobj.setAttribute("visibility","visible");CursorObj.rccobj.setAttribute("visibility","hidden");}
else if(CursorObj.seq%4==2){CursorObj.lccobj.setAttribute("visibility","hidden");CursorObj.rccobj.setAttribute("visibility","visible");}
else{CursorObj.lccobj.setAttribute("visibility","hidden");CursorObj.rccobj.setAttribute("visibility","hidden");}
CursorObj.seq++;}
CursorObj.stop_animate=function(){cursorDiv.style.visibility="hidden";CursorObj.lccobj.setAttribute("visibility","hidden");CursorObj.rccobj.setAttribute("visibility","hidden");clearInterval(CursorObj.timer);CursorObj.timer=undefined;}}
function do_menuAnimate(s){AniObj.mmSeq=1;if(s==="hide"){AniObj.mmY=0;AniObj.mmMove=-ScreenInfo.topSwapDist;AniObj.mmTimer=setInterval(menu_animate,15);}
else{AniObj.mmY=-ScreenInfo.topSwapDist;AniObj.mmMove=ScreenInfo.topSwapDist;AniObj.mmTimer=setInterval(menu_animate,15);}}
function menu_animate(){var ty=Math.floor(AniObj.mmMove*AniObj.gradualPercent[AniObj.mmSeq]);menuSide.style.top=(AniObj.mmY+ty)+"px";if(logoDiv)logoDiv.style.top=(AniObj.mmY+ty+ScreenInfo.logoTopMargin)+"px";if(MenuInfo.indexType==="H"&&indexDiv)indexDiv.style.top=(AniObj.mmY+ty+AniObj.horidxY)+"px";AniObj.mmSeq++;if(AniObj.mmSeq===AniObj.gradualPercent.length){clearInterval(AniObj.mmTimer);AniObj.mmTimer=undefined;}}
function do_lowerAnimate(s){AniObj.lwSeq=1;if(s==="hide"){AniObj.lwY=0;AniObj.lwMove=-ScreenInfo.bottomSwapDist;AniObj.lwTimer=setInterval(lower_animate,15);}
else{AniObj.lwY=-ScreenInfo.bottomSwapDist;AniObj.lwMove=ScreenInfo.bottomSwapDist;AniObj.lwTimer=setInterval(lower_animate,15);}}
function lower_animate(){var ty=Math.floor(AniObj.lwMove*AniObj.gradualPercent[AniObj.lwSeq]);lowerSide.style.bottom=(AniObj.lwY+ty)+"px";AniObj.lwSeq++;if(AniObj.lwSeq===AniObj.gradualPercent.length){clearInterval(AniObj.lwTimer);AniObj.lwTimer=undefined;}}
function do_newinAnimate(s,start,dis,aniDiv,func){AniObj.mmSeq=1;AniObj.mmY=start;AniObj.mmMove=dis;AniObj.mmDiv=aniDiv;AniObj.endFunc=func;AniObj.mmTimer=setInterval(newin_animate,15);}
function newin_animate(){var ty=Math.floor(AniObj.mmMove*AniObj.gradualPercent[AniObj.mmSeq]);AniObj.mmDiv.style.top=(AniObj.mmY+ty)+"px";AniObj.mmSeq++;if(AniObj.mmSeq===AniObj.gradualPercent.length){clearInterval(AniObj.mmTimer);AniObj.mmTimer=undefined;if(AniObj.endFunc!=undefined)AniObj.endFunc.call();}}