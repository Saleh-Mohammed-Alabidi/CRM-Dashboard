export {}; 
declare global {
    interface Window {
      create: () => void; // Define the type of your create function here
    }
  }