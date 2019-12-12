-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Client :  localhost:8889
-- Généré le :  Jeu 12 Décembre 2019 à 19:49
-- Version du serveur :  5.5.38
-- Version de PHP :  5.5.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `Blogredesign`
--

-- --------------------------------------------------------

--
-- Structure de la table `Film`
--

CREATE TABLE `Film` (
`IdFilm` int(11) NOT NULL,
  `NomArtiste` varchar(255) NOT NULL,
  `NomFichier` varchar(255) NOT NULL,
  `ExtFichier` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Formation`
--

CREATE TABLE `Formation` (
`IdFormation` int(11) NOT NULL,
  `Annee` varchar(100) NOT NULL,
  `IsDiplome` tinyint(1) NOT NULL,
  `NomPoste` varchar(255) NOT NULL,
  `NomEntreprise` varchar(255) NOT NULL,
  `Descriptif` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Photo`
--

CREATE TABLE `Photo` (
`IdProjetPhoto` int(11) NOT NULL,
  `TitreProjet` varchar(255) NOT NULL,
  `DateProjet` varchar(100) NOT NULL,
  `NomPhotoUne` varchar(255) NOT NULL,
  `ExtPhotoUn` varchar(5) NOT NULL,
  `NomPhotoDeux` varchar(255) NOT NULL,
  `ExtPhotoDeux` varchar(5) NOT NULL,
  `NomPhotoTrois` varchar(255) NOT NULL,
  `ExtPhotoTrois` varchar(5) NOT NULL,
  `InfoAppareil` varchar(100) NOT NULL,
  `InfoRetouche` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Serie`
--

CREATE TABLE `Serie` (
`IdSerie` int(11) NOT NULL,
  `NomArtiste` varchar(255) NOT NULL,
  `NomFichier` varchar(255) NOT NULL,
  `ExtFichier` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Webdev`
--

CREATE TABLE `Webdev` (
`IdProjet` int(11) NOT NULL,
  `AnneeProjet` varchar(100) NOT NULL,
  `NomProjet` varchar(255) NOT NULL,
  `DescriptifProjet` text NOT NULL,
  `TagsProjet` varchar(255) NOT NULL,
  `NomPhoto` varchar(255) NOT NULL,
  `ExtPhoto` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Film`
--
ALTER TABLE `Film`
 ADD PRIMARY KEY (`IdFilm`);

--
-- Index pour la table `Formation`
--
ALTER TABLE `Formation`
 ADD PRIMARY KEY (`IdFormation`);

--
-- Index pour la table `Photo`
--
ALTER TABLE `Photo`
 ADD PRIMARY KEY (`IdProjetPhoto`);

--
-- Index pour la table `Serie`
--
ALTER TABLE `Serie`
 ADD PRIMARY KEY (`IdSerie`);

--
-- Index pour la table `Webdev`
--
ALTER TABLE `Webdev`
 ADD PRIMARY KEY (`IdProjet`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Film`
--
ALTER TABLE `Film`
MODIFY `IdFilm` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Formation`
--
ALTER TABLE `Formation`
MODIFY `IdFormation` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Photo`
--
ALTER TABLE `Photo`
MODIFY `IdProjetPhoto` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Serie`
--
ALTER TABLE `Serie`
MODIFY `IdSerie` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Webdev`
--
ALTER TABLE `Webdev`
MODIFY `IdProjet` int(11) NOT NULL AUTO_INCREMENT;