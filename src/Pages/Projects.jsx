import Details, { DetailsCard } from "../Components/Details";
import ParticalText from "../Components/ParticalText";
import View from "../Components/View";

export default function Projects(){
    return <div id="projects" className="w-full py-10 ">
        <View minWidth={600} >
            <ParticalText 
                text="My Work" 
                className="bg-blue-400 rounded-full h-[80px] w-[240px]" 
                fontSize="45px" 
                gap={0} 
            />
        </View>

        <div className="bg-blue-400 rounded-full py-2 px-5 text-3xl font-semibold w-fit sm:hidden">My Work</div>

        <div className=" mt-10 flex flex-col gap-10 cursor-default">
            {
                [
                    {
                        name: "Marble Wesite", 
                        about: "This e-commerce platform is a comprehensive solution for showcasing and selling marble products, designed with an elegant and user-friendly interface.",
                        imgUrl: '/Images/ex2403.png',
                        techStack: ['Nextjs', 'React', 'Tailwind CSS', 'React-icons', 'MongoDb', 'Mongoose'],
                        keyPoints: [
                            'Leveraged Partial Prerendering and After for faster loading.',
                            'Simplified idea submission with a clean, intuitive design.',
                        ],
                        url: 'https://ex2403.netlify.app'
                    },
                    {
                        name: "Notes With Bot", 
                        about: "An AI chatbot is an intelligent virtual assistant designed to enhance user interactions and help to make notes.",
                        imgUrl: '/Images/ex2404.png',
                        techStack: ['Nextjs', 'React', 'Tailwind CSS', 'React-icons', 'MongoDb', 'Mongoose', 'Gemini API'],
                        keyPoints: [
                            'Leveraged Partial Prerendering and After for faster loading.',
                            'Simplified idea submission with a clean, intuitive design.',
                        ],
                        url: 'https://ex2404.netlify.app'
                    },
                    {
                        name: "Attendance Tracker System", 
                        about: "It's make effortless trake and manage attendace for your organization with our use-friendly attendance management system.",
                        imgUrl: '/Images/ex2406.png',
                        techStack: ['Nextjs', 'React', 'Tailwind CSS', 'React-icons', 'MongoDb', 'Mongoose'],
                        keyPoints: [
                            'Leveraged Partial Prerendering and After for faster loading.',
                            'Simplified idea submission with a clean, intuitive design.',
                        ],
                        url: 'https://ex2406.netlify.app'
                    },
                ].map(({name, about, imgUrl, keyPoints, techStack}) => <ProjectCard name={name} about={about} imgUrl={imgUrl} keyPoints={keyPoints} techStack={techStack} key={name} />)
            }
        </div>

        <br /><br />

        <DetailsCard summary={'Mini Project'} className="flex flex-wrap gap-5 pt-10">
            {
                [
                    {name: 'XOX', url: 'https://github.com/Mustak24/XOX'}, 
                    {name: 'Number Game', url: 'https://github.com/Mustak24/Number-Box-Game'}, 
                    {name: 'Weather App', url: 'https://github.com/Mustak24/Weather'}, 
                    {name: 'Sanke Game', url: 'https://github.com/Mustak24/Snake-Game'}, 
                    {name: 'YT Add Skiper', url: 'https://github.com/Mustak24/YT-ADD-SKIPER'}, 
                    {name: 'Alaram Clock', url: ''}, 
                    {name: 'Bingoo Game', url: ''}, 
                    {name: 'Calculater', url: 'https://github.com/Mustak24/Calculator'}, 
                    {name: 'Clock', url: 'https://github.com/Mustak24/Clock'}, 
                    {name: 'Infix to Postfix Conveter', url: 'https://github.com/Mustak24/Infix-to-postfix'}, 
                    {name: 'KBC Game ( Python )', url: ''}, 
                    {name: 'Todo Notes', url: 'https://github.com/Mustak24/Tudo-Notes'}, 
                    {name: 'Number Guess Game', url: 'https://github.com/Mustak24/Number-Guess-Game'}, 
                    {name: 'Stone Paper Scisor Game', url: ''}, 
                    {name: 'Morden XOX Game', url: ''}, 
                    {name: 'Sand Simulation', url: 'https://github.com/Mustak24/Sand-Effect'}, 
                    {name: '2d Raycasting', url: ''}, 
                    {name: 'Game of Life', url: 'https://github.com/Mustak24/Game-of-Life'}
                ].map(({name, url}, i) => {
                    return <a target="_blank" href={url} key={i} className="h-8 px-2 text-sm font-semibold bg-zinc-700 hover:bg-zinc-800 transition-all duration-200 cursor-default rounded-md flex items-center border-1 border-[rgb(255,255,255,.5)]">{name}</a>
                })
            }
        </DetailsCard>
    </div>
}


function ProjectCard({imgUrl='', name='', about='', keyPoints=[], techStack=[]}){
    return <DetailsCard summary={name} className="bg-[rgb(25,25,25,.95)] hover:bg-zinc-900 duration-500">
        <div className="flex max-lg:flex-col items-center justify-center gap-10 lg:gap-20 max-sm:text-sm  sm:pt-10 p-4 rounded-xl">
            <div className="w-full lg:max-w-[600px] max-h-[420px] border-1 rounded-lg border-white relative overflow-hidden">
                <div className="absolute blur-lg w-full h-full translate-z-[1px]">
                    <img src={imgUrl} alt="404" loading="lazy" className="w-full h-full" />
                </div>

                <div className="p-5 w-full h-full translate-z-[10px]">
                    <img src={imgUrl} alt="404" loading="lazy" className="w-full h-full object-contain" />
                </div>
            </div>

            <div className="flex flex-wrap gap-5 lg:max-w-[450px]">
                <DetailsCard summary={'About it'} className="flex-1 basis-[280px]">
                    <p>{about}</p>
                </DetailsCard>
                <div className="bg-zinc-700 hover:bg-zinc-800 rounded-xl flex-1 p-5 basis-[280px]">
                    {[keyPoints].map((point, index) => {
                        return <div key={index}>{point}</div>
                    })}
                </div>
                <div className="flex flex-wrap gap-4">
                    {techStack.map((e, i) => {
                        return <div key={i} className="h-8 px-2 text-sm font-semibold bg-zinc-700 hover:bg-zinc-800 transition-all duration-200 cursor-default rounded-md flex items-center border-1 border-[rgb(255,255,255,.5)]">{e}</div>
                    })}
                </div>
            </div>
        </div>
    </DetailsCard>
}