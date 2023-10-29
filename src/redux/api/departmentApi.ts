import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDepartment: build.mutation({
      query: (loginData) => ({
        url: `${DEPARTMENT_URL}/create-department`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["department"],
    }),
  }),
});

export const {useCreateDepartmentMutation} = departmentApi;
