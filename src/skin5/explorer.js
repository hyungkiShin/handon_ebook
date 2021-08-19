var exp_rootidx="0000000000";var expDiv,exp_openImgsrc,exp_closeImgsrc,exp_nonImgsrc;var expChild=new Array();var expData=new Array();var expView=new Array();var expSplit=0;var expCurrCode="";var webServer="..";var skin5Server=".";var IDPREFIX="ed_";function exp_initVar(iview){exp_nonImgsrc=skin5Server+"/etc/mark-none.png";if(iview==="m"){exp_openImgsrc=skin5Server+"/etc/m_mark-open.png";exp_closeImgsrc=skin5Server+"/etc/m_mark-close.png";}
else if(iview==="d2"){exp_openImgsrc=skin5Server+"/etc/mark-open-g.png";exp_closeImgsrc=skin5Server+"/etc/mark-close-g.png";}
else{exp_openImgsrc=skin5Server+"/etc/mark-open.png";exp_closeImgsrc=skin5Server+"/etc/mark-close.png";}}
function exp_showOpening(skd){var arcate=expChild[exp_rootidx];if(skd==="expall")exp_setAllExpand(exp_rootidx);else if(skd==="expcur")exp_setCurrExpand(expCurrCode);var s="";var expandCate=new Array();var ncode,tcode,ncond;var alen=arcate.length;for(var i=0;i<alen;i++){tcode=arcate[i];ncond=0;if(expChild[tcode]==undefined){ncond=2;}
else if(expView[tcode]==true){ncond=1;expandCate.push(tcode);}
s+=exp_getChildHtml(ncond,tcode,0);}
expDiv.innerHTML=s;alen=expandCate.length;for(i=0;i<alen;i++){exp_showChild(expandCate[i]);}}
function exp_setAllExpand(tcate){if(expChild[tcate]==undefined)return;var tcode;var arcate=expChild[tcate];for(var i=0;i<arcate.length;i++){tcode=arcate[i];expView[tcode]=true;exp_setAllExpand(tcode);}}
function exp_setCurrExpand(tcate){var nstep=p.PageInfo.get_currentStep(tcate);if(nstep<1)return;var tcode;for(var i=nstep;i>=1;i--){tcode=tcate.substr(0,i*2)+"0000000000".substr(0,10-i*2);expView[tcode]=true;}}
function explist_showOpening(){var s="";var alen=expView.length;for(var i=0;i<alen;i++){s+=explist_getChildHtml(IDPREFIX+i,expView[i],expData[i]);}
expDiv.innerHTML=s;}
function exp_markClick(tcate){var currid="ed_"+tcate;if(document.getElementById(currid)==undefined)return;var clickdiv=document.getElementById(currid);var scond=clickdiv.getAttribute('data-cond');if(scond=="2")return;var imgcol=clickdiv.getElementsByTagName("img")[0];if(scond=="0"){imgcol.src=exp_openImgsrc;exp_showChild(tcate);clickdiv.setAttribute("data-cond","1");}
else if(scond=="1"){imgcol.src=exp_closeImgsrc;exp_hideChild(tcate);clickdiv.setAttribute("data-cond","0");}}
function exp_showChild(tcate){var currid=IDPREFIX+tcate;if(document.getElementById(currid)==undefined)return;var clickdiv=document.getElementById(currid);var nstep=parseInt(clickdiv.getAttribute('data-step'))+1;var arcate=expChild[tcate];var expandCate=new Array();var s="";var ncond,newid,tcode;var alen=arcate.length;for(var i=0;i<alen;i++){tcode=arcate[i];ncond=2;if(expChild[tcode]){ncond=0;if(expView[tcode]===true){ncond=1;expandCate.push(tcode);}}
s+=exp_getChildHtml(ncond,tcode,nstep);}
clickdiv.insertAdjacentHTML('afterend',s);alen=expandCate.length;for(i=0;i<alen;i++){exp_showChild(expandCate[i]);}}
function exp_hideChild(tcate){var arcate=expChild[tcate];var tcode,newid;for(var i=0;i<arcate.length;i++){tcode=arcate[i];newid=IDPREFIX+tcode;if(document.getElementById(newid).getAttribute("data-cond")=="1")exp_hideChild(tcode);document.getElementById(newid).outerHTML="";}
expView[tcate]=false;}
function exp_getChildHtml(ncond,tcate,nstep){var aaa=exp_getPairData(expData[tcate]);var acname="";if(tcate===expCurrCode)acname="-curr";var newid=IDPREFIX+tcate;var s="";if(incview==="m"){s="<div id='"+newid+"' class='exp_div5m exp_div5m-step"+nstep+"' data-cate='"+tcate+"' data-cond='"+ncond+"' data-step='"+nstep+"'>";if(ncond===0){s+="<a href=\"javascript:exp_markClick('"+tcate+"');\"><img class='exp_div_img5m' "
+"src='"+exp_closeImgsrc+"' width='6' height='6' alt=''>"
+"<span class='exp_div_span5m"+acname+" exp_div_span-cond0'>"+aaa[1]+"</span></a>\n";}
else if(ncond===1){s+="<a href=\"javascript:exp_markClick('"+tcate+"');\"><img class='exp_div_img5m' "
+"src='"+exp_openImgsrc+"' width='6' height='6' alt=''>"
+"<span class='exp_div_span5m"+acname+" exp_div_span-cond0'>"+aaa[1]+"</span></a>\n";}
else{s+="<a href=\"javascript:exp_itemClick('"+aaa[0]+"',this);\"><span class='exp_div_span5m"+acname+" exp_div_span-cond2'>"+aaa[1]+"</span></a>\n";}
}
else if(incview==="d"){s="<div id='"+newid+"' class='exp_div5d exp_div5d-step"+nstep+"' data-cate='"+tcate+"' data-cond='"+ncond+"' data-step='"+nstep+"'>";if(ncond===0)s+="<a href=\"javascript:exp_markClick('"+tcate+"');\"><img class='exp_div_img5d' src='"+exp_closeImgsrc+"' width='9' height='9' alt=''></a>";else if(ncond===1)s+="<a href=\"javascript:exp_markClick('"+tcate+"');\"><img class='exp_div_img5d' src='"+exp_openImgsrc+"' width='9' height='9' alt=''></a>";else if(ncond===2)s+="<img class='exp_div_img5d' src='"+exp_nonImgsrc+"' width='9' height='9' alt=''>";s+="<a href=\"javascript:exp_itemClick('"+aaa[0]+"',this)\"><span class='exp_div_span5d"+acname+"' "
+"onmouseover=\"this.className='exp_div_span5d"+acname+" exp_div_span-over';\" "
+"onmouseout=\"this.className='exp_div_span5d"+acname+"';\">"+aaa[1]+"</span></a>";}
s+="</div>\n";return s;}
function exp_getPairData(s){var aaa=["",""];if(expSplit===0){aaa=s.split(":");}
else if(expSplit===1){var bbb=s.split("|");return[bbb[0],bbb[2]];}
return aaa;}
function explist_getChildHtml(newid,tview,tdata){var acname="";if(tdata===expCurrCode)acname="-curr";var s="";if(incview==="m"){s="<div id='"+newid+"' class='exp_div5m exp_div5m-step0'>"
+"<span class='exp_div_span5m"+acname+" exp_div_span-cond2'>"+tview+"</span></a>\n"
+"<p class='exp_div_p'><a href=\"javascript:exp_itemClick('"+tdata+"',this);\"><img "
+"src='"+skin5Server+"/etc/m_linkgo.png' alt='' width='20' height='20'></a></p>";}
else if(incview==="d"){s="<div id='"+newid+"' class='exp_div5d exp_div5d-step0'>";+"<a href=\"javascript:exp_itemClick('"+tdata+"',this)\"><span class='exp_div_span5d"+acname+"' "
+"onmouseover=\"this.className='exp_div_span5d"+acname+" exp_div_span-over';\" "
+"onmouseout=\"this.className='exp_div_span5d"+acname+"';\">"+tview+"</span></a>";}
s+="</div>\n";return s;}
