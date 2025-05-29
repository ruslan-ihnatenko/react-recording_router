import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <div className="container has-text-centered" style={{ marginTop: '100px' }}>
    <h1 className="title is-1">404</h1>
    <h2 className="subtitle is-3">Page Not Found</h2>
    <p className="mb-4">The page you are looking for doesn't exist or has been moved.</p>
    <Link to="/" className="button is-primary">
      Go to Home Page
    </Link>
  </div>
); 