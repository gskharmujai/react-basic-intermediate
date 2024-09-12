export function FormGroup({ errorMsg = "", children }) {
  return (
    <div
      className={`mb-3 form-group ${errorMsg.length > 0 ? "bg-subtle-danger" : ""}`}
    >
      {children}
      {errorMsg.length > 0 && (
        <div className="alert alert-danger p-2 mt-1">{errorMsg}</div>
      )}
    </div>
  );
}
