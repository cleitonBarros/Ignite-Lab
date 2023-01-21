import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextInputProps{  
    children: ReactNode,
}

export function TextInput({}: TextInputProps){
   
    return(
        <input 
            className={clsx(
               'w-full py-4 px-3 rounded bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400', 
            )}
        />  
    )
}