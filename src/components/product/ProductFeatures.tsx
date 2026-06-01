
import React from 'react';

interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <div className="space-y-2.5 mb-2">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2.5 text-white/80">
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-suba-purple-400 to-suba-green-400 flex-shrink-0" />
          <span className="text-sm">{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductFeatures;
