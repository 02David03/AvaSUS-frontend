import api from '../server';

export async function getPartners (page = 1) {
  try {
    const res = await api.get(`parceiros/?_page=${page}&_limit=6`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}