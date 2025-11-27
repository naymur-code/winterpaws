import React from 'react';

const Team = ({doctor}) => {
    return (
         <div className="max-w-xs mx-auto w-full">
          <div className="card bg-base-100 shadow-xl overflow-hidden rounded-2xl transform transition-transform hover:scale-[1.03]">
            <div className="relative">
              {/* decorative header gradient */}
              <div className="h-24 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400"></div>

              {/* avatar */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="avatar">
                  <div className="w-28 h-28 rounded-full ring-4 ring-white overflow-hidden shadow-lg">
                    <img
                      src={doctor?.image}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body pt-12 text-center my-6">
              <h2 className="text-lg font-semibold">{doctor.name}</h2>
              <p className="text-sm opacity-80 mt-1">{doctor.role}</p>

              {/* small divider */}
              <div className="mx-auto my-4 w-16 h-0.5 bg-gray-200 rounded-full"></div>

              {/* subtle actions (optional) */}
              <div className="flex items-center justify-center gap-3">
                <button className="btn btn-sm btn-ghost normal-case">
                  Message
                </button>
                <button className="btn btn-sm btn-outline normal-case">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Team;