from webstats.models import *
import calendar
from django.db.models import Avg, Max, Min, Count

def hourly_data(year, month, day):
    '''
    VisitLog.objects.get_query_set().filter(year=2009, month=3, day_of_month=2,hour=21).count()
    '''
    y = int(year)
    m = int(month)
    d = int(day)
    records = []
    for h in xrange(0, 24, 1):
        records.append(VisitLog.objects.get_query_set().filter(year=y, month=m, day_of_month=d,hour=h).count())
    return records
    
def monthly_data(year, month):
    '''
    VisitLog.objects.get_query_set().filter(year=2009, month=3, day_of_month=2).count()
    '''
    y = int(year)
    m = int(month)
    records = []
    a, maxMonthDay = calendar.monthrange(y, m)
    for d in xrange(1, maxMonthDay, 1):
        records.append(VisitLog.objects.get_query_set().filter(year=y, month=m, day_of_month=d).count())
    return records
    
def yearly_data(year):
    '''
    VisitLog.objects.get_query_set().filter(year=2009, month=3, day_of_month=2).count()
    '''
    y = int(year)
    records = []
    for m in xrange(1, 12, 1):
        records.append(VisitLog.objects.get_query_set().filter(year=y, month=m).count())
    return records    
    
def quick_sort(L):
    if L == []: 
        return []
    return quick_sort([x for x in L[1:] if x<L[0]]) + L[0:1] + \
        quick_sort([x for x in L[1:] if x>=L[0]])
    
class SEVisit:
    def __init__(self, name, cnt):
        self.name = name
        self.visits = cnt
        
    def __cmp__(self, other):
        if self.visits < other.visits:
            return -1
        if self.visits == other.visits:
            return 0
        if self.visits > other.visits:
            return 1
            
    def __str__(self):
        return str(self.name, self.visits)
            
# SELECT search_engine_id FROM webstats_visitlog where search_engine_id<>-1 group by search_engine_id
# select count(search_engine_id) from webstats_visitlog where search_engine_id=1 
def mostpopular_searchengines():
    ses = SearchEngine.objects.all()
    a = []
    for x in range(0, len(ses)):
        name = ses[x].name
        c = VisitLog.objects.get_query_set().filter(search_engine=ses[x]).count()
        a.append(SEVisit(name, c))
    sorted = quick_sort(a)
    r = []
    for x in range(len(sorted)-1, -1, -1):
        r.append({'name': sorted[x].name, 'visits': sorted[x].visits})
    return r
    
    
def mostpopular_browsers():
    brs = Browser.objects.all()
    a = []
    for x in range(0, len(brs)):
        name = brs[x].name
        c = VisitLog.objects.get_query_set().filter(browser=brs[x]).count()
        a.append(SEVisit(name, c))
    sorted = quick_sort(a)
    r = []
    for x in range(len(sorted)-1, -1, -1):
        r.append({'name': sorted[x].name, 'visits': sorted[x].visits})
    return r