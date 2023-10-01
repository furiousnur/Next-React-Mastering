//SEO Metadata Fetch
export async function generateMetadata() {
    return {
        title: 'Testimonial',
        keyword: 'Testimonial, NextJS, React, TailwindCSS, SEO, Metadata',
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
