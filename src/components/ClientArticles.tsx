'use client';
import { articleApi, deleteVisitor } from '@/api/visitorProvider';
import { useMutation, useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { FC } from 'react';

interface ClientArticlesProps {}

const ClientArticles: FC<ClientArticlesProps> = ({}) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['articles'],
    queryFn: () => {
      return articleApi();
    },
  });

  const { mutate } = useMutation({
    mutationFn: (id: number) => deleteVisitor(id),
    onSuccess: () => {
      refetch();
    },
  });
  const handleDelete = (id: number) => {
    mutate(id);
  };
  if (isLoading) {
    return <div>IS LOADING</div>;
  }

  if (!isLoading && !data) {
    return <div>ERROR</div>;
  }

  return (
    <div>
      <h1>{data.message}</h1>
      <h4>{data.data.length} items</h4>
      <hr />
      <div>
        {data.data.map((item) => {
          return (
            <div key={item.id} className="flex">
              <Link className="underline" href={`/visitor/${item.id}`}>
                <p>ID : {item.id}</p>
              </Link>
              <div className="mx-2">|</div>
              <p>Title : {item.title}</p>
              <div className="mx-2">|</div>
              <h4>content: {item.content}</h4>
              <div className="mx-2">|</div>
              <button onClick={() => handleDelete(item.id)}>❌</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientArticles;
