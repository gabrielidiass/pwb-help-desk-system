export default function CampoEntrada({
  value,
  id,
  name,
  label,
  tipo,
  onchange,
  requerido,
  readonly,
  maxCaracteres,
}) {
  return (
    <div className="form-floating mb-3">
      <input
        id={id}
        name={name}
        type={tipo}
        className="form-control"
        value={value}
        onChange={onchange}
        required={requerido}
        readOnly={readonly}
        maxLength={maxCaracteres}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}