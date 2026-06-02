import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Toggle as TogglePrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "./src/components/ui:group/toggle ./src/components/ui:inline-flex ./src/components/ui:items-center ./src/components/ui:justify-center ./src/components/ui:gap-1 ./src/components/ui:rounded-3xl ./src/components/ui:text-sm ./src/components/ui:font-medium ./src/components/ui:whitespace-nowrap ./src/components/ui:transition-colors ./src/components/ui:outline-none ./src/components/ui:hover:bg-muted ./src/components/ui:hover:text-foreground ./src/components/ui:focus-visible:border-ring ./src/components/ui:focus-visible:ring-[3px] ./src/components/ui:focus-visible:ring-ring/30 ./src/components/ui:disabled:pointer-events-none ./src/components/ui:disabled:opacity-50 ./src/components/ui:aria-invalid:border-destructive ./src/components/ui:aria-invalid:ring-destructive/20 ./src/components/ui:aria-pressed:bg-muted ./src/components/ui:dark:aria-invalid:ring-destructive/40 ./src/components/ui:[&_svg]:pointer-events-none ./src/components/ui:[&_svg]:shrink-0 ./src/components/ui:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "./src/components/ui:bg-transparent",
        outline: "./src/components/ui:border ./src/components/ui:border-input ./src/components/ui:bg-transparent ./src/components/ui:hover:bg-muted",
      },
      size: {
        default:
          "./src/components/ui:h-9 ./src/components/ui:min-w-9 ./src/components/ui:px-3 ./src/components/ui:has-data-[icon=inline-end]:pr-2.5 ./src/components/ui:has-data-[icon=inline-start]:pl-2.5",
        sm: "./src/components/ui:h-8 ./src/components/ui:min-w-8 ./src/components/ui:px-3 ./src/components/ui:has-data-[icon=inline-end]:pr-2 ./src/components/ui:has-data-[icon=inline-start]:pl-2",
        lg: "./src/components/ui:h-10 ./src/components/ui:min-w-10 ./src/components/ui:px-4 ./src/components/ui:has-data-[icon=inline-end]:pr-3 ./src/components/ui:has-data-[icon=inline-start]:pl-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle }
