import { IDepartment, Imeta } from "@/types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    departments: build.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
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

    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: ["department"],
    }),

    // get single department by id
    department: build.query({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["department"],
    }),

    // update single department by id
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["department"],
    }),

    // delete single department by id
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["department"],
    }),
  }),
});

export const {
  useDepartmentsQuery,
  useAddDepartmentMutation,
  useDepartmentQuery, // get single department hooks
  useUpdateDepartmentMutation, // update single department hooks
  useDeleteDepartmentMutation, // delete single department hooks
} = departmentApi;
