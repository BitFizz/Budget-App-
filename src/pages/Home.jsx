import StatsBox from '../components/StatsBox';
import GraphCarousel from "../components/GraphCarousel";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-10 py-6">
      <h1 className="text-4xl font-bold mb-6 mt-10 ml-8">Dashboard</h1>
      <div className="flex flex-wrap gap-6">

        {/*Box Sections*/}
        <div className="flex flex-wrap gap-6 mt-8 justify-start">
          <StatsBox title="Revenu Total" value="€ 1,913.50" percentage={97} color="#10B981" />
          <StatsBox title="Dépenses variables" value="€ 547.00" percentage={56} color="#F97316" />
          <StatsBox title="Dépenses fixes" value="€ 710.65" percentage={104} color="#EF4444" />
          <StatsBox title="Épargne" value="€ 105.00" percentage={35} color="#FACC15" />
        </div>

        {/*Graph Sections*/}
        <div className="flex w-full gap-8">
          {/* Graph à gauche */}
          <div className="w-1/2 h-[400px]">
            <GraphCarousel />
          </div>

          {/* Placeholder à droite */}
          <div className="w-1/2 flex flex-col gap-6 h-[400px]">
            {/* Carte Solde Net */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-center h-[180px]">
              <h2 className="text-lg font-semibold mb-2">Solde Net</h2>
              <p className="text-3xl font-bold text-blue-600">€ 550.85</p>
            </div>

            {/* Vue d'ensemble */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 h-full">
              <h2 className="text-lg font-semibold">Vue d’ensemble</h2>

              {/* Ligne : Revenu */}
              <div className="flex items-center justify-between">
                <span>Revenu</span>
                <div className="flex items-center gap-2 w-3/4">
                  <div className="h-3 bg-green-500 rounded-full w-3/5"></div>
                  <span>€ 1,914</span>
                </div>
              </div>

              {/* Ligne : Dépense */}
              <div className="flex items-center justify-between">
                <span>Dépense</span>
                <div className="flex items-center gap-2 w-3/4">
                  <div className="h-3 bg-orange-400 rounded-full w-2/5"></div>
                  <span>€ 547</span>
                </div>
              </div>

              {/* Ligne : Facture */}
              <div className="flex items-center justify-between">
                <span>Facture</span>
                <div className="flex items-center gap-2 w-3/4">
                  <div className="h-3 bg-orange-500 rounded-full w-2/5"></div>
                  <span>€ 711</span>
                </div>
              </div>

              {/* Ligne : Crédit */}
              <div className="flex items-center justify-between">
                <span>Crédit</span>
                <div className="flex items-center gap-2 w-3/4">
                  <div className="h-3 bg-gray-300 rounded-full w-[10%]"></div>
                  <span>€ -</span>
                </div>
              </div>

              {/* Ligne : Épargne */}
              <div className="flex items-center justify-between">
                <span>Épargne</span>
                <div className="flex items-center gap-2 w-3/4">
                  <div className="h-3 bg-yellow-400 rounded-full w-1/5"></div>
                  <span>€ 105</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
