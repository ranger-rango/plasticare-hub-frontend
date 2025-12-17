import useMutateData from "./UseMutateData";

interface ApiResponse {
    success: boolean;
    message: string;
}

export function useFormSubmit(url : string, authToken : string, method : any)
{
    const mutation = useMutateData<ApiResponse>(url, authToken, method);
    return mutation;
}