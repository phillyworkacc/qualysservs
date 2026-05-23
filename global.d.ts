declare module "*.css"
declare module "*.jpg"
declare module "*.png"

type BookingService = "Data Centre Consulting" | "HTML & CSS Training" | "Scratch 3 Training" | "Javascript Training" | "Typescript Training" | "Java Training" | "Python Training";

type Booking = {
   name: string;
   email: string;
   service: BookingService;
}

type Contact = {
   name: string;
   email: string;
   message: string;
}

type Rating = {
   name: string;
   stars: string;
   feedback: string;
}