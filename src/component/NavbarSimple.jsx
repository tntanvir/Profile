import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CgMenuCheese } from "react-icons/cg";
import { SlClose } from "react-icons/sl";
import { CiLight } from "react-icons/ci";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { gitUser } from "../App";
import { MdDarkMode } from "react-icons/md";
function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 dark:text-white text-black cursor-pointer">
            <Typography
                as="li"
                variant="small"
                // color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center hover:text-dkText transition-colors ">
                    Pages
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                // color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center hover:text-dkText transition-colors">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                // color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center hover:text-dkText transition-colors">
                    Blocks
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                // color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center hover:text-dkText transition-colors">
                    Docs
                </a>
            </Typography>
        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    const [scrl, setScrl] = useState(false);
    const srl = () => {
        window.scrollY > 0 ? setScrl(true) : setScrl(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", srl);
    }, [])

    // ---------darkmood-------------

    const [them, setThem] = useState(null);
    const [gThem, setGThem] = useContext(gitUser);
    useEffect(() => {

        if (localStorage.getItem("them")) {
            setThem(localStorage.getItem("them"));
            setGThem(localStorage.getItem("them"));

        }

        else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setThem('dark');
            setGThem('dark');

        }
        else {
            setThem('light');
            setGThem('light');
        }
    }, [])

    useEffect(() => {
        if (them == "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
        them != null && localStorage.setItem("them", them);
    }, [them]);
    const mode = () => {
        setThem(them === "dark" ? "light" : "dark");
        setGThem(them === "dark" ? "light" : "dark");
        localStorage.setItem("them", them);
    }

    // ---------------------------------

    return (

        <Navbar className={`mx-auto max-w-screen md:px-24 py-3 rounded-none top-0 sticky z-50 ${scrl ? 'bg-transparent' : them === "dark" ? "bg-dkColor" : "bg-white"} border-none px-4 shadow-none `}>
            <div className="flex items-center justify-between  text-blue-gray-900 dark:text-white">
                <Typography
                    as="a"
                    href="/"
                    variant="h6"
                    className="mr-4 cursor-pointer text-2xl py-1.5"
                >
                    Tanvir
                </Typography>
                <div className="hidden lg:block">
                    <div className="flex items-center justify-center gap-6">

                        <NavList />

                        {
                            them === "dark" ?
                                <MdDarkMode onClick={() => mode()} className="text-2xl cursor-pointer hover:text-dkText" />
                                :
                                <CiLight onClick={() => mode()} className="text-2xl cursor-pointer hover:text-dkText" />
                        }
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4 lg:hidden">
                    {
                        them === "dark" ?
                            <MdDarkMode onClick={() => mode()} className="text-2xl lg:hidden  cursor-pointer hover:text-dkText" />
                            :
                            <CiLight onClick={() => mode()} className="text-2xl lg:hidden  cursor-pointer hover:text-dkText" />
                    }
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-2xl"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <SlClose />
                        ) : (

                            <CgMenuCheese />

                        )}
                    </IconButton>


                </div>
            </div>
            <Collapse open={openNav} >
                <NavList />

            </Collapse>
        </Navbar>
    );
}