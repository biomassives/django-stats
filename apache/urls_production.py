from django.conf.urls.defaults import *
from django.conf import settings

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
    (r'^%sadmin/(.*)' % settings.URL_PREFIX, admin.site.root),
    (r'^%sstat.gif/(.*)' % settings.URL_PREFIX, 'djtest.webstats.views.stat'),
    (r'^%smedia/(?P<path>.*)$' % settings.URL_PREFIX, 'django.views.static.serve', 
      {'document_root' : settings.PROJECT_ROOT + '/media/', 
       'show_indexes': True})
)
