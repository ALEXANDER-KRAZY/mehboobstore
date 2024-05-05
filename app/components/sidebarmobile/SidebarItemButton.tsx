interface SidebarItemButtonProps {
    label: string;
}

const SidebarItemButton: React.FC<SidebarItemButtonProps> = ({
    label
}) => {
  return (
    <button>
        {label}
    </button>
  )
}

export default SidebarItemButton
