"use client";
import Image from "next/image";
import { AiFillFileText, AiFillBulb, AiFillAudio } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiLeafLine } from "react-icons/ri";
import { BiCrown } from "react-icons/bi";
import { useAuth } from "@/context/authContext";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { logOut } from "../services/auth";

export default function Home() {
  const { user } = useAuth();
  const { setOpenModal } = useModal();

  return (
    <div>
      <div>
        <div className="flex-col justify-center items-center tracking-tight">
          <nav className="nav">
            <div className="flex justify-between">
              <Image
                src="/assets/logo.png"
                width={200}
                height={40}
                alt="logo"
              />
              <ul className="flex gap-4">
                <li>
                  <Link
                    href=""
                    onClick={() => {
                      user ? logOut() : setOpenModal(true);
                    }}
                  >
                    {user ? "Logout" : "Login"}
                  </Link>
                </li>
                <li className="cursor-not-allowed">About</li>
                <li className="cursor-not-allowed">Contact</li>
                {user ? (
                  <li>
                    <Link href="/settings">Settings</Link>
                  </li>
                ) : (
                  <li className="cursor-not-allowed">Settings</li>
                )}
              </ul>
            </div>
          </nav>
          <section className="my-10">
            <div className="flex justify-between">
              <div className="flex flex-col md:items-start md:text-start items-center items-center w-full text-center">
                <div className="my-[30px] text-[24px] md:text-[40px] font-bold text-[#032b41]">
                  Gain more knowledge <br className="hidden md:block" />
                  in less time
                </div>
                <div className="text-[20px] text-[#394547] font-light mb-5">
                  Great summaries for busy people,
                  <br className="hidden md:block" />
                  individuals who barely have <br className="block md:hidden" />{" "}
                  time to read,
                  <br className="hidden md:block" />
                  and even people who don’t like to read.
                </div>
                <button
                  className="bg-[#2bd97c] w-[300px] rounded h-[40px]"
                  onClick={() => {
                    user ? logOut() : setOpenModal(true);
                  }}
                >
                  {user ? "Logout" : "Login"}
                </button>
              </div>
              <Image
                src="/assets/landing.png"
                width={400}
                height={150}
                className="hidden md:block"
                alt="landing"
              />
            </div>
          </section>
          <section className="md:my-25 my-20">
            <div className="flex flex-col justify-center items-center text-center md:text-[#032b41]">
              <div className="text-[24px] md:text-[30px] font-bold">
                Understand books in few minutes
              </div>
              <div className="stroke-[#032b41] gap-5 flex md:flex-row flex-col w-full items-center md:items-start justify-evenly my-10">
                <div className="flex flex-col items-center md:max-w-[300px] w-full">
                  <AiFillFileText size={50} />
                  <div className="md:text-[22px] text-[20px] font-bold my-3">
                    Read or listen
                  </div>
                  <div className="md:text-[18px] text-[14px] text-[#032b41]/60">
                    Save time by getting the core ideas from the best books.
                  </div>
                </div>
                <div className="flex flex-col items-center md:max-w-[300px] w-full">
                  <AiFillBulb size={50} />
                  <div className="md:text-[22px] text-[20px] font-bold my-3">
                    Find your next read
                  </div>
                  <div className="md:text-[18px] text-[14px] text-[#032b41]/60">
                    Explore book lists and personalized recommendations.
                  </div>
                </div>
                <div className="flex flex-col items-center md:max-w-[300px] w-full">
                  <AiFillAudio size={50} />
                  <div className="md:text-[22px] text-[20px] font-bold my-3">
                    Briefcasts
                  </div>
                  <div className="md:text-[18px] text-[14px] text-[#032b41]/60">
                    Gain valuable insights from briefcasts
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[#6b757b] my-10 flex md:flex-row flex-col justify-between">
              <div className="font-bold mb-5 md:leading-15 leading-12 md:text-[30px] text-[24px]">
                <div>Enhance your knowledge</div>
                <div>Achieve greater success</div>
                <div>Improve your health</div>
                <div>Develop better parenting skills</div>
                <div>Increase happiness</div>
                <div>Be the best version of yourself!</div>
              </div>
              <div className="pl-6 pr-10 py-10 bg-[#f1f6f4] flex flex-col justify-center md:max-w-[490px] w-full">
                <div className="flex gap-3 mb-5">
                  <div className="text-[#0365f2] font-bold text-[20px]">
                    93%
                  </div>
                  <div className="text-[16px] md:text-[20px]">
                    of Summarist members <b>significantly increase</b> reading
                    frequency.
                  </div>
                </div>
                <div className="flex gap-3 mb-5">
                  <div className="text-[#0365f2] font-bold text-[20px]">
                    96%
                  </div>
                  <div className="text-[16px] md:text-[20px]">
                    of Summarist members <b>establish better</b> habits.
                  </div>
                </div>
                <div className="flex gap-3 mb-5">
                  <div className="text-[#0365f2] font-bold text-[20px]">
                    90%
                  </div>
                  <div className="text-[16px] md:text-[20px]">
                    have made <b>significant positive</b> change to their lives.
                  </div>
                </div>
              </div>
            </div>
            <div className="my-10 flex md:flex-row flex-col justify-between text-[#6b757b]">
              <div className="py-10 pl-6 pr-10 bg-[#f1f6f4] order-2 md:order-1 flex flex-col justify-center text-[20px] md:max-w-[490px] w-full">
                <div className="flex gap-3 mb-5">
                  <div className="text-[#0365f2] font-bold">91%</div>
                  <div className="text-[16px] md:text-[20px]">
                    of Summarist members <b>report feeling more productive</b>{" "}
                    after incorporating the service into their daily routine.
                  </div>
                </div>
                <div className="flex gap-3 mb-5">
                  <div className="text-[#0365f2] font-bold">94%</div>
                  <div className="text-[16px] md:text-[20px]">
                    of Summarist members have <b>noticed an improvement</b> in
                    their overall comprehension and retention of information.
                  </div>
                </div>
                <div className="flex gap-3 mb-5">
                  <div className="text-[#0365f2] font-bold">88%</div>
                  <div className="text-[16px] md:text-[20px]">
                    of Summarist members <b>feel more informed</b> about current
                    events and industry trends since using the platform.
                  </div>
                </div>
              </div>
              <div className="mb-5 font-bold md:leading-15 leading-12 order-1 md:order-2 text-start md:text-end md:text-[30px] text-[24px]">
                <div>Expand your learning</div>
                <div>Accomplish your goals</div>
                <div>Strengthen your vitality</div>
                <div>Become a better caregiver</div>
                <div>Improve your mood</div>
                <div>Maximize your abilities</div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="text-[30px] font-bold text-[#032b41]">
                What our members say
              </div>
              <div className="reviews__wrapper max-w-[565px] my-5">
                <div className="bg-[#fff3d7] mb-8 py-4 px-4 text-[#6b757b]">
                  <div className="flex gap-2">
                    <div className="review__name">Hanna M.</div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div className="text-[#0365f2]" key={i}>
                          <BsStarFill />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="review__body">
                    This app has been a <b>game-changer</b> for me! It's saved
                    me so much time and effort in reading and comprehending
                    books. Highly recommend it to all book lovers.
                  </div>
                </div>
                <div className="bg-[#fff3d7] mb-8 py-4 px-4 text-[#6b757b]">
                  <div className="flex gap-2">
                    <div className="review__name">David B.</div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div className="text-[#0365f2]" key={i}>
                          <BsStarFill />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="review__body">
                    I love this app! It provides
                    <b>concise and accurate summaries</b> of books in a way that
                    is easy to understand. It's also very user-friendly and
                    intuitive.
                  </div>
                </div>
                <div className="bg-[#fff3d7] mb-8 py-4 px-4 text-[#6b757b]">
                  <div className="flex gap-2">
                    <div className="review__name">Nathan S.</div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div className="text-[#0365f2]" key={i}>
                          <BsStarFill />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="review__body">
                    This app is a great way to get the main takeaways from a
                    book without having to read the entire thing.
                    <b>The summaries are well-written and informative. </b>
                    Definitely worth downloading.
                  </div>
                </div>
                <div className="bg-[#fff3d7] mb-3 py-4 px-4 text-[#6b757b]">
                  <div className="flex gap-2">
                    <div className="review__name">Ryan R.</div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div className="text-[#0365f2]" key={i}>
                          <BsStarFill />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="review__body">
                    If you're a busy person who
                    <b>loves reading but doesn't have the time</b> to read every
                    book in full, this app is for you! The summaries are
                    thorough and provide a great overview of the book's content.
                  </div>
                </div>
              </div>
              <div className="reviews__btn--wrapper">
                <button
                  onClick={() => {
                    user ? logOut() : setOpenModal(true);
                  }}
                  className="bg-[#2bd97c] w-[300px] rounded h-[40px]"
                >
                  {user ? "Logout" : "Login"}
                </button>
              </div>
            </div>
          </section>
          <section className="my-20">
            <div className="flex flex-col items-center">
              <div className="text-[30px] font-bold text-[#032b41] mb-9">
                Start growing with Summarist now
              </div>
              <div className="md:gap-10 gap-5 flex md:flex-row flex-col text-center items-center w-full justify-evenly">
                <div className="w-full h-50 px-5 py-25 md:py-30 bg-[#d7e9ff] rounded-[10px] flex flex-col justify-center items-center">
                  <div className="text-[#0365f2]">
                    <BiCrown size={45} />
                  </div>
                  <div className="md:text-[40px] text-[32px] font-bold my-3">
                    3 Million
                  </div>
                  <div className="text-[#6b757b]">
                    Downloads on all platforms
                  </div>
                </div>
                <div className="w-full h-50 px-5 py-30 bg-[#d7e9ff] rounded-[10px] flex flex-col items-center justify-center">
                  <div className="flex gap-1 text-[#0365f2]">
                    <div className="flex gap-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i}>
                          <BsStarFill size={20} />
                        </div>
                      ))}
                      <BsStarHalf size={20} />
                    </div>
                  </div>
                  <div className="md:text-[40px] text-[32px] font-bold my-3">
                    4.5 Stars
                  </div>
                  <div className="text-[#6b757b]">
                    Average ratings on iOS and Google Play
                  </div>
                </div>
                <div className="w-full h-50 px-5 py-30 bg-[#d7e9ff] rounded-[10px] flex flex-col items-center justify-center">
                  <div className="text-[#0365f2]">
                    <RiLeafLine size={45} />
                  </div>
                  <div className="md:text-[40px] text-[32px] font-bold">
                    97%
                  </div>
                  <div className="text-[#6b757b]">
                    Of Summarist members create a better reading habit
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
