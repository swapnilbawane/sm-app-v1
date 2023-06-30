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
    profileimage: "https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_2.jpg" 
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
    profileimage: "https://res.cloudinary.com/djhnar3ju/image/upload/v1688106577/Gravatar/Gravatar_3.jpg" 
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
    profileimage: "https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_4.jpg"
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
    profileimage: "https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_5.jpg"
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
    profileimage: "https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_6.jpg"
    // bookmarks: []
  },
];
