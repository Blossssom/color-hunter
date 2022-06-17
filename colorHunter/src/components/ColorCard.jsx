import { useRef, useState } from "react";


const ColorCard = ({date, colors, likes}) => {
    // const [hoverRef, isHover] = useHover();
    const colorArr = colors.match(/\w{6}/g);

    const handleHoverEvent = () => {
        
    };

    const hoverRef = useRef();
    console.log(hoverRef);

    return (
        <>
            <article className="color-card">
                <div className="color-card__box">
                    <div ref={hoverRef} className="color-card__item c1" style={{backgroundColor: `#${colorArr[0]}`}}>
                        <span className="color-card__hex hide">#{colorArr[0]}</span>
                    </div>
                    <div ref={hoverRef} className="color-card__item c2" style={{backgroundColor: `#${colorArr[1]}`}}>
                        <span className="color-card__hex hide">#{colorArr[1]}</span>
                    </div>
                    <div ref={hoverRef} className="color-card__item c3" style={{backgroundColor: `#${colorArr[2]}`}}>
                        <span className="color-card__hex hide">#{colorArr[2]}</span>
                    </div>
                    <div ref={hoverRef} className="color-card__item c4" style={{backgroundColor: `#${colorArr[3]}`}}>
                        <span className="color-card__hex hide">#{colorArr[3]}</span>
                    </div>
                </div>
                
                <div className="color-card__btnbox">
                    <button className="like-btn">{likes}</button>
                    <span className="color-card__date">{date}</span>
                </div>
            </article>
        </>
    );
};

export default ColorCard;