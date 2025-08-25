import { cn } from '@/lib/utils'

type ButtonVarient = 'pilled' | 'outline' | 'text' | 'icon'
type TextPosition = 'center' | 'left'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: ButtonVarient
  active?: boolean
  selected?: boolean
  disabled?: boolean
  textPosition?: TextPosition
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  active = false,
  selected = false,
  disabled = false,
  textPosition,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      aria-label="checkover"
      name="button"
      className={cn(
        `${
          textPosition === 'left'
            ? 'text-left'
            : 'flex items-center justify-center'
        }  text-black`,
        variant === 'pilled' && 'px-4 py-2 rounded-full',
        variant === 'outline' && 'px-2 py-1 rounded-md border border-neutral',
        variant === 'text' && 'px-2 py-1 rounded-md',
        variant === 'icon' && 'rounded-md mr-1',
        active && 'border border-primary',
        selected && '!bg-primary hover:!bg-primary text-white',
        disabled && 'text-opacity-20  cursor-not-allowed',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
