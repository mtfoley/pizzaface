/* eslint-disable no-param-reassign */
module.exports = function paginate(items, page = 1, pageLength = 10) {
  const maxPage = Math.ceil(items.length / pageLength);
  if (page < 1) page = 1;
  if (page > maxPage) page = maxPage;
  const startIndex = (page - 1) * pageLength;

  return {
    items: items.length > pageLength ? items.slice(startIndex, startIndex + pageLength) : items,
    page,
    maxPage,
    pageLength,
  };
};
