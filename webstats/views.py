# Create your views here.
from __future__ import with_statement
from django.http import HttpResponse
from django.http import HttpRequest
import mimetypes
import os
import re
from stat import *
import urllib
from email.Utils import parsedate_tz, mktime_tz
from datetime import *
import time
from pyofc2 import *

from django.db import IntegrityError, transaction
from django.http import Http404, HttpResponse, HttpResponseRedirect, HttpResponseNotModified
from django.utils.http import http_date
from django.template import RequestContext, loader

from webstats.models import *
from libs.http import JsonResponse
from settings import PROJECT_ROOT
import webstats.report

def index(request):
    return HttpResponse("Hello, world. You're at the poll index.")
    
def stat(request, url):
    qs = "The query string is: %s" % url
    rs = ''
    for k, v in request.META.iteritems():
      rs += str(k) + ': '
      rs += str(v)
      rs += '<br />'
    
    m = request.META
    #bytes = m['CONTENT_LENGTH']
    host = m['REMOTE_HOST']
    ua = m['HTTP_USER_AGENT']
    ip = m['REMOTE_ADDR']
    method = m['REQUEST_METHOD']
    #cs = m['HTTP_ACCEPT_CHARSET']
    qs = m['QUERY_STRING']
    protocol = m['SERVER_PROTOCOL']
    #ref = m['HTTP_REFERER']
    
    t = time.time()
    dt = datetime.fromtimestamp(t)
    
    s = ip + ' - [' + str(dt) + '] "' + qs + '" "' + ua + '"'
    logObj = RawVisitLog(log=s)
    logObj.save()
    ipObj, created = IpAddr.objects.get_or_create(ip_addr=ip, hostname=host)
    
    if len(request.GET.keys()) > 0:
    # http://localhost:8000/djtest/stat.gif/?url=http%3A%2F%2Flocalhost%2Fxampp%2Fstart.php&action_name=&idsite=1&res=1296x810&h=22&m=1&s=12&fla=1&dir=0&qt=1&realp=1&pdf=1&wma=1&java=1&cookie=1&title=&urlref=http%3A%2F%2Flocalhost%2Fxampp%2F
        lnk = request.GET['url']
        #urlObj = Url.objects.get(url=url)
        urlObj, created = Url.objects.get_or_create(url=lnk)

        #isrb = False
        #if request.GET.has_key('rb'):
        #    isrb = True
        #    rb = request.GET['rb']
        #    robot, created = Robot.objects.get_or_create(name=rb)
        #else:
        bs = request.GET.has_key('bs') and request.GET['bs'] or ''
        bsv = request.GET.has_key('bsv') and request.GET['bsv'] or ''
        browserObj, created = Browser.objects.get_or_create(name=bs, version=bsv)
            
        opsys = request.GET.has_key('os') and request.GET['os'] or ''
        opSysObj, created = OpSys.objects.get_or_create(name=opsys)
            
        res = request.GET.has_key('res') and request.GET['res'] or ''
        color = request.GET.has_key('dep') and request.GET['dep'] or ''
        scrObj, created = Screen.objects.get_or_create(size=res, color=color)
            
        ul = request.GET.has_key('ul') and request.GET['ul'] or '-'
        langObj, created = Lang.objects.get_or_create(name=ul)
            
        cs = request.GET.has_key('cs') and request.GET['cs'] or '-'
        charSetObj, created = CharSet.objects.get_or_create(name=cs)
            
        pdf = request.GET.has_key('pdf') and request.GET['pdf']=='1' or False
        wma = request.GET.has_key('wma') and request.GET['wma']=='1' or False
        java = request.GET.has_key('java') and request.GET['java']=='1' or False
        fla = request.GET.has_key('fla') and request.GET['fla']=='1' or False
        qt = request.GET.has_key('qt') and request.GET['qt']=='1' or False
        realp = request.GET.has_key('realp') and request.GET['realp']=='1' or False
        cookie = request.GET.has_key('cookie') and request.GET['cookie']=='1' or False
        #javascript = request.GET.has_key('jse') and request.GET['jse']=='1' or False
        
        rpObj = RefererPage(id=-1, page='')
        dmObj = RefererDomain(id=-1, domain='')
        seObj = SearchEngine(id=-1, name='')
        ssObj = SearchString(id=-1, kws='')
        if request.GET.has_key('rp') and request.GET.has_key('rh'):
            rpage = request.GET['rp']
            rpObj, created = RefererPage.objects.get_or_create(page=rpage)
                
            rhost = request.GET['rh']
            dmObj, created = RefererDomain.objects.get_or_create(domain=rhost)
        elif request.GET.has_key('ss') and request.GET.has_key('se'):
            se =  request.GET['se']
            seObj, created = SearchEngine.objects.get_or_create(name=se)
                
            sess = request.GET['ss']
            ssObj, created = SearchString.objects.get_or_create(kws=sess)        
        
        log = VisitLog(timestamp=t, 
                       hour=dt.hour,
                       day_of_week=dt.isoweekday(), 
                       day_of_month=dt.day,
                       month=dt.month,
                       year = dt.year,
                       url = urlObj, 
                       op_sys = opSysObj,
                       search_engine = seObj,
                       search_string = ssObj,
                       browser = browserObj,
                       screen = scrObj, 
                       lang = langObj,
                       charset = charSetObj,
                       ip_addr = ipObj,
                       referer_domain = dmObj,
                       referer_page = rpObj,
                       #javascript=javascript, 
                       cookie = cookie,
                       plugin_pdf = pdf,
                       plugin_flash = fla,
                       plugin_java = java, 
                       plugin_quicktime = qt,
                       plugin_realplayer = realp,
                       plugin_windowsmedia = wma)
        log.save()
    
    #return HttpResponse(request.META)
    fullpath = "D:\\py_app\\djtest\\media\\stat.gif"
    # Respect the If-Modified-Since header.
    statobj = os.stat(fullpath)
    if not was_modified_since(request.META.get('HTTP_IF_MODIFIED_SINCE'),
                              statobj[ST_MTIME], statobj[ST_SIZE]):
        return HttpResponseNotModified()
    #mimetype = mimetypes.guess_type(fullpath)[0] or 'application/octet-stream'
    mimetype = 'image/gif'
    contents = open(fullpath, 'rb').read()
    response = HttpResponse(contents, mimetype=mimetype)
    response["Last-Modified"] = http_date(statobj[ST_MTIME])
    response["Content-Length"] = len(contents)
    return response #HttpResponse(rs)
    
