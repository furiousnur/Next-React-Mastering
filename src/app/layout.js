import './globals.css'
import SiteNavBar from "@/components/SiteNavBar"; 
import NextTopLoader from "nextjs-toploader";
import SiteFooter from "@/components/SiteFooter";

//SEO Metadata Fetch
export async function generateMetadata() {
  return {
    title: 'Home',
    keyword: 'Home, NextJS, React, TailwindCSS, SEO, Metadata', 
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#269669" height={3} speed={200}/>
        <SiteNavBar />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
