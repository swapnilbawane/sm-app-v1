import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Senior Software Engineer @Ubis | Posts about JavaScript, ReactJS, Career and Startups",
    link: "https://ab.blogspot.com",
    // bookmarks: []
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhambhai",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Writer Wizard @Craftz | Posts about Life, Motivation",
    link: "https://albert.blogspot.com",
    // bookmarks: []
  },
  {
    _id: uuid(),
    firstName: "Albert",
    lastName: "Einstein",
    username: "alberteinstein",
    password: "albertgyani",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Memorial Account of Sir Albert Einstein | Posts about Life, Science",
    link: "https://alberteinstein.blogspot.com",
    // bookmarks: []
  },
  {
    _id: uuid(),
    firstName: "Sir C.V.",
    lastName: "Raman",
    username: "sircvraman",
    password: "sirgenius",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Memorial Account of Sir C V Raman | Posts about Life, Science", 
    link: "https://sircvraman.blogspot.com",
    // bookmarks: []
  },
  {
    _id: uuid(),
    firstName: "Cricket",
    lastName: "Quotes",
    username: "cricketquotes",
    password: "msdrocks",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Fan account | Posts all about Cricket",
    link: "https://crickmania.blogspot.com",
    // bookmarks: []
  },
];
