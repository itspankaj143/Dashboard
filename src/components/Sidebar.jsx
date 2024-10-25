"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div className="container">
      <div className="row demo">
        {/* Left Sidebar (2 columns) */}
        <div
          className="d-flex flex-column vh-100  text-white"
          style={{ zIndex: 1000, position: "relative" }}
        >
          <div className="p-3">
            <Link className="navbar-brand text-white px-5" href="/">
              Brand
            </Link>
          </div>
          <ul className="nav flex-column px-2 py-4">
            <li className="nav-item">
              <Link
                href="/student/dashboard"
                className={`nav-link text-white ${
                  router.push === "/student/dashboard" ? "active" : ""
                }`}
              >
                <div className="d-flex tw-gap-5 align-items-center justify-content-between tw-w-full">
                  <Image
                    src="/images/grid.svg"
                    height="20"
                    width="20"
                    alt="Dashboard"
                    priority={true}
                  />
                  <span className="flex-grow-1 text-start">My Dashboard</span>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/student/dashboard/attendance"
                className={`nav-link text-white ${
                  router.push === "/student/dashboard/attendance"
                    ? "active"
                    : ""
                }`}
              >
                <div className="d-flex tw-gap-5 align-items-center justify-content-between tw-w-full">
                  <Image
                    src="/images/Group 2364.svg"
                    height="20"
                    width="20"
                    alt="Attendance"
                    priority={true}
                  />
                  <span className="flex-grow-1 text-start">My Attendance</span>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/student/dashboard/grades"
                className={`nav-link text-white ${
                  router.push === "/student/dashboard/grades"
                    ? "active"
                    : ""
                }`}
              >
                <div className="d-flex tw-gap-5 align-items-center justify-content-between tw-w-full">
                  <Image
                    src="/images/Group 2872.svg"
                    height="20"
                    width="20"
                    alt="Grades"
                    priority={true}
                  />
                  <span className="flex-grow-1 text-start">Grades</span>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/student/dashboard/mycourse"
                className={`nav-link text-white ${
                  router.push === "/student/dashboard/mycourse"
                    ? "active"
                    : ""
                }`}
              >
                <div className="d-flex tw-gap-5 align-items-center justify-content-between tw-w-full">
                  <Image
                    src="/images/book_5.svg"
                    height="20"
                    width="20"
                    alt="My Course"
                    priority={true}
                  />
                  <span className="flex-grow-1 text-start">My Course</span>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/student/dashboard/projects"
                className={`nav-link text-white ${
                  router.push === "/student/dashboard/projects"
                    ? "active"
                    : ""
                }`}
              >
                <div className="d-flex tw-gap-5 align-items-center justify-content-between tw-w-full">
                  <Image
                    src="/images/edit_document.svg"
                    height="20"
                    width="20"
                    alt="Projects"
                    priority={true}
                  />
                  <span className="flex-grow-1 text-start">Projects</span>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/student/dashboard/practice-english"
                className={`nav-link text-white ${
                  router.push === "/student/dashboard/practice-english"
                    ? "active"
                    : ""
                }`}
              >
                <div className="d-flex tw-gap-5 align-items-center justify-content-between tw-w-full">
                  <Image
                    src="/images/hotel_class.svg"
                    height="20"
                    width="20"
                    alt="Practice English"
                    priority={true}
                  />
                  <span className="flex-grow-1 text-start">
                    Practice English
                  </span>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/student/dashboard/ai-interview"
                className={`nav-link text-white ${
                  router.push === "/student/dashboard/ai-interview"
                    ? "active"
                    : ""
                }`}
              >
                <div className="d-flex tw-gap-5  align-items-center justify-content-between tw-w-full">
                  <Image
                    src="/images/g6393.svg"
                    height="20"
                    width="20"
                    alt="AI Interview"
                    priority={true}
                  />
                  <span className="flex-grow-1 text-start">AI Interview</span>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/student/dashboard/job-portal"
                className={`nav-link text-white ${
                  router.push === "/student/dashboard/job-portal"
                    ? "active"
                    : ""
                }`}
              >
                <div className="d-flex tw-gap-5 align-items-center justify-content-between tw-w-full">
                  <Image
                    src="/images/work.svg"
                    height="20"
                    width="20"
                    alt="Job Portal"
                    priority={true}
                  />
                  <span className="flex-grow-1 text-start">Job Portal</span>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/student/dashboard/refer-and-earn"
                className={`nav-link text-white ${
                  router.push === "/student/dashboard/refer-and-earn"
                    ? "active"
                    : ""
                }`}
              >
                <div className="d-flex tw-gap-5 align-items-center justify-content-between tw-w-full">
                  <Image
                    src="/images/Group 2870.svg"
                    height="20"
                    width="20"
                    alt="Refer and Earn"
                    priority={true}
                  />
                  <span className="flex-grow-1 text-start">Refer and Earn</span>
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/student/dashboard/settings"
                className={`nav-link text-white ${
                  router.push === "/student/dashboard/settings"
                    ? "active"
                    : ""
                }`}
              >
                <div className="d-flex tw-gap-5 align-items-center justify-content-between tw-w-full">
                  <Image
                    src="/images/settings.svg"
                    height="20"
                    width="20"
                    alt="Settings"
                    priority={true}
                  />
                  <span className="flex-grow-1 text-start">Settings</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
