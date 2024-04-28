import img1 from "../../assets/product1.png";
import img2 from "../../assets/product2.jpg";
import img3 from "../../assets/product3.png";

import { Star, StarFill } from "react-bootstrap-icons/dist";
export const ManageShopTableData = [
  {
    key: "1",
    orderId: "#1231",
    img: img1,
    product: "AMD Graphic c...",
    description:
      "The OC'd models are much better than stock, placing an overclock...",
    category: "Computer",
    sold: "13",
    price: "$346.00",
    icon: [StarFill, StarFill, StarFill, StarFill, StarFill],
  },
  {
    orderId: "#1232",
    key: "2",
    img: img2,
    product: "Apple Airpods Pro...",
    description:
      "If you want AirPods — or have an iPhone — any model of AirPods Pr...",
    category: "Accessories",
    sold: "35",
    price: "$126.00",
    icon: [StarFill, StarFill, StarFill, StarFill, Star],
  },
  {
    orderId: "#1233",
    key: "3",
    img: img3,
    product: "Sony PlayStation 5",
    description:
      "The PS5 is the leader in arguably the most important category of a...",
    category: "Gaming",
    sold: "02",
    price: "$648.00",
    icon: [StarFill, StarFill, StarFill, Star, Star],
  },
];
