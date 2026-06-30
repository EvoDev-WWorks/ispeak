import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageIntro from '../components/sections/PageIntro';
import SubNav from '../components/sections/SubNav';
import ServiceDetailSection from '../components/sections/ServiceDetailSection';

const subnavItems = [
  { id: 'corporate-wellness', label: 'Corporate' },
  { id: 'school-wellness', label: 'School' },
  { id: 'college-ngo-partnerships', label: 'College & NGO' },
  { id: 'exam-aspirants', label: 'Exam Aspirants' },
];

const sections = [
  {
    id: 'corporate-wellness',
    tagLabel: 'CORPORATE · FOR ORGANISATIONS',
    tagBg: '#FAEEDA',
    tagColor: '#633806',
    accentColor: '#C4A882',
    headline: 'Healthy employees build better organisations.',
    intro:
      'The iSpeak Employee Assistance Programme gives employees access to counselling, crisis support, workshops, and wellness resources at no cost to them — with real-time anonymised analytics for HR.',
    whoPoints: [
      'Rising absenteeism, attrition, or presenteeism across teams',
      'Engagement surveys signalling stress and burnout at scale',
      'You want a meaningful, differentiated benefit that employees actually use',
      'Organisation going through restructuring or rapid growth',
      'You want culturally appropriate mental health support for an Indian workforce',
    ],
    steps: [
      {
        icon: 'users',
        title: 'Discovery call',
        body: 'We learn about your organisation, workforce, and goals.',
      },
      {
        icon: 'file-text',
        title: 'Custom proposal',
        body: 'Tailored EAP design based on size, needs, and budget.',
      },
      {
        icon: 'rocket',
        title: 'Onboarding',
        body: 'Communication campaign and platform setup, handled by us.',
      },
      {
        icon: 'chart-bar',
        title: 'Ongoing reporting',
        body: 'Quarterly anonymised analytics for HR and leadership.',
      },
    ],
    expectPoints: [
      'Unlimited confidential counselling for employees and their families',
      '24/7 crisis support helpline',
      'Monthly mental health workshops for teams',
      'Manager training on mental health awareness and response',
      'Quarterly anonymised analytics reports for HR',
    ],
    approach:
      'Designed for the Indian workplace — where stigma is real, hierarchy shapes dynamics, and employees often support joint families. Culturally relevant, not generic Western content.',
    faqs: [
      {
        question: 'Is the EAP fully confidential for employees?',
        answer:
          'Yes. All individual counselling is strictly confidential. HR and leadership only receive aggregated, anonymised data — never individual usage.',
      },
      {
        question: 'Is there a minimum organisation size?',
        answer:
          'We work with organisations of all sizes, from 50-person startups to large enterprises. Pricing scales accordingly.',
      },
      {
        question: 'How is pricing structured?',
        answer:
          'Typically per employee per month, with different tiers based on usage caps and service levels. We share a detailed proposal after the discovery call.',
      },
    ],
    ctaText: 'Contact for packages',
    imageUrl: '/images/corporate-wellness.jpg',
    imageCaption: 'Corporate wellness',
  },
  {
    id: 'school-wellness',
    tagLabel: 'SCHOOL · FOR SCHOOLS',
    tagBg: '#EAF3DE',
    tagColor: '#27500A',
    accentColor: '#5FA080',
    headline: 'Mental health education begins in school.',
    intro:
      'A comprehensive mental health initiative for schools across India, working with leadership, teachers, counsellors, students, and parents to build a culture of support.',
    whoPoints: [
      'Your school wants to go beyond academics and build holistic wellbeing',
      'Teachers are struggling to manage student distress in the classroom',
      'Your school counsellor needs training, supervision, or capacity support',
      'Rising incidents of bullying, anxiety, or student distress',
      'You want to align with NEP 2020 mental health and wellbeing guidelines',
    ],
    steps: [
      {
        icon: 'school',
        title: 'School discovery call',
        body: 'We map your current mental health ecosystem and gaps.',
      },
      {
        icon: 'clipboard-text',
        title: 'Programme design',
        body: 'A custom plan across students, teachers, and parents.',
      },
      {
        icon: 'users',
        title: 'Launch and orientation',
        body: 'Full onboarding for staff, students, and parents.',
      },
      {
        icon: 'chart-bar',
        title: 'Ongoing review',
        body: 'Regular check-ins and impact measurement.',
      },
    ],
    expectPoints: [
      'Grade-wise mental health workshops for students',
      'Teacher training on recognising and responding to distress',
      'Counsellor supervision and skill-building support',
      'Parent workshops on adolescent mental health',
      'Individual counselling access for students who need it',
    ],
    approach:
      'Designed within the Indian educational context — board exam pressure, coaching culture, and the gap between what students feel and what they are allowed to express.',
    faqs: [
      {
        question: 'Do you work with government schools?',
        answer:
          'Yes. We have flexible models for both government and private schools, including subsidised programmes for schools with budget constraints.',
      },
      {
        question: 'What happens during a mental health crisis at school?',
        answer:
          'We train staff on crisis protocols and provide direct access to our clinical team for urgent support during school hours.',
      },
      {
        question: 'How much does it cost?',
        answer:
          'Pricing depends on school size, programme scope, and duration. We share a detailed proposal after an initial discovery call.',
      },
    ],
    ctaText: 'Enquire for schools',
    imageUrl: '/images/school-wellness.jpg',
    imageCaption: 'School wellness',
  },
  {
    id: 'college-ngo-partnerships',
    tagLabel: 'COMMUNITY · COLLEGES & NGOs',
    tagBg: '#EEEEF8',
    tagColor: '#3C3489',
    accentColor: '#7B7FB5',
    headline: 'Mental health at the scale of community.',
    intro:
      'We partner with colleges, universities, and NGOs to bring mental health support to larger communities — students navigating early adulthood, and populations served by non-profits.',
    whoPoints: [
      'Your college wants to set up or strengthen a student counselling cell',
      'Your NGO works with communities facing access gaps in mental health care',
      'You need trained facilitators for awareness drives and sensitisation',
      'You want to build sustainable in-house mental health capacity',
      'You are looking for a partner who understands ground realities',
    ],
    steps: [
      {
        icon: 'users',
        title: 'Partnership discovery call',
        body: 'We understand your context, community, and goals.',
      },
      {
        icon: 'clipboard-text',
        title: 'Programme design',
        body: 'Co-created to fit your institution and beneficiaries.',
      },
      {
        icon: 'school',
        title: 'Capacity building',
        body: 'Training for in-house staff, counsellors, or volunteers.',
      },
      {
        icon: 'refresh',
        title: 'Ongoing partnership',
        body: 'Regular reviews, supervision, and programme iteration.',
      },
    ],
    expectPoints: [
      'On-campus or on-ground counselling access for your community',
      'Group workshops and mental health awareness sessions',
      'Training and supervision for counsellors or volunteers',
      'Multi-language delivery available',
      'Impact reporting aligned with your grant or institutional requirements',
    ],
    approach:
      'We meet institutions and communities where they are — recognising that a college counselling cell and a rural NGO outreach programme need different formats, but with the same clinical rigour underneath.',
    faqs: [
      {
        question: 'Can you work within non-profit budgets?',
        answer:
          'Yes. We have a dedicated social impact pricing model for NGOs and educational institutions with limited budgets. Reach out to discuss.',
      },
      {
        question: 'Can you train our own staff to deliver programmes?',
        answer:
          'Yes, capacity building is a core part of what we offer — so your team can deliver sustainably with our ongoing supervision.',
      },
      {
        question: 'What languages do you deliver in?',
        answer:
          'English, Hindi, and select regional languages depending on availability in your area. We can discuss specific language needs.',
      },
    ],
    ctaText: 'Start a partnership',
    imageUrl: '/images/college-ngo-partnerships.jpg',
    imageCaption: 'College & NGO partnerships',
  },
  {
    id: 'exam-aspirants',
    tagLabel: 'STUDENTS · EXAM ASPIRANTS',
    tagBg: '#FCEEE9',
    tagColor: '#712B13',
    accentColor: '#E8705A',
    headline: 'The pressure is real. So is the support.',
    intro:
      'Focused support for students preparing for JEE, NEET, UPSC, and other competitive exams — navigating anxiety, burnout, and the emotional weight of high-stakes preparation.',
    whoPoints: [
      'Constant anxiety about exam performance affecting your daily life',
      'Preparation feels impossible to sustain mentally, week after week',
      'Burnout, low motivation, or a loss of interest you cannot explain',
      'Family or self-imposed expectations that feel crushing',
      'A previous attempt did not go as planned and you need to rebuild',
    ],
    steps: [
      {
        icon: 'message-2',
        title: 'Reach out',
        body: 'Fill a short form or WhatsApp us — no long waits.',
      },
      {
        icon: 'users',
        title: 'Get matched',
        body: 'A therapist who understands exam culture and stress.',
      },
      {
        icon: 'phone',
        title: 'Free intro call',
        body: '20 minutes to see if the fit feels right.',
      },
      {
        icon: 'calendar-event',
        title: 'Begin sessions',
        body: 'Flexible timing designed around your preparation.',
      },
    ],
    expectPoints: [
      'Practical anxiety and stress management techniques you can use immediately',
      'Tools for building sustainable, burnout-proof study routines',
      'A space to process pressure and setbacks without judgement',
      'Support for coping with results — good or difficult',
      'Flexible session timing that works around your preparation schedule',
    ],
    approach:
      'Our therapists understand the specific culture of Indian competitive exams — coaching centre pressure, family expectations, and the high emotional stakes attached to outcomes.',
    faqs: [
      {
        question: 'Will this take time away from my preparation?',
        answer:
          'Sessions are typically 50 minutes, once a week or fortnightly. Most students find they study better and more sustainably after starting therapy.',
      },
      {
        question: 'Can you help after a failed attempt?',
        answer:
          'Yes. This is one of the most important times to have support — processing disappointment, rebuilding motivation, and planning the next step.',
      },
      {
        question: 'Can younger students (under 18) use this service?',
        answer:
          'Yes, with parental awareness. We work with exam aspirants from Class 9 onwards.',
      },
    ],
    ctaText: 'Get exam support',
    imageUrl: '/images/exam-aspirants.jpg',
    imageCaption: 'Exam aspirant support',
  },
];

export default function Programs() {
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
    navigate(`/programs#${activeId}`, { replace: true });
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
        eyebrow="OUR PROGRAMS"
        headline="Wellness built for where you are"
        subtext="From offices to classrooms to exam halls, iSpeak designs mental health programmes for the spaces where India works, learns, and grows."
        icon="ti-building"
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
