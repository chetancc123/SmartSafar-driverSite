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
-- Table structure for table `sender_receiver_info`
--

DROP TABLE IF EXISTS `sender_receiver_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sender_receiver_info` (
  `receiver_latitude` double DEFAULT NULL,
  `receiver_longitude` double DEFAULT NULL,
  `sender_latitude` double DEFAULT NULL,
  `sender_longitude` double DEFAULT NULL,
  `total_distance` double NOT NULL,
  `courier_booking_courier_booking_id` bigint DEFAULT NULL,
  `courier_courier_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_user_id` bigint DEFAULT NULL,
  `expected_time` varchar(255) DEFAULT NULL,
  `receiver_address` varchar(255) DEFAULT NULL,
  `receiver_location` varchar(255) DEFAULT NULL,
  `receiver_name` varchar(255) DEFAULT NULL,
  `receiver_phone_number` varchar(255) DEFAULT NULL,
  `sender_address` varchar(255) DEFAULT NULL,
  `sender_location` varchar(255) DEFAULT NULL,
  `sender_name` varchar(255) DEFAULT NULL,
  `sender_phone_number` varchar(255) DEFAULT NULL,
  `vehicle_type` enum('TWO_WHEELER','FOUR_WHEELER') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_at0m7gymvu9x2y08iohfk2u79` (`courier_booking_courier_booking_id`),
  KEY `FK46r4n52rlm6lj10j5a0mjeau5` (`courier_courier_id`),
  KEY `FKclsttceld1ce337ote4fhvl1j` (`user_user_id`),
  CONSTRAINT `FK46r4n52rlm6lj10j5a0mjeau5` FOREIGN KEY (`courier_courier_id`) REFERENCES `courier` (`courier_id`),
  CONSTRAINT `FKclsttceld1ce337ote4fhvl1j` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKrqecsnucortorfae0mvqvujds` FOREIGN KEY (`courier_booking_courier_booking_id`) REFERENCES `courier_booking` (`courier_booking_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sender_receiver_info`
--

LOCK TABLES `sender_receiver_info` WRITE;
/*!40000 ALTER TABLE `sender_receiver_info` DISABLE KEYS */;
INSERT INTO `sender_receiver_info` VALUES (NULL,NULL,NULL,NULL,0,1,1,1,1,'2 hour 5mint','bhilai','bhilai','rabina','+919927335197','raipur','raipur','jyoti','+919927335197',NULL);
/*!40000 ALTER TABLE `sender_receiver_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-01 22:43:13
