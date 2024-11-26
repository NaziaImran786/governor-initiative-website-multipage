import React from "react";
import Image from "next/image";

function Slide(props: { mySrc: { img1: string, img2: string } }) {
  return (
    <>
      <div className="bg-[#ffffff] h-auto w-[100%] grid grid-cols-1 gap-4 rounded-2xl">
        {/* Small Screens: Show only the first image */}
        <div className="block lg:hidden h-[289px] w-auto rounded-2xl">
          <Image
            src={`/images/${props.mySrc.img1}`}
            alt="picture1"
            height={600}
            width={600}
            className="h-full w-full rounded-2xl "
          />
        </div>

        {/* Large Screens: Show both images */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-4 h-auto w-full">
          <div className="h-[600px] w-auto rounded-2xl">
            <Image
              src={`/images/${props.mySrc.img1}`}
              alt="picture1"
              height={600}
              width={600}
              className="h-full w-full rounded-2xl "
            />
          </div>
          <div className="h-full w-full rounded-2xl">
            <Image
              src={`/images/${props.mySrc.img2}`}
              alt="picture2"
              height={600}
              width={600}
              className="h-full w-full rounded-2xl "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide;
