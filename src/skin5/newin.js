
var p,svgWidth,svgHeight;var mainmenu="001",nwclass,nw2class,incview,eclang,lolang;var Qstring=[];var Display={"logo":"","help":"","user":"","titlepix":"","help":""};function parse_qstring(shref){var arstr=[];var tstr,pos,skey,sval;if(shref!=undefined&&shref.indexOf("?")>0){var ar=shref.split("?")[1].split("&");for(var i=0;i<ar.length;i++){tstr=ar[i];pos=tstr.indexOf("=");if(pos<1)continue;skey=tstr.substr(0,pos);sval=tstr.substr(pos+1);if(skey==="w")svgWidth=parseInt(sval);else if(skey==="h")svgHeight=parseInt(sval);else if(skey==="d"){arstr=sval.split(".");mainmenu=arstr[0];nwclass=arstr[1];incview=arstr[2];eclang=arstr[3];}}}
nw2class=nwclass;if(nwclass==="017"||nwclass==="021")nw2class="016";lolang="";if(eclang!=="ko")lolang=eclang;return arstr;}
function set_userSkin(mainmenu,incview){var firstval=mainmenu.substr(0,1);if(firstval==="4"||firstval==="6"||firstval==="9"){var findstr="["+mainmenu+"]";var xmlHttp=new XMLHttpRequest();xmlHttp.open("GET","../catImage/display.txt");if(xmlHttp.overrideMimeType)xmlHttp.overrideMimeType("text/plain; charset=utf-8");xmlHttp.onload=function(){var restr=xmlHttp.responseText.replace(/^\s*|\s*$/g,'');var lines=restr.split("\n");var alen=lines.length;var found=false;var tstr,skey,pos;for(var i=0;i<alen;i++){tstr=lines[i].trim();if(tstr.substr(0,2)==="//")continue;if(tstr===""){if(found===true)break;continue;}
if(tstr===findstr){found=true;continue;}
if(found===true){pos=tstr.indexOf(":");if(pos===-1)continue;skey=tstr.substr(0,pos);Display[skey]=tstr.substr(pos+1);}
console.log("newin.js : set_userSkin() : "+xmlHttp.readyState);}
after_userSkin();}
xmlHttp.onerror=function(){console.log("[Error] newin.js : set_userSkin() : "+xmlHttp.status);}
xmlHttp.send();}
else{after_userSkin();}}
function getNewinElement(n,d,w,h,p){if(p==undefined)p=".";if(n==="001")return getNewinElement001(n,d,w,h,p);else if(n==="012")return getNewinElement012(n,d,w,h,p);else if(n==="016"||n==="017"||n==="018"||n==="021")return getNewinElement016(n,d,w,h,p);else if(n==="018")return getNewinElement018(n,d,w,h,p);else if(n==="014")return getNewinElement014(n,d,w,h,p);else if(n==="041")return getNewinElement041(n,d,w,h,p);}
function getNewinButton(nw2){if(nw2==="001")return getNewinButton001();else if(nw2==="012")return getNewinButton012();else if(nw2==="016")return getNewinButton016();else if(nw2==="018")return getNewinButton018();else if(nw2==="014")return getNewinButton014();else if(nw2==="041")return getNewinButton041();}
function newin_size(){if(nw2class==="001")return newin_size001();else if(nw2class==="012")return newin_size012();else if(nw2class==="016")return newin_size016();else if(nw2class==="018")return newin_size018();else if(nw2class==="014")return newin_size014();else if(nw2class==="041")return newin_size041();}
function newin_fullscr2(){if(nw2class==="001")return newin_fullscr2001();else if(nw2class==="012")return newin_fullscr2012();else if(nw2class==="016")return newin_fullscr2016();}
function newin_restore(){if(nw2class==="001")return newin_restore001();else if(nw2class==="012")return newin_restore012();else if(nw2class==="016")return newin_restore016();}
function swap_fullscrimage(s){if(nw2class==="001")return swap_fullscrimage001(s);else if(nw2class==="012")return swap_fullscrimage012(s);else if(nw2class==="016")return newin_restore016(s);}
function getNewinElement001(n,d,w,h,spath){if(spath==undefined)spath=".";ws='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<defs>'
+'<linearGradient id="newin_titleGradient'+plusID+'">';if(Display['user']!=""){ws+='<stop offset="0%" stop-color="'+Display['nwcolor1_d']+'" />'
+'<stop offset="100%" stop-color="'+Display['nwcolor2_d']+'" />';}
else if(d==="001"){ws+='<stop offset="0%" stop-color="#5A7685" />'
+'<stop offset="100%" stop-color="#A9B5C2" />';}
else if(d==="010"){ws+='<stop offset="0%" stop-color="#111111" />'
+'<stop offset="100%" stop-color="#666666" />';}
else if(d==="011"){ws+='<stop offset="0%" stop-color="#41830F" />'
+'<stop offset="100%" stop-color="#394F20" />';}
else if(d==="020"){ws+='<stop offset="0%" stop-color="#555555" />'
+'<stop offset="100%" stop-color="#999999" />';}
else if(d==="030"){ws+='<stop offset="0%" stop-color="#329FD0" />'
+'<stop offset="100%" stop-color="#96E5ED" />';}
else if(d==="301"){ws+='<stop offset="0%" stop-color="#5283c0" />'
+'<stop offset="100%" stop-color="#96c8ff" />';}
else if(d==="302"){ws+='<stop offset="0%" stop-color="#121212" />'
+'<stop offset="100%" stop-color="#3C476F" />';}
else{ws+='<stop offset="0%" stop-color="#5A7685" />'
+'<stop offset="100%" stop-color="#A9B5C2" />';}
ws+='</linearGradient>'
+'</defs>';ws+='<g>'
+'<rect id="newin_titlerect'+plusID+'" x="0" y="0" width="'+w+'" height="21" onmousedown="NewinObj.do_mousedownTitle(evt,'+svgObj+');" fill="url(#newin_titleGradient'+plusID+')" />';if(Display['titlepix']==""){ws+='<text id="newin_titletext'+plusID+'" class="newin_titletext5d" x="3" y="14" fill="#ffffff">'+newin_titletext+'</text>';}
else{ws+='<image id="newin_titleimage'+plusID+'" x="10" y="6" width="'+Display['titlepix_w']+'"'
+' height="'+Display['titlepix_h']+'" xlink:href="'+spath+'/skin5/'+Display['titlepix']+'">'
+'<title>'+newin_titletext+'</title>'
+'</image></a>';}
if(fullscrbtn===1){ws+='<a xlink:href="javascript:'+svgObj+'.newin_fullscr();"><image id="newin_titlefullscrbtn" class="hover_opac6" cursor="pointer" '
+'x="'+(w-30)+'" y="5" width="11" height="11" xlink:href="'+spath+'/skin5/win/fullscr_11.png">'
+'<title>'+get_textNewin(eclang,"fullscr")+'</title>'
+'</image></a>';}
if(closebtn===1){ws+='<a xlink:href="javascript:'+svgObj+'.newin_close();"><image id="newin_titleclosebtn'+plusID+'" class="hover_opac6" cursor="pointer" '
+'x="'+(w-15)+'" y="5" width="11" height="11" xlink:href="'+spath+'/skin5/win/close_11.png">'
+'<title>'+get_textNewin(eclang,"closew")+'</title>'
+'</image></a>';}
ws+='</g>';ws+='<line id="newin_bodyTline'+plusID+'" x1="0.5" y1="22.5" x2="'+w+'" y2="22.5" stroke="#666666" />'
+'<line id="newin_bodyLline'+plusID+'" x1="0.5" y1="22.5" x2="0.5" y2="'+h+'" stroke="#666666" />'
+'<line id="newin_bodyRline'+plusID+'" x1="'+(w-0.5)+'" y1="22.5" x2="'+(w-0.5)+'" y2="'+(h-0.5)+'" stroke="#bbbbbb" />'
+'<line id="newin_bodyBline'+plusID+'" x1="0.5" y1="'+(h-0.5)+'" x2="'+(w-0.5)+'" y2="'+(h-0.5)+'" stroke="#bbbbbb" />'
+'</svg>'
+'</div>';return ws;}
function newin_size001(){p.document.getElementById('newin_titlerect'+plusID+'').setAttribute("width",svgWidth+0.5);if(fullscrbtn===1)p.document.getElementById('newin_titlefullscrbtn').setAttribute("x",svgWidth-30);if(closebtn===1)p.document.getElementById('newin_titleclosebtn'+plusID+'').setAttribute("x",svgWidth-15);p.document.getElementById('newin_bodyTline'+plusID+'').setAttribute("x2",svgWidth);p.document.getElementById('newin_bodyLline'+plusID+'').setAttribute("y2",svgHeight);p.document.getElementById('newin_bodyRline'+plusID+'').setAttribute("x1",svgWidth-0.5);p.document.getElementById('newin_bodyRline'+plusID+'').setAttribute("x2",svgWidth-0.5);p.document.getElementById('newin_bodyRline'+plusID+'').setAttribute("y2",svgHeight-0.5);p.document.getElementById('newin_bodyBline'+plusID+'').setAttribute("y1",svgHeight-0.5);p.document.getElementById('newin_bodyBline'+plusID+'').setAttribute("y2",svgHeight-0.5);p.document.getElementById('newin_bodyBline'+plusID+'').setAttribute("x2",svgWidth-0.5);}
function newin_fullscr2001(){if(fullscrbtn===1)p.document.getElementById('newin_titlefullscrbtn').setAttribute("x",p.stageWidth-36);if(closebtn===1)p.document.getElementById('newin_titleclosebtn'+plusID+'').setAttribute("x",p.stageWidth-21);p.document.getElementById('newin_titlerect'+plusID+'').setAttribute("width",p.stageWidth-6);p.document.getElementById('newin_bodyTline'+plusID+'').setAttribute("visibility","hidden");p.document.getElementById('newin_bodyRline'+plusID+'').setAttribute("visibility","hidden");p.document.getElementById('newin_bodyBline'+plusID+'').setAttribute("visibility","hidden");p.document.getElementById('newin_bodyLline'+plusID+'').setAttribute("visibility","hidden");}
function newin_restore001(){if(fullscrbtn===1)p.document.getElementById('newin_titlefullscrbtn').setAttribute("x",svgWidth-30);if(closebtn===1)p.document.getElementById('newin_titleclosebtn'+plusID+'').setAttribute("x",svgWidth-15);p.document.getElementById('newin_titlerect'+plusID+'').setAttribute("width",svgWidth);p.document.getElementById('newin_bodyTline'+plusID+'').setAttribute("visibility","visible");p.document.getElementById('newin_bodyRline'+plusID+'').setAttribute("visibility","visible");p.document.getElementById('newin_bodyBline'+plusID+'').setAttribute("visibility","visible");p.document.getElementById('newin_bodyLline'+plusID+'').setAttribute("visibility","visible");}
function swap_fullscrimage001(s){p.document.getElementById('newin_titlefullscrbtn').setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","./skin5/win/"+s+"_11.png");}
function getNewinButton001(){var s='';if(skind==="close"){s+='<div id="newin_bodybtn" class="newin_bodybtn001"><a href="javascript:newin_close();" title="'+get_textNewin(eclang,"closew")+'">'
+'<svg version="1.1" width="123" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<g onmousedown="this.setAttribute(\'transform\',\'translate(1,1)\');" onmouseup="this.setAttribute(\'transform\',\'translate(0,0)\');">'
+'<image x="0.5" y="0.5" width="121" height="23" xlink:href="./win/nw_bodyclose.png" />';if(eclang==="en")s+='<text x="45" y="16">Close</text>';else s+='<text x="35" y="16">닫<tspan dx="30">기</tspan></text>';s+='</g>'
+'</svg></a></div>';}
else if(skind==="send"){s='<div id="newin_bodybtn" class="newin_bodybtn001"><a href="javascript:mailSend();" title="'+get_textNewin(eclang,"sendmail")+'">'
+'<svg version="1.1" width="123" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<g onmousedown="this.setAttribute(\'transform\',\'translate(1,1)\');" onmouseup="this.setAttribute(\'transform\',\'translate(0,0)\');">'
+'<image x="0.5" y="0.5" width="121" height="23" xlink:href="./win/nw_bodyclose.png" />';if(eclang==="en")s+='<text x="45" y="16">Send</text>';else s+='<text x="28" y="16">보<tspan dx="13">내</tspan><tspan dx="13">기</tspan></text>';s+='</g>'
+'</svg></a></div>';}
return s;}
function getNewinElement012(n,d,w,h,spath){var n_icon="";if(d==="013")n_icon="013";var ws='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<g onmousedown="NewinObj.do_mousedownTitle(evt, '+svgObj+');">';if(d==="013"){ws+='<rect id="newin_titleback1'+plusID+'" x="0" y="0" width="'+(w+0.5)+'" height="30" fill="#565656" />';}
else{ws+='<image id="newin_titleback1'+plusID+'" x="0" y="0" width="'+(w+0.5)+'" height="30" xlink:href="./skin5/win/kw_titleback.png" preserveAspectRatio="none" />'
+'<image id="newin_titleback2'+plusID+'" x="'+(w-238)+'" y="0" width="238" height="30" xlink:href="./skin5/win/kw_titlewave.png" />';}
if(Display['titlepix']==""){ws+='<text id="newin_titletext'+plusID+'" class="newin_titletext5d" x="5" y="19" fill="#ffffff">'+newin_titletext+'</text>';}
else{ws+='<image id="newin_titleimage'+plusID+'" x="10" y="6" width="'+Display['titlepix_w']+'"'
+' height="'+Display['titlepix_h']+'" xlink:href="./skin5/'+Display['titlepix']+'">'
+'<title>'+newin_titletext+'</title>'
+'</image></a>';}
if(fullscrbtn===1){ws+='<a xlink:href="javascript:javascript:'+svgObj+'.newin_fullscr();"><image id="newin_titlefullscrbtn" class="hover_opac6" cursor="pointer" '
+'x="'+(w-40)+'" y="8" width="15" height="14" xlink:href="./skin5/win/kw_fullscr'+n_icon+'.png">'
+'<title>'+get_textNewin(eclang,"fullscr")+'</title>'
+'</image></a>';}
if(closebtn===1){ws+='<a xlink:href="javascript:'+svgObj+'.newin_close();"><image id="newin_titleclosebtn'+plusID+'" class="hover_opac6" cursor="pointer" '
+'x="'+(w-21)+'" y="8" width="15" height="14" xlink:href="./skin5/win/kw_titleclose'+n_icon+'.png">'
+'<title>'+get_textNewin(eclang,"closew")+'</title>'
+'</image></a>';}
ws+='</g></svg>';return ws;}
function getNewinButton012(){var s='';if(skind==="close"){s+='<a href="javascript:newin_close();" title="'+get_textNewin(eclang,"closew")+'">'
+'<svg version="1.1" id="newin_bodybtn" class="newin_bodyclosebtn012" width="38" height="21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<g class="hover_image1hide" onmousedown="this.setAttribute(\'transform\',\'translate(1,1)\');" onmouseup="this.setAttribute(\'transform\',\'translate(0,0)\');">'
+'<image x="0.5" y="0.5" width="36" height="19" xlink:href="./win/kw_bodyclose'+lolang+'_over.png" />'
+'<image x="0.5" y="0.5" width="36" height="19" xlink:href="./win/kw_bodyclose'+lolang+'.png" />'
+'</g>'
+'</svg></a>';}
else if(skind==="send"){s+='<a href="javascript:mailSend();" title="'+get_textNewin(eclang,"sendmail")+'">'
+'<svg version="1.1" id="newin_bodybtn" class="newin_bodysendbtn012" width="46" height="21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<g class="hover_image1hide" onmousedown="this.setAttribute(\'transform\',\'translate(1,1)\');" onmouseup="this.setAttribute(\'transform\',\'translate(0,0)\');">'
+'<image x="0.5" y="0.5" width="44" height="19" xlink:href="./win/kw_bodysend'+lolang+'_over.png" />'
+'<image x="0.5" y="0.5" width="44" height="19" xlink:href="./win/kw_bodysend'+lolang+'.png" />'
+'</g>'
+'</svg></a>';}
return s;}
function newin_size012(){p.document.getElementById('newin_titleback1'+plusID+'').setAttribute("width",svgWidth+0.5);p.document.getElementById('newin_titleback2'+plusID+'').setAttribute("x",svgWidth-238);if(fullscrbtn===1)p.document.getElementById('newin_titlefullscrbtn').setAttribute("x",svgWidth-40);if(closebtn===1)p.document.getElementById('newin_titleclosebtn'+plusID+'').setAttribute("x",svgWidth-21);}
function newin_fullscr2012(){if(fullscrbtn===1)p.document.getElementById('newin_titlefullscrbtn').setAttribute("x",svgWidth-30);if(closebtn===1)p.document.getElementById('newin_titleclosebtn'+plusID+'').setAttribute("x",svgWidth-15);}
function newin_restore012(){if(fullscrbtn===1)p.document.getElementById('newin_titlefullscrbtn').setAttribute("x",svgWidth-30);if(closebtn===1)p.document.getElementById('newin_titleclosebtn'+plusID+'').setAttribute("x",svgWidth-15);}
function swap_fullscrimage012(s){p.document.getElementById('newin_titlefullscrbtn').setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","./win/kw_"+s+".png");}
function getNewinElement016(n,d,w,h,spath){ws='<svg version="1.1" width="'+w+'" height="'+h+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<g onmousedown="NewinObj.do_mousedownTitle(evt,'+svgObj+');">'
+'<image id="newin_titleback1'+plusID+'" x="0" y="0" width="6" height="31" xlink:href="'+spath+'/skin5/win/sw_body'+n+'1.png" />'
+'<image id="newin_titleback2'+plusID+'" x="6" y="0" width="'+(w-14)+'" height="31" xlink:href="'+spath+'/skin5/win/sw_body'+n+'2.png" preserveAspectRatio="none" />'
+'<image id="newin_titleback3'+plusID+'" x="'+(w-8)+'" y="0" width="8" height="31" xlink:href="'+spath+'/skin5/win/sw_body'+n+'3.png" />';if(Display['titlepix']==""){ws+='<text id="newin_titletext'+plusID+'" class="newin_titletext5d" x="8" y="20" fill="#ffffff">'+newin_titletext+'</text>';}
else{ws+='<image id="newin_titleimage'+plusID+'" x="10" y="6" width="'+Display['titlepix_w']+'"'
+' height="'+Display['titlepix_h']+'" xlink:href="'+spath+'/skin5/'+Display['titlepix']+'">'
+'<title>'+newin_titletext+'</title>'
+'</image></a>';}
if(fullscrbtn===1){ws+='<a xlink:href="javascript:'+svgObj+'.newin_fullscr();"><image id="newin_titlefullscrbtn" class="hover_opac6" cursor="pointer" '
+'x="'+(w-43)+'" y="8" width="16" height="15" xlink:href="'+spath+'/skin5/win/sw_fullscr.png">'
+'<title>'+get_textNewin(eclang,"fullscr")+'</title>'
+'</image></a>';}
if(closebtn===1){ws+='<a xlink:href="javascript:'+svgObj+'.newin_close();"><image id="newin_titleclosebtn'+plusID+'" class="hover_opac6" cursor="pointer" '
+'x="'+(w-25)+'" y="8" width="16" height="15" xlink:href="'+spath+'/skin5/win/sw_titleclose.png">'
+'<title>'+get_textNewin(eclang,"closew")+'</title>'
+'</image></a>';}
ws+='</g>';var h1=h-31-9;ws+='<image id="newin_bodyback1'+plusID+'" x="0" y="31" width="6" height="'+h1+'" xlink:href="'+spath+'/skin5/win/sw_body4.png" preserveAspectRatio="none" />'
+'<image id="newin_bodyback2'+plusID+'" x="6" y="31" width="'+(w-14)+'" height="'+h1+'" xlink:href="'+spath+'/skin5/win/sw_body5.png" preserveAspectRatio="none" />'
+'<image id="newin_bodyback3'+plusID+'" x="'+(w-8)+'" y="31" width="8" height="'+h1+'" xlink:href="'+spath+'/skin5/win/sw_body6.png" preserveAspectRatio="none" />';var y1=h-9;ws+='<image id="newin_bodyback4'+plusID+'" x="0" y="'+y1+'" width="6" height="9" xlink:href="'+spath+'/skin5/win/sw_body7.png" />'
+'<image id="newin_bodyback5'+plusID+'" x="6" y="'+y1+'" width="'+(w-14)+'" height="9" xlink:href="'+spath+'./skin5/win/sw_body8.png" preserveAspectRatio="none" />'
+'<image id="newin_bodyback6'+plusID+'" x="'+(w-8)+'" y="'+y1+'" width="8" height="9" xlink:href="'+spath+'/skin5/win/sw_body9.png" />'
+'</svg>';return ws;}
function newin_size016(){p.document.getElementById('newin_titleback2'+plusID+'').setAttribute("width",svgWidth-14);p.document.getElementById('newin_titleback3'+plusID+'').setAttribute("x",svgWidth-8);var h1=svgHeight-31-19;p.document.getElementById('newin_bodyback1'+plusID+'').setAttribute("height",h1);p.document.getElementById('newin_bodyback2'+plusID+'').setAttribute("width",svgWidth-14);p.document.getElementById('newin_bodyback2'+plusID+'').setAttribute("height",h1);p.document.getElementById('newin_bodyback3'+plusID+'').setAttribute("x",svgWidth-8);p.document.getElementById('newin_bodyback3'+plusID+'').setAttribute("height",h1);var y1=svgHeight-19;p.document.getElementById('newin_bodyback4'+plusID+'').setAttribute("y",y1);p.document.getElementById('newin_bodyback5'+plusID+'').setAttribute("y",y1);p.document.getElementById('newin_bodyback5'+plusID+'').setAttribute("width",svgWidth-14);p.document.getElementById('newin_bodyback6'+plusID+'').setAttribute("x",svgWidth-8);p.document.getElementById('newin_bodyback6'+plusID+'').setAttribute("y",y1);if(fullscrbtn==1)p.document.getElementById('newin_titlefullscrbtn').setAttribute("x",svgWidth-40);if(closebtn==1)p.document.getElementById('newin_titleclosebtn'+plusID+'').setAttribute("x",svgWidth-21);}
function newin_fullscr2016(){p.document.getElementById('newin_titleback2'+plusID+'').setAttribute("width",p.stageWidth-14);p.document.getElementById('newin_titleback3'+plusID+'').setAttribute("x",p.stageWidth-8);if(fullscrbtn==1)p.document.getElementById('newin_titlefullscrbtn').setAttribute("x",p.stageWidth-43);if(closebtn==1)p.document.getElementById('newin_titleclosebtn'+plusID+'').setAttribute("x",p.stageWidth-25);p.document.getElementById('newin_bodyback1'+plusID+'').setAttribute("visibility","hidden");p.document.getElementById('newin_bodyback2'+plusID+'').setAttribute("visibility","hidden");p.document.getElementById('newin_bodyback3'+plusID+'').setAttribute("visibility","hidden");p.document.getElementById('newin_bodyback4'+plusID+'').setAttribute("visibility","hidden");p.document.getElementById('newin_bodyback5'+plusID+'').setAttribute("visibility","hidden");p.document.getElementById('newin_bodyback6'+plusID+'').setAttribute("visibility","hidden");}
function newin_restore016(){p.document.getElementById('newin_titleback2'+plusID+'').setAttribute("width",svgWidth-14);p.document.getElementById('newin_titleback3'+plusID+'').setAttribute("x",svgWidth-8);if(fullscrbtn==1)p.document.getElementById('newin_titlefullscrbtn').setAttribute("x",svgWidth-43);if(closebtn==1)p.document.getElementById('newin_titleclosebtn'+plusID+'').setAttribute("x",svgWidth-25);p.document.getElementById('newin_bodyback1'+plusID+'').setAttribute("visibility","visible");p.document.getElementById('newin_bodyback2'+plusID+'').setAttribute("visibility","visible");p.document.getElementById('newin_bodyback3'+plusID+'').setAttribute("visibility","visible");p.document.getElementById('newin_bodyback4'+plusID+'').setAttribute("visibility","visible");p.document.getElementById('newin_bodyback5'+plusID+'').setAttribute("visibility","visible");p.document.getElementById('newin_bodyback6'+plusID+'').setAttribute("visibility","visible");}
function swap_fullscrimage016(s){p.document.getElementById('newin_titlefullscrbtn').setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","./skin5/win/sw_"+s+".png");}
function getNewinButton016(){var s='';if(skind==="close"){s+='<div id="newin_bodybtn"><a href="javascript:newin_close();" title="'+get_textNewin(eclang,"closew")+'">'
+'<svg version="1.1" class="newin_bodybtn016" width="123" height="27" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<g class="hover_image1hide" onmousedown="this.setAttribute(\'transform','translate(1,1)\');" onmouseup="this.setAttribute(\'transform\',\'translate(0,0)\');">'
+'<image x="0" y="0" width="122" height="26" xlink:href="./win/sw_bodyclose_over.png" />'
+'<image x="0" y="0" width="122" height="26" xlink:href="./win/sw_bodyclose.png" />';if(eclang==="en")s+='<text x="45" y="16">Close</text>';else s+='<text x="35" y="16">닫<tspan dx="30">기</tspan></text>';s+='</g>'
+'</svg></a></div>';}
else if(skind=="send"){s+='<div id="newin_bodybtn"><a href="javascript:mailSend();" title="'+get_textNewin(eclang,"sendmail")+'">'
+'<svg version="1.1" class="newin_bodybtn016" width="124" height="28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<g class="hover_image1hide" onmousedown="this.setAttribute(\'transform\',\'translate(1,1)\');" onmouseup="this.setAttribute(\'transform\',\'translate(0,0)\');">'
+'<image x="0" y="0" width="122" height="26" xlink:href="./win/sw_bodyclose_over.png" />'
+'<image x="0" y="0" width="122" height="26" xlink:href="./win/sw_bodyclose.png" />';if(eclang==="en")s+='<text x="45" y="18">Send</text>';else s+='<text x="28" y="18">보 <tspan dx="10"> 내</tspan><tspan dx="10">기</tspan></text>';s+='</g>'
+'</svg></a></div>';}
return s;}
function getNewinElement014(n,d,w,h,spath){var titlecol="#000000";var tback="#ffffff";if(Display['user']!="")tback=Display['nwcolor_m'];var ws='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<rect x="0" y="0" width="100%" height="36" fill="'+tback+'" onmousedown="NewinObj.do_mousedownTitle(evt,'+svgObj+');" />';if(Display['titlepix']==""){ws+='<text id="newin_titletext'+plusID+'" class="newin_titletext5dE014" x="10" y="23" fill="'+titlecol+'">'+newin_titletext+'</text>';}
else{ws+='<image id="newin_titleimage'+plusID+'" x="10" y="6" width="'+Display['titlepix_w']+'"'
+' height="'+Display['titlepix_h']+'" xlink:href="'+spath+'/skin5/'+Display['titlepix']+'">'
+'<title>'+newin_titletext+'</title>'
+'</image></a>';}
ws+='<line id="newin_titleline" x1="8" y1="36" x2="'+(w-8)+'" y2="36" stroke-width="1" stroke="#000000" />';if(closebtn===1){ws+='<a xlink:href="javascript:'+svgObj+'.newin_close();"><image id="newin_titleclosebtn'+plusID+'" class="hover_opac6" cursor="pointer" '
+'x="'+(w-28)+'" y="10" width="15" height="15" xlink:href="'+spath+'/skin5/win/close014btn.png">'
+'<title>'+get_textNewin(eclang,"closew")+'</title>'
+'</image></a>';}
ws+='</svg>';return ws;}
function newin_size014(){if(closebtn==1){p.document.getElementById('newin_titleclosebtn'+plusID+'').setAttribute("x",svgWidth-35);p.document.getElementById('newin_titleline').setAttribute("x2",svgWidth-8);}}
function getNewinButton014(){var s='';if(skind==="close"){s+='<a href="javascript:newin_close();" title="'+get_textNewin(eclang,"closew")+'">'
+'<svg version="1.1" id="newin_bodybtn" class="newin_bodybtn014" width="123" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<rect x="0.5" y="0.5" width="121" height="23" fill="#dddddd" stroke="#cccccc" stroke-width="1" />';if(eclang==="en")s+='<text x="45" y="16">Close</text>'
else s+='<text x="35" y="16">닫<tspan dx="30">기</tspan></text>'
s+='</svg></a>';}
else if(skind=="send"){s+='<a href="javascript:mailSend();" title="'+get_textNewin(eclang,"sendmail")+'">'
+'<svg version="1.1" id="newin_bodybtn" class="newin_bodybtn014" width="123" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<rect x="0.5" y="0.5" width="121" height="23" fill="#dddddd" stroke="#cccccc" stroke-width="1" />';if(eclang==="en")s+='<text x="45" y="18">Send</text>';else s+='<text x="28" y="16">보<tspan dx="13">내</tspan><tspan dx="13">기</tspan></text>';s+='</svg></a>';}
return s;}
function getNewinElement041(n,d,w,h,spath){var tback="#415c6a";if(Display['user']!="")tback=Display['nwcolor_m'];else if(d==="010")tback="#111111";else if(d==="011")tback="#23451b";else if(d==="012")tback="#23451b";else if(d==="016")tback="#538C2C";else if(d==="017")tback="#444444";else if(d==="020")tback="#555555";else if(d==="030")tback="#329FD0";else if(d==="301")tback="#5283c0";else if(d==="302")tback="#121212";else if(d==="041")tback="#484848";var ws='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<rect x="0" y="0" width="100%" height="30" fill="'+tback+'" />';if(Display['titlepix']==""){ws+='<text id="newin_titletext'+plusID+'" class="newin_titletext5m" x="10" y="19" fill="#ffffff">'+newin_titletext+'</text>';}
else{ws+='<image id="newin_titleimage'+plusID+'" x="10" y="6" width="'+Display['titlepix_w']+'"'
+' height="'+Display['titlepix_h']+'" xlink:href="'+spath+'/skin5/'+Display['titlepix']+'">'
+'<title>'+newin_titletext+'</title>'
+'</image></a>';}
if(closebtn===1){ws+='<a xlink:href="javascript:'+svgObj+'.newin_close();"><image id="newin_titleclosebtn'+plusID+'" class="hover_opac6" cursor="pointer" '
+'x="'+(w-25)+'" y="6" width="15" height="15" xlink:href="'+spath+'/skin5/win/m_closebtn.png">'
+'<title>'+get_textNewin(eclang,"closew")+'</title>'
+'</image></a>';}
ws+='</svg>';return ws;}
function newin_size041(){if(closebtn==1)p.document.getElementById('newin_titleclosebtn'+plusID+'').setAttribute("x",svgWidth-21);}
function getNewinButton041(){var s='';if(skind==="close"){s+='<div id="newin_bodybtn" class="newin_bodybtn041"><a href="javascript:newin_close();" title="'+get_textNewin(eclang,"closew")+'">'
+'<svg version="1.1" width="123" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<rect x="0.5" y="0.5" width="121" height="23" fill="#dddddd" stroke="#cccccc" stroke-width="1" />';if(eclang==="en")s+='<text x="45" y="16">Close</text>';else s+='<text x="35" y="16">닫<tspan dx="30">기</tspan></text>';s+='</svg></a></div>';}
else if(skind=="send"){s+='<div id="newin_bodybtn" class="newin_bodybtn041"><a href="javascript:mailSend();" title="'+get_textNewin(eclang,"sendmail")+'">'
+'<svg version="1.1" width="123" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<rect x="0.5" y="0.5" width="121" height="23" fill="#dddddd" stroke="#cccccc" stroke-width="1" />';if(eclang==="en")s+='<text x="45" y="18">Send</text>';else s+='<text x="28" y="16">보<tspan dx="13">내</tspan><tspan dx="13">기</tspan></text>';s+='</svg></a></div>';}
return s;}
function getNewinElement018(n,d,w,h,spath){var tback="#415c6a";if(Display['user']!="")tback=Display['nwcolor1_d'];else if(d==="010")tback="#111111";else if(d==="011")tback="#23451b";else if(d==="012")tback="#23451b";else if(d==="016")tback="#538C2C";else if(d==="017")tback="#444444";else if(d==="020")tback="#555555";else if(d==="030")tback="#329FD0";else if(d==="301")tback="#5283c0";else if(d==="302")tback="#121212";else if(d==="041")tback="#484848";var ws='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<rect x="0" y="0" width="100%" height="30" fill="'+tback+'" />';if(Display['titlepix']==""){ws+='<text id="newin_titletext'+plusID+'" class="newin_titletext5m" x="10" y="19" fill="#ffffff">'+newin_titletext+'</text>';}
else{ws+='<image id="newin_titleimage'+plusID+'" x="10" y="6" width="'+Display['titlepix_w']+'"'
+' height="'+Display['titlepix_h']+'" xlink:href="'+spath+'/skin5/'+Display['titlepix']+'">'
+'<title>'+newin_titletext+'</title>'
+'</image></a>';}
if(closebtn===1){ws+='<a xlink:href="javascript:'+svgObj+'.newin_close();"><image id="newin_titleclosebtn'+plusID+'" class="hover_opac6" cursor="pointer" '
+'x="'+(w-25)+'" y="6" width="15" height="15" xlink:href="'+spath+'/skin5/win/m_closebtn.png">'
+'<title>'+get_textNewin(eclang,"closew")+'</title>'
+'</image></a>';}
ws+='</svg>';return ws;}
function newin_size018(){if(closebtn==1)p.document.getElementById('newin_titleclosebtn'+plusID+'').setAttribute("x",svgWidth-21);}
function getNewinButton018(){var s='';if(skind=="close"){s+='<div id="newin_bodybtn" class="newin_bodybtn018 hover_opac9"><a href="javascript:newin_close();" title="'+get_textNewin(eclang,"closew")+'">'
+'<svg version="1.1" width="123" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<g onmousedown="this.setAttribute(\'transform\',\'translate(1,1)\');" onmouseup="this.setAttribute(\'transform\',\'translate(0,0)\');">'
+'<rect x="0.5" y="0.5" width="121" height="23" fill="'+tback+'" />';if(eclang==="en")s+='<text x="45" y="16" fill="#ffffff">Close</text>';else s+='<text x="35" y="16" fill="#ffffff">닫<tspan dx="30">기</tspan></text>';s+='</g>';+'</svg></a></div>';}
else if(skind=="send"){s+='<div id="newin_bodybtn" class="newin_bodybtn018 hover_opac9"><a href="javascript:mailSend();" title="'+get_textNewin(eclang,"sendmail")+'">'
+'<svg version="1.1" width="123" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+'<g onmousedown="this.setAttribute(\'transform\',\'translate(1,1)\');" onmouseup="this.setAttribute(\'transform\',\'translate(0,0)\');">'
+'<rect x="0.5" y="0.5" width="121" height="23" fill="'+tback+'" />';if(eclang==="en")s+='<text x="45" y="18" fill="#ffffff">Send</text>';else s+='<text x="28" y="16" fill="#ffffff">보<tspan dx="13">내</tspan><tspan dx="13">기</tspan></text>';s+='</g>';+'</svg></a></div>';}
return s;}
function get_textNewin(eclang,skd){if(eclang==="en"){if(skd==="fullscr")return"Full screen";else if(skd==="closew")return"Close window";else if(skd==="sendmail")return"Send email";else if(skd==="audio")return"This browser does not support the 'audio' tag";}
if(skd==="fullscr")return"전체화면으로 보기";else if(skd==="closew")return"창닫기";else if(skd==="sendmail")return"메일 보내기";else if(skd==="audio")return"브라우저가 audio를 지원하지 않습니다";}
