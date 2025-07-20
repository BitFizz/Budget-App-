import StatsBox from '../components/StatsBox';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-10 py-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Starter</h1>
      <div className="flex flex-wrap gap-6">
        <div className="flex flex-wrap gap-6 mt-20 justify-start">
          <StatsBox title="Revenu Total" value="€ 1,913.50" percentage={97} color="#10B981" />
          <StatsBox title="Dépenses variables" value="€ 547.00" percentage={56} color="#F97316" />
          <StatsBox title="Dépenses fixes" value="€ 710.65" percentage={104} color="#EF4444" />
          <StatsBox title="Épargne" value="€ 105.00" percentage={35} color="#FACC15" />
          <StatsBox title="Solde Net" value="€ 550.85" bar={false} />
        </div>
      </div>
    </div>
  );
}

export default Home;
