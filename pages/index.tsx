
import Link from 'next/link'

import { Mainlayout } from '../components/layouts/Mainlayout'

export default function HomePages() {
  return (
    <Mainlayout>
      <h1>Home Page</h1>
      <h1 className={'title'}>
        {/* Ir al <a href="/about">About!</a> */}
        Ir al <Link href='/about'>About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing {' '}
        <code className={'code'}>pages/index.jsx</code>
      </p>
    </Mainlayout>
  )
}
