import { MealDetailsPage } from "../../../components/pageComponents/meal";

export default function Page({ params }) {
    return (
        <MealDetailsPage slug={params.mealSlug}/>
    );
}