import { Type } from "class-transformer";
import { IsOptional , IsIn } from "class-validator";


export class ListLoanRequestsDto {

  @IsOptional()

  
  // TODO BACK-A: agregar las validaciones del filtro opcional indicado en el enunciado.
  // La conversión de la consulta a número ya está preparada.
  @Type(() => Number)
  toolId?: number;
}

