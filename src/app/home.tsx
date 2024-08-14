
import React from "react";
import { HomeIcon } from "../../Icons/homeIcon";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="bg-black h-[100vh] p-3 flex flex-row">
        <div className="flex flex-col basis-1/5">
          <div className="bg-zinc-950 h-[150px] rounded-md mr-2 mb-2 flex flex-col justify-evenly">
            <div className="flex">
              <Link
                to="/home"
                className="text-white flex justify-center font-bold"
              >
                <HomeIcon />
                Home
              </Link>
            </div>
            <div className="flex">
              <Link
                to="/home"
                className="text-white flex justify-center font-bold"
              >
                <HomeIcon />
                Home
              </Link>
            </div>
          </div>
          <div className="bg-zinc-950 h-full rounded-md mr-2"></div>
        </div>
        <div className="bg-zinc-950 h-full rounded-md basis-4/5"></div>
      </div>
    </>
  );
}
