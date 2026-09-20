type PlaceholderProps = {
  label: string
  className?: string
}

export function Placeholder({ label, className = '' }: PlaceholderProps) {
  return (
    <div className={`placeholder ${className}`.trim()} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  )
}
