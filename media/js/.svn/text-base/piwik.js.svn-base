var _ubd=document,_udl=_ubd.location,_ur="-",_ubn=navigator,_ua=_ubn.userAgent;
_ur=_ubd.referrer;

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(_ua)
			|| this.searchVersion(_ubn.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1) {
				    return data[i].identity;
				}
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		// for browser
		{
			string: _ua,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: _ua,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: _ubn.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: _ubn.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: _ubn.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: _ua,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: _ubn.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: _ua,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: _ua,
			subString: "MSIE",
			identity: "MSIE",
			versionSearch: "MSIE"
		},
		{
			string: _ua,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: _ua,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: _ua,
			subString: "Windows NT 6.1",
			identity: "Windows 7"
		},
		{
			string: _ua,
			subString: "Windows NT 6.0",
			identity: "Windows Vista"
		},
		{
			string: _ua,
			subString: "Windows NT 5.2",
			identity: "Windows Server 2003"
		},
		{
			string: _ua,
			subString: "Windows NT 5.1",
			identity: "Windows XP"
		},
		{
			string: _ua,
			subString: "Windows NT 5.0",
			identity: "Windows 2000"
		},
		{
			string: _ua,
			subString: "Windows NT 4.0",
			identity: "Windows NT 4"
		},
		{
			string: _ua,
			subString: "Windows 98",
			identity: "Windows 98"
		},
		{
			string: _ua,
			subString: "Windows NT",
			identity: "Windows NT"
		},
		{
			string: _ua,
			subString: "Windows 95",
			identity: "Windows 95"
		},
		{
			string: _ubn.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: _ua,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: _ubn.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

/*
Copyright (c) Copyright (c) 2007, Carl S. Yestrau All rights reserved.
Code licensed under the BSD License: http://www.featureblend.com/license.txt
Version: 1.0.4
*/
var FlashDetect = new function(){
    var self = this;
    self.installed = false;
    self.raw = "";
    self.major = -1;
    self.minor = -1;
    self.revision = -1;
    self.revisionStr = "";
    var activeXDetectRules = [
        {
            "name":"ShockwaveFlash.ShockwaveFlash.7",
            "version":function(obj){
                return getActiveXVersion(obj);
            }
        },
        {
            "name":"ShockwaveFlash.ShockwaveFlash.6",
            "version":function(obj){
                var version = "6,0,21";
                try{
                    obj.AllowScriptAccess = "always";
                    version = getActiveXVersion(obj);
                }catch(err){}
                return version;
            }
        },
        {
            "name":"ShockwaveFlash.ShockwaveFlash",
            "version":function(obj){
                return getActiveXVersion(obj);
            }
        }
    ];
    /**
     * Extract the ActiveX version of the plugin.
     * 
     * @param {Object} The flash ActiveX object.
     * @type String
     */
    var getActiveXVersion = function(activeXObj){
        var version = -1;
        try{
            version = activeXObj.GetVariable("$version");
        }catch(err){}
        return version;
    };
    /**
     * Try and retrieve an ActiveX object having a specified name.
     * 
     * @param {String} name The ActiveX object name lookup.
     * @return One of ActiveX object or a simple object having an attribute of activeXError with a value of true.
     * @type Object
     */
    var getActiveXObject = function(name){
        var obj = -1;
        try{
            obj = new ActiveXObject(name);
        }catch(err){
            obj = {activeXError:true};
        }
        return obj;
    };
    /**
     * Parse an ActiveX $version string into an object.
     * 
     * @param {String} str The ActiveX Object GetVariable($version) return value. 
     * @return An object having raw, major, minor, revision and revisionStr attributes.
     * @type Object
     */
    var parseActiveXVersion = function(str){
        var versionArray = str.split(",");//replace with regex
        return {
            "raw":str,
            "major":parseInt(versionArray[0].split(" ")[1], 10),
            "minor":parseInt(versionArray[1], 10),
            "revision":parseInt(versionArray[2], 10),
            "revisionStr":versionArray[2]
        };
    };
    /**
     * Parse a standard enabledPlugin.description into an object.
     * 
     * @param {String} str The enabledPlugin.description value.
     * @return An object having raw, major, minor, revision and revisionStr attributes.
     * @type Object
     */
    var parseStandardVersion = function(str){
        var descParts = str.split(/ +/);
        var majorMinor = descParts[2].split(/\./);
        var revisionStr = descParts[3];
        return {
            "raw":str,
            "major":parseInt(majorMinor[0], 10),
            "minor":parseInt(majorMinor[1], 10), 
            "revisionStr":revisionStr,
            "revision":parseRevisionStrToInt(revisionStr)
        };
    };
    /**
     * Parse the plugin revision string into an integer.
     * 
     * @param {String} The revision in string format.
     * @type Number
     */
    var parseRevisionStrToInt = function(str){
        return parseInt(str.replace(/[a-zA-Z]/g, ""), 10) || self.revision;
    };
    /**
     * Is the major version greater than or equal to a specified version.
     * 
     * @param {Number} version The minimum required major version.
     * @type Boolean
     */
    self.majorAtLeast = function(version){
        return self.major >= version;
    };
    /**
     * Is the minor version greater than or equal to a specified version.
     * 
     * @param {Number} version The minimum required minor version.
     * @type Boolean
     */
    self.minorAtLeast = function(version){
        return self.minor >= version;
    };
    /**
     * Is the revision version greater than or equal to a specified version.
     * 
     * @param {Number} version The minimum required revision version.
     * @type Boolean
     */
    self.revisionAtLeast = function(version){
        return self.revision >= version;
    };
    /**
     * Is the version greater than or equal to a specified major, minor and revision.
     * 
     * @param {Number} major The minimum required major version.
     * @param {Number} (Optional) minor The minimum required minor version.
     * @param {Number} (Optional) revision The minimum required revision version.
     * @type Boolean
     */
    self.versionAtLeast = function(major){
        var properties = [self.major, self.minor, self.revision];
        var len = Math.min(properties.length, arguments.length);
        for(i=0; i<len; i++){
            if(properties[i]>=arguments[i]){
                if(i+1<len && properties[i]==arguments[i]){
                    continue;
                }else{
                    return true;
                }
            }else{
                return false;
            }
        }
    };
    /**
     * Constructor, sets raw, major, minor, revisionStr, revision and installed public properties.
     */
    self.FlashDetect = function(){
        if(navigator.plugins && navigator.plugins.length>0){
            var type = 'application/x-shockwave-flash';
            var mimeTypes = navigator.mimeTypes;
            if(mimeTypes && mimeTypes[type] && mimeTypes[type].enabledPlugin && mimeTypes[type].enabledPlugin.description){
                var version = mimeTypes[type].enabledPlugin.description;
                var versionObj = parseStandardVersion(version);
                self.raw = versionObj.raw;
                self.major = versionObj.major;
                self.minor = versionObj.minor; 
                self.revisionStr = versionObj.revisionStr;
                self.revision = versionObj.revision;
                self.installed = true;
            }
        }else if(navigator.appVersion.indexOf("Mac")==-1 && window.execScript){
            var version = -1;
            for(var i=0; i<activeXDetectRules.length && version==-1; i++){
                var obj = getActiveXObject(activeXDetectRules[i].name);
                if(!obj.activeXError){
                    self.installed = true;
                    version = activeXDetectRules[i].version(obj);
                    if(version!=-1){
                        var versionObj = parseActiveXVersion(version);
                        self.raw = versionObj.raw;
                        self.major = versionObj.major;
                        self.minor = versionObj.minor; 
                        self.revision = versionObj.revision;
                        self.revisionStr = versionObj.revisionStr;
                    }
                }
            }
        }
    }();
};
FlashDetect.JS_RELEASE = "1.0.4";

//-- Auto/Organic Sources and Keywords
var _uOsr=new Array();
var _uOkw=new Array();
_uOsr[0]="google";	_uOkw[0]="q";
_uOsr[1]="yahoo";	_uOkw[1]="p";
_uOsr[2]="msn";		_uOkw[2]="q";
_uOsr[3]="aol";		_uOkw[3]="query";
_uOsr[4]="aol";		_uOkw[4]="encquery";
_uOsr[5]="lycos";	_uOkw[5]="query";
_uOsr[6]="ask";		_uOkw[6]="q";
_uOsr[7]="altavista";	_uOkw[7]="q";
_uOsr[8]="netscape";	_uOkw[8]="query";
_uOsr[9]="cnn";	_uOkw[9]="query";
_uOsr[10]="looksmart";	_uOkw[10]="qt";
_uOsr[11]="about";	_uOkw[11]="terms";
_uOsr[12]="mamma";	_uOkw[12]="query";
_uOsr[13]="alltheweb";	_uOkw[13]="q";
_uOsr[14]="gigablast";	_uOkw[14]="q";
_uOsr[15]="voila";	_uOkw[15]="rdata";
_uOsr[16]="virgilio";	_uOkw[16]="qs";
_uOsr[17]="live";	_uOkw[17]="q";
_uOsr[18]="baidu";	_uOkw[18]="wd";
_uOsr[19]="alice";	_uOkw[19]="qs";
_uOsr[20]="yandex";	_uOkw[20]="text";
_uOsr[21]="najdi";	_uOkw[21]="q";
_uOsr[22]="aol";	_uOkw[22]="q";
_uOsr[23]="club-internet"; _uOkw[23]="query";
_uOsr[24]="mama";	_uOkw[24]="query";
_uOsr[25]="seznam";	_uOkw[25]="q";
_uOsr[26]="search";	_uOkw[26]="q";
_uOsr[27]="wp";	_uOkw[27]="szukaj";
_uOsr[28]="onet";	_uOkw[28]="qt";
_uOsr[29]="netsprint";	_uOkw[29]="q";
_uOsr[30]="google.interia";	_uOkw[30]="q";
_uOsr[31]="szukacz";	_uOkw[31]="q";
_uOsr[32]="yam";	_uOkw[32]="k";
_uOsr[33]="pchome";	_uOkw[33]="q";
_uOsr[34]="kvasir";	_uOkw[34]="searchExpr";
_uOsr[35]="sesam";	_uOkw[35]="q";
_uOsr[36]="ozu"; _uOkw[36]="q";
_uOsr[37]="terra"; _uOkw[37]="query";
_uOsr[38]="nostrum"; _uOkw[38]="query";
_uOsr[39]="mynet"; _uOkw[39]="q";
_uOsr[40]="ekolay"; _uOkw[40]="q";
_uOsr[41]="search.ilse"; _uOkw[41]="search_for";

//-- Auto/Organic Keywords to Ignore
var _uOno=new Array();
//_uOno[0]="urchin";
//_uOno[1]="urchin.com";
//_uOno[2]="www.urchin.com";

//-- Referral domains to Ignore
var _uRno=new Array();
//_uRno[0]=".urchin.com";

function _uRef() {
 if (_ur=="0" || _ur=="" || _ur=="-") return "";
 var i=0,h,k,n;
 if ((i=_ur.indexOf("://"))<0 ) return "";
 h=_ur.substring(i+3,_ur.length);
 if (h.indexOf("/") > -1) {
  k=h.substring(h.indexOf("/"),h.length);
  if (k.indexOf("?") > -1) k=k.substring(0,k.indexOf("?"));
  h=h.substring(0,h.indexOf("/"));
 }
 h=h.toLowerCase();
 n=h;
 if ((i=n.indexOf(":")) > -1) n=n.substring(0,i);
 for (var ii=0;ii<_uRno.length;ii++) {
  if ((i=n.indexOf(_uRno[ii].toLowerCase())) > -1 && n.length==(i+_uRno[ii].length)) { _ufno=1; break; }
 }
 if (h.indexOf("www.")==0) h=h.substring(4,h.length);
 return "utmccn=(referral)|utmcsr="+_uEC(h)+"|"+"utmcct="+_uEC(k)+"|utmcmd=referral";
}
function _uOrg(t) {
 if (_ur=="0" || _ur=="" || _ur=="-") return "";
 var i=0,h,k;
 if ((i=_ur.indexOf("://"))<0 ) return "";
 h=_ur.substring(i+3,_ur.length);
 if (h.indexOf("/") > -1) {
  f=h.substring(h.indexOf("/")+1,h.length);
  h=h.substring(0,h.indexOf("/"));
 }
 for (var ii=0;ii<_uOsr.length;ii++) {
  if (h.toLowerCase().indexOf(_uOsr[ii].toLowerCase()) > -1) {
   if ((i=_ur.indexOf("?"+_uOkw[ii]+"=")) > -1 || (i=_ur.indexOf("&"+_uOkw[ii]+"=")) > -1) {
    k=_ur.substring(i+_uOkw[ii].length+2,_ur.length);
    if ((i=k.indexOf("&")) > -1) k=k.substring(0,i);
    for (var yy=0;yy<_uOno.length;yy++) {
     if (_uOno[yy].toLowerCase()==k.toLowerCase()) { _ufno=1; break; }
    }
    if (t) return _uEC(k);
    else return "&se="+_uEC(_uOsr[ii])+"&kw="+_uEC(k);
   }
  }
 }
 return "&rp="+_uEC(f)+"&rh="+h;
}
function _uGCse() {
 var h,p;
 h=p=_ur.split("://")[1];
 if(h.indexOf("/")>-1) {
  h=h.split("/")[0];
  p=p.substring(p.indexOf("/")+1,p.length);
 }
 if(p.indexOf("?")>-1) {
  p=p.split("?")[0];
 }
 if(h.toLowerCase().indexOf("google")>-1) {
  if(_ur.indexOf("?q=")>-1 || _ur.indexOf("&q=")>-1) {
   if (p.toLowerCase().indexOf("cse")>-1) {
    return true;
   }
  }
 }
}
function _uBInfo() {
 var sr="-",sc="-",ul="-",fl="-",cs="-",je=1;
 var n=_ubn;
 if (self.screen) {
  sr=screen.width+"x"+screen.height;
  sc=screen.colorDepth+"-bit";
 } else if (self.java) {
  var j=java.awt.Toolkit.getDefaultToolkit();
  var s=j.getScreenSize();
  sr=s.width+"x"+s.height;
 }
 if (n.language) { ul=n.language.toLowerCase(); }
 else if (n.browserLanguage) { ul=n.browserLanguage.toLowerCase(); }
 je=n.javaEnabled()?1:0;
 if (_uflash) fl=_uFlash();
 if (_ubd.characterSet) cs=_uES(_ubd.characterSet);
 else if (_ubd.charset) cs=_uES(_ubd.charset);
 return "&utmcs="+cs+"&utmsr="+sr+"&utmsc="+sc+"&utmul="+ul+"&utmje="+je+"&utmfl="+fl;
}

function _uFixA(c,s,t) {
 if (!c || c=="" || !s || s=="" || !t || t=="") return "-";
 var a=_uGC(c,"__utma="+_udh+".",s);
 var lt=0,i=0;
 if ((i=a.lastIndexOf(".")) > 9) {
  _uns=a.substring(i+1,a.length);
  _uns=(_uns*1)+1;
  a=a.substring(0,i);
  if ((i=a.lastIndexOf(".")) > 7) {
   lt=a.substring(i+1,a.length);
   a=a.substring(0,i);
  }
  if ((i=a.lastIndexOf(".")) > 5) {
   a=a.substring(0,i);
  }
  a+="."+lt+"."+t+"."+_uns;
 }
 return a;
}
function _uTrim(s) {
  if (!s || s=="") return "";
  while ((s.charAt(0)==' ') || (s.charAt(0)=='\n') || (s.charAt(0,1)=='\r')) s=s.substring(1,s.length);
  while ((s.charAt(s.length-1)==' ') || (s.charAt(s.length-1)=='\n') || (s.charAt(s.length-1)=='\r')) s=s.substring(0,s.length-1);
  return s;
}
function _uEC(s) {
  var n="";
  if (!s || s=="") return "";
  for (var i=0;i<s.length;i++) {if (s.charAt(i)==" ") n+="+"; else n+=s.charAt(i);}
  return n;
}
function _uIN(n) {
 if (!n) return false;
 for (var i=0;i<n.length;i++) {
  var c=n.charAt(i);
  if ((c<"0" || c>"9") && (c!=".")) return false;
 }
 return true;
}
function _uES(s,u) {
 if (typeof(encodeURIComponent) == 'function') {
  if (u) return encodeURI(s);
  else return encodeURIComponent(s);
 } else {
  return escape(s);
 }
}
function _uUES(s) {
 if (typeof(decodeURIComponent) == 'function') {
  return decodeURIComponent(s);
 } else {
  return unescape(s);
 }
}

// Web analytics by Piwik - http://piwik.org
// Copyleft 2007, All rights reversed.
var _pk_use_title_as_name = 0;
var _pk_install_tracker = 1;
var _pk_tracker_pause = 500;
var _pk_download_extensions = "7z|aac|avi|csv|doc|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xml|zip";

// Beginning script
function _pk_plug_normal(_pk_pl) {
	if (_pk_tm.indexOf(_pk_pl) != -1 && (_ubn.mimeTypes[_pk_pl].enabledPlugin != null)) 
		return '1';
	return '0';
}

function _pk_plug_ie(_pk_pl)
{
	pk_found = false;
	_ubd.write('<SCR' + 'IPT LANGUAGE=VBScript>\n on error resume next \n pk_found = IsObject(CreateObject("' + _pk_pl + '")) </SCR' + 'IPT>\n');
	if (pk_found) return '1';
	return '0';
}

var _pk_jav = '0'; if(_ubn.javaEnabled()) _pk_jav='1';
var _pk_agent = _ua.toLowerCase();
var _pk_moz = (_ubn.appName.indexOf("Netscape") != -1);
var _pk_ie = (_pk_agent.indexOf("msie") != -1);
var _pk_win = ((_pk_agent.indexOf("win") != -1) || (_pk_agent.indexOf("32bit") != -1));
var _pk_cookie = (_ubn.cookieEnabled)? '1' : '0';
if((typeof (_ubn.cookieEnabled) == "undefined") && (_pk_cookie == '0')) {
	_ubd.cookie="_pk_testcookie"
	_pk_cookie=(_ubd.cookie.indexOf("_pk_testcookie")!=-1)? '1' : '0';
}

var _pk_dir='0',_pk_fla='0',_pk_pdf='0',_pk_qt = '0',_pk_rea = '0',_pk_wma='0'; 
if (_pk_win && _pk_ie){
	_pk_dir = _pk_plug_ie("SWCtl.SWCtl.1");
	_pk_fla = _pk_plug_ie("ShockwaveFlash.ShockwaveFlash.1");
	if (_pk_plug_ie("PDF.PdfCtrl.1") == '1' || _pk_plug_ie('PDF.PdfCtrl.5') == '1' || _pk_plug_ie('PDF.PdfCtrl.6') == '1') _pk_pdf = '1';
	_pk_qt = _pk_plug_ie("Quicktime.Quicktime"); // Old : "QuickTimeCheckObject.QuickTimeCheck.1"
	_pk_rea = _pk_plug_ie("rmocx.RealPlayer G2 Control.1");
	_pk_wma = _pk_plug_ie("wmplayer.ocx"); // Old : "MediaPlayer.MediaPlayer.1"
} else {
	var _pk_tm = '';
	for (var i=0; i < _ubn.mimeTypes.length; i++)
		_pk_tm += _ubn.mimeTypes[i].type.toLowerCase();
	_pk_dir = _pk_plug_normal("application/x-director");
	_pk_fla = _pk_plug_normal("application/x-shockwave-flash");
	_pk_pdf = _pk_plug_normal("application/pdf");
	_pk_qt  = _pk_plug_normal("video/quicktime");
	_pk_rea = _pk_plug_normal("audio/x-pn-realaudio-plugin");
	_pk_wma = _pk_plug_normal("application/x-mplayer2");
}
	
var _pk_rtu = '';
try {
	_pk_rtu = top.document.referrer;
} catch(e1) {
	if(parent){ 
		try{ _pk_rtu = parent.document.referrer; } catch(e2) { _pk_rtu=''; }
	}
}
if(_pk_rtu == '') {
	_pk_rtu = _ubd.referrer;
}

function _pk_escape(_pk_str){
	if(typeof(encodeURIComponent) == 'function') {
		return encodeURIComponent(_pk_str);
	} else {
		return escape(_pk_str);
	}
}
var _pk_title = '';
if (_ubd.title && _ubd.title!="") _pk_title = _pk_escape(_ubd.title);

var _pk_called;

function _pk_getUrlLog( _pk_action_name, _pk_site, _pk_pkurl, _pk_custom_vars )
{
	var _pk_custom_vars_str = '';
	if(typeof _pk_custom_vars == "undefined"){
		_pk_custom_vars = false;
	}
	if (_pk_custom_vars) {
		for (var i in _pk_custom_vars){
			if (!Array.prototype[i]){
				_pk_custom_vars_str = _pk_custom_vars_str + '&vars['+ escape(i) + ']' + "=" + escape(_pk_custom_vars[i]);
			}
		}
	}
	
	var ul="-",cs="-";
	var n=_ubn;
	if (n.language) { ul=n.language.toLowerCase(); }
    else if (n.browserLanguage) { ul=n.browserLanguage.toLowerCase(); }
	if (_ubd.characterSet) cs=_uES(_ubd.characterSet);
    else if (_ubd.charset) cs=_uES(_ubd.charset);
	
	var _pk_url = _udl.href;
	var _pk_da = new Date();
    var _pk_src = _pk_pkurl
		+'?url='+_pk_escape(_udl.href)
		+'&bs='+_pk_escape(BrowserDetect.browser)
		+'&bsv='+BrowserDetect.version
		+'&os='+BrowserDetect.OS
		+'&ul='+ul
		+'&cs='+cs
		+'&action_name='+_pk_escape(_pk_action_name)
		+'&idsite='+_pk_site
		+'&res='+screen.width+'x'+screen.height
		+'&h='+_pk_da.getHours()+'&m='+_pk_da.getMinutes()+'&s='+_pk_da.getSeconds()
		+'&fla='+_pk_fla+'&dir='+_pk_dir+'&qt='+_pk_qt+'&realp='+_pk_rea+'&pdf='+_pk_pdf
		+'&wma='+_pk_wma+'&java='+_pk_jav+'&cookie='+_pk_cookie
		+'&title='+_pk_title
		+_pk_custom_vars_str;
    var tmp = _uOrg(0);
    if (tmp!="") _pk_src = _pk_src + tmp
	return _pk_src;
}

function piwik_log( _pk_action_name, _pk_site, _pk_pkurl, _pk_custom_vars )
{
	if(_pk_called && (!_pk_action_name || _pk_action_name=="")) return;
	var _pk_src = _pk_getUrlLog(_pk_action_name, _pk_site, _pk_pkurl, _pk_custom_vars );
	_ubd.writeln('<img src="'+_pk_src+'" alt="" style="border:0" />');
	if(!_pk_action_name || _pk_action_name=="") _pk_called=1;
	
  _pk_init_tracker(_pk_site, _pk_pkurl);
}

function _pk_add_event(elm, evType, fn, useCapture) 
{
	if (elm.addEventListener) { 
		elm.addEventListener(evType, fn, useCapture); 
		return true; 
	} else if (elm.attachEvent) { 
		var r = elm.attachEvent('on' + evType, fn); 
		return r; 
	} else {
		elm['on' + evType] = fn;
	}
}

var _pk_tracker_site, _pk_tracker_url;

function _pk_init_tracker(_pk_site, _pk_pkurl) 
{
	if( typeof(piwik_install_tracker) != "undefined" )
		_pk_install_tracker = piwik_install_tracker;
	if( typeof(piwik_tracker_pause) != "undefined" )
		_pk_tracker_pause = piwik_tracker_pause;
	if( typeof(piwik_download_extensions) != "undefined" )
		_pk_download_extensions = piwik_download_extensions;

	_pk_hosts_alias = ( typeof(piwik_hosts_alias) != "undefined" ? piwik_hosts_alias : new Array());
	_pk_hosts_alias.push(window.location.hostname);

	if( !_pk_install_tracker )
		return;

	_pk_tracker_site = _pk_site;
	_pk_tracker_url = _pk_pkurl;

	var _pk_ignore_regexp = '(?:^| )(piwik_ignore';
	if (typeof(piwik_ignore_classes) != "undefined")
		for(var i=0; i < piwik_ignore_classes.length; i++)
			_pk_ignore_regexp += '|' + piwik_ignore_classes[i];
	_pk_ignore_regexp += ')(?: |$)';

	var _pk_class = new RegExp(_pk_ignore_regexp);

	if (_ubd.getElementsByTagName) {
		linksElements = _ubd.getElementsByTagName('a')
		for (var i = 0; i < linksElements.length; i++) {
			if( !_pk_class.exec( linksElements[i].className ) )
				_pk_add_event(linksElements[i], 'mousedown', _pk_click, false);
		}
	}
}

function _pk_dummy() { return true; }

function _pk_pause(_pk_time_msec) {
	var _pk_now = new Date();
	var _pk_expire = _pk_now.getTime() + _pk_time_msec;
	while(_pk_now.getTime() < _pk_expire)
		_pk_now = new Date();
}

// _pk_type only 'download' and 'link' types supported
function piwik_track(url, _pk_site, _pk_url, _pk_type) 
{
	var _pk_image = new Image();
	_pk_image.onLoad = function() { _pk_dummy(); };
	_pk_image.src = _pk_url + '?idsite=' + _pk_site + '&' + _pk_type + '=' + escape(url) + '&rand=' + Math.random() + '&redirect=0';
	_pk_pause(_pk_tracker_pause);
}

function _pk_is_site_hostname(_pk_hostname) {
	var alias, offset;

	for(var i in _pk_hosts_alias) {
		alias = _pk_hosts_alias[i];

		if( _pk_hostname == alias )
			return true;

		if ( alias.substr(0, 2) == "*." ) {
			if ((_pk_hostname) == alias.substr(2))
				return true;

			offset = _pk_hostname.length - alias.length + 1;
			if ((offset > 0) && (_pk_hostname.substr(offset) == alias.substr(1)))
				return true;
		}
	}

	return false;
}

function _pk_click(e)
{
	var source;

	if (typeof e == 'undefined')
		var e = window.event;

	if (typeof e.target != 'undefined') 
		source = e.target;
	else if (typeof e.srcElement != 'undefined')
		source = e.srcElement;
	else return true;

	while( source.tagName != "A" )
		source = source.parentNode;

	if( typeof source.href == 'undefined' )
		return true;

	var _pk_class = new RegExp('(?:^| )piwik_(download|link)(?: |$)');
	var _pk_download = new RegExp('\\.(' + _pk_download_extensions + ')$', 'i');
	var _pk_not_site_hostname = !_pk_is_site_hostname(source.hostname);
	var _pk_link_match = _pk_class.exec( source.className);
	var _pk_link_type = _pk_link_match ? _pk_link_match[1] : 0;

	if (_pk_link_type == 'link')
		_pk_not_site_hostname = 1;
	else if (!_pk_link_type)
		_pk_link_type = (_pk_download.test(source.href) ? 'download' : 'link');

	if( _pk_not_site_hostname || _pk_link_type == 'download' ) 
		piwik_track(source.href, _pk_tracker_site, _pk_tracker_url, _pk_link_type);

	return true;
}

function parseRef()
{
    var r = _ubd.referrer;
    
    m = r.match(/\bhttps?:\/\/(www.)?([\-A-Z0-9.]+)(\/[\-A-Z0-9+&@#\/%=~_|!:,.;]*)?(\?[\-A-Z0-9+&@#\/%=~_|!:,.;]*)?/i);
    if (m != null) {
    	// matched text: match[0]
    	// match start: match.index
    	// capturing group n: match[n]
    	var h=m[2].toLowerCase();
    	for (var ii=0;ii<_uOsr.length;ii++) {
          if (h.indexOf(_uOsr[ii].toLowerCase()) > -1) {
           if ((i=_ur.indexOf("?"+_uOkw[ii]+"=")) > -1 || (i=_ur.indexOf("&"+_uOkw[ii]+"=")) > -1) {
            k=_ur.substring(i+_uOkw[ii].length+2,_ur.length);
            if ((i=k.indexOf("&")) > -1) k=k.substring(0,i);
            for (var yy=0;yy<_uOno.length;yy++) {
             if (_uOno[yy].toLowerCase()==k.toLowerCase()) { _ufno=1; break; }
            }
            if (t) return _uEC(k);
            else return "utmccn=(organic)|utmcsr="+_uEC(_uOsr[ii])+"|"+"utmctr="+_uEC(k)+"|utmcmd=organic";
           }
          }
        }
    	var rp=m[3];
    	var rqs=m[4];
    	m = rqs.match(/&q=([\-A-Z0-9+@#\/%=~_|!:,.;]+)|\?q=([\-A-Z0-9+@#\/%=~_|!:,.;]+)/i);
        if (m != null) {
        	// matched text: match[0]
        	// match start: match.index
        	// capturing group n: match[n]
        	var ss = '';
        	if (m[1]==undefined) ss=m[2];
        	else ss=m[1];
        } else {
        	// Match attempt failed
        }

    } else {
    	// Match attempt failed
    }
}

