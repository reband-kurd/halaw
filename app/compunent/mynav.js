import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";
import SettingPic from "@/app/icons/icons8-settings-50.png";

function Mynav(){
    return (

        <div className="bg-white border-2 border-gray-300 flex w-full h-16 mb-2 mr-20">
            <nav className="flex h-14 justify-between items-center w-full">
                <h1 className="text-4xl sticky left-72 text-gray-900 font-bold">Global data</h1>
                <div className="flex items-center gap-3 mr-8">
                    <Image src={SettingPic} width={22} className="ml-4" />
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className="text-2xl">Reband</h1>
                </div>
            </nav>
        </div>);
}

export default Mynav;