import React, { useEffect, useState } from "react";
import Service from "./Service";
import axios from "axios";
import { Link } from "react-router";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("/services.json")
      .then((data) => setServices(data.data.slice(0, 6)))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="my-20">
      <div>
        <h1 className="md:text-6xl text-4xl text-blue-400 font-bold">
          Popular Winter Services
        </h1>
        <p className="text-xl my-4">
          Discover our most sought-after winter care services designed to keep
          your pets warm, safe, and happy during the cold months
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-20 md:gap-y-10 gap-8 my-10">
        {services.map((service) => (
          <Service key={service.serviceId} service={service} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to="/services"
          className="btn btn-xs sm:btn-md md:btn-md lg:btn-lg xl:btn-xl md:my-4 my-2 btn-outline btn-info"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default Services;
