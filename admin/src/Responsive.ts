import {css} from 'styled-components'
type PropTyes={
    [key:string]:number|string
}

export const Medium = (props:PropTyes)=>{
     return  css `
      @media screen and (max-width:1280px){
         ${props}
      }
     `
}

export const TabVertical = (props:PropTyes)=>{
    return  css `
     @media screen and (max-width:1199px){
        ${props}
     }
    `
}

export const Tablet = (props:PropTyes)=>{
    return  css `
     @media screen and (max-width:992px){
        ${props}
     }
    `
}

export const Andriod = (props:PropTyes)=>{
    return  css `
     @media screen and (max-width:767px){
        ${props}
     }
    `
}

export const Windows = (props:PropTyes)=>{
    return  css `
     @media screen and (max-width:450px){
        ${props}
     }
    `
}

export const Ios = (props:PropTyes)=>{
    return  css `
     @media screen and (max-width:340px){
        ${props}
     }
    `
}

export const LG = (props:PropTyes)=>{
    return  css `
     @media screen and (min-width:1600px){
        ${props}
     }
    `
}