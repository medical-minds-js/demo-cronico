export interface OrderItem {
  orderId: number;
  orderStatusId: number;
  orderStatusName: string;
}

/**
 *
  `ID_USER` int(11) NOT NULL,
  `ID_CARD` int(11) NOT NULL,
  `TOTAL` double(8,2) DEFAULT NULL,
  `CREATED_AT` datetime DEFAULT NULL,
  `STREET` varchar(255) DEFAULT NULL,
  `STREET_NUMBER` varchar(50) DEFAULT NULL,
  `INTERIOR_NUMBER` varchar(50) DEFAULT NULL,
  `SUBURB` varchar(255) DEFAULT NULL,
  `CP` int(5) DEFAULT NULL,
  `LOCATION` varchar(255) DEFAULT NULL,
  `STATE` varchar(255) DEFAULT NULL,
  `COMMENTS` varchar(255) DEFAULT NULL,
  `REFERENCE` varchar(255) DEFAULT NULL,
  `START_TIME` time DEFAULT NULL,
  `END_TIME` time DEFAULT NULL,
  `DELIVERY_DATE` datetime DEFAULT NULL,
  `WHO_RECEIVES` varchar(255) DEFAULT NULL,
  `RELATIONSHIP` varchar(255) DEFAULT NULL,
  `VISITS` int(3) DEFAULT NULL,
  `PAYMENT_ID` varchar(200) DEFAULT NULL,
  `PAYMENT_CODE` varchar(200) DEFAULT NULL,
 */
