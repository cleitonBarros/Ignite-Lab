import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps{
    
    children: ReactNode,
    asChild?: boolean,
}

export function Button({ children, asChild}: ButtonProps){
    const Comp = asChild ? Slot :'button'
    return(
        <Comp 
            className={clsx(
                'w-full py-4 px-3 rounded bg-cyan-500 hover:bg-cyan-300 font-semibold text-black text-sm transition-color focus:ring-2 ring-white', 
            )}
        >
            {children}
        </Comp>
    )
}