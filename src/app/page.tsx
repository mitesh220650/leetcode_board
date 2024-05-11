import React from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import Header from '@/components/ui/header/header';
import Footer from '@/components/ui/footer/footer';
const HomePage = () => {
  return (
    <div> <Header /> {/* Include the Header component */}
    {/* Your page content goes here */}
    <h1>Welcome to the Home Page</h1>
    <p>This is some content...</p>
    
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
̊      <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className='flex space-x-2'>
        <Button > Click me </Button>  
       <ModeToggle />
        </div>
      </div>
    </div>
    <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default HomePage;
