"use client"

import { useCart } from "@/hooks/use-cart"
import { Currency } from "./currency"
import { Button } from "./ui/button"
import { useSearchParams } from "next/navigation"
import { useEffect, useMemo } from "react"
import axios from "axios"
import { toast } from "@/components/ui/use-toast"

type Props = {}

const API_URL = `${process.env.NEXT_PUBLIC_API_STORE_URL}/checkout`

export const Summary = (props: Props) => {
  const items = useCart((state) => state.items)
  const searchParams = useSearchParams()
  const removeAll = useCart((state) => state.removeAll)

  const totalPrice = useMemo(
    () => items.reduce((total, item) => total + Number(item.price), 0),
    [items]
  )

  const onCheckout = async () => {
    const response = await axios.post(API_URL, {
      productIds: items.map(({ id }) => id),
    })

    window.location = response.data.url
  }

  useEffect(() => {
    if (searchParams.has("success")) {
      toast({
        title: "Payment succeeded",
        description: "Payment completed.",
        variant: "green",
      })
      removeAll()
    }

    if (searchParams.has("cancel")) {
      toast({
        title: "Payment canceled",
        description: "Payment was canceled.",
        variant: "destructive",
      })
    }
  }, [searchParams, removeAll])

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency price={totalPrice} />
        </div>
      </div>

      <Button onClick={onCheckout} className="mt-6 w-full rounded-full">
        Checkout
      </Button>
    </div>
  )
}
