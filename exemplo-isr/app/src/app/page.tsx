import { Suspense } from "react";
import { Users } from "./components/users";
export const revalidate = 10;

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Carregando usuários...</div>}>
          <Users />
      </Suspense>
    </main>
  );
}