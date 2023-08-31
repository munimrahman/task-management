import StatCard from "./StatCard";

const Statistics = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="col-span-1">
        <StatCard />
      </div>
      <div className="col-span-1">
        <StatCard />
      </div>
      <div className="col-span-1">
        <StatCard />
      </div>
      <div className="col-span-1">
        <StatCard />
      </div>
    </div>
  );
};

export default Statistics;
