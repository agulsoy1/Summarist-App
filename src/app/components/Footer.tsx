export default function Footer() {
  return (
    <section className="w-full bg-[#F1F6F4] flex flex-col justify-center items-center py-20">
      <div className="flex gap-40">
        <div className="footer__block">
          <div className="font-bold text-[18px] pb-3">Actions</div>
          <div>
            <div className="pb-1">
              <a className="text-sm">Summarist Magazine</a>
            </div>
            <div className="pb-1">
              <a className="text-sm">Cancel Subscription</a>
            </div>
            <div className="pb-1">
              <a className="text-sm">Help</a>
            </div>
            <div className="pb-1">
              <a className="text-sm">Contact us</a>
            </div>
          </div>
        </div>
        <div className="footer__block">
          <div className="font-bold text-[18px] pb-3">Useful Links</div>
          <div>
            <div className="pb-1">
              <a className="text-sm">Pricing</a>
            </div>
            <div className="pb-1">
              <a className="text-sm">Summarist Business</a>
            </div>
            <div className="pb-1">
              <a className="text-sm">Gift Cards</a>
            </div>
            <div className="pb-1">
              <a className="text-sm">Authors & Publishers</a>
            </div>
          </div>
        </div>
        <div className="footer__block">
          <div className="font-bold text-[18px] pb-3">Company</div>
          <div>
            <div className="pb-1">
              <a className="text-sm">About</a>
            </div>
            <div className="pb-1">
              <a className="text-sm">Careers</a>
            </div>
            <div className="pb-1">
              <a className="text-sm">Partners</a>
            </div>
            <div className="pb-1">
              <a className="text-sm">Code of Conduct</a>
            </div>
          </div>
        </div>
        <div className="footer__block">
          <div className="font-bold text-[18px] pb-3">Other</div>
          <div>
            <div className="pb-1">
              <a className="text-sm">Sitemap</a>
            </div>
            <div className="pb-1">
              <a className="text-sm">Legal Notice</a>
            </div>
            <div className="pb-1">
              <a className="text-sm">Terms of Service</a>
            </div>
            <div className="pb-1">
              <a className="text-sm">Privacy Policies</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-15">Copyright &copy; 2026 Summarist.</div>
    </section>
  );
}