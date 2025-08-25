export const scrollToTop = (isWindow?: boolean) => {
  const getHomeLayout = isWindow
    ? window
    : document?.querySelector('.route-layout-container')

  getHomeLayout?.scroll({
    behavior: 'smooth',
    top: 0,
  })
}
