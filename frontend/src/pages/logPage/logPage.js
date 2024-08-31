import VideoLogComponent from "../../components/logs/videoLog/videoLog";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function LogPage() {
    return (
        <div>
            <Navbar />
            <VideoLogComponent />
            <Footer />
        </div>
    )
}