
import React from 'react';
import { ChartLine, Leaf, Scale } from 'lucide-react';

interface ProductIconProps {
  iconName: string;
}

const ProductIcon = ({ iconName }: ProductIconProps) => {
  const className = "h-6 w-6 text-suba-purple-300";
  switch (iconName) {
    case "ChartLine":
      return <ChartLine className={className} />;
    case "Leaf":
      return <Leaf className={className} />;
    case "Scale":
      return <Scale className={className} />;
    default:
      return <ChartLine className={className} />;
  }
};

export default ProductIcon;
