import Link from 'next/link';

import { getMeals } from '../../../lib/meals';

import { Suspense } from 'react';
import MealsGrid from '../../structures/meals/meals-grid';
import { MealsLoadingPage } from './loading-out';
import classes from './page.module.css';

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}