"use server";

const fetchGitData = async () => {
  try {
    if (process.env.NODE_ENV !== "production") {
      let stars: number = 0;
      let forks: number = 0;
      return{stars, forks};
    }

    const response = await fetch(
      "https://api.github.com/repos/piraharish/next-portfolio"
    );
    const json = await response.json();

    const { stargazers_count, forks_count } = json;
    let stars: number = stargazers_count;
    let forks: number = forks_count;

    return { stars, forks };
  } catch (error) {
    console.error("Error fetching Hero data:", error);
    return null;
  }
};

export default fetchGitData;
