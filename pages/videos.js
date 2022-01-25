import Head from "next/head";
import VideoComponent from "../components/content/VideoComponent";
import Les from "../components/layouts/Les";

const videosPage = () => {
    return (
        <Les type="mixed">
            <VideoComponent videos={["/Contour2.mp4", "/Contour1.mp4"]} />
        </Les>
    );
};

export default videosPage;
