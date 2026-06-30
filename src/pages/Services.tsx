import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageIntro from '../components/sections/PageIntro';
import SubNav from '../components/sections/SubNav';
import ServiceDetailSection from '../components/sections/ServiceDetailSection';

const subnavItems = [
  { id: 'individual-counselling', label: 'Individual' },
  { id: 'couple-counselling', label: 'Couple' },
  { id: 'adolescent-counselling', label: 'Adolescent' },
  { id: 'family-counselling', label: 'Family' },
];

const sections = [
  {
    id: 'individual-counselling',
    tagLabel: 'INDIVIDUAL · ONE-ON-ONE THERAPY',
    tagBg: '#EEEEF8',
    tagColor: '#3C3489',
    accentColor: '#7B7FB5',
    headline: 'Your space. Your story. Your pace.',
    intro:
      'A private, one-on-one relationship with a licensed therapist trained to understand not just psychological frameworks, but the cultural, familial, and social pressures that shape your inner world.',
    whoPoints: [
      'You feel overwhelmed, anxious, or persistently low but cannot pinpoint why',
      'You are going through a major life change — a breakup, job loss, relocation, or loss',
      'You struggle with self-worth, people-pleasing, or setting boundaries',
      'You want to understand your patterns and break cycles holding you back',
      'You simply want a space to process your thoughts with someone trained to help',
    ],
    steps: [
      {
        icon: 'clipboard-text',
        title: 'Tell us what you need',
        body: 'Short intake form, your language preference and what you need.',
      },
      {
        icon: 'users',
        title: 'Get matched',
        body: 'A therapist who fits your language, culture, and goals.',
      },
      {
        icon: 'phone',
        title: 'Free intro call',
        body: '20 minutes to meet your therapist before committing.',
      },
      {
        icon: 'calendar-event',
        title: 'Begin sessions',
        body: 'Weekly or fortnightly, at your pace.',
      },
    ],
    expectPoints: [
      '50-minute sessions, online or in-person in Gurugram',
      'A therapist who listens without judgement',
      'Practical coping strategies built together, at your pace',
      'Strict confidentiality within ethical limits',
    ],
    approach:
      'Our therapists are trained in CBT, ACT, Psychodynamic, and Mindfulness-Based approaches, and deeply understand the Indian context: joint family dynamics, academic and career pressure, and the stigma around mental health.',
    faqs: [
      {
        question: 'How long will I need counselling?',
        answer:
          'Some feel relief after 6 to 8 sessions; others continue longer. Your therapist checks in regularly on your progress.',
      },
      {
        question: 'Is everything confidential?',
        answer:
          'Yes, strictly, except where there is serious and immediate risk of harm, per ethical and legal guidelines.',
      },
      {
        question: 'Can I switch therapists?',
        answer: 'Yes, at no extra cost, if the fit does not feel right.',
      },
    ],
    ctaText: 'Book individual session',
    imageUrl: '/images/individual-counselling.jpg',
    imageCaption: 'Individual counselling',
  },
  {
    id: 'couple-counselling',
    tagLabel: 'COUPLE · RELATIONSHIP SUPPORT',
    tagBg: '#FCEEE9',
    tagColor: '#712B13',
    accentColor: '#E8705A',
    headline: 'Every relationship deserves a safe space.',
    intro:
      'Structured, evidence-based support that helps two people understand each other better, communicate more effectively, and resolve conflict in healthier ways — whether dating, live-in, engaged, or married.',
    whoPoints: [
      'You keep having the same argument without resolution',
      'There has been a breach of trust — infidelity, financial dishonesty, hidden struggles',
      'You feel emotionally distant or disconnected from your partner',
      'You are navigating a major transition together — moving in, marriage, children',
      'You want to build a stronger foundation before your next step',
    ],
    steps: [
      {
        icon: 'heart-handshake',
        title: 'Reach out together or alone',
        body: 'Either or both partners can begin.',
      },
      {
        icon: 'users',
        title: 'Get matched',
        body: 'A couples therapist who fits your context and style.',
      },
      {
        icon: 'phone',
        title: 'Free intro call',
        body: '20 minutes to meet your therapist before committing.',
      },
      {
        icon: 'calendar-event',
        title: 'Begin sessions',
        body: 'Weekly or fortnightly sessions together.',
      },
    ],
    expectPoints: [
      'Both partners heard equally — no one dominates',
      'Focused work on communication, trust, intimacy, conflict resolution',
      'Practical exercises to practise between sessions',
      'Occasional individual sessions alongside joint work, if helpful',
    ],
    approach:
      'Trained in Gottman Method, Emotionally Focused Therapy, and Imago Relationship Therapy, with deep understanding of Indian couple dynamics — including arranged versus love marriage pressures and family expectations.',
    faqs: [
      {
        question: 'What if my partner is reluctant to come?',
        answer:
          'Very common — we often start with one partner and create space for the other to join when ready.',
      },
      {
        question: 'Is this only for married couples?',
        answer: 'No, we work with couples at any stage, including separation.',
      },
      {
        question: 'Do you work with same-sex couples?',
        answer: 'Yes, iSpeak is fully inclusive.',
      },
    ],
    ctaText: 'Book couples session',
    imageUrl: '/images/couple-counselling.jpg',
    imageCaption: 'Couple counselling',
  },
  {
    id: 'adolescent-counselling',
    tagLabel: 'ADOLESCENT · TEEN SUPPORT',
    tagBg: '#E6F2F2',
    tagColor: '#085041',
    accentColor: '#2D6B6B',
    headline: 'Teenagers carry more than most adults realise.',
    intro:
      'A confidential, non-judgmental space for young people aged 13 to 21 navigating identity, peer pressure, academics, and family dynamics — led by therapists who understand growing up in India today.',
    whoPoints: [
      'Your teen seems persistently sad, withdrawn, or irritable',
      'Academic performance has dropped or school refusal has begun',
      'Signs of anxiety, worry, sleep issues, or avoidance',
      'Significant conflict at home with broken communication',
      'Struggles with identity, gender, sexuality, belonging, or bullying',
    ],
    steps: [
      {
        icon: 'message-2',
        title: 'Parent or teen reaches out',
        body: 'Either can begin — we respond within 24 hours.',
      },
      {
        icon: 'users',
        title: 'Match with a specialist',
        body: 'A therapist who understands adolescent mental health.',
      },
      {
        icon: 'phone',
        title: 'Free intro call',
        body: 'The teen gets space to speak freely.',
      },
      {
        icon: 'calendar-event',
        title: 'Begin sessions',
        body: 'Weekly, with appropriate parental updates.',
      },
    ],
    expectPoints: [
      "50-minute sessions paced to the teen's comfort",
      'Age-appropriate language, no clinical jargon',
      'Confidentiality explained clearly from the start',
      'Creative tools — journaling, scenario work, mindfulness',
    ],
    approach:
      'Trained in CBT for teens, DBT skills, mindfulness, and solution-focused therapy, with deep familiarity with JEE and board exam stress and Indian school social dynamics.',
    faqs: [
      {
        question: 'My teenager refuses to come. What do I do?',
        answer:
          'Very common — start with a 15-minute informal intro call. Many agree once the pressure is removed.',
      },
      {
        question: 'Will you tell my parents everything?',
        answer:
          'No, only if there is a serious, immediate safety concern — and we always tell the teen first.',
      },
      {
        question: 'Do you address exam stress specifically?',
        answer: 'Yes, this is one of the most common reasons teens reach out to us.',
      },
    ],
    ctaText: 'Book session for your teen',
    imageUrl: '/images/adolescent-counselling.jpg',
    imageCaption: 'Adolescent counselling',
  },
  {
    id: 'family-counselling',
    tagLabel: 'FAMILY · WHOLE-FAMILY SUPPORT',
    tagBg: '#FBEAF0',
    tagColor: '#72243E',
    accentColor: '#C4607A',
    headline: 'Families heal together.',
    intro:
      'No individual exists in isolation. When there is conflict or disconnection, the whole system benefits from support — not just one person. We work with nuclear, joint, and blended families.',
    whoPoints: [
      'Ongoing, unresolvable conflict between parents and children',
      "A family member's mental health struggle affecting the household",
      'Navigating death or major loss together',
      'Divorce or separation impacting children',
      'Tension in a joint family system across generations',
    ],
    steps: [
      {
        icon: 'home-2',
        title: 'Reach out',
        body: 'One family member begins — we help decide who else to involve.',
      },
      {
        icon: 'users',
        title: 'Initial assessment',
        body: 'Individual or joint meetings to understand perspectives first.',
      },
      {
        icon: 'phone',
        title: 'Joint sessions begin',
        body: 'The therapist facilitates — no one is blamed.',
      },
      {
        icon: 'calendar-event',
        title: 'Individual support alongside',
        body: 'Offered where needed, in parallel.',
      },
    ],
    expectPoints: [
      'A neutral therapist — no one is the villain, everyone is heard',
      'Focus on patterns and systems, not blame',
      'Practical communication tools practised within sessions',
      'Children engaged at age-appropriate levels',
    ],
    approach:
      'Trained in Systemic, Structural, and Narrative Family Therapy, with deep familiarity with Indian joint family dynamics, intergenerational expectations, and caregiver roles.',
    faqs: [
      {
        question: 'Does everyone have to attend?',
        answer:
          'Not necessarily — we assess together who needs to be involved, and can add members over time.',
      },
      {
        question: 'Will the therapist take sides?',
        answer: 'No, our therapists hold a neutral position throughout.',
      },
      {
        question: 'Do you work with joint families?',
        answer: 'Yes, including in-law relationships and intergenerational conflict.',
      },
    ],
    ctaText: 'Explore family counselling',
    imageUrl: '/images/family-counselling.jpg',
    imageCaption: 'Family counselling',
  },
];

