interface ServiceParamBuilderArgs {
  api: URL;
  params: URLSearchParams;
}

const serviceRouteParamBuilder = ({
  api,
  params,
}: ServiceParamBuilderArgs): string => {
  const route = `${api}?${params.toString()}`;
  return route;
};

export default serviceRouteParamBuilder;
