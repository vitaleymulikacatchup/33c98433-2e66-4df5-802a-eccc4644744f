"use client";
import { redirect } from 'next/navigation';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import BentoMediaGallery from '@/components/bento/BentoMediaGallery/BentoMediaGallery';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import ProcessRoadmap from '@/components/sections/layouts/roadmap/ProcessRoadmap';
import { ButtonHoverDirectional } from '@/components/buttons/ButtonHoverDirectional/ButtonHoverDirectional';
import { TextboxStandard } from '@/components/textbox/TextboxStandard';
import { TextNumberCount } from '@/components/text/TextNumberCount';
import TextFillGradient from '@/components/text/TextFillGradient';

const mockData = {
  galleryItems: [
    { title: 'Project 1', image: '/images/placeholder1.avif' },
    { title: 'Project 2', image: '/images/placeholder2.avif' },
    { title: 'Project 3', image: '/images/placeholder3.avif' },
    { title: 'Project 4', image: '/images/placeholder4.avif' },
    { title: 'Project 5', image: '/images/placeholder5.avif' },
    { title: 'Project 6', image: '/images/placeholder6.avif' },
    { title: 'Project 7', image: '/images/placeholder7.avif' },
    { title: 'Project 8', image: '/images/placeholderwide1.jpg' }
  ],
};

export default function Home() {
  return (
    <>
      <BillboardHero title="Futuristic Photographer Portfolio" subtitle="Capture the essence of a new era with stunning visuals." />
      <SplitAbout heading="About Me" body="I am a photographer specializing in futuristic themes, capturing life with a unique perspective." />
      <BentoMediaGallery items={mockData.galleryItems} className="my-8" gridClassName="grid grid-cols-2 md:grid-cols-4 gap-4" />
      <TextBoxStandard title="Terms of Service" description="Please read our Terms of Service carefully to understand your rights and obligations." />
      <CentralFAQ items={[{ title: 'What is your photography style?', content: 'My style blends futuristic aesthetics with high contrast photography.' }, { title: 'How can I book a session?', content: 'You can contact me via the form below for booking inquiries.' }]} />
      <ProcessRoadmap items={[{ id: '1', title: 'Planning', description: 'Strategizing ideas and concepts.', image: '/images/placeholder1.avif', items: [{ icon: 'spark', text: 'Concept Development' }], reverse: false }, { id: '2', title: 'Shooting', description: 'Capturing vibrant visuals.', image: '/images/placeholder2.avif', items: [{ icon: 'camera', text: 'Photoshoot Sessions' }], reverse: true }]} className="my-8" />
      <ButtonHoverDirectional text="Get in Touch" onClick={() => { console.log('Button Clicked!'); }} className="mt-4" />
    </>
  );
}
