import { projects } from "@/data";
import Image from "next/image";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <div>
        <h2 className="font-bold font-Ovo text-center ">Project</h2>
      </div>

      <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2">
        {projects.map(({ id, title, des, img, iconLists, link }) => {
          return (
            <div
              key={id}
              className=" w-80 h-80 bg-white m-10 p-4 border-none rounded-2xl shadow-black-200 shadow-2xl "
            >
              <div className="w-full text-white  bg-black-100 h-1/2">
                {/* <Image src={img} /> */}
              </div>
              <h2 className="font-semibold">{title} </h2>
              <p>{des} </p>
              <div>
                <div className="flex justify-between items-center">
                  {/* <div>{iconLists}</div> */}
                  <div className="flex items-center">
                    <h6>Check live site</h6>
                    <FaLocationArrow />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
