
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { ReactChild, ReactFragment, ReactPortal } from 'react'

export default function AboutPage() {
  return (
      <>
        <h1>About Page</h1>
        <h1 className="title">
          Ir a <Link href="/"> Home </Link>
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="description">pages/about.js</code>
        </p>      
      </>
  )
}


AboutPage.getLAyout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}