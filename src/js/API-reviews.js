import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://portfolio-js.b.goit.study/api',
});

export async function getReviews() {
  const { data } = await axios.get('/reviews');
  return data;
}
