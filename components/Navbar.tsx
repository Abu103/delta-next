"use client"

import { ModeToggle } from "./toggle";
import { Input } from "./ui/input";
import { useState } from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
    const [inputValue, setInputValue] = useState("")


    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.currentTarget.value);
    }

    return (
        <nav className="flex place-content-end fixed z-2 w-screen  right-0 py-3 bg-white/60 backdrop-blur-md dark:bg-black/60">
            <div className="flex justify-between gap-3 w-[100vw] px-3 md:justify-between">
                {/* <div className="hidden md:block"></div> */}
                <SidebarTrigger />
                <Input
                    onChange={handleInput}
                    value={inputValue}
                    placeholder="Git and Github"
                    type="text"
                    className="w-auto md:w-[30vw]"
                    aria-label="Search input"
                />
                <div className="flex gap-2">
                    <Button>
                        <Link href="/signup">Sign Up</Link>
                    </Button>
                    <ModeToggle />
                </div>

            </div>
        </nav>
    )
}

export default Navbar;