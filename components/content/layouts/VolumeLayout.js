import { useRouter } from "next/router";
import Link from "next/link";

const VolumeLayout = ({ children }) => {
    const router = useRouter();
    const { path } = router.query;

    return (
        <section>
            <main>{children}</main>
            <Link href={`/${path[0]}/chapter_1`}>
                <a className="continueContainer" id="nextChapterLink">
                    <p id="nextChapter">Continue</p>
                    <img
                        src="/icons/arrow-right.svg"
                        alt="arrow to next chapter"
                    />
                </a>
            </Link>
        </section>
    );
};

export default VolumeLayout;
