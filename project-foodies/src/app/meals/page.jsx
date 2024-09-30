import { Suspense } from "react";
import { MealsPage } from "../../components/pageComponents/meals";
import MealsLoadingPage from "./loading";

export default function Page() {
    return (
        <Suspense fallback={<MealsLoadingPage />}>
            <MealsPage />
        </Suspense>
    );
}