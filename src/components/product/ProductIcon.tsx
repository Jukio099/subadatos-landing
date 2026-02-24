
import React from 'react';
import { ChartLine, Leaf, Scale } from 'lucide-react';

interface ProductIconProps {
  iconName: string;
}

const ProductIcon = ({ iconName }: ProductIconProps) => {
  switch (iconName) {
    case "ChartLine":
      return <ChartLine className="h-8 w-8 text-nature-600" />;
    case "Leaf":
      return <Leaf className="h-8 w-8 text-nature-600" />;
    case "Scale":
      return <Scale className="h-8 w-8 text-nature-600" />;
    default:
      return <ChartLine className="h-8 w-8 text-nature-600" />;
  }
};

export default ProductIcon;
