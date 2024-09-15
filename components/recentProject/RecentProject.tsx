import {projects} from "@/data";
import {PinContainer} from "@/components/ui/3d-pin";
import {FaLocationArrow} from "react-icons/fa6";

const RecentProject = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading text-white">
                A small selection of {` `}
                <span className="text-purple"
                >
                    recent projects
                </span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-10 mt-10 flex-col">
                {projects.map(({title, des, id, img, iconLists, link},
                               i) => (
                    <div key={i}
                         className="text-white lg:min-h-[32.5rem] sm:h-[41rem]
                         h-[25rem] flex items-center justify-center  w-[80vw]
                         sm:w-[570px]"
                    >
                        <PinContainer
                            title={title}
                            href={link}>
                            <div
                                className="relative flex items-center justify-center  w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    <img
                                        className="object-cover object-center w-full h-full"
                                        src="/bg.png"
                                        alt="bg-img"
                                    />
                                </div>
                                <img src={img} alt={title} className="z-10 absolute bottom-0 h-full"/>
                            </div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {title}
                            </h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                {des}
                            </p>
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((item, i) => (
                                        <div
                                            key={i}
                                            className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10
                                            w-8 h-8 flex items-center justify-center mr-2 "
                                            style={{transform: `translateX(-${i * 2}px)`}}
                                        >
                                            <img
                                                src={item}
                                                alt={title}
                                                className="p-2"
                                            />
                                        </div>

                                    ))}
                                </div>
                                <div className="flex  justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                        Check Live Site
                                    </p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9"/>
                                </div>

                            </div>
                        </PinContainer>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProject