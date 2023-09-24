import apiClient from '.';

export type VisitorType = {
  message: string;
  data: {
    id: number;
    createdAt: string;
    updatedAt: string;
    title: string;
    content: string;
    image: string;
    user: string;
  }[];
};

export type VisitorCreateType = {
  title: string;
  image: string;
  content: string;
  user: string;
};
export const articleApi = async () => {
  const { data } = await apiClient.get('/api/visitors');
  console.log(data, 'DATA');
  return data as VisitorType;
};
export const createVisitor = async (payload: VisitorCreateType) => {
  const { data } = await apiClient.post('/api/visitors', payload);
  return data as VisitorType;
};
export const deleteVisitor = async (id: number) => {
  const { data } = await apiClient.delete(`/api/visitors/${id}`);
  return data as { message: string };
};
export const createAuthVisitor = async (payload: VisitorCreateType) => {
  const { data } = await apiClient.post('/api/posts', payload, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  });
  return data as VisitorType;
};
