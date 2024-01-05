import api from '../server';

export async function getThreeCoursers(sort='matriculados', order='desc') {
  try {
    const res = await api.get(`cursos/?_sort=${sort}&_order=${order}&_limit=3`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCoursers(category='Todos', limit='', page='') {
  try {
    const res = await api.get(`cursos/?_page=${page}&_limit=${limit}${category !== 'Todos' ? `&cateroria=${category}` : ''}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategories() {
  try {
    const categories = []
    const res = await api.get(`cursos`);
    res.data.forEach(course => {
      if(!categories.includes(course.cateroria)) {
        categories.push(course.cateroria);
      }
    });
    return categories;
  } catch (error) {
    console.log(error);
  }
}

export async function getCourseById(id) {
  try {
    const res = await api.get(`cursos/?id=${id}`);
    return res.data[0];
  } catch (error) {
    console.log(error);
  }
}