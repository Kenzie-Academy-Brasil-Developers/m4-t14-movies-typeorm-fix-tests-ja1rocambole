import { IObjPagination } from "../interfaces";
import { FindManyOptions } from "typeorm";

export const constructorPagination = (
  queryParms: any | null
): [FindManyOptions, IObjPagination] => {
  const { sort, order, perPage, page } = queryParms;

  let objPagination: IObjPagination = {
    sort: "id",
    order: "ASC",
    perPage: 5,
    page: 1,
  };

  if (sort === "price" || sort === "duration") {
    objPagination.sort = sort;
    if (order === "asc" || order === "desc") {
      objPagination.order = order.toUpperCase();
    }
  }

  if (perPage > 0 && perPage <= 5) {
    objPagination.perPage = Number(perPage);
  }
  if (page > 0) {
    objPagination.page = Number(page);
  }

  let objFind: FindManyOptions = {};

  if (objPagination.sort === "price") {
    objFind = {
      take: objPagination.perPage,
      skip: objPagination.perPage * (objPagination.page - 1),
      order: {
        price: objPagination.order,
      },
    };
  } else if (objPagination.sort === "duration") {
    objFind = {
      take: objPagination.perPage,
      skip: objPagination.perPage * (objPagination.page - 1),
      order: {
        duration: objPagination.order,
      },
    };
  } else {
    objFind = {
      take: objPagination.perPage,
      skip: objPagination.perPage * (objPagination.page - 1),
      order: {
        id: objPagination.order,
      },
    };
  }

  return [objFind, objPagination];
};
