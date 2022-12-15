
import Head from 'next/head';

export default function Seo({title}){
    const currentTitle = `${title} | SYSURBAN`;
    return (
        <Head>
            <title>{currentTitle}</title>
            <meta name="description" content="sysurban homepage" />
            <link rel="icon" href="/favicon/favicon.ico" />
        </Head>
    )
}