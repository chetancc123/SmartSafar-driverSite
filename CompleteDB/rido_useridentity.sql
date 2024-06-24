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
-- Table structure for table `useridentity`
--

DROP TABLE IF EXISTS `useridentity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `useridentity` (
  `id` bigint NOT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKegd9rrcvi8ja9eok9gn4323p9` (`username`),
  UNIQUE KEY `UKcvviunakrl7h613gxqr2pbeb6` (`email`),
  UNIQUE KEY `UKgq4u81tqvtnhn5pck9qtj9wcc` (`phone_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useridentity`
--

LOCK TABLES `useridentity` WRITE;
/*!40000 ALTER TABLE `useridentity` DISABLE KEYS */;
INSERT INTO `useridentity` VALUES (1,NULL,'rahul@gmail.com',NULL,'$2a$10$.aLAKkaUBO0O07ct0qseFuCNxn3PO074I72c3il.OAjd8TD9jY9t.','+91877632222234',NULL),(2,NULL,'Rr@gmail.com','jy','$2a$10$fARLPgW2lioq6RVs4XDhxugnyYywkl0dgU9umlPl0vVtxr92c5GoO','+919927335197',NULL),(3,NULL,'jk@gmail.com',NULL,'$2a$10$5Oe44zH2NKCWGRWPLtkvS.x.XGFcBHaXAsB7TdRPEoXkism2qHH3a','+91854545237866','jk'),(52,NULL,'Ram@gmail.com','ram','$2a$10$7cKHL0JenQWZsGjoWrIZQeymwrxX0xkh/U.PvOhEEAtz5wrcjFOj6','56787665456754',NULL),(203,NULL,'Harsh@gmail.com','Rishikesh Bareth','$2a$10$yEaK3/45L0H0qsBPP7.S.ONxcfSSApNacl02wJZ/d6p52XyNieV3.','32446843132',NULL),(252,NULL,'jaadu@gmail.com',NULL,'$2a$10$mgKn/LprGKpnBQbzZ8KNCO5Rq8sokqm2pr9sO07gA41oRlR/qA7xu','+916266180889','jaadu'),(303,NULL,'jccu@gmail.com',NULL,'$2a$10$56ZdiKOgvE20hz9uIxHP4OoQ2Oz1ogSyOLjw43/0stXkLCNI8g2RW','+916266190889','jcc'),(304,NULL,'jttu@gmail.com',NULL,'$2a$10$eHiPPjfM5kpt/I55UtG7FuW/Pu9DIkaKpfPXjTBselLEYMTB50EFK','+916260190889','jtt');
/*!40000 ALTER TABLE `useridentity` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-01 22:43:21
