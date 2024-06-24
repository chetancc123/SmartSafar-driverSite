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
-- Table structure for table `courierbooking`
--

DROP TABLE IF EXISTS `courierbooking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courierbooking` (
  `courier_booking_id` bigint NOT NULL,
  `gst` double NOT NULL,
  `promo_code` varchar(255) DEFAULT NULL,
  `receiver_name` varchar(255) DEFAULT NULL,
  `rental_charge` double NOT NULL,
  `ride_order_status` tinyint DEFAULT NULL,
  `sender_name` varchar(255) DEFAULT NULL,
  `total_amount` decimal(38,2) DEFAULT NULL,
  `courier_id` bigint DEFAULT NULL,
  `drop_off_location_user_location_id` bigint DEFAULT NULL,
  `pickup_location_user_location_id` bigint DEFAULT NULL,
  `time_duration_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`courier_booking_id`),
  KEY `FKglu9m08v0k2tysursr73pd7tb` (`drop_off_location_user_location_id`),
  KEY `FKrsfsqab48bvdt1paa5gcylx7j` (`pickup_location_user_location_id`),
  KEY `FKkjljwt841adldikri76solw9w` (`time_duration_id`),
  KEY `FKhl4mtgsytwh2mmpsv6iqodxnj` (`user_id`),
  CONSTRAINT `FKglu9m08v0k2tysursr73pd7tb` FOREIGN KEY (`drop_off_location_user_location_id`) REFERENCES `user_location` (`user_location_id`),
  CONSTRAINT `FKhl4mtgsytwh2mmpsv6iqodxnj` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKkjljwt841adldikri76solw9w` FOREIGN KEY (`time_duration_id`) REFERENCES `time_duration` (`id`),
  CONSTRAINT `FKrsfsqab48bvdt1paa5gcylx7j` FOREIGN KEY (`pickup_location_user_location_id`) REFERENCES `user_location` (`user_location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courierbooking`
--

LOCK TABLES `courierbooking` WRITE;
/*!40000 ALTER TABLE `courierbooking` DISABLE KEYS */;
/*!40000 ALTER TABLE `courierbooking` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-01 22:43:16
