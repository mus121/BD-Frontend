import PageNotFound from '@/components/shared/svg/PageNotFound';

function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '95vh',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <PageNotFound size={400.65} />
    </div>
  );
}

export default NotFound;
