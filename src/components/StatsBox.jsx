import React from 'react';

const StatsBox = ({ title, value, percentage, color = '#10B981', bar = true }) => {
  return (
    <div className="bg-white text-gray-800 rounded-xl shadow-md w-[220px] p-4 flex flex-col justify-between min-h-[120px] border border-gray-100 hover:shadow-lg transition">
      <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
      <div className="text-xl font-bold">{value}</div>

      {bar && (
        <div className="mt-3">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{ width: `${percentage}%`, backgroundColor: color }}
            />
          </div>
          <div className="text-xs text-right text-gray-600 mt-1">{percentage}%</div>
        </div>
      )}
    </div>
  );
};

export default StatsBox;
