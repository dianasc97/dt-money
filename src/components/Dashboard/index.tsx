import { Summary } from "../Summary";
import { Container } from "./styles";
import { TransactionTable } from '../TransactionTables'

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  )
}