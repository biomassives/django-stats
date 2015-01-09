from django.conf.urls.defaults import *
from django.conf import settings

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Example:
    (r'^djtest/', include('root.urls')),

    # Uncomment the admin/doc line below and add 'django.contrib.admindocs' 
    # to INSTALLED_APPS to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    #(r'^djtest/admin/(.*)', admin.site.root),
    #(r'^djtest/stat.gif/(.*)', 'djtest.webstats.views.stat'),
    #(r'^djtest/media/(?P<path>.*)$', 'django.views.static.serve', 
    #  {'document_root' : settings.PROJECT_ROOT + '/media/', 
    #   'show_indexes': True})
)
