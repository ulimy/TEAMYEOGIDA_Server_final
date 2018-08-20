-- MySQL dump 10.13  Distrib 5.7.23, for Win64 (x86_64)
--
-- Host: localhost    Database: yeogida
-- ------------------------------------------------------
-- Server version	5.7.23-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productinfo`
--

DROP TABLE IF EXISTS `productinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productinfo` (
  `productpid` int(11) NOT NULL AUTO_INCREMENT,
  `productname` varchar(50) DEFAULT NULL,
  `productdate_s` date DEFAULT NULL,
  `productprice` int(11) DEFAULT NULL,
  `productimage` varchar(50) DEFAULT NULL,
  `productphone` int(11) DEFAULT NULL,
  `producthit` int(11) DEFAULT '0',
  `checker` tinyint(4) DEFAULT '0',
  `personpid` int(11) DEFAULT NULL,
  `productUrl` varchar(45) DEFAULT NULL,
  `formerprice` int(11) DEFAULT NULL,
  `productaddress_x` float DEFAULT NULL,
  `productaddress_y` float DEFAULT NULL,
  `productaddress` varchar(50) DEFAULT NULL,
  `text` longtext,
  `productdate_e` date DEFAULT NULL,
  PRIMARY KEY (`productpid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productinfo`
--

LOCK TABLES `productinfo` WRITE;
/*!40000 ALTER TABLE `productinfo` DISABLE KEYS */;
INSERT INTO `productinfo` VALUES (1,'A펜션','2018-08-07',150000,'이미지1',NULL,0,1,2,'url1',300000,31.1234,94.234,'서울시 종로구','사',NULL),(2,'A펜션','2018-08-07',150000,'이미지경로',NULL,0,0,2,'URL',6000000,19.234,14.254,'서울시 광진구','팝니다',NULL),(3,'A펜션','2018-08-07',150000,'이미지경로',NULL,0,0,2,'URL',6000000,19.234,14.254,'경기도','팝니다',NULL),(4,'B펜션','2018-08-07',150000,'이미지경로',NULL,0,0,1,'URL',6000000,19.234,14.254,'경기도','팝니다',NULL),(5,'C펜션','2018-08-07',150000,'이미지경로',NULL,0,0,2,'URL',6000000,19.234,14.254,'부산','팝니다',NULL),(6,'D펜션','2018-08-07',150000,'이미지경로',NULL,0,0,1,'URL',6000000,19.234,14.254,'부산','팝니다',NULL),(7,'E펜션','2018-08-07',150000,'이미지경로',NULL,0,0,1,'URL',6000000,19.234,14.254,'부산','팝니다',NULL),(8,'F펜션','2018-08-10',150000,'이미지경로',NULL,0,0,1,'URL',6000000,19.234,14.254,'부산','팝니다',NULL),(9,'G펜션','2018-08-01',150000,'이미지경로',NULL,0,0,1,'URL',6000000,19.234,14.254,'부산','팝니다',NULL);
/*!40000 ALTER TABLE `productinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-20 14:50:39