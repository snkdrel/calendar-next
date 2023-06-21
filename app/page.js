import Image from 'next/image';
import Calendar from '@/components/Calendar';
import List from '@/components/List';

export default function Home() {
  return (
    <main>
      <Calendar />
      <List />
    </main>
  )
}
