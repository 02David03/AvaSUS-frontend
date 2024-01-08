import api from '../server';

export async function getTransparency () {
  try {
    const res = await api.get(`transparecia`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
