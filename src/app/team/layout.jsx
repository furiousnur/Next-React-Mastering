//SEO Metadata Fetch
export async function generateMetadata() {
    return {
        title: 'Team',
        keyword: 'Team, NextJS, React, TailwindCSS, SEO, Metadata',
    }
}

const Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;
