import { queryOptions } from "@tanstack/react-query";
import { alertKeys } from "./keys";
import { fetchAlerts } from "./api";

export const alertListOptions = () =>
  queryOptions({
    queryKey: alertKeys.list(),
    queryFn: () => fetchAlerts(),
    staleTime: 5 * 60_000
  })

