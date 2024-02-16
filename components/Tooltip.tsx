import { TooltipProvider, TooltipTrigger, Tooltip as ShadCNTooltip, TooltipContent } from "./ui/tooltip";

interface TooltipProps {
    children: React.ReactNode;
    label: string;
}

const Tooltip = ({ children, label }: TooltipProps) => {
  return (
    <TooltipProvider>
        <ShadCNTooltip>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent>
                <p>{label}</p>
            </TooltipContent>
        </ShadCNTooltip>
    </TooltipProvider>
  )
}

export default Tooltip