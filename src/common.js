var od_platform="html5";function ecatalog(docu,kd,dir,resize){var ax=screen.width;var ay=screen.height;var wname="ecatalog";if(kd=="fixed"){ax=1024;ay=768;wname="fixed_ecatalog";}
ax=ax-10;ay=(navigator.userAgent.indexOf("Chrome")==-1)?ay-58:ay-88;if(resize==undefined||resize=="")resize="yes";var property="toolbar=no,location=no,directories=no,status=no,menubar=no,resizable="+resize+",scrollbars=no,copyhistory=no,";property+="width="+ax+",height="+ay+",left="+0+",top="+0;var fname=(od_platform=="html5")?"ecatalog5.php":"ecatalog.php";if(docu.substr(0,1)=="*"){fname="ecatalog5.php";docu=docu.substr(1);}
if(docu=="/")docu="";ecawin=window.open(docu+"/"+fname+"?Dir="+dir,wname,property);}
function get_divHtml(w,h,vars,alternate,surl){var s="";var addvars="&stgw="+w+"&stgh="+h;var classid="";s="<object id=\"cataSwf\" type=\"application/x-shockwave-flash\" data=\""+surl+"\">\n";s+="<param name=\"movie\" value=\""+surl+"\">\n";s+="<param name=\"FlashVars\" value=\""+vars+addvars+"\">\n";s+="<param name=\"quality\" value=\"high\">\n";s+="<param name=\"bgcolor\" value=\"#FFFFFF\">\n";s+="<param name=\"allowScriptAccess\" value=\"sameDomain\">\n";s+="<param name=\"allowFullScreen\" value=\"true\">\n";s+=alternate;s+="</object>\n";return s;}
function get_divHtml2(w,h,vars,alternate,surl){var s="";var addvars="&stgw="+w+"&stgh="+h;var classid="";if(navigator.appName.indexOf("Microsoft")!=-1){var ver=getInternetExplorerVersion();if(ver<10)classid="classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\"";}
s="<object id=\"cataSwf\" "+classid+" type=\"application/x-shockwave-flash\" data=\""+surl+"main.swf\" standby=\"catalog\" width=\"100%\" height=\"100%\">\n";s+="<param name=\"movie\" value=\""+surl+"main.swf\">\n";s+="<param name=\"FlashVars\" value=\""+vars+addvars+"\">\n";s+="<param name=\"quality\" value=\"high\">\n";s+="<param name=\"bgcolor\" value=\"#FFFFFF\">\n";s+="<param name=\"allowScriptAccess\" value=\"sameDomain\">\n";s+="<param name=\"allowFullScreen\" value=\"true\">\n";s+=alternate;s+="</object>\n";return s;}
function getInternetExplorerVersion(){var rv=-1;if(navigator.appName=='Microsoft Internet Explorer'){var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null)
rv=parseFloat(RegExp.$1);}
return rv;}
function newWindow(winSet,docu,width,height,left,top,winname){if(winSet==1)
property="toolbar=yes,location=no,directories=no,status=yes,menubar=no,resizable=no,scrollbars=yes,copyhistory=no,";else if(winSet==2)
property="toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,scrollbars=no,copyhistory=no,";else if(winSet==3)
property="toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,scrollbars=yes,copyhistory=no,";property+="width="+width+",height="+height+",left="+left+",top="+top;return window.open(docu,winname,property);}
function newLink(winSet,width,height,docu){var property;if(winSet==1){property="toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,scrollbars=no,copyhistory=no,";property+="width="+width+", height="+height+", left=1, top=1";window.open(docu,'',property);}
else{property="toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,scrollbars=yes,copyhistory=no,";property+="width="+width+", height="+height+", left=1, top=1";window.open(docu,'',property);}}
function simpleLink(docu,kd){if(kd==1)window.location=docu;else if(kd==2)parent.location=docu;else if(kd==3)window.open(docu,'');else if(kd==4)opener.location=docu;}
function trimVal(str){if(str=="")return"";var strsum="";var len=str.length;for(var i=0;i<len;i++){var Temp=str.charAt(i);if(Temp!=' '&&Temp!='\n'&&Temp!='\r')
strsum+=Temp;}
return strsum;}
function isNotnum(str){var len=str.length;for(var i=0;i<len;i++){var Jstr=str.charAt(i);if(Jstr<"0"||Jstr>"9")return true;}
return false;}
function numberFormat(num){var pattern=/(-?[0-9]+)([0-9]{3})/;while(pattern.test(num)){num=num.replace(pattern,"$1,$2");}
return num;}
function support_html5(){if(navigator.appVersion.indexOf("MSIE")!=-1)return false;if(!document.createElement("canvas").getContext)return false;return true;}
function support_svg(){var support=false
var img=document.createElement("img");img.setAttribute("src","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzUiIGhlaWdodD0iMjc1Ij48L3N2Zz4%3D");if(img.complete){img.style.visibility="hidden";img.style.position="absolute";document.body.appendChild(img);window.setTimeout(function(){document.body.removeChild(img);if(img.width>=100)support=true;},1);}
return support;}
function check_mobile(){var arm=get_machine();if(arm[1]=="s"||arm[1]=="t")return true;return false;}
function check_tablet(){var arm=get_machine();if(arm[1]=="s")return false;return true;}
function get_machine(){var armachine;if(navigator.userAgent.indexOf("iPad")!=-1)armachine=["i-Pad","t"];else if(navigator.userAgent.indexOf("SHW-M18")!=-1)armachine=["Galaxy Tab","t"];else if(navigator.userAgent.indexOf("SHW-M38")!=-1)armachine=["Galaxy Tab 10.1","t"];else if(navigator.userAgent.indexOf("SHV-E14")!=-1)armachine=["Galaxy Tab 8.9","t"];else if(navigator.userAgent.indexOf("SHV-E15")!=-1)armachine=["Galaxy Tab 7.7","t"];else if(navigator.userAgent.indexOf("SM-T")!=-1)armachine=["Galaxy Tab3 8.0","t"];else if(navigator.userAgent.indexOf("SHV-E23")!=-1||navigator.userAgent.indexOf("SHW-M48")!=-1||navigator.userAgent.indexOf("SM-P60")!=-1){armachine=["Galaxy Note 10.1","t"];}
else if(navigator.userAgent.indexOf("SHW-M50")!=-1)armachine=["Galaxy Note 8.0","t"];else if(navigator.userAgent.indexOf("MSIE")!=-1&&navigator.userAgent.indexOf("Touch")!=-1)armachine=["MS Surface","t"];else if(navigator.userAgent.indexOf("iPhone")!=-1)armachine=["i-Phone","s"];else if(navigator.userAgent.indexOf("Android")!=-1)armachine=["Android","s"];else armachine=["","d"];return armachine;}
function memberzone(n){alert('This page is for member only. Please sign in!');}
function redirect_cdmake(cdmakeNo,eclang){if(eclang==undefined)eclang="ko";if(check_mobile()===true){window.location="ecatalogm"+cdmakeNo+".html";return false;}
if(od_platform==="html5")return true;if(support_html5()===false){window.location="ecatalog"+cdmakeNo+".html";return false;}
return true;}
function redirect_html5(surl,eclang){if(eclang==undefined)eclang="ko";if(support_html5()===true)return true;if(od_platform==="html5"){if(eclang==="en")alert('This browser does not support HTML5. Please upgrade your browser or open in a browser support HTML5!');else alert('브라우저가 HTML5를 지원하지 않습니다. 브라우저를 업그레이드 하시거나 HTML5를 지원하는 브라우저를 사용하십시오.');return false;}
else if(od_platform==="both"){window.location=surl;return false;}
return true;}
function can_playFlashPlayer(reqMajorVer,reqMinorVer,reqRevision){var version="";if((isIE()&&isWin()&&!isOpera())||isIE11())version=get_activeXVer();else version=get_flashPlayerVer();if(version=="-1")return false;if(version.length>7&&version.substr(0,8)=="Debugger")return true;if(version!="0"){var versionArray;if(version.toLowerCase().indexOf("win")!=-1){var tempArray=version.split(" ");var tempString=tempArray[1];versionArray=tempString.split(",");}
else{versionArray=version.split(".");}
var versionMajor=parseInt(versionArray[0]);var versionMinor=parseInt(versionArray[1]);var versionRevision=parseInt(versionArray[2]);if(versionMajor>reqMajorVer)return true;else if(versionMajor==reqMajorVer){if(versionMinor>reqMinorVer)return true;else if(versionMinor==reqMinorVer){if(versionRevision>=reqRevision)return true;}}}
return false;}
function isIE(){if(navigator.appVersion.indexOf("MSIE")!=-1)return true;return false;}
function isIE11(){if(navigator.appName=="Netscape"){var ua=navigator.userAgent;var re=new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null)return true;}
return false;}
function isEdge(){if(/Edge\/12./i.test(navigator.userAgent))return true;return false;}
function isWin(){if(navigator.appVersion.toLowerCase().indexOf("win")!=-1)return true;return false;}
function isOpera(){if(navigator.userAgent.indexOf("Opera")!=-1)return true;return false;}
function get_flashPlayerVer(){var flashVer="-1";if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var swVer2=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";var flashDescription=navigator.plugins["Shockwave Flash"+swVer2].description;var descArray=flashDescription.split(" ");var tempArrayMajor=descArray[2].split(".");var versionMajor=tempArrayMajor[0];var versionMinor=tempArrayMajor[1];var versionRevision=descArray[3];if(versionRevision=="")versionRevision=descArray[4];if(versionRevision[0]=="d")versionRevision=versionRevision.substring(1);else if(versionRevision[0]=="r"){versionRevision=versionRevision.substring(1);if(versionRevision.indexOf("d")>0)versionRevision=versionRevision.substring(0,versionRevision.indexOf("d"));}
flashVer=versionMajor+"."+versionMinor+"."+versionRevision;}}
else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1)flashVer="4";else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1)flashVer="3";else if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1)flashVer="2";return flashVer;}
function get_activeXVer(){var flashVer;var axno,e;try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");flashVer=axo.GetVariable("$version");}
catch(e){}
if(!flashVer){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");flashVer="WIN 6,0,21,0";axo.AllowScriptAccess="sameDomain";flashVer=axo.GetVariable("$version");}
catch(e){}}
if(!flashVer){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");flashVer=axo.GetVariable("$version");}
catch(e){}}
if(!flashVer){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");flashVer="WIN 3,0,18,0";}
catch(e){}}
if(!flashVer){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");flashVer="WIN 2,0,0,11";}
catch(e){flashVer="-1";}}
return flashVer;}
