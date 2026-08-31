const Footer = () => {
  return (
    <footer className="font-archivo md:mt-15.75">
      <div className="bg-genoa">
        <div className="mx-auto grid max-w-7xl px-5 py-12">
          <span className="text-footer text-pampas font-extrabold uppercase">
            Available for junior
          </span>
          <span className="text-footer text-pampas font-extrabold uppercase">
            roles, starting now.
          </span>
        </div>
      </div>
      <div className="text-ink/55 mx-auto grid max-w-7xl gap-3.5 px-5 py-6.5 font-[0.8125rem] md:grid-flow-col md:justify-between">
        <span className="">Made with React, TypeScript and Vite.</span>
        <span className="">© 2026 Rojus Balčiūnas. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
