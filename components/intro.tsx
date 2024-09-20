import Image from 'next/image'
import authorImage from '@/public/images/authors/Andranik.png'

export default function Intro() {
  return (
    <section className="relative flex items-start gap-x-10 pt-10">
      <div className="flex-1">
        <h1 className="title decoration-border/75 text-3xl font-bold no-underline">
          Hey I&#39;m Andranik
        </h1>
        <p className="my-3 font-light text-muted-foreground max-w-[500px]">
          I&#39;m a software engineer based in Yerevan. I&#39;m Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, deleniti!
        </p>
      </div>
      <div className="absolute top-0 right-0">
        <Image
          className="rounded-lg"
          src={authorImage}
          alt="Andranik Virabyan"
          width={135}
          height={135}
          priority
        />
      </div>
    </section>
  )
}