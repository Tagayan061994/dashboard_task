import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const BASE_URL = 'http://localhost:3000/users';

export const useContacts = () => {
  const queryClient = useQueryClient();

  return {
    contactsQuery: useQuery({
      queryKey: ['contacts'],
      queryFn: () => fetch(BASE_URL).then((res) => res.json()),
    }),
    createMutation: useMutation({
      mutationFn: (data) => fetch(BASE_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['contacts'] }),
    }),
    deleteMutation: useMutation({
      mutationFn: (id) => fetch(`${BASE_URL}/${id}`, { method: 'DELETE' }),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['contacts'] }),
    }),
  };
};
