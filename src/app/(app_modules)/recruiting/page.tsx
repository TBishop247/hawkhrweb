import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb, BreadcrumbItem, Alert } from "react-bootstrap";
import "@/app/new.css";
import UserAvatarMenu from "@/app/components/UserAvatarMenu";
import AppFooter from "@/app/components/AppFooter";

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
                Hawk HR Benefits Module
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-auto">
            <Image
              src="/user-plus.svg"
              alt="Hawk Recruiting Icon"
              height={50}
              width={50}
            />
          </div>
          <div className="col">
            <h2 className="pt-2">Hawk HR Recruiting Module</h2>
          </div>
              </div>
              <div className="row">
                  <div className="col">
                      <p className="lead">
                      Recruiting is hard. It's time consuming and it can be very expensive. Hawk Recruiting gives you the flexibility to start simple: Advertise on your company website and take applications. When you're ready to start interacting with paid job sites, Hawk Recruiting is ready to facilitate that interaction.
                      </p>
                  </div>
              </div>

        <div className="row">
          <div className="col">
            <h3 className="mt-4">Features</h3>
            <hr />
          </div>
        </div>
        <div className="row">
                  <div className="col">
                      
            Hawk Recruiting starts basic - providing a portal to capture those
            positions that need to be filled. With the portal populated, an
            Application Programming Interface (API) provides your company site
            web developer or contractor an easy means to retrieve those listings
            for display on you company site. Take it a step farther by
            integrating with paid recruiting sites such as Linked In or Indeed
            to post positions.
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
