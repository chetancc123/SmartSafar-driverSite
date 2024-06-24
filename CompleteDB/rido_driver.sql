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
-- Table structure for table `driver`
--

DROP TABLE IF EXISTS `driver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver` (
  `driver_latitude` double NOT NULL,
  `driver_longitude` double NOT NULL,
  `adhar_no` bigint DEFAULT NULL,
  `driver_id` bigint NOT NULL,
  `hub_id` bigint DEFAULT NULL,
  `vehicle_vehicle_id` bigint DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `alt_phone_number` varchar(255) DEFAULT NULL,
  `dl_number` varchar(255) DEFAULT NULL,
  `driver_uniqe_id` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `insurance_no` varchar(255) DEFAULT NULL,
  `licence_no` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `pan_no` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `profile_img_link` varchar(255) DEFAULT NULL,
  `user_phone_no_otp` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `driver_type` enum('TWO_WHEELER','FOUR_WHEELER') DEFAULT NULL,
  `status` enum('AVAILABLE','ONGOING','IN_COMPLETED') DEFAULT NULL,
  `vehicle_assign_status` enum('CHECKIN','CHECKOUT') DEFAULT NULL,
  `admin_id` bigint DEFAULT NULL,
  PRIMARY KEY (`driver_id`),
  UNIQUE KEY `UK1a5ifv9d7c1kcxvpu226ckim4` (`username`),
  UNIQUE KEY `UKfchuyotq64tagkwktlh4qttyy` (`email`),
  UNIQUE KEY `UKgt3hg5tgbcc4jiulifqil0nd8` (`phone_no`),
  UNIQUE KEY `UK_btxr2v7fgr183pgpcgwpuxe1e` (`vehicle_vehicle_id`),
  UNIQUE KEY `UK76qukw6feftm2kcva9992wrg5` (`pan_no`),
  UNIQUE KEY `UK1aoeqycgfo4g4u42hf94ho8ab` (`dl_number`),
  UNIQUE KEY `UKtosfgltkwr6gyh17iky263o60` (`adhar_no`),
  KEY `FKasr05mx4fm7e3qneopw81ew1m` (`hub_id`),
  KEY `FKefeyq7typopo914t2qtvvd1kv` (`admin_id`),
  CONSTRAINT `FK8w6q7qclk7gsbwcfi5pewqdxc` FOREIGN KEY (`vehicle_vehicle_id`) REFERENCES `vehicle` (`vehicle_id`),
  CONSTRAINT `FKasr05mx4fm7e3qneopw81ew1m` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKefeyq7typopo914t2qtvvd1kv` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver`
--

LOCK TABLES `driver` WRITE;
/*!40000 ALTER TABLE `driver` DISABLE KEYS */;
INSERT INTO `driver` VALUES (5.7749,-0.4194,123345464747,53,1,1,'raipur','+98765443225','dl74647','DUR177','Harsh@gmail.com',NULL,NULL,NULL,NULL,'Rishikesh Bareth','pan23434','$2a$10$yEaK3/45L0H0qsBPP7.S.ONxcfSSApNacl02wJZ/d6p52XyNieV3.','32446843132','https://empoms.s3.amazonaws.com/a54cb71c-e8e4-43c1-a99f-19e2e6b581ba_d09d6e0c-ba32-4832-ba02-543e04d44d6d.jpeg',NULL,NULL,'FOUR_WHEELER','AVAILABLE','CHECKIN',NULL);
/*!40000 ALTER TABLE `driver` ENABLE KEYS */;
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
