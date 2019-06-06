/*
SQLyog Community v13.1.2 (64 bit)
MySQL - 5.7.24 : Database - ipc_rushform
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`ipc_rushform` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

/*Table structure for table `api_tokens` */

DROP TABLE IF EXISTS `api_tokens`;

CREATE TABLE `api_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `employee_id` int(11) NOT NULL,
  `token` text NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `api_tokens` */

insert  into `api_tokens`(`id`,`employee_id`,`token`,`revoked`,`expires_at`,`created_at`,`updated_at`) values 
(1,1257,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoicmVxdWVzdG9yIiwiZW1wbG95ZWVfaWQiOjEyNTcsImVtcGxveWVlX25vIjoiMTgwNzA0IiwibmFtZSI6IlRpYnVyY2lvLCBQcmluY2UgSXZhbiBLZW50IiwicG9zaXRpb25fdGl0bGUiOiJTdGFmZiIsImRlcGFydG1lbnQiOiJGaW5hbmNlIEFuZCBTeXN0ZW1zIiwiZGl2aXNpb24iOiJBZG1pbmlzdHJhdGlvbiIsInNlY3Rpb24iOiJNYW5hZ2VtZW50IEluZm9ybWF0aW9uIFN5c3RlbSIsImNyZWF0ZWRfYXQiOiIyMDE5LTA2LTA2IDA5OjIxOjIzIn0.AyQgFfkgz7nw2XKKjuNpPMBI1FfLfRyymv6f_ET4fDU',1,'2019-06-06 09:36:23','2019-06-06 09:21:23','2019-06-06 10:08:05'),
(2,1257,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoicmVxdWVzdG9yIiwiZW1wbG95ZWVfaWQiOjEyNTcsImVtcGxveWVlX25vIjoiMTgwNzA0IiwibmFtZSI6IlRpYnVyY2lvLCBQcmluY2UgSXZhbiBLZW50IiwicG9zaXRpb25fdGl0bGUiOiJTdGFmZiIsImRlcGFydG1lbnQiOiJGaW5hbmNlIEFuZCBTeXN0ZW1zIiwiZGl2aXNpb24iOiJBZG1pbmlzdHJhdGlvbiIsInNlY3Rpb24iOiJNYW5hZ2VtZW50IEluZm9ybWF0aW9uIFN5c3RlbSIsImNyZWF0ZWRfYXQiOiIyMDE5LTA2LTA2IDEwOjA4OjExIn0.lcMbqilBYFfBWjx5_zEjz9KJL-NfAbNOPcCp7-zvngM',1,'2019-06-06 11:09:04','2019-06-06 10:08:11','2019-06-06 11:04:13'),
(3,1257,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoicmVxdWVzdG9yIiwiZW1wbG95ZWVfaWQiOjEyNTcsImVtcGxveWVlX25vIjoiMTgwNzA0IiwibmFtZSI6IlRpYnVyY2lvLCBQcmluY2UgSXZhbiBLZW50IiwicG9zaXRpb25fdGl0bGUiOiJTdGFmZiIsImRlcGFydG1lbnQiOiJGaW5hbmNlIEFuZCBTeXN0ZW1zIiwiZGl2aXNpb24iOiJBZG1pbmlzdHJhdGlvbiIsInNlY3Rpb24iOiJNYW5hZ2VtZW50IEluZm9ybWF0aW9uIFN5c3RlbSIsImNyZWF0ZWRfYXQiOiIyMDE5LTA2LTA2IDEwOjQ3OjExIn0.tmBRBjWxuKk8buVKlaqH1a-7vWkhuVgJOU67_LxVhOY',0,'2019-06-06 11:02:11','2019-06-06 10:47:11','2019-06-06 10:47:11'),
(4,1257,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoicmVxdWVzdG9yIiwiZW1wbG95ZWVfaWQiOjEyNTcsImVtcGxveWVlX25vIjoiMTgwNzA0IiwibmFtZSI6IlRpYnVyY2lvLCBQcmluY2UgSXZhbiBLZW50IiwicG9zaXRpb25fdGl0bGUiOiJTdGFmZiIsImRlcGFydG1lbnQiOiJGaW5hbmNlIEFuZCBTeXN0ZW1zIiwiZGl2aXNpb24iOiJBZG1pbmlzdHJhdGlvbiIsInNlY3Rpb24iOiJNYW5hZ2VtZW50IEluZm9ybWF0aW9uIFN5c3RlbSIsImNyZWF0ZWRfYXQiOiIyMDE5LTA2LTA2IDExOjEyOjQzIn0.mThnvPblTnKE8fvke_3Q7uMQvfpLWV6OtbT3WuY6TFI',1,'2019-06-06 11:27:43','2019-06-06 11:12:43','2019-06-06 11:12:50'),
(5,1257,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoicmVxdWVzdG9yIiwiZW1wbG95ZWVfaWQiOjEyNTcsImVtcGxveWVlX25vIjoiMTgwNzA0IiwibmFtZSI6IlRpYnVyY2lvLCBQcmluY2UgSXZhbiBLZW50IiwicG9zaXRpb25fdGl0bGUiOiJTdGFmZiIsImRlcGFydG1lbnQiOiJGaW5hbmNlIEFuZCBTeXN0ZW1zIiwiZGl2aXNpb24iOiJBZG1pbmlzdHJhdGlvbiIsInNlY3Rpb24iOiJNYW5hZ2VtZW50IEluZm9ybWF0aW9uIFN5c3RlbSIsImNyZWF0ZWRfYXQiOiIyMDE5LTA2LTA2IDExOjE0OjE0In0.8gsD7GaYVfMsJQOzREGeKHr2ADrnVcfrb_cfCzGYTww',1,'2019-06-06 11:29:14','2019-06-06 11:14:14','2019-06-06 11:18:03'),
(6,1257,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoicmVxdWVzdG9yIiwiZW1wbG95ZWVfaWQiOjEyNTcsImVtcGxveWVlX25vIjoiMTgwNzA0IiwibmFtZSI6IlRpYnVyY2lvLCBQcmluY2UgSXZhbiBLZW50IiwicG9zaXRpb25fdGl0bGUiOiJTdGFmZiIsImRlcGFydG1lbnQiOiJGaW5hbmNlIEFuZCBTeXN0ZW1zIiwiZGl2aXNpb24iOiJBZG1pbmlzdHJhdGlvbiIsInNlY3Rpb24iOiJNYW5hZ2VtZW50IEluZm9ybWF0aW9uIFN5c3RlbSIsImNyZWF0ZWRfYXQiOiIyMDE5LTA2LTA2IDExOjI0OjE1In0.3aZX4_Fqf9pI9QGNzjdacv4VOqJE6gVWR3WfLxoJum4',0,'2019-06-06 11:39:15','2019-06-06 11:24:15','2019-06-06 11:24:15'),
(7,1257,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoicmVxdWVzdG9yIiwiZW1wbG95ZWVfaWQiOjEyNTcsImVtcGxveWVlX25vIjoiMTgwNzA0IiwibmFtZSI6IlRpYnVyY2lvLCBQcmluY2UgSXZhbiBLZW50IiwicG9zaXRpb25fdGl0bGUiOiJTdGFmZiIsImRlcGFydG1lbnQiOiJGaW5hbmNlIEFuZCBTeXN0ZW1zIiwiZGl2aXNpb24iOiJBZG1pbmlzdHJhdGlvbiIsInNlY3Rpb24iOiJNYW5hZ2VtZW50IEluZm9ybWF0aW9uIFN5c3RlbSIsImNyZWF0ZWRfYXQiOiIyMDE5LTA2LTA2IDExOjI0OjM0In0.ToZZx0Nf-Uxqi7ivjj-adDFgohz4ADMn7ZcXDkfXum8',1,'2019-06-06 11:39:34','2019-06-06 11:24:34','2019-06-06 11:25:04'),
(8,1257,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoicmVxdWVzdG9yIiwiZW1wbG95ZWVfaWQiOjEyNTcsImVtcGxveWVlX25vIjoiMTgwNzA0IiwibmFtZSI6IlRpYnVyY2lvLCBQcmluY2UgSXZhbiBLZW50IiwicG9zaXRpb25fdGl0bGUiOiJTdGFmZiIsImRlcGFydG1lbnQiOiJGaW5hbmNlIEFuZCBTeXN0ZW1zIiwiZGl2aXNpb24iOiJBZG1pbmlzdHJhdGlvbiIsInNlY3Rpb24iOiJNYW5hZ2VtZW50IEluZm9ybWF0aW9uIFN5c3RlbSIsImNyZWF0ZWRfYXQiOiIyMDE5LTA2LTA2IDExOjI1OjE3In0.S7c5S-80k4ToWOYxCdBfFzR1L3u6ZjiyvjY-iu3dZ48',0,'2019-06-06 11:40:17','2019-06-06 11:25:17','2019-06-06 11:25:17');

/*Table structure for table `item_approver_types` */

DROP TABLE IF EXISTS `item_approver_types`;

CREATE TABLE `item_approver_types` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `item_approver_types` */

insert  into `item_approver_types`(`id`,`type`,`created_at`,`updated_at`) values 
(1,'accounting',NULL,NULL),
(2,'corporate_service',NULL,NULL);

/*Table structure for table `items` */

DROP TABLE IF EXISTS `items`;

CREATE TABLE `items` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `description` text NOT NULL,
  `item_approver_type_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;

