import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/1">Anand</Link>
        </li>
        <li>
          <Link href="/2">Kajal</Link>
        </li>
        <li>
          <Link href="/3">Kanchan</Link>
        </li>
        <li>
          <Link href="/4">Ujwal</Link>
        </li>
      </ul>
    </div>
  );
}
