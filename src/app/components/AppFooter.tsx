import Image from "next/image";
import Link from "next/link";
export default function AppFooter() {
  const currentDate = new Date();
  return (
    
    <div className="container-fluid mt-4 footer footer-bg">
      
      <div className="row">
        <div className="col text-center pt-2">
          <a href="#" className="footer-item">Accessibility</a>
          <a href="#" className="footer-item">Terms of Use</a>
          <a href="#" className="footer-item">Privacy Policy</a>
          <a href="#" className="footer-item">Terms &amp; Conditions</a>
          <a href="#" className="footer-item">Employee Portal</a>
          <a href="#" className="footer-item">Merchandise</a>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col text-center">
          <span className="me-3 text-secondary">Connect with us on Discord, Linked In, or Reddit</span>
          <Link href="https://www.discord.com" target="_blank" title="Join Hawk Discord Channel"><Image src="/Discord-Symbol-Blurple.svg" alt="Discord logo" height={28} width={28} /></Link>
          <Link href="https://linkedin.com" target="_blank" title="Open Linked In"><Image src="/LI-in-Bug.png" alt="Linked In logo" height={24} width={28} className="ms-4 me-3" /></Link>
          <Link href="https://reddit.com" target="_blank" title="Open Reddit channel"><Image src="/reddit.png" alt="Reddit logo" height={28} width={28}  /></Link>
        </div>
      </div>
      </div>
  );
}