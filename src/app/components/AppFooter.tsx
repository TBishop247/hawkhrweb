import Image from "next/image";
export default function AppFooter() {
  const currentDate = new Date();
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-1 text-center">
          <a
            href="https://www.w3.org/WAI/WCAG2AAA-Conformance"
            title="Explanation of WCAG 2 Level AAA conformance"
            target="_blank"
          >
            <Image
              height={31}
              width={88}
              src="/wcag2AAA-blue.png"
              alt="Level AAA conformance,
            W3C Web Content Accessibility Guidelines 2.2"
              aria-labelledby="logo-id"
            ></Image>
            <div className="hidden" id="logo-id">
              WCAG Logo
            </div>
          </a>
        </div>
        <div className="col text-end">{currentDate.toDateString()}</div>
      </div>
    </div>
  );
}
