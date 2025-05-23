// @flow strict

import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="my-16 lg:my-8 relative font-baloo text-lg">
      {/* العنوان الجانبي */}
      <div className="hidden lg:flex flex-col items-center absolute top-20 -right-28">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-6 text-2xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-40 w-[2px] bg-[#1a1443]"></span>
      </div>

      {/* قسم النبذة */}
      <div className="flex justify-center">
        <div className="text-center max-w-6xl mx-auto w-full px-4">
          <p className="font-bold mb-6 text-[#16f2b3] text-4xl uppercase">
            Who I am?
          </p>

          <p
            className="text-gray-400 text-lg lg:text-xl text-center mx-auto"
            style={{ lineHeight: "1.6" }}
          >
            {personalData.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
