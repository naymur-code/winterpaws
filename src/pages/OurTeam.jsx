import React from "react";
import Team from "../components/Team";

const OurTeam = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Anika Rahman",
      image: "https://i.ibb.co/GQxXtqn1/1.jpg",
      role: "Veterinary Surgeon",
    },
    {
      id: 2,
      name: "Dr. Sumaiya Akhter",
      image: "https://i.ibb.co/LzDy0sRL/2.jpg",
      role: "Pet Nutrition Specialist",
    },
    {
      id: 3,
      name: "Dr. Lucas Bennett",
      image: "https://i.ibb.co/d4KtrXnf/3.jpg",
      role: "Animal Behavior Expert",
    },
    {
      id: 4,
      name: "Dr. Sophia Lane",
      image: "https://i.ibb.co/W49nY6Kt/5.jpg",
      role: "Veterinary Dentist",
    },
    {
      id: 5,
      name: "Dr. Noah Carter",
      image: "https://i.ibb.co/ZpZ5jwCx/10.jpg",
      role: "Veterinary Cardiologist",
    },
    {
      id: 6,
      name: "Dr. Rafiul Islam",
      image: "https://i.ibb.co/jkzDKTS6/11.jpg",
      role: "Animal Nutrition Expert",
    },
    {
      id: 7,
      name: " Dr. Ayon Mahmud",
      image: "https://i.ibb.co.com/GQxXtqn1/1.jpg",
      role: "Pet Behavior Therapist",
    },
    {
      id: 8,
      name: "Dr. Sumaiya Akhter",
      image: "https://i.ibb.co.com/LzDy0sRL/2.jpg",
      role: "Veterinary Surgeon",
    },
  ];

  return (
    <div className="my-20 container mx-auto px-5">
      <div className=" flex justify-center items-center flex-col">
        <h3 className="text-2xl font-semibold my-4 text-center text-blue-400">
          Meet Our Team
        </h3>
        <h1 className="md:text-5xl  md:w-2/3  font-bold text-3xl text-center">
          Dedicated Professionals Committed to Your Pet’s Wellness
        </h1>
      </div>

      <div className="grid md:grid-cols-4 my-9 gap-10">
        {doctors.map((doc) => (
          <Team key={doc.id} doctor={doc}></Team>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
