import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb, BreadcrumbItem, Alert } from "react-bootstrap";
import "@/app/globals.css";
import AppHeader from "@/app/components/AppHeader";
import AppFooter from "@/app/components/AppFooter";

export default function ShowBenefits() {
    return (
        <div>
            <header>
                <AppHeader title="Hawk Human Resources" />
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
                            src="/shield-dollar-purple-green.svg"
                            alt="Hawk Benefits Icon"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="col">
                        <h2 className="pt-2">Hawk HR Benefits Module</h2>
                    </div>
                </div>
                <h3 className="mt-4">Features</h3>
                <hr />
                <div className="row">
                    <div className="col">
                        <p>
                            Hawk Benefits is AI powered. The core module provides a template
                            that incorporates typical benefits: Health care insurance, dental
                            insurance, vision insurance, Flexible Spending Accounts, Health
                            Savings Accounts, retirement account contributions and/or shares.
                        </p>
                        <p>
                            Benefits managers work with Hawk AI to customize the template,
                            adding or subtracting benefits to make sure what is shown
                            represents what is available, and that employee costs are correct.
                        </p>
                        <p>An open-season is the most stressful period for Benefits managers. Hawk Benefits assists with a step-by-step workflow solution.</p>
                        <p>The concept on which Hawk Benefits was created:</p>
                        <ul>
                            <li><h5>90 Days Before: Planning and Setup</h5></li>
                            <ul>
                                <li>Review past plan utilization, data, and employee feedback.</li>
                                <li>Meet with brokers and carriers to finalize renewals, costs, and plan designs.</li>
                                <li>Align budgets with finance and secure leadership approval.</li>
                                <li>Test enrollment software workflows and payroll integration end-to-end.</li>
                            </ul>
                            <li><h5>30 Days Before: Preparation and Launch</h5></li>
                            <ul>
                                <li>Publish clear plan descriptions, deadlines, and required annual notices.</li>
                                <li>Launch multi-channel communications (email, intranet, and virtual sessions).</li>
                                <li>Provide open support and Q&A channels for employee questions.</li>
                            </ul>
                            <li><h5>During Open Season: Execution</h5></li>
                            <ul>
                                <li>Keep active reminders running regarding the final deadline.</li>
                                <li>Allow employees time to review options, check dependent information, and submit choices.</li>
                                <li>Monitor system submission logs to track participation rates.</li>
                            </ul>
                            <li><h5>Post-Enrollment: Reconciliation and Compliance</h5></li>
                            <ul>
                                <li>Reconcile final elections against carrier files and payroll deductions.</li>
                                <li>Send individual confirmation statements to participating employees.</li>
                                <li>Archive all compliance documents and records securely.</li>
                            </ul>
                        </ul>

                    </div>
                </div>
            </div>
            <AppFooter />
        </div>
    );
}
