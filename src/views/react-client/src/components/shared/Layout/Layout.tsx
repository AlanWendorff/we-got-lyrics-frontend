const Layout = () => {
    if (window.location.pathname === '/') {
        return <div>HOME</div>;
    }

    return <>404</>;
};

export default Layout;
