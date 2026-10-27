import { POLICIES } from '../data';
import PageHeader from '../components/ui/PageHeader';
import Accordion from '../components/ui/Accordion';
import RichText from '../components/ui/RichText';
import { btnOutline } from '../components/ui/buttons';
import { Link } from '../router';

export default function PoliciesPage() {
  return (
    <main className="flex-1 pb-20">
      <PageHeader
        eyebrow="Transparency & Courtesy"
        title="Studio Policies"
        intro="To keep the studio serene and respect everyone's time, every appointment follows these guidelines."
      />
      <div className="max-w-3xl mx-auto px-5 md:px-10 border-t border-[#E8DDD3]">
        {POLICIES.map((p, i) => (
          <Accordion key={p.title} title={p.title} variant="section" defaultOpen={i < 2}>
            <ul className="space-y-4">
              {p.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[11px] w-1.5 h-px bg-[#4A0D1A] shrink-0" />
                  <span>
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </div>
      <div className="mt-14 text-center px-5">
        <p className="text-[17px] font-light text-[#5D4E47]">Still have questions?</p>
        <Link to="/faq" className={`${btnOutline} mt-5`}>
          Read the FAQ
        </Link>
      </div>
    </main>
  );
}
