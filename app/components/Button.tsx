"use client"

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  onClick
}) => {
  return (
    <button 
    onClick={onClick}
    disabled={disabled}
    className={`
    relative
    w-24
    transition
    hover:opacity-80
    rounded-lg
    disabled:opacity-70
    disabled:cursor-not-allowed
    ${outline ? 'bg-white' : 'bg-orange-500'}
    ${outline ? 'border-black' : 'border-orange-500'}
    ${outline ? 'text-black' : 'text-white'}
    ${small ? 'py-1' : 'py-3'}
    ${small ? 'text-sm' : 'text-md'}
    ${small ? 'font-light' : 'font-semibold'}
    ${small ? 'border-[1px]' : 'border-2'}
    `}>
      {label}
    </button>
  )
}

export default Button
