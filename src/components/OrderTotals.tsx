import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';



type OrderTotalsProps = {
    order: OrderItem[]
}

export default function OrderTotals({order}: OrderTotalsProps) {

    const subtotalAmount = useMemo(()=> order.reduce( (total, item)=>  total + (item.quantity * item.price), 0) ,[order])
    

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">$0</span>
                </p>
                <p>Total a Pagar: {''}
                    <span className="font-bold">$0</span>
                </p>
            </div>

            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" 
            >
                Guardar Orden
            </button>
        </>
    )
}