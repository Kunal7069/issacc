import React from "react";

const Clubs = () => {
  // Sample club data
  const clubsData = [
    {
      name: "Club Name 1",
      description: "Description of Club 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
    },
    {
      name: "Club Name 2",
      description: "Description of Club 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
    },
    {
      name: "Club Name 3",
      description: "Description of Club 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
    },
    {
      name: "Club Name 4",
      description: "Description of Club 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
    },
    {
      name: "Club Name 5",
      description: "Description of Club 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
    },
    {
      name: "Club Name 6",
      description: "Description of Club 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
    },
    {
      name: "Club Name 7",
      description: "Description of Club 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
    },
  ];

  return (
    <div>
      <div className="mt-5 ml-5">
        <h1 className="mb-4 text-3xl font-bold">Explore the Clubs of IET</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {clubsData.map((club, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <img
                src={club.imageUrl}
                alt={`Club ${index + 1}`}
                className="object-cover w-full h-48 mb-2 rounded-lg"
              />
              <h2 className="text-xl font-semibold">{club.name}</h2>
              <p className="text-gray-600">{club.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
