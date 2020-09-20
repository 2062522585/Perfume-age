/*
MySQL Data Transfer
Source Host: localhost
Source Database: react
Target Host: localhost
Target Database: react
Date: 2020/9/20 21:12:50
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for try
-- ----------------------------
DROP TABLE IF EXISTS `try`;
CREATE TABLE `try` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(250) DEFAULT NULL,
  `title` varchar(250) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `msg` varchar(250) DEFAULT NULL,
  `class1` varchar(100) DEFAULT NULL,
  `pinfen` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `try` VALUES ('1', 'https://img.xssdcdn.com/heji/5ca2d75a4033c.jpg', '新手入门香水合辑 - 男士版 ', '499', '新手入门女香合辑体验礼包香水时代nosetime精选15款品牌试香女士版', '试香合辑', '4');
INSERT INTO `try` VALUES ('2', 'https://img.xssdcdn.com/heji/5ca2d6b8d2995.jpg', '新手入门香水合辑 - 男士版 ', '498', '新手入门女香合辑体验礼包香水时代nosetime精选15款品牌试香女士版', '试香合辑', '5');
INSERT INTO `try` VALUES ('3', 'https://img.xssdcdn.com/heji/5ca2d6fa5d744.jpg', '新手入门香水合辑 - 男士版 ', '498.5', null, '试香合辑', '4.5');
INSERT INTO `try` VALUES ('4', 'https://img.xssdcdn.com/heji/5ca2dc810d027.jpg', '新手入门香水合辑 - 男士版 ', '524', null, '试香合辑', '5');
INSERT INTO `try` VALUES ('5', 'https://img.xssdcdn.com/heji/5ca2dca9cc428.jpg', '新手入门香水合辑 - 男士版 ', '834', null, '试香合辑', '5');
INSERT INTO `try` VALUES ('6', 'https://img.xssdcdn.com/heji/5ca2d769be8a0.jpg', '新手入门香水合辑 - 男士版 ', '359', null, '试香合辑', '4.5');
INSERT INTO `try` VALUES ('7', 'https://img.xssdcdn.com/heji/5ca2da616e1c4.jpg', '新手入门香水合辑 - 男士版 ', '349', null, '试香合辑', '5');
INSERT INTO `try` VALUES ('8', 'https://img.xssdcdn.com/heji/5ca2da79d8206.jpg', '新手入门香水合辑 - 男士版 ', '687', null, '试香合辑', '4.5');
INSERT INTO `try` VALUES ('9', 'https://img.xssdcdn.com/perfume/109877.jpg!m', '莱俪 墨恋 Lalique Encre Noire, 2006', '345', '“天色渐晚，迷失在于泥泞的雨后森林中”', '单品分装', '4.5');
INSERT INTO `try` VALUES ('10', 'https://img.xssdcdn.com/perfume/200376.jpg!m', '高田贤三 风之恋 Kenzo L\'Eau par Kenzo pour Homme, 1999', '345', '“淡淡的水生香气，如同清风拂面”', '单品分装', '5');
