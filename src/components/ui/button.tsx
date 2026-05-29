import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "./src/components/ui:group/button ./src/components/ui:inline-flex ./src/components/ui:shrink-0 ./src/components/ui:items-center ./src/components/ui:justify-center ./src/components/ui:rounded-4xl ./src/components/ui:border ./src/components/ui:border-transparent ./src/components/ui:bg-clip-padding ./src/components/ui:text-sm ./src/components/ui:font-medium ./src/components/ui:whitespace-nowrap ./src/components/ui:transition-all ./src/components/ui:outline-none ./src/components/ui:select-none ./src/components/ui:focus-visible:border-ring ./src/components/ui:focus-visible:ring-3 ./src/components/ui:focus-visible:ring-ring/30 ./src/components/ui:active:not-aria-[haspopup]:translate-y-px ./src/components/ui:disabled:pointer-events-none ./src/components/ui:disabled:opacity-50 ./src/components/ui:aria-invalid:border-destructive ./src/components/ui:aria-invalid:ring-3 ./src/components/ui:aria-invalid:ring-destructive/20 ./src/components/ui:dark:aria-invalid:border-destructive/50 ./src/components/ui:dark:aria-invalid:ring-destructive/40 ./src/components/ui:[&_svg]:pointer-events-none ./src/components/ui:[&_svg]:shrink-0 ./src/components/ui:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "./src/components/ui:bg-primary ./src/components/ui:text-primary-foreground ./src/components/ui:hover:bg-primary/80",
        outline:
          "./src/components/ui:border-border ./src/components/ui:bg-background ./src/components/ui:hover:bg-muted ./src/components/ui:hover:text-foreground ./src/components/ui:aria-expanded:bg-muted ./src/components/ui:aria-expanded:text-foreground ./src/components/ui:dark:bg-transparent ./src/components/ui:dark:hover:bg-input/30",
        secondary:
          "./src/components/ui:bg-secondary ./src/components/ui:text-secondary-foreground ./src/components/ui:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] ./src/components/ui:aria-expanded:bg-secondary ./src/components/ui:aria-expanded:text-secondary-foreground",
        ghost:
          "./src/components/ui:hover:bg-muted ./src/components/ui:hover:text-foreground ./src/components/ui:aria-expanded:bg-muted ./src/components/ui:aria-expanded:text-foreground ./src/components/ui:dark:hover:bg-muted/50",
        destructive:
          "./src/components/ui:bg-destructive/10 ./src/components/ui:text-destructive ./src/components/ui:hover:bg-destructive/20 ./src/components/ui:focus-visible:border-destructive/40 ./src/components/ui:focus-visible:ring-destructive/20 ./src/components/ui:dark:bg-destructive/20 ./src/components/ui:dark:hover:bg-destructive/30 ./src/components/ui:dark:focus-visible:ring-destructive/40",
        link: "./src/components/ui:text-primary ./src/components/ui:underline-offset-4 ./src/components/ui:hover:underline",
      },
      size: {
        default:
          "./src/components/ui:h-9 ./src/components/ui:gap-1.5 ./src/components/ui:px-3 ./src/components/ui:has-data-[icon=inline-end]:pr-2.5 ./src/components/ui:has-data-[icon=inline-start]:pl-2.5",
        xs: "./src/components/ui:h-6 ./src/components/ui:gap-1 ./src/components/ui:px-2.5 ./src/components/ui:text-xs ./src/components/ui:has-data-[icon=inline-end]:pr-2 ./src/components/ui:has-data-[icon=inline-start]:pl-2 ./src/components/ui:[&_svg:not([class*=size-])]:size-3",
        sm: "./src/components/ui:h-8 ./src/components/ui:gap-1 ./src/components/ui:px-3 ./src/components/ui:has-data-[icon=inline-end]:pr-2 ./src/components/ui:has-data-[icon=inline-start]:pl-2",
        lg: "./src/components/ui:h-10 ./src/components/ui:gap-1.5 ./src/components/ui:px-4 ./src/components/ui:has-data-[icon=inline-end]:pr-3 ./src/components/ui:has-data-[icon=inline-start]:pl-3",
        icon: "./src/components/ui:size-9",
        "icon-xs": "./src/components/ui:size-6 ./src/components/ui:[&_svg:not([class*=size-])]:size-3",
        "icon-sm": "./src/components/ui:size-8",
        "icon-lg": "./src/components/ui:size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
