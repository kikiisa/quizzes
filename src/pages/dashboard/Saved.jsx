import { getSavedQuizzes } from "@/services/quizService";
import { Card, Table } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Saved() {
  const data = getSavedQuizzes();

  return (
    <Card className="shadow-none">
      <h5 className="text-2xl font-bold">Disimpan</h5>
      <div>
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Jenjang</Table.HeadCell>
            <Table.HeadCell>Materi</Table.HeadCell>
            <Table.HeadCell>Timestamp</Table.HeadCell>
            <Table.HeadCell>Aksi</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data && data.length > 0 ? data.map((quiz, idx) => (
              <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{quiz.quiz.level}</Table.Cell>
                <Table.Cell>{quiz.quiz.topics.join(', ')}</Table.Cell>
                <Table.Cell>
                  {new Date(quiz.id).toLocaleString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  })}
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/dashboard/quiz/${quiz.id}`} className="font-medium text-blue-500 underline dark:text-blue-500">
                    Detail
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))
              :
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell colSpan={4} className="text-center">Data tidak ditemukan</Table.Cell>
              </Table.Row>
            }
          </Table.Body>
        </Table>
      </div>
    </Card>
  );
};