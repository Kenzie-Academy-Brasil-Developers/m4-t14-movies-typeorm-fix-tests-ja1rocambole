import { IMovie, IObjPagination } from "../interfaces";

export const constructorObjReturn = (
  data: [IMovie[], number],
  objPagination: IObjPagination
) => {
  const [movies, count] = data;
  const { sort, order, perPage, page } = objPagination;

  const prevPage = `http://localhost:3000/movies?page=${
    page - 1
  }&perPage=${perPage}`;
  const nextPage = `http://localhost:3000/movies?page=${
    page + 1
  }&perPage=${perPage}`;

  const objReturn = {
    prevPage: page > 1 ? prevPage : null,
    nextPage: perPage * page < count ? nextPage : null,
    count: count,
    data: movies,
  };

  return objReturn;
};
