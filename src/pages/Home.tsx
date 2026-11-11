import { AlertTable } from "../components/AlertTable";

export function HomePage() {
  //  const { data: alerts, isPending } = useQuery(alertListOptions())


  return <>
    <h1>Hello Tenno!</h1>
    <AlertTable />
  </>
}
