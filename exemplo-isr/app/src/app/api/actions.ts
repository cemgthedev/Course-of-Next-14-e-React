'use server';

// Função de cache que busca os usuários da API do GitHub
export const getUsers = async () => {
  const response =  await fetch('https://api.github.com/users', { next: { revalidate: 60 } })

  return response.json();
}