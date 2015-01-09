SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";




CREATE TABLE IF NOT EXISTS `browser` (
  `browser_id` int(11) DEFAULT NULL,
  `browser` varchar(128) NOT NULL,
  `version` varchar(16) NOT NULL DEFAULT '',
  PRIMARY KEY (`browser`,`version`),
  KEY `browser_id` (`browser_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `country` (
  `country_id` int(11) DEFAULT NULL,
  `country` varchar(128) NOT NULL,
  PRIMARY KEY (`country`),
  KEY `country_id` (`country_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `file_tracker` (
  `file_tracker_id` int(11) DEFAULT NULL,
  `file_size` int(11) NOT NULL,
  `file_offset` int(11) DEFAULT NULL,
  `parsed_timestamp` bigint(20) DEFAULT NULL,
  `first_line` text NOT NULL,
  PRIMARY KEY (`first_line`(1000)),
  KEY `file_tracker_id` (`file_tracker_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `file_type` (
  `file_type_id` int(11) DEFAULT NULL,
  `file_type` varchar(128) NOT NULL,
  PRIMARY KEY (`file_type`),
  KEY `file_type_id` (`file_type_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `ip_addr` (
  `ip_addr_id` int(11) DEFAULT NULL,
  `ip_addr` char(16) NOT NULL,
  `hostname` varchar(255) NOT NULL,
  PRIMARY KEY (`ip_addr`,`hostname`),
  KEY `ip_addr_id` (`ip_addr_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `log` (
  `log_id` int(11) DEFAULT NULL,
  `timestamp` int(11) NOT NULL,
  `page` int(11) NOT NULL,
  `bytes` int(11) NOT NULL,
  `status_code` int(11) NOT NULL,
  `hour` int(11) NOT NULL,
  `day_of_week` int(11) NOT NULL,
  `day_of_month` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `file_tracker_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `referer_domain_id` int(11) NOT NULL,
  `referer_page_id` int(11) NOT NULL,
  `referer_qs_id` int(11) NOT NULL,
  `url_id` int(11) NOT NULL,
  `ip_addr_id` int(11) NOT NULL,
  `op_sys_id` int(11) NOT NULL,
  `robot_id` int(11) NOT NULL,
  `search_engine_id` int(11) NOT NULL,
  `search_string_id` int(11) NOT NULL,
  `browser_id` int(11) NOT NULL,
  `file_type_id` int(11) NOT NULL,
  KEY `log_id` (`log_id`),
  KEY `file_tracker_id` (`file_tracker_id`),
  KEY `timestamp` (`timestamp`),
  KEY `year` (`year`,`month`),
  KEY `country_id` (`country_id`),
  KEY `referer_domain_id` (`referer_domain_id`),
  KEY `referer_page_id` (`referer_page_id`),
  KEY `referer_qs_id` (`referer_qs_id`),
  KEY `url_id` (`url_id`),
  KEY `ip_addr_id` (`ip_addr_id`),
  KEY `op_sys_id` (`op_sys_id`),
  KEY `robot_id` (`robot_id`),
  KEY `search_engine_id` (`search_engine_id`),
  KEY `search_string_id` (`search_string_id`),
  KEY `browser_id` (`browser_id`),
  KEY `file_type_id` (`file_type_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `op_sys` (
  `op_sys_id` int(11) DEFAULT NULL,
  `op_sys` varchar(128) NOT NULL,
  `version` varchar(16) NOT NULL,
  PRIMARY KEY (`op_sys`,`version`),
  KEY `op_sys_id` (`op_sys_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `referer_domain` (
  `referer_domain_id` int(11) DEFAULT NULL,
  `referer_domain` varchar(128) NOT NULL,
  PRIMARY KEY (`referer_domain`),
  KEY `referer_domain_id` (`referer_domain_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `referer_page` (
  `referer_page_id` int(11) DEFAULT NULL,
  `referer_page` varchar(128) NOT NULL,
  PRIMARY KEY (`referer_page`),
  KEY `referer_page_id` (`referer_page_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `referer_qs` (
  `referer_qs_id` int(11) DEFAULT NULL,
  `referer_qs` varchar(255) NOT NULL,
  PRIMARY KEY (`referer_qs`),
  KEY `referer_qs_id` (`referer_qs_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `robot` (
  `robot_id` int(11) DEFAULT NULL,
  `robot` varchar(128) NOT NULL,
  PRIMARY KEY (`robot`),
  KEY `robot_id` (`robot_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `search_engine` (
  `search_engine_id` int(11) DEFAULT NULL,
  `search_engine` varchar(128) NOT NULL,
  PRIMARY KEY (`search_engine`),
  KEY `search_engine_id` (`search_engine_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `search_keyword` (
  `search_keyword_id` int(11) DEFAULT NULL,
  `search_keyword` varchar(128) NOT NULL,
  PRIMARY KEY (`search_keyword`),
  KEY `search_keyword_id` (`search_keyword_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `search_keyword_log` (
  `search_keyword_log_id` int(11) DEFAULT NULL,
  `search_keyword_id` int(11) NOT NULL,
  `log_id` int(11) NOT NULL,
  PRIMARY KEY (`search_keyword_id`,`log_id`),
  KEY `search_keyword_log_id` (`search_keyword_log_id`),
  KEY `log_id` (`log_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `search_string` (
  `search_string_id` int(11) DEFAULT NULL,
  `search_string` varchar(255) NOT NULL,
  PRIMARY KEY (`search_string`),
  KEY `search_string_id` (`search_string_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE IF NOT EXISTS `session` (
  `session_id` int(11) NOT NULL AUTO_INCREMENT,
  `ip_addr_id` int(11) NOT NULL,
  `session_start` int(11) NOT NULL,
  `session_end` int(11) NOT NULL,
  `session_duration` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  KEY `session_id` (`session_id`),
  KEY `ip_addr_id` (`ip_addr_id`),
  KEY `month` (`month`,`year`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;



CREATE TABLE IF NOT EXISTS `url` (
  `url_id` int(11) DEFAULT NULL,
  `url` varchar(128) NOT NULL,
  PRIMARY KEY (`url`),
  KEY `url_id` (`url_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;