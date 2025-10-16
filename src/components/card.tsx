"use client"

type CardData = {
  title: string
  icon: string
  desc: string
  buttonText: string
}

type CardProps = {
  data: CardData
}

export default function Card({ data: { title, icon, desc, buttonText } }: CardProps) {
  return (
    <div className="h-[68vh] w-[92vw] md:h-[64vh] md:w-[72vw] max-w-5xl bg-card flex flex-col justify-start rounded-xl backdrop-blur-sm overflow-hidden border-border border shadow-[0_10px_30px_rgba(10,29,55,0.1)]">
      <div className="flex justify-between items-center gap-4 p-6 md:p-8">
        <div className="part1 flex flex-col gap-4">
          <span aria-hidden="true">
            <i className={`i ri-${icon}-line text-primary text-4xl md:text-5xl`} />
          </span>
          <h1 className='font-serif text-primary tracking-wide text-xl md:text-3xl font-semibold'>{title}</h1>
        </div>
      </div>
      <div className="pt-2 px-4 md:px-8 pb-8">
        <p className="text-foreground/80 mt-2 text-sm md:text-base leading-relaxed">{desc}</p>
      </div>
      <div className="text-foreground flex justify-between items-center w-full pb-6 px-6 md:px-8">
        <button className="px-5 py-2 rounded-md bg-accent text-accent-foreground hover:opacity-90 transition-colors">
          {buttonText}
          <i className="ri-arrow-right-s-line text-accent-foreground text-lg" />
        </button>
      </div>
    </div>
  )
}