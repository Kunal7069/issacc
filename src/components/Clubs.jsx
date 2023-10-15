import React from "react";
import { FaInstagram } from "react-icons/fa";
import Footer from "./Footer/Footer";

const Clubs = () => {
  const clubsData = [
    {
      name: "Josh",
      description:
        "The JOSH is a vibrant and inclusive Dramatics Club dedicated to fostering a love for the performing arts and providing a creative space for individuals to explore the world of drama and theater. Whether you're a seasoned actor or someone who has never set foot on stage but is curious about the dramatic arts, our club welcomes everyone with open arms.",
      imageUrl:
        "https://scontent.cdninstagram.com/v/t51.2885-19/337562016_796640968851352_2731602828099133171_n.jpg?stp=dst-jpg_s120x120&_nc_cat=105&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=9U47E8v70dQAX-tb0o0&_nc_ht=scontent.cdninstagram.com&oh=00_AfDw4F2xuOTsO-dIyfMlRXlSGg9ESHVVN8AKLDYe1QieHg&oe=652F0DAD",
      instagram: "https://www.instagram.com/ietjosh/", // Replace with the actual Instagram link
    },
    {
      name: "Excelsior",
      description:
        "The Excelsior is a haven for literary enthusiasts, bookworms, and aspiring writers. We are a community of wordsmiths and storytellers, coming together to celebrate the world of literature in all its forms. If you have a love for books, a penchant for poetry, or a desire to create worlds through your words, you've found your literary home.",
      imageUrl:
      "https://scontent.cdninstagram.com/v/t51.2885-19/370783547_346863350996721_3239040113877071038_n.jpg?stp=dst-jpg_s120x120&_nc_cat=106&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=D_riP627P0QAX_6LEgX&_nc_ht=scontent.cdninstagram.com&oh=00_AfCVT2XcaxPaQ4YKxeRFz5sBj7RNOIeR4rUl36XdmX6jHA&oe=65306F92",
      instagram: "https://www.instagram.com/iet.excelsior/", // Replace with the actual Instagram link
    },
    // {
    //   name: "Mirage",
    //   description:
    //     "Description of Club x. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   imageUrl:
    //     "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
    //   instagram: "https://www.instagram.com/excelsiorclub/", // Replace with the actual Instagram link
    // },
    {
      name: "Insaniax",
      description:
        "The Insaniax is a vibrant and inclusive Dance Club where the language of movement takes center stage. We are a community of passionate dancers, from beginners to experienced performers, who share a common love for rhythm, music, and the joy of dancing. Whether you have two left feet or are a seasoned pro, our club welcomes all to groove, twirl, and express themselves through the magic of dance.",
      imageUrl:
        "https://scontent.cdninstagram.com/v/t51.2885-19/82510841_2743530959027324_453218448156131328_n.jpg?stp=dst-jpg_s120x120&_nc_cat=102&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=1jthWdbtFDMAX9LiUL9&_nc_ht=scontent.cdninstagram.com&oh=00_AfCRj_Cf9L4UXukSUlC_tmIAe9gAAxd_88vcSCh6q277aA&oe=652FB096",
      instagram: "https://www.instagram.com/_iet_insaniax_/",
    },
    {
      name: "Auroras",
      description:
        "The Auroras is a harmonious sanctuary for aficionados of Western music genres. We are a community of music lovers, from classical connoisseurs to rock enthusiasts, who come together to celebrate the beauty of Western musical traditions. If you're fascinated by the melodies, harmonies, and rhythms of Western music, our club is the perfect place for you to immerse yourself in a world of sonic exploration and appreciation.",
      imageUrl:
        "https://scontent.cdninstagram.com/v/t51.2885-19/283709914_552051166307391_14119597886852307_n.jpg?stp=dst-jpg_s120x120&_nc_cat=104&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=czhM7Vxh3UEAX_beUNP&_nc_ht=scontent.cdninstagram.com&oh=00_AfARYmiDm87Exq_U86onZpAS1DiZ_6IIzeyt21w0Kc3dZA&oe=652F84BA",
      instagram: "https://www.instagram.com/iet_auroras/",
    },
    {
      name: "Kalakriti",
      description:
        "The Kalakriti is a vibrant and inclusive Art and Craft Club where creativity knows no bounds. We are a community of artists, crafters, and creative minds, brought together by a shared love for artistic expression and craftsmanship. Whether you're a seasoned artist, an aspiring crafter, or someone looking to discover your creative side, our club is the perfect place for you to explore and nurture your artistic talents.",
      imageUrl:
        "https://scontent.cdninstagram.com/v/t51.2885-19/81799674_505647553681850_6137727781762498560_n.jpg?stp=dst-jpg_s120x120&_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=7VW_qrui2kkAX_gRsz0&_nc_ht=scontent.cdninstagram.com&oh=00_AfBr7RF7ix9SghJ6-JBO1QTU8Vy01nVmavo0p9EcfBfMIw&oe=652F52E6",
      instagram: "https://www.instagram.com/kalakritiiet/",
    },
    {
      name: "Swaranjali",
      description:
        "The Swaranjali is a harmonious haven for aficionados of Indian music. We are a passionate community of music lovers, drawn together by the enchanting melodies and rich cultural heritage of Indian classical, folk, and contemporary music. Whether you're a seasoned connoisseur or new to the world of Indian music, our club is a place for you to immerse yourself in the rhythmic and melodic tapestry of this vibrant musical tradition.",
      imageUrl:
        "https://scontent.cdninstagram.com/v/t51.2885-19/96083718_520323472207672_6267828985472745472_n.jpg?stp=dst-jpg_s120x120&_nc_cat=107&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=hY-LC7uubbcAX8cXrG4&_nc_ht=scontent.cdninstagram.com&oh=00_AfClsnQlbgOE8sKdthVJymjVXYwagmjhxpD_81uRZXH6Ig&oe=652F3F93",
      instagram: "https://www.instagram.com/iet_swaranjali/",
    },
    // {
    //   name: "Parmarth",
    //   description:
    //     "Description of Club 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   imageUrl:
    //     "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
    //   instagram: "instagram.link",
    // },
  ];

  return (
    <>
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center">
            CULTURAL CLUBS
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
