import Hero from "@/components/hero/Hero";
import {FloatingNav} from "@/components/ui/FloatingNavBar";
import RecentProject from "@/components/recentProject/RecentProject";
import {navItems} from "@/data";
import Footer from "@/components/footer/Footer";

export default function Home() {
    return (
        <main
            className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
        >
            <div className="max-w-7xl w-full">
                <FloatingNav
                    navItems={navItems}
                />
                <Hero/>
                <RecentProject/>
                <Footer/>
            </div>
        </main>
    );
}
