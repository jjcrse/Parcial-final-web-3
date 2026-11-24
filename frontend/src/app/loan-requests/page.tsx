import Link from "next/link";
import { apiFetch } from "../../lib/api";
import type { LoanRequest , Tool } from "../../lib/loan-types";

type LoanRequestsPageProps = { searchParams: Promise<{ toolId?: string }> };

export default async function LoanRequestsPage({ searchParams }: LoanRequestsPageProps) {
  // Esta consulta solo prepara las opciones que se necesitan para el selector del filtro.
  const toolsResponse = await apiFetch("/tools");
  const tools: Tool[] = toolsResponse.ok ? await toolsResponse.json() : [];

  // TODO FRONT-A: leer searchParams y consultar las solicitudes con apiFetch.
  // TODO FRONT-A: agregar el formulario GET de filtro usando tools y la opción All tools.
  // TODO FRONT-A: mostrar las solicitudes y sus enlaces al comprobante correspondiente.

  const {toolId} = await searchParams;


  const path = toolId ? '/loan-requests?toolId=${toolid}' : "/loan-requests";
  const response = await apiFetch(path);
  void searchParams;
  void tools;

  return (
    <main>
      <h1>Loan requests</h1>
      <Link className="button" href="/loan-requests/new">New request</Link>



      <form className="panel" method="get"></form>
      <label>
          <select name="toolId" >
            <option value= "">Todas las herramietnas</option>
            {tools.map((tool) =>(
              <option key={tool.id} value={tool.id}>{tool.name} </option>
            ))}
          </select>
      </label>
      <button type="submit">el fitlro </button>
      <section className="panel" aria-label="Loan requests">
        <p>Complete the request list and its filter.</p>
      </section>
    </main>
  );
}

// eso me dijo David G que no lo utilizara que pues no lo estaba utilizando