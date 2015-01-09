from django.conf.urls.defaults import *
from django.conf import settings
from webstats.views import hourly_chart, hourly_chart_data, index

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Example:
    # (r'^djtest/', include('djtest.foo.urls')),

    # Uncomment the admin/doc line below and add 'django.contrib.admindocs' 
    # to INSTALLED_APPS to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    (r'^admin/(.*)', admin.site.root),
    (r'^data/(?P<year>\d{4})/(?P<month>\d{2})/(?P<day>\d{1,2})/$', hourly_chart_data),
    (r'^chart/(?P<year>\d{4})/(?P<month>\d{2})/(?P<day>\d{1,2})/$', hourly_chart),
    #(r'^stats/(.*)', include('djtest.webstats.urls')),
    (r'^stat.gif/(.*)', 'webstats.views.stat'),
    (r'^media/(?P<path>.*)$', 'django.views.static.serve', 
      {'document_root' : settings.PROJECT_ROOT + '/media/', 
       'show_indexes': True})
)



