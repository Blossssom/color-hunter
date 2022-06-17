import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [search, setSearch] = useState('');

    const searchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <header>
            <div className="header-wrap">
                <div className="title">
                    <h1>Color Hunter</h1>
                </div>
                <article className="header-input__article">
                    <div className="header-input__wrap">
                        <input
                            className="header-input" 
                            type="text" 
                            placeholder="Search paletts"    
                            value={search}
                            onChange={searchChange}
                        />
                    </div>
                </article>
                <Link to='/create' className="header-add__btn">
                    Add Color
                </Link>
            </div>
        </header>
    );
};

export default Header;