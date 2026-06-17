export default function Alerta({ alerta }) {
  if (!alerta?.message) return null;

  const classe =
    alerta.status === "error"
      ? "alert-danger"
      : "alert-success";

  return (
    <div className={`alert ${classe}`} role="alert">
      {alerta.message}
    </div>
  );
}