import { cn } from '@/lib/utils'
import { GradientText } from '@/components/gradient-text'

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen snap-start snap-always flex-col items-center justify-center overflow-hidden p-24">
        <header
          className={cn(
            'relative z-[-1] flex flex-col',
            "before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 before:lg:h-[360px]",
            "after:absolute after:right-0 after:-z-20 after:h-[180px] after:w-[240px] after:-translate-y-8 after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"
          )}
        >
          <p>Welcome to</p>
          <h1 className="text-5xl font-medium sm:text-7xl">Adsly.Media</h1>
        </header>
      </div>

      <div className="container flex min-h-screen snap-center snap-always items-center justify-center">
        <p className="text-center text-2xl">
          Contact with us:{' '}
          <GradientText>
            <a href="mailto:office@adsly.media">office@adsly.media</a>
          </GradientText>
        </p>
      </div>

      <div className="container flex min-h-screen snap-center snap-always items-center justify-center">
        <p className="text-center text-2xl">
          And we will be happy to help you!
        </p>
      </div>
    </main>
  )
}
