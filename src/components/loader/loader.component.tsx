import CircularProgress from '@mui/material/CircularProgress';

const LoaderComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default LoaderComponent;
