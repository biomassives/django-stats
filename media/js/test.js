<html>
<head><title>Test the javascript tag</title>
</head>
<body>
<!-- Piwik -->
<a href="http://piwik.org" title="Web analytics" onclick="window.open(this.href);return(false);">
<script language="javascript" src="http://127.0.0.1:8000/media/js/piwik.js" type="text/javascript"></script>
<script type="text/javascript">
<!--
piwik_action_name = '';
piwik_idsite = 1;
piwik_url = 'http://127.0.0.1:8000/stat.gif/';
piwik_log(piwik_action_name, piwik_idsite,piwik_url);
//-->
</script><object>
<noscript><p>Web analytics <img src="http://127.0.0.1:8000/stat.gif/" style="border:0" alt="piwik"/></p>
</noscript></object></a>
<!-- /Piwik -->
</body>
</html>