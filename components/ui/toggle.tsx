import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


export function Toggle() {
    var light = false
    const { setTheme } = useTheme()

    function themehandler(){
        if(light == false){
            light = true;
            setTheme("light")
        }
        else{
            light = false
            setTheme("dark")
        }
    }

    return(

        <a onClick={() => themehandler() }> Toggle Theme </a>
    )
  }