import { Link } from "@tanstack/react-router";

function ErrorPage() {
  return (
    <>
      <main>
        <section>
          <h1>PAGE NOT FOUND</h1>
          <Link to='/'>
            <h2 className='text-blue-700'>Click here to return HOME</h2>
          </Link>
        </section>
      </main>
    </>
  );
}
export default ErrorPage;
