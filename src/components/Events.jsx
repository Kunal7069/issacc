import React from "react";

const Events = () => {
  const completedEvents = [
    {
      title: "Event 1",
      description:
        "Description for Event 1 klfhjsdkljflaskdjf;klasdjfkl;asd flkasjdf ;lkasdnfkl asdfkl;jasdkl fl;akdsjf;klsadjf asd",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
    },
    {
      title: "Event 2",
      description:
        "Description for Event 2 klfhjsdkljflaskdjf;klasdjfkl;asd flkasjdf ;lkasdnfkl asdfkl;jasdkl fl;akdsjf;klsadjf asd",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
    },
    {
      title: "Event 3",
      description:
        "Description for Event 3 klfhjsdkljflaskdjf;klasdjfkl;asd flkasjdf ;lkasdnfkl asdfkl;jasdkl fl;akdsjf;klsadjf asd",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
    },
    {
      title: "Event 4",
      description:
        "Description for Event 4 klfhjsdkljflaskdjf;klasdjfkl;asd flkasjdf ;lkasdnfkl asdfkl;jasdkl fl;akdsjf;klsadjf asd",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
    },
  ];

  const upcomingEvents = [
    {
      title: "Upcoming Event 1",
      date: "Nov 1, 2023",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
      description:
        "Description of Event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Upcoming Event 2",
      date: "Nov 5, 2023",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1032581665953943574/1162081352229851246/Untitled-design---2023-07-11T161614386_64ad32f8940fc.png?ex=653aa398&is=65282e98&hm=c5cab5f4894f951e21cea9c08a0ef3953fc3607f37cfb9931305df07616fd124&",
      description:
        "Description of Event 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="mt-10">
      <div className="mb-4 ml-5 text-3xl font-bold">Events Completed</div>

      {/* Carousel for Completed Events */}
      <div className="p-8 bg-gray-100 rounded-md shadow-md">
        <div className="flex space-x-6">
          {completedEvents.map((event, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-md shadow-md w-96 max-h-96"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                height="300"
                width="300"
                className="object-cover mb-2"
              />
              <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
              {/* <p className="text-sm ">
                {event.description}
              </p> */}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-4 ml-5 text-3xl font-bold">Upcoming Events</div>

        {/* List of Upcoming Events */}
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div className="flex p-4 bg-white rounded-md shadow-md" key={index}>
              <img
                src={event.imageUrl}
                alt={event.title}
                height="300"
                width="300"
                className="object-cover mb-4"
              />
              <div className="w-1/2 p-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
                <p className="overflow-hidden line-clamp-3">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
