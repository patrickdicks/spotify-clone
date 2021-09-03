export const setPageView = (pageView) => {
  return {
    type: "SET_PAGE_VIEW",
    pageView,
  };
};

export const setSelectedTrack = (selectedTrack) => {
  return {
    type: "SET_SELECTED_TRACK",
    selectedTrack,
  };
};
