import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function PortfolioPage() {
  const jsonPath = path.join(process.cwd(), 'final portfolio', 'portfolio_index.json');
  const raw = fs.readFileSync(jsonPath, 'utf8');
  const data = JSON.parse(raw);
  const items = data.items || [];

  // group by module
  const modules: Record<string, number> = {};
  for (const it of items) {
    const cleaned = it.cleaned_filename || it.filename;
    const base = path.basename(cleaned || '');
    const m = base.match(/module[_\- ]?(\d+)/i) || (it.filename || '').match(/module[_\- ]?(\d+)/i);
    if (m) {
      const mod = m[1];
      modules[mod] = (modules[mod] || 0) + 1;
    }
  }

  const sorted = Object.keys(modules).sort((a, b) => Number(a) - Number(b));

  return (
    <main style={{ padding: '1rem' }}>
      <h1>Final Portfolio</h1>
      <p>Modules detected in your portfolio. Click a module to open its page.</p>
      <ul>
        {sorted.map((m) => (
          <li key={m}>
            <Link href={`/portfolio/module/${m}`}>Module {m}</Link> — {modules[m]} item(s)
          </li>
        ))}
      </ul>
      <p>
        Or open the <Link href="/portfolio/misc">misc items</Link> page.
      </p>
    </main>
  );
}
