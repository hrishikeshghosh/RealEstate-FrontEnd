import React from "react";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Zahraa Hussein",
      role: "CEO / Agent Representative",
      image: "https://media.istockphoto.com/id/1952108243/photo/photo-of-young-women-in-winter-wear-standing-on-yellow-background-stock-photo.jpg?s=2048x2048&w=is&k=20&c=yMkepGphpcs_VfG3rB8tR6pBr6j2bF4SJJAWLzvcj3Y=",
    },
    {
      id: 2,
      name: "Ibrahim Al-Sadoon",
      role: "Business Development Manager",
      image: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
   
  ];

  return (
    <section id="our-team" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary mt-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md p-6 my-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
