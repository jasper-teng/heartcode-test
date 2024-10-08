"use client"

import * as React from "react"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRef, useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"




const QuizTemplate = ({ a1, a2, a3, a4, correct }: { a1: string, a2: string, a3: string, a4: string, correct: number }) => {

    var qnstate = ""
    var generalclass = "w-full p-5 mb-5"

    const [correctans, setCorrect] = React.useState("w-full p-5 mb-5");

    
    function submit(){
            setCorrect(correctans + " correct")
        }
    
    function reset(){
        setCorrect("w-full p-5 mb-5")
    }

    return (

        <div className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle>Question!</CardTitle>
                    <CardDescription>lorem ipsum sample text bla bla bla bla bla bla bla.</CardDescription>
                </CardHeader>
                <CardContent>

                    <Button className={correct == 1 ? correctans : generalclass}>{a1}</Button>
                    <Button className={correct == 2 ? correctans : generalclass}>{a2}</Button>
                    <Button className={correct == 3 ? correctans : generalclass}>{a3}</Button>
                    <Button className={correct == 4 ? correctans : generalclass}>{a4}</Button>

                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={()=>reset()}>Reset</Button>
                    <Button onClick={() => submit() }>Submit</Button>
                </CardFooter>
            </Card>

            <a>{a1}</a>
            <p></p>
            <a>{a2}</a>
            <p></p>
            <a>{a3}</a>
            <p></p>
            <a>{a4}</a>
            <p></p>
        </div>
    )
}

export default QuizTemplate