import "./loader.css";

function Loader({ isLoading }: { isLoading: any }) {
  return (
    <div className="loader-container">
      {isLoading && <div className="loader"></div>}
    </div>
  );
}

export default Loader;
