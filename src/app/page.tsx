import React from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
const HomePage = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
̊      <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className='flex space-x-2'>
        <Button > Click me </Button>  
       <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
