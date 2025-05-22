import React, { useEffect, useState, forwardRef } from "react";
import magazine from "../assets/Magazine.png";
import brochure from "../assets/Brochure.png";
import brochureAUH from "../assets/BrochureAUH.png";
import locked from "../assets/locked.png";
import unlocked from "../assets/unlocked.png";

import Magazine from "../assets/docs/InternationalMagazineEdition1.pdf"
import brochureDubai from "../assets/docs/BrochureDubai.pdf";
import brochureAUH2 from "../assets/docs/BrochureAbuDhabi.pdf";

const data = [
  {
    id: 1,
    title: "International Magazine - Edition 1",
    type: "Magazine",
    date: "April 2025",
    image: magazine,
    file: Magazine,
  },
  {
    id: 2,
    title: "PSI Brochure - Dubai",
    type: "Brochures",
    date: "April 2025",
    image: brochure,
    file: brochureDubai,
  },
  {
    id: 3,
    title: "PSI Brochure - Abu Dhabi",
    type: "Brochures",
    date: "April 2025",
    image: brochureAUH,
    file: brochureAUH2,
  },
];
const filters = ["All Media", "Brochures", "Magazine"];

const DownloadNow = forwardRef(({ isRegistered }, ref) => {
  const [activeFilter, setActiveFilter] = useState("All Media");
  const [showOverlay, setShowOverlay] = useState(true);
  const [unlocking, setUnlocking] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeLock, setFadeLock] = useState(false);

  useEffect(() => {
    if (isRegistered) {
      setUnlocking(true); // show unlocked key

      setTimeout(() => {
        setFadeLock(true); // scale out the lock
      }, 1000);

      setTimeout(() => {
        setFadeOut(true); // slide overlay down
      }, 1700);

      setTimeout(() => {
        setShowOverlay(false); // remove overlay completely
      }, 2500);
    }
  }, [isRegistered]);

  const filteredData =
    activeFilter === "All Media"
      ? data
      : data.filter((item) =>
          activeFilter === "International Magazine"
            ? item.type === "Magazine"
            : item.type === activeFilter
        );

  return (
    <section
      ref={ref}
      className="relative px-6 md:px-20 py-12 bg-[#F2F2F2] w-full"
    >
      {showOverlay && (
        <div
          className={`absolute pt-4 md:pt-0 text-center inset-0 z-30 bg-[#000000B2] flex flex-col items-center md:justify-center text-white transition-all duration-700 ${
            fadeOut ? "translate-y-full" : "translate-y-0 opacity-100"
          }`}
        >
          <img
            src={unlocking ? unlocked : locked}
            alt="Lock Status"
            className={`w-36 h-36 mb-4 transition-all duration-700 ${
              fadeLock
                ? "scale-800 opacity-0"
                : unlocking
                ? "scale-110"
                : "scale-100"
            }`}
          />
          <p className="text-4xl font-normal">
            {unlocking ? "Access Granted" : "Please Register To Unlock"}
          </p>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl font-normal text-[#272963] mb-6">
          Download Now
        </h2>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-10 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`py-2 w-[100px] text-sm rounded-lg border ${
                activeFilter === filter
                  ? "bg-[#E35F27] text-white border-[#E35F27]"
                  : "bg-white text-[#1C1C54] border-[#ccc]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
          !isRegistered ? "pointer-events-none" : ""
        }`}
      >
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="rounded-lg shadow-md bg-white overflow-hidden border border-gray-100"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[213px] object-cover"
            />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-[#111954] mb-2">
                {item.title}
              </h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-base text-[#E35F27] font-medium">
                    {item.type}
                  </p>
                  <p className="text-xs text-[#9A9A9A]">{item.date}</p>
                </div>
{isRegistered ? (
  <a
    href={item.file}
    download
    className="mt-4 self-start bg-[#E35F27] hover:bg-[#c24e1c] text-white text-sm font-medium px-4 py-2 rounded-md transition"
  >
    Download
  </a>
) : (
  <button
    disabled
    className="mt-4 self-start bg-gray-400 text-white text-sm font-medium px-4 py-2 rounded-md cursor-not-allowed"
  >
    Download
  </button>
)}

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default DownloadNow;
