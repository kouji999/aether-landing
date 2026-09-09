import { useCopy } from "./clipboard";
import { CheckIcon, CopyIcon } from "./icons";

/**
 * Terminal-style command pill with copy-to-clipboard button.
 * Reused by Hero install command and FinalCta scaffold command.
 */
export function CopyCommand({
  command,
  prefix,
  ariaLabel,
  idleLabel,
  copiedLabel = "Copied",
  className = "",
}: {
  command: string;
  /** Shell prompt shown before the command, e.g. "$". */
  prefix?: string;
  ariaLabel: string;
  /** Visible button text when idle. Omit for icon-only button. */
  idleLabel?: string;
  copiedLabel?: string;
  className?: string;
}) {
  const { copied, copy } = useCopy();
  const label = copied ? copiedLabel : idleLabel;

  return (
    <span
      className={`inline-flex max-w-full items-stretch overflow-hidden rounded-lg border border-line bg-surface/80 ${className}`}
    >
      {prefix ? (
        <span
          aria-hidden="true"
          className="flex select-none items-center border-r border-line px-3 font-mono text-sm text-ember"
        >
          {prefix}
        </span>
      ) : null}
      <code className="flex min-w-0 items-center whitespace-nowrap px-4 py-2.5 font-mono text-[11px] text-bone sm:text-sm">
        {command}
      </code>
      <button
        type="button"
        onClick={() => {
          void copy(command);
        }}
        aria-label={ariaLabel}
        className="flex shrink-0 items-center gap-1.5 border-l border-line px-3.5 font-mono text-[10px] uppercase tracking-[0.15em] text-dim transition-colors duration-200 hover:bg-surface hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ember"
      >
        {copied ? (
          <CheckIcon className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
        ) : (
          <CopyIcon className="h-3.5 w-3.5 shrink-0" />
        )}
        {label ? <span className="whitespace-nowrap">{label}</span> : null}
      </button>
    </span>
  );
}
