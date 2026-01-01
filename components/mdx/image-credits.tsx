export type ImageCredit = {
  title: string;
  author: string;
  source: string;
  sourceUrl?: string;
  license: string;
  licenseUrl?: string;
};

interface ImageCreditsProps {
  credits: ImageCredit[];
}

export function ImageCredits({ credits }: ImageCreditsProps) {
  if (!credits.length) return null;

  return (
    <section className="my-10">
      <h3 className="mb-3 !font-instrument text-custom-dark text-lg">
        Izvori i krediti za slike
      </h3>

      <ul className="space-y-2">
        {credits.map((credit, index) => (
          <li key={index}>
            {credit.title && <strong>{credit.title}</strong>} – {credit.author},{" "}
            {credit.sourceUrl ? (
              <a
                href={credit.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {credit.source}
              </a>
            ) : (
              credit.source
            )}{" "}
            ({credit.license}
            {credit.licenseUrl && (
              <>
                ,{" "}
                <a
                  href={credit.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  link
                </a>
              </>
            )}
            )
          </li>
        ))}
      </ul>
    </section>
  );
}
