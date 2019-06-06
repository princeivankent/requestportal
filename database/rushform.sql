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
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4;

/*Data for the table `api_tokens` */

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
(1,'accounting','2019-05-22 11:37:40','2019-05-22 11:37:46'),
(2,'corporate_service','2019-05-22 11:37:43','2019-05-22 11:37:49');

/*Table structure for table `items` */

DROP TABLE IF EXISTS `items`;

CREATE TABLE `items` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `description` text NOT NULL,
  `item_approver_type_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk.item_approver_type_id` (`item_approver_type_id`),
  CONSTRAINT `fk.item_approver_type_id` FOREIGN KEY (`item_approver_type_id`) REFERENCES `item_approver_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

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
('2019_05_22_030009_create_requests_table',2),
('2019_05_22_030035_create_request_items_table',2),
('2019_05_22_030044_create_items_table',2),
('2019_05_22_030057_create_item_approver_types_table',3);

/*Table structure for table `request_items` */

DROP TABLE IF EXISTS `request_items`;

CREATE TABLE `request_items` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `request_id` bigint(20) unsigned NOT NULL,
  `item_id` bigint(20) unsigned NOT NULL,
  `target_date` date NOT NULL,
  `remarks` text,
  `item_approver_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk.request_id` (`request_id`),
  KEY `fk.item_id` (`item_id`),
  CONSTRAINT `fk.item_id` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk.request_id` FOREIGN KEY (`request_id`) REFERENCES `requests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4;

/*Data for the table `requests` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
