import { GithubProfile } from '@/components/github-profile'
import { LongWaitComponent } from '@/components/long-wait'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <div>
      <h1>Home!</h1>
      <p>lorem Ipsum Dolor Sit Amet</p>
      <Suspense fallback={<p>Teste</p>}>
        <LongWaitComponent />
      </Suspense>
      <Suspense fallback={<p>Teste</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
