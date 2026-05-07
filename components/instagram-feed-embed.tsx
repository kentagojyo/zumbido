export type InstagramFeedEmbedConfig =
  | string
  | {
      embedHtml?: string
      widgetUrl?: string
    }

interface InstagramFeedEmbedProps {
  embed: InstagramFeedEmbedConfig
  title: string
}

function normalizeEmbed(embed: InstagramFeedEmbedConfig) {
  if (typeof embed === 'string') {
    const trimmedEmbed = embed.trim()

    return trimmedEmbed.startsWith('<')
      ? { embedHtml: trimmedEmbed, widgetUrl: undefined }
      : { embedHtml: undefined, widgetUrl: trimmedEmbed }
  }

  return {
    embedHtml: embed.embedHtml?.trim(),
    widgetUrl: embed.widgetUrl?.trim(),
  }
}

export function InstagramFeedEmbed({ embed, title }: InstagramFeedEmbedProps) {
  const { embedHtml, widgetUrl } = normalizeEmbed(embed)

  return (
    <div className="overflow-hidden border border-border/70 bg-card/70">
      <div className="border-b border-border/60 px-5 py-4">
        <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
          Live Feed
        </p>
      </div>
      <div className="min-h-[520px] bg-background/70">
        {embedHtml ? (
          <div
            className="instagram-feed-embed w-full overflow-hidden [&_iframe]:mx-auto [&_iframe]:max-w-full"
            aria-label={title}
            dangerouslySetInnerHTML={{ __html: embedHtml }}
          />
        ) : widgetUrl ? (
          <iframe
            src={widgetUrl}
            title={title}
            loading="lazy"
            className="h-[560px] w-full border-0 bg-background sm:h-[640px]"
            referrerPolicy="no-referrer-when-downgrade"
            allowTransparency
          />
        ) : null}
      </div>
    </div>
  )
}
