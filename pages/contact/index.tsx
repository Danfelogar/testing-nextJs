import Link from 'next/link'
import { Mainlayout } from '../../components/layouts/Mainlayout'

export default function ContactPages() {
    return (
        <Mainlayout>
            <h1>Contact Page</h1>
            <h1 className={'title'}>
                {/* Ir al <a href="/">Home</a> */}
                Ir al <Link href='/pricing'>Pricing</Link>
            </h1>

            <p className={'description'}>
                Get started by editing {' '}
                <code className={'code'}>pages/contact.jsx</code>
            </p>
        </Mainlayout>
    )
}
