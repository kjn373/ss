export const useBreadCrumbPath = (route: string) => {
  const path = [
    {
      title: route.substring(1),
      link: route,
    },
  ]
  return path
}
