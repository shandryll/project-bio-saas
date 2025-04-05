import { Github, Instagram, Linkedin, Twitter, Plus } from 'lucide-react'
import { Button } from '../ui/Button'

export function UserCard() {
  const icons = [
    Github, Instagram, Linkedin, Twitter, Plus
  ]

  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-10 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">

      <div className="size-48">
        <img src="/me.webp" alt="Shandryll Dev" className="rounded-full object-cover w-full h-full" />
      </div>

      <div className="flex flex-col gap-2 w-full items-center">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">Shandryll</h3>
        </div>
        <p className="opacity-40">
          Soluções inteligentes, <br />
          criadas para você.
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full items-center">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3 justify-between">
          {
            icons.map((Icon, index) => (
              <button key={index} className='p-3 rounded-xl bg-[#1E1E1E] hover:bg-[2H@H@H]'><Icon /></button>
            ))
          }
        </div>
      </div>

      {/* <div className="flex flex-col gap-3 w-full h-[172px]">
        <div className="w-full flex flex-col items-center gap-3">
          <Button className="w-full">Template SaaS - Compre Agora</Button>
          <button className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
            <Plus />
          </button>
        </div>
      </div> */}

    </div>
  )
}