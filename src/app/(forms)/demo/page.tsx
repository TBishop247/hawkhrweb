"use client";

import AppHeader from "@/app/components/AppHeader";
import AppFooter from "@/app/components/AppFooter";
import { useActionState } from "react";
import { Form, Button, Alert, Spinner, Image } from "react-bootstrap";
import { submitContactForm, FormState } from "../../(actions)/demo_request";

const initialState: FormState = {};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );
  return (
    <div>
      <header>
        <AppHeader title="Hawk Human Resources" />
      </header>
      
      <div className="container mt-4 mb-0">
        <div className="row">
          <div className="col-6 offset-3">
            <h3>Hawk HR Demonstration Request</h3>
          </div>
        </div>
        <div className="row mb-3 mt-0">
          <div className="col-6 offset-3">
            We will be happy to demonstrate the Hawk Human Resources
            application to your company. Normally, we use Zoom or Teams to do so. A typical demonstration takes about an hour, but it can run longer if members of your organization have questions or want to explore features in depth. To begin, please complete the form
            below. 
          </div>
        </div>
        <div>
          {/* Top Level Feedback Banner */}
          {state.message && (
            <Alert
              variant={state.success ? "success" : "danger"}
              className="mb-4 col-6 offset-3"
            >
              {state.message}
            </Alert>
          )}

          <Form action={formAction} noValidate className="form p-3 col-6 offset-3">
            {/* Name Field */}
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Jane Doe"
                isInvalid={!!state.errors?.name}
                disabled={isPending}
              />
              <Form.Control.Feedback type="invalid">
                {state.errors?.name?.[0]}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Email Field */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="jane@example.com"
                isInvalid={!!state.errors?.email}
                disabled={isPending}
              />
              <Form.Control.Feedback type="invalid">
                {state.errors?.email?.[0]}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Phone Field */}
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="(555) 000-0000"
                isInvalid={!!state.errors?.phone}
                disabled={isPending}
              />
              <Form.Control.Feedback type="invalid">
                {state.errors?.phone?.[0]}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit Button */}
            
            <Button variant="outline-secondary" type="submit" disabled={isPending} className="btn btn-submit">
              <Image src="/send.svg" alt="Sen" height={24} width={24} className="me-2"/>
              {isPending ? (
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
                "Submit"
              )}
            </Button>
            <a className="btn btn-outline-secondary btn-cancel ms-4" href="/">Cancel</a>
          </Form>
        </div>
      </div>
    </div>
  );
}
