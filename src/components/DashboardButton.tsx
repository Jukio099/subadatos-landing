
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const DashboardButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show the button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed right-6 bottom-24 z-50 transition-all duration-500 transform",
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}
    >
      <Link 
        to="/dashboard"
        className="flex items-center gap-2 bg-gradient-to-r from-secondary to-secondary-foreground text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all group animate-pulse hover:animate-none"
      >
        <BarChart3 className="h-5 w-5" />
        <span className="font-medium">Visualiza tus datos en tiempo real</span>
        <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default DashboardButton;
