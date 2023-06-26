import Image from 'next/image';
import CalendarController from '@/components/CalendarController';
import ListController from '@/components/ListController';

export default function Home() {
  return (
    <main>
      <CalendarController />
      <ListController />
    </main>
  )
}
