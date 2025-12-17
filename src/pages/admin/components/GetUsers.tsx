import { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { AuthProps, getUserAuthToken, RbacRouter } from "components/RBAC";
import useFetchData from "components/UseFetchData";
import RenderTable from "components/RenderTable";
import Button from "components/ui/Button";
import { useFormSubmit } from "components/useFormSubmit";


const UsersPage = ( { allowedRoles } : AuthProps ) => {
    const redirectComponent =  RbacRouter({ allowedRoles });
    if (redirectComponent)
    {
        return redirectComponent;
    }

    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

    const endpoint = import.meta.env.VITE_GET_USERS_ENDPOINT;
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl.concat(endpoint);
    const authToken : string = getUserAuthToken();
    const { data, isLoading, error } = useFetchData(url, authToken);

    const markReadEndpoint : string = import.meta.env.VITE_DEACTIVATE_USER_ENDPOINT;
    const markReadBaseUrl : string = import.meta.env.VITE_BASE_URL;
    const [userId, setUserId] = useState<string>('');
    const markReadUrl : string = markReadBaseUrl.concat(markReadEndpoint).concat("/").concat(userId);
    const markReadMethod : string = "POST";
    const markReadMutation = useFormSubmit(markReadUrl, authToken, markReadMethod);
    const deactivateUser : any = async () => 
    {
        await markReadMutation.mutateAsync({});
    }

    const colHeaders : any[] = [
        {
            id : "email",
            columnName : "Email",
            hide : false,
            render : false
        },
        {
            id : "first_name",
            columnName : "FName",
            hide : false,
            render : false
        },
        {
            id : "middle_name",
            columnName : "MName",
            hide : false,
            render : false
        },
        {
            id : "surname",
            columnName : "Surname",
            hide : false,
            render : false
        },
        {
            id : "privilege",
            columnName : "Privilege",
            hide : false,
            render : false
        },
        {
            id : "user_status",
            columnName : "Status",
            hide : false,
            render : false
        },
        {
            id : "actions",
            columnName : "Actions",
            hide : false,
            render : (row : any) => 
            {
                const handleButtonClick = async (e: React.MouseEvent) => {
                    setUserId(row.user_id);
                    e.stopPropagation();
                    await deactivateUser();
                };
                return (              
                    <Button
                    type="submit"
                    variant="default"
                    size="xs"
                    className="flex-1 bg-primary hover:bg-primary/90 z-1000"
                    onClick={handleButtonClick}
                    >
                        Deactivate
                    </Button>
                );
            }
        }
    ]

    if (isLoading) return <p>Loading ...</p>
    if (error) return <p>Error: {error.message} </p>
    return (
        <div className="min-h-screen bg-background">
            <AdminHeader />
            <main className="pt-20 p-10">
                <div className="relative w-full max-h-[90vh] bg-background rounded-3xl shadow-brand-hover overflow-auto">
                    <div className="p-8">
                        { 
                            !data ? <p> No User Records Found.</p> : 
                            <RenderTable colHeaders={colHeaders} tableData={data} />
                        }
                    </div>
                </div>
            </main>
        </div>
    );
}

export default UsersPage;