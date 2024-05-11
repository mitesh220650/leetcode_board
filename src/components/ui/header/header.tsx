import React from 'react';
import './header.css';
import { Button } from '../button';
import { ModeToggle } from '../mode-toggle';
import Logo from './src/components/ui/header/LeetCode_Logo_black_with_text.svg.png' 
const Header: React.FC = () => {
    return (
        <header className="site-header">
            <div className="logo">
                <img src={Logo.src} alt="Logo" /> 
            </div>
            <nav>
                <ul>
                
                    <li><a href="#Problems"><div className='flex space-x-2'>
                 <Button > Problems </Button>  
                  <ModeToggle />
                  </div></a></li>
                    
                </ul>
            </nav>
        </header>
    );
}

export default Header;
