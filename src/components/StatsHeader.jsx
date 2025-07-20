import React from 'react';
import StatsBox from './StatsBox';

const StatsHeader = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 px-6 py-8 bg-transparent">
      <StatsBox
        title="Revenu Total"
        value="€ 1,913.50"
        percentage={97}
        color="#10B981" // vert
      />
      <StatsBox
        title="Dépenses variables"
        value="€ 547.00"
        percentage={56}
        color="#F97316" // orange
      />
      <StatsBox
        title="Dépenses fixes"
        value="€ 710.65"
        percentage={104}
        color="#EF4444" // rouge
      />
      <StatsBox
        title="Épargne"
        value="€ 105.00"
        percentage={35}
        color="#FACC15" // jaune
      />
      <StatsBox
        title="Solde Net"
        value="€ 550.85"
        bar={false}
      />
    </div>
  );
};

export default StatsHeader;
