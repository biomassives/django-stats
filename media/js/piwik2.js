var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchOSString(this.dataOS) || "an unknown OS";
		//this.isrobot = false;
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			//var isrb = data[i].isrobot;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				//if (dataString.indexOf(data[i].subString) != -1 && isrb) {
				//    this.isrobot = true;
				//	return data[i].identity;
				//} 
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
	searchOSString: this.searchString,
	dataBrowser: [
	    /*
	    // for crawler or robot
		{ 		// googlebot-image
			string: navigator.userAgent,
			subString: "googlebot-image",
			identity: "Google Image",
			isrobot: true,
		},
		{ 		// googlebot
			string: navigator.userAgent,
			subString: "googlebot",
			identity: "Google",
			isrobot: true,
		},
		{ 		// baidu
			string: navigator.userAgent,
			subString: "baiduspider",
			identity: "Baidu",
			isrobot: true,
		},
		{ 		// msn
			string: navigator.userAgent,
			subString: "msnbot",
			identity: "MSN",
			isrobot: true,
		},
		{ 		// yahoo
			string: navigator.userAgent,
			subString: "yahoo",
			identity: "Yahoo",
			isrobot: true,
		},*/
		
		// for browser
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Microsoft Internet Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.userAgent,
			subString: "Windows NT 6.1",
			identity: "Windows NT 6.1"
		},
		{
			string: navigator.userAgent,
			subString: "Windows NT 6.0",
			identity: "Windows Vista"
		},
		{
			string: navigator.userAgent,
			subString: "Windows NT 5.2",
			identity: "Windows Server 2003"
		},
		{
			string: navigator.userAgent,
			subString: "Windows NT 5.1",
			identity: "Windows XP"
		},
		{
			string: navigator.userAgent,
			subString: "Windows NT 5.0",
			identity: "Windows 2000"
		},
		{
			string: navigator.userAgent,
			subString: "Windows NT 4.0",
			identity: "Windows NT 4"
		},
		{
			string: navigator.userAgent,
			subString: "Windows 98",
			identity: "Windows 98"
		},
		{
			string: navigator.userAgent,
			subString: "Windows NT",
			identity: "Windows NT"
		},
		{
			string: navigator.userAgent,
			subString: "Windows 95",
			identity: "Windows 95"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

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

// Web analytics by Piwik - http://piwik.org
// Copyleft 2007, All rights reversed.
var _pk_use_title_as_name = 0;
var _pk_install_tracker = 1;
var _pk_tracker_pause = 500;
var _pk_download_extensions = "7z|aac|avi|csv|doc|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xml|zip";

// Beginning script
function _pk_plug_normal(_pk_pl) {
	if (_pk_tm.indexOf(_pk_pl) != -1 && (navigator.mimeTypes[_pk_pl].enabledPlugin != null)) 
		return '1';
	return '0';
}

function _pk_plug_ie(_pk_pl)
{
	pk_found = false;
	document.write('<SCR' + 'IPT LANGUAGE=VBScript>\n on error resume next \n pk_found = IsObject(CreateObject("' + _pk_pl + '")) </SCR' + 'IPT>\n');
	if (pk_found) return '1';
	return '0';
}

var _pk_jav = '0'; if(navigator.javaEnabled()) _pk_jav='1';
var _pk_agent = navigator.userAgent.toLowerCase();
var _pk_moz = (navigator.appName.indexOf("Netscape") != -1);
var _pk_ie = (_pk_agent.indexOf("msie") != -1);
var _pk_win = ((_pk_agent.indexOf("win") != -1) || (_pk_agent.indexOf("32bit") != -1));
var _pk_cookie = (navigator.cookieEnabled)? '1' : '0';
if((typeof (navigator.cookieEnabled) == "undefined") && (_pk_cookie == '0')) {
	document.cookie="_pk_testcookie"
	_pk_cookie=(document.cookie.indexOf("_pk_testcookie")!=-1)? '1' : '0';
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
	for (var i=0; i < navigator.mimeTypes.length; i++)
		_pk_tm += navigator.mimeTypes[i].type.toLowerCase();
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
	_pk_rtu = document.referrer;
}

function _pk_escape(_pk_str){
	if(typeof(encodeURIComponent) == 'function') {
		return encodeURIComponent(_pk_str);
	} else {
		return escape(_pk_str);
	}
}
var _pk_title = '';
if (document.title && document.title!="") _pk_title = _pk_escape(document.title);

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
	
	var _pk_url = document.location.href;
	var _pk_da = new Date();
	//if (!BrowserDetect.isrobot) {
	    var _pk_src = _pk_pkurl
    		+'?url='+_pk_escape(document.location.href)
    		+'&bs='+_pk_escape(BrowserDetect.browser)
    		+'&bsv='+BrowserDetect.version
    		+'&os='+BrowserDetect.OS
    		+'&action_name='+_pk_escape(_pk_action_name)
    		+'&idsite='+_pk_site
    		+'&res='+screen.width+'x'+screen.height
    		+'&h='+_pk_da.getHours()+'&m='+_pk_da.getMinutes()+'&s='+_pk_da.getSeconds()
    		+'&fla='+_pk_fla+'&dir='+_pk_dir+'&qt='+_pk_qt+'&realp='+_pk_rea+'&pdf='+_pk_pdf
    		+'&wma='+_pk_wma+'&java='+_pk_jav+'&cookie='+_pk_cookie
    		+'&title='+_pk_title
    		+'&urlref='+_pk_escape(_pk_rtu)
    		+_pk_custom_vars_str;
    	return _pk_src;
    /*} else {
        var _pk_src = _pk_pkurl
    		+'?url='+_pk_escape(document.location.href)
    		+'&rb='+_pk_escape(BrowserDetect.browser)
    		+'&action_name='+_pk_escape(_pk_action_name)
    		+'&idsite='+_pk_site
    		+'&res='+screen.width+'x'+screen.height
    		+'&h='+_pk_da.getHours()+'&m='+_pk_da.getMinutes()+'&s='+_pk_da.getSeconds()
    		+'&fla='+_pk_fla+'&dir='+_pk_dir+'&qt='+_pk_qt+'&realp='+_pk_rea+'&pdf='+_pk_pdf
    		+'&wma='+_pk_wma+'&java='+_pk_jav+'&cookie='+_pk_cookie
    		+'&title='+_pk_title
    		+'&urlref='+_pk_escape(_pk_rtu)
    		+_pk_custom_vars_str;
    	return _pk_src;
    }*/
}

function piwik_log( _pk_action_name, _pk_site, _pk_pkurl, _pk_custom_vars )
{
	if(_pk_called && (!_pk_action_name || _pk_action_name=="")) return;
	var _pk_src = _pk_getUrlLog(_pk_action_name, _pk_site, _pk_pkurl, _pk_custom_vars );
	document.writeln('<img src="'+_pk_src+'" alt="" style="border:0" />');
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

	if (document.getElementsByTagName) {
		linksElements = document.getElementsByTagName('a')
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

		if( _pk_hostname === alias )
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
 