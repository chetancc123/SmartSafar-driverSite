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
-- Table structure for table `booking_table`
--

DROP TABLE IF EXISTS `booking_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_table` (
  `extra_km_charge` double NOT NULL,
  `free_kms` double NOT NULL,
  `gst` double NOT NULL,
  `refundable_deposit` double NOT NULL,
  `rental_charge` double NOT NULL,
  `total_amount` decimal(38,2) DEFAULT NULL,
  `booking_id` bigint NOT NULL AUTO_INCREMENT,
  `driver_id` bigint DEFAULT NULL,
  `drop_off_location_user_location_id` bigint DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `huhemp_id` bigint DEFAULT NULL,
  `pickup_location_user_location_id` bigint DEFAULT NULL,
  `time_duration_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `promo_code` varchar(255) DEFAULT NULL,
  `ride_order_status` enum('BOOKED','COMPLETE','IN_COMPLETE','CANCELLED','APPROVED') DEFAULT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `FKdkfwgn0ufqp5jorg7fem44uju` (`driver_id`),
  KEY `FKr41vta43fahl4qww84r4lyhrm` (`drop_off_location_user_location_id`),
  KEY `FKpckxubjhr7jbxcguh6b0gsusk` (`hub_id`),
  KEY `FKgmskv8ccreqgqu77eljnh8rd` (`huhemp_id`),
  KEY `FK3citv01jcgni9ucs5jenisy69` (`pickup_location_user_location_id`),
  KEY `FK7h1efobu3sndge6jiyewag6sa` (`time_duration_id`),
  KEY `FKiv17xibv1nx23hxq9prwfbbva` (`user_id`),
  CONSTRAINT `FK3citv01jcgni9ucs5jenisy69` FOREIGN KEY (`pickup_location_user_location_id`) REFERENCES `user_location` (`user_location_id`),
  CONSTRAINT `FK7h1efobu3sndge6jiyewag6sa` FOREIGN KEY (`time_duration_id`) REFERENCES `time_duration` (`id`),
  CONSTRAINT `FKdkfwgn0ufqp5jorg7fem44uju` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`),
  CONSTRAINT `FKgmskv8ccreqgqu77eljnh8rd` FOREIGN KEY (`huhemp_id`) REFERENCES `hub_employee` (`hub_employee_id`),
  CONSTRAINT `FKiv17xibv1nx23hxq9prwfbbva` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKpckxubjhr7jbxcguh6b0gsusk` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKr41vta43fahl4qww84r4lyhrm` FOREIGN KEY (`drop_off_location_user_location_id`) REFERENCES `user_location` (`user_location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_table`
--

LOCK TABLES `booking_table` WRITE;
/*!40000 ALTER TABLE `booking_table` DISABLE KEYS */;
INSERT INTO `booking_table` VALUES (0,0,0.5,0,0,7604.86,1,53,2,1,NULL,1,66,2,'ca on water bottel',NULL,'BOOKED'),(0,0,0.5,0,0,7604.86,2,53,53,1,NULL,52,67,53,'ca on water bottel',NULL,'COMPLETE');
/*!40000 ALTER TABLE `booking_table` ENABLE KEYS */;
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
