"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"
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
import Script from 'next/script'
import { useState, useEffect } from 'react';

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import QuizTemplate from "@/components/ui/quiztemplate"
import Turtle from "@/app/assets/turtle.png"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";


export default function AboutMe() {

  
  const [data, setData] = useState([0,1]);
  
  const [text, setText] = useState("penis")

  useEffect(() => {
    const res = fetch("http://localhost:3000/api/get-quiz").then(res => {
      return res.json();
    }).then(data => {
      console.log(data.ans.rows)
      var correct = 0
      var wrong = 0
      for(var i=0;i<data.ans.rows.length;i++){
        data.ans.rows[i].quiz == true ? correct++ : wrong++
      }
      console.log(correct,wrong)
      setData([correct,wrong])
      setText("fuck bro")
    })
  })

  const description = "A pie chart with no separator"
  var chartData = [
    { browser: "Correct", visitors: data[0], fill: "rgb(0,200,255)" },
    { browser: "Wrong", visitors: data[1], fill: "rgb(255,0,0)" },
  ]
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig




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

        <b>{text}</b>

        <Card className="flex flex-col">
          <CardHeader className="items-center pb-0">
            <CardTitle>Quiz Answer Stats</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="visitors"
                  nameKey="browser"
                  stroke="0"
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

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
