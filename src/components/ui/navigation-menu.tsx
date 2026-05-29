import * as React from "react"
import { cva } from "class-variance-authority"
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "./src/components/ui:group/navigation-menu ./src/components/ui:relative ./src/components/ui:flex ./src/components/ui:max-w-max ./src/components/ui:flex-1 ./src/components/ui:items-center ./src/components/ui:justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "./src/components/ui:group ./src/components/ui:flex ./src/components/ui:flex-1 ./src/components/ui:list-none ./src/components/ui:items-center ./src/components/ui:justify-center ./src/components/ui:gap-0",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("./src/components/ui:relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center gap-1.5 rounded-3xl px-4 py-2 text-sm font-medium leading-none transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "./src/components/ui:group", className)}
      {...props}
    >
      {children}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="relative top-px h-3.5 w-3.5 shrink-0 transition duration-300 group-data-popup-open/navigation-menu-trigger:rotate-180 group-data-open/navigation-menu-trigger:rotate-180"
        aria-hidden="true"
      >
        <path
          d="m5 7.5 5 5 5-5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "./src/components/ui:top-0 ./src/components/ui:left-0 ./src/components/ui:w-full ./src/components/ui:p-2.5 ./src/components/ui:pr-3 ./src/components/ui:ease-[cubic-bezier(0.22,1,0.36,1)] ./src/components/ui:group-data-[viewport=false]/navigation-menu:top-full ./src/components/ui:group-data-[viewport=false]/navigation-menu:mt-1.5 ./src/components/ui:group-data-[viewport=false]/navigation-menu:overflow-hidden ./src/components/ui:group-data-[viewport=false]/navigation-menu:rounded-3xl ./src/components/ui:group-data-[viewport=false]/navigation-menu:bg-popover ./src/components/ui:group-data-[viewport=false]/navigation-menu:text-popover-foreground ./src/components/ui:group-data-[viewport=false]/navigation-menu:shadow-lg ./src/components/ui:group-data-[viewport=false]/navigation-menu:ring-1 ./src/components/ui:group-data-[viewport=false]/navigation-menu:ring-foreground/5 ./src/components/ui:group-data-[viewport=false]/navigation-menu:duration-300 ./src/components/ui:data-[motion=from-end]:slide-in-from-right-52 ./src/components/ui:data-[motion=from-start]:slide-in-from-left-52 ./src/components/ui:data-[motion=to-end]:slide-out-to-right-52 ./src/components/ui:data-[motion=to-start]:slide-out-to-left-52 ./src/components/ui:data-[motion^=from-]:animate-in ./src/components/ui:data-[motion^=from-]:fade-in ./src/components/ui:data-[motion^=to-]:animate-out ./src/components/ui:data-[motion^=to-]:fade-out ./src/components/ui:**:data-[slot=navigation-menu-link]:focus:ring-0 ./src/components/ui:**:data-[slot=navigation-menu-link]:focus:outline-none ./src/components/ui:md:absolute ./src/components/ui:md:w-auto ./src/components/ui:group-data-[viewport=false]/navigation-menu:dark:ring-foreground/10 ./src/components/ui:group-data-[viewport=false]/navigation-menu:data-open:animate-in ./src/components/ui:group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 ./src/components/ui:group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 ./src/components/ui:group-data-[viewport=false]/navigation-menu:data-closed:animate-out ./src/components/ui:group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 ./src/components/ui:group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "./src/components/ui:absolute ./src/components/ui:top-full ./src/components/ui:left-0 ./src/components/ui:isolate ./src/components/ui:z-50 ./src/components/ui:flex ./src/components/ui:justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "./src/components/ui:origin-top-center ./src/components/ui:relative ./src/components/ui:mt-1.5 ./src/components/ui:h-(--radix-navigation-menu-viewport-height) ./src/components/ui:w-full ./src/components/ui:overflow-hidden ./src/components/ui:rounded-3xl ./src/components/ui:bg-popover ./src/components/ui:text-popover-foreground ./src/components/ui:shadow-lg ./src/components/ui:ring-1 ./src/components/ui:ring-foreground/5 ./src/components/ui:duration-100 ./src/components/ui:md:w-(--radix-navigation-menu-viewport-width) ./src/components/ui:dark:ring-foreground/10 ./src/components/ui:data-open:animate-in ./src/components/ui:data-open:zoom-in-90 ./src/components/ui:data-closed:animate-out ./src/components/ui:data-closed:zoom-out-90",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "./src/components/ui:flex ./src/components/ui:items-center ./src/components/ui:gap-1.5 ./src/components/ui:rounded-3xl ./src/components/ui:p-3 ./src/components/ui:text-sm ./src/components/ui:transition-all ./src/components/ui:outline-none ./src/components/ui:hover:bg-muted ./src/components/ui:focus:bg-muted ./src/components/ui:focus-visible:ring-3 ./src/components/ui:focus-visible:ring-ring/30 ./src/components/ui:focus-visible:outline-1 ./src/components/ui:in-data-[slot=navigation-menu-content]:rounded-2xl ./src/components/ui:data-[active=true]:bg-muted/50 ./src/components/ui:data-[active=true]:hover:bg-muted ./src/components/ui:data-[active=true]:focus:bg-muted ./src/components/ui:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "./src/components/ui:top-full ./src/components/ui:z-1 ./src/components/ui:flex ./src/components/ui:h-1.5 ./src/components/ui:items-end ./src/components/ui:justify-center ./src/components/ui:overflow-hidden ./src/components/ui:data-[state=hidden]:animate-out ./src/components/ui:data-[state=hidden]:fade-out ./src/components/ui:data-[state=visible]:animate-in ./src/components/ui:data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="./src/components/ui:relative ./src/components/ui:top-[60%] ./src/components/ui:h-2 ./src/components/ui:w-2 ./src/components/ui:rotate-45 ./src/components/ui:rounded-tl-sm ./src/components/ui:bg-border ./src/components/ui:shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
