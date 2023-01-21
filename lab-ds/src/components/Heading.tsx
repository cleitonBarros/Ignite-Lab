import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface HeadingProps{
    size?: 'sm' | 'md' | 'lg',
    children: ReactNode,
    asChild?: boolean,
}

export function Heading({size = 'md', children, asChild}: HeadingProps){
    const Comp = asChild ? Slot :'h2'
    return(
        <Comp 
            className={clsx(
                'font-sans font-bold text-gray-100',
                {
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg',
                }  
            )}
        >
            {children}
        </Comp>
    )
}