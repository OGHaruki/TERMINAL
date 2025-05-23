import Projects from "@components/Projects/Projects.tsx";
import {useState} from "react";
import {PaginationState, SortingState} from "@tanstack/react-table";
import {useProjects} from "@hooks/useProjectQuery.ts";
import ProjectDetails from "@components/Projects/ProjectDetails.tsx";
import {useProjectDetails} from "@hooks/useProjectDetailsQuery.ts";

const ProjectsPage = () => {
    const [sorting, setSorting] = useState<SortingState> ([]);
    const [pagination, setPagination] = useState<PaginationState>(
        {
            pageIndex: 0,
            pageSize:10
        }
    )

    const dataQueryProjects = useProjects({
        pageNumber: pagination.pageIndex,
        pageSize: pagination.pageSize,
        desc: sorting[0]?.desc ?? true
    })

    const [projectDetailsId, setProjectDetailsId] = useState<string|null>(null);

    const dataQueryProjectDetails = useProjectDetails(projectDetailsId);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex justify-center p-5 flex-wrap">
                <div className="flex-1 bg-white p-3 rounded-md m-1">
                    {dataQueryProjects.isLoading ?
                        (
                            <div className="flex justify-center">
                                <span className="loading loading-spinner loading-md"></span>
                            </div>
                        ):
                        (
                            <Projects
                                dataQuery={dataQueryProjects.data}
                                sorting={sorting}
                                setSorting={setSorting}
                                pagination={pagination}
                                setPagination={setPagination}
                                onChangeProjectDetails={setProjectDetailsId}
                            />
                        )
                    }
                </div>
                <div className="flex-1 bg-white p-3 rounded-md m-1 self-start">
                    {dataQueryProjects.isLoading ?
                        (
                            <div className="flex justify-center">
                                <span className="loading loading-spinner loading-md"></span>
                            </div>
                        ):
                    (<ProjectDetails dataQuery={dataQueryProjectDetails.data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;