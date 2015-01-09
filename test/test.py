# -*- coding: utf-8 -*-

import cookielib
import urllib2
from random import randint
from datetime import *
import urllib
import threading

UAS = {
"Firefox": "Mozilla/5.0 (Windows; U; Windows NT 6.0; zh-CN; rv:1.9.0.6) Gecko/2009011913 Firefox/3.0.6 (.NET CLR 3.5.30729)",
"MSIE7": "Mozilla/4.0 (compatible; MSIE 7.1; Windows NT 5.1; SV1)",
"MSIE8": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; GTB5)",
"Chrome": "Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Chrome/1.0.154.48 Safari/525.19"
}

#activate.adobe.com -- [GET /djtest/stat.gif/?url=http%3A%2F%2Flocalhost%2Fxampp%
#2Fstart.php&bs=Microsoft%20Internet%20Explorer&bsv=8&os=Windows%20Vista&ul=zh-cn
#&cs=gb2312&action_name=&idsite=1&res=1440x900&h=13&m=11&s=14&fla=1&dir=0&qt=1&re
#alp=1&pdf=0&wma=1&java=1&cookie=1&title=&urlref=http%3A%2F%2Flocalhost%2Fxampp%2
#F HTTP/1.1] 200 35

def loadUrlList(fn='d:/py_app/djtest/test/urls.txt'):
    f = open(fn, 'r')
    x = f.readlines()
    f.close()
    return x
    
def loadRefList(fn='d:/py_app/djtest/test/refs.txt'):
    f = open(fn, 'r')
    x = f.readlines()
    f.close()
    return x
    
def loadSearchStringList(fn='d:/py_app/djtest/test/searchstrings.txt'):
    f = open(fn, 'r')
    x = f.readlines()
    f.close()
    return x
    
BROWSERS = {
    'MSIE': ['5', '5.5', '6', '7', '8'], 
    'Firefox': ['1', '2', '3'], 
    'Chrome': ['0.2', '1.0'], 
    'Safari': ['5', '6', '7', '8'], 
    'Netscape': ['4', '5', '6', '7', '8', '9', '10'], 
    'Opera': ['5', '6', '7', '8', '9', '10'], 
    'Konqueror': ['4', '6', '7']
}

SCREENS = ['1440x900', '800x600', '1024x768', '1360x768', 
    '1280x1024', '1280x960', '1280x800', '1152x864', '1280x768']
    
COLORDEP = ['16', '32', '64']

OS = [ "Windows 7", 
       "Windows Vista",
       "Windows Server 2003",
       "Windows XP",
       "Windows 2000",
       "Windows NT 4",
       "Windows 98",
       "Windows NT",
       "Windows 95",
       "Mac",
       "iPhone/iPod",
       "Linux"
]

LANG = ['zh-cn', 'zh-tw', 'zh-hk']
CODE = ['gb2312', 'utf-8', 'gbk', 'big5']

SES = ['google', 'yahoo', 'msn', 'aol', 'baidu', 'live', 'ask']

SITES = ['localhost', 'bitants.com', 'example.com']
    

def UrlGenerator():
    urls = loadUrlList()
    refs = loadRefList()
    while True:
        try:
            # Url
            url = urllib.quote_plus(urls[randint(0, len(urls)-1)].strip())
            # browser
            browers = BROWSERS.keys()
            bs = browers[randint(0, 6)]
            tmp = BROWSERS[bs]
            bsv = tmp[randint(0, len(tmp)-1)]
            # screen
            res = SCREENS[randint(0, len(SCREENS)-1)]
            dep = COLORDEP[randint(0, len(COLORDEP)-1)]
            # h & w
            wma = str(randint(0,1))
            fla = str(randint(0,1))
            realp = str(randint(0,1))
            qt = str(randint(0,1))
            pdf = str(randint(0,1))
            java = str(randint(0,1))
            cookie = str(randint(0,1))
            #jse = str(randint(0,1))
            dir = str(randint(0,1))
            t = datetime.now()
            hour = str(t.hour)
            minute = str(t.minute)
            second = str(t.second)
            # OS
            os = urllib.quote_plus(OS[randint(0, len(OS)-1)])
            # lang & code
            ul = LANG[randint(0, len(LANG)-1)]
            cs = CODE[randint(0, len(CODE)-1)]
            # search engine
            se = SES[randint(0, len(SES)-1)]
            kws = loadSearchStringList()
            ss = urllib.quote_plus(kws[randint(0, len(kws)-1)].strip())
            # refUrl
            urlref = urllib.quote_plus(refs[randint(0, len(refs)-1)].strip())
            # idsite
            idsite = '1'
            
            l = "http://localhost:8000/djtest/stat.gif/?url=" + url
            l += "&bs=" + bs
            l += "&bsv=" + bsv
            l += '&os='+os
            l += '&ul='+ul
            l += '&cs='+cs
            l += '&action_name='
            l += '&idsite='+idsite
            l += '&res='+res
            l += '&dep='+dep
            l += '&h='+hour+'&m='+minute+'&s='+second
            l += '&fla='+fla+'&dir='+dir+'&qt='+qt+'&realp='+realp+'&pdf='+pdf
            l += '&wma='+wma+'&java='+java+'&cookie='+cookie
            l += '&title='
            
            if randint(0, 1):
                l += '&se='+se
                l += '&ss='+ss
            else:
                l += '&rh='+se
                l += '&rp='+ss
            yield l
        except GeneratorExit:
            # never catch GeneratorExit
            raise

TEST_COUNT = 500
# 创建一个 threading.Thread 的派生类
class RequestThread(threading.Thread):
    # 构造函数
    def __init__(self, thread_name):
        threading.Thread.__init__(self)
        self.test_count = 0

    # 线程运行的入口函数
    def run(self):
        # 不直接把代码写在run里面是因为也许我们还要做其他形式的测试
        i = 0
        while i < TEST_COUNT:
            self.test_performace()
            i += 1
            time.sleep(1)
        #self.test_other_things()

    def test_performace(self):
        cookie = cookielib.CookieJar()
        opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cookie))
        
        # open debug 
        urllib2.install_opener(opener)
        #opener.handle_open["http"][0].set_http_debuglevel(1)
        url = UrlGenerator()
        for i in range(0, randint(0, 100)):
            try: 
                opener.open(url.next())
                self.test_count += 1
                #time.sleep(1)
            except Exception, e:
                print e
                continue
            

if __name__ == "__main__":
    import sys
    import time
    total = 10
    if len(sys.argv)>1:
        total = int(sys.argv[1])
        
    # 开始的时间
    start_time = time.time()
    threads = []
    # 并发的线程数
    thread_count = total 
    
    i = 0
    while i < thread_count:
        t = RequestThread("thread" + str(i))
        threads.append(t)
        t.start()
        i += 1
    # 接受统计的命令
    word = ""
    while True:
        word = raw_input("cmd:")
        if word == "s":
            time_span = time.time() - start_time
            all_count = 0
            for t in threads:
                all_count += t.test_count
            print "%s Request/Second" % str(all_count / time_span)
        elif word == "e":
            # 准备退出 其实 X 掉 窗口更加容易，没什么浪费的资源
            TEST_COUNT = 0
            for t in threads:
                t.join(0)
            break
        

