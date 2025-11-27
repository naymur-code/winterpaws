import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);

  const [service, setService] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    axios
      .get("/services.json")
      .then((result) => {
        const service = result.data.find((service) => service.serviceId == id);

        setTimeout(() => {
          setService(service);
          setLoading(false);
        }, 1000);
      })
      .catch((error) => console.log(error));
  }, [id]);
  console.log(service);
  console.log(id);

  if (loading) {
    return (
      <div className="flex justify-center my-86">
        <span className="loading loading-bars loading-xl h-full text-blue-400 "></span>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-5 my-20">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <div className="md:flex gap-4 ">
          <figure>
            <img src={service?.image} alt="Album" />
          </figure>
          <div className="m-5 md:w-86">
            <h3 className="text-2xl font-semibold">
              Service Name: {service?.serviceName}
            </h3>
            <h1 className="text-2xl font-bold my-2">
              Price: ${service?.price}
            </h1>
          </div>
          <div></div>
        </div>
        <div className="card-body">
          <h2 className="card-title text-3xl">Book This Service</h2>

          <form>
            <fieldset className="fieldset gap-3">
              <label className="label">Full Name</label>
              <input
                defaultValue={user?.displayName}
                name="email"
                type="email"
                className="input"
                placeholder="your@email.com"
              />

              <label className="label">Email Address</label>
              <input
                name="email"
                defaultValue={user?.email}
                type="email"
                className="input"
                placeholder="your@email.com"
              />

              <label className="label">Phone Number</label>
              <input
                name="password"
                type="number"
                className="input"
                placeholder="Enter your Number"
              />
              <div></div>
            </fieldset>
          </form>
          <div className="card-actions justify-end">
            <button
              className="btn btn-info"
              onClick={() => {
                Swal.fire({
                  title: "Booking Success!",
                  icon: "success",
                  draggable: true,
                });
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
