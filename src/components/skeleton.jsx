import * as React from "react"
// NOTE: Adjust the import path if needed
import { cn } from "./utils"

function Skeleton({ className, ...props }) {
    return (
        <div
            data-slot="skeleton"
            className={cn("bg-accent animate-pulse rounded-md", className)}
            {...props}
        />
    )
}

export { Skeleton }