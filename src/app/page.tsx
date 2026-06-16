import Image from "next/image";
// import "./style.css";
import { AiFillFileText, AiFillBulb, AiFillAudio } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiLeafLine } from "react-icons/ri";
import { BiCrown } from "react-icons/bi";
import Footer from "./components/Footer";

export default function Home() {

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
                <li>Login</li>
                <li>About</li>
                <li>Contact</li>
                <li>Help</li>
              </ul>
            </div>
          </nav>
          <section className="my-10">
            <div className="flex justify-between">
              <div className="landing__content">
                <div className="my-[30px] text-[40px] font-bold leading-[60px] text-[#032b41]">
                  Gain more knowledge <br className="remove--tablet" />
                  in less time
                </div>
                <div className="text-[20px] text-[#394547] font-light mb-5">
                  Great summaries for busy people,
                  <br />
                  individuals who barely have time to read,
                  <br />
                  and even people who don’t like to read.
                </div>
                <button className="bg-[#2bd97c] w-[300px] rounded h-[40px]">
                  Login
                </button>
              </div>
              <Image
                src="/assets/landing.png"
                width={400}
                height={150}
                alt="landing"
              />
            </div>
          </section>
          <section className="my-25">
            <div className="flex flex-col justify-center items-center text-center text-[#032b41]">
              <div className="text-[30px] font-bold">
                Understand books in few minutes
              </div>
              <div className="stroke-[#032b41] flex w-full justify-evenly my-10">
                <div className="flex flex-col items-center max-w-[300px]">
                  <AiFillFileText size={50} />
                  <div className="text-[22px] font-bold my-3">
                    Read or listen
                  </div>
                  <div className="text-[18px]">
                    Save time by getting the core ideas from the best books.
                  </div>
                </div>
                <div className="flex flex-col items-center max-w-[300px]">
                  <AiFillBulb size={50} />
                  <div className="text-[22px] font-bold my-3">
                    Find your next read
                  </div>
                  <div className="text-[18px]">
                    Explore book lists and personalized recommendations.
                  </div>
                </div>
                <div className="flex flex-col items-center max-w-[300px]">
                  <AiFillAudio size={50} />
                  <div className="text-[22px] font-bold my-3">Briefcasts</div>
                  <div className="text-[18px]">
                    Gain valuable insights from briefcasts
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[#6b757b] my-10 flex justify-between">
              <div className="font-bold leading-15 text-[30px]">
                <div>Enhance your knowledge</div>
                <div>Achieve greater success</div>
                <div>Improve your health</div>
                <div>Develop better parenting skills</div>
                <div>Increase happiness</div>
                <div>Be the best version of yourself!</div>
              </div>
              <div className="pl-6 pr-10 bg-[#f1f6f4] flex flex-col justify-center text-[20px] max-w-[490px]">
                <div className="flex gap-3 mb-5">
                  <div className="text-[#0365f2] font-bold">93%</div>
                  <div>
                    of Summarist members <b>significantly increase</b> reading
                    frequency.
                  </div>
                </div>
                <div className="flex gap-3 mb-5">
                  <div className="text-[#0365f2] font-bold">96%</div>
                  <div>
                    of Summarist members <b>establish better</b> habits.
                  </div>
                </div>
                <div className="flex gap-3 mb-5">
                  <div className="text-[#0365f2] font-bold">90%</div>
                  <div>
                    have made <b>significant positive</b> change to their lives.
                  </div>
                </div>
              </div>
            </div>
            <div className="my-10 flex justify-between text-[#6b757b]">
              <div className="py-10 pl-6 pr-10 bg-[#f1f6f4] flex flex-col justify-center text-[20px] max-w-[490px]">
                <div className="flex gap-3 mb-5">
                  <div className="text-[#0365f2] font-bold">91%</div>
                  <div>
                    of Summarist members <b>report feeling more productive</b>{" "}
                    after incorporating the service into their daily routine.
                  </div>
                </div>
                <div className="flex gap-3 mb-5">
                  <div className="text-[#0365f2] font-bold">94%</div>
                  <div>
                    of Summarist members have <b>noticed an improvement</b> in
                    their overall comprehension and retention of information.
                  </div>
                </div>
                <div className="flex gap-3 mb-5">
                  <div className="text-[#0365f2] font-bold">88%</div>
                  <div>
                    of Summarist members <b>feel more informed</b> about current
                    events and industry trends since using the platform.
                  </div>
                </div>
              </div>
              <div className="font-bold leading-15 text-[30px]">
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
                    <div className="text-[#0365f2]">
                      <BsStarFill />
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
                    <div className="text-[#0365f2]">
                      <BsStarFill />
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
                    <div className="text-[#0365f2]">
                      <BsStarFill />
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
                    <div className="text-[#0365f2]">
                      <BsStarFill />
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
                <button className="bg-[#2bd97c] w-[300px] rounded h-[40px]">
                  Login
                </button>
              </div>
            </div>
          </section>
          <section className="my-20">
            <div className="flex flex-col items-center">
              <div className="text-[30px] font-bold text-[#032b41] mb-9">
                Start growing with Summarist now
              </div>
              <div className="gap-10 flex text-center items-center w-full justify-evenly">
                <div className="w-full h-50 px-5 py-30 bg-[#d7e9ff] rounded-[10px] flex flex-col justify-center items-center">
                  <div className="text-[#0365f2]">
                    <BiCrown size={45} />
                  </div>
                  <div className="text-[35px] font-bold my-3">3 Million</div>
                  <div className="text-[#6b757b]">
                    Downloads on all platforms
                  </div>
                </div>
                <div className="w-full h-50 px-5 py-30 bg-[#d7e9ff] rounded-[10px] flex flex-col items-center justify-center">
                  <div className="flex gap-1 text-[#0365f2]">
                    <BsStarFill size={25} />
                    <BsStarHalf size={25} />
                  </div>
                  <div className="text-[35px] font-bold">4.5 Stars</div>
                  <div className="text-[#6b757b]">
                    Average ratings on iOS and Google Play
                  </div>
                </div>
                <div className="w-full h-50 px-5 py-30 bg-[#d7e9ff] rounded-[10px] flex flex-col items-center justify-center">
                  <div className="text-[#0365f2]">
                    <RiLeafLine size={45} />
                  </div>
                  <div className="text-[35px] font-bold">97%</div>
                  <div className="text-[#6b757b]">
                    Of Summarist members create a better reading habit
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
