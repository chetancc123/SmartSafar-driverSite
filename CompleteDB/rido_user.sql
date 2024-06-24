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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `dob` datetime(6) DEFAULT NULL,
  `user_id` bigint NOT NULL,
  `alternative_no` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_profile_link` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `otp` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UKsb8bbouer5wak8vyiiy4pf2bx` (`username`),
  UNIQUE KEY `UKob8kqyqqgmefl0aco34akdtpe` (`email`),
  UNIQUE KEY `UKf8t8gieb3aqt12uddh3tfkx9m` (`phone_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (NULL,1,NULL,'jk@gmail.com',NULL,NULL,NULL,NULL,NULL,'$2a$10$5Oe44zH2NKCWGRWPLtkvS.x.XGFcBHaXAsB7TdRPEoXkism2qHH3a','+91854545237866','jk'),('1990-05-15 05:30:00.000000',2,'1234567890',NULL,'female',NULL,'https://empoms.s3.amazonaws.com/8081b7bb-5318-4a91-9931-fded52a6918e_g.png','Jaleshwari',NULL,'$2a$10$mgKn/LprGKpnBQbzZ8KNCO5Rq8sokqm2pr9sO07gA41oRlR/qA7xu','','jaadu'),('1990-05-15 05:30:00.000000',52,'1234567890',NULL,'female',NULL,'https://empoms.s3.amazonaws.com/c2681e08-d20f-4427-aaaf-452b0134c190_g.png','Jcc',NULL,'$2a$10$56ZdiKOgvE20hz9uIxHP4OoQ2Oz1ogSyOLjw43/0stXkLCNI8g2RW',NULL,'jcc'),('1990-05-15 05:30:00.000000',53,'1234567890',NULL,'female',NULL,'https://empoms.s3.amazonaws.com/48d654c3-3e47-4114-ba35-f8bf3795b173_g.png','Jttu',NULL,'$2a$10$eHiPPjfM5kpt/I55UtG7FuW/Pu9DIkaKpfPXjTBselLEYMTB50EFK','+916266180866','jtt');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-01 22:43:19
