function Point(n1,n2){this.x=n1;this.y=n2;}
function Point3D(n1,n2,n3){this.x=n1;this.y=n2;this.z=n3;}
function Rectangle(n1,n2,n3,n4){this.x=n1;this.y=n2;this.width=n3;this.height=n4;this.right=n1+n3;this.bottom=n2+n4;this.centerPt=new Point(n1+Math.floor(n3/2),n2+Math.floor(n4/2));}
Rectangle.prototype.offset=function(n1,n2){this.x+=n1;this.y+=n2;this.right+=n1;this.bottom+=n2;this.centerPt=new Point(this.x+Math.floor(this.width/2),this.y+Math.floor(this.height/2));}
function memoObj(n10,n1,n2,s3,s4,s5,s6,n7,n8,s9){this.npage=n10;this.x=n1;this.y=n2;this.bgcol=s3;this.fnname=s4;this.fnsize=s5;this.fncolor=s6;this.cwidth=n7;this.cheight=n8;this.cont=s9;}
memoObj.prototype.toString=function(){var s=this.npage+"\t"+this.x+"\t"+this.y+"\t"+this.bgcol+"\t"+this.fnname+"\t"+this.fnsize+"\t"+this.fncolor+"\t"
+this.cwidth+"\t"+this.cheight+"\t"+this.cont.replace(/(\r\n|\n|\r)/g,"\\\\n");return s;}
function Polygon(){this.points=new Array();this.faces=0;this.boundRect=undefined;}
Polygon.prototype.set_coordinates=function(s,bool){var pointstr=s.replace(/ /gi,",").split(",");this.faces=pointstr.length;if(this.faces===4&&bool===true){this.points[0]=new Point(get_intval(pointstr[0]),get_intval(pointstr[1]));this.points[1]=new Point(get_intval(pointstr[0]),get_intval(pointstr[3]));this.points[2]=new Point(get_intval(pointstr[2]),get_intval(pointstr[3]));this.points[3]=new Point(get_intval(pointstr[2]),get_intval(pointstr[1]));}
else{var k=0;for(var i=0;i<this.faces;i+=2){this.points[k]=new Point(get_intval(pointstr[i]),get_intval(pointstr[i+1]));k++;}
this.faces=this.faces/2;}
if(bool===true)this.set_boundRect();}
Polygon.prototype.set_boundRect=function(){var x1=this.points[0].x;var y1=this.points[0].y;var x2=this.points[0].x;var y2=this.points[0].y;for(var i=1;i<this.faces;i++){if(x1>this.points[i].x)x1=this.points[i].x;if(y1>this.points[i].y)y1=this.points[i].y;if(x2<this.points[i].x)x2=this.points[i].x;if(y2<this.points[i].y)y2=this.points[i].y;}
this.boundRect=new Rectangle(x1,y1,x2-x1,y2-y1);}
Polygon.prototype.contain=function(rect){if(this.boundRect.x<=rect.x&&rect.x<=this.boundRect.right&&this.boundRect.y<=rect.y&&rect.y<=this.boundRect.bottom){if(this.boundRect.x<=rect.right&&rect.right<=this.boundRect.right&&this.boundRect.y<=rect.bottom&&rect.bottom<=this.boundRect.bottom){return true;}}
return false;}
function PagingCont(){this.startArticle=0;this.finalArticle=0;this.totalArticles=0;this.articlesOnPage=0;this.startPage=0;this.finalPage=0;this.currentPage=0;this.totalPages=0;this.pagesOnSheet=0;this.prevSheet=0;this.nextSheet=0;this.totalSheets=0;}
PagingCont.prototype.set_articlesOnPage=function(n){if(n!==-1)this.articlesOnPage=n;this.totalPages=Math.floor((this.totalArticles-1)/this.articlesOnPage)+1;}
PagingCont.prototype.set_pagesOnSheet=function(n){if(n!==-1)this.pagesOnSheet=n;this.totalSheets=Math.floor((this.totalPages-1)/this.pagesOnSheet)+1;}
PagingCont.prototype.set_currentPage=function(cn){if(cn===-1){if(this.currentPage>this.totalPages)this.currentPage=this.totalPages;}
else this.currentPage=cn;this.startArticle=(this.currentPage-1)*this.articlesOnPage;this.finalArticle=(this.currentPage==this.totalPages)?this.totalArticles-1:this.startArticle+this.articlesOnPage-1;var f=Math.floor((this.currentPage-1)/this.pagesOnSheet+1)*this.pagesOnSheet;this.startPage=f-this.pagesOnSheet+1;this.prevSheet=(f>this.pagesOnSheet)?f-this.pagesOnSheet:-1;if(f>=this.totalPages){this.finalPage=this.totalPages;this.nextSheet=-1;}
else{this.finalPage=f;this.nextSheet=f+1;}}
PagingCont.prototype.get_pageFromArticle=function(pno){return Math.floor((pno-1)/this.articlesOnPage)+1;}
PagingCont.prototype.get_articleFromPage=function(pno){return this.articlesOnPage*(pno-1);}
PagingCont.prototype.is_lastPage=function(){if(this.currentPage===this.totalPages)return true;return false;}
PagingCont.prototype.contain_article=function(pno){if(this.startArticle<=(pno-1)&&pno<=(this.finalArticle+1))return true;return false;}
PagingCont.prototype.contain_page=function(pno){if(this.startPage<=pno&&pno<=this.finalPage)return true;return false;}
function PagingContCabinet(n1,n2){this.startArticle=0;this.finalArticle=0;this.totalArticles=0;this.articlesOnPage=n1;this.startidx=0;this.finalidx=0;this.mainidx=n2;this.targetArticle=0;this.loadArticle=0;}
PagingContCabinet.prototype.set_startArticle=function(n){this.startArticle=n-this.mainidx;this.startidx=1;if(this.startArticle<0){this.startidx=Math.abs(this.startArticle)+1;this.startArticle=0;}
this.finalidx=this.articlesOnPage;this.finalArticle=this.startArticle+this.articlesOnPage-this.startidx;if(this.finalArticle>this.totalArticles-1){this.finalidx=this.articlesOnPage-this.finalArticle+this.totalArticles-1;this.finalArticle=this.totalArticles-1;}}
PagingContCabinet.prototype.get_jumpContinueNext=function(){if(this.targetArticle-this.finalArticle>10)return true;return false;}
PagingContCabinet.prototype.get_jumpContinuePrev=function(){if(this.startArticle-this.targetArticle>10)return true;return false;}
PagingContCabinet.prototype.set_targetArticle=function(pno){this.targetArticle=pno-1;}
PagingContCabinet.prototype.get_reachTarget=function(){if(this.get_mainArticle()==this.targetArticle)return true;return false;}
PagingContCabinet.prototype.get_mainArticle=function(){return(this.startArticle+this.mainidx-this.startidx);}
PagingContCabinet.prototype.get_mainPage=function(){return(this.get_mainArticle()+1);}
PagingContCabinet.prototype.get_idxFromPage=function(pno){return(this.startidx+pno-1-this.startArticle);}
PagingContCabinet.prototype.contain_finalArticle=function(){if(this.finalArticle===this.totalArticles-1)return true;return false;}
PagingContCabinet.prototype.contain_startArticle=function(){if(this.startArticle===0)return true;return false;}
function PagingContThumb(n1,n2){this.startArticle=0;this.finalArticle=0;this.totalArticles=n2;this.articlesOnPage=n1;this.currentArticle=0;this.targetArticle=0;this.loadArticle=0;}
PagingContThumb.prototype.set_startArticle=function(ano){this.startArticle=ano;if(this.startArticle<0)this.startArticle=0;this.finalArticle=this.startArticle+this.articlesOnPage-1;if(this.finalArticle>this.totalArticles-1){this.finalArticle=this.totalArticles-1;this.startArticle=this.finalArticle-this.articlesOnPage+1;if(this.startArticle<0)this.startArticle=0;}}
PagingContThumb.prototype.set_targetArticle=function(ano){this.targetArticle=ano;if(this.targetArticle<0){this.targetArticle=0;}
else if(this.targetArticle>this.totalArticles-this.articlesOnPage){this.targetArticle=this.totalArticles-this.articlesOnPage;}}
PagingContThumb.prototype.inc_loadart=function(){this.loadArticle++;}
PagingContThumb.prototype.dec_loadart=function(){this.loadArticle--;}
PagingContThumb.prototype.contain_startArticle=function(){if(this.startArticle===0)return true;return false;}
PagingContThumb.prototype.contain_finalArticle=function(){if(this.finalArticle==this.totalArticles-1)return true;return false;}
PagingContThumb.prototype.get_article1FromPage=function(pno){return this.articlesOnPage*(pno-1);}
PagingContThumb.prototype.contain_article=function(pno){if(pno<1)pno=1;if(this.startArticle<=(pno-1)&&pno<=(this.finalArticle+1))return true;return false;}
PagingContThumb.prototype.estimate_range=function(pno){var retarray=[];var start=this.startArticle;var ano=pno-1;if(ano>this.finalArticle){while(ano>(start+this.articlesOnPage-1)){start+=this.articlesOnPage;}
var final=start+this.articlesOnPage-1;if(final>=this.totalArticles-1)final=this.totalArticles-1;retarray=[start+1,final+1];}
else if(ano<this.startArticle){while(ano<start){start-=this.articlesOnPage;}
if(start<=0)start=0;retarray=[start+1,start+this.articlesOnPage];}
else{retarray=[this.startArticle+1,this.finalArticle+1];}
return retarray;}
function PagingWidgetCont(n1,n2){this.startArticle=0;this.finalArticle=0;this.totalArticles=n2;this.articlesOnPage=n1;this.currentArticle=0;this.totalPages=0;this.totalCircles=0;this.totalPages=Math.floor((this.totalArticles-1)/this.articlesOnPage)+1;}
PagingWidgetCont.prototype.set_currentPage=function(cn){this.currentPage=cn;this.startArticle=(this.currentPage-1)*this.articlesOnPage;this.finalArticle=(this.currentPage===this.totalPages)?this.totalArticles-1:this.startArticle+this.articlesOnPage-1;}
PagingWidgetCont.prototype.get_pageFromArticle=function(pno){return Math.floor((pno-1)/this.articlesOnPage)+1;}
function IconObj(o1,o2,n3,n4,b5,n6,n7,n8){this.iconDiv=o1;this.iconImage=o2;this.unitidx=n3;this.polyidx=n4;this.lr=b5;this.nkd=n6;this.nwidth=n7;this.nheight=n8;}
function LinkUnit(n){this.lr=true;this.pointer=n;this.ruleKind=0;this.shapePtr=-1;this.realObj=undefined;this.head="";this.head2="";this.rule="";this.fname="";this.option1="";this.callDevice="";}
LinkUnit.prototype.set_linkvar=function(s){var arhead=LinkInfo.get_headnruleFromRule(s);this.head=arhead[0];this.rule=arhead[1];this.head2="";var idx;if(this.head==="[ico]"||this.head==="[swi]"||this.head==="[sws]"){idx=this.rule.indexOf("]");if(idx<0)this.fname="";else this.fname=this.rule.substr(1,idx-1);var arhead2=LinkInfo.get_headnruleFromRule(this.rule.substr(idx+1));this.head2=arhead2[0];this.rule=arhead2[1];this.ruleKind=1;}
this.option1="";idx=this.rule.indexOf("]");if(idx>-1){this.option1=this.rule.substr(0,idx+1);this.rule=this.rule.substr(idx+1);}}
LinkUnit.prototype.get_actHead=function(){if(this.head=="[ico]")return this.head2;return this.head;}
LinkUnit.prototype.get_actRule=function(){var ars=[];var idx=this.rule.indexOf("||");if(idx===-1)ars.push(this.rule);else ars=this.rule.split("||");return ars;}
LinkUnit.prototype.get_entireRule=function(){return(this.head+this.head2+this.option1+this.rule);}
function get_suitDimen(ow,oh,tw,th){var ardim=[ow,oh];if(ow>tw){ardim[0]=tw,ardim[1]=tw*oh/ow;if(ardim[1]>th){ardim[1]=th;ardim[0]=th*ow/oh;}}
else if(oh>th){ardim[1]=th,ardim[0]=th*ow/oh;if(ardim[0]>tw){ardim[0]=tw;ardim[1]=tw*oh/ow;}}
return ardim;}
function get_fileExtension(s){if(!s)return"jpg";if(s==="s"||s==="S")return"swf";else if(s==="g"||s==="G")return"gif";else if(s==="p"||s==="P")return"png";return"jpg";}
function digit3(n){if(n<10)return"00"+n;else if(n<100)return"0"+n;return""+n;}
function remove_frtZero(s){if(s==undefined||s==="")return"";var pattern=/^[0s]*/;return s.replace(pattern,"");}
function get_extension(s){if(s==undefined||s==="")return"";var idx=s.lastIndexOf(".");if(idx==-1)return"";return s.substr(idx+1);}
function get_minusExtension(s){if(s==undefined||s==="")return"";var idx=s.lastIndexOf(".");if(idx==-1)return"";return s.substr(0,idx);}
function get_intval(s){if(s==null||s==="")return 0;return parseInt(s);}
function repeat_string(s,n){var a=[];while(a.length<n){a.push(s);}
return a.join('');}
function get_radFromdeg(degrees){return degrees*Math.PI/180;}
function get_degFromRad(rad){return rad*180/Math.PI;}
function base64_decode(s){var keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;s=s.replace(/[^A-Za-z0-9\+\/\=]/g,"");var alen=s.length;while(i<alen){enc1=keyStr.indexOf(s.charAt(i++));enc2=keyStr.indexOf(s.charAt(i++));enc3=keyStr.indexOf(s.charAt(i++));enc4=keyStr.indexOf(s.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64)output=output+String.fromCharCode(chr2);if(enc4!=64)output=output+String.fromCharCode(chr3);}
return output;}
function license_decode(s){var strnum=base64_decode(s);var arnum=strnum.split(" ");var output="";var alen=arnum.length;for(var i=0;i<alen;i++){output+=String.fromCharCode(arnum[i]);}
return output;}
function rc4_decode(skey,arbyte){var s=[];for(var i=0;i<256;i++){s[i]=i;}
var j=0,t;var alen=skey.length;for(i=0;i<256;i++){j=(j+s[i]+skey.charCodeAt(i%alen))%256;t=s[i];s[i]=s[j];s[j]=t;}
alen=arbyte.length;var ar=new Uint8Array(alen);i=0,j=0;for(var k=0;k<alen;k++){i=(i+1)%256;j=(j+s[i])%256;t=s[i];s[i]=s[j];s[j]=t;ar[k]=arbyte[k]^s[(s[i]+s[j])%256];}
return ar;}
function get_sentence(eclang,skd,s1){if(eclang==="en")return get_sentenceEn(skd,s1);return get_sentenceKo(skd,s1);}
function get_sentenceKo(skd,s1){if(skd==="page")return"페이지";else if(skd==="enprint")return"확대상태에서 인쇄하실 수 있습니다.";else if(skd==="searchword")return"검색에 허용되지 않는 문자가 있습니다!";else if(skd==="fullscr")return"전체화면으로 보기";else if(skd==="closew")return"창닫기";else if(skd==="lastpage")return"마지막 페이지입니다.";else if(skd==="firstpage")return"처음 페이지입니다.";else if(skd==="copied")return"복사되었습니다.";return skd;}
function get_sentenceEn(skd,s1){if(skd==="page")return"page";else if(skd==="enprint")return"Printer is available in enlarged state.";else if(skd==="searchword")return"The search words have characters not allowed!";else if(skd==="fullscr")return"Full Screen Mode";else if(skd==="closew")return"Close Window";else if(skd==="lastpage")return"It is the last page.";else if(skd==="firstpage")return"It is the first page.";else if(skd==="copied")return"It is copied.";return skd;}
