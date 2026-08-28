import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { metadata } from "./layout";
import AppFooter from "@/app/components/AppFooter";
import { ButtonGroup } from "react-bootstrap";

export default function Home() {
  return (
    <div>

      <div className="container-fluid">
        <header><div className="row mt-1"><div className="col text-end pt-1"><Image src="/avatar.svg" alt="" height={24} width={24} />{ " "}Client Login</div></div></header>
      </div>
        <div className="container">
        <main className="row mt-0">
          <div className="col-2">
            <Image
              src="/hawk-in-flight.svg"
              alt="Next.js logo"
              width={200}
              height={200}
              priority
            />
          </div>
          <div className="col-10 mt-5">
            <h1>Hawk Human Resources</h1>
            <p className="subtitle">{metadata.description}</p>
          </div>
        </main>
        <div className="row">
          <div className="col-6">
            <img src="getty-images-TjXrwsCKprs-unsplash.jpg" className="hero" />
            <div className="mt-4 text-center">
              <a className="btn btn-sm btn-link" href="/modules_home">
                <Image
                  src="/magnifying-glass.svg"
                  alt="Next.js logo"
                  width={24}
                  height={24}
                  className="me-1"
                />
                Explore the modules
              </a>
              &nbsp;
              <a className="btn btn-sm btn-link" href="/demo">
                <Image
                  src="/inbox-out.svg"
                  alt="Next.js logo"
                  width={24}
                  height={24}
                  className="me-1"
                />
                Request a demo
              </a>
              <a className="btn btn-sm btn-link" href="#">
                <Image
                  src="/download.svg"
                  alt="Next.js logo"
                  width={24}
                  height={24}
                  className="me-1"
                />
                Dowload the whitepaper
              </a>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Intuitive</li>
              <li>AI enabled</li>
              <li>
                Extensible - add capabilities as you need them, but not before.
              </li>
              <li>Efficient - ready for work in the real world.</li>
              <li>Certified compliant with all US Federal regulations.</li>
            </ul>
            <hr />
            <dl>
              <dt>People</dt>
              <dd>The core module for managing your employees.</dd>
              <ul>
                <li className="level_2">On-boarding</li>
                <li className="level_2">Position Management</li>
                <li className="level_2">Performance Measurement</li>
                <li className="level_2">
                  Newsletters and/or Broadcast Announcements
                </li>
                <li className="level_2">Emergency Notifications</li>
              </ul>
              <dt>Benefits</dt>
              <dd>
                Manage benefits open season knowing it's just going to work.
              </dd>
              <dt>Recruiting</dt>
              <dd>
                Integrate with third-party applications like Linked-In or Indeed
                to streamline posting employment needs and on-board people
                faster using on-line application processing.
              </dd>
              <dt>Time & Financial</dt>
              <dd>
                Not just a timesheet program, but a means give your organization
                the ability to track costs and manage return on investments
                through project/engagement level accouting.
              </dd>
            </dl>
          </div>
        </div>
        <hr className="gradient" />
        <AppFooter />
      </div>
    </div>
  );
}
