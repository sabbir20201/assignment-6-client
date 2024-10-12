import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (builder) => ({
        getRecipe: builder.query({
            query: () => "/recipe",
        }),
        createUser: builder.mutation({
            query: (newUser) => ({
                method: "POST",
                url: "/auth/signup",
                body: newUser
            })
        }),
        loginUser: builder.mutation({
            query: (newUser) => ({
                method: "POST",
                url: "/auth/login",
                body: newUser
            })
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRecipeQuery, useCreateUserMutation, useLoginUserMutation } = baseApi