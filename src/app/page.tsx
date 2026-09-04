import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { metadata } from "./layout";
import AppFooter from "@/app/components/AppFooter";
import { ButtonGroup } from "react-bootstrap";

import ImageCarousel from '@/app/components/ImageCarousel'

const sampleImages1 = [
  { src: '/picture-a.png', alt: 'Empty office' },
  { src: '/picture-b.png', alt: 'Partially filled office1' },
  { src: '/picture-c.png', alt: 'Partially filled office2' },
  { src: '/picture-d.png', alt: 'Partially filled office3' },
  { src: '/picture-e.png', alt: 'Full office' },
]

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
          <div className="col-4">
            <ImageCarousel images={sampleImages1} />
            {/*<img src="office.avif" className="hero" />*/}
          </div>
          <div className="col-8">
            <p className="lead">&quot;Warm bodies&quot; may keep a company alive short term, but <span className="color-kelly-green">motivated invested People</span> are the bedrock of 
            every successful long-lived company.</p>
            <p className="lead"><span className="color-red">Empty seats</span> don't bring in revenue, envision or build your next amazing product, lead projects, or inspire others.</p>
            <p className="lead"><span className="color-red">Employee turn-over</span> is expensive.</p>
            <p className="lead"><span className="color-kelly-green">Keep</span> the amazing team members you have and <span className="color-kelly-green">grow</span> by bringing on their co-workers and leaders through efficient, intuitive, compassionate human resource services.</p>
            
            <h3>Hawk HR is</h3>
            
            <ul>
              <li>Intuitive;</li>
              <li>AI enabled;</li>
              <li>
                Extensible - add capabilities as you need them, but not before;
              </li>
              <li>Efficient - ready for work in the real world, and</li>
              <li>Certified compliant with all US Federal regulations.</li>
            </ul>
            <hr />
            <div className="row">
              
              <div className="col-4"><a href="/modules_home">
                <div className="story-button p-3">
                  <div className="row align-items-center">
                    <div className="col-4">
                    <Image
                      src="/eye.svg"
                      alt="Next.js logo"
                      width={64}
                      height={64}
                      />
                      
                    </div>
                    <div className="col-6"><h5 className="mt-0 color-light-green">Explore</h5><span className="text-secondary">the modules</span></div>
                  <div className="col-2 text-start"><Image src="chevron-circle-right.svg" alt="explore modules" height={24} width={24} /></div>
                  </div>
                </div></a>
                </div>
                
              <div className="col-4"><a href="/demo">
                <div className="story-button p-3">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <Image
                        src="/envelope-check.svg"
                        alt="Next.js logo"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="col-6"><h5 className="mt-0 color-deep-purple">Request</h5><span className="text-secondary">a demo</span></div>
                    <div className="col-2 text-start"><Image src="chevron-circle-right.svg" alt="explore modules" height={24} width={24} /></div>
                  </div>
                </div></a>
              </div>
              <div className="col-4">
                <div className="story-button p-3">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <Image
                        src="/download.svg"
                        alt="Next.js logo"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="col-6"><h5 className="mt-0 color-orange">Download</h5><span className="text-secondary">the PDF</span></div>
                    <div className="col-2 text-start"><Image src="chevron-circle-right.svg" alt="explore modules" height={24} width={24} /></div>
                  </div>

                </div>
              </div>

            </div>{ /* row */}              
         </div>
        </div>
        <AppFooter />
      </div>
    </div>
  );
}
