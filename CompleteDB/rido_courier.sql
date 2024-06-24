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
-- Table structure for table `courier`
--

DROP TABLE IF EXISTS `courier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courier` (
  `courier_driver_latitude` double NOT NULL,
  `courier_driver_longitude` double NOT NULL,
  `distance_from_sender` double NOT NULL,
  `price` decimal(38,2) DEFAULT NULL,
  `price_per_km` double NOT NULL,
  `weight` double NOT NULL,
  `courier_id` bigint NOT NULL,
  `hub_id` bigint DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `owner_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `vehicle_no` varchar(255) DEFAULT NULL,
  `vehicle_type` enum('TWO_WHEELER','FOUR_WHEELER') DEFAULT NULL,
  `approve_status` enum('PENDING','APPROVED','REJECTED') DEFAULT NULL,
  `vehicle_status` enum('AVAILABLE','ENGAGED','MAINTENANCE') DEFAULT NULL,
  `vehicle_assign_status` enum('CHECKIN','CHECKOUT') DEFAULT NULL,
  `vehicle_category` enum('ACE','GOLD','LOAD','E_BIKE') DEFAULT NULL,
  `courierdocument_id` bigint DEFAULT NULL,
  `status` enum('AVAILABLE','ONGOING','IN_COMPLETED') DEFAULT NULL,
  PRIMARY KEY (`courier_id`),
  UNIQUE KEY `UK_6ogghg7dc3se2gyc9i77rrsf2` (`courierdocument_id`),
  UNIQUE KEY `UK5q13escs61qi382wca3bpdmcr` (`vehicle_no`),
  UNIQUE KEY `UKpqhnql5qw4w1j3fldfsugrt6m` (`email`),
  UNIQUE KEY `UK72ax5n5ws7h2ujrre02bm8sa0` (`phone_no`),
  KEY `FK5ua4fi9hs23qu8rnd1lqsw4pn` (`hub_id`),
  CONSTRAINT `FK5ua4fi9hs23qu8rnd1lqsw4pn` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKeq50xgdm6jmi6nlu8j0q1p737` FOREIGN KEY (`courierdocument_id`) REFERENCES `courierdocument` (`courierdocument_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courier`
--

LOCK TABLES `courier` WRITE;
/*!40000 ALTER TABLE `courier` DISABLE KEYS */;
INSERT INTO `courier` VALUES (0,0,0,NULL,0,0,1,1,NULL,'Rr@gmail.com','Rishi Raj','$2a$10$fARLPgW2lioq6RVs4XDhxugnyYywkl0dgU9umlPl0vVtxr92c5GoO','+919927335197',NULL,'TWO_WHEELER','APPROVED','AVAILABLE','CHECKOUT','ACE',202,NULL),(0,0,0,NULL,0,0,2,1,NULL,'Ram@gmail.com','ram','$2a$10$7cKHL0JenQWZsGjoWrIZQeymwrxX0xkh/U.PvOhEEAtz5wrcjFOj6','56787665456754',NULL,'FOUR_WHEELER',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `courier` ENABLE KEYS */;
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
