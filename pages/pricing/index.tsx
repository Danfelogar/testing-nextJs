import Link from 'next/link'

import { Mainlayout } from '../../components/layouts/Mainlayout'

export default function PricingPages() {
    return (
        <Mainlayout>
            <h1>Pricing Page</h1>
            <h1 className={'title'}>
                {/* Ir al <a href="/">Home</a> */}
                Ir al <Link href='/'>Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing {' '}
                <code className={'code'}>pages/pricing.jsx</code>
            </p>
        </Mainlayout>
    )
}
