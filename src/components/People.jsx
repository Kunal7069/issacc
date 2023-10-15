import React from "react";

const People = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <h2 className="text-5xl font-bold text-zinc-700">
        Meet the <span className="text-slate-500">Team</span>
      </h2>

      <div className="flex items-center justify-center mt-8">
        <div className="w-48 h-48 overflow-hidden rounded-full shadow-lg">
          <img
            className="object-cover w-full h-full"
            src="https://www.ietlucknow.ac.in/sites/default/files/propic/photo%20satyendra%20singh.jpg"
            alt="Satyendra sir"
          />
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-zinc-700">Dr. Satyendra Singh</h3>
        <p className="text-slate-500">Chairman, ISSACC</p>
      </div>

      {/* Add more content or styling here as needed */}
    </div>
  );
};

export default People;
