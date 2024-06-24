-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: rido
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `driver_document`
--

DROP TABLE IF EXISTS `driver_document`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver_document` (
  `approved` bit(1) NOT NULL,
  `rejected` bit(1) NOT NULL,
  `driver_documentid` bigint NOT NULL AUTO_INCREMENT,
  `driver_id` bigint DEFAULT NULL,
  `account_holder_name` varchar(255) DEFAULT NULL,
  `account_no` varchar(255) DEFAULT NULL,
  `adhar_card` varchar(255) DEFAULT NULL,
  `branch_name` varchar(255) DEFAULT NULL,
  `daddressproof` varchar(255) DEFAULT NULL,
  `dl` varchar(255) DEFAULT NULL,
  `dpassbook` varchar(255) DEFAULT NULL,
  `dphoto` varchar(255) DEFAULT NULL,
  `driver_image` varchar(255) DEFAULT NULL,
  `driver_pan_card` varchar(255) DEFAULT NULL,
  `driver_signature` varchar(255) DEFAULT NULL,
  `dsignature` varchar(255) DEFAULT NULL,
  `ifsccode` varchar(255) DEFAULT NULL,
  `vfv` varchar(255) DEFAULT NULL,
  `vrc` varchar(255) DEFAULT NULL,
  `vsv` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`driver_documentid`),
  UNIQUE KEY `UK_1hmty79gib646wlsaqidpg15n` (`driver_id`),
  CONSTRAINT `FK9mrv7olse081hbdisim0h8tc7` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver_document`
--

LOCK TABLES `driver_document` WRITE;
/*!40000 ALTER TABLE `driver_document` DISABLE KEYS */;
INSERT INTO `driver_document` VALUES (_binary '\0',_binary '\0',3,53,NULL,NULL,'https://empoms.s3.amazonaws.com/57a5b24b-2168-4709-9076-938783fa5fb7_8fc52c8f-cf09-4af2-bd08-0b3005387d9c.jpeg',NULL,NULL,'https://empoms.s3.amazonaws.com/e2283626-82a8-46a7-9778-a0cce8bc92f8_0f4e5dc9-bc6b-4573-a9fa-cfca9c09745c.jpeg','https://empoms.s3.amazonaws.com/693ad25a-bc9d-4caf-a252-a6206ef2182d_12aec2dc-9c20-415d-a9f4-776822824d0f.jpeg',NULL,'https://empoms.s3.amazonaws.com/d12226b2-8a6b-4b0d-bacb-dd47a05c1173_d4db8951-242c-47bd-8aab-9b36c8d7878f.jpeg',NULL,'https://empoms.s3.amazonaws.com/b9b1d402-7fe3-44ff-9cb7-37ec59a7d66d_6a7e0747-59dc-4900-a04d-11c68d02ac4e.jpeg',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `driver_document` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-01 22:43:12
