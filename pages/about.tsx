import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'

import { Mainlayout } from '../components/layouts/Mainlayout'

export default function AboutPages() {
    return (
        <>
            <h1>About Page</h1>
            <h1 className={'title'}>
                {/* Ir al <a href="/">Home</a> */}
                Ir al <Link href='/contact'>Contact</Link>
            </h1>

            <p className={'description'}>
                Get started by editing {' '}
                <code className={'code'}>pages/about.jsx</code>
            </p>
        </>
    )
}


AboutPages.getLayout = function getLayout( page: JSX.Element ) {
    return (
        <Mainlayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </Mainlayout>
    )
}
