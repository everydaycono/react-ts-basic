import { FC } from 'react';

interface pageProps {
  params: { id: string };
}

type VisitorType = {
  message: string;
  data: {
    id: number;
    createdAt: string;
    updatedAt: string;
    title: string;
    content: string | null;
    image: string | null;
    user: string | null;
  };
};

const getVisitorData = async (id: number) => {
  const response = await fetch(
    `http://188.166.211.164:8000/api/visitors/${id}`
  );

  if (!response.ok) {
    throw new Error('Something went wrong ssr');
  }

  return response.json();
};

const SSRPage: FC<pageProps> = async ({ params: { id } }) => {
  const data = (await getVisitorData(parseInt(id))) as VisitorType;
  return (
    <div>
      <h1>SSR</h1>
      <h1>{data.message}</h1>
      <hr />
      <div className="m-20">
        <h1>TITLE : {data.data.title}</h1>
        <div className="bg-red-500 my-10">
          <h1>Content : {data.data.content}</h1>
          <p>{data.data.content}</p>
          <p>{data.data.content}</p>
          <p>{data.data.content}</p>
          <p>{data.data.content}</p>
          <p>{data.data.content}</p>
        </div>
        <h1>USER : {data.data.user}</h1>
      </div>
    </div>
  );
};

export default SSRPage;
