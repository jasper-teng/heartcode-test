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




const QuizTemplate = ({ qn, a1, a2, a3, a4, correct }: { qn:string, a1: string, a2: string, a3: string, a4: string, correct: number }) => {

    var ansstate = 1
    var generalclass = "w-full p-5 mb-5"

    const [correctans, setCorrect] = React.useState("w-full p-5 mb-5");

    
    function submit(){
            var ans = "false";
            if(ansstate == correct){
                ans = "true";
            }
            setCorrect(correctans + " correct");
            const res = fetch("http://localhost:3000/api/create-quiz-ans?correct=" + ans).then(data =>{
                console.log(data)
            }
            )
        }
    
    function reset(){
        setCorrect("w-full p-5 mb-5")
    }

    function select(something){
        ansstate = something
    }

    return (

        <div>
            <Card className="px-20">
                <CardHeader>
                    <CardTitle>Question!</CardTitle>
                    <CardDescription>{qn}</CardDescription>
                </CardHeader>
                <CardContent>

                    <Button className={correct == 1 ? correctans : generalclass} onClick={()=>select(1)}>{a1}</Button>
                    <Button className={correct == 2 ? correctans : generalclass} onClick={()=>select(2)}>{a2}</Button>
                    <Button className={correct == 3 ? correctans : generalclass} onClick={()=>select(3)}>{a3}</Button>
                    <Button className={correct == 4 ? correctans : generalclass} onClick={()=>select(4)}>{a4}</Button>

                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={()=>reset()}>Reset</Button>
                    <Button onClick={() => submit() }>Submit</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default QuizTemplate