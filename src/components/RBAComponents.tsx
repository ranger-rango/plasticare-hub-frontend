import { ReactNode } from "react"
import { getUserRole } from "./RBAC";

interface RbacProps
{
    allowedRoles : string[];
    reactElements : ReactNode;
}

export function RbacComponents( { allowedRoles, reactElements } : RbacProps )
{
    const userRole = getUserRole();
    const hasAuth = allowedRoles.includes(userRole);

    return (
        <>
            { hasAuth && reactElements }
        </>
    )
}