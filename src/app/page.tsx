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
  { src: '/picture-e.png', alt: 'Full office', loading: 'eager' },
]

export default function Home() {
  return (
    <div>

      <div className="container-fluid">
        <div className="row mt-1"><div className="col text-end pt-1"><Image src="/avatar.svg" alt="" height={24} width={24} />{ " "}Client Login</div></div>
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
         {/*<div className="col-2">
            <ImageCarousel images={sampleImages1} />

          </div>*/}
          <div className="col">
            <h4 >The Facts</h4>
            <p className="ps-3 lead">&quot;Warm bodies&quot; may keep a company alive short term, but <u>talented, motivated, invested</u> <span className="color-kelly-green">People</span> are the bedrock of 
            every successful long-lived company.</p>
            <p className="ps-3 lead"><span className="color-red">Empty seats</span> don't bring in revenue, envision or build your next amazing product, lead projects, or inspire others.</p>
            <p className="ps-3 lead"><span className="color-red">Employee turn-over</span> is expensive.</p>            
            <h4>The Answer</h4><p className="ps-3 lead"><span className="color-kelly-green">Keep</span> the amazing team members you have and <span className="color-kelly-green">grow</span> by bringing on their co-workers and leaders through efficient, intuitive, compassionate human resource services.</p>
            <hr className="gradient"/>
            <p className="ps-3">Hawk Human Resources (HR) is a state-of-the art software application that gives your HR staff the tools needed to find, on-board, and keep the most valuable resource<br/> in your company &ndash;<b> It's people.</b></p>
            
            <h4 className="ps-3">Hawk HR is:</h4>
            <ul>
              <li><i>Intuitive;</i></li>
              <li><i>AI enabled;</i></li>
              <li><i>Extensible - add capabilities as you need them, but not before;</i></li>
              <li><i>Efficient - ready for work in the real world, and</i></li>
              <li><i>Certified compliant with all US Federal regulations.</i></li>
            </ul>
            
            <div className="row">
              
              <div className="col-4">
                <a href="/modules_home">
                <div className="story-button">
                  <div className="row align-items-center">
                    <div className="col-1 text-center ps-4">
                    <Image
                      src="/eye-blue-green.svg"
                      alt="Next.js logo"
                      width={32}
                        height={32}
                        
                      />
                    </div>
                    <div className="col-8 pt-3"><p className="color-kelly-green mx-4">Explore <span className="color-azure">the modules</span></p></div>
                  <div className="col-2 text-end"><Image src="chevron-circle-right.svg" alt="explore modules" height={32} width={32} /></div>
                  </div>
                </div>
              </a>
                </div>
                
              <div className="col-4"><a href="/demo">
                <div className="story-button">
                  <div className="row align-items-center">
                    <div className="col-1 text-center ps-4">
                      <Image
                        src="/email-blue-green.svg"
                        alt="Next.js logo"
                        width={32}
                        height={32}
                        
                      />
                    </div>
                    <div className="col-8 pt-3"><p className="color-deep-purple mx-4">Request<span className="text-secondary"> a demo</span></p></div>
                    <div className="col-3 text-center"><Image src="chevron-circle-right.svg" alt="explore modules" height={32} width={32} /></div>
                  </div>
                </div></a>
              </div>

              <div className="col-4">
                <a href="#">
                <div className="story-button">
                  <div className="row align-items-center">
                    <div className="col-1 text-center ps-4">
                      <Image
                        src="/download-blue-green.svg"
                        alt="Next.js logo"
                        width={32}
                        height={32}
                      />
                    </div>
                      <div className="col-8 pt-3"><p className="mt-0 color-orange mx-4">Download <span className="text-secondary">the PDF</span></p></div>
                    <div className="col-3 text-center "><Image src="chevron-circle-right.svg" alt="explore modules" height={32} width={32} /></div>
                  </div>
                  </div></a>
              </div>

            </div>{ /* row */}              
         </div>
        </div>
        
      </div>
      <div className="container-fluid"><AppFooter /></div>
    </div>
  );
}
