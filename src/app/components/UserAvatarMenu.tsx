"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Form, Button, Alert, Spinner } from "react-bootstrap";

export default function UserAvatarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row header-bg">
        <div className="col-auto text-center">
          <a href="/">
            <Image
              src="/hawk-in-flight.svg"
              alt="Next.js logo"
              width={48}
              height={48}
            />
          </a>
        </div>
        <div className="col-2">
          <div className="AppHeaderTitle">
            <span className="text-bright">Hawk</span>{" "}
            <span className="superscript text-subdued">HR</span>
          </div>
        </div>
        <div className="col text-end" ref={menuRef}>
          {/* Avatar Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="btn"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <Image
              src="/avatar.svg" // Replace with your avatar path
              alt="User Avatar"
              width={32}
              height={32}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="profile-menu">
              <div
                className="container"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="row menu-item">
                  <div className="col text-start">
                    <Link
                      href="#"
                      role="menuitem"
                      onClick={() => {
                        setIsOpen(false);
                        setShowForm(true);
                      }}
                    >
                      Client Login
                    </Link>
                  </div>
                </div>

                <div className="row menu-item">
                  <div className="col text-start">
                    <Link
                      href="#"
                      role="menuitem"
                      onClick={() => setIsOpen(false)}
                      className="menu-item-disabled"
                    >
                      Support
                    </Link>
                  </div>
                </div>
                <div className="row menu-item">
                  <div className="col text-start ">
                    <Link
                      href="#"
                      role="menuitem"
                      onClick={() => setIsOpen(false)}
                      className="menu-item-disabled"
                    >
                      Wiki
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showForm && (
            <div>
              <Form
                action=""
                noValidate
                className="login-form form p-3 text-start"
              >
                <div className="row m-0">
                  <div className="col p-0 text-end">
                    <Image
                      src="/square-xmark.svg"
                      alt="close"
                      height={24}
                      width={24}
                      onClick={() => {
                        setShowForm(false);
                      }}
                    />
                  </div>
                </div>

                {/* Name Field */}
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Jane Doe"
                  />
                  <Form.Control.Feedback type="invalid">
                    oops
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="********"
                  />
                  <Form.Control.Feedback type="invalid">
                    oops
                  </Form.Control.Feedback>
                </Form.Group>
                <hr />
                <Button
                  variant="outline-secondary"
                  type="submit"
                  disabled={false}
                  className="btn btn-submit"
                >
                  <Image
                    src="/login.svg"
                    alt="Sen"
                    height={24}
                    width={24}
                    className="me-2"
                  />
                  {0 ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Submitting...
                    </>
                  ) : (
                    "Log in"
                  )}
                </Button>
              </Form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
