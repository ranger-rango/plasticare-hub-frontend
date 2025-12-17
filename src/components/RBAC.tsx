import { Navigate } from "react-router-dom"

export interface AuthProps
{
    allowedRoles : string[]
}

export function getUserAuthToken()
{
    const userDetails : any = JSON.parse(localStorage.getItem("userDetails") || "{}")
    return userDetails["auth_token"]
}

export function getUserRole()
{
    const userDetails : any = JSON.parse(localStorage.getItem("userDetails") || "{}")
    return userDetails["privilege"]
}

export function getUserId()
{
    const userDetails : any = JSON.parse(localStorage.getItem("userDetails") || "{}")
    return userDetails["user_id"]
}

export function RbacRouter({ allowedRoles } : AuthProps)
{
    const userRole : string = getUserRole()
    const hasAuth : Boolean = allowedRoles.includes(userRole)
    if (!hasAuth)
    {
        return <Navigate to="/" replace />
    }

    return null
}