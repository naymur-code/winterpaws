import axios from "axios";
import React, { useEffect, useState } from "react";
import Service from "../components/Service";
import { AuthContext } from "../provider/AuthProvider";

const Services = () => {
  const [loading, setLoading] = useState(true);

  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("/services.json")
      .then((data) => {
         setTimeout(()=>{
   setServices(data.data);
        setLoading(false);

         }, 1000)
     
      })
      .catch((error) => console.log(error));
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center my-86">
        <span className="loading loading-bars loading-xl h-full text-blue-400 "></span>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-5">
      <div className="text-center py-10">
        <h1 className="md:text-5xl text-4xl text-blue-400 font-bold">
          Winter Care Services
        </h1>
        <p className="text-xl my-4">
          Discover specialized winter care services to keep your pets warm,
          safe, and healthy during the cold season
        </p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-20 md:gap-y-10 gap-8 my-10">
        {services.map((service) => (
          <Service key={service.serviceId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
