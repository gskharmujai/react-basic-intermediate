export function TodoFilterForm({
  filterName,
  setFilterName,
  filterComplete,
  setFilterComplete,
}) {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control form-sm"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
      <input
        type="checkbox"
        className="form-check-input"
        value={filterComplete}
        onChange={(e) => setFilterComplete(e.target.checked)}
      />
      <label className="form-check-label">Hide Completed</label>
    </div>
  );
}
