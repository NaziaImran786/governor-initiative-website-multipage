"use client";
import MySlider from "@/components/my-slider/MySlider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className=" w-[100%]">
        <div className=" w-[100%]">
          <Image
            src="/images/background.jpg"
            alt="background image"
            height={806}
            width={1440}            
            className=" w-[100%] md:h-[806px] h-[1350px] opacity-80 overflow-y-hidden"
          />

          <div className="absolute top-0 left-0 z-0 w-[100%] md:h-[806px] h-[1350px] bg-zinc-100 opacity-80 overflow-y-hidden"></div>

          <div className="absolute z-3 top-[80px] left-0 h-[806px] m-auto w-[100%] flex  md:flex-row flex-col">
            <div className=" h-[100%] w-[95%] lg:w-[50%] m-auto text-center lg:p-10 ">
              <h1 className="text-[32px] sm:text-[48px] lg:text-[60px]  font-extrabold text-[#044e83] mt-10 ">
                Governor Sindh
              </h1>
              <h1 className="text-[24px] sm:text-4xl bold lg:text-[40px]  text-[#044e83]">
                Kamran Khan Tessori
              </h1>
              <h1 className="text-[#2eb6e8] sm:text-4xl lg:text-[40px] mt-5 font-extrabold text-[1.5rem]">
                Certified Cloud
                <br />
                Applied Gernerative AI
                <br />
                Engineer (GenEng)
              </h1>
              <p className="text-[#044e83] sm:text-2xl font-extrabold text-[20px]  my-5">
                Earn up to $5,000/month
              </p>
              <p className="text-[#044e83] sm:text-2xl  font-extrabold text-[20px] my-5">
                Now admissions are open in Hyderabad
              </p>
              <br />
              <div className="lg:flex sm:flex sm:m-auto sm:justify-between text-center sm:mt-10 sm:flex-row sm:gap-5 md:mt-4">
                <button className="bg-[#044e83] sm:py-4 sm:text-base h-[56px] sm:w-[50%] w-[95%] lg:w-[208px] rounded-lg font-bold mb-4 text-[#ffffff]">
                  APPLY NOW
                </button>
                <div className="text-center w-full">
                  <p className="text-[#044e83] lg:ml-10 sm:text-[30px] lg:text-[24px] font-extrabold">
                    562,143
                  </p>
                  <p className="text-[#044e83] lg:ml-10">
                    Accepted Applications
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-full w-full  md:w-[45%] ml-26 md:overflow-hidden">
              <Image
                src="/images/governor1.png"
                alt="side image"
                height={704}
                width={600}
                className="absolute top-6 left-0 h-[704px] w-[600px] md:ml-[130px] pt-4 bg-transparent "
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[100%] h-auto bg-[#ffffff] md:px-14 md:py-8 px-4 py-12 lg:m-auto">
          <h1 className="text-center text-[#044e83] xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-main font-extrabold m-auto md:w-[95%]">
            Certified Cloud Applied Gernerative AI Engineer (GenEng) and
            Solorprenuer <br />
            Developing Billion-Dollar Valued Developer and Solorprenuer
          </h1>
          <p className="sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify">
            The pace of technological change is accelerating, big players like
            Microsoft, Amazon, Google, and OpenAI are winning by providing
            infrastructure, large AI foundation models, frameworks, 3D Metaverse
            experiences, and massive distribution networks. Solopreneurs trained
            in this program will win by automating work typically outsourced to
            employees, by directly connecting to customers by eliminating the
            middleman, and by developing vertical metaverses, thus paving the
            way for the first billion-dollar valued solopreneur businesses. This
            program has the objective to train this new breed of billion-dollar
            solopreneurs. These solopreneurs will adopt the ultra-lean business
            model and work independently and will not need to hire employees or
            other&nbsp;team&nbsp;members.
          </p>
        </div>
      </section>

      <div className="h-auto w-[100%] bg-[#fdfdfd] py-5 px-4 md:px-14 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
        <div className="h-[300px] rounded-[10px]">
          <Image
            src="/images/col-1.png"
            alt="Image 1"
            height={300}
            width={370}
            className="h-[300px] w-full rounded-[10px] shadow-2xl shadow-black object-cover"
          />
        </div>
        <div className="h-[300px] rounded-[10px]">
          <Image
            src="/images/col-2.png"
            alt="Image 2"
            height={300}
            width={370}
            className="h-[300px] w-full rounded-[10px] shadow-2xl shadow-black object-cover"
          />
        </div>
        <div className="h-[300px] rounded-[10px]">
          <Image
            src="/images/col-3.png"
            alt="Image 3"
            height={300}
            width={370}
            className="h-[300px] w-full rounded-[10px] shadow-2xl shadow-black object-cover"
          />
        </div>
      </div>

      <div className="h-auto sm:h-auto w-[100%] bg-[#ffffff] px-4 lg:px-14 py-12 rounded-xl">
        <MySlider />
      </div>

      <div className="h-auto w-full bg-[#fdfdfd] py-5 px-4 lg:px-14 ">
        <h1 className=" py-5 px-2 text-[34px] font-extrabold text-[#044e83]">
          Core Courses Sequance
        </h1>

        <div className="h-auto w-[100%] bg-[#fdfdfd] py-5 px-4 lg:pr-[150px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-8">
          <Link href={"/"}>
            <div className="h-auto w-auto rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/programming.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-5 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
                Programming Fundamentals
              </h1>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="h-auto w-auto rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/web2.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-5 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
                Web2 Using NextJS
              </h1>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="h-auto w-auto rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/earn.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-5 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
                Earn as You Learn
              </h1>
            </div>
          </Link>
        </div>
      </div>

      <div className="h-auto w-[100%] bg-[#fdfdfd] py-5 px-4 lg:px-14">
        <h1 className=" py-5 px-2 text-[34px] font-extrabold text-[#044e83]">
          Advanced Courses
        </h1>

        <div className="h-auto w-auto bg-[#fdfdfd] py-5 px-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-5">
          <Link href={"/"}>
            <div className="h-auto w-auto rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/artificial.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-5 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
                Artificaial Intelligence
              </h1>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="h-auto w-auto rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/web3.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-5 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
                Web 3 and Metaverse
              </h1>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="h-auto w-auto rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/cloudNative.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-5 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
                Cloud-Native Computing
              </h1>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="h-auto w-auto rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/IoT.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-2 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
                Ambient Computing and IoT
              </h1>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="h-auto w-auto rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/bioinformation.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-2 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
                Genomics and Bioinformatics
              </h1>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="h-auto w-auto rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/network.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-2 py-2 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
                Network Programmability and Automation
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
