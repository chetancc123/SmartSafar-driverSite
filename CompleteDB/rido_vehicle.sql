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
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `distance` double NOT NULL,
  `price_per_km` decimal(38,2) DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `vehicle_id` bigint NOT NULL,
  `battery` varchar(255) DEFAULT NULL,
  `charging_time` varchar(255) DEFAULT NULL,
  `insurance_no` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `seating_capacity` varchar(255) DEFAULT NULL,
  `transmission_typo` varchar(255) DEFAULT NULL,
  `vehicle_image_name` varchar(255) DEFAULT NULL,
  `vehicle_img_link` varchar(255) DEFAULT NULL,
  `vehicle_name` varchar(255) DEFAULT NULL,
  `vehicle_no` varchar(255) DEFAULT NULL,
  `vehicle_img` mediumblob,
  `vehicle_service_type` enum('STANDARD','PREMIUM') DEFAULT NULL,
  `vehicle_status` enum('AVAILABLE','ENGAGED','MAINTENANCE') DEFAULT NULL,
  `vehicle_type` enum('TWO_WHEELER','FOUR_WHEELER') DEFAULT NULL,
  `assign_hub_date` datetime(6) DEFAULT NULL,
  `admin_id` bigint DEFAULT NULL,
  `chassis_no` varchar(255) NOT NULL,
  `date_of_purchase` datetime(6) DEFAULT NULL,
  `invoice` varchar(255) DEFAULT NULL,
  `vehiclerange` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`vehicle_id`),
  UNIQUE KEY `UK2sil9hywncq3g0e4f51qhe6ib` (`vehicle_no`),
  UNIQUE KEY `UK3fncshhpmbluog61sfknkbpin` (`insurance_no`),
  KEY `FK9mxstgi1rgoa9kebepcuclmmx` (`hub_id`),
  KEY `FKmvpv57g2s60juo7v2d0yb8rab` (`admin_id`),
  CONSTRAINT `FK9mxstgi1rgoa9kebepcuclmmx` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKmvpv57g2s60juo7v2d0yb8rab` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (0,30.00,NULL,1,'Lithium-ion','2 hours','INS127','200000','2','Automatic',NULL,'https://empoms.s3.amazonaws.com/b0c80466-aac4-4687-ab82-8c054973ce62_Screenshot 2024-02-15 114525.png','OLA','CG14127',NULL,'PREMIUM','ENGAGED','FOUR_WHEELER',NULL,1,'',NULL,NULL,NULL),(0,30.00,NULL,3,'Lithium-ion','2 hours','INS234527','200000','2','Automatic',NULL,'https://empoms.s3.amazonaws.com/1b04afd4-ebec-412f-bb38-1892e0da69d5_Screenshot 2024-02-15 114525.png','OLA','CG14467',NULL,'PREMIUM','AVAILABLE','TWO_WHEELER',NULL,1,'',NULL,NULL,NULL);
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-01 22:43:18
