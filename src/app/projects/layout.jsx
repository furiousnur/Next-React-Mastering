//SEO Metadata Fetch
export async function generateMetadata() {
    return {
        title: 'Projects',
        keyword: 'Project, NextJS, React, TailwindCSS, SEO, Metadata',
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
