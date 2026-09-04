import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb, BreadcrumbItem, Alert } from "react-bootstrap";
/*import "@/app/globals.css";*/
import UserAvatarMenu from "@/app/components/UserAvatarMenu";
import AppFooter from "@/app/components/AppFooter";

export default function ModulePage() {
  return (
    <div>
      {/* Header */}
      <header>
        <UserAvatarMenu />
      </header>
      {/*Container */}
      <div className="container">
        {/* Breadcrumbs */}
        <div className="row mt-1">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem active href="#">
                Modules
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        {/* /Breadcrumbs */}

        <h2>Hawk Human Resources (HR) Modules</h2>

        {/* Introduction */}
        <div className="row">
          <p>
            Hawk <span className="superscript">HR</span> currenly has 4 active
            modules. The summaries below provide basic information. To get more,
            click or select the ... more link at the bottom.
            <br />
            Hawk AI is available in all the modules and is provided as tool to{" "}
            <i>help</i>, not dominate. For example, Hawk{" "}
            <span className="superscript">AI</span> can help your HR team write
            a position description, or craft a financial report in Hawk Time
            &amp; Financial, but it can't generate the numbers.
          </p>
        </div>
        {/* /Introduction */}

        {/* Hawk Cards */}
        <div className="row">
          {/* People Card */}
          <div className="col-3">
            <div className=" container card">
              <div className="row card-banner">
                <div className="col-auto">
                  <Image
                    src="/users.svg"
                    alt="user-group"
                    height={92}
                    width={92}
                  />
                </div>
                <div className="col">
                  <h5>People</h5>
                </div>
              </div>
              <div className="row card-body">
                <div className="col card-text">
                  <div>The core module for managing your employees.</div>
                  <ul>
                    <li>On-boarding</li>
                    <li>Position Management</li>
                    <li>Performance Measurement</li>
                    <li>Newsletters and Broadcast Announcements</li>
                    <li>Emergency Notifications</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col text-end text-primary px-0 py-2">
                  <a href="/people" className="btn btn-link"><span className="more-link">
                    <Image
                      src="/horizontal-ellipsis-white.svg"
                      alt=""
                      height={18}
                      width={18}
                    />
                  </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*end People Card */}
          {/* Benefits Card */}
          <div className="col-3">
            <div className="container card">
              <div className="row card-banner">
                <div className="col-auto ">
                  <Image
                    src="/shield-heart.svg"
                    alt="user-group"
                    height={90}
                    width={90}
                  />
                </div>
                <div className="col">
                  <h5 className="text-start">Benefits</h5>
                </div>
              </div>
              <div className="row card-body">
                <div className="col card-text">
                  Benefits are a major reason people join your company and stay
                  with it. Benefits managers need an intuitive interface to
                  capture benefits being offered. Employees want an benefits
                  open season to be as quick and painless as possible. Hawk
                  Benefits makes it easy for them to both review and select the
                  benefits they want as well as see what the costs are.
                </div>
              </div>
              <div className="row">
                <div className="col text-end text-primary px-0 py-2">
                  <a href="/benefits" className="btn btn-link"><span className="more-link">
                    <Image
                      src="/horizontal-ellipsis-white.svg"
                      alt=""
                      height={18}
                      width={18}
                    />
                  </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*end Benefits Card */}
          {/* Time and Financials Card */}
          <div className="col-3">
            <div className="container card">
              <div className="row card-banner">
                <div className="col-auto">
                  <Image
                    src="/user-plus.svg"
                    alt="user-group"
                    height={88}
                    width={88}
                  />
                </div>
                <div className="col">
                  <h5>Recruiting</h5>
                </div>
              </div>
              <div className="row card-body">
                <div className="col card-text">
                  Hawk Recruiting starts basic - providing a portal to capture
                  those positions that need to be filled. With the portal
                  populated, an Application Programming Interface (API) provides
                  your company site web developer or contractor an easy means to
                  retrieve those listings for display on you company site. Take
                  it a step farther by integrating with paid recruiting sites
                  such as Linked In or Indeed to post positions.
                </div>
              </div>
              <div className="row">
                <div className="col text-end text-primary px-0 py-2">
                  <a href="/recruiting" className="btn btn-link"><span className="more-link">
                    <Image
                      src="/horizontal-ellipsis-white.svg"
                      alt=""
                      height={18}
                      width={18}
                    />
                  </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*Time and Financials Card */}
          <div className="col-3">
            <div className="container card">
              <div className="row card-banner">
                <div className="col-auto text-center">
                  <Image
                    src="/clock-ten-key.svg"
                    alt="user-group"
                    height={84}
                    width={84}
                  />
                </div>
                <div className="col text-center">
                  <h5>Time &amp; Financials</h5>
                </div>
              </div>
              <div className="card-body">
                <div className="card-text">
                  Hawk Time &amp; Financials gives your Chief Financial Officer
                  the personnel cost tools they want. Hawk Time &amp; Financials
                  gives your Chief Operating Officer the project/engagement
                  costs they want. Combines a Time &amp; Attendance portal, aka
                  TimeSheet with project/engagement charging to capture cost
                  based accounting metrics. Dashboards show Executive Leadership
                  and Board Members real time results.
                </div>
              </div>
              <div className="row">
                <div className="col text-end text-primary  px-0 py-2">
                  <a href="/benefits" className="btn btn-link">
                    <span className="more-link">
                      <Image
                        src="/horizontal-ellipsis-white.svg"
                        alt=""
                        height={18}
                        width={18}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /Time and Financials Card */}
        </div>
        {/* /Hawk Cards */}
      </div>{" "}
      <AppFooter />
    </div>
  );
}
