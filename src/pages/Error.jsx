import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-64">
      <h2>Error 404</h2>
      <p>Page Not Found</p>
      <Link to="/">Return Home</Link>
    </div>
  );
};

export default Error;
