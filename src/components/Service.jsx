import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router";
import { motion } from "motion/react";

const Service = ({ service }) => {
  const { serviceName, image, description, rating, price, serviceId } = service;
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="card bg-base-100  shadow-sm"
    >
      <figure>
        <div className="absolute top-2 right-2">
          <button className="btn btn-md btn-info">${price}</button>
        </div>
        <img
          src={image}
          alt="Shoes"
          className="h-[350px] w-full object-cover object-top"
        />
      </figure>
      <div className="card-body md:px-10 py-6">
        <div className="flex justify-start">
          <div className="flex items-center gap-2">
            <div className="flex">
              <IoIosStar className="text-amber-400 text-lg" />
              <IoIosStar className="text-amber-400 text-lg" />
              <IoIosStar className="text-amber-400 text-lg" />
              <IoIosStar className="text-amber-400 text-lg" />
              <FaRegStar className="text-gray-400 text-lg" />
            </div>
            <p className="text-base font-semibold">{rating} </p>
          </div>
        </div>
        <h2 className="card-title">{serviceName}</h2>
        <p>{description}</p>

        <div className="card-actions justify-end">
          <Link to={`/service/${serviceId}`} className="btn btn-info w-full">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
