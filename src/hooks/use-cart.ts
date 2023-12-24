import { toast } from "@/components/ui/use-toast"
import { ProductType } from "@/types"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface CartStore {
  items: ProductType[]
  addItem: (product: ProductType) => void
  removeItem: (productId: string) => void
  removeAll: () => void
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (product: ProductType) => {
        const { items: currentItems } = get()

        const itemExists = currentItems.find(({ id }) => id === product.id)

        if (itemExists) {
          toast({
            title: "Item already in cart",
            description: "Cart was't updated.",
            variant: "yellow",
          })
          return
        }

        set({ items: [...currentItems, product] })
        toast({
          title: "Chart updated",
          description: "Item added to cart.",
          variant: "green",
        })
      },
      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter(({ id }) => productId !== id),
        }))
        toast({
          title: "Chart updated",
          description: "Item was removed from cart.",
          variant: "green",
        })
      },
      removeAll: () => {
        set({ items: [] })
        toast({
          title: "Chart cleared",
          description: "All items were removed from cart.",
          variant: "green",
        })
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
