"use client"
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


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import { Cart } from "@/components/ui/toggle copy"


import {sql} from "@vercel/postgres"
import { NextApiResponse, NextApiRequest } from 'next';



import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"



export default function AboutMe() {
  
  const likes = 100;

  const { toast } = useToast()

  const formSchema = z.object({
    
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }).max(10, { message: "u stupid" }),

    q1: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }).max(10, { message: "u stupid" }),

    q2: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }).max(10, { message: "u stupid" }),

  })

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      q1: "",
      q2: ""
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    console.log("test")
    //probably fetch some api thing
    toast({
      title: "What the fuck",
      description: "What the fuck",
    })

  }

  return (


    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-18 gap-16 sm:p-20">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src={Turtle}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <b>THIS IS THE QUIZ PAGE.</b>


        <Form {...form}>
          <form onSubmit={form.handleSubmit((onSubmit))} className="space-y-8">
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Type in your name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="q1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>question 1</FormLabel>
                  <FormControl>
                    <Input placeholder="xx grams" {...field} />
                  </FormControl>
                  <FormDescription>
                    Answer in grams
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="q2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>question 2 </FormLabel>
                  <FormControl>
                    <Input placeholder="test 2" {...field} />
                  </FormControl>
                  <FormDescription>
                    lowercaps word answer
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
