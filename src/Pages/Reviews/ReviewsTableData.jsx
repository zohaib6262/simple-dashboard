import img1 from "../../assets/product1.png";
import img2 from "../../assets/product2.jpg";
import img3 from "../../assets/product3.png";

import { Edit, Delete } from "./ReviewsIcons.jsx";
import {
  Star,
  PencilSquare,
  Trash3,
  StarFill,
} from "react-bootstrap-icons/dist";

export const ReviewsTableData = [
  {
    key: "1",
    img: img1,
    product: "AMD Radeon Graphic card Rx5600 xt",
    sellerName: "Devon Lane",
    customerName: "Savannah Nguyen",
    rating: [StarFill, StarFill, StarFill, StarFill, StarFill],
    review:
      "The OC'd models are much better than stock, placing an overcloc...",
    dateTime: "10-6-23",
    action1: PencilSquare,
    action2: Trash3,
    edit: <Edit />,
    delete: <Delete />,
  },
  {
    key: "2",
    img: img2,
    product: "Apple Airpods Pro (2nd Generation)  ",
    sellerName: "Fusy Kawkins",

    customerName: "Marvin McKinney",
    rating: [StarFill, StarFill, StarFill, StarFill, Star],
    review:
      "If you want AirPods — or have an iPhone — any model of AirPods Pr...",
    dateTime: "08-11-23",
    action1: PencilSquare,
    action2: Trash3,
    edit: <Edit />,
    delete: <Delete />,
  },
  {
    key: "3",
    img: img3,
    product: "Sony PlayStation 5",
    sellerName: "Marvin McKinney",
    customerName: "Marvin McKinney",
    rating: [StarFill, StarFill, StarFill, Star, Star],
    review:
      "The PS5 is the leader in arguably the most important category of a... ",
    dateTime: "05-27-22",
    action1: PencilSquare,
    action2: Trash3,
    edit: <Edit />,
    delete: <Delete />,
  },
  {
    key: "4",
    img: img1,
    product: "AMD Radeon Graphic card Rx5600 xt",
    sellerName: "Theresa Webb",
    customerName: "Kristin Watson",
    rating: [StarFill, StarFill, StarFill, StarFill, StarFill],
    review:
      "The OC'd models are much better than stock, placing an overcloc...",
    dateTime: "05-27-23",
    action1: PencilSquare,
    action2: Trash3,
    edit: <Edit />,
    delete: <Delete />,
  },
];
