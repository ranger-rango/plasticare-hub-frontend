import { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { AuthProps, getUserAuthToken, RbacRouter } from "components/RBAC";
import useFetchData from "components/UseFetchData";
import RenderTable from "components/RenderTable";
import MessageModal from "components/MessageModal";
import Button from "components/ui/Button";
import { useFormSubmit } from "components/useFormSubmit";

const ToursPage = ( { allowedRoles } : AuthProps ) => {
    const redirectComponent =  RbacRouter({ allowedRoles });
    if (redirectComponent)
    {
        return redirectComponent;
    }

    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

    const [modalMessaage, setModalMessage] = useState<string>('');
    const [showMessageModal, setShowMessageModal] = useState(false);

    const endpoint = import.meta.env.VITE_GET_TOURS_ENDPOINT;
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl.concat(endpoint);
    const authToken : string = getUserAuthToken();
    const { data, isLoading, error } = useFetchData(url, authToken);

    const rowClick : any = (rowData : any) => 
    {
        if (rowData.message)
        {
            setModalMessage(rowData.message);
            setShowMessageModal(true);
        }
    }

    const markReadEndpoint : string = import.meta.env.VITE_UPDATE_TOUR_ENDPOINT;
    const markReadBaseUrl : string = import.meta.env.VITE_BASE_URL;
    const [tourId, setTourId] = useState<string>('');
    const markReadUrl : string = markReadBaseUrl.concat(markReadEndpoint).concat("/").concat(tourId);
    const markReadMethod : string = "POST";
    console.log(markReadUrl)
    const markReadMutation = useFormSubmit(markReadUrl, authToken, markReadMethod);
    const messageRead : any = async () => 
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
            id : "phone",
            columnName : "Phone",
            hide : false,
            render : false
        },
        {
            id : "full_name",
            columnName : "FullName",
            hide : false,
            render : false
        },
        {
            id : "preferred_date",
            columnName : "Date",
            hide : false,
            render : false
        },
        {
            id : "preferred_time",
            columnName : "Time",
            hide : false,
            render : false
        },
        {
            id : "message",
            columnName : "Message",
            hide : false,
            render : (msg : string) => 
            {
                return msg ? msg.slice(0, 30) + " ..." : " _ ";
            }
        },
        {
            id : "actions",
            columnName : "Actions",
            hide : false,
            render : (row : any) => 
            {
                const handleButtonClick = async (e: React.MouseEvent) => {
                    setTourId(row.tour_id);
                    e.stopPropagation();
                    await messageRead();
                };
                return (              
                    <Button
                    type="submit"
                    variant="default"
                    size="xs"
                    className="flex-1 bg-primary hover:bg-primary/90 z-1000"
                    onClick={handleButtonClick}
                    >
                        Read
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
                            !data ? <p> No Tour Records Found.</p> : 
                            <RenderTable colHeaders={colHeaders} tableData={data} onRowClick={rowClick} />
                        }
                    </div>
                </div>
                { 
                    showMessageModal && 
                    <MessageModal 
                        onClose={ () => { setShowMessageModal(false) } }
                        rowMessage={modalMessaage}
                    />
                }
            </main>
        </div>
    );
}

export default ToursPage;