
import { useEffect, useState } from 'react';

export function LegacyWorkspace() {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const frame = document.querySelector<HTMLIFrameElement>('#swift-legacy-frame');
      if (frame && !frame.contentWindow) setFailed(true);
    }, 10000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="workspace">
      {failed ? (
        <section className="error">
          <h1>Swift Cargo CRM could not be loaded</h1>
          <p>Check that the public/legacy files are present and reload the application.</p>
        </section>
      ) : null}

      <iframe
        id="swift-legacy-frame"
        className="legacy-frame"
        title="Swift Cargo CRM workspace"
        src={`${import.meta.env.BASE_URL}legacy/index.html`}
        allow="clipboard-read; clipboard-write"
      />
    </main>
  );
}
