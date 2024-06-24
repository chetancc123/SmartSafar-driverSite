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
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `booking_id` bigint DEFAULT NULL,
  `driver_id` bigint DEFAULT NULL,
  `ebike_booking_id` bigint DEFAULT NULL,
  `local_datetime` datetime(6) DEFAULT NULL,
  `my_order_id` bigint NOT NULL,
  `rental_booking_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `order_id` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `payement_id` varchar(255) DEFAULT NULL,
  `receipt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`my_order_id`),
  KEY `FKtgmx3e6ri3nrmwsscggsm7jp5` (`booking_id`),
  KEY `FKaao5vn31onxupg3mqndsms1ji` (`driver_id`),
  KEY `FK3ywlccbjsypsshklsj63983jc` (`ebike_booking_id`),
  KEY `FKl63yn61pd8vbly72s06csiwbm` (`rental_booking_id`),
  KEY `FK4spfnm9si9dowsatcqs5or42i` (`user_id`),
  CONSTRAINT `FK3ywlccbjsypsshklsj63983jc` FOREIGN KEY (`ebike_booking_id`) REFERENCES `ebike_booking` (`ebike_booking_id`),
  CONSTRAINT `FK4spfnm9si9dowsatcqs5or42i` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKaao5vn31onxupg3mqndsms1ji` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`),
  CONSTRAINT `FKl63yn61pd8vbly72s06csiwbm` FOREIGN KEY (`rental_booking_id`) REFERENCES `rental_booking` (`rental_booking_id`),
  CONSTRAINT `FKtgmx3e6ri3nrmwsscggsm7jp5` FOREIGN KEY (`booking_id`) REFERENCES `booking_table` (`booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,NULL,NULL,'2024-05-30 11:55:00.000000',1,NULL,2,'760486','order_OGbajGdj3F1rFZ','gfghfhj','order_OGbajGdj3F1rFZ','receipt #1'),(2,NULL,NULL,'2024-05-30 12:25:00.000000',2,NULL,2,'760486','order_OGc6vyWCh3VJyh','created','order_OGc6vyWCh3VJyh','receipt #1');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-01 22:43:25
