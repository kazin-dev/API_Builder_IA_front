type Props = {
  value?: string;
  placeholder?: string;
  buttonZip?: string;
  onDownload?: () => void; // <— adiciona callback opcional
};

export default function YamlViewer({
  value,
  placeholder = "Output aparecerá aqui...",
  buttonZip = "Download ZIP",
  onDownload,
}: Props) {
  const hasValue = !!value?.trim();

  return (
    <div className="viewer-container">
      <pre className="viewer">{hasValue ? value : placeholder}</pre>

      <button
        className="button"
        onClick={onDownload}
        disabled={!hasValue} // só habilita se tiver YAML
      >
        {buttonZip}
      </button>
    </div>
  );
}
