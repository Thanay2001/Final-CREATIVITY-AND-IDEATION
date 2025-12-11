import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type Item = {
  filename?: string;
  cleaned_filename?: string;
  type?: string;
  extracted_text?: string;
  transcripts?: Record<string, string>;
};

function assetUrlFor(item: Item) {
  const name = item.cleaned_filename ? path.basename(item.cleaned_filename) : path.basename(item.filename || '');
  return `/portfolio/assets/${name}`;
}

export async function generateStaticParams() {
  const jsonPath = path.join(process.cwd(), 'final portfolio', 'portfolio_index.json');
  const raw = fs.readFileSync(jsonPath, 'utf8');
  const data = JSON.parse(raw);
  const items: Item[] = data.items || [];

  const moduleIds = new Set<string>();
  items.forEach((it: Item) => {
    const cleaned = it.cleaned_filename || it.filename || '';
    const base = path.basename(cleaned);
    const m = base.match(/module[_\- ]?(\d+)/i) || (it.filename || '').match(/module[_\- ]?(\d+)/i);
    if (m) moduleIds.add(m[1]);
  });

  return Array.from(moduleIds).map((id) => ({ id }));
}

export default function ModulePage({ params }: { params: { id: string } }) {
  const id = params.id;
  const jsonPath = path.join(process.cwd(), 'final portfolio', 'portfolio_index.json');
  const raw = fs.readFileSync(jsonPath, 'utf8');
  const data = JSON.parse(raw);
  const items: Item[] = data.items || [];

  const moduleItems = items.filter((it: Item) => {
    const cleaned = it.cleaned_filename || it.filename || '';
    const base = path.basename(cleaned);
    const m = base.match(/module[_\- ]?(\d+)/i) || (it.filename || '').match(/module[_\- ]?(\d+)/i);
    return m ? m[1] === id : false;
  });

  const citiz = (data && data.citizimum && data.citizimum[id]) ? data.citizimum[id] : null;

  return (
    <main style={{ padding: '1rem' }}>
      <header>
        <h1>Module {id}</h1>
        <p>
          <Link href="/portfolio">Back to portfolio index</Link>
        </p>
      </header>

      {moduleItems.length === 0 && <p>No items found for this module.</p>}

      {citiz && (
        <section style={{ border: '1px dashed #ccc', padding: '1rem', borderRadius: 8, marginBottom: '1rem', background: '#fbfbfb' }}>
          <h2>Citizimum submissions</h2>
          <p>Pieces I shared as part of the Citizimum activity for this module:</p>
          <ul>
            {citiz.shared.map((s: string, i: number) => {
              const name = path.basename(s);
              const asset = `/portfolio/assets/${name}`;
              return (
                <li key={i}><a href={asset} target="_blank">{name}</a></li>
              );
            })}
          </ul>
          {(!citiz.responses || citiz.responses.length === 0) ? (
            <p style={{ color: '#a00' }}>No responses received yet.</p>
          ) : (
            <div>
              <h3>Responses</h3>
              <ul>
                {citiz.responses.map((r: string, idx: number) => <li key={idx}>{r}</li>)}
              </ul>
            </div>
          )}
        </section>
      )}

      {moduleItems.map((it, idx) => {
        const type = it.type || '';
        const assetUrl = assetUrlFor(it);
        return (
          <article key={idx} style={{ border: '1px solid #e6e6e6', padding: '1rem', borderRadius: 8, marginBottom: '1rem' }}>
            <h3>{path.basename(it.cleaned_filename || it.filename || '')}</h3>
            {type === 'pdf' && (
              <>
                <div style={{ fontSize: '.9rem', color: '#555' }}>
                  PDF — <a href={assetUrl} target="_blank">Open in new tab</a>
                </div>
                <iframe src={assetUrl} style={{ width: '100%', height: 640, border: '1px solid #ddd', marginTop: 8 }} />
              </>
            )}

            {type === 'mp4' && (
              <>
                <div style={{ fontSize: '.9rem', color: '#555' }}>Video</div>
                <video controls style={{ width: '100%', marginTop: 8 }}>
                  <source src={assetUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </>
            )}

            {it.extracted_text && (
              <div style={{ marginTop: 12 }}>
                <pre style={{ whiteSpace: 'pre-wrap', background: '#fafafa', padding: 12, borderRadius: 6 }}>
                  {fs.existsSync(path.join(process.cwd(), it.extracted_text)) ? fs.readFileSync(path.join(process.cwd(), it.extracted_text), 'utf8').slice(0, 200) + '...' : ''}
                </pre>
                <p>
                  <a href={`/portfolio/fulltext-${path.basename(it.extracted_text || '')}.html`}>Read full text</a>
                </p>
              </div>
            )}
          </article>
        );
      })}
    </main>
  );
}
