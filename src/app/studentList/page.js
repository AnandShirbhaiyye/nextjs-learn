import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentList/anand">Anand</Link>
        </li>
        <li>
          <Link href="/studentList/kajal">Kajal</Link>
        </li>
        <li>
          <Link href="/studentList/kanchan">Kanchan</Link>
        </li>
        <li>
          <Link href="/studentList/ujwal">Ujwal</Link>
        </li>
      </ul>
    </div>
  );
}
