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
-- Table structure for table `courier_ebike`
--

DROP TABLE IF EXISTS `courier_ebike`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courier_ebike` (
  `courier_ebike_id` bigint NOT NULL AUTO_INCREMENT,
  `battery` varchar(255) DEFAULT NULL,
  `charging_time` varchar(255) DEFAULT NULL,
  `ebike_image` varchar(255) DEFAULT NULL,
  `insurance_no` varchar(255) DEFAULT NULL,
  `rc` varchar(255) DEFAULT NULL,
  `top_speed` double NOT NULL,
  `vehicle_name` varchar(255) DEFAULT NULL,
  `vehicle_no` varchar(255) DEFAULT NULL,
  `vehicle_status` enum('AVAILABLE','ENGAGED','MAINTENANCE') DEFAULT NULL,
  `weight` double NOT NULL,
  `hub_id` bigint DEFAULT NULL,
  `price_per_km` decimal(38,2) DEFAULT NULL,
  `courier_courier_id` bigint DEFAULT NULL,
  `admin_id` bigint DEFAULT NULL,
  `assign_hub_date` datetime(6) DEFAULT NULL,
  `chassis_no` varchar(255) NOT NULL,
  `date_of_purchase` datetime(6) DEFAULT NULL,
  `ebikerange` varchar(255) DEFAULT NULL,
  `invoice` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`courier_ebike_id`),
  UNIQUE KEY `UK_ox9163o0fijjaf9172kmav0nn` (`chassis_no`),
  KEY `FKm6b9kqv9blti1hh4kj8bqt9yr` (`hub_id`),
  KEY `FKobfbqxehsa2qllxixkh70pom1` (`courier_courier_id`),
  KEY `FKg8t9k7d72e1bulj7wvi57mvuf` (`admin_id`),
  CONSTRAINT `FKg8t9k7d72e1bulj7wvi57mvuf` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`),
  CONSTRAINT `FKm6b9kqv9blti1hh4kj8bqt9yr` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKobfbqxehsa2qllxixkh70pom1` FOREIGN KEY (`courier_courier_id`) REFERENCES `courier` (`courier_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courier_ebike`
--

LOCK TABLES `courier_ebike` WRITE;
/*!40000 ALTER TABLE `courier_ebike` DISABLE KEYS */;
INSERT INTO `courier_ebike` VALUES (1,'Lithium-ion','23hours','https://empoms.s3.amazonaws.com/addcar.png','123496789','12EF23',29,'CourierEbike12','EB1239','AVAILABLE',54.5,1,NULL,1,NULL,NULL,'',NULL,NULL,NULL);
/*!40000 ALTER TABLE `courier_ebike` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-01 22:43:11
