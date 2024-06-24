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
-- Table structure for table `return_courier_vehicle`
--

DROP TABLE IF EXISTS `return_courier_vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `return_courier_vehicle` (
  `courier_return_id` bigint NOT NULL AUTO_INCREMENT,
  `bike_condition` enum('GOOD','NORMAL','WORST') DEFAULT NULL,
  `car_assign_time` datetime(6) DEFAULT NULL,
  `car_return_time` datetime(6) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `courier_id` bigint DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `vehicle_id` bigint DEFAULT NULL,
  `courier_ebike_id` bigint DEFAULT NULL,
  PRIMARY KEY (`courier_return_id`),
  KEY `FK9chkq4koxxkre4odfckhy4fw8` (`courier_id`),
  KEY `FKj8c096o7ifrk60fa924vdijax` (`hub_id`),
  KEY `FKnxvexgstvq90pfls1lpldcjw7` (`vehicle_id`),
  KEY `FK21nyvo5r49d12sgecjwj3eky6` (`courier_ebike_id`),
  CONSTRAINT `FK21nyvo5r49d12sgecjwj3eky6` FOREIGN KEY (`courier_ebike_id`) REFERENCES `courier_ebike` (`courier_ebike_id`),
  CONSTRAINT `FK9chkq4koxxkre4odfckhy4fw8` FOREIGN KEY (`courier_id`) REFERENCES `courier` (`courier_id`),
  CONSTRAINT `FKj8c096o7ifrk60fa924vdijax` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKnxvexgstvq90pfls1lpldcjw7` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`vehicle_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `return_courier_vehicle`
--

LOCK TABLES `return_courier_vehicle` WRITE;
/*!40000 ALTER TABLE `return_courier_vehicle` DISABLE KEYS */;
INSERT INTO `return_courier_vehicle` VALUES (1,'GOOD','2024-05-17 15:08:30.046830','2024-05-17 15:08:46.912283','Ssddd',1,1,NULL,1);
/*!40000 ALTER TABLE `return_courier_vehicle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-01 22:43:10
