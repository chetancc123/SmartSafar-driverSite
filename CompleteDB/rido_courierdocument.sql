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
-- Table structure for table `courierdocument`
--

DROP TABLE IF EXISTS `courierdocument`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courierdocument` (
  `courier_id` bigint DEFAULT NULL,
  `courierdocument_id` bigint NOT NULL,
  `aadhaar_no` varchar(255) DEFAULT NULL,
  `account_holder_name` varchar(255) DEFAULT NULL,
  `account_no` varchar(255) DEFAULT NULL,
  `branch_name` varchar(255) DEFAULT NULL,
  `courier_driver_image` varchar(255) DEFAULT NULL,
  `ifsccode` varchar(255) DEFAULT NULL,
  `insurance` varchar(255) DEFAULT NULL,
  `licence` varchar(255) DEFAULT NULL,
  `pan_card_no` varchar(255) DEFAULT NULL,
  `passbook` varchar(255) DEFAULT NULL,
  `register_certificate` varchar(255) DEFAULT NULL,
  `vehicle_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`courierdocument_id`),
  UNIQUE KEY `UK_q993ste3jjm6lhbeutdkj2720` (`courier_id`),
  UNIQUE KEY `UK1typs7ubo7ie5k8m5gv68idv8` (`account_no`),
  UNIQUE KEY `UK1e8bfcksvlm1odikf8vstymh4` (`pan_card_no`),
  UNIQUE KEY `UK3nghk544la3ybklmkqtomla9t` (`aadhaar_no`),
  UNIQUE KEY `UKn7kf7grp18jaly2ni2o68mt5k` (`insurance`),
  UNIQUE KEY `UKl1oe0npb19r3kvy9d3993jf31` (`licence`),
  UNIQUE KEY `UKdmbee17voxip7jn0gqmj64hlo` (`register_certificate`),
  CONSTRAINT `FKpxjla1vg6kvlfjc8x1sewstcb` FOREIGN KEY (`courier_id`) REFERENCES `courier` (`courier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courierdocument`
--

LOCK TABLES `courierdocument` WRITE;
/*!40000 ALTER TABLE `courierdocument` DISABLE KEYS */;
INSERT INTO `courierdocument` VALUES (1,53,'9887766554','Rahul','9876543456','Raipur ','https://empoms.s3.amazonaws.com/479f88df-d086-4ffb-8a38-3e4f30a65a0d.jpeg','CBIno876',NULL,'https://empoms.s3.amazonaws.com/fcc868dc-5846-401d-ba17-4480735d67e4.jpeg',NULL,'https://empoms.s3.amazonaws.com/db529f7f-e447-47cd-ba7a-549a7ba0aa48.jpeg',NULL,NULL),(NULL,102,NULL,NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/ee3b3875-1b66-4327-ad90-06df6c4e3f30_21067b61-47fd-4f04-b96f-8c32440e62d4.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,103,NULL,NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/c9aa20f1-7193-470b-8d74-e4ae3bf6748b_ee3b3875-1b66-4327-ad90-06df6c4e3f30_21067b61-47fd-4f04-b96f-8c32440e62d4.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,152,NULL,NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/84783dd1-e309-4983-9dec-18f3843d1d9b_c9aa20f1-7193-470b-8d74-e4ae3bf6748b_ee3b3875-1b66-4327-ad90-06df6c4e3f30_21067b61-47fd-4f04-b96f-8c32440e62d4.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,153,NULL,NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/d8604339-24dd-4997-a1c8-a5d3aedc9efb_84783dd1-e309-4983-9dec-18f3843d1d9b_c9aa20f1-7193-470b-8d74-e4ae3bf6748b_ee3b3875-1b66-4327-ad90-06df6c4e3f30_21067b61-47fd-4f04-b96f-8c32440e62d4.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,158,NULL,NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/8c5e2db1-72bd-4e5a-a3bb-b2130b23ee42_7ff1ff34-559d-484f-a591-320124a5d1a4.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,202,NULL,NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/b30411b6-54af-4cb3-9259-19c9239cd469_90bd8e87-a1ec-4e17-9392-76b68872f1da.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `courierdocument` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-01 22:43:14
