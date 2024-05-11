import React from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import Header from '@/components/ui/header/header';
import Footer from '@/components/ui/footer/footer';
const HomePage = () => {
  return (
    <div> <Header /> {/* Include the Header component */}
    {/* Your page content goes here */}
    <h1> Hello </h1>
    <p>Just created the header.</p>
    
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
̊     
    </div>
    <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default HomePage;
