import SvgComponent from "../../kleurencirkel";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../styles/DefaultLayout.module.css";

const DefaultLayout = ({ children }) => {
    const router = useRouter();
    const { path } = router.query;
    console.log("paths", path);

    const config = {
        index: path[2]
            ? path[2] == "together"
                ? 4
                : parseInt(path[2].replace(/[^0-9]/g, ""))
            : 0,
        chapter: parseInt(path[1].replace(/[^0-9]/g, "")),
        path: path,
    };

    // next url
    let url = "";
    if (path[1]) {
        // chapter in query
        if (path[2]) {
            // subchapter in query
            if (path[3]) {
                // les in query
                switch (path[3]) {
                    case "theory":
                        url = `/${path[0]}/${path[1]}/${path[2]}/practice`;
                        break;
                    case "practice":
                        url = `/${path[0]}/${path[1]}/${path[2]}/action`;
                        break;
                    case "action":
                        url = `/${path[0]}/${path[1]}/${path[2]}/exercise`;
                        break;
                    case "exercise":
                        let idx = parseInt(path[2].replace(/[^0-9]/g, ""));
                        url =
                            idx + 1 <= 3
                                ? `/${path[0]}/${path[1]}/subchapter_${
                                      idx + 1
                                  }/`
                                : `/${path[0]}/${path[1]}/together`;
                        break;
                }
            } else {
                // theory les
                if (path[2] == "together") {
                    let idx = parseInt(path[1].replace(/[^0-9]/g, ""));
                    url =
                        idx + 1 <= 5
                            ? `/${path[0]}/chapter_${idx + 1}/`
                            : `/volume_${
                                  parseInt(path[0].replace(/[^0-9]/g, "")) + 1
                              }`;
                } else {
                    url = `/${path[0]}/${path[1]}/${path[2]}/practice`;
                }
            }
        } else {
            // at chapter intro go to theory sub 1
            url = `/${path[0]}/${path[1]}/subchapter_1/`;
        }
    }

    let type = "blue";
    if (path[3]) {
        switch (path[3]) {
            case "theory":
                type = "blue";
                break;
            case "practice":
                type = "green";
                break;
            case "action":
                type = "yellow";
                break;
            case "exercise":
                type = "orange";
                break;
        }
    }

    const color = {
        Color: {
            blue: "#3F51B5",
            green: "#54BA54",
            yellow: "#E7EF37",
            orange: "#FF9400",
        }[type],
    };

    return (
        <section className="w-full h-full relative">
            <main className={styles.main}>
                <style jsx global>{`
                    main h1 {
                        color: ${color.Color};
                    }
                `}</style>
                {children}
            </main>

            <Link href={url}>
                <a className="continueContainer" id="nextChapterLink">
                    <p id="nextChapter">Continue</p>
                    <img
                        src="/icons/arrow-right.svg"
                        alt="arrow to next chapter"
                    />
                </a>
            </Link>
            <nav className="absolute right-0 top-1/2 -translate-y-1/2">
                <SvgComponent config={config} />
            </nav>
        </section>
    );
};

export default DefaultLayout;
