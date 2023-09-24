import ServerArticleNocache from '@/components/ServerArticleNocache';
import ClientArticles from '../components/ClientArticles';
import ServerArticles from '../components/ServerArticles';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="w-full">
        <h4>CSR VS SSR</h4>

        <hr />
        <nav className="my-5">
          <Link className="bg-red-500 mr-10 p-4" href="/visitor">
            Visitor post
          </Link>
          <Link className="bg-blue-500 p-4" href="/post">
            Poster post
          </Link>
        </nav>
        <hr />

        <div className="flex justify-between">
          <div>
            <h6 className="text-2xl font-bold">CSR</h6>
            <ClientArticles />
          </div>

          <div>
            <h6 className="text-2xl font-bold">SSR</h6>
            <ServerArticles />
          </div>

          <div>
            <h6 className="text-2xl font-bold">SSR - No cache</h6>
            <ServerArticleNocache />
          </div>
          <div>
            <h6 className="text-2xl font-bold">SSR - No Store</h6>
            <ServerArticleNocache />
          </div>
        </div>
      </div>
    </main>
  );
}
