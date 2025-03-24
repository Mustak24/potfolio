import Button from "../Components/Buttton";
import Div from "../Components/Div";
import InputText from "../Components/Input";
import ParticalText from "../Components/ParticalText";
import View from "../Components/View";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


export default function Contact(){
    return <div id="contact" className="w-full flex flex-col items-center mb-10">
        <View minWidth={1024}>
            <div className="flex items-center justify-center relative font-bold group">
                <span className="h-full">
                    <ParticalText text="C" fontSize="150px" className="w-[120px] h-[250px]" pixelSize={4} />
                </span>
                <div className="group-hover:w-[400px] w-[150px] h-[150px] translate-y-[-20px] flex items-center justify-center flex-col text-2xl group-hover:text-lg gap-2 overflow-hidden text-black transition-all duration-200 relative bg-white rounded-full">
                    <div className="group-hover:opacity-100 transition-all flex items-center justify-center opacity-0 font-serif font-bold duration-300">
                        How Can I Help You ...
                    </div>
                    <div className="group-hover:opacity-100 transition-all flex items-center justify-center opacity-0 font-sans duration-300">
                        Mail : 786mkhan.coc786@gmail.com
                    </div>
                </div>
                <span className="">
                    <ParticalText text="NTACT" fontSize="150px" className="w-[500px]" pixelSize={4}/>
                </span>
            </div>
        </View>
        
        <div className="lg:hidden text-[15vw] font-bold text-center">
            CONTACT US
        </div>

        <form action="" className="flex flex-col items-center justify-center gap-5 bg-[rgb(25,25,25,.9)] p-10 rounded-xl max-w-[900px] w-full">
            <InputText label="Name" placeholder="Enter your Name" className="w-full"/>
            <InputText label="Email" placeholder="Enter your Email" className="w-full"/>
            <InputText label="Msg" placeholder="Enter your Msg" className="w-full"/>
            <Button title="Send" className="w-full border-2" />
        </form>

        <div className="flex items-center justify-center gap-5 my-10">
           {
                [
                    {icon: <FaGithub />, name: 'Github', link: ''},
                    {icon: <FaInstagram />, name: 'Instagram', link: ''},
                    {icon: <SiLeetcode />, name: 'Leetcode', link: ''},
                ].map(({name, icon, link}) => <Div key={name} title={name} className="size-10 aspect-square"><a href={link}>{icon}</a></Div>)
           }
        </div>

       

    </div>
}