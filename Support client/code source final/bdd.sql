-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 29, 2018 at 02:55 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `client_support`
--
DROP DATABASE IF EXISTS `client_support`;
CREATE DATABASE IF NOT EXISTS `client_support` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `client_support`;

-- --------------------------------------------------------

--
-- Table structure for table `categorie`
--

CREATE TABLE IF NOT EXISTS `categorie` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categorie`
--

INSERT INTO `categorie` (`id`, `libelle`) VALUES
(1, 'Expédition'),
(2, 'Suivi'),
(3, 'SAV'),
(4, 'Support technique');

-- --------------------------------------------------------

--
-- Table structure for table `demande`
--

CREATE TABLE IF NOT EXISTS `demande` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `email` varchar(70) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `objet` varchar(150) NOT NULL,
  `contenu` text NOT NULL,
  `id_categorie` int(5) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categorie` (`id_categorie`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `demande`
--

INSERT INTO `demande` (`id`, `nom`, `email`, `date`, `objet`, `contenu`, `id_categorie`) VALUES
(1, 'Audrey', 'audrey@gmail.com', '2018-11-29 15:49:23', 'Fonctionnement produit', 'Bonjour,\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim vitae purus imperdiet bibendum a in justo. Nunc vitae interdum elit, nec faucibus arcu. Nunc nec nibh nec arcu suscipit vehicula ut feugiat purus. In ultricies a libero ut pharetra. Aliquam congue pulvinar lorem non fringilla. In molestie varius sapien id sagittis. Donec auctor dui vitae tortor euismod auctor.\r\n\r\nSed sit amet quam mauris. Ut sit amet tellus laoreet, ullamcorper lorem ac, lobortis eros. Duis vel risus in turpis rhoncus efficitur. Proin eu dignissim metus, at euismod ante. Nullam ac pretium felis. Sed rutrum ipsum non tortor pellentesque, nec tempor nunc rhoncus. Suspendisse gravida tempus lectus, sed lobortis dolor vehicula nec. Cras euismod malesuada orci, eu pharetra lacus fermentum laoreet. Donec eu felis eget nisi lacinia ultrices sed vitae enim. Quisque et felis porttitor, condimentum eros ut, facilisis erat. Aliquam feugiat lectus at sem tristique, ac cursus nunc ultrices. Nunc sed justo augue. Morbi quis tortor non felis accumsan efficitur id pellentesque diam. Maecenas justo nulla, tempus eget felis vitae, vestibulum aliquam orci. Nam at tortor turpis. Ut at nunc non leo tincidunt fringilla nec ut tellus.\r\n\r\n', 4),
(2, 'Toto', 'toto@gmail.com', '2018-11-29 15:50:51', 'Où est ma commande ?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim vitae purus imperdiet bibendum a in justo. Nunc vitae interdum elit, nec faucibus arcu. Nunc nec nibh nec arcu suscipit vehicula ut feugiat purus. In ultricies a libero ut pharetra. Aliquam congue pulvinar lorem non fringilla. In molestie varius sapien id sagittis. Donec auctor dui vitae tortor euismod auctor.\r\n\r\nSed sit amet quam mauris. Ut sit amet tellus laoreet, ullamcorper lorem ac, lobortis eros. Duis vel risus in turpis rhoncus efficitur. Proin eu dignissim metus, at euismod ante. Nullam ac pretium felis. Sed rutrum ipsum non tortor pellentesque, nec tempor nunc rhoncus. Suspendisse gravida tempus lectus, sed lobortis dolor vehicula nec. Cras euismod malesuada orci, eu pharetra lacus fermentum laoreet. Donec eu felis eget nisi lacinia ultrices sed vitae enim. Quisque et felis porttitor, condimentum eros ut, facilisis erat. Aliquam feugiat lectus at sem tristique, ac cursus nunc ultrices. Nunc sed justo augue. Morbi quis tortor non felis accumsan efficitur id pellentesque diam. Maecenas justo nulla, tempus eget felis vitae, vestibulum aliquam orci. Nam at tortor turpis. Ut at nunc non leo tincidunt fringilla nec ut tellus.\r\n\r\n', 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `demande`
--
ALTER TABLE `demande`
  ADD CONSTRAINT `FK_categorie` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id`);
