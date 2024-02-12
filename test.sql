-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2024 at 11:35 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `tel` varchar(45) DEFAULT NULL,
  `money` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `name`, `email`, `tel`, `money`) VALUES
(0, 'dadasd', 'sdad@gmail.com', 'asdasd', 2500.00),
(0, 'Boss', 'Boss101@hotmail.com', '044184855', 2500.00),
(0, 'Bossnasu', 'Boss123@gmail.com', '097184918', 2500.00),
(0, 'B', 'Addd@hotmail.com', '097184518', 2500.00);

-- --------------------------------------------------------

--
-- Table structure for table `sell`
--

CREATE TABLE `sell` (
  `id` int(11) NOT NULL,
  `numeng` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `seat` varchar(45) DEFAULT NULL,
  `gear` varchar(45) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `year` varchar(45) DEFAULT NULL,
  `price` int(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `sell`
--

INSERT INTO `sell` (`id`, `numeng`, `name`, `brand`, `seat`, `gear`, `color`, `year`, `price`, `type`) VALUES
(1, 'WE15856SER', 'EK9', 'Honda', '3 ???????', '??????', '??????', '1998', 160000, '???? 2 ?????'),
(2, 'WER', 'City', 'Honda', '3', 'Auto', 'blcak', '2003', 81000, '2 dor'),
(3, 'WER', 'City', 'Honda', '3', 'Auto', 'blcak', '2003', 81000, '2 dor'),
(4, 'WER', 'City', 'Honda', '3', 'Auto', 'blcak', '2003', 81000, '2 dor'),
(5, 'WQEQR52556165', 'Celirp', 'nissan', '4', 'manul', 'red', '1980', 6500000, '2 door');

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `numeng` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `seat` varchar(45) DEFAULT NULL,
  `gear` varchar(45) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `year` varchar(45) DEFAULT NULL,
  `price` int(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`id`, `numeng`, `name`, `brand`, `seat`, `gear`, `color`, `year`, `price`, `type`) VALUES
(9, 'WER', 'City', 'Honda', '3', 'Auto', 'blcak', '2003', 81000, '2 dor');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sell`
--
ALTER TABLE `sell`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sell`
--
ALTER TABLE `sell`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
