"use client";
import Footer from "@/app/components/Footer";
import { initFirebase } from "@/app/firebase";
import { useEffect, useState } from "react";
import { getCheckoutUrl } from "../stripePayments";
import { useRouter } from "next/navigation";
import { usePremium } from "@/context/PremiumContext";

export default function Subscription() {
  const [isSelected, setIsSelected] = useState("yearly");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const app = initFirebase();
  const router = useRouter();
  const { isPremium, loading } = usePremium();

  const upgradeToPremium = async () => {
    let priceId = "";
    if (isSelected !== "yearly") {
      priceId = "price_1ThGdQ0RjNtuCqnYTQbh22Y2";
    } else {
      priceId = "price_1ThGoY0RjNtuCqnYsHPlIVrB";
    }
    const checkoutUrl = await getCheckoutUrl(app, priceId);
    router.push(checkoutUrl);
  };

  useEffect(() => {
  if (!loading && isPremium) {
    const timer = setTimeout(() => {
      router.push("/for-you");
    }, 1500);

    return () => clearTimeout(timer);
  }
}, [loading, isPremium, router]);

  return (
    <div>
      <div className="bg-[#032b41] rounded-b-[250px] rounded-t-[10px]">
        <div className="text-white flex flex-col justify-start items-center text-center pt-[50px]">
          <div className="text-[48px] font-bold leading-[60px] py-4">
            Get unlimited access to many amazing books to read
          </div>
          <div className="text-[20px] pb-[30px]">
            Turn ordinary moments into amazing learning opportunities
          </div>
          <img
            src="/assets/subscription-bg.svg"
            className="w-xs overflow-hidden rounded-t-[200px]"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-5 w-[600px] mx-auto my-12">
        <div className="flex flex-col items-center text-center">
          <img
            src="/assets/pen-clip-solid-full.svg"
            className="stroke-[#032b41]"
            width="70px"
            alt=""
          />
          <div>
            <b>Key ideas in a few minutes</b> with many books to read
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="/assets/seedling-solid-full.svg"
            className="stroke-[#032b41]"
            width="70px"
            alt=""
          />
          <div>
            <b>3 million</b> people growing with Summarist everday
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="/assets/handshake-solid-full.svg"
            className="stroke-[#032b41]"
            width="70px"
            alt=""
          />
          <div>
            <b>Precise recommendations</b> collections curated by experts
          </div>
        </div>
      </div>
      {isPremium ? (
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-2">
            <img src="/assets/star-solid-full.svg" alt="" width="30px" />
            <div className="font-bold text-[24px]">
              Congragulations! You are now a Premium Member
            </div>
            <img src="/assets/star-solid-full.svg" alt="" width="30px" />
          </div>
          <button className="mt-8 mb-4 px-12 py-2 bg-green-500/70 rounded">
            Manage Subscription
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-[32px] pb-6">
            Choose the plan that fits you
          </div>
          <div>
            <button
              onClick={() => setIsSelected("yearly")}
              className={`flex flex-col items-start bg-black/5 border-[4px] border-black/20 rounded px-6 py-6 w-[650px] cursor-pointer ${isSelected === "yearly" ? "border-green-500" : ""}`}
            >
              <div className="flex gap-6">
                <div className="flex justify-center items-center border-black border-[2px] w-6 h-6 rounded-[50px]">
                  {isSelected === "yearly" ? (
                    <div className={`w-3 h-3 bg-black rounded-[30px]`} />
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-left">
                  <div className="text-[18px] font-bold">
                    Premium Plus Yearly
                  </div>
                  <div className="text-[24px] font-bold">$99.99/year</div>
                  <div className="text-[14px] text-black/40">
                    7-day free trial included
                  </div>
                </div>
              </div>
            </button>
            <div className="flex items-center justify-center my-5 gap-5">
              <div className="w-[100px] h-[1px] bg-black/20"></div>
              <div className="text-black/50">or</div>
              <div className="w-[100px] h-[1px] bg-black/20"></div>
            </div>
            <button
              onClick={() => setIsSelected("monthly")}
              className={`flex flex-col items-start bg-black/5 border-[4px] border-black/20 rounded px-6 py-6 w-[650px] cursor-pointer ${isSelected === "monthly" ? "border-green-500" : ""}`}
            >
              <div className="flex gap-6">
                <div className="flex justify-center items-center border-black border-[2px] w-6 h-6 rounded-[50px]">
                  {isSelected === "monthly" ? (
                    <div className={`w-3 h-3 bg-black rounded-[30px]`} />
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-left">
                  <div className="text-[18px] font-bold">Premium Monthly</div>
                  <div className="text-[24px] font-bold">$9.99/month</div>
                  <div className="text-[14px] text-black/40">
                    No trial included
                  </div>
                </div>
              </div>
            </button>
          </div>
          <button
            onClick={upgradeToPremium}
            className="mt-8 mb-4 px-12 py-2 bg-green-500/70 rounded"
          >
            Start your free 7-day trial
          </button>
          <div className="text-[12px] text-black/50">
            Cancel your trial at any time before it ends, and you won't be
            charged
          </div>
        </div>
      )}
      <section className="my-20">
        <div className="w-full">
          <button
            onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
            className="w-full text-[24px] py-5 border-b border-black/10"
          >
            <div className="flex justify-between items-center">
              <div className="font-bold">
                How does the free 7-day trial work?
              </div>
              <img
                src="/assets/angle-down-solid-full.svg"
                className={`w-10 ${openIndex === 0 ? "rotate-180" : ""}`}
                alt=""
              />
            </div>
          </button>
          <div
            className={`transition-all duration-400 ease-in-out ${openIndex === 0 ? "max-h-40 opacity-100 py-5" : "max-h-0 opacity-0"}`}
          >
            Begin your complimentary 7-day trial with a Summarist annual
            membership. You are under no obligation to continue your
            subscription, and you will only be billed when the trial period
            expires. With Premium access, you can learn at your own pace and as
            frequently as you desire, and you may terminate your subscription
            prior to the conclusion of the 7-day free trial.
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
            className="w-full text-[24px] py-5 border-b border-black/10"
          >
            <div className="flex justify-between items-center">
              <div className="font-bold">
                Can I switch subscriptions from monthly to yearly, or yearly to
                monthly?
              </div>
              <img
                src="/assets/angle-down-solid-full.svg"
                className={`w-10 ${openIndex === 1 ? "rotate-180" : ""}`}
                alt=""
              />
            </div>
          </button>
          <div
            className={`transition-all duration-400 ease-in-out ${openIndex === 1 ? "max-h-40 opacity-100 py-5" : "max-h-0 opacity-0"}`}
          >
            While an annual plan is active, it is not feasible to switch to a
            monthly plan. However, once the current month ends, transitioning
            from a monthly plan to an annual plan is an option.
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
            className="w-full text-[24px] py-5 border-b border-black/10"
          >
            <div className="flex justify-between items-center">
              <div className="font-bold">
                What's included in the Premium plan?
              </div>
              <img
                src="/assets/angle-down-solid-full.svg"
                className={`w-10 ${openIndex === 2 ? "rotate-180" : ""}`}
                alt=""
              />
            </div>
          </button>
          <div
            className={`transition-all duration-400 ease-in-out ${openIndex === 2 ? "max-h-40 opacity-100 py-5" : "max-h-0 opacity-0"}`}
          >
            Premium membership provides you with the ultimate Summarist
            experience, including unrestricted entry to many best-selling books
            high-quality audio, the ability to download titles for offline
            reading, and the option to send your reads to your Kindle.
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
            className="w-full text-[24px] py-5 border-b border-black/10"
          >
            <div className="flex justify-between items-center">
              <div className="font-bold">
                Can I cancel during my trial or subscription?
              </div>
              <img
                src="/assets/angle-down-solid-full.svg"
                className={`w-10 ${openIndex === 3 ? "rotate-180" : ""}`}
                alt=""
              />
            </div>
          </button>
          <div
            className={`transition-all duration-400 ease-in-out ${openIndex === 3 ? "max-h-40 opacity-100 py-5" : "max-h-0 opacity-0"}`}
          >
            You will not be charged if you cancel your trial before its
            conclusion. While you will not have complete access to the entire
            Summarist library, you can still expand your knowledge with one
            curated book per day.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
