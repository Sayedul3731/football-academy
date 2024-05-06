"use client"
import Link from "next/link";
import { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuItems = [
        { path: "/", text: "Home" },
        { path: "/all-tournament", text: "All Tournament" },
        { path: "/upcoming-tournament", text: "Upcoming Tournament" },
        { path: "/all-matches", text: "All Matches" },
        { path: "/upcoming-matches", text: "Upcoming Matches" },
        { path: "/our-team", text: "Our Team" },
        { path: "/our-tour", text: "Our Tour" },
    ];
    const navlinks = <>
        <ul className="flex flex-col py-5 gap-1 font-semibold">
            {
                menuItems?.map((menuItem, i) =>
                    <li key={i} onClick={() => setOpen(false)} className="cursor-pointer">
                        <Link href={menuItem?.path}>{menuItem?.text}</Link>
                    </li>
                )
            }
        </ul>
    </>
    return (
        <div className="relative flex justify-start items-center w-full py-7 md:shadow-md ">
            <div
                onClick={() => setOpen(!open)}
                className={`${open ? "hidden" : ""
                    } text-4xl px-1 ml-1 md:ml-0 md:hidden`}
            >
                {open ? (
                    <RxCross1></RxCross1>
                ) : (
                    <IoReorderThreeSharp></IoReorderThreeSharp>
                )}
            </div>
            <div className={`${open
                ? " bg-primary px-5 flex flex-col w-full duration-500 fixed md:hidden top-0 z-50"
                : "hidden"
                }  md:w-[80%] lg:w-[70%] md:block absolute`}>
                <span
                    onClick={() => setOpen(!open)}
                    className=" md:hidden flex justify-end absolute right-0 p-2 text-2xl"

                >
                    <RxCross1></RxCross1>
                </span>
                {navlinks}
            </div>
        </div>
    );
};

export default Navbar;