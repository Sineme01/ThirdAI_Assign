import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <div className="flex flex-col items-center justify-center max-w-md p-6 bg-white rounded-lg shadow-lg">
        <SentimentDissatisfiedIcon style={{ fontSize: 80, color: '#f44336' }} />
        <h1 className="mt-4 text-4xl font-bold text-gray-800">Error 404</h1>
        <p className="mt-2 pb-2 text-lg text-gray-600 font-semibold">Oops! The page you're looking for doesn't exist.</p>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoHome}
          className="mt-6"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
