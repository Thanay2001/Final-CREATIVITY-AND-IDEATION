import { redirect } from 'next/navigation';

export default function PortfolioPage() {
  // Redirect to the static site copy in /public/portfolio/index.html
  redirect('/portfolio/index.html');
}
