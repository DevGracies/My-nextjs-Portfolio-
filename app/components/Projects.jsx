import { projects } from "@/data";
import Image from "next/image";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="work">
      <div>
        <h2 className="font-bold font-Ovo heading text-center ">Projects</h2>
      </div>

      <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
        {projects.map(({ id, title, des, img, iconLists, link }) => {
          return (
            <div
              key={id}
              className=" w-96 h-96 bg-white dark:text-black m-10 p-4 border-none rounded-2xl shadow-black-200 shadow-sm "
            >
              <div className="w-full text-white rounded bg-[#8E2DE2] h-1/2">
                {/* <Image src={img} /> */}
              </div>
              <h2 className="font-semibold">{title} </h2>
              <p>{des} </p>
              <div>
                <button className="flex justify-between items-center w-full h-full rounded p-3">
                  <h6>Check live site</h6>
                  <div className="flex items-center border-none rounded-full h-8 w-8 justify-center text-[#8E2DE2]">
                    <FaLocationArrow />
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
