import { Link } from "react-router-dom";

const SideNav = () => {
    return (
        <>
            <aside>
                <div className="sidenav-wrap">
                    <Link to='/' className="sidenav-link">
                        <div>New</div>
                    </Link>
                    <Link to='/popular' className="sidenav-link">
                        <div>Popular</div>
                    </Link>
                    <Link to='/random' className="sidenav-link">
                        <div>Random</div>
                    </Link>
                </div>
            </aside>
        </>
    );
};

export default SideNav;