import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb, BreadcrumbItem, Alert } from "react-bootstrap";
import "@/app/globals.css";
import AppHeader from "@/app/components/AppHeader";
import AppFooter from "@/app/components/AppFooter";
import UserAvatarMenu from "@/app/components/UserAvatarMenu";

export default function ShowPeople() {
  return (
    <div>
      <header>
        <UserAvatarMenu />
        
      </header>
      <div className="container my-4">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/modules_home">
                Hawk HR Modules
              </BreadcrumbItem>
              <BreadcrumbItem active href="/modules_home">
                Hawk HR People Module
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-auto">
            <Image
              src="/users.svg"
              alt="Hawk People Icon"
              height={50}
              width={50}
            />
          </div>
          <div className="col">
            <h2 className="pt-2">Hawk HR People Module</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="lead">
              Hawk People is the core module for managing your employees, and is
              required to use any of the other modules.
            </p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-auto">
            <h3 className="mt-1">Features</h3>
          </div>
          <div className="col text-end pt-2">
            <Image
              src="ai-sparkle-purple-green.svg"
              alt="AI Enabled"
              height={24}
              width={24}
            />{" "}
            AI enabled
          </div>
        </div>

        <div className="row">
          <div className="col ps-4 pt-2 ">
            <h4>
              &rsaquo; On-Boarding{" "}
              <Image
                src="ai-sparkle-purple-green.svg"
                alt="AI Enabled"
                height={24}
                width={24}
              />
            </h4>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="px-4 text-subdued">
              Bringing new people on board doesn't have to be time consuming if
              the on-boarding process is efficient. Hawk People provides an
              on-line employment application tailored to each customer's needs,
              as well as a fillable Form I-9. Welcome packages, 1st day of
              employment instructions, and contact information can be created
              and distributed as desired. Everyone in the hiring process has
              access to the on-boarding feature and email/text notifications can
              be enabled to keep everyone aprised as the process progresses.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col ps-4">
            <h4>&rsaquo; Provisioning </h4>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="px-4 text-subdued">
              In a perfect world, everything would be ready to go on a new
              employee's first day: Assigned work space, computer equipment,
              mobile phone, network log-in, email address, keys or key cards,
              and employee badge. Hawk People's ability to integrate with
              external systems makes this more of a sure thing. An extension of
              the on-boarding process, Hawk People provides on-line checklists
              and a status dashboard with near real time updates.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col ps-4">
            <h4>
              &rsaquo; Position Management{" "}
              <Image
                src="ai-sparkle-purple-green.svg"
                alt="AI Enabled"
                height={24}
                width={24}
              />
            </h4>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="px-4 text-subdued">
              Companies that document their employee needs by position set
              themselves up for success. Positions are arranged in a hierarchy
              with each showing the responsibilities associated with that
              position, required knowledge, skills, abilities, and work schedule
              requirements. Any special skills, such as language proficiency or
              physical requirements can be documented. Capture the salary range
              to assist in financial planning. Hawk People provides examples and
              the ability to manage the position descriptions, and Hawk AI can
              provide suggestions if needed.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col ps-4">
            <h4>
              &rsaquo; Performance Measurement{" "}
              <Image
                src="ai-sparkle-purple-green.svg"
                alt="AI Enabled"
                height={24}
                width={24}
              />
            </h4>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="px-4 text-subdued">
              With individuals assigned to known positions, developing a
              performance measure system is much simpler. The requirements are
              known, it's just a matter of evaluating compliance. Hawk AI steps
              the HR staff through creating the measurement system.{" "}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col ps-4">
            <h4>
              &rsaquo; Newsletters and Broadcast Announcements{" "}
              <Image
                src="ai-sparkle-purple-green.svg"
                alt="AI Enabled"
                height={24}
                width={24}
              />
            </h4>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="px-4 mb-1 text-subdued">
              Create a newsletter using your favorite presentation tool, or ask
              Hawk AI get you started. Broadcast announcements, e.g.,
            </div>
            <ul className="ms-4 my-0 text-subdued">
              <li>Elevator outage status,</li>
              <li>Weather alerts,</li>
              <li>Doughnuts in the breakroom,</li>
              <li>Monthly all hands starts in 15 minutes</li>
            </ul>
            <div className="px-4 mt-1 text-subdued">
              are generated quickly and easily and can be sent to all, or only
              targeted groups. Typically sent by email, they can also be
              transmitted via text message.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col ps-4">
            <h4>&rsaquo; Emergency Announcements</h4>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="px-4 text-subdued">
              It's unfortunate, but events happen during the day that require an
              emergency announcement. It could be a weather alert, or an active
              shooter, but when it happens the word needs to go out immediately.
              Similar to broadcast announcements, but emergency announcements go
              out to all devices at high priority.
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col">
          <h3>Core Tenets</h3>
          </div>
        </div>
             
        <div className="row">
          <div className="col ps-4">
            <h4>&rsaquo; Secure </h4>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="px-4 text-subdued">
              Hawk People is a secure system. It meets the requirements for use in
              a NIST Cybersecurity Framework (CSF), SOC 2 (Type I & II), or
              ISO/IEC 27001 regulated environment. All of the information created
              and used within Hawk People is encrypted so your information is
              safe. Screens and reports that contain Personally Identifiable
              Information (PII) are clearly labeled so HR staff know to safeguard
              it. Email notifications that contain PII are similarly annotated.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col ps-4">
            <h4>&rsaquo; Accessible </h4>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="px-4 text-subdued">Hawk People was designed to be accessible. It displays well in
              high-contrast environments and has been tested for use with screen
              readers. Hawk People is WCAG-Aria certified.
            </div>        
          </div>
          </div>

        <div className="row">
          <div className="col ps-4">
            <h4>&rsaquo; Accessible </h4>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="px-4 text-subdued">
              Hawk People can be the source of authority for your employees, or it
              can act as an intermediary to your existing source of authority,
              e.g., Active Directory/Azure, Okta, Open-LDAP, etc..
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col ps-4">
            <h4>&rsaquo; Brandable </h4>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="px-4 text-subdued">
              If desired, we can apply your company logo, fonts, and colors to the Hawk HR platform.
            </div>
          </div>
        </div>


         
      </div>
      <AppFooter />
    </div>
  );
}
