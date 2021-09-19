class FetchRequest {
  static async getAllPosts(limit = 10, page = 1) {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?limit=${limit}&page=${page}`
    );
    // const {data: {movies}} = await response.json()
    const res = response.json();
    return res;
  }
  static async getPostsbyName(name, page) {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?query_term=${name}&page=${page}`
    );
    // const {data: {movies}} = await response.json()
    const res = response.json();
    return res;
  }
}

export { FetchRequest };
