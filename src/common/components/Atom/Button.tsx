import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/common/utils/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-md tracking-wide font-medium  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed  disabled:opacity-80 font-workSans ',
  {
    variants: {
      variant: {
        default:
          'bg-secondary text-white text-[16px] hover:bg-primary transition-colors duration-300',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-transparent hover:bg-secondary hover:text-white px-3 ',
        secondary:
          'bg-transparent text-primary  border-2 border-primary  hover:bg-primary hover:text-white  hover:border-transparent hover:transition-all duration-500',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        pilled: 'px-4 py-2 rounded-full bg-transparent ',
      },
      size: {
        default: 'px-6 py-4 leading-[16px]',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const Comp = 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
