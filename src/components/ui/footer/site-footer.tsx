import { siteConfig } from "../../../../config/site"

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
          >
            mitesh
          </a>{" "}
           mentored by{" "}
          <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
          >
            Adaptatron
          </a>
        </p>
      </div>
    </footer>
  )
}
