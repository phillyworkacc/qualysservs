declare module "*.css"

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