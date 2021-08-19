BBwObj={cls:'',bbwskin:'001',menukd:'full',colskd:'',currMenu:'',currPage:0,touchStartTime:0,currTouchSeq:0,menuDiv:undefined,addDiv:undefined,currDiv:undefined,httpScript:'',penColor:'#000000',penThick:1,defColor:'',hlgColor:'#9cff00',hlgThick:10,hlgAlpha:0.7,memobgColor:'#FFE99C',memofntColor:'#000000',memofntFamily:'돋움',memofntSize:'12',memoIdx:0,armemoObj:[],tempPt:[],bbwsData:[],memoData:[],currArea:undefined,downKind:0,tmpWidth:0,tmpHeight:0,areaWidth:0,areaHeight:0};BBwObj.onload_func2=function(){if(BBwObj.menukd==="full"||BBwObj.menukd==="memo"){if(document.getElementById('bbwpencolshow'))BBwObj.penColor=document.getElementById('bbwpencolshow').getAttribute("fill");if(document.getElementById('memobgcolshow'))BBwObj.memobgColor=document.getElementById('memobgcolshow').getAttribute("fill");if(document.getElementById('memofntcolshow'))BBwObj.memofntColor=document.getElementById('memofntcolshow').getAttribute("fill");if(document.getElementById('bbwline1thbtn'))document.getElementById('bbwline1thbtn').setAttribute("class","bbw_btnE001-down");BBwObj.menuDiv=document.getElementById('bbwmenu');}
BBwInfo.applyBBw=true;BBwObj.cls="5"+CataInfo.incview+"D"+BBwObj.bbwskin;BBwObj.do_afterMainFinish();}
BBwObj.do_afterMainFinish=function(){BBwObj.currPage=PageInfo.get_imagePage(PageInfo.currentPage);BBwObj.bbwsData=["",""];BBwObj.memoData=["",""];BBwObj.retrieve_data("all","open");}
BBwObj.after_retdata=function(scaller){var sevt="none";if(scaller==="turn"&&BBwObj.menuDiv&&BBwObj.menuDiv.style.visibility=="visible"&&BBwObj.currMenu!=="")sevt="auto";var memo=BBwObj.memoData[0]+BBwObj.memoData[1];if(memo!=="")BBwObj.show_memoData();var bbws=BBwObj.bbwsData[0]+BBwObj.bbwsData[1];if(bbws!==""||sevt==="auto")load_blackboard(true,sevt);}
BBwObj.prepare_turnover=function(){if(BBwObj.currMenu=="memoplus"){document.getElementById(BBwObj.currMenu+"btn").className=BBwObj.currMenu+"btn"+BBwObj.cls+" bbw_btnE001";BBwObj.currMenu="";}
if(bboardSvg){bboardSvg.prepare_turnover();unload_blackboard();}
else{if(Action.mainState==="blackboard")Action.restoreState();}
BBwObj.store_memoData();var nodes=memoDiv.childNodes;if(nodes.length>0){for(var i=nodes.length-1;i>=0;i--){memoDiv.removeChild(nodes[i]);}}
BBwObj.addDiv=undefined;BBwObj.currDiv=undefined;memoDiv.innerHTML="";BBwObj.armemoObj=[];BBwObj.memoData="";}
BBwObj.finish_turnover=function(){BBwObj.currPage=(BBwInfo.storeWhere==="db")?PageInfo.currentPage:PageInfo.get_imagePage(PageInfo.currentPage);BBwObj.bbwsData=["",""];BBwObj.memoData=["",""];BBwObj.retrieve_data("all","turn");}
BBwObj.onresize_func=function(){if(BBwObj.menuDiv.style.visibility=="visible")BBwObj.loc_bbwmenu();var obj,sid,divid,rx,ry;for(var i=0;i<BBwObj.armemoObj.length;i++){obj=BBwObj.armemoObj[i];sid="memo"+i;divid=sid+"s";if(BBwInfo.loc==="win"){rx=Math.floor(stageWidth/obj.cwidth*obj.x);ry=Math.floor(stageHeight/obj.cheight*obj.y);}
else{rx=(ScreenInfo.onesmc===false&&obj.npage===BBwObj.currPage+1)?smRect.centerPt.x+Math.floor(ScreenInfo.smImageWidth/obj.cwidth*obj.x):smRect.x+Math.floor(ScreenInfo.smImageWidth/obj.cwidth*obj.x);ry=smRect.y+Math.floor(ScreenInfo.smImageHeight/obj.cheight*obj.y);}
document.getElementById(divid).style.left=(obj.x*rx)+"px";document.getElementById(divid).style.top=(obj.y*ry)+"px";}}
BBwObj.bbwmmClick=function(smenu){if(BBwObj.menuDiv.style.visibility!="visible"){if(BBwObj.get_permit('open')===false)return;BBwObj.menuDiv.style.visibility="visible";BBwObj.loc_bbwmenu();if(!bboardSvg)load_blackboard(true,'none');BBwObj.bbwmenuClick(smenu);}
else{BBwObj.bbwclosebtnClick();}}
BBwObj.bbwritebtnClick=function(){if(BBwObj.get_permit('drawmenu')===false)return;if(Action.drawCondition>0)return;if(BBwObj.menuDiv.style.visibility=="visible"){BBwObj.bbwclosebtnClick();}
else{BBwObj.menuDiv.style.visibility="visible";BBwObj.loc_bbwmenu();if(BBwObj.menukd==="memo"){BBwObj.bbwmenuClick("memoplus");}
else{if(!bboardSvg)load_blackboard(true,'none');}}}
BBwObj.bbwclosebtnClick=function(){if(BBwObj.menuDiv.style.visibility=="visible"){BBwObj.menuDiv.style.visibility="hidden";bbwDiv.style.pointerEvents="none";}
if(BBwObj.currMenu==="memoplus"&&BBwObj.addDiv){memoDiv.removeChild(BBwObj.addDiv);BBwObj.currDiv=undefined;}
BBwObj.currMenu="";if(Action.mainState==="blackboard")Action.restoreState();}
BBwObj.bbwmenuClick=function(s){if(BBwObj.get_permit('drawmenu')===false)return;if(BBwObj.menukd==="full"&&BBwObj.addDiv){memoDiv.removeChild(BBwObj.addDiv);BBwObj.addDiv=undefined;BBwObj.currDiv=undefined;}
var sbtn=s+"btn";if(BBwObj.currMenu===s){if(s==="memoplus"&&BBwObj.addDiv){memoDiv.removeChild(BBwObj.addDiv);BBwObj.addDiv=undefined;}
if(s==="bbwhlg"&&BBwObj.menukd==="hlmm"){document.getElementById('erabtn').style.display="none";}
document.getElementById(sbtn).className=sbtn+BBwObj.cls+" bbw_btnE001";if(Action.mainState==="blackboard")Action.restoreState();bbwDiv.style.pointerEvents="none";BBwObj.currMenu="";return;}
var armenu;if(BBwObj.menukd==="full")armenu=["bbwpenbtn","bbwhlgbtn","bbwlinebtn","bbwrectbtn","bbwccbtn","bbwerabtn","memoplusbtn"];else if(BBwObj.menukd==="hlmm")armenu=["bbwhlgbtn","memoplusbtn"];else if(BBwObj.menukd==="memo")armenu=["memoplusbtn"];var smenu;for(var i=0;i<armenu.length;i++){smenu=armenu[i];document.getElementById(smenu).className=(smenu===sbtn)?smenu+BBwObj.cls+" bbw_btnE001-down":smenu+BBwObj.cls+" bbw_btnE001";}
if(BBwObj.menukd==="full"){if(s==="bbwpen"){document.getElementById('bbwpencolshow').setAttribute("fill",BBwObj.penColor);BBwObj.set_bbwlinethbtn(BBwObj.penThick);}
else if(s==="bbwhlg"){document.getElementById('bbwpencolshow').setAttribute("fill",BBwObj.hlgColor);BBwObj.set_bbwlinethbtn(BBwObj.hlgThick);}}
else if(BBwObj.menukd==="hlmm"){if(s==="bbwhlg")document.getElementById('erabtn').style.display="block";else document.getElementById('erabtn').style.display="none";}
BBwObj.currMenu=s;if(Action.mainState!=="blackboard"){Action.set_mainState("blackboard");}
if(s==="memoplus")BBwObj.memoplusbtnClick();else{if(!bboardSvg)load_blackboard(true,'auto');else bbwDiv.style.pointerEvents="auto";}}
BBwObj.bbwpencolbtnClick=function(){if(BBwObj.get_permit('drawmenu')===false)return;document.getElementById('bbwpencolbtn').className="bbwpencolbtn"+BBwObj.cls+" bbw_btnE001-down";if(BBwObj.currMenu==="bbwhlg"){BBwObj.defColor=BBwObj.hlgColor;BBwObj.colskd="hlg";}
else{BBwObj.defColor=BBwObj.penColor;BBwObj.colskd="pen";}
load_colorPicker();}
BBwObj.memobgcolbtnClick=function(){if(BBwObj.get_permit('drawmenu')===false)return;document.getElementById('memobgcolbtn').className="memobgcolbtn"+BBwObj.cls+" bbw_btnE001-down";BBwObj.defColor=BBwObj.memobgColor;BBwObj.colskd="memobg";load_colorPicker();}
BBwObj.memofntcolbtnClick=function(){if(BBwObj.get_permit('drawmenu')===false)return;document.getElementById('memofntcolbtn').className="memofntcolbtn"+BBwObj.cls+" bbw_btnE001-down";BBwObj.defColor=BBwObj.memofntColor;BBwObj.colskd="memofnt";load_colorPicker();}
BBwObj.finish_selColor=function(scolor){if(BBwObj.colskd=="pen"){BBwObj.penColor="#"+scolor;document.getElementById('bbwpencolshow').setAttribute("fill",BBwObj.penColor);}
else if(BBwObj.colskd=="hlg"){BBwObj.hlgColor="#"+scolor;document.getElementById('bbwpencolshow').setAttribute("fill",BBwObj.hlgColor);}
else if(BBwObj.colskd==="memobg"){BBwObj.memobgColor="#"+scolor;document.getElementById('memobgcolshow').setAttribute("fill",BBwObj.memobgColor);}
else if(BBwObj.colskd==="memofnt"){BBwObj.memofntColor="#"+scolor;document.getElementById('memofntcolshow').setAttribute("fill",BBwObj.memofntColor);}
BBwObj.undo_selColor();}
BBwObj.undo_selColor=function(){if(BBwObj.colskd=="pen"||BBwObj.colskd=="hlg"){document.getElementById('bbwpencolbtn').className="bbwpencolbtn"+BBwObj.cls+" bbw_btnE001";}
else if(BBwObj.colskd==="memobg"){document.getElementById('memobgcolbtn').className="memobgcolbtn"+BBwObj.cls+" bbw_btnE001";}
else if(BBwObj.colskd==="memofnt"){document.getElementById('memofntcolbtn').className="memofntcolbtn"+BBwObj.cls+" bbw_btnE001";}
BBwObj.colskd="";}
BBwObj.bbwlinethbtnClick=function(thick){if(BBwObj.currMenu==="bbwhlg")BBwObj.hlgThick=thick;else BBwObj.penThick=thick;BBwObj.set_bbwlinethbtn(thick);}
BBwObj.set_bbwlinethbtn=function(thick){var arthick=[1,4,10,20];for(var i=0;i<4;i++){var th=arthick[i];if(thick===th)document.getElementById('bbwline'+th+'thbtn').setAttribute("class","bbw_btnE001-down");else document.getElementById('bbwline'+th+'thbtn').setAttribute("class","bbw_btnE001");}}
BBwObj.bbwlinethselShow=function(){var areaRect=document.getElementById('bbwlinethbtn').getBoundingClientRect();document.getElementById('bbwlinethsect').style.visibility="visible";document.getElementById('bbwlinethsect').style.top=(areaRect.top-document.getElementById('bbwlinethsect').clientHeight-2)+"px";document.getElementById('bbwlinethsect').style.left=(areaRect.left-1)+"px";}
BBwObj.bbwlinethbtnClick5m=function(thick){BBwObj.penThick=thick;var r=3;if(thick===4)r=5;else if(thick===10)r=7;else if(thick===20)r=9;document.getElementById('bbwlinethcc').setAttribute("r",r);document.getElementById('bbwlinethsect').style.visibility="hidden";}
BBwObj.bbwerallbtnClick=function(){if(bboardSvg)bboardSvg.erase_all();}
BBwObj.bbwundobtnClick=function(){if(bboardSvg)bboardSvg.undo_command();}
BBwObj.bbwredobtnClick=function(){if(bboardSvg)bboardSvg.redo_command();}
BBwObj.memomenuclosebtnClick=function(s){BBwObj.currMenu="";document.getElementById("memoplusbtn").className="memoplusbtn"+BBwObj.cls+" bbw_btnE001";}
BBwObj.show_memoData=function(){var obj,tstr,pos,arstr;var memo=BBwObj.memoData[0]+BBwObj.memoData[1];var lines=memo.split("\n");var alen=lines.length-1;for(var i=0;i<alen;i++){tstr=lines[i];if(tstr==="")continue;pos=tstr.indexOf("\t");if(pos===-1)continue;arstr=tstr.split("\t");if(arstr.length<8)continue;if(parseInt(arstr[0])==NaN||parseInt(arstr[1])==NaN||parseInt(arstr[2])==NaN||parseInt(arstr[7])==NaN||parseInt(arstr[8])==NaN)continue;obj=new memoObj(parseInt(arstr[0]),parseInt(arstr[1]),parseInt(arstr[2]),arstr[3],arstr[4],arstr[5],arstr[6],parseInt(arstr[7]),parseInt(arstr[8]),arstr[9].replace(/\\\\n/g,"\n"));BBwObj.armemoObj.push(obj);}
BBwObj.memoIdx=BBwObj.armemoObj.length;BBwObj.draw_memoData();}
BBwObj.draw_memoData=function(){var n,obj,sid,divid,rx,ry;var s="";for(var i=0;i<BBwObj.armemoObj.length;i++){obj=BBwObj.armemoObj[i];sid="memo"+i;divid=sid+"s";if(BBwInfo.loc==="win"){rx=Math.floor(stageWidth/obj.cwidth*obj.x);ry=Math.floor(stageHeight/obj.cheight*obj.y);}
else{rx=(ScreenInfo.onesmc===false&&obj.npage===BBwObj.currPage+1)?smRect.centerPt.x+Math.floor(ScreenInfo.smImageWidth/obj.cwidth*obj.x):smRect.x+Math.floor(ScreenInfo.smImageWidth/obj.cwidth*obj.x);ry=smRect.y+Math.floor(ScreenInfo.smImageHeight/obj.cheight*obj.y);}
if(CataInfo.incview==="m")s+="<div id='"+divid+"' ontouchstart=\"BBwObj.memominbtnTouch(event,"+i+",'"+sid+"')\" data-minmax='min' data-mem='1' data-idx='"+i+"' ";else s+="<div id='"+divid+"' ondblclick=\"BBwObj.memominbtnClick("+i+",'"+sid+"')\" data-minmax='min' data-mem='1' data-idx='"+i+"' ";s+="class='bbw_memomin"+BBwObj.cls+"' style=\"left:"+rx+"px;top:"+ry+"px;background:linear-gradient(to right, "+obj.bgcol+" 210px, #ffc600 30px);\">"
+"<p id='"+sid+"p' class='bbw_memominp"+BBwObj.cls+"' style=\"color:"+obj.fncolor+"\" ";if(CataInfo.incview==="m")s+="ontouchstart=\"BBwObj.memoTitleTouch(event,'"+divid+"');\">"+BBwObj.get_memoFirstLine(obj.cont)+"</p>";else s+="onmousedown=\"BBwObj.memoTitleDown(event,'"+divid+"');\">"+BBwObj.get_memoFirstLine(obj.cont)+"</p>";s+="<textarea id='"+sid+"t' onfocus=\"BBwObj.memotxtFocus("+i+",'"+sid+"');\" "
+"onblur=\"BBwObj.memotxtBlur("+i+",'"+sid+"');\" class='bbw_memotext"+BBwObj.cls+"' "
+"style=\"font-family:"+obj.fnname+";font-size:"+obj.fnsize+"px;color:"+obj.fncolor+";display:none;\">"+obj.cont+"</textarea></div>\n";}
memoDiv.insertAdjacentHTML('beforeend',s);}
BBwObj.store_memoData=function(){var obj,s="",s2="";if(BBwInfo.loc==="win"){for(var i=0;i<BBwObj.armemoObj.length;i++){if(BBwObj.armemoObj[i]==undefined)continue;obj=BBwObj.armemoObj[i];if(obj.cont==="")continue;s+=obj.toString()+"\n";}}
else{for(var i=0;i<BBwObj.armemoObj.length;i++){if(BBwObj.armemoObj[i]==undefined)continue;obj=BBwObj.armemoObj[i];if(obj.cont==="")continue;if(ScreenInfo.onesmc===false&&obj.npage===BBwObj.currPage+1)s2+=obj.toString()+"\n";else s+=obj.toString()+"\n";}}
if(s===""){if(BBwObj.memoData[0]!=="")BBwObj.remove_data("memo",BBwObj.currPage,undefined);}
else{if(s!==BBwObj.memoData[0])BBwObj.save_data("memo",BBwObj.currPage,s,undefined);}
if(BBwInfo.loc==="smcsync"&&ScreenInfo.onesmc===false){if(s2===""){if(BBwObj.memoData[1]!=="")BBwObj.remove_data("memo",BBwObj.currPage+1,undefined);}
else{if(s2!==BBwObj.memoData[1])BBwObj.save_data("memo",BBwObj.currPage+1,s2,undefined);}}}
BBwObj.memoplusbtnClick=function(){var sid="memo"+BBwObj.memoIdx;var tx=(window.innerWidth-238)/2;var ty=(window.innerHeight-238)/2;var s="";s+=(CataInfo.incview==="m")?"<div id='"+sid+"s' ontouchstart=\"BBwObj.memominbtnTouch(event,"+BBwObj.memoIdx+",'"+sid+"')\" ":"<div id='"+sid+"s' ondblclick=\"BBwObj.memominbtnClick("+BBwObj.memoIdx+",'"+sid+"')\" ";s+="data-minmax='max' data-mem='0' data-idx='"+BBwObj.memoIdx+"' class='bbw_memo"+BBwObj.cls+"' "
+"style=\"left:"+tx+"px;top:"+ty+"px;background-color:"+BBwObj.memobgColor+";\"><p id='"+sid+"p' class='bbw_memobtn"+BBwObj.cls+"' ";s+=(CataInfo.incview==="m")?"ontouchstart=\"BBwObj.memoTitleTouch(event,'"+sid+"s');\">":"onmousedown=\"BBwObj.memoTitleDown(event,'"+sid+"s');\">";s+="<a href=\"javascript:BBwObj.memominbtnClick("+BBwObj.memoIdx+",'"+sid+"');\"><img src='"+FileInfo.skin5FilePath("bbw/bbw_memomin.png")+"'></a>"
+"<a href=\"javascript:BBwObj.memoclosebtnClick("+BBwObj.memoIdx+",'"+sid+"s');\"><img src='"+FileInfo.skin5FilePath("bbw/bbw_memoclose.png")+"'></a></p>"
+"<textarea id='"+sid+"t' onfocus=\"BBwObj.memotxtFocus("+BBwObj.memoIdx+",'"+sid+"');\" "
+"onblur=\"BBwObj.memotxtBlur("+BBwObj.memoIdx+",'"+sid+"');\" class='bbw_memotext"+BBwObj.cls+"' ";if(CataInfo.incview==="m")s+="style=\"font-family:"+BBwObj.memofntFamily+";font-size:"+BBwObj.memofntSize+"px;";else{var fntsel=document.getElementById('memofntobj');var fnssel=document.getElementById('memofntsizeobj');s+="style=\"font-family:"+fntsel.options[fntsel.selectedIndex].value+";font-size:"+fnssel.options[fnssel.selectedIndex].value+"px;";}
s+="color:"+BBwObj.memofntColor+";\"></textarea></div>";memoDiv.insertAdjacentHTML('beforeend',s);BBwObj.addDiv=document.getElementById(sid+"s");BBwObj.memoIdx++;}
BBwObj.memoclosebtnClick=function(idx,ds){BBwObj.currDiv=document.getElementById(ds);if(BBwObj.currDiv.getAttribute("data-mem")=="1"){BBwObj.armemoObj.splice(idx,1);BBwObj.store_memoData();memoDiv.removeChild(BBwObj.currDiv);BBwObj.currDiv=undefined;}
else{memoDiv.removeChild(BBwObj.addDiv);BBwObj.addDiv=undefined;}
document.getElementById("memoplusbtn").className="memoplusbtn"+BBwObj.cls+" bbw_btnE001";BBwObj.currMenu="";if(Action.mainState==="blackboard")Action.restoreState();}
BBwObj.memominbtnClick=function(n,s){var sDiv=document.getElementById(s+"s");var minmax=sDiv.getAttribute("data-minmax");var idx=parseInt(sDiv.getAttribute("data-idx"));if(minmax=="max"){var sval=document.getElementById(s+"t").value;if(sval=="")return;sDiv.className="bbw_memomin"+BBwObj.cls;sDiv.style.background="linear-gradient(to right, "+sDiv.style.backgroundColor+" 210px, #ffc600 30px)";document.getElementById(s+"p").className="bbw_memominp"+BBwObj.cls;document.getElementById(s+"p").innerHTML=BBwObj.get_memoFirstLine(sval);document.getElementById(s+"t").style.display="none";sDiv.setAttribute("data-minmax","min");document.getElementById("memoplusbtn").className="memoplusbtn"+BBwObj.cls+" bbw_btnE001";if(Action.mainState==="blackboard")Action.restoreState();BBwObj.currMenu="";}
else{sDiv.className="bbw_memo"+BBwObj.cls;sDiv.style.background=BBwObj.armemoObj[idx].bgcol;document.getElementById(s+"p").className="bbw_memobtn"+BBwObj.cls;document.getElementById(s+"p").innerHTML="<a href=\"javascript:BBwObj.memominbtnClick("+idx+",'"+s+"');\"><img "
+"src='"+FileInfo.skin5FilePath("bbw/bbw_memomin.png")+"'></a><a href=\"javascript:BBwObj.memoclosebtnClick("+idx+",'"+s+"s');\"><img "
+"src='"+FileInfo.skin5FilePath("bbw/bbw_memoclose.png")+"'></a>";document.getElementById(s+"t").style.display="inline";sDiv.setAttribute("data-minmax","max");}}
BBwObj.memominbtnTouch=function(e,n,s){var now=new Date();var atime=now.getTime();var diffTime=atime-BBwObj.touchStartTime;if(diffTime<=300){e.preventDefault();BBwObj.memominbtnClick(n,s);return;}
BBwObj.touchStartTime=atime;}
BBwObj.memotxtFocus=function(idx,s){Action.keyDownBlock=true;Action.resizeLocking=true;}
BBwObj.memotxtBlur=function(idx,s){BBwObj.currDiv=document.getElementById(s+"s");var memin=BBwObj.currDiv.getAttribute("data-mem");var idx=parseInt(BBwObj.currDiv.getAttribute("data-idx"));var sval=document.getElementById(s+"t").value;if(sval==""){if(memin=="0")return;BBwObj.armemoObj.splice(idx,1);memoDiv.removeChild(BBwObj.currDiv);BBwObj.currDiv=undefined;}
else{if(memin=="0"){var currtArea=document.getElementById(s+"t");var tcolor=BBwObj.currDiv.style.backgroundColor;if(tcolor.substr(0,1)!=="#")tcolor=BBwObj.memobgColor;var nleft=parseInt(BBwObj.currDiv.style.left.replace("px",""));var ntop=parseInt(BBwObj.currDiv.style.top.replace("px",""));var cwidth=(BBwInfo.loc==="win")?stageWidth:ScreenInfo.smImageWidth;var cheight=(BBwInfo.loc==="win")?stageHeight:ScreenInfo.smImageHeight;var npage=BBwObj.currPage;if(BBwInfo.loc==="smcsync"){if(ScreenInfo.onesmc===false&&nleft>=smRect.centerPt.x){npage=BBwObj.currPage+1;nleft-=smRect.centerPt.x;}
else{nleft-=smRect.x;}
ntop-=smRect.y;}
var obj=new memoObj(npage,nleft,ntop,tcolor,currtArea.style.fontFamily,currtArea.style.fontSize.replace("px",""),currtArea.style.color,cwidth,cheight,sval);BBwObj.armemoObj[idx]=obj;BBwObj.currDiv.setAttribute("data-mem","1");BBwObj.addDiv=undefined;}
else{var obj=BBwObj.armemoObj[idx];var nleft=parseInt(BBwObj.currDiv.style.left.replace("px",""));var ntop=parseInt(BBwObj.currDiv.style.top.replace("px",""));if(BBwInfo.loc==="smcsync"){if(obj.npage===BBwObj.currPage&&nleft>smRect.centerPt.x)obj.npage+=1;else if(obj.npage===BBwObj.currPage+1&&nleft<smRect.centerPt.x)obj.npage-=1;if(ScreenInfo.onesmc===false&&obj.npage===BBwObj.currPage+1)nleft-=smRect.centerPt.x;else nleft-=smRect.x;ntop-=smRect.y;}
obj.x=nleft;obj.y=ntop;obj.cont=sval;}}
BBwObj.store_memoData();Action.keyDownBlock=false;}
BBwObj.retrieve_data=function(prefix,scaller){if(BBwInfo.storeWhere==="db"){BBwObj.ret_serverData(prefix,BBwObj.currPage,scaller);}
else{if(prefix==="all"||prefix==="memo"){BBwObj.memoData[0]=BBwObj.retrieve_localdata("memo"+SpacerInfo.cKey+"_"+BBwObj.currPage);if(ScreenInfo.onesmc===false)BBwObj.memoData[1]=BBwObj.retrieve_localdata("memo"+SpacerInfo.cKey+"_"+(BBwObj.currPage+1));}
if(prefix==="all"||prefix==="bbws"){BBwObj.bbwsData[0]=BBwObj.retrieve_localdata("bbws"+SpacerInfo.cKey+"_"+BBwObj.currPage);if(ScreenInfo.onesmc===false)BBwObj.bbwsData[1]=BBwObj.retrieve_localdata("bbws"+SpacerInfo.cKey+"_"+(BBwObj.currPage+1));}
BBwObj.after_retdata(scaller);}}
BBwObj.save_data=function(prefix,pno,s,fcallback){if(BBwInfo.storeWhere==="local"){localStorage.setItem(prefix+SpacerInfo.cKey+"_"+pno,s);if(fcallback!=undefined)fcallback();}
else if(BBwInfo.storeWhere==="session"){sessionStorage.setItem(prefix+SpacerInfo.cKey+"_"+pno,s);if(fcallback!=undefined)fcallback();}
else if(BBwInfo.storeWhere==="db"){BBwObj.mod_serverData(prefix,BBwObj.currPage,s,fcallback);}}
BBwObj.remove_data=function(prefix,pno,fcallback){if(BBwInfo.storeWhere==="local"){localStorage.removeItem(prefix+SpacerInfo.cKey+"_"+pno);if(fcallback!=undefined)fcallback();}
else if(BBwInfo.storeWhere==="session"){sessionStorage.removeItem(prefix+SpacerInfo.cKey+"_"+pno);if(fcallback!=undefined)fcallback();}
else if(BBwInfo.storeWhere==="db"){BBwObj.del_serverData(prefix,BBwObj.currPage,fcallback);}}
BBwObj.retrieve_localdata=function(sidx){if(BBwInfo.storeWhere==="local"){if(localStorage.getItem(sidx))return localStorage.getItem(sidx);}
else if(BBwInfo.storeWhere==="session"){if(sessionStorage.getItem(sidx))return sessionStorage.getItem(sidx);}
return"";}
BBwObj.get_memoFirstLine=function(s){var lines=s.split("\n");if(lines[0].length>15)return lines[0].substr(0,15);return lines[0];}
BBwObj.loc_bbwmenu=function(){var arearect=document.getElementById('bbwritebtn').getBoundingClientRect();BBwObj.menuDiv.style.left=arearect.left+"px";if((arearect.left+BBwObj.menuDiv.clientWidth)>cataRect.right){BBwObj.menuDiv.style.left=(cataRect.right-BBwObj.menuDiv.clientWidth)+"px";}}
BBwObj.get_permit=function(s){if(s==="open"){if(PermitMan.normalPerm(-1)===false)return false;}
else if(s=="drawmenu"){if(PermitMan.includePerm(-1,"blackboard")===false)return false;}
return true;}
BBwObj.get_alertString=function(s){if(s==="notdata")return"데이터 형식이 맞지 않습니다.(cate)";else if(s==="permission")return"디렉토리에 대한 변경 권한이 없습니다.";else if(s==="existdata")return"폴더내에 파일이 존재합니다.";return s;}
BBwObj.memoTitleDown=function(e,ds){e.preventDefault();BBwObj.memoTitleDown2(e.clientX,e.clientY,ds);BBwObj.downKind=1;}
BBwObj.memoTitleTouch=function(e,ds){BBwObj.memoTitleDown2(e.touches[0].clientX,e.touches[0].clientY,ds);document.addEventListener("touchmove",BBwObj.do_touchMove,false);}
BBwObj.memoTitleDown2=function(ax,ay,ds){BBwObj.currDiv=document.getElementById(ds);BBwObj.tempPt.push(parseInt(BBwObj.currDiv.style.left.replace("px","")),parseInt(BBwObj.currDiv.style.top.replace("px","")));BBwObj.tempPt.push(ax,ay);Action.mouseDragClip=BBwObj;}
BBwObj.memotxtDown=function(e,ds){return;BBwObj.downKind=2;clickX=e.clientX;clickY=e.clientY;BBwObj.currDiv=document.getElementById(ds+"s");BBwObj.currArea=document.getElementById(ds+"t");var tstyle=window.getComputedStyle(BBwObj.currDiv);BBwObj.tmpWidth=parseInt(tstyle.getPropertyValue("width").replace("px",""));BBwObj.tmpHeight=parseInt(tstyle.getPropertyValue("height").replace("px",""));BBwObj.areaWidth=BBwObj.currArea.clientWidth;BBwObj.areaHeight=BBwObj.currArea.clientHeight;Action.mouseDragClip=BBwObj;}
BBwObj.do_touchMove=function(e){if(Action.mouseDragClip!=undefined){Action.mouseDragged=true;BBwObj.do_mouse2Drag(e.touches[0].clientX,e.touches[0].clientY);}}
BBwObj.do_touchEnd=function(){BBwObj.do_mouse2Up();BBwObj.currTouchSeq=0;}
BBwObj.do_mouseDrag=function(e){if(BBwObj.downKind===2){var aw=e.clientX-clickX;var ah=e.clientY-clickY;var tw=BBwObj.areaWidth+aw+20;var th=BBwObj.areaHeight+ah+38;if(tw<100)tw=100;else if(tw>ScreenInfo.smImageWidth)tw=ScreenInfo.smImageWidth;if(th<100)th=100;else if(th>ScreenInfo.smImageHeight)th=ScreenInfo.smImageHeight;BBwObj.currDiv.style.width=tw+"px";BBwObj.currDiv.style.height=th+"px";}
else if(BBwObj.downKind===1){BBwObj.do_mouse2Drag(e.clientX,e.clientY);}
return true;}
BBwObj.do_mouse2Drag=function(ax,ay){var posX=ax-BBwObj.tempPt[2]+BBwObj.tempPt[0];var posY=ay-BBwObj.tempPt[3]+BBwObj.tempPt[1];if(posX<cataRect.x)posX=cataRect.x;else if(posX>cataRect.right-BBwObj.currDiv.clientWidth)posX=cataRect.right-BBwObj.currDiv.clientWidth;if(posY<cataRect.y)posY=cataRect.y;else if(posY>cataRect.bottom-BBwObj.currDiv.clientHeight)posY=cataRect.bottom-BBwObj.currDiv.clientHeight;BBwObj.currDiv.style.left=posX+"px";BBwObj.currDiv.style.top=posY+"px";}
BBwObj.do_mouseUp=function(e){BBwObj.downKind=0;BBwObj.do_mouse2Up();}
BBwObj.do_mouse2Up=function(){BBwObj.tempPt=[];if(Action.mouseDragged===true){var idx=parseInt(BBwObj.currDiv.getAttribute("data-idx"));if(!BBwObj.armemoObj[idx])return;var obj=BBwObj.armemoObj[idx];var nleft=parseInt(BBwObj.currDiv.style.left.replace("px",""));var ntop=parseInt(BBwObj.currDiv.style.top.replace("px",""));var cwidth=(BBwInfo.loc==="win")?stageWidth:ScreenInfo.smImageWidth;var cheight=(BBwInfo.loc==="win")?stageHeight:ScreenInfo.smImageHeight;if(BBwInfo.loc==="smcsync"){if(ScreenInfo.onesmc===false){if(obj.npage===BBwObj.currPage&&nleft>smRect.centerPt.x)obj.npage+=1;else if(obj.npage===BBwObj.currPage+1&&nleft<smRect.centerPt.x)obj.npage-=1;nleft-=(obj.npage===BBwObj.currPage+1)?smRect.centerPt.x:smRect.x;}
else nleft-=smRect.x;ntop-=smRect.y;}
obj.x=nleft;obj.y=ntop;obj.cwidth=cwidth;obj.cheight=cheight;}
if(CataInfo.incview==="m")document.removeEventListener("touchmove",BBwObj.do_touchMove);}
BBwObj.ret_serverData=function(prefix,pno,scaller){if(ServerInfo.memberID==="")return;BBwObj.currMode="retrieve";var formdata=BBwObj.get_basicformData(prefix);formdata.append("act","ret");formdata.append("npage",pno);if(ScreenInfo.onesmc===false)formdata.append("npage2",pno+1);var restr="";var xmlHttp=new XMLHttpRequest();xmlHttp.open("POST",BBwObj.httpScript);if(xmlHttp.overrideMimeType)xmlHttp.overrideMimeType("text/plain; charset=utf-8");xmlHttp.onreadystatechange=function(){if(xmlHttp.readyState!==4)return;if(xmlHttp.status===200){restr=xmlHttp.responseText.replace(/^\s*/g,'');var tstr,tkd,arstr,npage;var lines=restr.split("\n");var alen=lines.length-1;for(var i=0;i<alen;i++){tstr=lines[i];if(tstr==="")continue;arstr=tstr.split("\t");tkd=arstr[0];npage=pareInt(arstr[1]);if(tkd==="bbws"){if(npage===BBwObj.currPage)BBwObj.bbwsData[0]+=tstr.substr(5)+"\n";else if(npage===BBwObj.currPage+1)BBwObj.bbwsData[1]+=tstr.substr(5)+"\n";}
else if(tkd==="memo"){if(npage===BBwObj.currPage)BBwObj.memoData[0]+=tstr.substr(5)+"\n";else if(npage===BBwObj.currPage+1)BBwObj.memoData[1]+=tstr.substr(5)+"\n";}}
BBwObj.after_retdata(scaller);console.log("bbw.js : ret_serverData() : "+BBwObj.httpScript+" : "+xmlHttp.status);}
else{console.log("[Error] bbw.js : ret_serverData() : "+BBwObj.httpScript+" : "+xmlHttp.status);}}
xmlHttp.send(formdata);}
BBwObj.mod_serverData=function(prefix,pno,s,fcallback){if(ServerInfo.memberID==="")return;BBwObj.currMode="mod";var formdata=BBwObj.get_basicformData(prefix);formdata.append("act","mod");formdata.append("npage",pno);formdata.append("cont",s);var xmlHttp=new XMLHttpRequest();xmlHttp.open("POST",BBwObj.httpScript);if(xmlHttp.overrideMimeType)xmlHttp.overrideMimeType("text/plain; charset=utf-8");xmlHttp.onreadystatechange=function(){if(xmlHttp.readyState!==4)return;if(xmlHttp.status===200){var restr=xmlHttp.responseText.replace(/^\s*|\s*$/g,'');if(restr!="modified"){alert(BBwObj.get_alertString(restr));return;}}
if(fcallback!=undefined)fcallback();console.log("bbw.js : add_serverData() : "+BBwObj.httpScript+" : "+xmlHttp.status);}
xmlHttp.send(formdata);}
BBwObj.del_serverData=function(prefix,pno,fcallback){if(ServerInfo.memberID==="")return;BBwObj.currMode="del";var formdata=BBwObj.get_basicformData(prefix);formdata.append("act","del");formdata.append("npage",pno);var xmlHttp=new XMLHttpRequest();xmlHttp.open("POST",BBwObj.httpScript);if(xmlHttp.overrideMimeType)xmlHttp.overrideMimeType("text/plain; charset=utf-8");xmlHttp.onreadystatechange=function(){if(xmlHttp.readyState!==4)return;if(xmlHttp.status===200){var restr=xmlHttp.responseText.replace(/^\s*|\s*$/g,'');if(restr!="deleted"){alert(BBwObj.get_alertString(restr));return;}}
if(fcallback!=undefined)fcallback();console.log("bbw.js : del_serverData() : "+BBwObj.httpScript+" : "+xmlHttp.status);}
xmlHttp.send(formdata);}
BBwObj.get_basicformData=function(prefix){var formdata=new FormData();formdata.append("skd",prefix);formdata.append("sdir",PageInfo.cataDir);formdata.append("catimage",CataInfo.catimage);formdata.append("userno",ServerInfo.memberID);return formdata;}
