import { VisitorType } from '@/api/visitorProvider';
import Link from 'next/link';
import { FC } from 'react';

interface ServerArticleNocacheProps {}
const getArticles = async () => {
  const response = await fetch('http://188.166.211.164:8000/api/visitors', {
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
const ServerArticleNocache: FC<ServerArticleNocacheProps> = async ({}) => {
  const { message, data } = (await getArticles()) as VisitorType;
  return (
    <div>
      <h1>{message}</h1>
      <h4>{data.length} items</h4>
      <hr />
      <div>
        {data.map((item) => {
          return (
            <div key={item.id} className="flex">
              <Link className="underline" href={`/visitor/${item.id}`}>
                <p>ID : {item.id}</p>
              </Link>
              <div className="mx-2">|</div>
              <p>Title : {item.title}</p>
              <div className="mx-2">|</div>
              <h4>content: {item.content}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServerArticleNocache;
