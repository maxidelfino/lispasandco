import React from 'react';
import WasteIcon from './WasteIcon';
import { wastes } from '../../data/wastes';

const WastesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
      {wastes.map((waste) => (
        <WasteIcon
          key={waste.id}
          iconName={waste.icon}
          title={waste.title}
          description={waste.description}
        />
      ))}
    </div>
  );
};

export default WastesGrid;