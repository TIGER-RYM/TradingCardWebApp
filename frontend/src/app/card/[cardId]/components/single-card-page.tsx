"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, ShoppingCart, ArrowLeft, Star } from "lucide-react"
import { useRouter } from "next/navigation"

// This would typically come from an API or database
const cardData = {
  id: 1,
  name: "Charizard",
  type: "Fire",
  rarity: "Rare Holo",
  set: "Base Set",
  number: "4/102",
  artist: "Mitsuhiro Arita",
  releaseDate: "1999-01-09",
  price: 500,
  condition: "Near Mint",
  description: "Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, raised nostrils, and two horn-like structures protruding from the back of its rectangular head.",
  abilities: [
    { name: "Blaze", description: "Powers up Fire-type moves when the Pokémon's HP is low." },
    { name: "Solar Power", description: "Boosts the Special Attack stat in harsh sunlight, but HP decreases every turn." }
  ],
  attacks: [
    { name: "Fire Spin", damage: "100", description: "Discard 2 Energy cards attached to this Pokémon in order to use this attack." }
  ],
  weaknesses: ["Water"],
  resistances: ["Fighting"],
  retreatCost: 3
}

export function CardInfo() {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <Button variant="ghost" className="mb-4" onClick={() => router.replace("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all cards
        </Button>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardContent className="p-4">
                <img
                  src="/placeholder.svg?height=600&width=400&text=Charizard"
                  alt={cardData.name}
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl font-bold">{cardData.name}</CardTitle>
                    <CardDescription>{cardData.set} - {cardData.number}</CardDescription>
                  </div>
                  <Badge variant="secondary">{cardData.rarity}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">${cardData.price}</span>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
                      <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
                      <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
                      <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
                      <Star className="text-gray-300 w-5 h-5" />
                      <span className="ml-2 text-sm text-gray-600">(4.0)</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <Button className="flex-1">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                    <Button
                      variant={isInWishlist ? "secondary" : "outline"}
                      onClick={() => setIsInWishlist(!isInWishlist)}
                    >
                      <Heart className={`mr-2 h-4 w-4 ${isInWishlist ? "fill-current" : ""}`} />
                      {isInWishlist ? "In Wishlist" : "Add to Wishlist"}
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <p><strong>Condition:</strong> {cardData.condition}</p>
                    <p><strong>Type:</strong> {cardData.type}</p>
                    <p><strong>Artist:</strong> {cardData.artist}</p>
                    <p><strong>Release Date:</strong> {cardData.releaseDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-8">
              <CardContent className="p-0">
                <Tabs defaultValue="description">
                  <TabsList className="w-full">
                    <TabsTrigger value="description" className="flex-1">Description</TabsTrigger>
                    <TabsTrigger value="abilities" className="flex-1">Abilities</TabsTrigger>
                    <TabsTrigger value="attacks" className="flex-1">Attacks</TabsTrigger>
                  </TabsList>
                  <div className="p-4">
                    <TabsContent value="description">
                      <p>{cardData.description}</p>
                    </TabsContent>
                    <TabsContent value="abilities">
                      <ul className="list-disc pl-5 space-y-2">
                        {cardData.abilities.map((ability, index) => (
                          <li key={index}>
                            <strong>{ability.name}:</strong> {ability.description}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="attacks">
                      <ul className="list-disc pl-5 space-y-2">
                        {cardData.attacks.map((attack, index) => (
                          <li key={index}>
                            <strong>{attack.name}</strong> - Damage: {attack.damage}
                            <p>{attack.description}</p>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Weaknesses:</strong> {cardData.weaknesses.join(", ")}</p>
                  <p><strong>Resistances:</strong> {cardData.resistances.join(", ")}</p>
                  <p><strong>Retreat Cost:</strong> {cardData.retreatCost}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}