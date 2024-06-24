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
-- Table structure for table `courier_driver`
--

DROP TABLE IF EXISTS `courier_driver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courier_driver` (
  `id` bigint NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `courier_driver_latitude` double NOT NULL,
  `courier_driver_longitude` double NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `local_date_time` datetime(6) DEFAULT NULL,
  `owner_name` varchar(255) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `pickup_notes` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `price_per_km` double NOT NULL,
  `vehicle_no` varchar(255) DEFAULT NULL,
  `vehicle_status` tinyint DEFAULT NULL,
  `vehicle_type` varchar(255) DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `vehicle_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtjnm3ovnsb90sba18rfp54dxw` (`hub_id`),
  KEY `FK33mttxts0myebyeahdl5a6yyw` (`vehicle_id`),
  CONSTRAINT `FK33mttxts0myebyeahdl5a6yyw` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`vehicle_id`),
  CONSTRAINT `FKtjnm3ovnsb90sba18rfp54dxw` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `courier_driver_chk_1` CHECK ((`vehicle_status` between 0 and 2))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courier_driver`
--

LOCK TABLES `courier_driver` WRITE;
/*!40000 ALTER TABLE `courier_driver` DISABLE KEYS */;
/*!40000 ALTER TABLE `courier_driver` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-01 22:43:20
