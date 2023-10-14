import React from "react";
import { FaInstagram } from "react-icons/fa";
import Footer from "./Footer/Footer";

const Clubs = () => {
  const clubsData = [
    {
      name: "Josh",
      description:
        "Description of Club 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
      instagram: "https://www.instagram.com/joshclub/", // Replace with the actual Instagram link
    },
    {
      name: "Excelsior",
      description:
        "Description of Club 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
      instagram: "https://www.instagram.com/excelsiorclub/", // Replace with the actual Instagram link
    },
    {
      name: "Mirage",
      description:
        "Description of Club x. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
      instagram: "https://www.instagram.com/excelsiorclub/", // Replace with the actual Instagram link
    },
    {
      name: "Insaniax",
      description:
        "Description of Club 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
      instagram: "instagram.link",
    },
    {
      name: "Auroras",
      description:
        "Description of Club 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
      instagram: "instagram.link",
    },
    {
      name: "Kalakriti",
      description:
        "Description of Club 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
      instagram: "instagram.link",
    },
    {
      name: "Swaranjali",
      description:
        "Description of Club 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
      instagram: "instagram.link",
    },
    {
      name: "Parmarth",
      description:
        "Description of Club 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
      instagram: "instagram.link",
    },
  ];

  return (
    <>
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center">
            The Clubs of IET
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {clubsData.map((club, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-lg shadow-md"
              >
                <img
                  src={club.imageUrl}
                  alt={`Club ${index + 1}`}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-semibold">{club.name}</h2>
                  <p className="mb-4 text-gray-600">{club.description}</p>
                  <a
                    href={club.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-700"
                  >
                    <FaInstagram className="mr-2" />
                    Follow on Instagram
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clubs;
