import { ProjectCard } from "../commons/ProjectCard"
import { TotalVisits } from "../commons/TotalVisits"
import { UserCard } from "../commons/UserCard"
import { Button } from "../ui/Button"
import { TextInput } from "../ui/TextInput"

export function Hero() {
    return (
        <div className="flex h-screen">
            <div className="w-full flex flex-col gap-2 mt-[35vh]">
                <h1 className="text-5xl font-bold text-white leading-[64px]">
                    Suas redes sociais e <br />
                    projetos em um único link.
                </h1>
                <h2 className="text-xl leading-6">Crie sua própria página de projetos e compartilhe com o mundo.
                    <br />
                    Acompanhe o engajamento com Analytics de cliques e visualizações, e tenha acesso a um portfólio completo de seus projetos.
                </h2>
                <div className="flex items-center gap-2 w-full mt-[10vh]">
                    <span className="text-white text-xl">projectinbio.com/</span>
                    <TextInput placeholder="Seu link" />
                    <Button>Criar agora!</Button>
                </div>
            </div>

            <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
                <div className="relative">
                    <UserCard />
                    <div className="absolute -bottom-[20%] -right-[45%]">
                        <TotalVisits />
                    </div>
                    <div className="absolute -top-[10%] -left-[55%] -z-10">
                        <ProjectCard srcImg={'magic-cards.png'} srcName="Magic The Gathering" srcDescription="Create decks and share with your friends" srcClicks="276" />
                    </div>
                    <div className="absolute top-[20%] -left-[45%] -z-10">
                        <ProjectCard srcImg={'statistics.png'} srcName="Office Statistics" srcDescription="Analysis of all office statistics" srcClicks="529" />
                    </div>
                </div>
            </div>
        </div>
    )
}