export default function Services() {
  const location = useLocation();
  const navigate = useNavigate();

  const getInitialId = () => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (subnavItems.some(item => item.id === id)) return id;
    }
    return subnavItems[0].id;
  };

  const [activeId, setActiveId] = useState(getInitialId);

  // Sync URL hash and scroll to top when tab changes
  useEffect(() => {
    navigate(`/services#${activeId}`, { replace: true });
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeId, navigate]);

  const activeIndex = sections.findIndex(s => s.id === activeId);
  const activeSection = sections[activeIndex] ?? sections[0];

  const goToIndex = (i: number) => {
    if (i >= 0 && i < sections.length) {
      setActiveId(sections[i].id);
    }
  };

  return (
    <div>
      <PageIntro
        eyebrow="OUR SERVICES"
        headline="Care for every relationship in your life"
        subtext="From the relationship with yourself to the people you love most, explore the support that fits where you are right now."
      />
      <SubNav items={subnavItems} activeId={activeId} onChange={setActiveId} />

      {activeSection && (
        <ServiceDetailSection
          key={activeSection.id}
          index={activeIndex}
          {...activeSection}
          onPrev={activeIndex > 0 ? () => goToIndex(activeIndex - 1) : undefined}
          onNext={activeIndex < sections.length - 1 ? () => goToIndex(activeIndex + 1) : undefined}
          prevLabel={activeIndex > 0 ? subnavItems[activeIndex - 1].label : undefined}
          nextLabel={activeIndex < sections.length - 1 ? subnavItems[activeIndex + 1].label : undefined}
        />
      )}
    </div>
  );
}
