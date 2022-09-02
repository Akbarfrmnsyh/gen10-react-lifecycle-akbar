import React from "react";

const listProduct = [

    {
        nama: 'Nasi Padang',
        harga: 15000
    },
    {
        nama: 'Nasi Goreng',
        harga: 12000
    },
    {
        nama: 'Nasi Ayam Bakar',
        harga: 12000
    },
    {
        nama: 'Nasi Soto',
        harga: 10000
    },
    {
        nama: 'Nasi Kebuli',
        harga: 25000
    },

]

class LifeCycle extends React.Component {
    constructor() {
        super()

        this.state = {
            products: [],
            carts: []
        }
    }

    componentDidMount (){
        this.setState({ products: listProduct})
    }

    componentDidUpdate (prevProps, prevState){
        if (prevState.carts.length !== this.state.carts.length) {

            let total = 0;

            for (const keranjang of this.state.carts) {
                total = total + keranjang.harga
            }

            this.setState({ totalHarga : total})
    }
}
addCart (produkYangDipilih){
    const keranjangIni = [...this.state.carts]
    keranjangIni.push(produkYangDipilih)
    this.setState({carts:keranjangIni})
}
deleteCart (produkini){
    const isiKeranjang = [...this.state.carts]
    const index = isiKeranjang.indexOf(produkini)

    if (index !== -1){
        isiKeranjang.splice(index,1)
        this.setState({carts:isiKeranjang})
    }
}

render (){
    return(
        <div>
                <p> Daftar Menu: </p>
                <ul>
                    {this.state.products.map((menu) => (
                        <li>
                            {menu.nama} |
                            Rp. {menu.harga} |
                            
                            <button onClick={()=> this.addCart(menu)}>
                                Keranjang 
                            </button>
                        </li>
                    ))}
                </ul>

                <p> Keranjang </p>

                <ul>
                    {this.state.carts.map((carts) =>
                    <li>
                        {carts.nama} |
                        Rp. {carts.harga} |

                        <button onClick={() => this.deleteCart(carts)}>
                            Delete
                        </button>
                    </li>
                    )}
                </ul>

                <p> Total: {this.state.totalHarga}</p>
            </div>
    )
}

}

export default LifeCycle