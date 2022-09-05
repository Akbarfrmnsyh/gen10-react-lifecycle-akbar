import React from "react";

const isiAPI = [
    {
        nama : 'Nasi Goreng Spesial',
        harga : 15000
    },
    {
        nama : 'Mie Goreng Spesial',
        harga : 15000
    },
    {
        nama : 'Nasi Ayam Goreng',
        harga : 13000
    },
    {
        nama : 'Nasi Ayam Bakar',
        harga : 13000
    },
    {
        nama : 'Nasi Gurame Asam Pedas',
        harga : 35000
    },
    {
        nama : 'Nasi Udang Goreng Spesial',
        harga : 20000
    },
    {
        nama : 'Nasi Kebuli Arabian',
        harga : 25000
    },
    {
        nama : 'Nasi Orak Arik Sambel Matah',
        harga : 15000
    },

]

export default class lifecycleTugas extends React.Component {
    constructor () {
        super ()

        this.state = {
            menu : [],
            keranjang : [], 
        }
    }
    componentDidMount (){
        this.setState ({menu : isiAPI})
    }
    componentDidUpdate (prevProps, prevState){
        if (prevState.keranjang.lenght !== this.state.keranjang.length){
            let total = 0;

            for (const keranjang of this.state.keranjang) {
                total = total + keranjang.harga
            }

            this.setState({ totalHarga : total})
        }
    }
    addCart (menuyangDipilih){
        const keranjangIni = [...this.state.carts]
        keranjangIni.push(menuyangDipilih)
        this.setState({carts:keranjangIni})
    }
    deleteCart (menuIni){
        const isiKeranjang = [...this.state.carts]
        const index = isiKeranjang.indexOf(menuIni)
    
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
                        {this.state.menu.map((pesan) => (
                            <li>
                                {pesan.nama} |
                                Rp. {pesan.harga} |
                                
                                <button onClick={()=> this.addCart(pesan)}>
                                    Carts 
                                </button>
                            </li>
                        ))}
                    </ul>
    
                    <p> Carts </p>
    
                    <ul>
                        {this.state.keranjang.map((carts) =>
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
