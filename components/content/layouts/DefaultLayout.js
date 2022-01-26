import SvgComponent from "../../kleurencirkel";
import { useRouter } from "next/router";

const DefaultLayout = ({ children }) => {
    const router = useRouter();

    const { path } = router.query;
    // console.log("paths", path);
    const config = {
        index:
            path[2] == "together"
                ? 4
                : parseInt(path[2].replace(/[^0-9]/g, "")),
        chapter: parseInt(path[1].replace(/[^0-9]/g, "")),
        path: path,
    };
    // console.log("config", config);

    // router.query[3] ? {
    //     theory: "1",
    //     practice: "bg-green",
    //     action: "bg-yellow",
    //     exercise: "bg-orange",
    // }[router.query[3]] : 0

    return (
        <section className="w-full h-full relative">
            <main>{children}</main>
            <a className="continueContainer" id="nextChapterLink" href="#">
                <p id="nextChapter">Continue</p>
                <img src="/icons/arrow-right.svg" alt="arrow to next chapter" />
            </a>
            <nav className="absolute right-0 top-1/2 -translate-y-1/2">
                <SvgComponent config={config} />
            </nav>
        </section>
    );
};

export default DefaultLayout;
