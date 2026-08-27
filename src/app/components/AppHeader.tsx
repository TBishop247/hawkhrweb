"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { useState,useRef,useEffect } from 'react';

interface AppHeaderProps {
  title: string;
}

export default function AppHeader({ title }: AppHeaderProps) {

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(even: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(even.target as Node))
        setIsOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
            onClick={() =>  setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
    </div>

   
    
  );
}
