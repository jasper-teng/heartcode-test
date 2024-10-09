import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import QuizTemplate from "@/components/ui/quiztemplate"
import Turtle from "@/app/assets/turtle.png"


export default function AboutMe() {
  return (

  
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-18 gap-16 sm:p-20">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
      <Image
          src={Turtle}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        <b>THIS IS THE QUIZ PAGE.</b>

        < QuizTemplate qn="adslkjsadlkjaldskjsad" a1="asd" a2="adad" a3="asdasd" a4="zdsa" correct={2}/>

        < QuizTemplate qn="adslkjsadlkjaldskjsad" a1="asd" a2="adad" a3="asdasd" a4="zdsa" correct={2}/>
        < QuizTemplate qn="adslkjsadlkjaldskjsad" a1="asd" a2="adad" a3="asdasd" a4="zdsa" correct={2}/>
        < QuizTemplate qn="adslkjsadlkjaldskjsad" a1="asd" a2="adad" a3="asdasd" a4="zdsa" correct={2}/>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Link 1
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Link 2
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Link
        </a>
      </footer>
    </div>
  );
}
