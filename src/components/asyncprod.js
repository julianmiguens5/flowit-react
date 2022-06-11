const products = [
    {
        id: '1',
        name: 'WATERROWER NATURAL S4 SERIES',
        price: '$ 15000',
        category: 'cardio',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/491/999/products/natural-11-95ba26dd6fe50b475c16092699982897-640-0.jpg',
        stock: 10,
        description: 'Simulador de remo con resistencia por agua. Sistema WaterFlywheel simula al máximo posible la experiencia del remo real'
    },
    {
        id: '2',
        name: 'AbSolo®',
        price: '$ 12000',
        category: 'musculacion',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/491/999/products/ab1-f212f7666affa14a3616267069599116-640-0.jpg',
        stock: 10,
        description: 'El AbSolo es una máquina de ejercicios abdominales divertida y efectiva que mantiene a los usuarios entusiasmados con el trabajo de su abdomen.'
    },
    {
        id: '3',
        name: 'POWER KETTLEBELL PVC',
        price: '$ 2000',
        category: 'peso libre',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/491/999/products/ket-pvc-11-f1e941daf6e9ea913216076315525705-640-0.jpg',
        stock: 10,
        description: 'Pesa rusa recubierta en PVC'
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 700)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 700)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 700)
    })
}