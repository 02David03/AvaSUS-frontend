import api from '../server';

export async function getThreeCoursers (sort='matriculados', order='asc') {
  try {
    const res = await api.get(`cursos/?_sort=${sort}&_order=${order}&_limit=3`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}