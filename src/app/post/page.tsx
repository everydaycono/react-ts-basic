'use client';
import { VisitorCreateType, createVisitor } from '@/api/visitorProvider';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const PostPage = () => {
  const [data, setData] = useState({
    title: '',
    image: '',
    content: '',
    user: '',
  });

  // router
  const router = useRouter();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

  const { mutate: handleCreateVisitor } = useMutation({
    mutationFn: (payload: VisitorCreateType) => createVisitor(payload),
    onSuccess: () => {
      router.push('/');
    },
  });

  const handleSubmit = (evnet: React.FormEvent) => {
    evnet.preventDefault();
    if (
      data.title === '' ||
      data.image === '' ||
      data.content === '' ||
      data.user === ''
    ) {
      alert('Please fill all fields');
      return;
    }
    handleCreateVisitor(data);
  };
  return (
    <div>
      <div>
        <h1>Post Post</h1>
      </div>

      <hr />

      <form onSubmit={handleSubmit}>
        <div className="mb-3 flex">
          <label className="w-20" htmlFor="title">
            title
          </label>
          <input
            className="text-black"
            type="text"
            id="title"
            onChange={handleChange}
            value={data.title}
          />
        </div>
        <div className="mb-3 flex">
          <label className="w-20" htmlFor="image">
            image
          </label>
          <input
            className="text-black"
            type="text"
            id="image"
            onChange={handleChange}
            value={data.image}
          />
        </div>
        <div className="mb-3 flex">
          <label className="w-20" htmlFor="content">
            content
          </label>
          <input
            className="text-black"
            type="text"
            id="content"
            onChange={handleChange}
            value={data.content}
          />
        </div>
        <div className="mb-3 flex">
          <label className="w-20" htmlFor="user">
            user
          </label>
          <input
            className="text-black"
            type="text"
            id="user"
            onChange={handleChange}
            value={data.user}
          />
        </div>
        <input
          className="bg-blue-500 p-4 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default PostPage;
