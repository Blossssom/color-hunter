import ColorCard from "../components/ColorCard";
import { useFetch } from "../Hooks/useFetch";

const Main = ({urlPath}) => {
    const data = useFetch(`http://localhost:3005${urlPath}`);
    return (
        <>
            <section className="main-container">
                <div className="main-contents__box">
                    {
                        data.map((v) => (
                                <ColorCard key={v.code} date={v.date} colors={v.code} likes={v.likes}/>
                        ))
                    }
                </div>
            </section>
        </>
    )
};

export default Main;