def hourly_chart_data(request, year, month, day):     
    '''  
    Line Charts/Line
    Simple Line Graph
    '''
    t = title(text=time.strftime('%a %Y %b %d'))
    l = line()
    l.values = report.hourly_data(year, month, day)
    chart = open_flash_chart()
    chart.title = t
    chart.add_element(l)
    fn = "%s/data/hourly_%s_%s_%s.json" % (PROJECT_ROOT, year, month, day)
    with open(fn, 'wa') as f:
        print >> f, chart
    return JsonResponse(chart)
    
def hourly_chart(request, year, month, day):
    name = '/djtest/data/%s/%s/%s/' % (year, month, day)
    t = loader.get_template('chartbase.html')
    c = RequestContext(request, {'name': name})
    return HttpResponse(t.render(c))

def was_modified_since(header=None, mtime=0, size=0):
    """
    Was something modified since the user last downloaded it?

    header
      This is the value of the If-Modified-Since header.  If this is None,
      I'll just return True.

    mtime
      This is the modification time of the item we're talking about.

    size
      This is the size of the item we're talking about.
    """
    try:
        if header is None:
            raise ValueError
        matches = re.match(r"^([^;]+)(; length=([0-9]+))?$", header,
                           re.IGNORECASE)
        header_mtime = mktime_tz(parsedate_tz(matches.group(1)))
        header_len = matches.group(3)
        if header_len and int(header_len) != size:
            raise ValueError
        if mtime > header_mtime:
            raise ValueError
    except (AttributeError, ValueError):
        return True
    return False