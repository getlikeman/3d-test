import {create} from 'zustand'

export const useColorStore = create((set) => ({
    currentColor:  location.hash ? location.hash : '#ed1b0c' ,
    colors: ['#ed1b0c', '#0cc0ed', '#ed0cde', '#22ed0c', '#fff700', '#4c00ff'],
    changeColor: (color) => set(()=> ({currentColor: color})),
}))

