const Create = () => {

    return (
        <>
        <section className="create-container">
            <div>
                <h2>New Color Palette</h2>
                <p>create a new palette and contribute to Color Hunt's collection</p>
            </div>
            <article className="color-card create-card">
                <div className="color-card__box create-card-box">
                    <div className="color-card__item c1 create1"></div>
                    <div className="color-card__item c2 create2"></div>
                    <div className="color-card__item c3 create3"></div>
                    <div className="color-card__item c4 create4"></div>
                </div>
            </article>
            <button className="create-btn">
                Add
            </button>
        </section>
        </>
    );
};

export default Create;