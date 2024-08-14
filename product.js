
const list = [
    {pno:1, pname: 'Americano', price:1500},
    {pno:2, pname: 'Latte', price:2500},
    {pno:3, pname: 'Ice Coffee', price:2000}
]

export const getList = () => list

export const findMenu = (pno) => list.find(item => item.pno === pno)