/**
 * Generated by @openapi-codegen
 *
 * @version 1.0
 */
export type CreateProjectRequest = {
    name?: string | null;
};

export type UserDataResponse = {
    email: string;
    roles: string[];
    id: string;
    isEmailConfirmed: boolean;
};

export type UserData = {
    isAuthenticated: boolean;
    email?: string;
    roles: string[];
};

export type CreateRecipeRequest = {
    name?: string | null;
    steps?: SampleStep[] | null;
};

export type CreateSampleRequest = {
    /**
     * @format uuid
     */
    projectId?: string;
    /**
     * @format uuid
     */
    recipeId?: string | null;
    steps?: SampleStep[] | null;
    tags?: string[] | null;
    comment?: string | null;
    saveAsARecipe?: boolean;
    recipeName?: string | null;
};

export type CreateTagRequest = {
    name?: string | null;
};

export type DefineDecimalParameterRequest = {
    name?: string | null;
    /**
     * @format uuid
     */
    parentId?: string | null;
    unit?: string | null;
    /**
     * @format double
     */
    step?: number;
    /**
     * @format double
     */
    defaultValue?: number | null;
};

export type DefineIntegerParameterRequest = {
    name?: string | null;
    /**
     * @format uuid
     */
    parentId?: string | null;
    unit?: string | null;
    /**
     * @format int32
     */
    step?: number;
    /**
     * @format int32
     */
    defaultValue?: number | null;
};

export type DefineTextParameterRequest = {
    name?: string | null;
    /**
     * @format uuid
     */
    parentId?: string | null;
    allowedValues?: string[] | null;
    /**
     * @format int32
     */
    defaultValue?: number | null;
};

export type ForgotPasswordRequest = {
    email?: string | null;
};

export type GetTagsDto = {
    /**
     * @format int32
     */
    totalCount?: number;
    pagingParameters?: PagingParameters;
    tags?: TagDto[] | null;
};

export type LoginRequest = {
    email?: string | null;
    password?: string | null;
};

/**
 * @format int32
 */
export type OrderDirection = 0 | 1;

export type PagingParameters = {
    /**
     * @format int32
     */
    pageIndex?: number;
    /**
     * @format int32
     */
    pageSize?: number;
};

export type ParameterId = {
    /**
     * @format uuid
     */
    value?: string;
};

export type ParameterValue = {
    /**
     * @format uuid
     */
    parameterId?: string;
};

export type RefreshRequest = {
    refreshToken?: string | null;
};

export type RegisterRequest = {
    email?: string | null;
    password?: string | null;
    roleName?: string | null;
};

export type ResendConfirmationEmailRequest = {
    email?: string | null;
};

export type ResetPasswordRequest = {
    email?: string | null;
    newPassword?: string | null;
    code?: string | null;
};

export type SampleStep = {
    /**
     * @format uuid
     */
    id?: string | null;
    values?: ParameterValue[] | null;
    comment?: string | null;
};

export type StepParameterValueDto = {
    parameterId?: ParameterId;
};

export type TagDto = {
    /**
     * @format uuid
     */
    id?: string;
    name?: string | null;
};

export type UpdateAccountRequest = {
    newEmail?: string | null;
    newPassword?: string | null;
    oldPassword?: string | null;
};

export type UpdateProjectRequest = {
    name?: string | null;
};

export type UpdateRecipeRequest = {
    name?: string | null;
    steps?: UpdateSampleStepDto[] | null;
};

export type UpdateSampleRequest = {
    /**
     * @format uuid
     */
    projectId?: string;
    /**
     * @format uuid
     */
    recipeId?: string | null;
    steps?: SampleStep[] | null;
    tags?: string[] | null;
    comment?: string | null;
};

export type UpdateSampleStepDto = {
    /**
     * @format uuid
     */
    id?: string;
    parameters?: StepParameterValueDto[] | null;
    comment?: string | null;
};

export type UpdateTagRequest = {
    name?: string | null;
};

export type SampleDto = {
    id: string;
    code: string;
    project: string;
    createdAtUtc: Date;
    comment: string
};

export type SampleDetailsDto = {
    id: string
    code: string;
    recipe?: string;
    createdAtUtc: Date;
    comment: string
    projectId: string;
    steps?: SampleStep[] | null;
    tags?: TagDto[] | null;
};

export type ProjectDto = {
    id: string;
    name: string;
}

export type ProjectDetailsDto = {
    id: string;
    name: string;
    isActive: boolean;
    samplesIds: string [];
}

