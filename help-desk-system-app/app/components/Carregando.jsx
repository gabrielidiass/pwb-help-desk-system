export default function Carregando({ carregando, children }) {
  if (carregando) {
    return (
      <div className="text-center mt-3">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  return children;
}