import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1) // prev page
      // router.go(1) // fwd page
      router.push('/'); // push to homepage
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>The page does not exist</h2>
      <p>
        Go back to the{' '}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
