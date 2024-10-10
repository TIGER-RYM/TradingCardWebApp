"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


// Placeholder data for trading cards
const tradingCards = [
  { id: 1, name: "Charizard", type: "Fire", rarity: "Rare", price: 150 },
  { id: 2, name: "Pikachu", type: "Electric", rarity: "Common", price: 20 },
  { id: 3, name: "Mewtwo", type: "Psychic", rarity: "Legendary", price: 200 },
  { id: 4, name: "Blastoise", type: "Water", rarity: "Rare", price: 100 },
  { id: 5, name: "Venusaur", type: "Grass", rarity: "Rare", price: 100 },
  { id: 6, name: "Gyarados", type: "Water", rarity: "Rare", price: 80 },
]
export default function Home() {

  const [cartItems, setCartItems] = useState(0)
  const router = useRouter();

  return (
<div>
    {/* Hero Section */}
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Card Traders</h2>
        <p className="text-xl mb-8">Buy, sell, and trade your favorite collectible cards!</p>
        <Button size="lg" className="bg-white text-black hover:bg-gray-100">
          Start Trading Now
        </Button>
      </div>
    </section>

    {/* Card Grid */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8">Featured Cards</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tradingCards.map((card) => (
            
            <Link href={`/card/${card.id}`} key={card.id} >
              <Card key={card.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <img
                    src={`https://g-dkgtxxz98ku.vusercontent.net/placeholder.svg?height=200&width=300&text=${card.name}`}
                    alt={card.name}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>{card.name}</CardTitle>
                  <p className="text-sm text-gray-600">{card.type} - {card.rarity}</p>
                </CardContent>
                <CardFooter className="p-4 flex justify-between items-center">
                  <span className="font-bold">${card.price}</span>
                  {/*  */}
                  <Button variant="outline" onClick={(e) => {e.preventDefault(); setCartItems(prev => prev + 1); alert("Added to cart")}}>Add to Cart</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
}
