import Link from 'next/link';

import { pages } from '../../../app/[docpage]/page';
import PageLink from './PageLink';
import SectionHeader from './SectionHeader';



function Entry ({k}: {k: number}) {
	const page = pages[k];
	return page.route ? <PageLink page={page} /> : <SectionHeader page={page} />;
}

export default function Sidebar () {
	return (
		<nav className="w-1/4 max-w-xs bg-slate-100 border-r border-blue-800 sans-serif overflow-y-scroll">
			<header className="bg-blue-800 text-white text-center px-2 py-5">
				<h1 className="py-3">
					<Link href="/">Readmix</Link>
				</h1>
				<h4>Markdown with Wings!</h4>
			</header>

			<main className="">
				<section className="pt-2 pb-6 h4 space-y-1">
					{pages.map((page, k) => <Entry key={k} k={k} />)}
				</section>
			</main>
		</nav>
	);
}
