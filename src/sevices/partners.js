import api from '../server';

export async function getPartnersbyPage (page = 1) {
  try {
    const res = await api.get(`parceiros/?_page=${page}&_limit=6`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPartners () {
  try {
    const res = await api.get(`parceiros/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}