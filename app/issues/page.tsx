import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <main className="flex flex-row justify-between">
      <div>
        <Button className="w-40" variant="classic" color="indigo" size="2">
          <Link href="/issues/new/"> Add An Issue</Link>
        </Button>
      </div>
    </main>
  );
};

export default IssuesPage;
