import { useQuery } from "@tanstack/react-query";
import { UserDataResponse, UserData } from "../api/terminalSchemas";
import apiClient from "../api/apiClient";

async function getUserData(): Promise<UserData> {
    const response = await apiClient.get<UserDataResponse>(
        "http://localhost:5006/api/v1/identity/account/info",
        { withCredentials: true },
    );

    return {
        email: response.data.email,
        roles: response.data.roles,
    };
}

function useUserData() {
    return useQuery({
        queryKey: ["user"],
        staleTime: Infinity,
        queryFn: getUserData,
    });
}

export default useUserData;
