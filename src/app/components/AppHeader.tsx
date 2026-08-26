import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/globals.css";
import Image from "next/image";

interface AppHeaderProps {
  title: string;
}

export default function AppHeader({ title }: AppHeaderProps) {
  return (
    <div className="container-fluid">
      <div className="row header-bg">
        <div className="col-auto text-center">
          <a href="/">
            <Image
              src="/hawk-in-flight-purple-green-filled.svg"
              alt="Next.js logo"
              width={32}
              height={32}
            />
          </a>
        </div>
        <div className="col-2">
          <div className="AppHeaderTitle"><span className="color-deep-purple">Hawk</span> <span className="superscript">HR</span></div>
        </div>
        <div className="col text-end">
          <Image
            src="/avatar-purple-green.svg"
            alt="avatar"
            height={32}
            width={32}
          />
        </div>
      </div>
    </div>
  );
}
