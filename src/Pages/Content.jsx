import DetailedReport from "./DetailedReport";
import Header from "./Header";
import Overview from "./Overview";

function Content() {
    return (
        <>
            <div className="content">
                <Header/>
                <Overview/>
                <DetailedReport/>
            </div>
            
        </>

    )
}
export default Content;