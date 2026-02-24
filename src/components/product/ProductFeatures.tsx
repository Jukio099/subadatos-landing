
import React from 'react';

interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <div className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2 text-gray-700">
          <span className="w-2 h-2 rounded-full bg-nature-500 flex-shrink-0"></span>
          <span className="text-sm">{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductFeatures;
