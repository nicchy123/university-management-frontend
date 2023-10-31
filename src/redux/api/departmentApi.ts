import { IDepartment, Imeta } from "@/types";
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
    departments: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${DEPARTMENT_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartment, meta: Imeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: ["department"],
    }),
  }),
});

export const { useCreateDepartmentMutation, useDepartmentsQuery } =
  departmentApi;
