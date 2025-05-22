
// Sample rewards data - in a real app this would come from an API
export const rewardsData = [
  {
    id: 1,
    title: "Cupón 10% de descuento",
    description: "Válido para cualquier producto de la tienda",
    cost: 200,
    type: "coupon",
    stock: 100,
    expiryDate: "2025-12-31",
    isPopular: true
  },
  {
    id: 2,
    title: "Camiseta exclusiva 11contraonce",
    description: "Edición limitada, talla a elegir",
    cost: 750,
    type: "item",
    stock: 15,
    expiryDate: "2025-10-15",
    isPopular: true
  },
  {
    id: 3,
    title: "Entrada partido Liga",
    description: "Partido a escoger, sujeto a disponibilidad",
    cost: 1500,
    type: "item",
    stock: 5,
    expiryDate: "2025-06-30",
    isPopular: false
  },
  {
    id: 4,
    title: "Bufanda oficial",
    description: "Bufanda oficial del equipo",
    cost: 500,
    type: "item", 
    stock: 30,
    expiryDate: "2025-12-31",
    isPopular: false
  },
  {
    id: 5,
    title: "Cupón 20% de descuento",
    description: "Válido para productos seleccionados",
    cost: 350,
    type: "coupon",
    stock: 50,
    expiryDate: "2025-08-15",
    isPopular: true
  },
  {
    id: 6,
    title: "Balón firmado",
    description: "Con firmas de jugadores legendarios",
    cost: 3000,
    type: "item",
    stock: 3,
    expiryDate: "2025-07-30",
    isPopular: true
  }
];

// Sample user redemption history
export const userRewards = [
  {
    id: 1,
    rewardTitle: "Cupón 10% de descuento",
    date: "2025-04-15",
    pointsCost: 200,
    couponCode: "HINCHADESC10",
    status: "Canjeado"
  },
  {
    id: 2,
    rewardTitle: "Llavero 11contraonce",
    date: "2025-03-21",
    pointsCost: 150,
    status: "Enviado",
    trackingCode: "TRK123456789"
  }
];

// User Levels configuration
export const userLevels = [
  { id: 1, name: "Aficionado", minPoints: 0, maxPoints: 499 },
  { id: 2, name: "Titular", minPoints: 500, maxPoints: 1499 },
  { id: 3, name: "Capitán", minPoints: 1500, maxPoints: 3499 },
  { id: 4, name: "Leyenda", minPoints: 3500, maxPoints: null }
];
