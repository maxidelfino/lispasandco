import React from 'react';
import TabButton from './TabButton';
import { tabsData } from '../../data/tabs';

interface TabsSectionProps {
  activeTab: string | null;
  onTabClick: (tabId: string) => void;
}

const TabsSection: React.FC<TabsSectionProps> = ({ activeTab, onTabClick }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-[var(--color-bg)] mt-auto">
      {tabsData.map((tab) => (
        <TabButton
          key={tab.id}
          label={tab.label}
          tooltip={tab.tooltip}
          onClick={() => onTabClick(tab.id)}
          isActive={activeTab === tab.id}
        />
      ))}
    </div>
  );
};

export default TabsSection;