/*Data for the table `items` */

insert  into `items`(`id`,`description`,`item_approver_type_id`,`created_at`,`updated_at`) values 
(1,'Request for urgent release of cash advance',1,NULL,NULL),
(2,'Request for urgent release of payment',1,NULL,NULL),
(3,'Request for urgent airline booking',2,NULL,NULL),
(4,'Request for urgent vehicle reservation',2,NULL,NULL),
(5,'Request for urgent hotel booking',2,NULL,NULL);

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `migrations` */

insert  into `migrations`(`migration`,`batch`) values 
('2019_05_06_170453_create_api_tokens_table',1),
('2019_05_22_030009_create_requests_table',1),
('2019_05_22_030035_create_request_items_table',1),
('2019_05_22_030044_create_items_table',1),
('2019_05_22_030057_create_item_approver_types_table',1);

/*Table structure for table `request_items` */

DROP TABLE IF EXISTS `request_items`;

CREATE TABLE `request_items` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `request_id` int(10) unsigned NOT NULL,
  `item_id` int(10) unsigned NOT NULL,
  `target_date` date NOT NULL,
  `remarks` text NOT NULL,
  `item_approver_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

/*Data for the table `request_items` */

/*Table structure for table `requests` */

DROP TABLE IF EXISTS `requests`;

CREATE TABLE `requests` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `request_code` int(11) NOT NULL,
  `created_by` int(10) unsigned NOT NULL,
  `approver_id` int(10) unsigned NOT NULL,
  `justification` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `requests` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
