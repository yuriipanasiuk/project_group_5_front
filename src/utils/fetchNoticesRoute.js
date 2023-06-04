import {
  fetchNoticesByCategory,
  fetchFavoriteNotices,
  fetchOwnNotices,
} from 'redux/notices/operations';

export const fetchRoute = (commonParams, routeParams) => {
  const { page, search, limit, totalPages, dispatch, setSearchParams } =
    commonParams;
  const { path, controller } = routeParams;

  const currentSearchParams = search !== '' ? { search, page: 1 } : { page: 1 };
  const lastSearchParams =
    search !== '' ? { search, page: totalPages } : { page: totalPages };

  if (!page) return setSearchParams(currentSearchParams);
  dispatch(
    fetchNoticesByCategory({
      path,
      params: { page, limit, search },
      controller,
    })
  );
  if (totalPages === 0) return;
  if (page > totalPages) return setSearchParams(lastSearchParams);
};

export const fetchFavoriteRoute = (commonParams, routeParams) => {
  const { search, dispatch, setSearchParams } = commonParams;
  const { path, controller } = routeParams;
  setSearchParams(search ? { search } : {});

  dispatch(
    fetchFavoriteNotices({
      path,
      params: { search },
      controller,
    })
  );
};

export const fetchOwnRoute = (commonParams, routeParams) => {
  const { search, dispatch, setSearchParams } = commonParams;
  const { path, controller } = routeParams;
  setSearchParams(search ? { search } : {});

  dispatch(
    fetchOwnNotices({
      path,
      params: { search },
      controller,
    })
  );
};

export const searchParamsHandler = (page, search, setSearchParams) =>
  page
    ? setSearchParams(search !== '' ? { search, page } : { page })
    : setSearchParams(search !== '' ? { search } : {});
