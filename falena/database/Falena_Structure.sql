-- MySQL Script generated by MySQL Workbench
-- Sun Nov 29 23:30:11 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema falena
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema falena
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `falena` DEFAULT CHARACTER SET utf8mb4 ;
USE `falena` ;

-- -----------------------------------------------------
-- Table `falena`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `falena`.`categories` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `image` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `falena`.`authors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `falena`.`authors` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `image` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;



-- -----------------------------------------------------
-- Table `falena`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `falena`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `discount` INT(3) NULL DEFAULT NULL,
  `review` TEXT NOT NULL,
  `category_id` INT(11) NOT NULL,
  `section` VARCHAR(25) NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  `rating` DECIMAL(2,1) NOT NULL,
  `author_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fkProducts_categories_idx` (`category_id` ASC),
  INDEX `fk_products_authors1_idx` (`author_id` ASC),
  CONSTRAINT `fkProducts_categories`
    FOREIGN KEY (`category_id`)
    REFERENCES `falena`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_authors1`
    FOREIGN KEY (`author_id`)
    REFERENCES `falena`.`authors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `falena`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `falena`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `dni` INT(8) NULL,
  `phone_number` INT(15) NULL DEFAULT NULL,
  `city` VARCHAR(45) NULL DEFAULT NULL,
  `town` VARCHAR(45) NULL,
  `zip_code` INT(5) NULL DEFAULT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `rol` VARCHAR(45) NOT NULL,
  `profile_picture` VARCHAR(45) NOT NULL,
  `nick` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nick_UNIQUE` (`nick` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `falena`.`cart_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `falena`.`cart_items` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `product_id` INT(11) NOT NULL,
  `quantity` INT(2) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `product_id_idx` (`product_id` ASC),
  INDEX `user_id_idx` (`user_id` ASC),
  CONSTRAINT `product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `falena`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `falena`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `falena`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `falena`.`orders` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `transaction_id` INT(11) NOT NULL,
  `total_cost` DECIMAL(10,2) NOT NULL,
  `status` VARCHAR(15) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `modified_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  INDEX `fkOrders_users` (`user_id` ASC),
  INDEX `fkOrders_orderItems` (`transaction_id` ASC),
  CONSTRAINT `fkOrdersUsers`
    FOREIGN KEY (`user_id`)
    REFERENCES `falena`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `falena`.`order_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `falena`.`order_items` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `transaction_id` INT(11) NOT NULL,
  `product_id` INT(11) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `quantity` INT(2) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fkOrderItems_products_idx` (`product_id` ASC),
  INDEX `fkOrderItems_orders_idx` (`transaction_id` ASC),
  CONSTRAINT `fkOrderItems_orders`
    FOREIGN KEY (`transaction_id`)
    REFERENCES `falena`.`orders` (`transaction_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fkOrderItems_products`
    FOREIGN KEY (`product_id`)
    REFERENCES `falena`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
