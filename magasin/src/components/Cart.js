import '../Style/Cart.css'


function Cart() {
    const mprice = 8
    const lprice = 10
    const bprice = 15
    const total = mprice + lprice + bprice
    return (
    <div className='img-Cart'>
        <h2>Pannier</h2>
        <ul>
            <li>Monterra : { mprice }$</li>
            <li>Lierre : { lprice }$</li>
            <li>Bouquet : { bprice }$</li>
        </ul>
        Total = {total}$
    </div>)
}
export default Cart 