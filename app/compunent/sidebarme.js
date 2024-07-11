import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import SettingPic from "@/app/icons/icons8-settings-50.png"
import Image from 'next/image'
import Link from "next/link";
import React from "react";
import {useState} from "react";

function Sidebarme() {
    const [activeLink, setActiveLink] = useState(null);

    return (

        <>
            <div
                className="h-screen w-64 fixed top-0 left-0 bg-white border-2 border-gray-300 flex flex-col">
                <div className="flex flex-col ">
                    <div className="flex flex-col pl-5 pt-3  gap-2 ">
                        <h1 className=" h-14  text-4xl font-bold  rounded">Dashboard</h1>


                        <Link href="/homepage" className=" h-12  text-2xl font-bold rounded">

                            Home

                        </Link>
                       <Link href="/currnecny"
                                     className="h-12  text-2xl font-bold  rounded">

                        Currency

                    </Link><Link href="/SocialMedia" className="h-12  text-2xl font-bold  rounded">

                        Social Media

                    </Link><Link href="/Sales" className=" h-12  text-2xl font-bold  rounded">

                        Sales

                    </Link>
                        <Link href="/Crypto" className=" h-12  text-2xl font-bold  rounded">

                            Crypto

                        </Link>


                    </div>
                </div>

                <div className="mt-auto mb-2 ml-1 flex flex-row gap-3 items-center align-bottom">

                </div>
            </div>
        </>
    )
}

export default Sidebarme