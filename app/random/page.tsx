import { redirect } from 'next/navigation';
import { getRandomTerm } from '@/lib/data';

export default function RandomTermPage() {
  const randomTerm = getRandomTerm();
  redirect(`/term/${randomTerm.id}`);
}