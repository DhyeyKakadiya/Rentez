import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponenet = () => {
  return (
    <div className="stats-section">
      <div className="stats-container">
        <div className="grid-container">
          {Stats.map((data, index) => {
            return (
              <div className="stat" key={index}>
                <h1 className="count">{data.count}</h1>
                <h2 className="label-h2">{data.label}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponenet;