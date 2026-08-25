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
        <div className="col-1 text-center">
          <a href="/">
            <Image
              src="/hawk-in-flight-purple-green-filled.svg"
              alt="Next.js logo"
              width={64}
              height={64}
            />
          </a>
        </div>
        <div className="col-2">
          <h1 className="AppHeaderTitle"><span className="color-deep-purple">Hawk</span> <span className="superscript">HR</span></h1>
        </div>
        <div className="col-9 text-end pt-3">
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
