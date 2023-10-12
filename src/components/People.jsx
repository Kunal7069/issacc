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
            src="https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&"
            alt="Satyendra sir"
          />
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-zinc-700">Dr. Satyendra Singh</h3>
        <p className="text-slate-500">Chairman, ISSAC</p>
      </div>

      {/* Add more content or styling here as needed */}
    </div>
  );
};

export default People;
