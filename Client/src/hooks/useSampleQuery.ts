import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {SampleDetailsDto, SampleDto} from "@api/terminalSchemas.ts";
import apiClient from "@api/apiClient.ts";

export type SamplesRequest = {
    pageNumber: number;
    pageSize: number;
    orderBy?: string;
    desc?: boolean;
}

export type SamplesResponse = {
    rows: SampleDto[];
    pageAmount: number;
    rowsAmount: number; // All rows (samples)
}

async function fetchDataSamples(params: SamplesRequest): Promise<SamplesResponse> {
    const resultSamples = await apiClient.get(`/samples`, {params})
    const resultAmountOfSamples = await apiClient.get(`/samples/amount`);

    console.log(resultSamples.data)
    return {
        rows: resultSamples.data.samples,
        pageAmount: Math.ceil(resultAmountOfSamples.data / params.pageSize),
        rowsAmount: resultAmountOfSamples.data,
    };
}

export function useSamples(params: SamplesRequest) {
    return useQuery({
        queryKey: ["samples", params],
        queryFn: () => fetchDataSamples(params),
        placeholderData: keepPreviousData,
    });
}

async function fetchDataSampleDetails(id: string | undefined): Promise<SampleDetailsDto>{
    if (id === undefined) return { id: "",
        code: "",
        createdAtUtc: new Date(),
        comment: "",
        projectId: ""
    };
    return (await apiClient.get(`/samples/${id}`)).data;
}

export function useSampleDetails(id: string | undefined){
    return useQuery({
        queryKey: ['sampleDetails', id],
        queryFn: () => fetchDataSampleDetails(id),
        placeholderData: keepPreviousData,
    })
}