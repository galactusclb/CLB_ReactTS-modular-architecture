import { useMutation as useReactQueryMutation, useQuery as useReactQuery } from '@tanstack/react-query';

export const useMutation = (mutationFn: any) => {
    const mutation = useReactQueryMutation(mutationFn);
    return mutation;
};

export const useQuery = (queryKey: any, queryFn: any) => {
    const query = useReactQuery(queryKey, queryFn);
    return query;
};