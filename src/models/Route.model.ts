import React, { ReactNode } from "react"
import { RouteProps } from "react-router-dom"

export type AuthRoles = "admin" | "user" | "editor"

export type RouteType = {
    path?: string,
    component?: React.FC,
    redirectTo?: string,
    roles?: AuthRoles[]
}
// component?: React.FC | undefined | RouteProps