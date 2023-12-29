import { Link } from "react-router-dom";

export default function Footer() {
  const ICONS_STYLE =
    "hover:yellow-red rounded-full bg-slate-100 p-2 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer";

  const LINKS_STYLE =
    "w-fit px-2 py-1 hover:yellow-red hover:font-extrabold hover:rounded-lg hover:text-slate-900 hover:scale-110 transition ease-in-out duration-300";

  return (
    <footer className="container mx-auto">
      <div className="flex flex-col gap-4 text-slate-100">
        <div className="footerIcons flex justify-center gap-8 self-center">
          <Link to="https://www.facebook.com/ziyi.xu.144/" target="_blank">
            <img
              className={ICONS_STYLE}
              src="public/svg/icons8-facebook.svg"
              alt="facebook logo"
            />
          </Link>
          <Link to="https://github.com/807782352" target="_blank">
            <img
              className={ICONS_STYLE}
              src="public/svg/icons8-github.svg"
              alt="github logo"
            />
          </Link>
          <Link to="https://www.linkedin.com/in/ziyi-xu/" target="_blank">
            <img
              className={ICONS_STYLE}
              src="public/svg/icons8-linkedin.svg"
              alt="linkedin logo"
            />
          </Link>
        </div>
        <div className="footerNav flex justify-between gap-8 self-center">
          <Link to="/#about">
            <span className={LINKS_STYLE}>About</span>
          </Link>
          <Link to="/#skill">
            <span className={LINKS_STYLE}>Skill</span>
          </Link>
          <Link to="/#milestone">
            <span className={LINKS_STYLE}>Milestone</span>
          </Link>
          <Link to="/#project">
            <span className={LINKS_STYLE}>Project</span>
          </Link>
          <Link to="/#activity">
            <span className={LINKS_STYLE}>Activity</span>
          </Link>
          <Link to="/#contact">
            <span className={LINKS_STYLE}>Contact</span>
          </Link>
        </div>
      </div>
      <div className="text-slate-100 w-full border-slate-100 border-t-2 mt-4 flex justify-center p-4">
        <p>Copyright &copy; 2023; Made with ❤️ by <span className="yellow-red bg-clip-text text-transparent font-bold">Ziyi Xu</span></p>
      </div>
    </footer>
  );
}
