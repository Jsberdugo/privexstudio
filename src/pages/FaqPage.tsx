import { FAQ_CATEGORIES } from '../data';
import PageHeader from '../components/ui/PageHeader';
import Accordion from '../components/ui/Accordion';
import RichText from '../components/ui/RichText';
import { btnOutline } from '../components/ui/buttons';
import { Link } from '../router';

export default function FaqPage() {
  return (
    <main className="flex-1 pb-20">
      <PageHeader
        eyebrow="Common Inquiries"
        title="Frequently Asked Questions"
        intro="Everything about the Russian technique, waterless pedicures and booking — in one place."
      />
      <div className="max-w-3xl mx-auto px-5 md:px-10 space-y-16">
        {FAQ_CATEGORIES.map((cat) => (
          <section key={cat.category}>
            <h2 className="font-playfair text-3xl md:text-4xl font-normal text-[#4A0D1A] mb-4">{cat.category}</h2>
            <div className="border-t border-[#E8DDD3]">
              {cat.questions.map((faq) => (
                <Accordion key={faq.q} title={faq.q}>
                  <RichText text={faq.a} />
                </Accordion>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="mt-16 text-center px-5">
        <p className="text-[17px] font-light text-[#5D4E47]">
          Didn&apos;t find your answer? <strong>Text us at (863) 257-8841.</strong>
        </p>
        <Link to="/policies" className={`${btnOutline} mt-5`}>
          View Policies
        </Link>
      </div>
    </main>
  );
}
