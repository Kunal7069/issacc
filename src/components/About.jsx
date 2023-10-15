import React from "react";
import Footer from "./Footer/Footer";
const About = () => {
  return (
    <div>
      <h2 className="text-6xl font-bold text-center text-blue-400 pt-11">
        About <span className="text-gray-300">ISSACC</span>
      </h2>

      <div className="flex items-center justify-center mt-10">
        <p className="p-3 text-justify border border-neutral-950 mr-80 ml-80">
        Instech Students Sports Arts and Cultural Council is the body functions under the guidance of our Chairman and Faculty Advisors. Our General Secretary and Joint General Secretary are the driving forces behind the council, leading and inspiring the teams to bring their best ideas and creativity to the table. They ensure that every event we organize is a memorable and engaging experience for everyone involved.

The Event Management team is responsible for conceptualizing and executing the events, from planning to execution, ensuring that every detail is taken care of to make the event a success. The Photography and Videography team captures the moments and memories that make the event unforgettable.

The Content Writing team creates compelling and engaging content that connects with our audience, conveying the message and essence of the event. The Graphic Designing team brings our vision to life, creating beautiful and visually striking designs that represent the spirit of the event.

Finally, the Website and social media team is responsible for designing and maintaining the ISSACCs online presence, providing the information and updates necessary for our audience to stay informed and engaged.
        </p>
      </div>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default About;
