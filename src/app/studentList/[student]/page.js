import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentList/1">Anand</Link>
        </li>
        <li>
          <Link href="/studentList/2">Kajal</Link>
        </li>
        <li>
          <Link href="/studentList/3">Kanchan</Link>
        </li>
        <li>
          <Link href="/studentList/4">Ujwal</Link>
        </li>
      </ul>
    </div>
  );
}
