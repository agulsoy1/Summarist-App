"use client";
import Footer from "@/app/components/Footer";

export default function SubscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col justify-center items-center min-w-0 min-h-screen">
      <div className="flex-1 w-full w-full">{children}</div>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
