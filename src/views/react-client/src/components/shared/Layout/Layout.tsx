import Root from '@/components/pages/Root';

const Layout = () => {
    if (window.location.pathname === '/') {
        return <Root />;
    }

    return <>404</>;
};

export default Layout;
