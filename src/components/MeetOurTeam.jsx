import React from "react";
import Team from "./Team";

const MeetOurTeam = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Anika Rahman",
      image:
        "https://newkit.creativemox.com/pawelle/wp-content/uploads/sites/4/2025/11/2.jpg",
      role: "Veterinary Surgeon",
    },
    {
      id: 2,
      name: "Dr. Kamrul Hasan",
      image:
        "https://newkit.creativemox.com/pawelle/wp-content/uploads/sites/4/2025/11/1.jpg",
      role: "Pet Nutrition Specialist",
    },
    {
      id: 3,
      name: "Dr. Lucas Bennett",
      image:
        "https://newkit.creativemox.com/pawelle/wp-content/uploads/sites/4/2025/11/11.jpg",
      role: "Animal Behavior Expert",
    },
    {
      id: 4,
      name: "Dr. Sophia Lane",
      image:
        "https://newkit.creativemox.com/pawelle/wp-content/uploads/sites/4/2025/11/10.jpg",
      role: "Veterinary Dentist",
    },
  ];

  return (
    <div className="my-20">
      <div className=" flex justify-center flex-col">
        <h3 className="text-2xl font-semibold my-4">Meet Our Team</h3>
        <h1 className="md:text-5xl  md:w-2/3  font-bold text-3xl">
          Dedicated Professionals Committed to Your Pet’s Wellness
        </h1>
      </div>

      <div className="grid md:grid-cols-4 my-6 gap-10">
        {doctors.map((doc) => (
          <Team key={doc.id} doctor={doc}></Team>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
