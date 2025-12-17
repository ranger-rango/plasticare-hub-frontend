import { useEffect } from "react";
import AdminHeader from "./components/AdminHeader";
import { AuthProps, RbacRouter } from "components/RBAC";


const AdminPage = ( { allowedRoles } : AuthProps ) => {
    const redirectComponent =  RbacRouter({ allowedRoles });
    if (redirectComponent)
    {
        return redirectComponent;
    }
    
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <AdminHeader />
            <main className="pt-20">
                <h3>Welcome to the admin dashboard</h3>
            </main>
        </div>
    );
}

export default AdminPage;